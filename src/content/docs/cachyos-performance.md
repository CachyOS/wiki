---
title: How does CachyOS improve the performance?
published: 1
date: 2023-06-10T08:31:17.916Z
tags: performance cachyos x86-64-v3 arch cacule
editor: markdown
dateCreated: 2021-10-04T07:59:10.433Z
---

# CachyOS & performance
CachyOS incorporates various elements to achieve enhanced performance, smoothness, and responsiveness, ensuring a satisfying user experience.

## CachyOS repository
CachyOS repositories offer optimized packages for `x86-64-v3`, `x86-64-v4` (`x86-64-v4` - currently only kernels) architecture. We take the Arch Linux packages and rebuild them with `mach=x86-64-v3` and other performance-focused flags, ensuring stability and security for our custom packages.

## linux-cachyos kernels
By default, CachyOS utilizes the `linux-cachyos` kernel, which is fine-tuned by the CachyOS team to prioritize performance, responsiveness, and overall smoothness of the operating system.

If you are interested in learning more about the specific changes and features incorporated by the CachyOS team, we recommend visiting our GitHub repository at: https://github.com/CachyOS/linux-cachyos

## CachyOS-settings
The specific package offered by CachyOS provides a range of tweaks for the operating system, enhancing its functionality and performance.

If you would like to explore further details about the package and features, we encourage you to visit our GitHub repository at: https://github.com/CachyOS/CachyOS-Settings

## ananicy-cpp & ananicy-rules
That helps adjust nice values, allowing for the allocation of resources to each process, app, and program. While we haven't covered everything, our range of supported programs is quite extensive. If you would like, you can contribute by helping us cover more programs.

For further information, please visit our GitHub repository at: https://github.com/CachyOS/ananicy-rules
# Here is a reason why most Linux distros still use x86-64

Because there are still a lot of outdated Linux servers around the world, it's important for Linux distributions to be accessible to users with older hardware. However, most personal computers and laptops now include CPUs with x86-64-v3 instruction sets, which is one of the reasons why CachyOS was created. This distribution can potentially unlock even more performance on your PC.

To prove its efficiency, check out the following benchmarking reports:

*   [https://www.phoronix.com/scan.php?page=news\_item&px=Arch-Linux-x86-64-v3-Port-RFC](https://www.phoronix.com/scan.php?page=news_item&px=Arch-Linux-x86-64-v3-Port-RFC)
*   [https://lists.archlinux.org/pipermail/arch-general/2021-March/048739.html](https://lists.archlinux.org/pipermail/arch-general/2021-March/048739.html)

**According to these reports, packages and kernels in the CachyOS x86-64-v3 repositories provide an average performance increase of 10%. In some cases, performance increases of up to 36% have been observed.**

# Benchmarks

Phoronix has benchmarked CachyOS against other Linux distributions and results can be found at [https://www.phoronix.com/review/cachyos-linux-perf](https://www.phoronix.com/review/cachyos-linux-perf).

A small regression was observed in the PHP and Python benchmarks, but it was fixed with the following commit [https://github.com/CachyOS/ananicy-rules/commit/9e0d00ef1ad5866b1b597b1e0af7e1ce3ee985ee](https://github.com/CachyOS/ananicy-rules/commit/9e0d00ef1ad5866b1b597b1e0af7e1ce3ee985ee).

Further improvements to Python performance are planned (as soon as we will update to Python 3.11).

We are looking really forward for further benchmarks.
Thanks to the great work from Phoronix.
