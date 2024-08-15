---
title: Other Optimization and Features
description: A detailed list of Features and changes CachyOS does apply
---

Packages
--------

CachyOS applies PGO, LTO, and BOLT optimizations to various packages.
We are focusing on optimizing compilers and core packages first, like GCC, Python, ZSTD, XZ, LZ4, Julia, PHP, SQLite and more.

CachyOS Settings
----------------

CachyOS Settings contains a bunch of configuration files for ZRAM, Nvidia, AMD and general system changes.

### Configuration

- ZRAM configuration and rules
- NVIDIA Tweaks/Settings to provide a better nvidia OOB experience
- Force AMDGPU Driver for GCN 1.0 and GCN 2.0 GPU's
- Networking, memory management, and security-related sysctl kernel configuration changes
- systemd journal.d size limit
- Zswap disabled
- THP (Transparent Huge Pages) set to defer+madvise
- I/O scheduler: BFQ (HDD), MQ-Deadline (SSD), none (NVMe)
- SATA Active Link Power Management set to max performance
- Watchdog blacklist

### Scripts

- **cachyos-bugreport.sh**: A tool to easily provide logs for support
- **paste-cachyos**: Script which makes it possible to paste text from the terminal easily
- **kerver**: Shows the current used kernel configuration and used scheduler
- **topmem**: Shows up to 10 processes which are currently using the highest amount of RAM in a descending order

### Services

- **ananicy-cpp**: Niceness daemon with extensive rule sets for diverse application types
- **ksmctl**: User Space KSM Daemon to merge same memory pages into one in order to save memory


CachyOS Applications
--------------------

- **Cachy Browser**: Browser based on Firefox, with a more secure config and patches from Gentoo and Librewolf
- **cachyos-kernel-manager**: Easily install kernels from the repository or configure your own kernel and include your own patches
- **CachyOS Hello**: Application for controlling tweaks, applying fixes, package installation and more information about CachyOS
- **CachyOS-ApplicationInstaller**: GUI for an easy installation of commonly used applications
- **cachyos-rate-mirrors**: Automatically rank Arch and CachyOS mirrors for optimal download speeds
- **systemd-boot-manager**: Automatically generates new entries for the systemd-boot-manager and can be easily configured in `/etc/sdboot-manage.conf`

Kernel Modules
--------------

CachyOS provides a set of precompiled kernel modules for NVIDIA and ZFS.
This makes it easy for the user to ensure compatibility with the latest kernel version. We are also pulling in patches for these modules, if required for the latest stable kernel.

