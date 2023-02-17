---
title: Which Kernel does CachyOS provide and maintain
description: CachyOS Kernels, improvements, ...
published: 1
date: 2023-02-17T15:49:23.733Z
tags: cachyos, kernel, performance
editor: markdown
dateCreated: 2021-11-25T07:07:09.929Z
---

  <h1 align="center">CachyOS</h1>
  <p align="center">CachyOS ships improved kernels that improve performance and other aspects.</p>
</div>

## 🌐 General Information about kernels
The Schedulers listed below are supported:

### 🧬 linux-cachyos uses as default the BORE scheduler
We provided all of these CPU schedulers because each scheduler performs differently and depends on usage. Please test it and choose what suits your requirements.
- **(BORE) - Burst-Oriented Response Enhancer** Scheduler by [firelzrd (BORE)](https://github.com/firelzrd/bore-scheduler)
  - `linux-cachyos` - Default kernel and we decided to ship BORE by default, but the scheduler could be changed in the future.
  - `linux-cachyos-bore` - If we decide to change the scheduler in the future, we still want to provide BORE.
- **(TT) - Task Type** Scheduler by [Hamad Marri](https://github.com/hamadmarri/TT-CPU-Scheduler) - `linux-cachyos-tt` / `linux-tt`
- **(BMQ) - BitMap Queue** by Alfred Chen - `linux-cachyos-bmq`
- **(PDS) - Priority and Deadline based Skiplist multiple queue** by Alfred Chen - `linux-cachyos-pds`
- **(CFS) - Standard Scheduler Completely Fair Scheduler** - `linux-cachyos-cfs`

### :books: Archived schedulers
- **CacULE and CacULE-RDB** by Hamad Marri, supported by CachyOS in the past as - `linux-cachyos-cacule`  
  ***ATTENTION:** Not supported after version 6.1. If you still want to use it, you can get it from the archive repository - [linux-cacule](https://github.com/ptr1337/linux-cacule)*
> All kernels are prebuilt in two different march versions **(x86-64, x86-64-v3 and x86-64-v4)** and also with the **LTO-enabled** kernels in the cachyos repositories.

## 🎯 Features
Here is a list of features of linux kernels prebuilt in `x86-64-v4`, `x86-64-v3` and `x86-64` in the CachyOS repositories.

#### :hammer_and_wrench: Advanced building & compiling
- Very customizable PKGBUILD with many features and improvements.
- `GCC/CLANG` Optimization with automatically found CPU architecture or also selectable CPU architecture.
- Choose between `LLVM/LTO & Thin-LTO` or `GCC` - *experimental GCC LTO support is available.*
- Choose between 300Hz, 500Hz, 600 Hz ,750Hz and 1000Hz. Defaults to 500Hz for BORE/CFS and 1000Hz for other schedulers.
- Kernel Control Flow Integrity (kCFI) selectable when using `LLVM` - *patched llvm can be found in the cachyos-repositories.*

#### :abacus: CPU enhancements
- 5 Different scheduler are supported,`CFS`,`tt`,`bmq`,`bore`, and `pds` scheduler.
- AMD PSTATE EPP and AMD PSTATE Guided Driver enabled by default and with enhancements patches/fixes.
- Latency Nice Patchset included usuage with `ananicy-cpp` [feature branch](https://lore.kernel.org/lkml/20220925143908.10846-1-vincent.guittot@linaro.org/T/#t).
- RCU fixes and improvements.

#### :bookmark_tabs: Filesystem & memory
- Latest BTRFS/XFS/EXT4 improvements & fixes.
- ZFS Filesystem Support and prebuilt in the repository.
- Latest & improved ZSTD 1.5.4 patch-set.
- UserKSM daemon from pf.
- Improved BFQ Scheduler.
- support for bcachefs.
- [per VMA lock](https://lore.kernel.org/lkml/20230109205336.3665937-1-surenb@google.com/T/#ma04517b963591298a9eb76d96d2c453256a4d9ab) - *default disabled*
- zram patches from upstream

#### &#128423; Network 
- BBRv2 tcp_congestion_control.
- KSMBD Module for Samba3 Server.

#### :arrow_heading_down: Other features
- Selected patches from ClearLinux
- Back-ported patches from `linux-next`.
- Scheduler patches from linux-next/tip.
- General improved sysctl settings and upstream scheduler fixes.
- LRNG Framework - *default disabled*
- OpenRGB and ACS Override support.
- HDR Patches for AMD GPU's and gamescope
- KVM Performance Improvement from Yu Zhao
- Objtool Patches to reduce the memory usage
- maple-tree and MG-LRU fixes from upstream

## We are providing a [repositories](https://mirror.cachyos.org/) which includes all kernels in x86-64-v4,x86-64-v3 and x86-64 and more performance-optimized packages
How to add cachyos repositories automatically with compatibility detection is described below.

## 🦾 Automatic adding of cachyos repositories
Run following commands:
1. Get archive with script
```
wget https://mirror.cachyos.org/cachyos-repo.tar.xz
```
> If don't have `wget`, install them by `sudo pacman -S wget`

2. Extract and enter into the archive
```
tar xvf cachyos-repo.tar.xz && cd cachyos-repo
```

3. Run script with sudo
```
sudo ./cachyos-repo.sh
```

#### Behaviour of script  
1. Script will auto-detect CPU architecture, if CPU have `x86-64-v4` or `x86-64-v3` support, script will automatically use the repositories which are optimized with this flag > and some other flags.
2. Script will backup your old `pacman.conf`.

## ✋ Manually
1. Add both keys
```
sudo pacman-key --recv-keys F3B607488DB35A47 --keyserver keyserver.ubuntu.com
```
```
sudo pacman-key --lsign-key F3B607488DB35A47
```

2. You can download first initial packages
```
sudo pacman -U 'https://mirror.cachyos.org/repo/x86_64/cachyos/cachyos-keyring-2-1-any.pkg.tar.zst' 'https://mirror.cachyos.org/repo/x86_64/cachyos/cachyos-mirrorlist-15-1-any.pkg.tar.zst' 'https://mirror.cachyos.org/repo/x86_64/cachyos/cachyos-v3-mirrorlist-15-1-any.pkg.tar.zst' 'https://mirror.cachyos.org/repo/x86_64/cachyos/cachyos-v4-mirrorlist-3-1-any.pkg.tar.zst' 'https://mirror.cachyos.org/repo/x86_64/cachyos/pacman-6.0.2-10-x86_64.pkg.tar.zst'
```

## Check CPU compatibility
If you want to add our repositories manually, you must check the compatibility of the CPU with cachyos repositories.
> If you use script above for adding cachyos repositories, you can skip checking.

### 1. Check support by the following the command
```
/lib/ld-linux-x86-64.so.2 --help | grep supported
```

### 2. Understanding of command output
Pay attention to the following text with brackets. **(supported, searched)**
- If you see `x86-64-v4 (supported, searched)`, that means the **CPU is compatible** and can use **x86-64-v4** instruction set.
- If you see `x86-64-v4`, that means the **CPU is incompatible** and can't use **x86-64-v4** instruction set.

#### Example of CPU compatible with x86-64-v4 instruction set
```
> /lib/ld-linux-x86-64.so.2 --help | grep supported
  x86-64-v4 (supported, searched)
  x86-64-v3 (supported, searched)
  x86-64-v2 (supported, searched)
  haswell (AT_PLATFORM; supported, searched)
  tls (supported, searched)
  avx512_1 (supported, searched)
  x86_64 (supported, searched)
```

#### Example of CPU incompatible with x86-64-v4 instruction set
```
  > /lib/ld-linux-x86-64.so.2 --help | grep supported
     STDIN
  40 Subdirectories of glibc-hwcaps directories, in priority order:
  41   x86-64-v4
  42   x86-64-v3 (supported, searched)                                          
  43   x86-64-v2 (supported, searched)       
```

### 3. Adding cachyos repositories
You need edit `pacman.conf` and add repositories.
```
sudo nano /etc/pacman.conf
```

#### if CPU support `x86-64`, then add only `[cachyos]` repositories
```
# cachyos repos
## Only add if your CPU does v3 architecture
[cachyos]
Include = /etc/pacman.d/cachyos-mirrorlist
```

#### if CPU support `x86-64-v3`, then add `[cachyos-v3]`,`[cachyos-community-v3]` and `[cachyos]`
```
# cachyos repos
## Only add if your CPU does v3 architecture
[cachyos-v3]
Include = /etc/pacman.d/cachyos-v3-mirrorlist
[cachyos-community-v3]
Include = /etc/pacman.d/cachyos-v3-mirrorlist
[cachyos]
Include = /etc/pacman.d/cachyos-mirrorlist
```

#### if CPU support `x86-64-v4`, then add `[cachyos-v4]`, `[cachyos-v3]`, `[cachyos-community-v3]` and `[cachyos]`
```
# cachyos repos
## Only add if your CPU does support x86-64-v4 architecture
[cachyos-v4]
Include = /etc/pacman.d/cachyos-v4-mirrorlist
[cachyos-v3]
Include = /etc/pacman.d/cachyos-v3-mirrorlist
[cachyos-community-v3]
Include = /etc/pacman.d/cachyos-v3-mirrorlist
[cachyos]
Include = /etc/pacman.d/cachyos-mirrorlist
```

## Other GNU/Linux distributions
- Complete patch for simple patching on the kernel
- It is planned to implement into our kernel builder from cachyos buildsystem, which works also on other distributions.

### Gentoo
Its a community maintained ebuild from a user, which can be used for a dynamic building right [here](https://github.com/sandikata/ROKO__/tree/master/sys-kernel/cachyos-sources)

Or simply run:
```
eselect repository enable ROKO__
emaint sync -r ROKO__
```
### Fedora
[Port](https://github.com/sirlucjan/copr-linux-cachyos) of kernel linux-cachyos-bore and linux-cachyos-bore-lto by [bieszczaders](https://copr.fedorainfracloud.org/coprs/bieszczaders/kernel-cachyos/)

Only x86_64_v3 versions are available. Check support by the following the command
```
/lib64/ld-linux-x86-64.so.2 --help | grep "(supported, searched)"

```
If it does not detect x86_64_v3 support do not install the kernel. Otherwise you will end up with a non-functioning operating system!

##### Installation Instructions: 

```
sudo dnf copr enable bieszczaders/kernel-cachyos
```

and next

```
sudo dnf install kernel-cachyos-bore
```

OR
```
sudo dnf install kernel-cachyos-bore-lto
```

##### Install drivers for LTO kernel
If you build external modules (e.g. for Nvidia graphics card drivers) and use the -lto kernel, you need to install the following dependencies:
```
sudo dnf install clang clang-devel llvm lld
```

## ◀️ How to Backup the config and use the native Arch Packages
- Remove or Backup the config located at /etc/pacman.conf
- then run `sudo mv /etc/pacman.conf.bak /etc/pacman.conf`
- Then run following command to switch the packages to the default arch packages `sudo pacman -Suuy`

## 🔧 How to use CLANG/LLVM/LTO compiled Kernels on Nvidia driver with DKMS
> Not needed anymore, just install the latest dkms version from our repo.

## 🗣️ Support - get in touch with CachyOS community
**Discord:** <https://discord.gg/qJqj94uFwE> <br />
**Telegram:** <https://t.me/+zCzPX4cAFjk1MTYy> <br />
**Matrix:** <https://matrix.cachyos.org> <br />

## 🌱 Donations are welcome for the build server for the repositories or a cup of coffee for maintaining our repositories.
**PayPal:** <https://paypal.me/pttrr> <br />
**Patreon:** <https://www.patreon.com/CachyOS> <br />
**BTC:** bc1qmwglfchlc335du6pcu6w64cexu7cck0mzhyw42 <br />
**ETH:** 0xc2dc77327F78A7B85Db3941Eb49e74F41E961649

## Valueable Contributors
[Hamad Marri](https://github.com/hamadmarri) for the TT Scheduler <br />
[Archlinux](https://archlinux.org) for the great linux operating system <br />
[And all other Kernel Developers and Supporters](https://github.com/torvalds/linux) <br />
