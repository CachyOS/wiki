---
title: How to install CachyOS
description: CachyOS Installation via GUI/CLI Installer
published: 1
date: 2023-04-22T14:52:02.141Z
tags: cachyos, calamares, cli-installer, gui-installer, install-cachyos
editor: markdown
dateCreated: 2022-11-17T13:07:22.546Z
---

:::caution[WARNING]
Please, check Download information section before proceding.
:::

Installing CachyOS
==================

CachyOS is a powerful and feature-rich operating system, but it can be intimidating to install for the first time. This guide will walk you through the process, step-by-step, so you can have CachyOS up and running on your computer in no time.

System Requirements
-------------------

Before you begin the installation, you need to make sure that your computer meets the following minimum system requirements:

*   3 GB of memory
*   30 GB of hard disk space
*   1 GHz processor
*   HD graphics card and monitor
*   Broadband internet connection

For the best performance, it is recommended to have:

*   4 GB of memory
*   50 GB of hard disk space
*   An x86-64-v3 supported processor
*   50 Mbps or better internet connection
*   A newer NVIDIA card (900+), AMD Graphics Card or Intel

Choosing Your Bootloader
------------------------

CachyOS offers two different bootloaders for online installation: systemd-boot, grub and refind. You will be asked to choose between the two when you click the `Launch Installer` button in CachyOS Hello. We recommend using systemd-boot as it is simple and results in faster boot times.
systemd-boot does support all filesystem, grub has some limitations with zfs and does not support all features of zfs. Refind does support only xfs and ext4.

:::tip
Note that systemd-boot is only supported on systems with UEFI support, while GRUB supports both MBR and UEFI.
:::

Choosing Your Filesystem
------------------------

When you install CachyOS, you can choose from the following five filesystems: xfs, ext4, btrfs, f2fs, and zfs.

*   XFS is a high-performance journaling file system that is particularly good at parallel I/O.
*   Ext4 is the evolution of the widely used Ext3 file system and offers improved performance, reliability, and features.
*   Btrfs is a modern copy-on-write filesystem with advanced features and a focus on fault tolerance and easy administration.
*   F2FS is a file system designed for NAND-based flash memory.
*   ZFS is an advanced file system created by Sun Microsystems that offers stability, speed, security, and future-proofing.

:::caution[IMPORTANT]
If you choose to install ZFS, you must clear the partition using a tool such as Gparted or Partition Manager before installation. After clearing the drive, reboot and start the installer. Choose ZFS, and everything should work fine!
:::

Desktop Environments
--------------------

CachyOS offers several desktop environments for you to choose from, including the default option of KDE. The available options are:
:::note
Please select only one Desktop Enviroment at the net installation
:::

1.  **KDE Plasma** is a comprehensive and flexible desktop environment that offers multiple styles of menus to access applications. It features the kwin window manager, and also works with Compiz. KDE Plasma also boasts an intuitive interface that allows you to easily download and install new themes, widgets, and more from the web.
2.  **CuteFish** is a sleek, modern, and efficient desktop environment built using Qt Quick and some KDE core frameworks. It has a design reminiscent of macOS.
3.  **i3** is a popular tiling window manager known for its single, self-contained configuration file and its efficient use of screen space.
4.  **GNOME** is a user-friendly desktop environment with a touch-style interface for accessing applications. While it is easy to learn, it may have limited customization options and can be difficult to configure.
5.  **Openbox** is a highly popular window manager known for its excellent documentation and a wide selection of available themes.
6.  **Wayfire** is a wayland compositor based on wlroots that balances customization, extendibility, and aesthetics.
7.  **XFCE** is a lightweight and flexible desktop environment with a traditional drop-down/pop-up menu for accessing applications, and is compatible with Compiz. Customization may require some effort to match personal preferences.
8.  **LXQt** is a lightweight desktop environment formed from the merger of the LXDE and Razor-qt projects and built with Qt.
9. **bspwm** Tiling WM for X11, written in C, dynamic layout (tiling, stacking, tabbing), windows represented as binary tree leaves.
10. **Cinnamon** is a desktop environment for Linux that balances advanced features with a traditional user experience.
11. **UKUI** is a lightweight desktop environment that is efficient and works well on older computers. It uses both GTK and Qt technologies, and has a visual appearance similar to Windows 7, making it user-friendly for new Linux users.
12. **Hyprland** is a visually pleasing Wayland compositor that uses dynamic tiling. It comes with preconfigured dotfiles.
13. **Budgie** is a simple and elegant desktop environment built using the GTK toolkit. It is designed to provide a modern and attractive interface that is easy to use, while also being highly configurable.
14.  **LXDE** (Lightweight X11 Desktop Environment) is a fast and energy-saving desktop environment designed to be used on older computers and resource-constrained systems. It uses Openbox as its default window manager and focuses on providing a simple, clean and user-friendly interface.
15.  **Mate Desktop** is a traditional desktop environment forked from GNOME 2. It is characterized by its classic look and feel, with a simple and intuitive user interface. Mate provides an easy-to-use and highly customizable desktop experience for users who prefer a more classic look and feel.
16. **Qtile** is a X11 window manager that is configured with the Python programming language.

