---
title: Adding CachyOS Repository for Enhanced Arch Linux Performance
description: Step-by-step guide on how to add CachyOS repository to your Arch Linux system with x86_64-v3 support.
published: 1
date: 2023-05-27T08:31:45.083Z
tags: arch linux, cachyos, repo, x86_64-v3
editor: markdown
dateCreated: 2021-08-18T15:06:49.466Z
---

# Why does CachyOS utilize its own repositories?
## Performance and optimizations
We want to provide a performance-optimized distro and this requires performance-optimized packages. So that's why CachyOS provides its own repositories with packages compiled with the following:
- x86-64-v4 
- x86-64-v3 - *10%-20% performance uplift*
- x86-64 - *These packages have minimal benefits, only LTO provides a 5-10% uplift*

## Better control of the packages
Arch Linux repositories are great, but sometimes they are slow to react on required re-builds.  
- **Example:** Typical errors like "error while loading shared libraries: /usr/lib/..."  
- **Solution:** That error is mostly solved by a re-build of the package against a newer library and after the re-build the package works again.

# Tests and benchmarks
If you would like to know more about the performance uplift of our repositories, check the links below.  

- Phoronix tried benchmarks and it seems to be mostly good for CachyOS and shows leading in the performance aspect. These benchmarks are a little bit older, during that time, CachyOS has already evolved much more:  
https://www.phoronix.com/review/cachyos-linux-perf

- x86-64-v3 (- there is a moderate benefit of *-march=haswell* (x86_64-v3) - of around
10%-20% as compared to baseline for the tests performed):  
https://lists.archlinux.org/pipermail/arch-general/2021-March/048739.html
