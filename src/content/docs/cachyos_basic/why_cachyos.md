---
title: Why CachyOS?
description: Why CachyOS may be better for you
---

CachyOS is an user-friendly and highly optimized Linux distribution based on Arch Linux.

# What makes CachyOS not just Arch based distro.

CachyOS is not an ordinary Arch-based distribution; it has some major changes from others.

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
separately, along with other schedulers such as ECHO and RT. You can choose any scheduler that you prefer via the kernel manager that is bundled.

## Customizable Installation Process
When you boot into the live ISO from the [bootable USB](/installation/installation_prepare/#creating-a-bootable-cachyos-usb-drive) that you created,
you will automatically meet our installer. Our installer provides much more choice than other distributions.
We offer a variety of [desktop environments](/installation/desktop_environments/), [boot loaders](/installation/bootmanagers/)
and [kernels](kernel/kernel/#variants) to choose from.
You can and should choose what you want to have installed and what not to have installed. Your system is your home.

## User Friendly OS
By default, we provide our own applications, such as CachyOS Hello or CachyOS Package Installer
among others to simplify and enhance your Linux experience. For example, CachyOS Hello provides options to update your system, enable services and rank the mirrors. Package Installer will help you to install packages.
CachyOS also has a really good and friendly community, which helps each other very well.
