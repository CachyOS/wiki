---
title: CachyOS
description: Operating System
published: 1
date: 2022-06-17T13:13:59.699Z
tags: arch, arch linux, archlinux, cachy, cachyos, cacule, cpu scheduler, gnu, linux
editor: markdown
dateCreated: 2021-07-04T01:32:08.787Z
---

# CachyOS
CachyOS is a Linux distribution based on [Arch Linux](https://archlinux.org/). By default, CachyOS uses the [linux-cachyos](https://github.com/CachyOS/linux-cachyos) kernel, which is the stock Arch Linux kernel modified to use the [BORE](https://github.com/firelzrd/bore-scheduler) scheduler and some extra performance improvements. The following sections describe the features of CachyOS:

## CachyOS Installer

**We provide two types of installer, one cli-installer which is completly selfwritten in C++ with a TUI. The installer has many different features to customize the install process.
Also we provide a GUI-Installer which is based on ArchISO and 
Calamares. It includes a NetInstall and a Offlineinstall. Using the netinstall you can choose between different kernels, DE's and several other packages for more customization.**

## Filesystems

CachyOS's GUI-Installer offers the following filesystems to choose from:

- ext4
- btrfs
- xfs
- f2fs
# ZFS is also supported!

any many more!

All the provided custom kernels come with the zfs module already built in.

## CachyOS - DE's
You can select at the online install between the following DE's:
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


## Adding our CachyOS repo for any Arch based distro
Here you will find a how-to add the repo:

[How-to add cachyos-repo](https://wiki.cachyos.org/en/home/Repo)

## KDE and Plasma and other desktop based packages

Most desktop packages are compiled with ThinLTO optimization, security flags, and performance improvements. 

## Cachy Browser
The default browser of CachyOS is Cachy-Browser, which is a fork of the Librewolf Browser. We have added some extra security 
improvements as it is compiled with more secure flags and performance related too.

## Support

You can join the CachyOS Discord with the following link:

<https://discord.gg/qJqj94uFwE>

or at Telegram:

<https://t.me/+zCzPX4cAFjk1MTYy>

## Donations are welcome for the maintenance of our compile server and the repo, a cup of coffee would be highly appreciated for maintaining this repo

<https://paypal.me/pttrr>


