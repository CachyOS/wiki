---
title: CachyOS Repo with optimized packages and kernerls
description: Packages compiled with GEN3 and also normal generic and higher compile Flags
published: 1
date: 2021-08-18T15:11:40.841Z
tags: repo arch linux cachyos
editor: markdown
dateCreated: 2021-08-18T15:06:49.466Z
---

# We are providing a [repo](https://build.cachyos.org/) which includes all kernels in generic-v3 and generic and more optimized packages

## How to add our Repo automatically with CPU detection (if x86-64-v3 is supported)

### **Just run following command:**

`wget https://build.cachyos.org/cachyos-repo.tar.xz`
`tar xvf cachyos-repo.tar.xz`
`cd repo`
`sudo ./cachyos-repo.sh`



This script will also backup your old pacman.conf.
This script will auto-detect you architecture, if your CPU have x86-64-v3 support, it will automatically use the repos which are optimized with this flag and some other flags.

Also all provided Kernels, Browsers, ... are optimized and compiled.  

## How to Backup the config and use the native Arch Packages

- Remove or Backup the config located at /etc/pacman.conf
- then run `sudo mv /etc/pacman.conf.bak /etc/pacman.conf`
- Then run following command to switch the packages to the default arch packages `sudo pacman -Suuy`


 More information's you will find here [CachyOS](https://gitlab.com/cachyos) or [Discord](https://discord.gg/k39qfrxPNa)
