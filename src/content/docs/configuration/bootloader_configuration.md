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

Unlike [systemd-boot](/configuration/bootloader_configuration#systemd-boot) and [rEFInd](/configuration/bootloader_configuration#refind),
GRUB only has one configuration file located in `/etc/default/grub`. There is pretty good documentation in this file that explains what
each option does.

### Hiding the GRUB Boot Menu

To hide the GRUB menu, simply set these following options accordingly.

```shell
# /etc/default/grub

GRUB_TIMEOUT='0'
GRUB_TIMEOUT_STYLE=hidden
```

Press ESC to get access to the GRUB prompt. From here run `normal` or `exit` to get back to the familiar GRUB boot menu.

### Kernel Commandline Configuration

To pass kernel parameters to the commandline with GRUB, we need to edit `GRUB_CMDLINE_LINUX_DEFAULT` within `/etc/default/grub`

```shell
# /etc/default/grub

GRUB_CMDLINE_LINUX_DEFAULT='nowatchdog zswap.enabled=0 quiet splash'
```

Everytime we modify the GRUB configuration file, we need to remake the config with the following command

```shell
❯ sudo grub-mkconfig -o /boot/grub/grub.cfg
```

Learn more:
- [GRUB Manual: Configuration](https://www.gnu.org/software/grub/manual/grub/grub.html#Configuration)
