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
Limine is a modern bootloader known for its simple configuration. This guide covers the basics to get you started.

Configuration primarily happens in `/boot/limine.conf` (or sometimes in the EFI system partition) for menu settings and `/etc/default/limine` for kernel parameters.

### Boot Menu Configuration

This file controls the boot menu's behavior and appearance. Changes made here take effect immediately after saving – no extra commands are needed.

* **Timeout:** Sets how many seconds Limine waits before automatically booting the default entry.
  ```shell
  # /boot/limine.conf

  timeout: 5
  ```
* **Default Entry:** Specifies which menu entry boots by default. Entries are numbered starting from 1. If not set, the default value is 1.
  ```shell
  # /boot/limine.conf

  default_entry: 2 # Boot the second entry by default
  ```
  :::tip
   If `default_entry` points to a directory (e.g., `/+CachyOS`), autoboot will be disabled. To autoboot an entry within a directory, `default_entry` must point directly to that specific entry number.
  :::

**Example (`/boot/limine.conf`):**

```shell
# /boot/limine.conf

timeout: 5
default_entry: 2 # Points directly to the 'linux-cachyos' entry below

/+CachyOS        # Entry 1: A directory (use /+ to expand by default)
//linux-cachyos  # Entry 2: The actual bootable entry
    protocol: linux
    kernel_path: boot():/vmlinuz-linux-cachyos
    cmdline: quiet splash root=UUID=... rw # Basic kernel parameters
    module_path: boot():/initramfs-linux-cachyos.img
```

:::note
`boot():/` refers to the root of the boot drive.
:::

### Theming

You can customize the visual appearance of the Limine boot menu:

* **Wallpaper:** Set a background image. Supported formats include BMP, PNG, and JPEG.
  ```shell
  # /boot/limine.conf

  wallpaper: boot():/splash.png
  wallpaper_style: stretched # Options: 'stretched', 'tiled', 'centered'
  backdrop: 000000           # Background color (RRGGBB hex) if style is 'centered'
  ```
* **Fonts:** Use a [custom font file](https://github.com/viler-int10h/vga-text-mode-fonts) and adjust its size.
  ```shell
  # /boot/limine.conf

  term_font: boot():/custom_font.F16
  term_font_scale: 2x2 # Scales font size, useful for high-resolution displays
  ```
* **Colors:** Modify terminal text and background colors.
  ```shell
  # /boot/limine.conf

  term_background: 80000000 # Example: Semi-transparent black (AARRGGBB)
  # Other color options like term_foreground, etc., are available.
  ```

### Kernel Command Configuration

On CachyOS, kernel entries in the Limine boot menu are **automatically managed**. When you install or remove kernels, the `limine-mkinitcpio-hook` uses the `limine-entry-tool` utility in the background to update the boot entries.

While entries are handled automatically, you can **configure the kernel parameters** (also known as the kernel command line) that are passed to the kernel when it boots.

1. **Edit the configuration file:** Modify the `KERNEL_CMDLINE` variables in `/etc/default/limine`. You can set default parameters for all kernels or specific parameters for certain kernel names (e.g., `linux-cachyos`).
   ```shell
   # /etc/default/limine

   # Default parameters for most kernels
   KERNEL_CMDLINE[default]="quiet splash rd.udev.log_priority=3"

   # Specific parameters for the 'linux-cachyos' kernel
   KERNEL_CMDLINE["linux-cachyos"]="quiet splash mitigations=off"

   # Parameters for fallback entries (if generated)
   # KERNEL_CMDLINE[fallback]="..."
   ```
2. **Apply the changes:** After saving `/etc/default/limine`, you need to regenerate your initramfs images and update the Limine entries to apply the new kernel parameters. Run the following command:
   ```bash
   sudo limine-mkinitcpio
   ```
   This command triggers the `mkinitcpio` process, which includes the `limine-mkinitcpio-hook`, ensuring your changes in `/etc/default/limine` are incorporated into the boot entries at `/boot/limine.conf`.


## Learn more

- [loader.conf manual page](https://man.archlinux.org/man/loader.conf.5)
- [rEFInd: Configuring the boot manager](https://www.rodsbooks.com/refind/configfile.html)
- [GRUB Manual: Configuration](https://www.gnu.org/software/grub/manual/grub/grub.html#Configuration)
- [Official Limine Configuration Docs](https://github.com/limine-bootloader/limine/blob/v9.x/CONFIG.md)
- [limine-entry-tool Project](https://gitlab.com/Zesko/limine-entry-tool)

