---
title: Bootloader Configuration
description: Configure bootloader settings and pass kernel parameters to the command line
---

## systemd-boot

systemd-boot has two kinds of configuration files, one for systemd-boot itself in `/boot/loader/loader.conf` and one for each
individual kernel entry in `/boot/loader/entry`.

### Loader configuration
In this configuration file, you can change the default entry and the timeout of systemd-boot

```shell
# /boot/loader/loader.conf

default @saved
timeout 5
#console-mode keep # This option configures the resolution of the console.
```

Learn more:
- [loader.conf manual page](https://man.archlinux.org/man/loader.conf.5)

### Kernel Commandline Configuration
We provide a tool for easier configuration of systemd-boot [`sdboot-manage`](https://github.com/CachyOS/CachyOS-PKGBUILDS/tree/master/systemd-boot-manager).
One of the perks of this tool is global kernel commandline configuration. The configuration file for `sdboot-manage` is located in `/etc/sdboot-manage.conf`.
Edit the `LINUX_OPTIONS=` line in `/etc/sdboot-manage.conf` to change kernel parameters.

```shell
# /etc/sdboot-manage.conf
LINUX_OPTIONS="zswap.enabled=0 nowatchdog quiet splash"
```

After making changes, regenerate all systemd-boot entries with the following command

```shell
❯ sudo sdboot-manage gen
```

## rEFInd

The main command line tool for rEFInd is refind-install.
Kernel parameters are provided by a file called refind_linux.conf which is located next to the kernels. (Usually /boot)
rEFInd's primary configuration file is normally located at /boot/efi/refind/refind.conf

## GRUB

The main command line tool for grub is grub-mkconfig.
Grub's main configuration file is normally located at /boot/grub/grub.cfg
