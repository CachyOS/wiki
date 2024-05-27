---
title: Why CachyOS?
description: Why CachyOS may be better for you
---

CachyOS is a user-friendly and highly optimized Linux distribution based on Arch Linux.

# What makes CachyOS not just Arch based distro.

CachyOS is not an ordinary Arch-based distribution; it has some major changes from others.

## Optimized Packages and Repositories
CachyOS maintains its own repositories with optimized packages, especially for your hardware.
There are x86-64-v3 and x86-64-v4 that exists to enhance your experience by:
reducing latency, improving performance, applying special fixes, etc.
Also, the system automatically selects repositories that are the fastest and optimized specially for you.

:::caution[WARNING]
x86-64-v3 repository is works only for CPUs that supports AVX and AVX2 instuctions
while x86-64-v4 only for AVX and AVX2 + AVX512 instuctions that is supported on amd CPUs
from Zen4 and higher. The system automatically selects it by checking your CPU. So you should not
change it.
:::

## Advanced Sheduler Support
Firstly let's understand what sheduler is. In the Linux kernel, the scheduler is a crucial component
that manages how tasks (or processes) are executed on the system. It decides which task should run next,
ensuring efficient use of system resources to allow multiple tasks to run simultaneously.

By default CachyOS provides BORE Scheduler (Burst-Oriented Response Enhancer) in our advanced linux kernel.
It provides better perfomance and reponsivness according to our test. But we also provide other shedulers:
EEVDF, sched-ext, ECHO, and RT. And you can choose any you prefer the most.

## Customizable Installation Process
When you have loaded to live iso (from usb). You automaticly meet our installer.
But what if you don't want some components to install or let's go deeper you don't
like this bootloader or kernel. You may want to change Desktop environment or
window manager. Our installer provides much more choice than other distributions.
You can and should to choose what you want to have and what not. And we provide to you
this abilities. Your system your home.

## User Friendly OS
By default, we provide our applications, like CachyOS Hello or CachyOS Package Installer
and others. In order to simplify and make better your expirience. For example while
CachyOS Hello will introduce a system for you. Package Installer will help you install
needed for your applications. And so on. Also, we have a forum and Discord server where you can
can receive help or suggest improvements, talk to people and more!
