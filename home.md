---
title: CachyOS
description: Operating System
published: 1
date: 2021-11-18T20:20:46.630Z
tags: arch, arch linux, archlinux, cachy, cachyos, cacule, cpu scheduler, gnu, linux
editor: markdown
dateCreated: 2021-07-04T01:32:08.787Z
---

# CachyOS
CachyOS is a Linux distribution based on [Arch Linux](https://archlinux.org/). By default, CachyOS uses the [linux-cachyos](https://github.com/CachyOS/linux-cachyos) kernel, which is the stock Arch Linux kernel modified to use the default CFS scheduler and some performance improvements. The following sections describe the distinguishing features of CachyOS:

## Linux Kernels
The CachyOS are improved kernels which improve the performance and other improvements. Following Scheduler are supported:

- Standard Kernel Completely Fair Scheduler (CFS) - linux-cachyos
- CacULE and CacULE-RDB created from Hamad Marri, maintained by CachyOS - linux-cachyos-cacule
- BitMap Queue (BMQ) Alfred Chen Scheduler - linux-cachyos-bmq
- Priority and Deadline based Skiplist multiple queue scheduler (PDS) - Alfred Chen Scheduler » linux-cachyos-pds
- Task Type Scheduler by Hamad Marri (TT) - linux-cachyos-tt

**All kernels are prebuilt in two different march versions (x86_64 and x86_64_v3) and also with the llvm/lto enabled kernels in the cachyos repo.**

## Adding CachyOS - Repo
Here you will find a how-to add the repo:

[How-to add cachyos-repo](https://wiki.cachyos.org/en/home/Repo)

### KDE and Plasma and other desktop based packages

Most desktop packages are compiled with thinlto optimation, security flags, and performance improvements. 

### Cachy Browser
The default browser of CachyOS is Cachy-Browser, which is a fork of the Librewolf Browser. We have added some security 
improvements and have compiled Cachy-Browser with secure flags and 
performance improvements.

### Ananicy-Cpp,zramd and other tweaks

([Ananicy-Cpp](https://gitlab.com/ananicy-cpp/ananicy-cpp)) (ANother Auto NICe daemon) — is a shell daemon created to manage processes' IO and CPU priorities, with community-driven rulesets for popular applications. This tool is mainly for desktop usage. Ananicy-Cpp is a completly rewritten version of the orginal Ananicy in C++, providing much lower CPU and memory usage.

### other performance improvements

-   zram automaticly configured and is using the zstd compression

-   using bfq scheduler on ssd and hdds on default

-   heavily optimized kernel with several patches

-   as default using bbr2 and general optimized network settings

-   earlyroom and every kernel uses le9-patch (<https://github.com/hakavlad/le9-patch>) with default settings

### Security

Following security features will be available:

-   Firefox based browser with some security plugins also there config - Cachy-Browser

-   Firejail Toggle for using all packages which got a firejail profile will used in sandboxing and automaticly updated if you are installing new packages

-   preconfigured dns servers, which uses DOH and DOT servers

-   toggle for anonymized dnscrypt config and uses only dnscrypt servers

-   toggle for a hardended-kernel and some hardened config

-   security related packages are with more secure cc flags compiled