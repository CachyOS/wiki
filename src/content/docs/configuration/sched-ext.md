---
title: sched-ext Tutorial
description: Tutorial how to use LAVD, Rusty, Rustland and bpfland
---

`sched-ext` is a Linux kernel feature which enables implementing kernel thread schedulers in BPF (Berkeley Package Filter)
and dynamically loading them. Essentially this allows end-users to change their schedulers in userspace without the need to
build another kernel for a different scheduler.

- Planned release for being an official kernel feature: 6.12

## Installing a Kernel with sched-ext support

CachyOS provides kernels, which have OOB support for the sched-ext framework.
Following kernels are supported:

- linux-cachyos (default kernel)
- linux-cachyos-sched-ext (latest Stable release)
- linux-cachyos-sched-ext-dbg (This is mainly for developers to develop and work on sched-ext)
- linux-cachyos-rc (latest testing release with the latest features)

## Starting and using the scx schedulers

You can find the schedulers in the `scx-scheds` or `scx-scheds-git` package.
Simply run following command to install the package:

```sh
sudo pacman -Sy scx-scheds
```

### Starting the Scheduler

The scheduler can be simply started in the terminal with following command:

```sh
sudo scx_rusty
```

This will launch the rusty scheduler and detach the default scheduler.

To stop the scheduler, you simply run CTRL + C and the scheduler will be stopped and the default kernel scheduler will be used again.

### Systemd Service

The scx packages provides also a systemd service. This service can be configured in `/etc/default/scx`.
You can change the scheduler used by sched-ext and set custom flags for each scheduler in this configuration file.
By default, the services uses the rusty scheduler. If you want to change the scheduler used by the service simply change
the `SCX_SCHEDULER=scx_rusty` to `SCX_SCHEDULER=scx_lavd` or others.

Now you can start/enable/stop the scheduler as any other systemd service.

#### Use the scx scheduler as default and enable directly at the boot

```sh
sudo systemctl enable --now scx
```

#### Start the scheduler only once via the systemd service

```sh
sudo systemctl start scx
```

#### Stop the scx scheduler via systemd service

```sh
sudo systemctl stop scx
```

For more information: [Sched-ext systemd service](<https://github.com/sched-ext/scx/blob/main/services/README.md>)

### CachyOS Kernel Manager

The scx schedulers can be accessed and configured through the [GUI](/configuration/kernel-manager#sched-ext-gui).

## Introduction to the main schedulers

Since there are many schedulers to choose from, we want to give a little introduction about the schedulers in hand.

:::note
These schedulers are in constant development while being tested, so expect some of its features/flags which are subject to change.
:::

Feel free to report any issue or feedback to their [GitHub](/configuration/sched-ext#github) referenced below.

### [scx_rusty](<https://github.com/sched-ext/scx/tree/main/scheds/rust/scx_rusty>)

**Developed by: David Vernet (Byte-Lab [GitHub](<https://github.com/Byte-Lab>))**

Being one of the heaviest schedulers yet released on sched-ext, it comes with a lot of features that add to his flexibility and capability. Tunability is one of them so you can adjust Rusty to your desires and use case.

**Use cases:**

- Gaming
- Latency sensitive workloads
- Desktop usage
- Multimedia/Audio production
- Latency sensitive workloads
- Great interactivity under intensive workloads
- Power saving

For more information about what can be done with Rusty and his tunable flags. Check out the help page:

```text
scx_rusty --help
```

### [scx_lavd](<https://github.com/sched-ext/scx/tree/main/scheds/rust/scx_lavd>)

**Developed by: Changwoo Min (multics69 [GitHub](<https://github.com/multics69>)).**

**Brief introduction to LAVD from Changwoo:**

***LAVD is a new scheduling algorithm which is still under development. It is
motivated by gaming workloads, which are latency-critical and
communication-heavy. It aims to minimize latency spikes while maintaining
overall good throughput and fair use of CPU time among tasks.***

**Use cases:**

- Gaming
- Audio Production
- Latency sensitive workloads
- Desktop usage
- Great interactivity under intensive workloads
- Power saving

One of the main and awesome capabilities that LAVD includes is **Core Compaction.** which without going into technical details: When CPU usage < 50%, Currently active cores will run for longer and at a higher frequency. Meanwhile Idle Cores will stay in C-State (Sleep) for a much longer duration achieving less overall power usage.

### [scx_bpfland](<https://github.com/sched-ext/scx/tree/main/scheds/rust/scx_bpfland>)

**Developed by: Andrea Righi (arighi [GitHub](<https://github.com/arighi>))**

A vruntime-based sched_ext scheduler that prioritizes interactive workloads. Highly flexible and easy to adapt, a deadline-based behavior can be achieved when lowlatency mode is enabled.

Bpfland when making decisions on which cores to use, it takes in consideration their cache layout and which cores share the same L2/L3 cache leading to fewer cache misses = more performance.

**Use cases:**

- Gaming
- Latency sensitive workloads
- Desktop usage
- Multimedia/Audio production (Thanks to the low latency mode)
- Great interactivity under intensive workloads
- Power saving

## General recommendations

### LAVD Autopilot & Autopower

***Quotes from Changwoo Min:***
In the autopilot mode, the scheduler dynamically changes its power mode (Powersave, Balanced or Performance) according to system's load (CPU
utilization).

Autopower: Automatically decide the scheduler's power mode based on the system's energy profile aka EPP (Energy Performance Preference).

```sh
# Autopilot and Autopower can be activated by the following flags:
--autopilot
--autopower
# e.g: 
scx_lavd --autopilot
```

## FAQ

### Why X scheduler performs worse than the other?

They're lots of variables that take place when comparing each one of them, for example: How do they measure a task's weight? Does it prioritize interactive instead of non interactive ones? and so on.

### Why everyone keeps saying this X scheduler is the best for X case but it does not perform as well for me?

Similar to the answer from above. Which cpu is used and his design, being their core layout or similar might cause the scheduler to not work as intended.

That's why having choices is one of the highlights from the sched-ext framework, so don't be scared to try the main ones and see which one works best for your use case, being ex: fps stability, maximum performance, responsiveness under intensive workloads etc.

Each of these schedulers' behavior can be tuned with flags. Refer to each scheduler's `--help` output for a brief explanation
of what each flag does

```sh
# Example:
❯ scx_lavd --help

Options:
      --no-core-compaction
          Disable core compaction, which uses minimum CPUs for power saving, and always use all the online
          CPUs

      --prefer-smt-core
          Use SMT logical cores before using other physical cores in core compaction

      --no-freq-scaling
          Disable frequency scaling by scx_lavd
```

### The use cases of these schedulers are quite similar... why is that?

Mainly because they are (for now) multipurpose schedulers, meaning they adapt to many workloads even if they don't excel at all of them.

In order to find out which one fits you best, there is no other shortcut than to test it yourself.

## Learn More

If you want to learn more about the sched-ext framework. Take a look at the links below.

- [Sched-ext Schedulers Source Code](<https://github.com/sched-ext/scx/tree/main/scheds/rust>)
- [Changwoo Min: Introduction to sched-ext & CPU Scheduling Part 1](<https://blogs.igalia.com/changwoo/sched-ext-a-bpf-extensible-scheduler-class-part-1/>)
  - [Part 2](<https://blogs.igalia.com/changwoo/sched-ext-scheduler-architecture-and-interfaces-part-2/>)
- [Andrea Righi: Re-implementing my Linux Rust scheduler in eBPF](<https://arighi.blogspot.com/2024/08/re-implementing-my-linux-rust-scheduler.html>)
