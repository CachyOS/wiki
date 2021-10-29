---
title: CachyOS Repo with optimized packages and kernerls
description: Packages compiled with GEN3 and also normal generic and higher compile Flags
published: 1
date: 2021-10-29T01:45:15.805Z
tags: repo arch linux cachyos
editor: markdown
dateCreated: 2021-08-18T15:06:49.466Z
---

### How to add our Repo automatically with CPU detection (if x86-64-v3 is supported)

**Just run following command:**

## **automatic march detection and changing the pacman.conf:**

    wget https://mirror.cachyos.org/cachyos-repo.tar.xz
    tar xvf cachyos-repo.tar.xz
    sudo ./cachyos-repo.sh

* * *

\--

## **manually**:


      sudo pacman-key --recv-keys F3B607488DB35A47 --keyserver keyserver.ubuntu.com

      sudo pacman-key --lsign-key F3B607488DB35A47

      sudo pacman -U 'https://build.cachyos.org/repo/x86_64/cachyos/cachyos-keyring-2-1-any.pkg.tar.zst' 'https://build.cachyos.org/repo/x86_64/cachyos/cachyos-mirrorlist-5-1-any.pkg.tar.zst' 'https://build.cachyos.org/repo/x86_64/cachyos/cachyos-v3-mirrorlist-5-1-any.pkg.tar.zst'

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

There is mostly an easy workaround, but be aware, if you install a Kernel and have those parameters still in, the GCC Compiled Kernel will fail. Also some modules which uses DKMS needs to recompiled with CLANG/LLVM. I just compile the backup kernel LINUX-LTS also with CLANG, so i got no problems anymore.

-   Just do following:

          sudo nano /etc/dkms/framework.conf
          and add following entrys on the bottom of the file:
          export LLVM=1
          export CC=clang

-   If you have this done, just reinstall or install the kernel which is compiled with LLVM/LTO and DKMS wont fail anymore.

If you got questions, just hit me up!

