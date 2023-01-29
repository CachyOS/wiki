---
title: Adding CachyOS repo for optimized packages
description: Basic tutorial for adding CachyOS repo to your system for packages compiled with x86_64-v3 support.
published: 1
date: 2023-01-29T14:37:50.032Z
tags: arch linux, cachyos, repo, x86_64-v3
editor: markdown
dateCreated: 2021-08-18T15:06:49.466Z
---

## Option 1: Automated Installation

We've made it easy for you! Simply run the following commands to use our helper script that does all the work for you.  😉

```sh
wget https://build.cachyos.org/cachyos-repo.tar.xz
tar xvf cachyos-repo.tar.xz
cd cachyos-repo
sudo ./cachyos-repo.sh
```

The script will back up your old pacman.conf file, and automatically detect your architecture. If your CPU supports x86-64-v3 or x86-64-v4, it will use optimized repositories.

💡 For more information, check out our [GitHub](https://github.com/cachyos) or join our [Discord](https://discord.gg/k39qfrxPNa) community.

## Option 2: Manual Installation

First, receive and sign our keys:

```sh
sudo pacman-key --recv-keys F3B607488DB35A47 --keyserver keyserver.ubuntu.com
sudo pacman-key --lsign-key F3B607488DB35A47
```

Next, install the mirrorlist and keyring packages as well as customized pacman:

```
sudo pacman -U 'https://mirror.cachyos.org/repo/x86_64/cachyos/cachyos-keyring-2-1-any.pkg.tar.zst' 'https://mirror.cachyos.org/repo/x86_64/cachyos/cachyos-mirrorlist-14-1-any.pkg.tar.zst' 'https://mirror.cachyos.org/repo/x86_64/cachyos/cachyos-v3-mirrorlist-14-1-any.pkg.tar.zst' 'https://mirror.cachyos.org/repo/x86_64/cachyos/cachyos-v4-mirrorlist-2-1-any.pkg.tar.zst' 'https://mirror.cachyos.org/repo/x86_64/cachyos/pacman-6.0.2-10-x86_64.pkg.tar.zst'
```

Check if your CPU supports x86-64-v3 or x86-64-v4 by running the following command:

```
/lib/ld-linux-x86-64.so.2 --help | grep "x86-64 (supported, searched)"
```

If you get an output, then your CPU supports `x86_64-v3` or `x86-64-v4`.

### For `x86_64-v3`: Add the following to the Arch Linux repositories:

```cfg
[cachyos-v3]
Include = /etc/pacman.d/cachyos-v3-mirrorlist
[cachyos-community-v3]
Include = /etc/pacman.d/cachyos-v3-mirrorlist
[cachyos]
Include = /etc/pacman.d/cachyos-mirrorlist
```


### For `x86_64-v4`: Add the following

Then add the following over the Arch Linux repos

```cfg
[cachyos-v4]
Include = /etc/pacman.d/cachyos-v4-mirrorlist
[cachyos-v3]
Include = /etc/pacman.d/cachyos-v3-mirrorlist
[cachyos-community-v3]
Include = /etc/pacman.d/cachyos-v3-mirrorlist
[cachyos]
Include = /etc/pacman.d/cachyos-mirrorlist
```

### With `x86_64`

Add the following over the Arch Linux repos

```cfg
[cachyos]
Include = /etc/pacman.d/cachyos-mirrorlist
```

And finally update your system with CachyOS packages
```bash
sudo pacman -Syu
```
Now enjoy your system speed going up by our packages 😛

## Debug packages
We provide a debuginfod server, with this the debuginfod can be simply fetched with `gdb`.
Just add following to your enviroment or export it:

`export DEBUGINFOD_URLS=https://debuginfod.cachyos.org`

Debug packages can be found in the cachyos-debug-v3 repo.
Simply add the cachyos-debug-v3 repo:

```cfg
[cachyos-debug-v3]
Server = https://debug.cachyos.org/repo/$arch_v3/$repo
[cachyos-community-debug-v3]
Server = https://debug.cachyos.org/repo/$arch_v3/$repo
```

## Uninstalling

### Automatically

Execute these commands to remove CachyOS repos from your system

```
wget https://build.cachyos.org/cachyos-repo.tar.xz
tar xvf cachyos-repo.tar.xz
cd cachyos-repo
sudo ./cachyos-repo.sh --remove
```

### Manually

1. Remove or Backup the config located at /etc/pacman.conf
2. Then execute this command

```
sudo mv /etc/pacman.conf.bak /etc/pacman.conf
```

3. Run following command to switch the packages to the default Arch packages

```
sudo pacman -Suuy
```

## Nvidia driver with Clang compiled kernels

Not needed anymore, since dkms 3.0.1 😃

If you got any question, just hit me up!
