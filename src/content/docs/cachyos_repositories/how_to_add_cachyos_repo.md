---
title: Adding CachyOS Repository for Enhanced Arch Linux Performance
description: Step-by-step guide on how to add CachyOS repository to your Arch Linux system with x86_64-v3 support.
published: 1
date: 2023-08-17T17:59:28.658Z
tags: arch linux, cachyos, repo, x86_64-v3
editor: markdown
dateCreated: 2021-08-18T15:06:49.466Z
---

Installing CachyOS repositories
-------------------------------

### Option 1: Automated Installation of cachyos repositories

We've made it easy for you! Simply run the following commands to use our helper script that does all the work for you.  😉

Run the following commands:
1. Get archive with the script

```sh
curl https://mirror.cachyos.org/cachyos-repo.tar.xz -o cachyos-repo.tar.xz
```
2. Extract and enter into the archive
```sh
tar xvf cachyos-repo.tar.xz && cd cachyos-repo
```

3. Run the script with sudo
```sh
sudo ./cachyos-repo.sh
```

#### Behavior of the script
1. The script will auto-detect the CPU architecture, if the CPU has `x86-64-v4` or `x86-64-v3` support, the script will automatically use the repositories which are optimized with this flag > and some other flags.
2. The script will backup your old `pacman.conf`.

For more information, check out our [GitHub](https://github.com/cachyos) or join our [Discord](https://discord.gg/cachyos-862292009423470592) community.

### Option 2: Manual Installation

1. Install the cachyos keyring
```sh
sudo pacman-key --recv-keys F3B607488DB35A47 --keyserver keyserver.ubuntu.com
sudo pacman-key --lsign-key F3B607488DB35A47
```

2. Install required packages
```sh
sudo pacman -U 'https://mirror.cachyos.org/repo/x86_64/cachyos/cachyos-keyring-20240331-1-any.pkg.tar.zst' \
               'https://mirror.cachyos.org/repo/x86_64/cachyos/cachyos-mirrorlist-18-1-any.pkg.tar.zst'    \
               'https://mirror.cachyos.org/repo/x86_64/cachyos/cachyos-v3-mirrorlist-18-1-any.pkg.tar.zst' \
               'https://mirror.cachyos.org/repo/x86_64/cachyos/cachyos-v4-mirrorlist-6-1-any.pkg.tar.zst'  \
               'https://mirror.cachyos.org/repo/x86_64/cachyos/pacman-6.1.0-5-x86_64.pkg.tar.zst'
```

## Check CPU compatibility
If you want to add our repositories manually, you must check the compatibility of your CPU with CachyOS repositories.
> If you are using the script above to add the CachyOS repositories, you can skip the check.

#### 1. Check support by running the following the command
```sh
/lib/ld-linux-x86-64.so.2 --help | grep supported
```

#### 2. Understanding the command output
Pay attention to the following text with brackets. **(supported, searched)**
- If you see `x86-64-v4 (supported, searched)`, that means the **CPU is compatible** and can use the **x86-64-v4** instruction set.
- If you see `x86-64-v4`, that means the **CPU is incompatible** and cannot use the **x86-64-v4** instruction set.

#### Example of CPU compatible with the x86-64-v4 instruction set
```
> /lib/ld-linux-x86-64.so.2 --help | grep supported
  x86-64-v4 (supported, searched)
  x86-64-v3 (supported, searched)
  x86-64-v2 (supported, searched)
```

#### Example of CPU incompatible with the x86-64-v4 instruction set
```
> /lib/ld-linux-x86-64.so.2 --help | grep supported
  x86-64-v3 (supported, searched)
  x86-64-v2 (supported, searched)
```

### 3. Adding the CachyOS repositories
You need to edit `pacman.conf` and add the repositories **ABOVE THE EXISTING ARCHLINUX REPOS**
```sh
sudo nano /etc/pacman.conf
```

#### If your CPU supports only `x86-64`, then only add the `[cachyos]` repository
```ini
# cachyos repos
[cachyos]
Include = /etc/pacman.d/cachyos-mirrorlist
```

#### If your CPU supports `x86-64-v4`, then add `[cachyos-v4]`, `[cachyos-core-v4]`, `[cachyos-extra-v4]` and `[cachyos]`
```ini
# cachyos repos
## Only add if your CPU supports the x86-64-v4 architecture
[cachyos-v4]
Include = /etc/pacman.d/cachyos-v4-mirrorlist
[cachyos-core-v4]
Include = /etc/pacman.d/cachyos-v4-mirrorlist
[cachyos-extra-v4]
Include = /etc/pacman.d/cachyos-v4-mirrorlist
[cachyos]
Include = /etc/pacman.d/cachyos-mirrorlist
```

#### If your CPU supports `x86-64-v3`, then add `[cachyos-v3]`,`[cachyos-core-v3]`,`[cachyos-extra-v3]` and `[cachyos]`
```ini
# cachyos repos
## Only add if your CPU supports the x86-64-v3 architecture
[cachyos-v3]
Include = /etc/pacman.d/cachyos-v3-mirrorlist
[cachyos-core-v3]
Include = /etc/pacman.d/cachyos-v3-mirrorlist
[cachyos-extra-v3]
Include = /etc/pacman.d/cachyos-v3-mirrorlist
[cachyos]
Include = /etc/pacman.d/cachyos-mirrorlist
```

Finally, update your system with the CachyOS packages:

```bash
sudo pacman -Syu
```
Enjoy your improved system speed with optimized CachyOS packages! 🎉

Debug packages
--------------

We provide a debuginfod server for easy access to debug symbols via `gdb`. Set the following environment variable:

```bash
export DEBUGINFOD_URLS=https://debuginfod.cachyos.org
```

Debug packages are available in the `cachyos-debug-v3` repository. Add it with the following configuration:

```ini
[cachyos-debug-v3]
Server = https://debug.cachyos.org/repo/$arch_v3/$repo
[cachyos-core-debug-v3]
Server = https://debug.cachyos.org/repo/$arch_v3/$repo
[cachyos-extra-debug-v3]
Server = https://debug.cachyos.org/repo/$arch_v3/$repo
```

Uninstalling CachyOS repositories
---------------------------------

**ATTENTION:** Since pacman 6.1 Arch has introduced a validation layer for features. Since we provide a fork of pacman, which adds various features, there will be an influx of warnings, when downgrading to the archlinux pacman, due the missing "Installed from" Feature.
We have tried to push this feature to pacman, since various people and maintainer were interested in, but got declined by the pacman maintainer.

This can be resolved with installing the archlinux pacman first before [reinstalling all packages](https://wiki.archlinux.org/title/Pacman/Tips_and_tricks#Reinstalling_all_packages).
```sh
sudo pacman -S core/pacman
```

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

```sh
sudo mv /etc/pacman.conf.bak /etc/pacman.conf
```

3.  Switch to default Arch Linux packages with this command:

```sh
sudo pacman -S core/pacman
pacman -Qqn | sudo pacman -S -
sudo pacman -Syu
```
