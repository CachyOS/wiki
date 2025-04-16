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
# /boot/limine.conf

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

### Limine Bootloader Theming

Limine bootloader offers several options to customize its appearance. Here's how you can theme your Limine bootloader:

#### Wallpaper and Background

- **wallpaper**: Set a custom background image using BMP, PNG, or JPEG formats
  ```shell
  # /boot/limine.conf

  wallpaper: boot():/splash.png
  ```
  
- **Multiple wallpapers**: You can specify multiple wallpaper options, and Limine will randomly select one
  ```shell
  # /boot/limine.conf

  wallpaper: boot():/splash1.png
  wallpaper: boot():/splash2.png
  ```

- **wallpaper_style**: Control how the wallpaper is displayed
  ```shell
  # /boot/limine.conf

  wallpaper_style: stretched    # Default option
  # Other options: tiled, centered
  ```

- **backdrop**: When using centered wallpaper style, this sets the color for areas not covered by the image (in RRGGBB format)
  ```shell
  # /boot/limine.conf

  backdrop: 000000    # Black background
  ```

#### Terminal Appearance

- **term_font**: Use a custom font file instead of the default. See [compatible fonts](https://github.com/viler-int10h/vga-text-mode-fonts)
  ```shell
  # /boot/limine.conf

  term_font: boot():/custom_font.F16
  ```

- **term_font_size**: Set the font size (default is ```8x16```)
  ```shell
  # /boot/limine.conf

  term_font_size: 8x16
  ```

- **term_font_scale**: Scale the font for better visibility on high-DPI displays
  ```shell
  # /boot/limine.conf

  term_font_scale: 2x2    # Double size in both directions
  ```

- **term_font_spacing**: Set horizontal spacing between characters (in pixels)
  ```shell
  # /boot/limine.conf

  term_font_spacing: 1    # Default value
  ```

#### Color Customization

- **term_palette**: Customize the 8 basic terminal colors (RRGGBB format, separated by semicolons)
  ```shell
  # /boot/limine.conf

  term_palette: 000000;FF0000;00FF00;FFFF00;0000FF;FF00FF;00FFFF;FFFFFF
  ```

- **term_palette_bright**: Customize the 8 bright terminal colors
  ```shell
  # /boot/limine.conf

  term_palette_bright: 808080;FF8080;80FF80;FFFF80;8080FF;FF80FF;80FFFF;FFFFFF
  ```

- **term_background/term_foreground**: Set terminal text background/foreground colors
  ```shell
  # /boot/limine.conf

  term_background: 80000000    # TTRRGGBB format (TT = transparency)
  term_foreground: FFFFFF
  ```

- **interface_branding_colour**: Change the color of the branding text (value 0-7)
  ```shell
  # /boot/limine.conf

  interface_branding_colour: 6    # Default is cyan (6)
  ```

#### Interface Customization

- **interface_branding**: Display custom text at the top of the interface
  ```shell
  # /boot/limine.conf

  interface_branding: My Custom Bootloader
  ```

- **interface_resolution**: Set a specific screen resolution for the Limine interface
  ```shell
  # /boot/limine.conf

  interface_resolution: 1920x1080
  ```

- **interface_help_hidden**: Hide the help text showing key bindings
  ```shell
  # /boot/limine.conf

  interface_help_hidden: yes
  ```

- **term_margin**: Set the margin around the terminal
  ```shell
  # /boot/limine.conf

  term_margin: 32
  ```

- **term_margin_gradient**: Set the thickness of the gradient around the terminal
  ```shell
  # /boot/limine.conf

  term_margin_gradient: 8
  ```

These theming options allow you to fully customize the appearance of your Limine bootloader to match your preferences or system theme. All changes to the configuration file take effect immediately without needing to run any additional commands.


## Learn more

- [loader.conf manual page](https://man.archlinux.org/man/loader.conf.5)
- [rEFInd: Configuring the boot manager](https://www.rodsbooks.com/refind/configfile.html)
- [GRUB Manual: Configuration](https://www.gnu.org/software/grub/manual/grub/grub.html#Configuration)
- [Limine configuration file](https://github.com/limine-bootloader/limine/blob/v9.x/CONFIG.md)
