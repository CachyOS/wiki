---
title: CachyOS Kernel
description: Features and changes on the CachyOS kernel
---

The CachyOS Kernel is a customized kernel which utilizes enhancements, configurations and patches from upstream.

## Features

- Choose between 3 kernel schedulers and various [sched-ext](/configuration/sched-ext) schedulers for improved responsiveness
- AMD P-State Improvements
- Latest BBRv3 by Google
- le9uo for significantly improved responsiveness during high memory load
- Up-to-date NTSYNC patchset, used with a compatible build of wine/proton
- Compatibility with T2 MacOS devices with patches from [t2linux](https://github.com/t2linux/linux-t2-patches/)
- ACS Override and v412loopback
- VHBA module for emulating CD/DVD-ROM devices
- Latest ZSTD patchset
- Various other patches that focus on improving performance (optimized compiler flags, cryptographic improvements, memory management tweaks)

For a more comprehensive list of the patches we offer, please see the the more complete
[feature list](https://github.com/CachyOS/linux-cachyos/?tab=readme-ov-file#features), [kernel-patches repository](https://github.com/CachyOS/kernel-patches)
and [our linux source tree](https://github.com/CachyOS/linux).

## Variants

CachyOS offers a diverse range of kernel options. Below you can find an explanation of each one.

### linux-cachyos (Default Kernel)

The default kernel is our main recommendation in terms of scheduler choice and configuration. Currently, our default kernel
is using [BORE](https://github.com/firelzrd/bore-scheduler) scheduler as the default option, along with our **base patch set**. It is built
with the [clang](https://clang.llvm.org/) C compiler with ThinLTO enabled to produce more optimized binaries + [AutoFDO](https://cachyos.org/blog/2411-kernel-autofdo/)

Feel free to open an issue in our [GitHub](https://github.com/CachyOS/linux-cachyos) or reach out
to us in [Discord](https://discord.gg/cachyos-862292009423470592) for suggestions and improvements that should be added to the default kernel.

### linux-cachyos-bore

This variant includes the CachyOS Base Patch set + BORE/EEVDF Scheduler with its default configuration.

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

Additionally it also contains our CachyOS Base patch set and the BORE/EEVDF Scheduler.

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

Therefore for now it's only present in the [linux-cachyos](/features/kernel#linux-cachyos-default-kernel) variant.

For more information about AutoFDO, click [here.](https://cachyos.org/blog/2411-kernel-autofdo/)

### I always heard that using the Real Time variant helps in Gaming! is that true?

Real time scheduling necessitates a task to be processed on a specified deadline. Gaming on the other hand spawns a lot of processes every second. Real time
scheduling may cause these processes to end prematurely or even stall, leading to worse performance overall.
