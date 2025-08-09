---
title: L'assistant de chroot de CachyOS
description: Un outil assistant pour faciliter le passage en chroot dans les systèmes
---

[**`cachy-chroot`**](https://github.com/CachyOS/cachy-chroot) est un programme d'assistance simple conçu pour faciliter le processus de passage en chroot (chrooting) dans une installation existante de CachyOS ou basée sur Arch. Il liste toutes les partitions découvertes sur la machine et prend également en charge l'affichage des sous-volumes BTRFS.
Enfin, et ce n'est pas le moins important, `cachy-chroot` gère aussi les systèmes chiffrés via LUKS. Il fera correspondre chaque entrée du `fstab` à son entrée désignée dans `crypttab`
et fermera proprement tous les volumes LUKS en sortant du chroot.

## Utilisation

Le processus de chrooting **doit** être effectué depuis une ISO live. Vous trouverez ci-dessous un exemple d'utilisation de `cachy-chroot` sur une installation BTRFS de CachyOS.

```sh title="Passer en chroot avec cachy-chroot"
❯ sudo su # Passer à l'utilisateur root dans l'ISO live
❯ pacman -Sy cachy-chroot # S'assurer que cachy-chroot est à la dernière version
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
? Do you want to use CachyOS BTRFS preset to auto mount root subvolume? (y/n) › # Saisir y si vous êtes sur CachyOS
```

Après avoir sélectionné la partition racine, le programme vous proposera de monter des partitions supplémentaires, par exemple la partition `/boot`.

```sh title="Monter des partitions supplémentaires"
✔ Do you want to mount additional partitions? · yes
? Enter the mount point for additional partition (e.g. /boot) type 'skip' to cancel:  › # /boot sur systemd-boot, /boot/efi sur GRUB et rEFInd
```

Une fois terminé, quittez l'environnement chroot en tapant `exit` dans l'invite de commande ou en appuyant sur `CTRL+D` sur le clavier.

```sh title="Quitter le chroot"
exit
```

## En savoir plus

- [Wiki Arch - chroot](https://wiki.archlinux.org/title/Chroot)

