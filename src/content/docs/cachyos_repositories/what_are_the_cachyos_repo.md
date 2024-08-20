---
title: CachyOS Repository General Information
description: Benchmarks and information about our optimized repositories
---

Our aim to deliver a performance-optimized distribution necessitates recompiling essential Arch Linux packages for generic x86-64,
x86-64-v3, x86-64-v4, and Zen4 architectures.

- x86-64 (Most CPUs) - While lacking AVX2 support found in x86-64-v3, this repository offers optimized packages. LTO and PGO techniques have boosted performance in several packages.
- x86-64-v3- (Intel Haswell and up, AMD Ryzen 1st gen and up) - 5%-20% performance uplift compared to x86-64.
- x86-64-v4 (Intel Rocket Lake, Zen 4, Zen 5) - Delivers substantial performance gains through AVX512 support, depending on the workload.
- Zen 4/5 - In addition to the x86-64-v4 instruction set, the following are added:

```text
abm, adx, aes, avx512bf16, avx512bitalg, avx512ifma, avx512vbmi, avx512vbmi2, avx512vnni,
avx512vpopctndq, clflushopt, clwb, clzero, fsgsbase, gfni, mwaitx, pclmul, pku, prfchw,
rpdid, rdrnd, rdseed, sha, sse4a, vaes, vockmulqdq, wbnoinvd, savec, xsaveopt, xsaves
```

Check out [this](https://en.wikipedia.org/wiki/X86-64#Microarchitecture_levels) page for more information about the instructions used in the different x86_64 micro-architectures

:::note
Wikipedia page quotes that the Skylake architecture supports AVX512 which is wrong, only Skylake-X does.
:::

### Customized Packages

Our [CachyOS-PKGBUILDs](https://github.com/CachyOS/CachyOS-PKGBUILDS) repository contains packages that receive ongoing updates, patches and backported fixes.
To boost performance, we selectively implement PGO, LTO, and BOLT optimizations depending on the need.
We also maintain a couple of -git packages e.g mesa-git.

### Tests and benchmarks

Michael from Phoronix has already benchmarked CachyOS a couple of times, which is shown mostly leading in the benchmark graphs and on the Geometric Mean of All Test Results.
Since the first benchmark made back in 2022. CachyOS has evolved and matured a lot more in terms of usability and performance.

If you would like to know more about the performance uplift from our repositories. Please check the links below.

* **14/03/2021:** In a RFC discussion about the impact of x86-64-v3 was started by **Mateusz Jończyk** from Arch Linux showed some initial results.
  * <https://lists.archlinux.org/pipermail/arch-general/2021-March/048739.html>

* **09/12/2022:** First benchmark done by Michael.
  * <https://www.phoronix.com/review/cachyos-linux-perf>

* **29/02/2024:** Phoronix conducted another benchmark demonstrating the difference between x86-64-v4, x86-64-v3 and x86-64 (generic) Packages. Looking at the examples like PHP or GCC, where we customize our PKGBUILDs there is a noticeable performance improvement.
  * <https://www.phoronix.com/review/cachyos-x86-64-v3-v4>

* **20/08/2024:** Michael posted a new benchmark for the AMD Ryzen 9950x on which it includes CachyOS and some others Linux Distributions.
  * <https://www.phoronix.com/review/linux-os-amd-ryzen9-9950x>
   :::note
   Liquid-DSP and RocksDB were compiled using the Phoronix Benchmark Suite, ignoring the compilation flags specified in /etc/makepkg.conf resulting in a unexpected performance result for CachyOS.
   :::
