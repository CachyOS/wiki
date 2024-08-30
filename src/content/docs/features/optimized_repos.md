---
title: Optimized Repositories
description: Information about our optimized repositories
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

## Customized Packages

Our [CachyOS-PKGBUILDs](https://github.com/CachyOS/CachyOS-PKGBUILDS) repository contains packages that receive ongoing updates, patches and backported fixes.
To boost performance, we selectively implement PGO, LTO, and BOLT optimizations depending on the need.
We also maintain a couple of -git packages e.g mesa-git.

### Adding Our Repositories to an Existing Arch Linux Install

We provide a script that automates the installation of our repositories to your existing Arch-based installs.

```sh
curl https://mirror.cachyos.org/cachyos-repo.tar.xz -o cachyos-repo.tar.xz
tar xvf cachyos-repo.tar.xz && cd cachyos-repo
sudo ./cachyos-repo.sh
```

:::tip[How the script works]
This script will detect the instruction sets your CPU is capable of and install whichever version of our repositories that
are the most optimized for it. It also backs up your old `pacman.conf` for repository removal via the script
:::

Our script also supports removing the CachyOS repositories by appending `--remove` to the `cachyos-repo.sh` script.

```sh
sudo /path/to/cachyos-repo.sh --remove
```

## Tests and benchmarks

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

## Learn more

- [Instruction sets for the various x86-64 micro-architectures](https://en.wikipedia.org/wiki/X86-64#Microarchitecture_levels)
- [Manual Installation of CachyOS's repositories](https://github.com/CachyOS/linux-cachyos?tab=readme-ov-file#option-2-manual-installation)
