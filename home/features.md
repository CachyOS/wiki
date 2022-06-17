---
title: Features and Performance Tweaks
description: Some of the CachyOS features, and what makes CachyOS different.
published: 1
date: 2022-06-17T02:37:25.560Z
tags: best, better, feature, features, info, information, why
editor: markdown
dateCreated: 2021-07-04T02:28:46.352Z
---

# Providing x86-64-v3 microarchitecture level optimization

Our installer will autodetect your machine microarchitecture, if x86-64-v3 is detected it will automatically use the optimized packages, which yields more than 10% performance improvement.

# KDE and Plasma Optimization
Some of KDE and Plasma tools are compiled with set of flags to provide better performance. Tools like kscreen, kwin, kwindowsystem, plasma-desktop, plasma-wayland-session, plasma-workspace, and qt5-tools.

# Other performance improvements

- Ananicy-CPP installed and configured by default
- ZRAM preconfigured with zstd compression
- BFQ scheduler is used by default for HDDs and SSDs
- Heavily optimized kernel with several patches
- BBRv2 as default and general optimized network settings
- Many other tweaks and improvements

# Security

Following security features will be available:

- Firefox based browser with some security plugins and some extra features
- Firejail Toggle for using all packages which got a firejail profile will use any untrusted application in a sandbox environment and it will automatically update if you install any new package
- preconfigured dns servers, which uses DoH and DoT servers
- toggle for anonymized dnscrypt config and uses only dnscrypt servers
- toggle for a hardended-kernel and some hardened config
- security related packages are compiled with extra CC flags for extra security

# Ananicy-Cpp, zramd and other tweaks.

([Ananicy-Cpp](https://gitlab.com/ananicy-cpp/ananicy-cpp)) (ANother Auto NICe daemon) — is a shell daemon created to manage processes' IO and CPU priorities, with community-driven rulesets for popular applications. This tool is mainly for desktop usage. Ananicy-Cpp is a completly rewritten version of the orginal Ananicy in C++, providing much lower CPU and memory usage.

# Installation example using the CLI-Installer

https://www.youtube.com/watch?v=NtnDyLDO5vA

