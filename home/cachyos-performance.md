---
title: How does CachyOS improve the performance?
description: 
published: 1
date: 2022-06-17T01:28:48.925Z
tags: performance cachyos x86-64-v3 arch cacule
editor: markdown
dateCreated: 2021-10-04T07:59:10.433Z
---

# Linux Kernel with BORE scheduler is the default choice

Yes, this is a part of the optimization for CachyOS. ¿Why do we use that scheduler in particular?. Well... let us explain why!. They are so many schedulers like BMQ, MuQSS, that some of you might already know (or not), but we believe and have tested BORE and it resulted the one with the best performance results both in benchmarks and responsiveness tests.

> Disclaimer: Although for some it would result in a better performance overall with the BORE scheduler, it also depends on your type of hardware.
{.is-warning}

# Huge repository with packages compiled with generic-v3

You probably don't know so much about compiling and stuff, let me introduce you to it. You can compile code in so many different ways, with custom flags,toolchains,algorithms and so on, we barely use the same as Arch Linux, but here is one big change to consider, the x86-64 architecture is supported by every Intel/AMD processor but as technology rapidly changed and improvements were discovered, new instructions were created and used to support better features, improved reliability at runtime, more stable code and so on. Below we'll show you all of them and what instructions are required for them to work.

These are the four x86-64 microarchitecture levels on top of the x86-64 baseline: 
- x86-64: CMOV, CMPXCHG8B, FPU, FXSR, MMX, FXSR, SCE, SSE, SSE2 
- x86-64-v2: (close to Nehalem) CMPXCHG16B, LAHF-SAHF, POPCNT, SSE3, SSE4.1, SSE4.2, SSSE3 
- x86-64-v3: (close to Haswell) AVX, AVX2, BMI1, BMI2, F16C, FMA, LZCNT, MOVBE, XSAVE 
- x86-64-v4: AVX512F, AVX512BW, AVX512CD, AVX512DQ, AVX512VL

**For more educated people in the tech:**

 We can call them like a group of instruction set, probably all Linux distribution use x86-64-v2 or vanilla x86-64, because of compatibility with older hardware, but that could limit performance on newer hardware. You probably have something newer than Haswell CPU aka Intel 4th gen CPUs, these days (2022) all newer processors have many more instructions than x86-64-v2, but you can't use that, because packages which are compiled with x86-64 and v2, they can't use your CPU full potential and the performance improvement could range from 10% to 35% on some cases.

**For users with less tech knowledge:** 

Example: You have a laptop with a AMD Ryzen 5 4500U or Intel Core i5 1035G4, your friend have his desktop with a Intel Core i7-9700K. All machines have a CPU with support for the AVX instruction set, but your programs can't use AVX instruction set, resulting in a lower performance and capability.

# Here is a reason why most Linux distros still use x86-64-v2

Linux is heavily used for servers, so you want to maximum compatibility, because there is still a big amount of linux servers with old hardware around the world, so it makes sense for Linux to be more friendly for end users and don't exclude those who doesn't have the privilege or money to have new and shiny hardware. Personal computers, laptops, already include aCPU with all the needed instruction sets in the x86-64-v3 level, this is also one of so many reasons why CachyOS exist and could potentially unlock even more performance on your actual PC.

I know... so many buzz-words is bad without proof, so here is a doc testing and benchmarking x86-v64-v2 VS x86-64-v3.

<https://www.phoronix.com/scan.php?page=news_item&px=Arch-Linux-x86-64-v3-Port-RFC> <https://lists.archlinux.org/pipermail/arch-general/2021-March/048739.html>

**So all packages and kernels (x86-64-v3) in the CachyOS repositories have around 10% performance uplift and some packages can have higher performance uplift (15% or 36%!)**

