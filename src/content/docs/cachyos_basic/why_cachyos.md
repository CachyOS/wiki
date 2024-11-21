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

## Advanced CPU Scheduler Support

Firstly let's understand what a CPU scheduler is. In the Linux Kernel, the CPU scheduler is a crucial component
that manages how tasks (or processes) are executed on the system. It decides which task should run next,
ensuring efficient use of system resources to allow multiple tasks to run simultaneously.

By default CachyOS provides BORE (Burst-Oriented Response Enhancer) scheduler in the default kernel,
an extended version of EEVDF + sched-ext, a framework to load userspace schedulers. We also provide other kernels with individual versions of EEVDF and the sched-ext framework separately. You can choose your preferred kernel variant and its corresponding scheduler using the kernel manager bundled with the installation.

For more information about the kernels that we offer, check out the [variants](/features/kernel#variants) page.

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
