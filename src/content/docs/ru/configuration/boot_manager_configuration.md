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

## Узнать больше

- [Страница руководства loader.conf](https://man.archlinux.org/man/loader.conf.5)
- [rEFInd: Настройка Boot менеджера](https://www.rodsbooks.com/refind/configfile.html)
- [Руководство GRUB: Конфигурация](https://www.gnu.org/software/grub/manual/grub/grub.html#Configuration)
