---
title: CachyOS
description: Operating System
published: 1
date: 2021-11-08T09:27:14.384Z
tags: arch, arch linux, archlinux, cachy, cachyos, cacule, cpu scheduler, gnu, linux
editor: markdown
dateCreated: 2021-07-04T01:32:08.787Z
---

# CachyOS
CachyOS is a Linux distribution based on [Arch Linux](https://archlinux.org/). By default, CachyOS uses the `linux-cachyos` kernel, which is the stock Arch Linux kernel modified to use the [CacULE CPU Scheduler](https://github.com/hamadmarri/cacule-cpu-scheduler). The following sections describe the distinguishing features of CachyOS:

## Linux Kernels
In addition to the stock Arch Linux kernel (as a stable backup option), CachyOS includes a variety of custom kernels optimized for different scenarios:

* **linux-cachyos**: This is the default kernel in CachyOS, featuring the [CacULE CPU Scheduler](https://github.com/hamadmarri/cacule-cpu-scheduler) by Hamad Marri, as well as some other patchsets. More information can be found at the [linux-cachyos kernel repository](https://github.com/CachyOS/linux-cachyos).
* **linux-cacule-rdb**: The linux-cacule kernel modified to use the Response Driven Balancer (RDB) instead of the CFS load balancer. RDB is a lightweight tasks load balancer that can enhance performance in many workflows.
* **linux-hardened-cacule**: The Security-Hardened Linux kernel modified to use the CacULE CPU Scheduler and other improvements found in our default kernel.
* Each kernel is also available in variants built with LTO Optimation and with x86-64-v3 compile flags.

## KDE and Plasma
Most desktop packages are compiled with thinlto optimation, security flags, and performance improvements. 

## Ananicy-Cpp and NTN 
Not Too Nice ([NTN](https://github.com/hamadmarri/ntn)) is a tool that adds alias files for commands to make them run in very low priority by default. NTN adds the prefix `chrt -i 0 ionice -c 3` to the command, forcing the program to run with the IDLE scheduler policy and with IDLE IO priority. IDLE policy is in the least priority among others. This solution provides a zero-overhead way to de-prioritize tasks, without needing to specify the nice value each time you run a certain command.

([Ananicy-Cpp](https://gitlab.com/ananicy-cpp/ananicy-cpp)) (ANother Auto NICe daemon) — is a shell daemon created to manage processes' IO and CPU priorities, with community-driven rulesets for popular applications. This tool is mainly for desktop usage. Ananicy-Cpp is a completly rewritten version of the orginal Ananicy in C++, providing much lower CPU and memory usage.


## Internet Browser
The default browser of CachyOS is [Cachy-Browser](https://gitlab.com/cachyos), which is a fork of the Librewolf Browser with some security additions and also compiled with more secure flags and performance improvement. 

## CachyOS Installer
Two installers are provided, one GUI Version, which is based on Calamares, as well as a CLI-Installer.
