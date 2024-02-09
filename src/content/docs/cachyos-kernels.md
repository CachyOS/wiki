---
title: Which Kernel does CachyOS provide and maintain
description: CachyOS Kernels, improvements, ...
published: 1
date: 2023-07-19T18:57:48.591Z
tags: cachyos, kernel, performance
editor: markdown
dateCreated: 2021-11-25T07:07:09.929Z
---

<div>
<br />
  <h1 align="center">CachyOS</h1>
  <p align="center">CachyOS ships improved kernels that improve performance and other aspects.</p>
</div>


- [General Information about kernels](#general-information-about-kernels)
  - [linux-cachyos](#linux-cachyos)
  - [Features](#features)
- [CachyOS repositories](#cachyos-repositories)
  - [How to add CachyOS repositories](#how-to-add-cachyos-repositories)
  - [Check CPU compatibility](#check-cpu-compatibility)
- [Other GNU/Linux distributions](#other-gnulinux-distributions)
  - [Gentoo](#gentoo)
  - [Fedora](#fedora)
 - [Revert changes](#revert-changes)
 - [Support](#support)

# General Information about kernels
The Schedulers listed below are supported

## linux-cachyos
We have provided all of these CPU schedulers because each scheduler performs differently depending on usage. We recommend testing each one to determine which best suits your specific requirements.
- **(BORE) - Burst-Oriented Response Enhancer** Scheduler by [firelzrd (BORE)](https://github.com/firelzrd/bore-scheduler) `linux-bore` / `linux-cachyos-bore`
- **(EEVDF + BORE) - Earliest Eligiable Virtual Deadline First + Burst-Oriented Response Enhancer** [EEVDF](https://lwn.net/Articles/927530/) is a replacement for the CFS Scheduler from Peter Zijlstra `linux-cachyos`
- **(EEVDF)** - Earliest Eligiable Virtual Deadline First `linux-cachyos-eevdf`
- **(TT) - Task Type** Scheduler by [Hamad Marri](https://github.com/hamadmarri/TT-CPU-Scheduler) - `linux-cachyos-tt` / `linux-tt`
- **(BMQ) - BitMap Queue** by Alfred Chen - `linux-cachyos-bmq`
- **(PDS) - Priority and Deadline based Skiplist multiple queue** by Alfred Chen - `linux-cachyos-pds`
- **(CFS) - Standard Scheduler Completely Fair Scheduler** - `linux-cachyos-cfs`

### 📚 Archived schedulers
- **CacULE and CacULE-RDB** by Hamad Marri, supported by CachyOS in the past as - `linux-cachyos-cacule`
  ***ATTENTION:** Not supported after version 6.1. If you still want to use it, you can get it from the archive repository - [linux-cacule](https://github.com/ptr1337/linux-cacule)*
> The CachyOS repositories provide prebuilt kernels in three different march versions: `x86-64`, `x86-64-v3`, and `x86-64-v4`. In addition, the repositories also offer LTO-enabled kernels.

## Features
Here is a list of features of Linux kernels prebuilt in the CachyOS repositories for `x86-64-v4`, `x86-64-v3`, and `x86-64`.

### 🛠️ Advanced building & compiling
- Very customizable PKGBUILD with many features and improvements.
- `GCC/CLANG` Optimization with automatically found CPU architecture or also selectable CPU architecture.
- Choose between `LLVM/LTO & Thin-LTO` or `GCC` - *experimental GCC LTO support is available.*
- Choose between 300Hz, 500Hz, 600 Hz ,750Hz and 1000Hz. Defaults to 500Hz for BORE/CFS/EEVDF and 1000Hz for other schedulers.
- Kernel Control Flow Integrity (kCFI) selectable when using `LLVM` - *patched llvm can be found in the cachyos-repositories.*

### 🧮 CPU enhancements
- 6 Different scheduler are supported: `CFS`,`TT`,`BMQ`,`BORE`, `EEDVF` and `PDS` scheduler.
- Latency Nice Patchset included usuage with `ananicy-cpp` [feature branch](https://lore.kernel.org/lkml/20220925143908.10846-1-vincent.guittot@linaro.org/T/#t).
- RCU fixes and improvements.
- EEVDF Scheduler used in linux-cachyos # https://lwn.net/Articles/927530/
### 📑 Filesystem & memory
- Latest BTRFS/XFS/EXT4 improvements & fixes.
- ZFS Filesystem Support and prebuilt in the repository.
- Latest & improved ZSTD 1.5.5 patch-set.
- UserKSM daemon from pf.
- Improved BFQ Scheduler.
- Support for bcachefs.
- [per VMA lock](https://lore.kernel.org/lkml/20230109205336.3665937-1-surenb@google.com/T/#ma04517b963591298a9eb76d96d2c453256a4d9ab) - *default disabled*
- zram patches from upstream

### 🌐 Network
- BBRv2 tcp_congestion_control.
- KSMBD Module for Samba3 Server.

### ⬇️ Other features
- Clearlinux Patchset.
- Back-ported patches from `linux-next`.
- Scheduler patches from linux-next/tip.
- General improved sysctl settings and upstream scheduler fixes.
- LRNG Framework - *default disabled*
- OpenRGB and ACS Override support.
- HDR Patches for AMD GPU's and gamescope
- KVM Performance Improvement from Yu Zhao
- Objtool Patches to reduce the memory usage
- maple-tree and MG-LRU fixes from upstream

# [CachyOS repositories](https://mirror.cachyos.org/)
Repositories contain Arch Linux and CachyOS unique packages, but re-build with flags focused on performance, stability and security.
- `x86-64-v4` - currently only kernel packages + LTO.
- `x86-64-v3` - all Arch Linux packages + LTO.
- `x86-64` - all Arch Linux packages + LTO.

## How to add CachyOS repositories
Watch [here](/cachyos_repositories/how_to_add_cachyos_repo/)

## Other GNU/Linux distributions
- Complete patch for simple patching on the kernel
- It is planned to implement into our kernel builder from cachyos buildsystem, which works also on other distributions.

### Gentoo
Its a community maintained ebuild from a user, which can be used for a dynamic building right [here](https://github.com/sandikata/ROKO__/tree/master/sys-kernel/cachyos-sources)

Or simply run:
```sh
eselect repository enable ROKO__
emaint sync -r ROKO__
```
### Fedora
[Port](https://github.com/sirlucjan/copr-linux-cachyos) of kernel linux-cachyos-bore and linux-cachyos-bore-lto by [bieszczaders](https://copr.fedorainfracloud.org/coprs/bieszczaders/kernel-cachyos/)

Only x86_64_v3 versions are available. Check support by the following the command
```sh
/lib64/ld-linux-x86-64.so.2 --help | grep "(supported, searched)"

```
If it does not detect x86_64_v3 support do not install the kernel. Otherwise you will end up with a non-functioning operating system!

##### Installation Instructions:

```sh
sudo dnf copr enable bieszczaders/kernel-cachyos
```

and next

```sh
sudo dnf install kernel-cachyos-bore
```

OR

```sh
sudo dnf install kernel-cachyos-bore-lto
```

##### Install drivers for LTO kernel
If you build external modules (e.g. for Nvidia graphics card drivers) and use the -lto kernel, you need to install the following dependencies:
```sh
sudo dnf install clang clang-devel llvm lld
```

## Revert changes
 How to Backup the config and use the native Arch Packages
- Remove or Backup the config located at /etc/pacman.conf
- then run `sudo mv /etc/pacman.conf.bak /etc/pacman.conf`
- Then run following command to switch the packages to the default arch packages `sudo pacman -Suuy`

## How to use CLANG/LLVM/LTO compiled Kernels on Nvidia driver with DKMS
> Not needed anymore, just install the latest dkms version from our repo.

## Support
**Discord:** <https://discord.gg/cachyos-862292009423470592> <br />
**Telegram:** <https://t.me/+zCzPX4cAFjk1MTYy> <br />
**Matrix:** <https://matrix.cachyos.org> <br />

## Donations are welcome for the build server for the repositories or a cup of coffee for maintaining our repositories.
**PayPal:** <https://paypal.me/pttrr> <br />
**Patreon:** <https://www.patreon.com/CachyOS> <br />
**BTC:** bc1qmwglfchlc335du6pcu6w64cexu7cck0mzhyw42 <br />
**ETH:** 0xc2dc77327F78A7B85Db3941Eb49e74F41E961649 <br />
**LTC:** LgGTwcEBcXqMgNT6XyyNWABMb7dZVtVg9w

## Valueable Contributors
[Hamad Marri](https://github.com/hamadmarri) for the TT Scheduler <br />
[Archlinux](https://archlinux.org) for the great linux operating system <br />
[And all other Kernel Developers and Supporters](https://github.com/torvalds/linux) <br />
