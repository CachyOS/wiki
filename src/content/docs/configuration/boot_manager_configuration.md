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

[Limine](/installation/boot_managers#limine) is a modern bootloader known for its simple configuration. This guide covers the basics to get you started.

All configuration happens in the `/boot/limine.conf` file (or sometimes in the EFI system partition). Changes take effect immediately after saving – no extra commands needed!

### Automatic Booting (Autoboot)

Limine can automatically boot an operating system after a set time (`timeout`).

* **Timeout:** Set how many seconds to wait before auto-booting.
  ```shell
  # /boot/limine.conf

  timeout: 5
  ```
* **Default Entry:** Choose which entry boots by default. If not set, it defaults to the first one (entry `1`).
  ```shell
  # /boot/limine.conf

  default_entry: 2
  ```

:::note
If the default entry points to a directory (like `/+MyOS`), autoboot will be **disabled**.
To autoboot an entry inside a directory, you *must* set `default_entry` to point directly to that specific entry (like entry `2` in the example below).
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
    cmdline: quiet splash root=UUID=... rw
    module_path: boot():/initramfs-linux-cachyos.img
```

:::note
`boot():/` refers to the root of the boot drive
:::

### Customizing Appearance (Theming)

You can change how Limine looks:

* **Wallpaper:** Set a background image (BMP, PNG, JPEG).
  ```shell
  # /boot/limine.conf

  wallpaper: boot():/splash.png
  wallpaper_style: stretched # Or 'tiled', 'centered'
  backdrop: 000000           # Background color (RRGGBB) if style is 'centered'
  ```
* **Fonts:** Use a custom font and adjust its appearance.
  ```shell
  # /boot/limine.conf

  term_font: boot():/custom_font.F16
  term_font_scale: 2x2 # Make font bigger on high-res screens
  ```
* **Colors:** Change terminal text colors.
  ```shell
  # /boot/limine.conf

  term_background: 80000000 # Semi-transparent black (TTRRGGBB)
  term_foreground: FFFFFF   # White text
  ```
* **Interface:** Add branding or change the layout.
  ```shell
  # /boot/limine.conf

  interface_branding: My Custom Bootloader
  term_margin: 32 # Pixels around the text area
  ```

### Changing Kernel Parameters

Kernel parameters control how your operating system (like Linux) starts. You modify them using the `cmdline` option for your boot entry.

1. **Edit the config file:** `sudo nano /boot/limine.conf`
2. **Find your boot entry:** Look for the title (e.g., `//linux-cachyos`).
3. **Modify the `cmdline`:** Add or remove parameters like `quiet`, `splash`, `nowatchdog`, `rootflags=subvol=/@`, etc.
4. **Save the file.**

**Example `cmdline`:**

```shell
#/boot/limine.conf

cmdline: quiet splash nowatchdog rw root=UUID=... rootflags=subvol=/@
```

**Tip:** You can define reusable parameter sets using macros:
```shell
# /boot/limine.conf

${COMMON_PARAMS}=quiet splash

//My Linux Entry
    protocol: linux
    path: boot():/vmlinuz-linux
    cmdline: root=UUID=... rw ${COMMON_PARAMS}
```

### Automation Tools for Easier Management

Manually editing `limine.conf` is simple, but it can become tedious, especially when you install or remove kernels frequently (common on rolling-release distributions like CachyOS). Automation tools help manage these entries for you.

#### `limine-entry-tool`

This is the core command-line utility for managing Limine boot entries programmatically. You can use it to:

* **Add new kernel entries:** It copies the kernel (`vmlinuz`) and initial RAM disk (`initramfs`) files to your ESP (EFI System Partition) and creates the corresponding entry in `limine.conf`.
  ```bash
  # Add an entry for kernel 6.10.1
  sudo limine-entry-tool --add "kernel-6.10.1" "/path/to/initramfs-6.10.1.img" "/path/to/vmlinuz-6.10.1"
  ```
* **Add Unified Kernel Image (UKI) entries:** UKIs bundle the kernel, initramfs, and kernel command line into a single EFI file.
  ```bash
  # Add a UKI entry
  sudo limine-entry-tool --add-uki "kernel-6.12.1" "/path/to/my-uki.efi"
  ```
* **Add other EFI application entries:** You can add entries to boot other `.efi` files (like the Windows Boot Manager or rEFInd).
  ```bash
  # Add an entry for a fallback EFI loader
  sudo limine-entry-tool --add-efi "Fallback Loader" "/boot/EFI/BOOT/BOOTX64.EFI" --priority 10
  ```
* **Remove entries:** Cleanly removes entries from `limine.conf` and optionally deletes the associated kernel files from the ESP.
  ```bash
  # Remove the kernel entry AND its files
  sudo limine-entry-tool --remove "kernel-6.10.1"

  # Remove ONLY the entry from limine.conf, keep files
  sudo limine-entry-tool --remove-entry "kernel-6.10.1"
  ```
* **Scan existing EFI entries:** Detect other bootable EFI applications on your system.
  ```bash
  # Scan for existing EFI entries
  sudo limine-entry-tool --scan
  ```

#### Configuration (`/etc/default/limine`)

`limine-entry-tool` uses a configuration file, typically `/etc/default/limine`, to control its behavior. Key settings include:

* `ESP_PATH`: The mount point of your EFI System Partition (often auto-detected if using systemd).
* `KERNEL_CMDLINE[default]`: Default kernel parameters applied to new entries. You can also define specific parameters for fallback kernels (`KERNEL_CMDLINE[fallback]`) or named kernels (`KERNEL_CMDLINE["linux-zen"]`).
* `ENABLE_UKI`: Set to `yes` to automatically generate UKIs instead of separate kernel/initramfs files (requires a hook like `limine-mkinitcpio-hook`).
* `BOOT_ORDER`: Define the order of entries in the Limine menu.

#### Initramfs Hooks (`limine-mkinitcpio-hook` / `limine-dracut-support`)

While you *can* use `limine-entry-tool` manually, its real power comes when integrated with your system's initramfs generation process.

* **`limine-mkinitcpio-hook`:** For systems using `mkinitcpio` (like CachyOS).
* **`limine-dracut-support`:** For systems using `dracut`.

**How they work:** When you install, update, or remove a kernel package:
1. Your package manager triggers the initramfs generator (`mkinitcpio` or `dracut`).
2. The hook runs as part of this process.
3. The hook automatically calls `limine-entry-tool` with the correct arguments to add or remove the corresponding boot entry in `limine.conf`.
4. It uses the settings from `/etc/default/limine` (like your default kernel parameters) when creating entries.

**Benefit:** You don't need to manually run `limine-entry-tool` or edit `limine.conf` every time your kernel updates. The hooks handle it automatically, ensuring your boot menu stays synchronized with your installed kernels.

**Manual Setup:**
1. Install the appropriate hook package (e.g., `sudo pacman -S limine-mkinitcpio-hook`). This usually pulls in `limine-entry-tool` as a dependency.
2. Configure your desired kernel parameters and options in `/etc/default/limine`.
3. Run the initramfs generator once (e.g., `sudo mkinitcpio -P` or `sudo limine-mkinitcpio`) to generate initial entries for your currently installed kernels.
4. After this, kernel package updates should automatically manage the Limine entries.

**NB: If you installed Limine via the CachyOS installer, the `limine-mkinitcpio-hook` is already set up for you.**

Using these automation tools makes managing Limine significantly easier on systems with frequent kernel changes.

## Learn more

- [loader.conf manual page](https://man.archlinux.org/man/loader.conf.5)
- [rEFInd: Configuring the boot manager](https://www.rodsbooks.com/refind/configfile.html)
- [GRUB Manual: Configuration](https://www.gnu.org/software/grub/manual/grub/grub.html#Configuration)
- [Official Limine Configuration Docs](https://github.com/limine-bootloader/limine/blob/v9.x/CONFIG.md)
- [limine-entry-tool Project](https://gitlab.com/Zesko/limine-entry-tool)

