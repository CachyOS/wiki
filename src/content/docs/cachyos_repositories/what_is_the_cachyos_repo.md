---
title: Adding CachyOS Repository for Enhanced Arch Linux Performance
description: Step-by-step guide on how to add CachyOS repository to your Arch Linux system with x86_64-v3 support.
published: 1
date: 2023-05-27T08:31:45.083Z
tags: arch linux, cachyos, repo, x86_64-v3
editor: markdown
dateCreated: 2021-08-18T15:06:49.466Z
---
# Meet with CachyOS repositories
CachyOS repositories are one of the most unique aspects of CachyOS, setting it apart from other Arch-based distros.  
These repositories enable CachyOS to create performance-focused packages and exert more control over the package ecosystem compared to distros that solely rely on the Arch Linux repositories.

:::tip
CachyOS has a unique feature that allows users to receive text messages directly in the terminal. If the CachyOS team detects the dangerous state of the repository. You will be informed in the terminal before you execute the update. We already used that during a large Python 3.11 update in the past and prevented damage to the CachyOS.
:::

# [CachyOS repositories](https://mirror.cachyos.org/)
The CachyOS repositories contain Arch Linux and CachyOS packages, which have been rebuilt with flags optimized for performance, stability, and security.
- `x86-64-v4` - currently only kernel packages + LTO. *All packages will be soon*
- `x86-64-v3` - all Arch Linux packages + LTO.
- `x86-64` - all Arch Linux packages + LTO.