:::note
Hyprland may not work well in virtual machines or with NVIDIA graphics cards.
:::

Workarounds
--------------------


### Offline Installation Keyring issue

```sh
sudo pacman-key --init; sudo pacman-key --populate; sudo pacman-key --lsign cachyos
```

### Calamares "freezes"

There is since mesa 23.x a issue, that the main GUI thread of calamares has a hardlock on **VMs**.
The installation itself still gets forward and should be installed fine.
Please check the log to see if it is completly installed.

# How to dual boot CachyOS and Windows with Secure Boot ON ?

We are going to use **rEFInd** boot manager for this.

1. Temporarily turn off Secure Boot and boot using the cachyos bootable usb.
2. You'll need an active internet connection now.
Click Launch Installer > Online > Refind
3. Continue with the installation then in partition select Manual Partition and create a partition of following:
• Size: 500mb
• Filesystem: fat32
• Mount point: /boot/efi
• Flags: boot
4. Create rest of the partitions (root, swap etc.) and continue with the installation and restart when completed.
5. Install shim-signed and sbsigntools packages from the aur.
6. Now run this command to re-install Refind with the installed shim and generate keys to sign the Refind binaries automatically.
`refind-install --shim /usr/share/shim-signed/shimx64.efi --localkeys`
7. Enter `Y` for the incoming prompts and complete the installation.
8. Now sign the kernel binary with the keys generated by Refind using the following command.
`sudo sbsign --key /etc/refind.d/keys/refind_local.key --cert /etc/refind.d/keys/refind_local.crt --output /boot/vmlinuz-linux-cachyos /boot/vmlinuz-linux-cachyos`
The name of your kernel may vary!

9. We are almost done! Now restart your device and turn on Secure Boot then boot normally.
10. You will see a message saying Verification failed: Security Violation. Press Enter.
11. It will open the Shim UEFI Key Management. Press any key to open the MokManager.
12. In the Perform MOK management screen, select Enroll key from disk and browse to /EFI/refind/keys. Select refind_local.cer.
13. Press Enter > Continue > Yes.
14. Reboot your device.

Everything should work perfectly now. Run bootctl to check Secure Boot status.



# Tips and Tricks

## Signing with Hook
The kernel signing can be automated with a mkinitcpio post hook, see Secure Boot#Signing the kernel with a mkinitcpio post hook (https://wiki.archlinux.org/title/Secure_Boot#Signing_the_kernel_with_a_mkinitcpio_post_hook).

## Using KeyTool
The KeyTool can be used to add/remove/replace keys from NVRAM of your device. To use it
- Copy KeyTool.efi
`sudo cp /usr/share/efitools/KeyTool.efi /boot/efi/EFI/refind/`

- Sign KeyTool.efi
`sudo sbsign --key /etc/refind.d/keys/refind_local.key --cert /etc/refind.d/keys/refind_local.crt --output /boot/efi/EFI/refind/KeyTool.efi /boot/efi/EFI/refind/KeyTool.efi`

- Select KeyTool from the Refind boot screen to open it.

# Credits

Thanks to [Aritra Karak](https://github.com/tr1ckydev) for writing this guide!
