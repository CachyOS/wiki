---
title: CachyOS chroot Helper
description: Helper tool to make it easier to chroot into systems
---

[**`cachy-chroot`**](https://github.com/CachyOS/cachy-chroot) is a simple helper program to ease the process of chrooting into existing
CachyOS or any Arch-based install. It lists all the partitions discovered on the machine and also supports listing BTRFS subvolumes.
Last but not least, `cachy-chroot` also supports encrypted systems via LUKS. It will map each `fstab` entries to its designated `crypttab`
entries and will close all LUKS volumes gracefully when exiting the chroot.

## Usage

The process of chrooting **must** be done on a live ISO. Below is an example of using `cachy-chroot` in a CachyOS BTRFS install.

```sh title="chrooting with cachy-chroot"
❯ sudo su # Enter the root user within the live ISO
❯ pacman -Sy cachy-chroot # Ensure that cachy-chroot is at the latest version
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
? Do you want to use CachyOS BTRFS preset to auto mount root subvolume? (y/n) › # Enter y if on CachyOS
```

After selecting the root partition, you will also be prompted to mount additional partitions, e.g. your `/boot` partition

```sh title="Mounting additional partitions"
✔ Do you want to mount additional partitions? · yes
? Enter the mount point for additional partition (e.g. /boot) type 'skip' to cancel:  › # /boot on systemd-boot, /boot/efi on GRUB and rEFInd
```

When you are done, you can exit the chroot environment by passing `exit` to the prompt or pressing `CTRL+D` in your keyboard

```sh title="Exiting chroot"
exit
```

## Learn More

- [Arch Wiki - chroot](https://wiki.archlinux.org/title/Chroot)

