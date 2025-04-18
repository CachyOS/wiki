---
title: Конфигурация Boot менеджера
description: Настройка параметров Boot менеджера и передача параметров ядра в командную строку
---

## systemd-boot

systemd-boot имеет два типа файлов конфигурации: один для самого systemd-boot в `/boot/loader/loader.conf` и один для каждой
отдельной записи ядра в `/boot/loader/entry`.

### Конфигурация загрузчика

В этом файле конфигурации вы можете изменить запись по умолчанию и время ожидания systemd-boot.

```shell
# /boot/loader/loader.conf

default @saved
timeout 5
#console-mode keep # Эта опция настраивает разрешение консоли.
```

### Конфигурация командной строки ядра

Мы предоставляем инструмент для упрощения настройки systemd-boot [`sdboot-manage`](https://github.com/CachyOS/CachyOS-PKGBUILDS/tree/master/systemd-boot-manager).
Одним из преимуществ этого инструмента является глобальная конфигурация командной строки ядра. Файл конфигурации для `sdboot-manage` находится в `/etc/sdboot-manage.conf`.
Отредактируйте строку `LINUX_OPTIONS=` в `/etc/sdboot-manage.conf`, чтобы изменить параметры ядра.

```shell
# /etc/sdboot-manage.conf
LINUX_OPTIONS="zswap.enabled=0 nowatchdog quiet splash"
```

После внесения изменений перегенерируйте все записи systemd-boot с помощью следующей команды:

```shell
❯ sudo sdboot-manage gen
```

## rEFInd

Как и [systemd-boot](/ru/configuration/boot_manager_configuration#systemd-boot), rEFInd имеет два файла конфигурации. `refind.conf`, расположенный в
`boot/efi/EFI/refind`, в основном предназначен для изменения поведения rEFInd, а `/boot/refind_linux.conf` - для управления параметрами загрузки.
`refind.conf` содержит подробные комментарии, объясняющие все его параметры.

### Конфигурация командной строки ядра

Чтобы передать параметры ядра в командную строку, измените "Boot using default options" в `/boot/refind_linux.conf`.

```shell
# /boot/refind_linux.conf

"Boot using default options"     "root=PARTUUID=1cb353ec-7f03-4820-8b4b-03baf53a208f rw zswap.enabled=0 nowatchdog quiet splash"
```

Изменения в обоих файлах конфигурации вступят в силу немедленно. Запуск команды для "сохранения" изменений не требуется.

## GRUB

В отличие от [systemd-boot](/ru/configuration/boot_manager_configuration#systemd-boot) и [rEFInd](/ru/configuration/boot_manager_configuration#refind),
GRUB имеет только один файл конфигурации, расположенный в `/etc/default/grub`. В этом файле есть довольно хорошая документация, объясняющая, что
делает каждая опция.

### Скрытие меню загрузки GRUB

Чтобы скрыть меню GRUB, просто установите следующие параметры соответствующим образом.

```shell
# /etc/default/grub

GRUB_TIMEOUT='0'
GRUB_TIMEOUT_STYLE=hidden
```

Нажмите ESC, чтобы получить доступ к командной строке GRUB. Отсюда запустите `normal` или `exit`, чтобы вернуться к привычному меню загрузки GRUB.

### Конфигурация командной строки ядра

Чтобы передать параметры ядра в командную строку с помощью GRUB, нам нужно отредактировать `GRUB_CMDLINE_LINUX_DEFAULT` в `/etc/default/grub`.

```shell
# /etc/default/grub

GRUB_CMDLINE_LINUX_DEFAULT='nowatchdog zswap.enabled=0 quiet splash'
```

Каждый раз, когда мы изменяем файл конфигурации GRUB, нам нужно пересоздать конфигурацию с помощью следующей команды:

```shell
❯ sudo grub-mkconfig -o /boot/grub/grub.cfg
```

## Limine
Limine — это современный загрузчик, известный своей простой конфигурацией. Это руководство охватывает основы, которые помогут вам начать работу с ним.

Конфигурация в основном хранится в файле `/boot/limine.conf` (или иногда в системном разделе EFI) для настроек меню и в `/etc/default/limine` для параметров ядра.

### Конфигурация меню загрузки

Этот файл управляет поведением и внешним видом меню загрузки. Изменения, внесенные здесь, вступают в силу сразу после сохранения — никаких дополнительных команд не требуется.

* **Timeout:** Устанавливает, сколько секунд Limine ждет перед автоматической загрузкой пункта по умолчанию.
  ```shell
  # /boot/limine.conf

  timeout: 5
  ```
* **Default Entry:** Указывает, какой пункт меню будет выбран по умолчанию. Пункты нумеруются начиная с 1. Если не установлено, значение по умолчанию — 1.
  ```shell
  # /boot/limine.conf

  default_entry: 2 # Загружать второй пункт по умолчанию
  ```
  :::tip
  Если `default_entry` указывает на каталог (например, `/+CachyOS`), автозагрузка будет отключена. Чтобы автоматически загрузить пункт внутри каталога, `default_entry` должен указывать непосредственно на номер этого конкретного пункта.
  :::

**Пример (`/boot/limine.conf`):**

```shell
# /boot/limine.conf

timeout: 5
default_entry: 2 # Указывает непосредственно на пункт 'linux-cachyos' ниже

/+CachyOS        # Пункт 1: Каталог (используйте /+, чтобы развернуть по умолчанию)
//linux-cachyos  # Пункт 2: Фактический загрузочный пункт
    protocol: linux
    kernel_path: boot():/vmlinuz-linux-cachyos
    cmdline: quiet splash root=UUID=... rw # Основные параметры ядра
    module_path: boot():/initramfs-linux-cachyos.img
```

:::note
`boot():/` ссылается на корень загрузочного диска.
:::

### Оформление

Вы можете настроить внешний вид меню загрузки Limine:

* **Wallpaper:** Установить фоновое изображение. Поддерживаемые форматы: BMP, PNG и JPEG.
  ```shell
  # /boot/limine.conf

  wallpaper: boot():/splash.png
  wallpaper_style: stretched # Опции: 'stretched' (растянутое), 'tiled' (замощение), 'centered' (по центру)
  backdrop: 000000           # Цвет фона (шестнадцатеричный RRGGBB), если стиль 'centered'
  ```
* **Fonts:** Использовать [пользовательский файл шрифта](https://github.com/viler-int10h/vga-text-mode-fonts) и настроить его размер.
  ```shell
  # /boot/limine.conf

  term_font: boot():/custom_font.F16
  term_font_scale: 2x2 # Масштабирует размер шрифта, полезно для дисплеев с высоким разрешением
  ```
* **Colors:** Изменить цвета текста и фона терминала.
  ```shell
  # /boot/limine.conf

  term_background: 80000000 # Пример: Полупрозрачный черный (AARRGGBB)
  # Доступны другие опции цвета, такие как term_foreground и т.д.
  ```

### Конфигурация команд ядра

В CachyOS пункты ядра в меню загрузки Limine обрабатываются **автоматически**. Когда вы устанавливаете или удаляете ядра, `limine-mkinitcpio-hook` использует утилиту `limine-entry-tool` в фоновом режиме для обновления загрузочных записей.

Хотя пункты обрабатываются автоматически, вы можете **настроить параметры ядра** (также известные как командная строка ядра), которые передаются ядру при загрузке.

1.  **Отредактируйте файл конфигурации:** Измените переменные `KERNEL_CMDLINE` в `/etc/default/limine`. Вы можете установить параметры по умолчанию для всех ядер или специфические параметры для определенных имен ядер (например, `linux-cachyos`).
    ```shell
    # /etc/default/limine

    # Параметры по умолчанию для большинства ядер
    KERNEL_CMDLINE[default]="quiet splash rd.udev.log_priority=3"

    # Специфические параметры для ядра 'linux-cachyos'
    KERNEL_CMDLINE["linux-cachyos"]="quiet splash mitigations=off"

    # Параметры для резервных пунктов (если они генерируются)
    # KERNEL_CMDLINE[fallback]="..."
    ```
2.  **Примените изменения:** После сохранения `/etc/default/limine` вам необходимо перегенерировать образы initramfs и обновить записи Limine, чтобы использовать новые параметры ядра. Выполните следующую команду:
    ```bash
    sudo limine-mkinitcpio
    ```
    Эта команда запускает процесс `mkinitcpio`, который включает `limine-mkinitcpio-hook`, гарантируя, что ваши изменения для `/etc/default/limine` станут частью главного конфигурационного файла в `/boot/limine.conf`.

## Узнать больше

- [Страница руководства loader.conf](https://man.archlinux.org/man/loader.conf.5)
- [rEFInd: Настройка Boot менеджера](https://www.rodsbooks.com/refind/configfile.html)
- [Руководство GRUB: Конфигурация](https://www.gnu.org/software/grub/manual/grub/grub.html#Configuration)
- [Официальная документация по настройке Limine](https://github.com/limine-bootloader/limine/blob/v9.x/CONFIG.md)
- [Проект limine-entry-tool](https://gitlab.com/Zesko/limine-entry-tool)
