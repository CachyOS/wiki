---
title: Ayudante chroot de CachyOS
description: Herramienta de ayuda para facilitar el proceso de chroot en sistemas
---

[cachy-chroot](https://github.com/CachyOS/cachy-chroot) es un sencillo programa de ayuda para facilitar el proceso de hacer chroot en una instalación existente
de CachyOS o basada en Arch. Lista todas las particiones descubiertas en la máquina y también soporta listar subvolúmenes BTRFS.
Por último, pero no menos importante, `cachy-chroot` también es compatible con sistemas cifrados a través de LUKS. Mapeará cada entrada de `fstab` a sus correspondientes entradas en `crypttab`
y cerrará correctamente todos los volúmenes LUKS al salir del chroot.

## Uso

El proceso de chroot **debe** realizarse desde una ISO live. A continuación se muestra un ejemplo de cómo usar `cachy-chroot` en una instalación BTRFS de CachyOS.

```sh title="haciendo chroot con cachy-chroot"
sudo su # Entra como usuario root dentro de la ISO live
pacman -Sy cachy-chroot # Asegúrate de que cachy-chroot esté en la última versión
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
? Do you want to use CachyOS BTRFS preset to auto mount root subvolume? (y/n) › # Introduce y si estás en CachyOS
```

Después de seleccionar la partición raíz, el programa te pedirá que montes particiones adicionales, por ejemplo, la partición `/boot`.

```sh title="Montando particiones adicionales"
✔ Do you want to mount additional partitions? · yes
? Enter the mount point for additional partition (e.g. /boot) type 'skip' to cancel:  › # /boot en systemd-boot, /boot/efi en GRUB y rEFInd
```

Cuando termines, sal del entorno chroot escribiendo `exit` en la consola o pulsando `CTRL+D` en el teclado.

```sh title="Saliendo del chroot"
exit
```

## Aprende más

- [Arch Wiki - chroot (en inglés)](https://wiki.archlinux.org/title/Chroot)
