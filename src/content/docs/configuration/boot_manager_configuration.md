---
title: Boot Manager Configuration
description: Configure boot manager settings and pass kernel parameters to the command line
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

Like [systemd-boot](/configuration/boot_manager_configuration#systemd-boot), rEFInd has two configuration files. `refind.conf` located in
`boot/efi/EFI/refind` is mainly for changing how rEFind behaves while `/boot/refind_linux.conf` is for managing your boot options.
`refind.conf` contains extensive comments explaining all its options.

### Kernel Commandline Configuration

To pass kernel parameters to the commandline, modify "Boot using default options" in `/boot/refind_linux.conf`

```shell
# /boot/refind_linux.conf

"Boot using default options"     "root=PARTUUID=1cb353ec-7f03-4820-8b4b-03baf53a208f rw zswap.enabled=0 nowatchdog quiet splash"
```

Changes to both configuration files will immediately take effect. Running a command to "save" changes is unnecessary.

## GRUB

Unlike [systemd-boot](/configuration/boot_manager_configuration#systemd-boot) and [rEFInd](/configuration/boot_manager_configuration#refind),
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

Every time we modify the GRUB configuration file, we need to remake the config with the following command

```shell
❯ sudo grub-mkconfig -o /boot/grub/grub.cfg
```

## Limine

Limine is a modern, feature-rich bootloader that uses a simple configuration file format.

### Automatic Boot Configuration

Limine supports automatic booting after a timeout. However, there are some important considerations:

- **Default Entry**: If you don't specify a `default_entry` option, Limine will default to 1.
- **Directory vs Entry**: When the default entry is set to a directory (rather than a bootable entry), **Limine will disable autoboot**.
- **Subentries**: For autoboot to work with subentries, you need to explicitly set the `default_entry` to point to the specific subentry.

#### Using Directories and Subentries

Limine allows organizing boot entries into directories:

- Directories are denoted with a `/` prefix
- Subdirectories use `//` prefix
- The `/+` prefix expands a directory by default in the menu
- For autoboot to work with entries inside directories, you must explicitly set the default entry

#### Example with Default Entry

To ensure autoboot works with subentries, modify your configuration at `/boot/limine.conf` to include a `default_entry` option, and ensure that a `+` prefix is used for the directory to expand it by default.

```shell
timeout: 5
wallpaper: boot():/splash.png
default_entry: 2 # Points to the specific entry you want to autoboot

/+CachyOS # Entry 1 (Directory)
//linux-cachyos # Entry 2 (Actual boot entry)
	protocol: linux
	kernel_path: boot():/vmlinuz-linux-cachyos
	cmdline: quiet splash nowatchdog rw rootflags=subvol=/@ root=UUID=12d404a8-ca5e-49a2-8e06-403587625ece
	module_path: boot():/initramfs-linux-cachyos.img
```

## Learn more

- [loader.conf manual page](https://man.archlinux.org/man/loader.conf.5)
- [rEFInd: Configuring the boot manager](https://www.rodsbooks.com/refind/configfile.html)
- [GRUB Manual: Configuration](https://www.gnu.org/software/grub/manual/grub/grub.html#Configuration)
- [Limine configuration file](https://github.com/limine-bootloader/limine/blob/v9.x/CONFIG.md)
