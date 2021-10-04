---
title: Features and Merits
description: Some of the CachyOS features, and what makes CachyOS different.
published: 1
date: 2021-10-03T18:10:12.590Z
tags: feature, features, best, better, why, info, information
editor: markdown
dateCreated: 2021-07-04T02:28:46.352Z
---

# Providing x86-64-v3 microarchitecture level optimization

Our installer will autodetect your machine microarchitecture, if x86-64-v3 is detected it will automaticly use the optimized packages, which yields more than 10% performance improvement.

# KDE and Plasma Optimization
Some of KDE and Plasma tools are compiled with set of flags to provide better performance. Tools like kscreen, kwin, kwindowsystem, plasma-desktop, plasma-wayland-session, plasma-workspace, and qt5-tools.

# Other performance improvements

- NTN installed and configured on default
- ZRAM configured with zstd compression
- Using BFQ scheduler on ssd and hdds on default
- Heavily optimized kernel with several patches
- BBRv2 as default and general optimized network settings
- Earlyroom and le9-patch (https://github.com/hakavlad/le9-patch) with default settings
- Optimized nvidia drivers

# Security

Following security features will be available:

- Firefox based browser with some security plugins  also there config
- Firejail Toggle for using all packages which got a firejail profile will used in sandboxing and automaticly updated if you are installing new packages
- preconfigured dns servers, which uses DOH and DOT servers
- toggle for anonymized dnscrypt config and uses only dnscrypt servers
- toggle for a hardended-kernel and some hardened config
- security related packages are with more secure cc flags compiled