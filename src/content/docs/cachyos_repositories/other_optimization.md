---
title: Other Optimization and Features
description: A detailed list of Features and changes CachyOS does apply
---

Packages
--------

CachyOS does apply optimization like PGO, LTO and BOLT on further packages.
We are focusing to optimize compilers and core packages first, like GCC, python, zstd, xz, lz4, julia, php, sqlite and more.

CachyOS Settings
----------------

CachyOS Settings contains a bunch of configuration files for zram, nvidia, amd and general system changes.

### Configuration

- zram config
- NVIDIA Tweaks/Settings to provide a better nvidia OOB experience
- Force AMDGPU Driver for GCN 1.0 and GCN 2.0 GPU's
- sysctl kernel config changes for network, memory and security
- systemd journal.d configuration

### Scripts

- **cachyos-bugreport.sh**: a tool to easily provide logs for support
- **paste-cachyos**: script which makes it possible to paste text from the terminal easily
- **kerver**: shows the current used kernel configuration and used scheduler
- **topmem**: Shows the Top 10 Processes, which are using most memory
- **amdpstate-guided/amdpstate-epp**: Switch easily between amdpstate-guided and amdpstate-epp on runtime

### Services

- **bpftune**: automatically tune your network parameters depending on the network workload
- **ananicy-cpp**: Niceness daemon with a set of rules
- **uksmd**: User Space KSM Daemon to merge same memory pages into one


CachyOS Applications
--------------------

- **cachy-browser**: Browser based on firefox, with a more secure config and patches from gentoo and librewolf
- **cachyos-kernel-manager**: Easily install kernels from the repository or configure your own kernel and set of your own patches
- **CachyOS-Hello**: Application to handle tweaks, package installation and other information about CachyOS
- **CachyOS-ApplicationInstaller**: Easily install much used applications directly from the GUI
- **cachyos-rate-mirrors**: Automatically rank the Arch and CachyOS Mirrors
- **systemd-boot-manager**: Automatically generates new entries for the systemd-boot-manager and can be easily configured in /etc/sdboot-manage.conf

Kernel Modules
--------------

CachyOS does provide precompiled kernel modules for nvidia and zfs.
This makes it easy for the user to ensure all time compatibility with the latest kernel version. We are also pulling in patches for the modules, if required to provide the latest stable kernel.

