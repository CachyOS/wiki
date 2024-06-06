---
title: CachyOS Kernel
description: Features and Changes at the CachyOS Kernel
---

# What is the CachyOS Kernel?

The CachyOS Kernel is a customized kernel, which utilizes patches, enhancements, configuration and patches from upstream.
This results into having a more optimized kernel for the users system. The desktop kernels are mainly tuned for interactivity, but there are also other variant which are aimed for throughput.


## CachyOS Base Patchset

The base patchset contains a bunch of changes compared on upstream. Here is a little list, which is commonly included each branch:

- **aes-crypto**: Contains massive improvements for encryption workloads and dynamically utilizes different instruction levels (avx2, avx512, avx10.1)
- **amd-pstate**: This contains improvements and changes for the amd-pstate driver. Patches are commonly fetched from the mailing list.
- **bbr3**: Replaces bbrv1 with the latest bbrv3 provided by Google.
- **cachy**: Various configuration changes for scheduler and interactivity (CONFIG_CACHY), OpenRGB Patch, ACS Override, MM improvements, v4l2loopback, Clear Linux patches and HDR enabling.
- **fixes**: Various fixes, which gets queued over the time of a stable kernel
- **ksm**: Provides syscalls for uksmd. uksmd does identify same memory pages and merges them.
- **ntsync**: Contains the latest kernel driver NTSync patchset.
- **zstd**: Patches the zstd api inside the kernel to the latest release one. Commonly improves performance for compression tasks with zstd (BTRFS, Zram, Zswap)

## Variants

CachyOS does provide a bunch of different variants for the kernel. Below you can find a explaination of each one.


### linux-cachyos (Default Kernel)

The default kernel is thought to provide our suggestion and we are open to do their changes, in terms of scheduler and configuration.
The changes can happen, if there are regressions in schedulers or other configuration.
Currently the linux-cachyos kernel provies the CachyOS Base Patchset, sched-ext framework (The extensible scheduler class), and the BORE (Burst-Oriented Response Enhancer) Scheduler.

### linux-cachyos-bore

The BORE kernel does utilize the CachyOS Base Patchset and the BORE Scheduler with its default configuration.

### linux-cachyos-deckify

The deckify kernel contains the same patches as the default kernel, but utilizes extra changes for the Steam Deck and other Handhelds to provide compatibility for them.
This kernel is used as default in the CachyOS Handheld Edition.

### linux-cachyos-echo

The ECHO Kernel does contain the CachyOS Base Patchset and the ECHO Scheduler.

### linux-cachyos-eevdf

The EEVDF (Earliest Eligible Virtual Deadline First) kernel does utilize the CachyOS Base Patchset and the default kernel scheduler (EEVDF).

### linux-cachyos-hardened

The hardened kernel does use the CachyOS Base Patchset and the hardened patch from linux-hardened

### linux-cachyos-lts

The LTS (Longterm) Kernel is based on the latest release of the Longterm branch and includes some little and stable patches, like configuration changes, amd-pstate patches and BBRv3.

### linux-cachyos-rc

The RC Kernel is based on the latest available Release Candidate. This contains the latest features and changes from upstream but can have issues.
Additionally it does contain our CachyOS Base Patchset, sched-ext Framework and the BORE Scheduler.
This kernel is not suggested for new users and only thought for testing reasons.

### linux-cachyos-rt-bore

The RT (realtime) kernel does utilize the CachyOS Base Patchset, Real Time Patch and BORE Scheduler. RT Preemption is as default enabled at this kernel.

### linux-cachyos-sched-ext

The sched-ext kernel does contain the CachyOS Base Patchset and the sched-ext Framework. There is an additional variant called "linux-cachyos-sched-ext-debug". This variant does contain an unstriped vmlinux, which is required for debugging the kernel for developers.

### linux-cachyos-server

The Server Kernel is targeted for servers and more throughput. The kernel is NOT tuned for interactivity and is not suggested for desktop users.
The main differences here are a lower tickrate (300Hz), No Preemption and CONFIG_CACHY not applied. The kernel does only contain the CachyOS Base Patchset.
