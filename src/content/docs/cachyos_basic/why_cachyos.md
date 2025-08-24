---
title: Why CachyOS?
description: Why CachyOS may be better for you
---

CachyOS offers a complete and polished Arch Linux experience with a user-friendly installer, pre-configured desktops, and performance optimizations without compromising the user experience and security of the system.

Below are some of the key features that CachyOS provides to ensure an enhanced desktop experience.

## Optimized Packages and Repositories

CachyOS offers a large selection of **[optimized packages](<https://packages.cachyos.org/>)** for various hardware configurations, including `x86-64-v3`, `x86-64-v4`, and `Zen4+` systems to improve overall performance.

For more information, check [**Optimized Repositories.**](/features/optimized_repos)

## Custom Kernel Tuned for Performance and Stability

Aside from the CachyOS base kernel patch set that tunes various kernel parameters to improve desktop responsiveness, CachyOS cherry-picks patch sets that have not been mainlined or are not included in the stable revision of the kernel.

Therefore, these patches undergo internal testing before being released to users to ensure that stability isn't impacted. For a complete list of the patches that CachyOS provides, see [Kernel](/features/kernel).

## Custom CPU Scheduler Support

By default, EEVDF is tuned to divide the available CPU time fairly among all tasks, and it's mostly geared for throughput-oriented workloads. The CachyOS kernel [configures some EEVDF tunables](https://github.com/CachyOS/linux/blob/6.15/cachy/kernel/sched/fair.c#L79-81) to prioritize desktop interactivity.

However, EEVDF by design wasn't meant to be used for desktop interactivity. With that in mind, CachyOS ships kernels patched with the
[BORE (Burst-Oriented Response Enhancer)](https://github.com/firelzrd/bore-scheduler) scheduler which enhances EEVDF to improve interactivity under heavy workloads.

In 6.12, the Linux kernel introduced the ability to hotplug BPF schedulers and replace EEVDF with a different scheduler.

For more information about the kernels offered by CachyOS and the sched-ext schedulers, see [Kernel](/features/kernel) and [sched-ext](/configuration/sched-ext).

## Hardware Detection

CachyOS includes its own hardware detection tool, which automatically identifies and installs the necessary drivers and packages for each system, simplifying the post installation process for the users.

## Customizable Installation Process

The CachyOS installer lets users customize their system by choosing the desktop environment, packages, filesystem, boot manager, kernel, and more to fit their needs:

- [Desktop Environments](/installation/desktop_environments/)
- [Boot Managers](/installation/boot_managers/)
- [Kernel Flavors](/features/kernel#variants)
- [Filesystems](/installation/filesystem)
- [Custom Packages to include during installation](https://github.com/CachyOS/cachyos-calamares/blob/cachyos-limine-qt6/src/modules/netinstall/netinstall.yaml)

## CachyOS Applications

By default, CachyOS provides its own suite of applications, such as CachyOS Hello and the CachyOS Package Installer.

List of applications that CachyOS currently develops and maintains:

- [CachyOS Kernel Manager](https://github.com/CachyOS/kernel-manager): Easily install kernels from the repository or configure your own kernel and include your own patches and even manage the sched-ext framework via the [**scx_loader**](<https://github.com/sched-ext/scx/tree/main/tools/scx_loader>).
- [CachyOS Welcome](https://github.com/CachyOS/CachyOS-Welcome): Application for controlling tweaks, applying fixes, installing packages, and providing more information about CachyOS.
- [CachyOS Package Installer](https://github.com/CachyOS/packageinstaller): GUI for easy installation of applications.
- [cachyos-rate-mirrors](https://github.com/CachyOS/rate-mirrors): Automatically ranks Arch and CachyOS mirrors for optimal download speeds with pacman.
- [systemd-boot-manager](https://github.com/CachyOS/systemd-boot-manager): Automatically generates new entries for the systemd-boot-manager, which be easily configured in `/etc/sdboot-manage.conf`.

## Friendly and Active Community

The greatest strength of CachyOS is its expanding community. Without their support, CachyOS wouldn't have achieved its current success. Community members help one another by sharing tips and tricks to enhance the Linux experience.

Join us in the [CachyOS Discord](https://discord.com/invite/cachyos-862292009423470592) and the [CachyOS Forum](https://discuss.cachyos.org/).
