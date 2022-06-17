---
title: CachyOS - Kernel Manager
description: A kernel manager which helps users to install or build their kernel itself
published: 1
date: 2022-06-17T02:10:18.065Z
tags: cachyos-kernel, kernel, kernel-manager
editor: markdown
dateCreated: 2022-06-03T11:16:11.181Z
---

# CachyOS - Kernel Manager

We do provide a application which helps users to install kernels from the repo and also have a overview about the installed kernels.

Also it is possible to build the kernels itself and the configuration will be done simply over a GUI.

## Installing the kernel from the repo:

Simply just start the CachyOS Kernel Manager application, then you can choose between different kernels. Just select the kernel you want to install and click execute.

![cachyos-km1.png](/cachyos-km1.png)

## Configuring and building the kernel:

After you did open the application, you can click the "configure" button to configure the kernel build to your wishes and needs.

Following options that you can change:

- Scheduler (BMQ, BORE, cacULE, cfs, PDS, TT)
- NUMA disabled or enabled
- KBUILD CFLAGS (-O3 or -O2)
- Set performance governor as default
- Enable BBR2
- Tickrate (500Hz, 600Hz, 750Hz, 1000Hz)
- tickless (idle, perodic, full)
- disable MQ-Deadline I/O Scheduler
- disable Kyber I/O Scheduler
- Enable or disable MG-LRU
- Enable or disable DAMON
- Enable or disable Speculative page fault
- Enable or disable LRNG (Linux Random Number Generator)
- Apply Kernel automatic Optimization (Does automatically detect your CPU March)
- Apply Kernel Optimization slecting (You will see a list of different CPU-Marches and can select with a number yours)
- Disable debug (it lowers the size of the kernel)
- Enable or disable nf cone
- Enable LTO (Full, Thin, No)

After you selected your desired options, just click execute and the kernel will start to compile and as soon it is done, it would automatically install to your system.
The built package can be then also found at $HOME/.cache/cachyos-km

![cachyos-km2.png](/cachyos-km2.png)