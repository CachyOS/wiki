---
title: Features and Merits
description: Some of the CachyOS features, and what makes CachyOS different.
published: 1
date: 2021-07-10T17:29:11.177Z
tags: best, better, feature, features, info, information, why
editor: markdown
dateCreated: 2021-07-04T02:28:46.352Z
---

# General info about CachyOS
CachyOS is a Linux distribution based on [Arch Linux](https://archlinux.org/). The default Linux kernel is `linux-cachyos` which is the Arch Linux stock kernel plus the [CacULE](https://github.com/hamadmarri/cacule-cpu-scheduler) CPU Scheduler. Some of the CachyOS features are discribed in the following sections.

# Providing x86-64-v3 microarchitecture level

Our installer will autodetect which microarchitecture your machine got, if x86-64-v3 is detected it will automaticly use the optimized packages, which is around a 10 % performance improvement.

Also we compile all our kernels, librewolf, proton-ge-custom, proton-tkg and some other packages available in the aur in x86-64-v3.

# Linux Kernels
The default installation of CachyOS contains Arch Linux kernel as a backup, and CachyOS kernel which is very similar to Arch Linux stock kernel in terms of source and configurations but with CacULE CPU scheduler. CachyOS also provides a set of kernels in its repository.

List of available kernels:
* **linux-cacule**: The Linux-CacULE Kernel by Hamad Marri with some other patchsets kernel and modules (See: https://github.com/ptr1337/linux-cacule-aur).
* **linux-cacule-rdb**: Same as linux-cacule but with the Response Driven Balancer (RDB). RDB is a lightweight tasks loadbalancer to enhance performance.
* **linux-hardened-cacule**: The Security-Hardened Linux with the cacule scheduler kernel and modules.

# KDE and Plasma
Some of KDE and Plasma tools are compiled with set of flags to provide better performance. Tools like kscreen, kwin, kwindowsystem, plasma-desktop, plasma-wayland-session, plasma-workspace, and qt5-tools.

# NTN
Not Too Nice ([NTN](https://github.com/hamadmarri/ntn)) is a linux tool that adds alias files for other commands to make them run in very low priority by default. It adds this prefix: `chrt -i 0 ionice -c 3` to the command, which means that the command will run on IDLE scheduler policy and on IDLE IO priority. The idle here doesn't mean that the command is idle (not running), it means that the task will be scheduled in IDLE policy which is in the least priority among others. This solution adds 0 overhead to auto down-prioritize tasks while keeping the arguments call the same plus without changing/touching any of the others files.

# other performance improvements

- ntn installed and configured on default
- zram automaticly configured and is using the zstd compression
- using bfq scheduler on ssd and hdds on default
- heavily optimized kernel with several patches
- as default using bbr2 and general optimized network settings
- earlyroom and every kernel uses le9-patch (https://github.com/hakavlad/le9-patch) with default settings

# Internet Browser
The default browser of CachyOS is [CachyBrowser](https://librewolf-community.gitlab.io/), which is a more secure and optimized browser, also some useful addons preinstalled.

# CachyOS Installer
The main installer is `cachyos-installer`. It is a modification of the `archinstall` scripts.

# Security

Following security features will be available:


- Firefox based browser with some security plugins  also there config
- Firejail Toggle for using all packages which got a firejail profile will used in sandboxing and automaticly updated if you are installing new packages
- preconfigured dns servers, which uses DOH and DOT servers
- toggle for anonymized dnscrypt config and uses only dnscrypt servers
- toggle for a hardended-kernel and some hardened config
