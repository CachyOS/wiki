---
title: Features and Performance Tweaks
description: Some of the CachyOS features, and what makes CachyOS different.
published: 1
date: 2023-01-30T00:33:40.310Z
tags: best, better, feature, features, info, information, why
editor: markdown
dateCreated: 2021-07-04T02:28:46.352Z
---

CachyOS: x86-64-v3 Microarchitecture Optimization
=================================================

CachyOS is committed to delivering high-performance computing to its users. Our installer detects your machine's microarchitecture and uses optimized packages for x86-64-v3 systems, providing a significant performance improvement of more than 10%.

Optimized Packages
------------------

All packages in CachyOS are compiled with LTO and optimized for the x86-64-v3 microarchitecture. We are currently working on adding a x86-64-v4 repository, which will be filled over time. The GCC compiler is optimized using PGO and LTO, and certain packages are further optimized with BOLT, a post-link optimizer.

Performance Enhancements
------------------------

CachyOS also includes several other performance enhancements to improve the overall user experience. These include:

*   Ananicy-CPP installed and configured by default
*   ZRAM preconfigured with zstd compression
*   BFQ scheduler used by default for HDDs and mq-deadline for SSDs
*   Heavily optimized kernel with patches
*   BBRv2 as the default network setting
*   Additional tweaks and improvements to further optimize performance.

Security Features
=================

At CachyOS, we place a high priority on security. That's why we've included the following security features in our software:

*   A Firefox-based browser with security plugins and additional features
*   The option to use Firejail, which runs untrusted applications in a sandbox environment and updates automatically with new packages
*   Preconfigured DNS servers that utilize DoH and DoT protocols
*   Anonymized DNSCrypt configuration and use of only DNSCrypt servers
*   A hardened kernel available in the CachyOS repository
*   Security-related packages compiled with extra CC flags for added security

Ananicy-Cpp
===========

[Ananicy-Cpp](https://gitlab.com/ananicy-cpp/ananicy-cpp) is a shell daemon that manages process IO and CPU priorities with community-driven rulesets for popular applications. This tool is primarily designed for desktop usage and is a complete rewrite of the original Ananicy in C++, providing lower CPU and memory usage. Additionally, Latency\_nice has recently been included to help the scheduler make decisions about which tasks receive lower or higher latency.
