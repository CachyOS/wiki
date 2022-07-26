---
title: General System Tweaks
description: Things you can do to tweak after installing
published: 1
date: 2022-07-26T18:23:44.222Z
tags: information, performance
editor: markdown
dateCreated: 2022-07-26T18:23:44.222Z
---

# Things to do after installation


## 1. ***Reduce Swappiness and vfs_cache_pressure***
The kernel's preference (or avoidance) of swap space is represented by the swappiness sysctl parameter. Swappiness can range between 0 and 100, with 60 being the default value.
A low value prevents the kernel from swapping; a high value causes the kernel to attempt to use swap space. It is well known that using a low value for sufficient memory improves responsiveness on many systems.

vfs_cache_pressure value governs the kernel's tendency to reclaim memory used for directory and inode object caching (VFS cache).
Lowering it from the default value of 100 encourages the kernel to reclaim VFS cache (do not set it to 0, this may produce out-of-memory conditions)
Increasing vfs_cache_pressure significantly beyond 100 may have negative performance impact. Reclaim code needs to take various locks to find freeable directory and inode objects. With vfs_cache_pressure=1000, it will look for ten times more freeable objects than there are.

You can change these values in `/etc/sysctl.d/99-cachyos-settings.conf`

## 2. ***Editing mkinitcpio.conf for faster boot times***

Replace udev with systemd for faster boots and set compression algorithm to zstd and compression level to 2 because compression ratio increase isn't worth the increased latency.

(bellow isnt the whole file, just the parts that needs changes)
```ini
HOOKS="base systemd autodetect...

COMPRESSION="zstd"
COMPRESSION_OPTIONS=(-2)
```
Note: You can replace base AND udev with systemd but you will lose access to recovery shell.

## 3. Zram or Zswap tweaking
TODO