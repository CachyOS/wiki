---
title: Which Kernel does CachyOS provide and maintain
description: CachyOS Kernels, improvements, ... 
published: 1
date: 2022-06-17T02:36:21.775Z
tags: cachyos, kernel, performance
editor: markdown
dateCreated: 2021-11-25T07:07:09.929Z
---

# <center>Linux Kernel with several scheduler and other improvements</center>

## General Information

CachyOS provides kernels which improves the performance, security, also they bring extra features and other improvements. The following schedulers are supported:

- Standard Scheduler Completely Fair Scheduler (CFS) - linux-cachyos
- CacULE and CacULE-RDB created from Hamad Marri, maintained by CachyOS - linux-cachyos-cacule
- BitMap Queue (BMQ) Alfred Chen Scheduler - linux-cachyos-bmq
- Priority and Deadline based Skiplist multiple queue scheduler (PDS) - Alfred Chen Scheduler » linux-cachyos-pds
- Task Type Scheduler by [Hamad Marri (TT)](https://github.com/hamadmarri/TT-CPU-Scheduler) - linux-cachyos-tt
- BORE (Burst-Oriented Response Enhancer) CPU Scheduler by [firelzrd (BORE)](https://github.com/firelzrd/bore-scheduler) - linux-cachyos-bore

**All kernels are prebuilt in two different march versions (x86_64 and x86_64_v3) and also with the lto enabled kernels in the cachyos repo.**


**Including ZFS support, so there is no need anymore to rebuild the kernel if you're using ZFS. Every kernel is prebuilt with the corresponding ZFS headers.**

## Features

- Very customizable PKGBUILD with many features and improvements
- 5 Different scheduler are supported, CacULE-,CFS-,tt-,bmq-,bore-, and pds scheduler
- GCC/CLANG Optimization with automatically found cpu arch or also selectable cpu arch
- Choose between LLVM/LTO or GCC
- Choose between 300Hz, 500Hz, 600 Hz ,750Hz and 1000Hz
- Improved BFQ Scheduler
- Back-ported patches from linux-next
- General improved sysctl settings and upstream scheduler fixes
- Latest LRU Patch-set, default enabled
- Damon Reclaim enabled at default
- BBRv2 tcp_congestion_control
- LLVM ThinLTO provided with *-lto Kernel (in the cachyos-repo)
- LRNG Framework (default enabled)
- Android ANBOX patch-set
- Latest & improved ZSTD patch-set
- Latest BTRFS improvements & fixes
- KSMBD Module for Samba3 Server
- AMD PSTATE Driver enabled by default
- Clearlinux Patchset
- Control Flow Integrity (CFI) selectable when using LLVM
- ZFS Filesystem Support and prebuilt in the repo!
- WINESYNC Fastsync

## WINESYNC Usage:

Install the following packages from the AUR, if you get into issues:

- [winesync](https://aur.archlinux.org/packages/winesync)
- [winesync-dkms](https://aur.archlinux.org/packages/winesync-dkms)
- [winesync-header](https://aur.archlinux.org/packages/winesync-header)
- [winesync-udev-rule](https://aur.archlinux.org/packages/winesync-udev-rule)

And set the following environment variables in Lutris or Steam for WINESYNC to work.

```
WINEESYNC=0
WINEFSYNC=0
WINEFSYNC_FUTEX2=0
```

Also you need a wine/proton which includes the winesync patch. I would recommend to built one from [wine-tkg](https://github.com/Frogging-Family/wine-tkg-git) repo or you could install one already prebuilt in our repo.

## Other distros

- First I will release every kernel update with a complete patch for every scheduler and their config.
- Next I will implement a building system so it is possible to build the kernel for several distros.
- Maybe I will provide some releases for debian based distros.



## How to use CLANG/LLVM/LTO compiled Kernels on Nvidia driver with DKMS:

Not needed anymore, just install the latest dkms version (3.0.2).

## Support

You can join the CachyOS Discord with the following link:

<https://discord.gg/qJqj94uFwE>

or at Telegram:

<https://t.me/+zCzPX4cAFjk1MTYy>

## Donations are welcome for the maintenance of our compile server and the repo, a cup of coffee would be highly appreciated for maintaining this repo

<https://paypal.me/pttrr>

### Valueable Contributors

[Hamad Marri](https://github.com/hamadmarri) for the CacULE Scheduler, TT Scheduler

[SirLucjan (Piotr Gorski)](https://github.com/sirlucjan)

[Archlinux](https://archlinux.org) for this amazing linux operating system

[And all other Kernel Developers and Supporters](https://github.com/torvalds/linux)
