---
title: CachyOS Kernel
description: Features and changes on the CachyOS kernel
---

The CachyOS Kernel is a customized kernel which utilizes enhancements, configurations and patches from upstream.
This results into a more optimized kernel for the user. Most of the kernel variants that we provide are tuned for interactivity.
However, we also provide [one](#linux-cachyos-server) that is better geared for server workloads.


## CachyOS Base patch set

The base patch set contains a bunch of changes compared to upstream. Here is a brief list, which is commonly included each branch:

- **amd-pstate**: This contains the latest improvements and changes for the amd-pstate driver. Patches are commonly fetched from the mailing list.
- **amd-cache-optimizer**: [AMD 3D V-Cache Optimizer](https://lore.kernel.org/platform-driver-x86/20241010094252.3892406-1-Basavaraj.Natikar@amd.com/) allows users to switch CPU core rankings dynamically.
- **bbr3**: Replaces BBRv2 with the latest BBRv3 provided by Google.
- **cachy**: Various configuration changes for scheduler and interactivity (CONFIG_CACHY), OpenRGB Patch, ACS Override, MM improvements, v4l2loopback, Clear Linux patches and HDR enabling.
- **crypto**: Contains AES-128 and CRC32 patches.
- **fixes**: Various fixes that are queued for our stable kernel.
- **ntsync**: Contains the latest kernel driver NTSync patch set.
- **perf-per-core**: Enables `perf` to read energy usage from each core.
- **pksm**: Provides new syscalls for KSM. Identifies sets using identical memory pages and merges them into one saving memory space.
- **t2**: Provides compatibility for T2 MacBooks.
- **zstd**: Patches the ZSTD API inside the kernel to the latest release (1.5.6). Used for compression tasks with zstd (BTRFS, ZRAM and ZSWAP)

## Variants

CachyOS offers a diverse range of kernel options. Below you can find an explanation of each one.

:::note
BORE is an enhancement for EEVDF resulting in a more capable scheduler at handling heavy workloads while keeping the system responsive.
::::

### linux-cachyos (Default Kernel)

The default kernel is our main recommendation in terms of scheduler choice and configuration. Currently, our default kernel
is using the [BORE](https://github.com/firelzrd/bore-scheduler) scheduler as the default option, along with our **base patch set**. However, we also include the sched-ext framework, which enables switching to different schedulers at runtime. See our [sched-ext tutorial](/configuration/sched-ext)
for recommendations of these schedulers.

Feel free to open an issue in our [GitHub](https://github.com/CachyOS/linux-cachyos) or reach out
to us in [Discord](https://discord.gg/cachyos-862292009423470592) for suggestions and improvements that should be added to the default kernel.

### linux-cachyos-autofdo

Variant slightly more performant in some workloads, For example y-cruncher. It contains the same patch set as the default kernel + BORE/EEVDF Scheduler + sched-ext framework. For more information about AutoFDO, check out the links down below:

- [Optimizing the Kernel with AutoFDO on CachyOS](https://cachyos.org/blog/2411-kernel-autofdo/)

- [Results of benchmarks ran by ptr1337](https://imgur.com/a/YAjhXfN) using the [cachyos-benchmarker](https://github.com/CachyOS/cachyos-benchmarker)


### linux-cachyos-bore

This variant includes the CachyOS Base Patch set + BORE/EEVDF Scheduler with its default configuration but without including the sched-ext framework.

### linux-cachyos-bmq

This variant includes the CachyOS Base Patch set + BMQ - Bit Map Queue - Design based on existing PDS development experience and inspired by the scheduler found in Zircon by Google.

### linux-cachyos-deckify

The deckify kernel contains the same patches as the default kernel, but offers extra functionality to ensure compatibility for the Steam
Deck and other Handhelds. This kernel is the default in the CachyOS Handheld Edition.

### linux-cachyos-eevdf

The EEVDF (Earliest Eligible Virtual Deadline First) kernel includes the CachyOS Base patch set and the default kernel scheduler (EEVDF).

### linux-cachyos-hardened

The hardened kernel contains the CachyOS Base patch set and hardened patches from linux-hardened. This kernel uses the BORE scheduler.

### linux-cachyos-lts

The LTS (Long-term Support) Kernel is based on the latest release of the Long-term branch. Patches in the LTS variant are fewer in number
compared to the latest variants to ensure more stability. These patches include configuration changes, latest ZSTD patches and BBRv3.
This kernel uses the BORE/EEVDF scheduler.

### linux-cachyos-rc

The RC Kernel is based on the latest available Release Candidate. This contains the latest features and changes from upstream but can lead to a more unstable experience due to being experimental/bleeding edge.

Additionally it also contains our CachyOS Base patch set, sched-ext Framework and the BORE/EEVDF Scheduler.

### linux-cachyos-rt-bore

Our default kernel but with `preempt=rt` enabled. **Intel GPUs are not supported**

### linux-cachyos-server

The Server Kernel is targeted for servers and more throughput. **The kernel is NOT tuned for interactivity and is not suggested for desktop users**.
The main differences here are a lower tickrate (300Hz), [Lazy Preemption](https://lwn.net/Articles/994322/) and CONFIG_CACHY not applied. 
This kernel only contains the CachyOS Base patch set.

## FAQ

### Why is AutoFDO not being used for all the other kernel variants?

Because it's expensive to build since it basically requires building the kernel twice therefore it requires more resources and time dedicated to the compilation. The process of building a kernel with AutoFDO involves the following steps:

1) Build the kernel with AutoFDO and debugging capabilities enabled.
2) Create a profile meaning executing workloads in order to gather profiling data for the possible optimizations.
3) Rebuild the kernel with the AutoFDO profile.

So for now it's another variant but it will become the default kernel in the near future. ETA (6.12.1 - 6.12.2)

### I always heard that using the Real Time variant helps in Gaming!

Not really and on the other hand, it results in worse results with barely any benefit. The non Real Time kernels are more than enough & capable for Gaming (excluding Server & Hardened variants)
