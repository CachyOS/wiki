---
title: CachyOS
description: Operating System
published: 1
date: 2023-01-09T15:14:56.482Z
tags: arch, arch linux, archlinux, cachy, cachyos, cacule, cpu scheduler, gnu, linux
editor: markdown
dateCreated: 2021-07-04T01:32:08.787Z
---

# What is CachyOS ?

CachyOS is an Arch Linux-based distribution that aims to provide easy installation, customization options for every user, and special optimizations for improved performance while remaining simple.

## How does CachyOS improve the performance?

We provide a optimized repo with march=x86-64-v3 support which comes with a notable performance boost. It depends on your cpu if it does support that, but you dont need to worry about it - the installer will detect the correct march and adjust to your system.

We also provide several optimized custom kernels with various schedulers, maintained by the CachyOS team (sir_lucjan and ptr1337). These kernels include `march` optimization and LLVM-LTO support.

Here you will find some extra information about the cpu march optimization:
https://wiki.cachyos.org/en/home/cachyos-performance
In the near future, several system package's would get a custom optimization from POLAUR and will be used into our system.

## Installation

We offer two different installers: a graphical installer and a command-line interface (CLI) installer.

### Graphical Installer

The graphical installer is based on Calamares and allows for both offline and online personalized installations with package selection. In the next release, you will also be able to select between two different bootloaders during an online installation.

The installer also automatically optimizes the filesystem options for SSDs if one is detected. The following filesystems are available: XFS, Btrfs, F2FS, Ext4, and ZFS.

### Command-Line Interface Installer

The CLI installer, written in C++, provides the same functions as the graphical installer but is more customizable and offers additional features. It is generally recommended for advanced users, but the installation process is kept simple and fast. It also supports configuration, allowing you to set options before the installation begins and then completing the installation automatically.

## CachyOS Desktop environments

You can select from the following desktop environments (DEs) during online installation:

- CuteFish – An Elegant, Beautiful and Easy-to-Use Linux Desktop
- i3 tiling window manager, primarily targeted at developers and advanced users
- KDE-Plasma Desktop - Simple by default, powerful when needed
- GNOME Desktop - designed to put you in control and get things done
- Openbox is a highly configurable, floating window manager with extensive standards support
- Wayfire is a wayland compositor based on wlroots. It aims to create a customizable, extendable and lightweight environment without sacrificing its appearance
- LXQT - The Lightweight Qt Desktop Environment.
- bspwm is a tiling window manager that represents windows as the leaves of a full binary tree. bspwm supports multiple monitors and is configured and controlled through messages
- Xfce is a lightweight desktop environment for UNIX-like operating systems. It aims to be fast and low on system resources, while still being visually appealing and user friendly
- Hyprland is a dynamic tiling Wayland compositor that doesn't sacrifice on its looks. 

## Security

### system functions

CachyOS includes the following security features:

- A toggle for using Firejail, which allows untrusted applications to run in a sandbox environment and automatically updates when new packages are installed
- Preconfigured DNS servers using DoH and DoT
- A toggle for anonymized dnscrypt configuration and use of only dnscrypt servers
- A hardened Linux kernel

### Cachy Browser

CachyOS's default browser is Cachy Browser, a fork of the Librewolf Browser. It includes additional security improvements such as compilation with more secure flags and performance enhancements.

## Simplicity

We have added to the distro a helper with a lot of features, which makes the usage easier if you are new to linux or just lazy.

### CachyOS Hello

CachyOS Hello is a welcome app that is launched when the system boots up. It provides quick access to various tweaks, fixes, documentation, the CachyOS Wiki, and other useful apps, such as the CachyOS Package Installer.

### Package Installer

In addition to the common package installer, CachyOS provides its own package manager which helps with updating the repository and installing packages. Packages are organized into groups for easier understanding of their purpose.

### Kernel Manager

The Kernel Manager allows you to easily install optimized kernels, as well as configure and compile your own kernel. This can be helpful for those new to kernel compilation.

## Support

You can join the CachyOS Discord with the following link:

https://discord.gg/qJqj94uFwE

or at Telegram:

https://t.me/+zCzPX4cAFjk1MTYy

## Donations

Maintaning this distro and their repos is expensive, but we'll be happy about any donation, even 1$ helps a lot which supports our work.

- Patreon

https://www.patreon.com/CachyOS

- PayPal

https://paypal.me/pttrr