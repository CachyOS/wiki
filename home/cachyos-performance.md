---
title: How does CachyOS improve the performance?
description: 
published: 1
date: 2021-10-04T07:59:37.080Z
tags: performance cachyos x86-64-v3 arch cacule
editor: markdown
dateCreated: 2021-10-04T07:59:10.433Z
---

# Linux-CacULE

Yes, this is a first part of optimization for CachyOS, we use CacULE scheduler. Here is a so many schedulers like BMQ, MuQSS, but we we believe and tested linux-cacule as kernel with best performance results.

# packages compiled as generic-v3

You probably don't know so much about compiling, let me introduce that. You can compile code for different ways, with custom flags, but we use barely same as Arch Linux, but here is a one big change.

These common levels in their initial form amount to: 
- x86-64: CMOV, CMPXCHG8B, FPU, FXSR, MMX, FXSR, SCE, SSE, SSE2 
- x86-64-v2: (close to Nehalem) CMPXCHG16B, LAHF-SAHF, POPCNT, SSE3, SSE4.1, SSE4.2, SSSE3 
- x86-64-v3: (close to Haswell) AVX, AVX2, BMI1, BMI2, F16C, FMA, LZCNT, MOVBE, XSAVE 
- x86-64-v4: AVX512F, AVX512BW, AVX512CD, AVX512DQ, AVX512VL

**For more educated people in the tech:**

 We can called like group of instruction set, probably all Linux distribution use x86-64-v2, because of compatibility with older hardware, but that's cost performance. You probably have something newer than Haswell CPU, these days (2021) have much more instructions than x86-64-v2, but you can't use, because packages (compiled code), doesn't ready and can't use your CPU at full potential.

**For users with less tech knowledge:** 

Example: You have laptop with AMD Ryzen 5 4500U or Intel Core i5 1035G4, your friend can have desktop with Intel Core i7-9700K. All machines have CPU with AVX instruction set, but your programs can't use AVX instruction set. That's cost performance and you simple don't use CPU at full potential.

# Here is a reason why linux distro use x86-64-v2

Linux is primary for servers, so you want to maximum compatibility, because here is a still big amount linux servers with old hardware around the world, but here is a nothing obstacles to make linux distro more friendly for end users - personal computers, laptops. Most laptops and desktops already have CPU with all instruction set in the x86-64-v3, this is a also one of so many reason why CachyOS exist.

I know so many words is bad without proof, so here is a docs around testing and benchmarks x86-v64-v2 VS x86-64-v3.

<https://www.phoronix.com/scan.php?page=news_item&px=Arch-Linux-x86-64-v3-Port-RFC> <https://lists.archlinux.org/pipermail/arch-general/2021-March/048739.html>

**So all packages and kernel in the CachyOS repositories have around 10% performance uplift and some packages can have higher performance uplift (15% or 36%!)**

