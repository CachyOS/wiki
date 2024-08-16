---
title: Why CachyOS?
description: Why CachyOS may be better for you
---

CachyOS is a user-friendly and highly optimized Linux distribution based on Arch Linux.

## What makes CachyOS not just another Arch based distro?

CachyOS offers a polished Arch experience, complete with a user-friendly installer, pre-configured desktops, performance optimizations without compromising the user experience.

Besides performance changes, we provide a ready to go setup for NVIDIA GPUs, ZFS which is built into some of our kernels and miscellaneous tools 

## Optimized Packages and Repositories
CachyOS maintains its own repositories with optimized packages, especially for your hardware.
There are x86-64-v3 and x86-64-v4 optimized repositories that exists to enhance your experience by
reducing latency, improving performance, applying special fixes, etc.

:::caution[WARNING]
x86-64-v3 repository only works for CPUs that supports AVX and AVX2 instructions
while x86-64-v4 only works for AVX and AVX2 + AVX512 instructions that is supported on AMD CPUs
from Zen4 and higher. CachyOS automatically selects which repositories are supported by checking your CPU, so you should not
change it.
:::

## Advanced Scheduler Support
Firstly let's understand what scheduler is. In the Linux kernel, the scheduler is a crucial component
that manages how tasks (or processes) are executed on the system. It decides which task should run next,
ensuring efficient use of system resources to allow multiple tasks to run simultaneously.

By default CachyOS provides BORE (Burst-Oriented Response Enhancer) scheduler in the default kernel,
alongside EEVDF + sched-ext (framework to load userspace schedulers). We also provide individual versions of the EEVDF and sched-ext schedulers
separately, along with other schedulers such as ECHO. You can choose any scheduler that you prefer via the kernel manager that we bundle after installation.

## Customizable Installation Process
Start your CachyOS journey by booting from the [bootable USB](/installation/installation_prepare/#creating-a-bootable-cachyos-usb-drive) that you created,
You’ll be welcomed by our Hello program, a helpful introduction to CachyOS. Our customized Calamares installer provides a wide range of possibilities.
We offer a variety of [desktop environments](/installation/desktop_environments/), [boot loaders](/installation/bootmanagers/)
and [kernels](kernel/kernel/#variants) to choose from.
You can choose what you need and deselect whatever you don't. Your system, your choices.

:::caution[WARNING]
Selecting multiple desktop environments is not allowed due to possible breakage. For example, KDE and GNOME. We recommend choosing a single desktop environment to avoid an installation error.
:::



## User Friendly OS
By default, we provide our own applications, such as CachyOS Hello or CachyOS Package Installer
among others to simplify and enhance your Linux experience. For example, CachyOS Hello provides options to update your system, enable services and rank the mirrors. Package Installer will help you to install packages.
CachyOS also has a really good and friendly Discord community that helps each other. Join us at [Discord](https://discord.com/invite/cachyos-862292009423470592)
