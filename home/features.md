---
title: Features and Performance Tweaks
description: Some of the CachyOS features, and what makes CachyOS different.
published: 1
date: 2023-01-30T00:28:16.543Z
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

# Security

Following security features will be available:

- Firefox based browser with some security plugins and some extra features
- Firejail Toggle for using all packages which got a firejail profile will use any untrusted application in a sandbox environment and it will automatically update if you install any new package
- preconfigured dns servers, which uses DoH and DoT servers
- toggle for anonymized dnscrypt config and uses only dnscrypt servers
- Hardened Kernel available in the cachyos repo
- security related packages are compiled with extra CC flags for extra security

# ananicy-cpp

([ananicy-cpp](https://gitlab.com/ananicy-cpp/ananicy-cpp)) (ANother Auto NICe daemon) — is a shell daemon created to manage processes' IO and CPU priorities, with community-driven rulesets for popular applications. This tool is mainly for desktop usage. Ananicy-Cpp is a completly rewritten version of the orginal Ananicy in C++, providing much lower CPU and memory usage.
Recently also there was latency_nice included, which helps the scheduler to make decesion which tasks get a lower or higher latency.
