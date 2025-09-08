---
title: Помощник по chroot для CachyOS
description: Вспомогательная утилита для упрощения chroot в системы
---

[cachy-chroot](https://github.com/CachyOS/cachy-chroot) — это простая вспомогательная программа для облегчения процесса chroot в существующую
установку CachyOS или дистрибутива на базе Arch. Она выводит список всех обнаруженных разделов на машине, а также поддерживает отображение подразделов BTRFS.
И последнее, но не менее важное: `cachy-chroot` также поддерживает зашифрованные системы через LUKS. Утилита сопоставит каждую запись `fstab` с соответствующей записью в `crypttab`
и корректно закроет все тома LUKS при выходе из chroot.

## Использование

Процесс chroot **должен** выполняться из live-образа ISO. Ниже приведен пример использования `cachy-chroot` в установке CachyOS с BTRFS.

```sh title="chroot с помощью cachy-chroot"
sudo su # Войти под пользователем root в live-образе ISO
pacman -Sy cachy-chroot # Убедиться, что установлена последняя версия cachy-chroot
cachy-chroot
Info: Found 3 block devices
Info: Found partition: Partition: /dev/nvme0n1p1: FS: vfat UUID: EDA6-ED98
Info: Found partition: Partition: /dev/nvme0n1p2: FS: btrfs UUID: b09a027e-a61d-424f-858f-2e02be61b342
Info: Found partition: Partition: /dev/nvme0n1p4: FS: btrfs UUID: 66e84339-8c77-4131-afce-50ec2cf67a80
? Select the block device for the root partition (use arrow keys):  ›
  Partition: /dev/nvme0n1p1: FS: vfat UUID: EDA6-ED98
❯ Partition: /dev/nvme0n1p2: FS: btrfs UUID: b09a027e-a61d-424f-858f-2e02be61b342
  Partition: /dev/nvme0n1p4: FS: btrfs UUID: 66e84339-8c77-4131-afce-50ec2cf67a80
✔ Select the block device for the root partition (use arrow keys):  · Partition: /dev/nvme0n1p2: FS: btrfs UUID: b09a027e-a61d-424f-858f-2e02be61b342
Info: Selected BTRFS partition, mounting and listing subvolumes...
Info: Mounting partition /dev/nvme0n1p2 at /tmp/cachyos-chroot-temp-mount-b09a027e-a61d-424f-858f-2e02be61b342-hwAeIm with options: []
Info: Unmounting partition at /tmp/cachyos-chroot-temp-mount-b09a027e-a61d-424f-858f-2e02be61b342-hwAeIm
? Do you want to use CachyOS BTRFS preset to auto mount root subvolume? (y/n) › # Введите y, если вы в CachyOS
```

После выбора корневого раздела программа предложит смонтировать дополнительные разделы, например, раздел `/boot`.

```sh title="Монтирование дополнительных разделов"
✔ Do you want to mount additional partitions? · yes
? Enter the mount point for additional partition (e.g. /boot) type 'skip' to cancel:  › # /boot для systemd-boot, /boot/efi для GRUB и rEFInd
```

По завершении выйдите из окружения chroot, введя `exit` в командную строку или нажав `CTRL+D` на клавиатуре.

```sh title="Выход из chroot"
exit
```

## Узнать больше

- [Arch Wiki - chroot (на русском)](https://wiki.archlinux.org/title/Chroot_(%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9))
