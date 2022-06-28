---
title: CachyOS
description: Operating System
published: 1
date: 2022-06-28T23:40:36.966Z
tags: arch, arch linux, archlinux, cachy, cachyos, cacule, cpu scheduler, gnu, linux
editor: markdown
dateCreated: 2021-07-04T01:32:08.787Z
---

# What is CachyOS ?

CachyOS is an Arch Linux based distribution which provides a easy installation, several customization options to suite every user, specially optimizations are offered for a better performance and still keep it simple.

## How does CachyOS improve the performance?

We provide a optimized repo with march=x86-64-v3 support which comes with a notable performance boost. It depends on your cpu if it does support that, but you dont need to worry about it - the installer will detect the correct march and adjust to your system.

Also we provide several optimized custom kernels with different schedulers, which they are maintained by me and also soon from sir_lujan.
These kernels will also include march optimization, all of them already compiled in the repo, including LLVM-LTO support.

Here you will find some extra inforfmation about the cpu march optimization:
https://wiki.cachyos.org/en/home/cachyos-performance
In the near future, several system package's would get a custom optimization from POLAUR and will be used into our system.

## Installation

We provide two different installers. A graphical installer and a cli installer.

### GUI Installer
The graphical installer is based on calamares and gives the possibility to do a offline installation and a online personalized one with a package selection.
With the next release you have also the possibility at the online installation to choose between two different bootloaders.
Also you can choose between between different filesystems, the filesystem options are automatically optimized for ssd's if it detects one.
The following filesystems can be used, which filesystem will suit to your needs. If you don't know which to choose, I will create a guide (soon) in an extra page:

- xfs
- btrfs
- f2fs
- ext4
- zfs

### CLI-Installer

The cli installer is completely written by us in C++. It provides equal functions to the GUI Installer but more customizable and some more features. Generally it is recommend for more advanced users, but the installation is kept quite simple and fast. Also it does support a configuration, which will set before the installation begin in the root directory and then will do with the options you choosen completely automatically.

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

The following security features are available:

- Firejail Toggle for using all packages which got a firejail profile will use any untrusted application in a sandbox environment and it will automatically update if you install any new package
- preconfigured dns servers, which uses DoH and DoT servers
- toggle for anonymized dnscrypt config and uses only dnscrypt servers
- hardened linux kernel

### Cachy Browser

The default browser of CachyOS is Cachy-Browser, which is a fork of the Librewolf Browser. We have added some extra security
improvements as it is compiled with more secure flags and performance related too.

## Simplicity

We have added to the distro a helper with a lot of features, which makes the usage easier if you are new to linux or just lazy.

### Kernel Manager

You can easily install kernels with optimization via a kernel manager, the kernel manager does also allow you to configure your own kernel and will compile it then which makes it easier for starters that are getting into kernel compiling.

### Package-installer

To the common package installer we provide a own package manager which helps you in updating the repo or installing packages. Packages are simply shown in group for a better understanding for which this package is used for

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