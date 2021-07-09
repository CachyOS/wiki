---
title: CachyOS
description: Operating System
published: 1
date: 2021-07-06T10:05:33.040Z
tags: arch, arch linux, archlinux, cachy, cacule, cachyos, cpu scheduler, linux, gnu
editor: markdown
dateCreated: 2021-07-04T01:32:08.787Z
---

# CachyOS
CachyOS is a Linux distribution based on [Arch Linux](https://archlinux.org/). The default Linux kernel is `linux-cachyos` which is the Arch Linux stock kernel plus the [CacULE](https://github.com/hamadmarri/cacule-cpu-scheduler) CPU Scheduler. Some of the CachOS features are discribed in the following sections.

## Linux Kernels
The default installation of CachyOS contains Arch Linux kernel as a backup, and CachyOS kernel which is very similar to Arch Linux stock kernel in terms of source and configurations but with CacULE CPU scheduler. CachyOS also provides a set of kernels in its repository.

List of available kernels:
* **linux-cacule**: The Linux-CacULE Kernel by Hamad Marri with some other patchsets kernel and modules (See: https://github.com/ptr1337/linux-cacule-aur).
* **linux-cacule-rdb**: Same as linux-cacule but with the Response Driven Balancer (RDB). RDB is a lightweight tasks loadbalancer to enhance performance.
* **linux-hardened-cacule**: The Security-Hardened Linux with the cacule scheduler kernel and modules.

## KDE and Plasma
Some of KDE and Plasma tools are compiled with set of flags to provide better performance. Tools like kscreen, kwin, kwindowsystem, plasma-desktop, plasma-wayland-session, plasma-workspace, and qt5-tools.

## NTN
Not Too Nice ([NTN](https://github.com/hamadmarri/ntn)) is a linux tool that adds alias files for other commands to make them run in very low priority by default. It adds this prefix: `chrt -i 0 ionice -c 3` to the command, which means that the command will run on IDLE scheduler policy and on IDLE IO priority. The idle here doesn't mean that the command is idle (not running), it means that the task will be scheduled in IDLE policy which is in the least priority among others. This solution adds 0 overhead to auto down-prioritize tasks while keeping the arguments call the same plus without changing/touching any of the others files.

## Internet Browser
The default browser of CachyOS is [LibreWolf](https://librewolf-community.gitlab.io/).

## CachyOS Installer
The main installer is `cachyos-installer`. It is a modification of the `archinstall` scripts.

# Screenshots
![screenshot_20210704_061022.png](/screenshot_20210704_061022.png)

![screenshot_20210704_062822.png](/screenshot_20210704_062822.png)

![screenshot_20210704_061647.png](/screenshot_20210704_061647.png)