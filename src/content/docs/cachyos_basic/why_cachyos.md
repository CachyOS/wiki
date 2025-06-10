---
title: Why CachyOS?
description: Why CachyOS may be better for you
---

CachyOS offers a polished Arch experience, complete with a user-friendly installer, pre-configured desktops and performance optimizations without compromising the user experience and security of the system. Below are some of the highlight features that CachyOS provides to ensure an amazing desktop experience.

## Optimized Packages and Repositories

CachyOS offers optimized packages for various hardware configurations, including x86-64-v3, x86-64-v4, and Zen4+ systems to improve overall
performance of the system. Additionally, CachyOS ships highly-requested [AUR](https://aur.archlinux.org/) packages from users for QoL improvements.

For a better idea of the various packages CachyOS has optimized, see [Optimized Repositories](/features/optimized_repos).

## Custom Kernel Tuned for Performance and Stability

Aside from the CachyOS base kernel patch set that tunes various kernel parameters to improve desktop responsiveness, CachyOS also cherry picks promising
patch sets that have not been mainlined or not in the stable revision of the kernel. These patches undergo internal testing before being shipped to users
to ensure that stability isn't impacted. For a complete list of patches that CachyOS provides, see [Kernel](/features/kernel).

## Custom CPU Scheduler Support

CPU scheduling is an important part of the kernel to ensure all tasks are allocated CPU time fairly. The Linux kernel implements various scheduling classes
to ensure that each and every task gets scheduled appropriately. The fair scheduling class, more well known as just "default scheduler" is based on the
[EEVDF (Earliest Eligible Virtual Deadline First)](https://lwn.net/Articles/925371/) algorithm.

By default EEVDF is tuned to divide available CPU time fairly among all tasks and is mostly geared for throughput-oriented workloads. The CachyOS kernel
[configures some EEVDF tunables](https://github.com/CachyOS/linux/blob/6.12/cachy/kernel/sched/fair.c#L76-L79) to prioritize desktop responsiveness over
sheer throughput.

However, EEVDF by design wasn't meant to be used for desktop interactivity. With that in mind, CachyOS ships kernels patched with the
[BORE (Burst-Oriented Response Enhancer)](https://github.com/firelzrd/bore-scheduler) scheduler that introduces an additional property
to assign tasks requiring high responsiveness more CPU time compared to tasks that don't based on their "burstiness".

In 6.12, the Linux kernel enables the ability to hotplug BPF schedulers and replace the fair scheduling class with a different scheduler. To facilitate this,
CachyOS provide first-class support for [sched-ext schedulers](https://github.com/sched-ext/scx)

For more information about the kernels that CachyOS offers and sched-ext schedulers, see [Kernel](/features/kernel) and [sched-ext](/configuration/sched-ext/).

## Hardware Detection

CachyOS ships its own [hardware detection tool](https://github.com/CachyOS/chwd) that correctly installs necessary packages and drivers for each system to lighten
the burden of post-install setups from users.

## Customizable Installation Process

The CachyOS installer guarantees that users can have the choice of what system they want. This customizability includes but is not limited to:
- [Desktop Environments](/installation/desktop_environments/)
- [Boot Managers](/installation/boot_managers/)
- [Kernel Flavors](/features/kernel#variants)
- [Filesystems](/installation/filesystem)
- Custom Packages to install during the installation process

## CachyOS Applications

By default, CachyOS provides its own applications, such as CachyOS Hello or CachyOS Package Installer
By default, user helping applications such as CachyOS Hello and CachyOS Package Installer are provided by CachyOS to simplify and enhance your Linux experience.
For example, CachyOS Hello provides options to update your system, enable services and rank the mirrors. It also comes with one-click tweaks and fixes to some
common issues. Package Installer will help you to install packages.

List of applications CachyOS develops and maintains:

- **CachyOS Kernel Manager**: Easily install kernels from the repository or configure your own kernel and include your own patches and even manage the sched-ext framework via the [scx_loader](<https://github.com/sched-ext/scx/tree/main/rust/scx_loader>).
- **CachyOS Hello**: Application for controlling tweaks, applying fixes, package installation and more information about CachyOS.
- **CachyOS Package Installer**: GUI for an easy installation of commonly used applications.
- **cachyos-rate-mirrors**: Automatically rank Arch and CachyOS mirrors for optimal download speeds.
- **systemd-boot-manager**: Automatically generates new entries for the systemd-boot-manager and can be easily configured in `/etc/sdboot-manage.conf`.

## Friendly and Active Community

The most important highlight is CachyOS's ever-growing community. Without the community, CachyOS would never be able to reach where it is now.
The community assists each other and share tips and tricks for a better linux experience. Join us in the
[CachyOS Discord](https://discord.com/invite/cachyos-862292009423470592) or the [CachyOS Forum](https://discuss.cachyos.org/).
