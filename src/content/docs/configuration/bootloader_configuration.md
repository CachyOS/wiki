---
title: Bootloader Configuration
description: Configure bootloader settings and pass kernel parameters to the command line
---

# systemd-boot

The main command line tool for sd-boot is sdboot-manage
The configuration file for changing kernel parameters and other options is located at /etc/sdboot-manage.conf
Boot entries are located in /boot/loader/entries/

# rEFInd

The main command line tool for rEFInd is refind-install.
Kernel parameters are provided by a file called refind_linux.conf which is located next to the kernels. (Usually /boot)
rEFInd's primary configuration file is normally located at /boot/efi/refind/refind.conf

# GRUB

The main command line tool for grub is grub-mkconfig.
Grub's main configuration file is normally located at /boot/grub/grub.cfg
