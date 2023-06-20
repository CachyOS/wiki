---
title: CachyOS-settings
description: CachyOS sysctl, udev, systemd configs, modprobe rules and more
published: 1
date: 2022-10-23T13:32:34.763Z
tags: cachy, cachyos
editor: markdown
dateCreated: 2022-08-06T21:30:59.973Z
---

# CachyOS Settings
## sysctl.d rules
### vm.swappiness
The swappiness sysctl parameter represents the kernel's preference (or avoidance) of swap space. Swappiness can have a value between 0 and 100, the default value is 60.

A low value causes the kernel to avoid swapping, a higher value causes the kernel to try to use swap space. Using a low value on sufficient memory is known to improve responsiveness on many systems.

This value is automatically calculated using your ram amount

### vm.vfs_cache_pressure
The value controls the tendency of the kernel to reclaim the memory which is used for caching of directory and inode objects (VFS cache).

Lowering it from the default value of 100 makes the kernel less inclined to reclaim VFS cache (do not set it to 0, this may produce out-of-memory conditions)

This value is automatically calculated using your ram amount

### vm.page-cluster
page-cluster controls the number of pages up to which consecutive pages are read in from swap in a single attempt. This is the swap counterpart to page cache readahead. The mentioned consecutivity is not in terms of virtual/physical addresses, but consecutive on swap space - that means they were swapped out together.

It is a logarithmic value - setting it to zero means “1 page”, setting it to 1 means “2 pages”, setting it to 2 means “4 pages”, etc. Zero disables swap readahead completely.

The default value is three (eight pages at a time). There may be some small benefits in tuning this to a different value if your workload is swap-intensive.

Lower values mean lower latencies for initial faults, but at the same time extra faults and I/O delays for following faults if they would have been part of that consecutive pages readahead would have brought in.

### vm.dirty_ratio
Contains, as a percentage of total available memory that contains free pages and reclaimable pages, the number of pages at which a process which is generating disk writes will itself start writing out dirty data (Default is 20).

### vm.dirty_background_ratio
Contains, as a percentage of total available memory that contains free pages and reclaimable pages, the number of pages at which the background kernel flusher threads will start writing out dirty data (Default is 10).

### Network tweaks
The BBR congestion control algorithm can help achieve higher bandwidths and lower latencies for internet traffic

TCP Fast Open is an extension to the transmission control protocol (TCP) that helps reduce network latency by enabling data to be exchanged during the sender’s initial TCP SYN. Using the value 3 instead of the default 1 allows TCP Fast Open for both incoming and outgoing connections

### kernel.nmi_watchdog
Disabling NMI watchdog will speed up your boot and shutdown, because one less module is loaded. Additionally disabling watchdog timers increases performance and lowers power consumption