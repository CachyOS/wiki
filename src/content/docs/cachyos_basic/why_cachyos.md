---
title: Why CachyOS?
description: Why CachyOS may be better for you
---

CachyOS offers a polished Arch experience, complete with a user-friendly installer, pre-configured desktops and performance optimizations without compromising the user experience and security of the system. Below are some of the highlight features that we provide to ensure an amazing desktop experience.

## Optimized Packages and Repositories

CachyOS offers optimized packages for various hardware configurations, including x86-64-v3, x86-64-v4, and Zen4+ systems to improve overall
performance of the system. Additionally, we ship highly-requested [AUR](https://aur.archlinux.org/) packages from users for QoL improvements.

For a better idea of the various packages we have optimized, learn more at our [optimized repositories page](/features/optimized_repos).

## Custom Kernel Tuned for Performance and Stability

Aside from our main patchset that tunes various kernel tunables to improve desktop responsivness, we also cherrypick promising patchsets that have not been
mainlined or not in the stable revision of the kernel. These patches undergo internal testing before being shipped to users to ensure that stability isn't
impacted. For a complete list of patches that we provide, visit [our kernel page](/features/kernel).

## Custom CPU Scheduler Support

CPU scheduling is an important part of the kernel to ensure all tasks are allocated CPU time fairly. The Linux kernel implements various scheduling classes
to ensure that each and every task gets scheduled appropriately. The fair scheduling class, more well known as just "default scheduler" is based on the
[EEVDF (Earliest Eligible Virtual Deadline First)](https://lwn.net/Articles/925371/) algorithm.

By default EEVDF is tuned to divide available CPU time fairly among all tasks and is mostly geared for throughput-oriented workloads. Our kernel
[configures some EEVDF tunables](https://github.com/CachyOS/linux/blob/6.12/cachy/kernel/sched/fair.c#L76-L79) to prioritize desktop responsiveness over 
sheer throughput, but there are limitations.

With that in mind, we go one step further and patch our kernel with the [BORE (Burst-Oriented Response Enhancer)](https://github.com/firelzrd/bore-scheduler)
that introduces an additional property to assign tasks requiring high responsiveness more CPU time compared to tasks that don't based on their "burstiness".

In 6.12, we also have the ability to hotplug BPF schedulers and replace the fair scheduling class with a different scheduler. To facilitate this, we provide
first-class support for [sched-ext schedulers](https://github.com/sched-ext/scx)

For more information about the kernels that we offer and sched-ext schedulers, see [kernels](/features/kernels) and [sched-ext](/configuration/sched-ext/).

## Customizable Installation Process

Start your CachyOS journey by booting from the [bootable USB](/installation/installation_prepare/#creating-a-bootable-cachyos-usb-drive) that you created,
You’ll be welcomed by our Hello program, a helpful introduction to CachyOS. Our customized Calamares installer provides a wide range of possibilities.
We offer a variety of [desktop environments](/installation/desktop_environments/), [boot managers](/installation/boot_managers/)
and [kernels](/features/kernel#variants) to choose from.
You can choose what you need and deselect whatever you don't. Your system, your choices.

:::caution[WARNING]
Selecting multiple desktop environments is not allowed due to possible breakage. For example, KDE and GNOME. We recommend choosing a single desktop environment to avoid an installation error.
:::

## User Friendly OS

By default, we provide our own applications, such as CachyOS Hello or CachyOS Package Installer
among others to simplify and enhance your Linux experience. For example, CachyOS Hello provides options to update your system, enable services and rank the mirrors. Package Installer will help you to install packages. Also some tweaks and quick access for fixes to the most common issues found in Arch e.G: removing pacman's db lock.
CachyOS has a really good and friendly Discord community that like to help and assist each other. Join us at [Discord](https://discord.com/invite/cachyos-862292009423470592) or our [forum](https://discuss.cachyos.org/)

CachyOS Applications

--------------------

- **Cachy Browser**: Browser based on Firefox, with a more secure config and patches from Gentoo + Performance optimizations.
- **cachyos-kernel-manager**: Easily install kernels from the repository or configure your own kernel and include your own patches and even manage the sched-ext framework via the [scx_loader](<https://github.com/sched-ext/scx/tree/main/rust/scx_loader>).
- **CachyOS Hello**: Application for controlling tweaks, applying fixes, package installation and more information about CachyOS.
- **CachyOS-ApplicationInstaller**: GUI for an easy installation of commonly used applications.
- **cachyos-rate-mirrors**: Automatically rank Arch and CachyOS mirrors for optimal download speeds.
- **systemd-boot-manager**: Automatically generates new entries for the systemd-boot-manager and can be easily configured in `/etc/sdboot-manage.conf`.
