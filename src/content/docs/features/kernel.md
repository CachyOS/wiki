---
title: CachyOS Kernel
description: Features and changes on the CachyOS kernel
---

The CachyOS Kernel is a customized kernel which utilizes enhancements, configurations and patches from upstream.
This results into a more optimized kernel for the user. Most of the kernel variants that we provide are tuned for interactivity.
However, we also provide [one](#linux-cachyos-server) that is better geared for server workloads.


## CachyOS Base Patchset

The base patchset contains a bunch of changes compared to upstream. Here is a brief list, which is commonly included each branch:

- **aes-crypto**: Contains massive improvements for encryption workloads and dynamically utilizes different instruction levels (AVX2, AVX512, AVX10.1)
- **amd-pstate**: This contains improvements and changes for the amd-pstate driver. Patches are commonly fetched from the mailing list.
- **bbr3**: Replaces BBRv2 with the latest BBRv3 provided by Google.
- **block**: Improvements to the bfq and mq-deadline I/O schedulers.
- **cachy**: Various configuration changes for scheduler and interactivity (CONFIG_CACHY), OpenRGB Patch, ACS Override, MM improvements, v4l2loopback, Clear Linux patches and HDR enabling.
- **fixes**: Various fixes that are queued for our stable kernel.
- **intel-pstate**: Improvements to the intel-pstate driver fetched from the mailing list.
- **ksm**: Provides new syscalls for KSM. Identifies sets using identical memory pages and merges them into one saving memory space.
- **le9uo**: Prevents thrashing, avoid high latency and prevent livelock in near-OOM conditions.
- **ntsync**: Contains the latest kernel driver NTSync patchset.
- **perf-per-core**: Enables `perf` to read energy usage from each core.
- **t2**: Provides compatibility for T2 MacBooks.
- **zstd**: Patches the ZSTD API inside the kernel to the latest release (1.5.6). Used for compression tasks with zstd (BTRFS, ZRAM, ZSWAP)

## Variants

CachyOS offers a diverse range of kernel options. Below you can find an explanation of each one.

### linux-cachyos (Default Kernel)

The default kernel is our main recommendation in terms of scheduler choice and configuration. Currently, our default kernel
is using the **BORE/EEVDF** scheduler as the default option, along with our **base patchset**. However, we also include the sched-ext framework, which enables switching to different schedulers at runtime. See our [sched-ext tutorial](/configuration/sched-ext)
for recommendations of these schedulers.

Feel free to open an issue in our [GitHub](https://github.com/CachyOS/linux-cachyos) or reach out
to us in Discord for suggestions and improvements that should be added to the default kernel.

### linux-cachyos-bore

This variant includes the CachyOS Base Patchset + BORE/EEVDF Scheduler with its default configuration but without including the sched-ext framework.

### linux-cachyos-deckify

The deckify kernel contains the same patches as the default kernel, but offers extra functionality to ensure compatibility for the Steam
Deck and other Handhelds. This kernel is the default in the CachyOS Handheld Edition.

### linux-cachyos-eevdf

The EEVDF (Earliest Eligible Virtual Deadline First) kernel includes the CachyOS Base Patchset and the default kernel scheduler (EEVDF).

### linux-cachyos-hardened

The hardened kernel contains the CachyOS Base Patchset and hardened patches from linux-hardened. This kernel uses the BORE scheduler.

### linux-cachyos-lts

The LTS (Longterm) Kernel is based on the latest release of the Longterm branch. Patches in the LTS variant are fewer in number
compared to the latest variants to ensure more stability. These patches include configuration changes, latest ZSTD patches and BBR-v3.
This kernel uses the BORE scheduler.

### linux-cachyos-rc

The RC Kernel is based on the latest available Release Candidate. This contains the latest features and changes from upstream but can lead to a more unstable experience due to being experimental/bleeding edge.

Additionally it also contains our CachyOS Base Patchset, sched-ext Framework and the BORE Scheduler.

### linux-cachyos-rt-bore

The RT (realtime) kernel contains the CachyOS Base Patchset, Real Time Patch and BORE Scheduler. RT Preemption enabled by default.

### linux-cachyos-sched-ext

The sched-ext kernel contains the CachyOS Base Patchset and the sched-ext Framework + EEVDF as the base scheduler.

### linux-cachyos-server

The Server Kernel is targeted for servers and more throughput. The kernel is NOT tuned for interactivity and is not suggested for desktop users.
The main differences here are a lower tickrate (300Hz), No Preemption and CONFIG_CACHY not applied. This kernel only contains the CachyOS Base Patchset.
