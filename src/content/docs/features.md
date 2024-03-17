---
title: Optimized Features for Performance and Security
description: 'Discover the Key Benefits of CachyOS'
published: 1
date: 2023-04-20T08:18:18.214Z
tags: best, better, feature, features, info, information, why
editor: markdown
dateCreated: 2021-07-04T02:28:46.352Z
---

CachyOS: x86-64-v3/v4 Microarchitecture Optimization
=================================================
CachyOS is committed to delivering high-performance computing to its users. Our installer detects the microarchitecture of your machine and uses optimized packages for x86-64-v3.v4 systems, resulting in a significant performance improvement of more than 10%.

Optimized Packages
------------------
All packages in CachyOS are compiled with Link Time Optimization (LTO) and optimized for the x86-64-v3/v4 microarchitecture. We are constantly working on expanding our repositories. The GCC compiler is optimized using Profile Guided Optimization (PGO) and LTO, and certain packages are further optimized with BOLT, a post-link optimizer.

Performance Enhancements
------------------------
CachyOS comes with several performance enhancements. These enhancements are designed to improve the overall user experience. These include

- Ananicy-CPP, which is preinstalled and configured by default.
- ZRAM, which is pre-configured with zstd compression.
- The BFQ scheduler, which is used by default for HDDs and mq-deadline for SSDs.
- Highly optimized, patched and tuned Kernels.
- BBRv2 set as the default network setting.
- Additional tweaks and improvements to further optimize performance.

Security Features
=================
At CachyOS, we take security very seriously. That is why our software includes the following security features:
- A Firefox-based browser with security plugins and additional features
- The option to easily set your preferred DNS in the CachyOS Hello app
- A hardened kernel available in the CachyOS repository
- Security-related packages compiled with extra CC flags for added security

Ananicy-Cpp
===========
[Ananicy-Cpp](https://gitlab.com/ananicy-cpp/ananicy-cpp) is a shell daemon that manages process IO and CPU priorities with community-driven rulesets for popular applications. This tool is primarily designed for desktop usage and is a complete rewrite of the original Ananicy in C++, providing lower CPU and memory usage. Additionally, Latency\_nice has recently been included to help the scheduler make decisions about which tasks receive lower or higher latency.
