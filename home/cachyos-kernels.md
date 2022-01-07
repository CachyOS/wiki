---
title: Which Kernel does CachyOS provide and maintain
description: CachyOS Kernels, improvements, ... 
published: 1
date: 2022-01-07T09:43:13.334Z
tags: cachyos, kernel, performance
editor: markdown
dateCreated: 2021-11-25T07:07:09.929Z
---

# <center>Linux Kernel with several scheduler and other improvements</center>

## General Informations

The CachyOS are improved kernels which improve the performance and other improvements. Following Scheduler are supported:

- Standard Kernel Completely Fair Scheduler (CFS) - linux-cachyos
- CacULE and CacULE-RDB created from Hamad Marri, maintained by CachyOS - linux-cachyos-cacule
- BitMap Queue (BMQ) Alfred Chen Scheduler - linux-cachyos-bmq
- Priority and Deadline based Skiplist multiple queue scheduler (PDS) - Alfred Chen Scheduler » linux-cachyos-pds
- Task Type Scheduler by [Hamad Marri (TT)](https://github.com/hamadmarri/TT-CPU-Scheduler) - linux-cachyos-tt
- BORE (Burst-Oriented Response Enhancer) CPU Scheduler by [firelzrd (BORE)](https://github.com/firelzrd/bore-scheduler) - linux-cachyos-bore

**All kernels are prebuilt in two different march versions (x86_64 and x86_64_v3) and also with the lto enabled kernels in the cachyos repo.**

## Features

- Very customizable PKGBUILD with many features and improvements
- 6 Different scheduler are supported, CacULE-,CFS-,tt-,bmq-,bore-, and pds scheduler
- GCC/CLANG Optimization with automatically found cpu arch or also selectable cpu arch
- Choose between LLVM/LTO or GCC
- Choose between 500Hz, , 600 Hz ,750Hz, 1000Hz
- Improved BFQ Scheduler
- General improved sysctl settings and upstream scheduler fixes
- Latest LRU Patch-set
- BBRv2 tcp_congestion_control
- LLVM ThinLTO provided with \*-lto Kernel (in the cachyos-repo)
- LRNG Framework (default enabled)
- WINEFSYNC and the new futex wait v implementation (futex2) which will be upstream in 5.17
- Android ANBOX patch-set
- page-table-patch included
- Latest & improved ZSTD patch-set
- Some Security related patches. More here: [Fork-Brute](https://github.com/ptr1337/kernel-patches/blob/master/5.15/0001-security-patches.patch) [spectre](https://github.com/ptr1337/kernel-patches/blob/master/5.15/0001-spectre-patches.patch)
- Latest BTRFS improvements & fixes
- KSMBD Module for Samba3 Server
- Using the latest MG-LRU v6 patch paired with and the new implemented damon. The damon is disabled at default, but can be enabled in the PKGBUILD
- AMD PSTATE Driver
- Clearlinux Patchset
- Control Flow Integrity (CFI) slectable when using LLVM
- experimental PGO building selectable (at the moment not working)

## Other distros

- First I will release every kernel update with a complete patch for every scheduler and their config.
- Next I will implement a building system so it is possible to build the kernel for several distros.
- Maybe I will provide some releases for debian based distros.

## Some Tips & Tricks

You can tune the scheduler by setting these sysctl values

```
net.core.netdev_max_backlog = 16384
net.core.somaxconn = 8192
net.core.rmem_default = 1048576
net.core.rmem_max = 16777216
net.core.wmem_default = 1048576
net.core.wmem_max = 16777216
net.core.optmem_max = 65536
net.ipv4.tcp_rmem = 4096 1048576 2097152
net.ipv4.tcp_wmem = 4096 65536 16777216
net.ipv4.udp_rmem_min = 8192
net.ipv4.udp_wmem_min = 8192
net.ipv4.tcp_fastopen = 3
net.ipv4.tcp_keepalive_time = 60
net.ipv4.tcp_keepalive_intvl = 10
net.ipv4.tcp_keepalive_probes = 6
net.ipv4.conf.default.log_martians = 1
net.ipv4.conf.all.log_martians = 1
net.ipv4.tcp_mtu_probing = 1
net.ipv4.tcp_syncookies = 1
net.core.default_qdisc = cake
net.ipv4.tcp_congestion_control = bbr2
```

## We are providing a [repo](https://mirror.cachyos.org/) which includes all kernels in generic-v3 and generic and more optimized packages

### How to add our repo automatically with CPU detection (if x86-64-v3 is supported)

**Just run following command:**

## **automatic march detection and changing the pacman.conf:**

```
wget https://mirror.cachyos.org/cachyos-repo.tar.xz
tar xvf cachyos-repo.tar.xz
cd repo
sudo ./cachyos-repo.sh
```

---

--

## **manually**:

````
sudo pacman-key --recv-keys F3B607488DB35A47 --keyserver keyserver.ubuntu.com

sudo pacman-key --lsign-key F3B607488DB35A47

sudo pacman -U 'https://build.cachyos.org/cachyos-keyring-2-1-any.pkg.tar.zst' 'https://build.cachyos.org/cachyos-mirrorlist-8-1-any.pkg.tar.zst' 'https://build.cachyos.org/cachyos-v3-mirrorlist-8-1-any.pkg.tar.zst'

  **Checking x86_64_v3 cpu support:**

  /lib/ld-linux-x86-64.so.2 --help | grep "x86-64-v3 (supported, searched)"

  if you get an output change at the /etc/pacman.conf following:
  ```
  #Architecture = auto
  Architecture = x86_64 x86_64_v3
  ```
  add following under the arch repos the "-v3" repos only if they are supported:
  ```
  # cachyos repos
  [cachyos-desktop-v3]
  Include = /etc/pacman.d/cachyos-v3-mirrorlist
  [cachyos-v3]
  Include = /etc/pacman.d/cachyos-v3-mirrorlist
  [cachyos-desktop]
  Include = /etc/pacman.d/cachyos-mirrorlist
  [cachyos]
  Include = /etc/pacman.d/cachyos-mirrorlist
  ``\`
````

---

```
This script will also backup your old pacman.conf.

This script will auto-detect you architecture, if your CPU have x86-64-v3 support, it will automatically use the repos which are optimized with this flag and some other flags.

Also all provided Kernels, Browsers, ... are optimized and compiled.

## How to backup the old config and use the native Arch Packages

- Remove or Backup the config located at /etc/pacman.conf
- then run `sudo mv /etc/pacman.conf.bak /etc/pacman.conf`
- Then run following command to switch the packages to the default arch packages `sudo pacman -Suuy`


More information's you will find here [CachyOS](https://github.com/cachyos) or [Discord](https://discord.gg/k39qfrxPNa)
```

## How to use CLANG/LLVM/LTO compiled Kernels on Nvidia driver with DKMS:

Not needed anymore, just install the latest dkms version (3.0.2).

## Donations are welcome for the compile server for the repo or a cup of coffee for maintain this repo

<https://paypal.me/pttrr>

### Valueable Contributors

[Hamad Marri](https://github.com/hamadmarri) for the CacULE Scheduler and TT Scheduler

[BL4CKH47H4CK3R](https://github.com/BL4CKH47H4CK3R) for Optimization, Bug Hunting & Support

[SirLucjan (Piotr Gorski)](https://github.com/sirlucjan)

[Archlinux](https://archlinux.org) for the great linux operating system

[And all other Kernel Developers and Supporters](https://github.com/torvalds/linux)
