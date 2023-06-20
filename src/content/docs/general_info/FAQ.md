---
title: FAQ
description: 'Frequently asked questions and tips'
published: 1
date: 2023-05-09T11:08:40.447Z
tags: information
editor: markdown
dateCreated: 2023-04-18T10:29:22.610Z
---

# Frequently asked questions
Here are some frequently asked questions. We recommend to read that all users, especially those using CachyOS or Arch-based distributions.

## Software management FAQ
Here are all the questions related to the installation and uninstallation of software on your system.

### How can I update system?
```sh
sudo pacman -Syu
```

### How can I install a package?
```sh
sudo pacman -S package
```

### How can I remove a package?
```sh
sudo pacman -R package
```

### How can I remove a package and its dependencies that are no longer needed by other packages?
```sh
sudo pacman -Rs package
```

## System maintanance FAQ
Here are all the questions related to the system maintenance or changes of configurations of your system.

### How can I update GRUB after `sudo pacman -Syu`
This is indicated by the following text in the terminal and usually comes after a `sudo pacman -Syu`: grub packages were updated.
```
:: To use the new features provided in this GRUB update, it is recommended
   to install it to the MBR or UEFI. Due to potential configuration
   incompatibilities, it is advised to run both, installation and generation
   of configuration:
     $ grub-install ...
     $ grub-mkconfig -o /boot/grub/grub.cfg
```
#### If you have UEFI
To update GRUB on a UEFI system, simply run the following commands:
1. `sudo grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=cachyos`
2. `sudo grub-mkconfig -o /boot/grub/grub.cfg`

#### If you have BIOS
To update GRUB on a BIOS system, run the following command:
1. `sudo grub-install --target=i386-pc /dev/sda`
2. `sudo grub-mkconfig -o /boot/grub/grub.cfg`
:::caution[WARNING!]
Make sure to check the correct path to your system drive, which could be `/dev/sda`,`/dev/nvme0n1` or `/dev/mmcblk0`.  You can verify this by running the command `lsblk`.
:::
