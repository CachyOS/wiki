---
title: Adding CachyOS Repository for Enhanced Arch Linux Performance
description: Step-by-step guide on how to add CachyOS repository to your Arch Linux system with x86_64-v3 support.
published: 1
date: 2023-08-17T17:59:28.658Z
tags: arch linux, cachyos, repo, x86_64-v3
editor: markdown
dateCreated: 2021-08-18T15:06:49.466Z
---

# Option 1: Automated Installation of cachyos repositories

We've made it easy for you! Simply run the following commands to use our helper script that does all the work for you.  😉

Run the following commands:
1. Get archive with script
```
wget https://mirror.cachyos.org/cachyos-repo.tar.xz
```
> If you don't have `wget`, install it with `sudo pacman -S wget`

2. Extract and enter into the archive
```
tar xvf cachyos-repo.tar.xz && cd cachyos-repo
```

3. Run script with sudo
```
sudo ./cachyos-repo.sh
```

#### Behaviour of script  
1. Script will auto-detect CPU architecture, if CPU has `x86-64-v4` or `x86-64-v3` support, script will automatically use the repositories which are optimized with this flag > and some other flags.
2. Script will backup your old `pacman.conf`.

For more information, check out our [GitHub](https://github.com/cachyos) or join our [Discord](https://discord.gg/k39qfrxPNa) community.

# Option 2: Manual Installation

1. Install the cachyos keyring
```
sudo pacman-key --recv-keys F3B607488DB35A47 --keyserver keyserver.ubuntu.com
```
```
sudo pacman-key --lsign-key F3B607488DB35A47
```

2. Install required packages
```
sudo pacman -U 'https://mirror.cachyos.org/repo/x86_64/cachyos/cachyos-keyring-3-1-any.pkg.tar.zst' 'https://mirror.cachyos.org/repo/x86_64/cachyos/cachyos-mirrorlist-17-1-any.pkg.tar.zst' 'https://mirror.cachyos.org/repo/x86_64/cachyos/cachyos-v3-mirrorlist-17-1-any.pkg.tar.zst' 'https://mirror.cachyos.org/repo/x86_64/cachyos/cachyos-v4-mirrorlist-5-1-any.pkg.tar.zst' 'https://mirror.cachyos.org/repo/x86_64/cachyos/pacman-6.0.2-13-x86_64.pkg.tar.zst'
```

## Check CPU compatibility
If you want to add our repositories manually, you must check the compatibility of the CPU with cachyos repositories.
> If you are using the script above to add cachyos repositories, you can skip the check.

### 1. Check support by running the following the command
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
  x86-64-v4
  x86-64-v3 (supported, searched)                                          
  x86-64-v2 (supported, searched)       
```

### 3. Adding cachyos repositories
You need to edit `pacman.conf` and add repositories.
```
sudo nano /etc/pacman.conf
```

#### if your CPU supports `x86-64`, then add only `[cachyos]` repositories
```
# cachyos repos
[cachyos]
Include = /etc/pacman.d/cachyos-mirrorlist
```

#### if your CPU supports `x86-64-v3`, then add `[cachyos-v3]`,`[cachyos-core-v3]`,`[cachyos-extra-v3]` and `[cachyos]`
```
# cachyos repos
## Only add if your CPU does v3 architecture
[cachyos-v3]
Include = /etc/pacman.d/cachyos-v3-mirrorlist
[cachyos-core-v3]
Include = /etc/pacman.d/cachyos-v3-mirrorlist
[cachyos-extra-v3]
Include = /etc/pacman.d/cachyos-v3-mirrorlist
[cachyos]
Include = /etc/pacman.d/cachyos-mirrorlist
```

#### if your CPU supports `x86-64-v4`, then add `[cachyos-v4]`, `[cachyos-v3]`, `[cachyos-core-v3]`, `[cachyos-extra-v3]` and `[cachyos]`
```
# cachyos repos
## Only add if your CPU does support x86-64-v4 architecture
[cachyos-v4]
Include = /etc/pacman.d/cachyos-v4-mirrorlist
[cachyos-v3]
Include = /etc/pacman.d/cachyos-v3-mirrorlist
[cachyos-core-v3]
Include = /etc/pacman.d/cachyos-v3-mirrorlist
[cachyos-extra-v3]
Include = /etc/pacman.d/cachyos-v3-mirrorlist
[cachyos]
Include = /etc/pacman.d/cachyos-mirrorlist
```

Finally, update your system with CachyOS packages:

```bash
sudo pacman -Syu
```
Enjoy improved system speed with CachyOS packages 🎉

Debug packages
--------------

We provide a debuginfod server for easy access to debug symbols via `gdb`. Set the following environment variable:

```bash
export DEBUGINFOD_URLS=https://debuginfod.cachyos.org
```

Debug packages are available in the `cachyos-debug-v3` repository. Add it with the following configuration:

```cfg
[cachyos-debug-v3]
Server = https://debug.cachyos.org/repo/$arch_v3/$repo
[cachyos-core-debug-v3]
Server = https://debug.cachyos.org/repo/$arch_v3/$repo
[cachyos-extra-debug-v3]
Server = https://debug.cachyos.org/repo/$arch_v3/$repo
```

Uninstalling CachyOS repositories
---------------------------------

### Option 1: Automated Removal

Run these commands to remove the CachyOS repos from your system:

```sh
wget https://build.cachyos.org/cachyos-repo.tar.xz
tar xvf cachyos-repo.tar.xz
cd cachyos-repo
sudo ./cachyos-repo.sh --remove
```

### Option 2: Manual Removal

1.  Backup or remove the config file at `/etc/pacman.conf`.
2.  Run this command:

```bash
sudo mv /etc/pacman.conf.bak /etc/pacman.conf
```

3.  Switch to default Arch Linux packages with this command:

```
sudo pacman -Suuy
```