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
- Allows reading per-core CPU energy usage for AMD users
- ACS Override and v412loopback
- VHBA module for emulating CD/DVD-ROM devices
- Latest ZSTD patchset
- Various other patches that focus on improving performance (optimized compiler flags, cryptographic improvements, memory management tweaks)

For a more comprehensive list of the patches that CachyOS offers, please see the the more complete
[feature list](https://github.com/CachyOS/linux-cachyos/?tab=readme-ov-file#features), [kernel-patches repository](https://github.com/CachyOS/kernel-patches)
and [CachyOS's Linux Source Tree](https://github.com/CachyOS/linux).

## Variants

CachyOS offers a diverse range of kernel options. All of the kernels we provide are shipped with the [CachyOS Base Patchset](https://github.com/CachyOS/kernel-patches). 
For each of the kernels, there is a [corresponding `-lto` variant](#package-naming-convention) that 
is built  with [clang](https://clang.llvm.org/) instead of [GCC](https://gcc.gnu.org/). Both the default and `-rc` kernel are exceptions to this because they are
built with [ThinLTO](https://blog.llvm.org/2016/06/thinlto-scalable-and-incremental-lto.html) by default and therefore has corresponding `-gcc` kernel variants instead.

- **linux-cachyos**
    - Default kernel. This is the recommended kernel if you're unsure about which kernel should be used.
    - Uses the [BORE](https://github.com/firelzrd/bore-scheduler) scheduler.
    - Built with clang and ThinLTO by default to produce more optimized binaries.
    - Profiled with our own [AutoFDO](https://cachyos.org/blog/2411-kernel-autofdo/) profile for improved performance. [Script](https://github.com/CachyOS/cachyos-benchmarker/blob/master/kernel-autofdo.sh) used to profile the kernel.
- **linux-cachyos-bore**
    - Uses the BORE scheduler.
- **linux-cachyos-bmq**
    - Uses the BMQ scheduler from [Project C](https://gitlab.com/alfredchen/projectc/) by Alfred Chen. 
        - **Does not support sched-ext**.
- **linux-cachyos-deckify**
    - Default kernel for handhelds. It is **not recommended** and **unsupported** to use any other kernel on handhelds other than this kernel.
    - Uses the BORE scheduler.
    - Handheld specific patches on top of the base patchset to improve compatibility and overall experience on handheld devices.
- **linux-cachyos-eevdf** 
    - Tweaks the default kernel scheduler for improved responsiveness.
- **linux-cachyos-lts** 
    - Based on the latest Long Term Support kernel. 
    - Uses the BORE scheduler.
    - Minimally patched compared to other kernels to ensure maximum stability.
- **linux-cachyos-hardened**
    - Uses the BORE scheduler.
    - Includes [linux-hardened](https://github.com/anthraxx/linux-hardened) patchset. 
    - Kernel config based on [linux-hardened config](https://gitlab.archlinux.org/archlinux/packaging/packages/linux-hardened/-/blob/main/config).
        - Contains very aggressive hardening that significantly stifles performance and user experience.
        - **Does not support sched-ext**.
- **linux-cachyos-rc**
    - Based on the latest mainline kernel from [Linus's tree](https://github.com/torvalds/linux/).
    - Uses the BORE scheduler.
    - Main kernel to introduce new features in our patchset.
- **linux-cachyos-server**
    - Tuned for server workloads compared to desktop usage.
        - 300Hz tickrate.
        - No preemption.
        - Stock EEVDF.
- **linux-cachyos-rt-bore**
    - Real-time preemption.
    - Uses the BORE scheduler.

Please open an issue in [linux-cachyos GitHub](https://github.com/CachyOS/linux-cachyos) for suggestions and improvements that can be added to the default kernel.

## Prebuilt Kernel Modules

To accomodate a larger userbase, CachyOS ships some well-known and highly used kernel modules along with the kernel. This means that users will no longer
have to recompile those modules after every kernel update or on every new kernel install, but will only have to install them from the repository as it is
already precompiled. This effectively obsoletes any `-dkms` packages that a user might have that provides the same module as the precompiled version.

### ZFS

[ZFS](https://openzfs.org/wiki/Main_Page) is one of the many filesystems that is supported in CachyOS. Due to it being licensed under 
[CDDL](https://opensource.org/license/cddl-1-0), it is incompatible with Linux kernel's license and therefore cannot be merged in-tree. The shipped module includes
the latest upstream features and fixes to ensure compatibility with the latest kernel.

### NVIDIA

CachyOS ships both precompiled versions of the close-sourced and [open-sourced](https://github.com/NVIDIA/open-gpu-kernel-modules/) kernel modules. Due to the development
of NVIDIA's kernel module being out-of-tree and thus does not follow the kernel's release cadence, the stock configuration can sometimes be incompatible with the latest
kernel. As a workaround, CachyOS patches the modules with community-created patches or patches shared by NVIDIA directly.

## Other

The CachyOS kernel also has some other notable features that are subtle yet improve the user experience

- Includes a debug variant of the kernel that provides an unstripped kernel binary for debugging purposes. This package is needed to profile the kernel with AutoFDO.
- [Binder](https://developer.android.com/reference/android/os/Binder), the module needed for [Waydroid](https://waydro.id/) is enabled by default in the kernel config
and already [set up](https://github.com/CachyOS/linux-cachyos/blob/master/linux-cachyos/config#L10559).

## Package Naming Convention

```sh
linux-cachyos # Base kernel package for the default kernel. Compiled with clang
linux-cachyos-gcc # GCC-compiled counterpart for linux-cachyos
linux-cachyos-{,gcc-}headers # Kernel headers, mainly for building
linux-cachyos-{,gcc-}nvidia # Precompiled closed source NVIDIA modules for linux-cachyos kernel
linux-cachyos-{,gcc-}nvidia-open
linux-cachyos-{,gcc-}zfs # Precompiled ZFS modules for linux-cachyos kernel
linux-cachyos-{,gcc-}dbg # Unstripped linux binary for debugging

linux-cachyos-hardened # Base kernel package for the hardened kernel. Compiled with GCC
linux-cachyos-hardened-lto # clang-compiled counterpart for linux-cachyos-hardened
linux-cachyos-hardened-{,lto-}headers
linux-cachyos-hardened-{,lto-}nvidia
linux-cachyos-hardened-{,lto-}nvidia-open
linux-cachyos-hardened-{,lto-}zfs
linux-cachyos-hardened-{,lto-}dbg
```

## FAQ

### Why is AutoFDO not being used for all the other kernel variants?

Because it's expensive to build since it basically requires building the kernel twice therefore it requires more resources and time dedicated to the compilation. The process of building a kernel with AutoFDO involves the following steps:

1) Build the kernel with AutoFDO and debugging capabilities enabled.
2) Create a profile meaning executing workloads in order to gather profiling data for the possible optimizations.
3) Rebuild the kernel with the AutoFDO profile.

Therefore for now it's only present in the [linux-cachyos](/features/kernel#variants) variant.

For more information about AutoFDO, click [here.](https://cachyos.org/blog/2411-kernel-autofdo/)

### Does the realtime kernel improve gaming performance?

No, it does not. The realtime kernel makes much more code preemptible compared to a normal fully preemptible kernel. This means that much more tasks (gaming processes
included) are frequently preempted and will forcefully yield system resources, leading to worse performance.
