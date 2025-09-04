---
title: CachyOS Chroot-Helfer
description: Hilfsprogramm, um das Chrooten in Systeme zu erleichtern
---

[cachy-chroot](https://github.com/CachyOS/cachy-chroot) ist ein einfaches Hilfsprogramm, das den Prozess des Chrootens in eine bestehende
CachyOS- oder Arch-basierte Installation erleichtert. Es listet alle auf dem Rechner gefundenen Partitionen auf und unterstützt auch die Auflistung von BTRFS-Subvolumes.
Zu guter Letzt unterstützt `cachy-chroot` auch verschlüsselte Systeme via LUKS. Es wird jeder `fstab`-Eintrag den zugehörigen `crypttab`-Einträgen
zuordnen und alle LUKS-Volumes beim Verlassen des Chroots ordnungsgemäß schließen.

## Verwendung

Der Chroot-Prozess **muss** auf einer Live-ISO durchgeführt werden. Unten findest du ein Beispiel für die Verwendung von `cachy-chroot` auf einer CachyOS-BTRFS-Installation.

```sh title="Chrooten mit cachy-chroot"
sudo su # Wechsel zum root-Benutzer innerhalb der Live-ISO
pacman -Sy cachy-chroot # Stell sicher, dass cachy-chroot auf der neuesten Version ist
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
? Do you want to use CachyOS BTRFS preset to auto mount root subvolume? (y/n) › # Gib y ein, wenn du auf CachyOS bist
```

Nach Auswahl der Root-Partition fragt das Programm, ob zusätzliche Partitionen, z.B. die `/boot`-Partition, eingehängt werden sollen.

```sh title="Zusätzliche Partitionen einhängen"
✔ Do you want to mount additional partitions? · yes
? Enter the mount point for additional partition (e.g. /boot) type 'skip' to cancel:  › # /boot bei systemd-boot, /boot/efi bei GRUB und rEFInd
```

Wenn du fertig bist, verlässt du die Chroot-Umgebung, indem du `exit` in die Eingabeaufforderung eingibst oder `STRG+D` auf der Tastatur drückst.

```sh title="Chroot verlassen"
exit
```

## Erfahre mehr

- [Arch Wiki - Chroot](https://wiki.archlinux.org/title/Chroot)
