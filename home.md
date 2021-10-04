---
title: CachyOS
description: Operating System
published: 1
date: 2021-10-03T18:00:21.112Z
tags: arch, arch linux, archlinux, cachy, cacule, cachyos, cpu scheduler, linux, gnu
editor: markdown
dateCreated: 2021-07-04T01:32:08.787Z
---

# CachyOS
CachyOS is a Linux distribution based on [Arch Linux](https://archlinux.org/). The default Linux kernel is `linux-cacule` which is the default Arch Linux stock kernel with the [CacULE](https://github.com/hamadmarri/cacule-cpu-scheduler) CPU Scheduler. Some features of CachyOS are discribed in the following sections.

## Linux Kernels
The default installation of CachyOS contains Arch Linux kernel as a backup, the default CachyOS kernel as well as the following other kernels.

List of available kernels:
* **linux-cacule**: The Linux-CacULE Kernel by Hamad Marri with some other patchsets kernel and modules (See: https://github.com/ptr1337/linux-cacule-aur).
* **linux-cacule-rdb**: Same as linux-cacule but with the Response Driven Balancer (RDB). RDB is a lightweight tasks loadbalancer to enhance performance.
* **linux-hardened-cacule**: The Security-Hardened Linux with the cacule scheduler kernel and modules.

* Every Kernel is also available with LTO Optimation and with x86-64-v3 Compile Flags. 

## KDE and Plasma
Mostly all desktop packages are compiled with thinlto optimation, security flags and performance improvements. 

## Ananicy-Cpp and NTN 
Not Too Nice ([NTN](https://github.com/hamadmarri/ntn)) is a linux tool that adds alias files for other commands to make them run in very low priority by default. It adds this prefix: `chrt -i 0 ionice -c 3` to the command, which means that the command will run on IDLE scheduler policy and on IDLE IO priority. The idle here doesn't mean that the command is idle (not running), it means that the task will be scheduled in IDLE policy which is in the least priority among others. This solution adds 0 overhead to auto down-prioritize tasks while keeping the arguments call the same plus without changing/touching any of the others files.

([Ananicy-Cpp](https://gitlab.com/ananicy-cpp/ananicy-cpp)) (ANother Auto NICe daemon) — is a shell daemon created to manage processes' IO and CPU priorities, with community-driven set of rules for popular applications. It's mainly for desktop usage. Ananicy-Cpp is a completly rewritten version of the orginal Ananicy in C++ for much lower CPU and memory usage.


## Internet Browser
The default browser of CachyOS is [Cachy-Browser](https://gitlab.com/cachyos), which is a fork of the Librewolf Browser with some security additions and also compiled with more secure flags and performance improvement. 

## CachyOS Installer
Two installers are provided, one GUI Version, which is based on Calamares, as well as a CLI-Installer.
