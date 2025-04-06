---
title: CachyOS chroot Helper
description: Вспомогательная утилита, упрощающая chroot в системы
---

[**`cachy-chroot`**](https://github.com/CachyOS/cachy-chroot) — это простая вспомогательная программа, упрощающая процесс chroot в существующую
CachyOS или любую установку на базе Arch. Она перечисляет все разделы, обнаруженные на компьютере, а также поддерживает перечисление подтомов BTRFS.
И последнее, но не менее важное: `cachy-chroot` также поддерживает зашифрованные системы через LUKS. Она сопоставит каждую запись `fstab` с соответствующей записью `crypttab`
и корректно закроет все тома LUKS при выходе из chroot.

## Использование

Процесс chroot **должен** выполняться на Live ISO. Ниже приведен пример использования `cachy-chroot` в установке CachyOS BTRFS.

```sh title="chroot с помощью cachy-chroot"
❯ sudo su # Войдите в систему как root-пользователь в Live ISO
❯ pacman -Sy cachy-chroot # Убедитесь, что cachy-chroot имеет последнюю версию
❯ cachy-chroot
Info: Найдено 3 блочных устройства
Info: Найден раздел: Partition: /dev/nvme0n1p1: FS: vfat UUID: EDA6-ED98
Info: Найден раздел: Partition: /dev/nvme0n1p2: FS: btrfs UUID: b09a027e-a61d-424f-858f-2e02be61b342
Info: Найден раздел: Partition: /dev/nvme0n1p4: FS: btrfs UUID: 66e84339-8c77-4131-afce-50ec2cf67a80
? Выберите блочное устройство для корневого раздела (используйте клавиши со стрелками):  ›
  Partition: /dev/nvme0n1p1: FS: vfat UUID: EDA6-ED98
❯ Partition: /dev/nvme0n1p2: FS: btrfs UUID: b09a027e-a61d-424f-858f-2e02be61b342
  Partition: /dev/nvme0n1p4: FS: btrfs UUID: 66e84339-8c77-4131-afce-50ec2cf67a80
✔ Выберите блочное устройство для корневого раздела (используйте клавиши со стрелками):  · Partition: /dev/nvme0n1p2: FS: btrfs UUID: b09a027e-a61d-424f-858f-2e02be61b342
Info: Выбран раздел BTRFS, монтируем и перечисляем подтома...
Info: Монтируем раздел /dev/nvme0n1p2 в /tmp/cachyos-chroot-temp-mount-b09a027e-a61d-424f-858f-2e02be61b342-hwAeIm с параметрами: []
Info: Размонтируем раздел в /tmp/cachyos-chroot-temp-mount-b09a027e-a61d-424f-858f-2e02be61b342-hwAeIm
? Хотите ли вы использовать предустановку CachyOS BTRFS для автоматического монтирования корневого подтома? (y/n) › # Введите y, если используете CachyOS
```

После выбора корневого раздела программа предложит смонтировать дополнительные разделы, например, раздел `/boot`.

```sh title="Монтирование дополнительных разделов"
✔ Хотите ли вы смонтировать дополнительные разделы? · yes
? Введите точку монтирования для дополнительного раздела (например, /boot), введите 'skip' для отмены:  › # /boot в systemd-boot, /boot/efi в GRUB и rEFInd
```

По завершении выйдите из среды chroot, передав `exit` в командную строку или нажав `CTRL+D` на клавиатуре.

```sh title="Выход из chroot"
exit
```

## Узнать больше

- [Arch Wiki - chroot](https://wiki.archlinux.org/title/Chroot)
