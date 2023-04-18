---
title: FAQ
description: Frequently asked questions and tips
published: 1
date: 2023-04-18T11:35:43.129Z
tags: information
editor: markdown
dateCreated: 2023-04-18T10:29:22.610Z
---

# Frequently asked questions
Here are some frequently asked questions. We recommend to read that all users, especially those using CachyOS or Arch-based distributions.


## Software management FAQ
Here are all the questions related to the installation and uninstallation of software on your system.

### How can I update system?
`sudo pacman -Syu`

### How can I install a package?
`sudo pacman -S package`

> Example of GIMP Installation
`sudo pacman -S gimp` {.is-info}

### How can I remove a package?
`sudo pacman -R package`
> Example of GIMP Uninstallation.
`sudo pacman -R gimp` {.is-info}

### How can I remove a package and its dependencies that are no longer needed by other packages?
`sudo pacman -Rs package`
> Example of GIMP Uninstallation and GIMP dependencies that are no longer needed by other packages
`sudo pacman -Rs gimp` {.is-info}


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
You simply need to update grub. You can do that with the following command:
1. `sudo grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=cachyos`
2. `grub-mkconfig -o /boot/grub/grub.cfg`