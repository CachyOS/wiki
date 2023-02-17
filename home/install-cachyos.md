---
title: How to install CachyOS
description: CachyOS Installation via GUI/CLI Installer
published: 1
date: 2023-02-17T15:47:16.115Z
tags: cachyos, calamares, cli-installer, gui-installer, install-cachyos
editor: markdown
dateCreated: 2022-11-17T13:07:22.546Z
---

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
*   An x86-64-v3 processor
*   50 Mbps or better internet connection
*   A newer NVIDIA card (900+)

Choosing Your Bootloader
------------------------

CachyOS offers two different bootloaders for online installation: systemd-boot and GRUB. You will be asked to choose between the two when you click the `Launch Installer` button in CachyOS Hello. We recommend using systemd-boot as it is simple and results in faster boot times.

> Note that systemd-boot is only supported on systems with UEFI support, while GRUB supports both MBR and UEFI.

Choosing Your Filesystem
------------------------

When you install CachyOS, you can choose from the following five filesystems: xfs, ext4, btrfs, f2fs, and zfs.

*   XFS is a high-performance journaling file system that is particularly good at parallel I/O.
*   Ext4 is the evolution of the widely used Ext3 file system and offers improved performance, reliability, and features.
*   Btrfs is a modern copy-on-write filesystem with advanced features and a focus on fault tolerance and easy administration.
*   F2FS is a file system designed for NAND-based flash memory.
*   ZFS is an advanced file system created by Sun Microsystems that offers stability, speed, security, and future-proofing.

> **!!IMPORTANT!!:** 
If you choose to install ZFS, you must clear the partition using a tool such as Gparted or Partition Manager before installation. After clearing the drive, reboot and start the installer. Choose ZFS, and everything should work fine!


Desktop Environments
--------------------

CachyOS offers several desktop environments for you to choose from, including the default option of KDE. The available options are:

1.  KDE Plasma is a comprehensive and flexible desktop environment that offers multiple styles of menus to access applications. It features the kwin window manager, and also works with Compiz. KDE Plasma also boasts an intuitive interface that allows you to easily download and install new themes, widgets, and more from the web.
2.  CuteFish is a sleek, modern, and efficient desktop environment built using Qt Quick and some KDE core frameworks. It has a design reminiscent of macOS.
3.  i3 is a popular tiling window manager known for its single, self-contained configuration file and its efficient use of screen space.
4.  GNOME is a user-friendly desktop environment with a touch-style interface for accessing applications. While it is easy to learn, it may have limited customization options and can be difficult to configure.
5.  Openbox is a highly popular window manager known for its excellent documentation and a wide selection of available themes.
6.  Wayfire is a wayland compositor based on wlroots that balances customization, extendibility, and aesthetics.
7.  XFCE is a lightweight and flexible desktop environment with a traditional drop-down/pop-up menu for accessing applications, and is compatible with Compiz. Customization may require some effort to match personal preferences.
8.  LXQt is a lightweight desktop environment formed from the merger of the LXDE and Razor-qt projects and built with Qt.
9. bspwm: Tiling WM for X11, written in C, dynamic layout (tiling, stacking, tabbing), windows represented as binary tree leaves.
10. Cinnamon is a desktop environment for Linux that balances advanced features with a traditional user experience.
11. UKUI is a lightweight desktop environment that is efficient and works well on older computers. It uses both GTK and Qt technologies, and has a visual appearance similar to Windows 7, making it user-friendly for new Linux users.
12. Hyprland is a visually pleasing Wayland compositor that uses dynamic tiling. It comes with preconfigured dotfiles.
13. Budgie is a simple and elegant desktop environment built using the GTK toolkit. It is designed to provide a modern and attractive interface that is easy to use, while also being highly configurable.
14.  LXDE (Lightweight X11 Desktop Environment) is a fast and energy-saving desktop environment designed to be used on older computers and resource-constrained systems. It uses Openbox as its default window manager and focuses on providing a simple, clean and user-friendly interface.
15.  Mate Desktop is a traditional desktop environment forked from GNOME 2. It is characterized by its classic look and feel, with a simple and intuitive user interface. Mate provides an easy-to-use and highly customizable desktop experience for users who prefer a more classic look and feel.

> **Note:** Hyprland may not work well in virtual machines or with NVIDIA graphics cards.

Workarounds
--------------------

There is currently a issue with the CachyOS-Live-ISO that the nvidia driver blocks that nouveau gets loaded.
If you face a blackscreen get into the tty with CTRL + ALT + F2 and then login with root.
No password is required, so just enter at the password.
After that run the command:
`sudo modprobe nouveau`