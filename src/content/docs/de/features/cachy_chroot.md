---
title: CachyOS Chroot-Helfer
description: Hilfsprogramm, um das Chrooten in Systeme zu erleichtern
---

[**`cachy-chroot`**](https://github.com/CachyOS/cachy-chroot) ist ein einfaches Hilfsprogramm, das den Prozess des Chrootens in bestehende
CachyOS- oder Arch-basierte Installationen vereinfacht. Es listet alle auf dem Rechner gefundenen Partitionen auf und unterstützt auch das Auflisten von BTRFS-Subvolumes.
Nicht zuletzt unterstützt `cachy-chroot` auch verschlüsselte Systeme über LUKS. Es ordnet jeden `fstab`-Eintrag seinem entsprechenden `crypttab`-Eintrag zu
und schließt alle LUKS-Volumes beim Verlassen des Chroots ordnungsgemäß.

## Verwendung

Der Chroot-Prozess **muss** von einer Live-ISO aus durchgeführt werden. Nachfolgend ist ein Beispiel für die Verwendung von `cachy-chroot` in einer CachyOS-BTRFS-Installation.

```sh title="Chrooten mit cachy-chroot"
❯ sudo su # Melde dich als Root-Benutzer innerhalb der Live-ISO an
❯ pacman -Sy cachy-chroot # Stelle sicher, dass cachy-chroot auf der neuesten Version ist
❯ cachy-chroot
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
? Do you want to use CachyOS BTRFS preset to auto mount root subvolume? (y/n) › # Gib y ein, wenn du CachyOS verwendest
```

Nachdem die Root-Partition ausgewählt wurde, fordert das Programm auf, zusätzliche Partitionen zu mounten, z. B. die `/boot`-Partition.

```sh title="Mounten zusätzlicher Partitionen"
✔ Do you want to mount additional partitions? · yes
? Enter the mount point for additional partition (e.g. /boot) type 'skip' to cancel:  › # /boot bei systemd-boot, /boot/efi bei GRUB und rEFInd
```

Wenn du fertig bist, verlasse die Chroot-Umgebung, indem du `exit` in die Eingabeaufforderung eingibst oder `STRG+D` auf der Tastatur drückst.

```sh title="Chroot verlassen"
exit
```

## Mehr erfahren

- [Arch Wiki - chroot](https://wiki.archlinux.org/title/Chroot)
