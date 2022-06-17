---
title: CachyOS Repo with optimized packages and kernels
description: Packages compiled with GEN3 and also normal generic and higher compile Flags
published: 1
date: 2022-06-17T01:37:54.386Z
tags: repo arch linux cachyos
editor: markdown
dateCreated: 2021-08-18T15:06:49.466Z
---

### How to add our Repo automatically with CPU detection (if x86-64-v3 is supported)

**Just run the following command:**

## **automatic march detection and changing the pacman.conf:**

    wget https://build.cachyos.org/cachyos-repo.tar.xz
    tar xvf cachyos-repo.tar.xz
    cd cachyos-repo
    sudo ./cachyos-repo.sh

* * *

\--

## **manually**:


      sudo pacman-key --recv-keys F3B607488DB35A47 --keyserver keyserver.ubuntu.com

      sudo pacman-key --lsign-key F3B607488DB35A47

      sudo pacman -U 'https://mirror.cachyos.org/repo/x86_64/cachyos/cachyos-keyring-2-1-any.pkg.tar.zst' 'https://mirror.cachyos.org/repo/x86_64/cachyos/cachyos-mirrorlist-11-1-any.pkg.tar.zst' 'https://mirror.cachyos.org/repo/x86_64/cachyos/cachyos-v3-mirrorlist-11-1-any.pkg.tar.zst'

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

* * *

    This script will also backup your old pacman.conf.

    This script will auto-detect you architecture, if your CPU have x86-64-v3 support, it will automatically use the repos which are optimized with this flag and some other flags.

    Also all provided Kernels, Browsers, ... are optimized and compiled.

    ## How to Backup the config and use the native Arch Packages

    - Remove or Backup the config located at /etc/pacman.conf
    - then run `sudo mv /etc/pacman.conf.bak /etc/pacman.conf`
    - Then run following command to switch the packages to the default arch packages `sudo pacman -Suuy`


    More information's you will find here [CachyOS](https://github.com/cachyos) or [Discord](https://discord.gg/k39qfrxPNa)

## How to use CLANG/LLVM/LTO compiled Kernels on Nvidia driver with DKMS:

Not needed anymore, since dkms 3.0.1 :)

If you got any question, just hit me up!

