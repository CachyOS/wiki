---
title: How to install CachyOS
description: CachyOS Installation via GUI/CLI Installer
published: 1
date: 2023-01-31T20:00:36.238Z
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
*   KDE
*   CuteFish
*   i3
*   Gnome
*   Openbox
*   Wayfire
*   Xfce
*   LXQT
*   bspwm
*   Cinnamon
*   UKUI
*   Budgie
*   LXDE
*   Mate

> **Note:** Hyprland may not work well in virtual machines or with NVIDIA graphics cards.


1.  KDE Plasma is a comprehensive and flexible desktop environment that offers multiple styles of menus to access applications. It features the kwin window manager, and also works with Compiz. KDE Plasma also boasts an intuitive interface that allows you to easily download and install new themes, widgets, and more from the web.
2.  CuteFish is a sleek, modern, and efficient desktop environment built using Qt Quick and some KDE core frameworks. It has a design reminiscent of macOS.
3.  i3 is a popular tiling window manager known for its single, self-contained configuration file and its efficient use of screen space.
4.  GNOME is a user-friendly desktop environment with a touch-style interface for accessing applications. While it is easy to learn, it may have limited customization options and can be difficult to configure.
5.  Openbox is a highly popular window manager known for its excellent documentation and a wide selection of available themes.
6.  Wayfire is a wayland compositor based on wlroots that balances customization, extendibility, and aesthetics.
7.  XFCE is a lightweight and flexible desktop environment with a traditional drop-down/pop-up menu for accessing applications, and is compatible with Compiz. Customization may require some effort to match personal preferences.
8.  LXQt is a lightweight desktop environment formed from the merger of the LXDE and Razor-qt projects and built with Qt.
9. bspwm is a tiling window manager designed for X11, and written in C. It supports tiling, stacking, and tabbing layouts, which it handles dynamically. It represents windows as the leaves of a full binary tree.
10. Cinnamon is a Linux desktop which provides advanced innovative features and a traditional user experience
11. UKUI is a lightweight desktop environment, which consumes few resources and works with older computers. It has been developed with GTK and Qt technologies. Its visual appearance is similar to Windows 7, making it easier for new users of Linux.
12. Hyprland is a dynamic tiling Wayland compositor that doesn't sacrifice on its looks. Hyprland comes with some preconfigured dotfiles
13. Budgie Desktop is a feature-rich, modern desktop. Budgie's design emphasizes simplicity, minimalism, and elegance.
14. LXDE, which stands for Lightweight X11 Desktop Environment, is a desktop environment which is lightweight and fast. It is designed to be user friendly and slim, while keeping the resource usage low. LXDE uses less RAM and less CPU while being a feature rich desktop environment. Unlike other tightly integrated desktops LXDE strives to be modular, so each component can be used independently with few dependencies.
15. The MATE Desktop Environment is the continuation of GNOME 2. It provides an intuitive and attractive desktop environment using traditional metaphors for Linux and other Unix-like operating systems. MATE is under active development to add support for new technologies while preserving a traditional desktop experience.