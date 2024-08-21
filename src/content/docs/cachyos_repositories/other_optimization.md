---
title: Other Optimization and Features
description: A detailed list of Features and changes CachyOS does apply
---

CachyOS Settings
----------------

CachyOS Settings contains a bunch of configuration files for ZRAM, Nvidia, AMD and general system changes.

### Configuration

- ZRAM configuration and rules
- NVIDIA Tweaks/Settings to provide a better nvidia OOB experience
- Force AMDGPU Driver for GCN 1.0 and GCN 2.0 GPU's
- Networking, memory management, and security-related sysctl kernel configuration changes
- systemd journal.d size limit
- Zswap disabled
- THP (Transparent Huge Pages) set to defer+madvise
- I/O scheduler: BFQ (HDD), MQ-Deadline (SSD), none (NVMe)
- SATA Active Link Power Management set to max performance
- Watchdog blacklist

### Scripts

- **cachyos-bugreport.sh**: A tool to easily provide logs for support
- **paste-cachyos**: Script which makes it possible to paste text from the terminal easily
- **kerver**: Shows the current used kernel configuration and used scheduler
- **topmem**: Shows up to 10 processes which are currently using the highest amount of RAM in a descending order

### Services

- **ananicy-cpp**: Niceness daemon with extensive rule sets for diverse application types
- **ksmctl**: User Space KSM Daemon to merge same memory pages into one in order to save memory
