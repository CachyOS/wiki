---
title: Features and Performance Tweaks
description: Some of the CachyOS features, and what makes CachyOS different.
published: 1
date: 2023-01-09T15:16:01.954Z
tags: best, better, feature, features, info, information, why
editor: markdown
dateCreated: 2021-07-04T02:28:46.352Z
---

# Providing x86-64-v3 microarchitecture level optimization

Our installer will autodetect your machine microarchitecture, if x86-64-v3 is detected it will automatically use the optimized packages, which yields more than 10% performance improvement.

# Optimized Packages
All packages are compiled with LTO and x86-64-v3.
We are currently also introducing a x86-64-v4 repo which will be filled over the time.
GCC is compiled with PGO and LTO. Some packages also get optimized with BOLT a post link optimizer, for example python.

# Other performance improvements

- Ananicy-CPP installed and configured by default
- ZRAM preconfigured with zstd compression
- BFQ scheduler is used by default for HDDs
- mq-deadline used for sdd
- "none" for nvme's
- Heavily optimized kernel with several patches
- BBRv2 as default and general optimized network settings
- Many other tweaks and improvements

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
