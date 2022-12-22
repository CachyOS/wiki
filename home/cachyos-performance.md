---
title: How does CachyOS improve the performance?
description: 
published: 1
date: 2022-12-22T17:03:02.100Z
tags: performance cachyos x86-64-v3 arch cacule
editor: markdown
dateCreated: 2021-10-04T07:59:10.433Z
---

# Linux Kernel with BORE scheduler is the default choice

Yes, this is a part of the optimization for CachyOS. ¿Why do we use that scheduler in particular?. Well... let us explain why!. There are so many schedulers like BMQ, MuQSS, that some of you might already know (or not), but we have tested BORE and it resulted the one with the best performance results both in benchmarks and responsiveness tests.

> Disclaimer: Although for some it would result in a better performance overall with the BORE scheduler, it also depends on your type of hardware.
{.is-warning}

# Huge repository with packages compiled with generic-v3

You probably don't know so much about compiling and stuff, let me introduce you to it. You can compile code in so many different ways, with custom flags, toolchains, algorithms and so on, we barely use the same as Arch Linux. In order to improve the performance of CachyOS, we have compiled a large repository of packages using the x86-64-v3 microarchitecture level. This is an improvement over the x86-64 and x86-64-v2 levels, which are commonly used by other Linux distributions due to their compatibility with older hardware. However, newer processors, such as those belonging to the Intel 4th generation or later, have a greater number of instructions and can benefit from the additional performance provided by x86-64-v3.

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

Because there are still a lot of linux servers with old hardware around the world, it makes sense for Linux to be more friendly for end users and not exclude those who don't have the privilege or money to have new and shiny hardware. However most personal computers and laptops nowadays already include a CPU with all of the necessary instruction sets in the x86-64-v3 level; this is also one of the many reasons why CachyOS exists and could potentially unlock even more performance on your PC.

I know... so many buzz-words is bad without proof, so here is a doc testing and benchmarking x86-v64 VS x86-64-v3.

<https://www.phoronix.com/scan.php?page=news_item&px=Arch-Linux-x86-64-v3-Port-RFC> 

<https://lists.archlinux.org/pipermail/arch-general/2021-March/048739.html>

**Overall, we have found that packages and kernels in the CachyOS x86-64-v3 repositories have an average performance uplift of around 10%. In some cases, performance uplifts of up to 36%(!!) have been observed.**

# Benchmarks

Phoronix did benchmarked CachyOS against other Distros. 
https://www.phoronix.com/review/cachyos-linux-perf

In the PHP and python benchmark we had a little regression, which was caused that ananicy-cpp has limited PHP. This was fixed with the following commit https://github.com/CachyOS/ananicy-rules/commit/9e0d00ef1ad5866b1b597b1e0af7e1ce3ee985ee .
We are going to improve the python situation as soon we will update to Python 3.11.
We are looking really forward for further benchmarks.
Thanks to the great work from phoronix.
