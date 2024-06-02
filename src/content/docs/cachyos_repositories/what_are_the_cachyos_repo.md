---
title: CachyOS Repository General Information
description: Benchmarks and information about the repository
---

# Why does CachyOS utilize its own repositories?

## Performance and optimizations
We want to provide a performance-optimized distribution and this requires performance-optimized packages. Currently we are recompiling the Arch Linux repository core and extra with the generic x86-64-v3 and x86-64-v4 instruction set.

- x86-64-v4 - Enabling of AVX512, which can highly benefit at applications
- x86-64-v3 - *5%-20% performance uplift*

## Customized Packages

In the [CachyOS-PKGBUILDs](https://github.com/CachyOS/CachyOS-PKGBUILDS) we are maintaining a bunch of packages, which are getting patches, PGO or BOLT Optimization to provide an additional performance uplift.

# Tests and benchmarks
If you would like to know more about the performance uplift of our repositories, check the links below.  

- Phoronix has benchmarked Cachy twice and it seems to be mostly good for CachyOS, which is shown leading in the performance aspect. 
These benchmarks are a little bit older, during that time, CachyOS has already evolved much more:  
https://www.phoronix.com/review/cachyos-linux-perf

- Here Phoronix did Benchmark the difference between x86-64-v4, x86-64-v3 and x86-64 (generic) Packages. Looking at examples like PHP or GCC, where we customize our PKGBUILDs there is really big performance uplift visible.
https://www.phoronix.com/review/cachyos-x86-64-v3-v4


- x86-64-v3 (- there is a moderate benefit of *-march=haswell* (x86_64-v3) - of around
10%-20% as compared to baseline for the tests performed):  
https://lists.archlinux.org/pipermail/arch-general/2021-March/048739.html