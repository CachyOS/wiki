---
title: Narzędzie pomocnicze chroot CachyOS
description: Narzędzie pomocnicze ułatwiające chrootowanie do systemów
---

[**`cachy-chroot`**](https://github.com/CachyOS/cachy-chroot) to prosty program pomocniczy ułatwiający proces chrootowania do istniejącej instalacji CachyOS lub dowolnej dystrybucji opartej na Archu.
Wyświetla listę wszystkich partycji wykrytych na komputerze, a także obsługuje listowanie podwoluminów BTRFS.
Co równie ważne, `cachy-chroot` obsługuje również systemy szyfrowane za pomocą LUKS. Mapuje każdy wpis z `fstab` do odpowiadającego mu wpisu w `crypttab` i poprawnie zamyka wszystkie woluminy LUKS podczas wychodzenia z chroot.

## Użycie

Proces chrootowania **musi** być wykonany z live ISO. Poniżej znajduje się przykład użycia `cachy-chroot` w instalacji CachyOS BTRFS.

```sh title="Chrootowanie za pomocą cachy-chroot"
❯ sudo su # Przejdź na użytkownika root w live ISO
❯ pacman -Sy cachy-chroot # Upewnij się, że cachy-chroot jest w najnowszej wersji
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
? Do you want to use CachyOS BTRFS preset to auto mount root subvolume? (y/n) › # Wpisz t, jeśli używasz CachyOS
```

Po wybraniu partycji root program zapyta o zamontowanie dodatkowych partycji, np. partycji `/boot`.

```sh title="Montowanie dodatkowych partycji"
✔ Do you want to mount additional partitions? · yes
? Enter the mount point for additional partition (e.g. /boot) type 'skip' to cancel:  › # /boot dla systemd-boot, /boot/efi dla GRUB i rEFInd
```

Aby zakończyć, wyjdź ze środowiska chroot, wpisując `exit` w wierszu poleceń lub naciskając `CTRL+D` na klawiaturze.

```sh title="Wychodzenie z chroot"
exit
```

## Dowiedz się więcej

- [Arch Wiki - chroot](https://wiki.archlinux.org/title/Chroot)
