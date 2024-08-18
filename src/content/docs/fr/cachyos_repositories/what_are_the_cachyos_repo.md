---
title: CachyOS Repository General Information
description: Benchmarks and information about the repository
---

# Why does CachyOS utilize its own repositories?

## Performance and optimizations
We want to provide a performance-optimized distribution and this requires performance-optimized packages. Currently we are recompiling the Arch Linux repository core and extra with the generic x86-64-v3 and x86-64-v4 instruction set.

- x86-64-v4 - Enabling AVX512 can significantly improve application performance (Depending on the application/workload)
- x86-64-v3 - *5%-20% performance uplift*

## Customized Packages

In the [CachyOS-PKGBUILDs](https://github.com/CachyOS/CachyOS-PKGBUILDS) repository we are maintaining a bunch of packages, which are constantly getting patches. PGO or BOLT Optimization to provide an additional uplift in performance.

# Tests and benchmarks
If you would like to know more about the performance uplift from our repositories. Please see the links below.  

- Phoronix has already benchmarked Cachy twice and it seems to be a win for CachyOS, which is shown mostly leading in the benchmark graphs and on the Geometric Mean of All Test Results. 
These benchmarks are old by now, After these two reviews, CachyOS evolved and matured a lot more in terms of usability and performance. the following review was the first one Michael made of CachyOS on it's infancy.  
https://www.phoronix.com/review/cachyos-linux-perf

- Here, Phoronix has recently conducted another benchmark demonstrating the difference between x86-64-v4, x86-64-v3 and x86-64 (generic) Packages. Looking at the examples like PHP or GCC, where we customize our PKGBUILDs there is a noticeable performance improvement.
https://www.phoronix.com/review/cachyos-x86-64-v3-v4


- x86-64-v3 (- there is a moderate benefit of *-march=haswell* (x86_64-v3) - of around
10%-20% as compared to baseline for the tests performed by Arch Linux):  
https://lists.archlinux.org/pipermail/arch-general/2021-March/048739.html