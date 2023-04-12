---
title: How does CachyOS improve the performance?
description: 
published: 1
date: 2023-01-31T22:23:07.080Z
tags: performance cachyos x86-64-v3 arch cacule
editor: markdown
dateCreated: 2021-10-04T07:59:10.433Z
---

# Linux Kernel with EEDVF scheduler as the default scheduler

An important aspect of optimization for CachyOS is the scheduler used in our default kernel. Let us explain why we have chosen the EEVDF as our default scheduler. There are many schedulers available, like BMQ or MuQSS, some of them you might already know. We have tested EEVDF and it resulted the one with the best performance results both in benchmarks and responsiveness tests. Please keep an eye out for any updates, as schedulers tend to change often and our default scheduler might change in the future.

> It's important to note that the choice of EEVDF scheduler may not always result in improved performance for all hardware types.
{.is-warning}

# Huge repository with packages compiled with generic-v3

Let me introduce you to compiling. It's the process of converting code into machine-readable form. You can customize the process with flags, toolchains, and algorithms. At CachyOS, we have compiled a large repository of packages using the x86-64-v3 microarchitecture level for improved performance. This level is an improvement over the commonly used x86-64 and x86-64-v2 levels and is optimized for newer processors, such as Intel 4th generation or later, which have more instructions.

These are the four x86-64 microarchitecture levels on top of the x86-64 baseline: 
- x86-64: CMOV, CMPXCHG8B, FPU, FXSR, MMX, FXSR, SCE, SSE, SSE2 
- x86-64-v2: (close to Nehalem) CMPXCHG16B, LAHF-SAHF, POPCNT, SSE3, SSE4.1, SSE4.2, SSSE3 
- x86-64-v3: (close to Haswell) AVX, AVX2, BMI1, BMI2, F16C, FMA, LZCNT, MOVBE, XSAVE 
- x86-64-v4: AVX512F, AVX512BW, AVX512CD, AVX512DQ, AVX512VL

**For more educated people in the tech:**

We can refer to them as a group of instruction sets; most Linux distributions use x86-64-v2 or vanilla x86-64 for compatibility with older hardware, but this may limit performance on newer hardware. You most likely have something newer than a Haswell CPU, also known as an Intel 4th generation CPU; if so, enjoy the free performance! These days (2022) all newer processors have many more instructions than x86-64-v2, but you can't use them because packages compiled with x86-64 and v2 can't use your CPU's full potential, and the performance improvement could range from 10% to 35% in some cases.

**For users with less tech knowledge:** 

As an example, consider a laptop with an AMD Ryzen 5 4500U or an Intel Core i5 1035G4, and a desktop with an Intel Core i7-9700K. Both machines have a CPU that supports the AVX instruction set, but programs compiled with x86-64 or x86-64-v2 can not use it, resulting in lower performance and capability.

# Here is a reason why most Linux distros still use x86-64

Because there are still a lot of outdated Linux servers around the world, it's important for Linux distributions to be accessible to users with older hardware. However, most personal computers and laptops now include CPUs with x86-64-v3 instruction sets, which is one of the reasons why CachyOS was created. This distribution can potentially unlock even more performance on your PC.

To prove its efficiency, check out the following benchmarking reports:

*   [https://www.phoronix.com/scan.php?page=news\_item&px=Arch-Linux-x86-64-v3-Port-RFC](https://www.phoronix.com/scan.php?page=news_item&px=Arch-Linux-x86-64-v3-Port-RFC)
*   [https://lists.archlinux.org/pipermail/arch-General/2021-March/048739.html](https://lists.archlinux.org/pipermail/arch-General/2021-March/048739.html)

**According to these reports, packages and kernels in the CachyOS x86-64-v3 repositories provide an average performance increase of 10%. In some cases, performance increases of up to 36% have been observed.**

# Benchmarks

Phoronix has benchmarked CachyOS against other Linux distributions and results can be found at [https://www.phoronix.com/review/cachyos-linux-perf](https://www.phoronix.com/review/cachyos-linux-perf).

A small regression was observed in the PHP and Python benchmarks, but it was fixed with the following commit [https://github.com/CachyOS/ananicy-rules/commit/9e0d00ef1ad5866b1b597b1e0af7e1ce3ee985ee](https://github.com/CachyOS/ananicy-rules/commit/9e0d00ef1ad5866b1b597b1e0af7e1ce3ee985ee).

Further improvements to Python performance are planned (as soon as we will update to Python 3.11).

We are looking really forward for further benchmarks.
Thanks to the great work from Phoronix.
