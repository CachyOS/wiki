---
title: Adding CachyOS repo for optimized packages
description: Basic tutorial for adding CachyOS repo to your system for packages compiled with x86_64-v3 support.
published: 1
date: 2022-11-17T12:34:40.441Z
tags: arch linux, cachyos, repo, x86_64-v3
editor: markdown
dateCreated: 2021-08-18T15:06:49.466Z
---

## Automatically

Execute these commands to use our helper script that does the thing automatically 😉

```
wget https://build.cachyos.org/cachyos-repo.tar.xz
tar xvf cachyos-repo.tar.xz
cd cachyos-repo
sudo ./cachyos-repo.sh
```

This script will backup your old pacman.conf, and will also auto-detect you architecture, if your CPU have x86-64-v3 support, it will automatically use the repos which are optimized with this flag and some other flags.

💡 For more information, check repo's description [CachyOS](https://github.com/cachyos) or via [Discord](https://discord.gg/k39qfrxPNa)

## Manually

First, receive and sign our keys:

```sh
sudo pacman-key --recv-keys F3B607488DB35A47 --keyserver keyserver.ubuntu.com
sudo pacman-key --lsign-key F3B607488DB35A47
```

Then install our mirrorlist & keyring packages

```
sudo pacman -U 'https://mirror.cachyos.org/repo/x86_64/cachyos/cachyos-keyring-2-1-any.pkg.tar.zst' 'https://mirror.cachyos.org/repo/x86_64/cachyos/cachyos-mirrorlist-13-1-any.pkg.tar.zst' 'https://mirror.cachyos.org/repo/x86_64/cachyos/cachyos-v3-mirrorlist-13-1-any.pkg.tar.zst'
```

After that, you need to check your CPU for x86-64_v3 support x86_64_v3, which you can do by executing

```
/lib/ld-linux-x86-64.so.2 --help | grep "x86-64-v3 (supported, searched)"
```

If you get an output then your CPU supports `x86_64-v3`

### With `x86_64-v3`

Change the `Architecture` section to `x86_64 x86_64_v3` in `/etc/pacman.conf`

```
Architecture = x86_64 x86_64_v3
```

Then add the following under the Arch Linux repos

```cfg
[cachyos-v3]
Include = /etc/pacman.d/cachyos-v3-mirrorlist
[cachyos]
Include = /etc/pacman.d/cachyos-mirrorlist
```

### Without `x86_64-v3`

Add the following under the Arch Linux repos

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
Debug packages can be found in the cachyos-debug-v3 repo.
Simply add the cachyos-debug-v3 repo:

```cfg
[cachyos-debug-v3]
Include = /etc/pacman.d/cachyos-v3-mirrorlist
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
