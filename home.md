---
title: CachyOS
description: Operating System
published: 1
date: 2022-06-28T15:03:51.916Z
tags: arch, arch linux, archlinux, cachy, cachyos, cacule, cpu scheduler, gnu, linux
editor: markdown
dateCreated: 2021-07-04T01:32:08.787Z
---

# What is CachyOS ?

CachyOS is a arch linux based distribution which provides a easy installation, several customization option to suite to every users, specially optimizations to offer a better performance and still keep it simple.

## How does CachyOS improve the performance?

We provide a optimized repo with march=x86-64-v3 support which comes with a notable performance boost. It depends on your cpu if it does support that, but about that you dont need to worry - the installer will detect that and adjust this to your system.

Also we provide several optimized custom kernels with different scheduler, which is maintained from me and also soon from sir_lujan.
These kernels will be also with march optimization compiled in the repo, including LLVM-LTO support.

Here you find some written infos about the cpu march optimization:
https://wiki.cachyos.org/en/home/cachyos-performance
In the next future also several system package's get custom optimized from POLAUR and will be used into our system.

## Installation

We provide two different installers. A graphical installer and a cli installer.

### GUI Installer
The graphical installer is based on calamares and gives the possibility to do a offline installation and a online personalized one with a package selection.
With the next release you have also the possibility at the online installation to choose between two different bootloader.
Also you can choose between between different filesystem, the filesystem options are automatically optimized for ssd's if it detects one.
Following filesystem's can be used, which filesystem will suit to your needs I will write in an extra page:

- xfs
- btrfs
- f2fs
- ext4
- zfs

### CLI-Installer

The cli installer is completely written from us in C++. It provides equal functions to the GUI Installer but more customizable and some more features. Generally It is recommend for more advanced users, but the installation is also keep quite simple and fast. Also it does support a configuration, which will set before the installation begin in the root directory and then will do with the options you chooses completely automatically.

## CachyOS Desktop environments

You can select at the online installation between the following DE's:

- CuteFish – An Elegant, Beautiful and Easy-to-Use Linux Desktop
- i3 tiling window manager, primarily targeted at developers and advanced users
- KDE-Plasma Desktop - Simple by default, powerful when needed
- GNOME Desktop - designed to put you in control and get things done
- Openbox is a highly configurable, floating window manager with extensive standards support
- Wayfire is a wayland compositor based on wlroots. It aims to create a customizable, extendable and lightweight environment without sacrificing its appearance
- LXQT - The Lightweight Qt Desktop Environment.
- bspwm is a tiling window manager that represents windows as the leaves of a full binary tree. bspwm supports multiple monitors and is configured and controlled through messages
- Kofuku (bliss in Japanese) is a lightweight and minimalist Linux setup. This setup uses BSPWM as the tiling window manager.
- Xfce is a lightweight desktop environment for UNIX-like operating systems. It aims to be fast and low on system resources, while still being visually appealing and user friendly

## Security

### system functions

Following security features will be available:

- Firejail Toggle for using all packages which got a firejail profile will use any untrusted application in a sandbox environment and it will automatically update if you install any new package
- preconfigured dns servers, which uses DoH and DoT servers
- toggle for anonymized dnscrypt config and uses only dnscrypt servers
- hardened linux kernel

### Cachy Browser

The default browser of CachyOS is Cachy-Browser, which is a fork of the Librewolf Browser. We have added some extra security
improvements as it is compiled with more secure flags and performance related too.

## Simplicity

We have added to the distro different helper, which makes the usage more easy if you are new to linux or just lazy.

### Kernel Manager

You can easily install kernels with optimization via a kernel manager, the kernel manager does also allow you to configure your own kernel and will compile it then which makes it easier for starters to get into kernel compiling.

### Package-installer

To the common package installer we provide a own package manager which helps you in updating the repo or installing packages. Packages are simply shown in group for a better understanding for which this package is used for

## Support

You can join the CachyOS Discord with the following link:

https://discord.gg/qJqj94uFwE

or at Telegram:

https://t.me/+zCzPX4cAFjk1MTYy

## Donations

To get the server costs together we are happy about every donation which supports our work.

- Paetron

https://www.patreon.com/CachyOS

- PayPal

https://paypal.me/pttrr