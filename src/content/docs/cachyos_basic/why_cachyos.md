---
title: Why CachyOS?
description: Why CachyOS may be better for you
---

CachyOS is an user-friendly and highly optimized Linux distribution based on Arch Linux.

# What makes CachyOS not just Arch based distro.

CachyOS is not an ordinary Arch-based distribution; it has some major changes from others.

## Optimized Packages and Repositories
CachyOS maintains its own repositories with optimized packages, especially for your hardware.
There are x86-64-v3 and x86-64-v4 optimized repository, that exists to enhance your experience by:
reducing latency, improving performance, applying special fixes, etc.
Also, the system automatically selects repositories that are the fastest and optimized specially for your cpu.

:::caution[WARNING]
x86-64-v3 repository is works only for CPUs that supports AVX and AVX2 instructions
while x86-64-v4 only for AVX and AVX2 + AVX512 instructions that is supported on amd CPUs
from Zen4 and higher. The system automatically selects it by checking your CPU. So you should not
change it.
:::

## Advanced Scheduler Support
Firstly let's understand what scheduler is. In the Linux kernel, the scheduler is a crucial component
that manages how tasks (or processes) are executed on the system. It decides which task should run next,
ensuring efficient use of system resources to allow multiple tasks to run simultaneously.

By default CachyOS provides BORE Scheduler (Burst-Oriented Response Enhancer) in our default kernel.
It provides better perfomance and interactivity according to our test. But we also provide other schedulers, like:
EEVDF, sched-ext (Framework to load userspace scheduler's), ECHO, and RT. And you can choose any you prefer the most via the kernel manager.

## Customizable Installation Process
When you have loaded to live iso (from usb). You automatically meet our installer.
But what if you don't want some components to install or let's go deeper you don't
like this bootloader or kernel. You may want to change Desktop environment or
window manager. Our installer provides much more choice than other distributions.
You can and should to choose what you want to have and what not. And we provide to you
this abilities. Your system your home.

## User Friendly OS
By default, we provide our applications, like CachyOS Hello or CachyOS Package Installer
and others. In order to simplify and make better for your experience. For example, CachyOS Hello provides options to update your system, enable services and rank the mirrors. Package Installer will help you to install packages.
CachyOS also has a really good and friendly community, which helps each other very well.
