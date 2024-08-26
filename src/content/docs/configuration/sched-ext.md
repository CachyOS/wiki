---
title: sched-ext Tutorial
description: Tutorial how to use LAVD, Rusty, Rustland and bpfland
---

`sched-ext` is a Linux kernel feature which enables implementing kernel thread schedulers in BPF (Berkeley Package Filter)
and dynamically loading them. Essentially this allows end-users to change their schedulers in userspace without the need to
build another kernel for a different scheduler.

- Planned release for being an official kernel feature: 6.12

##  Installing a Kernel with sched-ext support

CachyOS provides kernels, which have OOB support for the sched-ext framework.
Following kernels are supported:
- linux-cachyos (default kernel)
- linux-cachyos-sched-ext (latest Stable release)
- linux-cachyos-sched-ext-debug (This is mainly for developers to develop and work on sched-ext)
- linux-cachyos-rc (latest testing release with the latest features)

You can simply check if your kernel supports sched-ext with the following command:
```bash
❯ zcat /proc/config.gz | grep SCHED_CLASS_EXT
CONFIG_SCHED_CLASS_EXT=y
```

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

### CachyOS Kernel Manager

The scx schedulers can be accessed and configured through the [GUI](/configuration/kernel-manager#sched-ext-gui). 

## Introduction to the main schedulers

Since there are many schedulers to choose from, we want to give a little introduction about the schedulers in hand:

Reminder: These schedulers are in constant development while being tested, so expect some of its features/flags which are subject to change.

Feel free to report any issue or feedback to their [GitHub](/configuration/sched-ext#github) referenced below.

### [scx_rusty](<https://github.com/sched-ext/scx/tree/main/scheds/rust/scx_rusty>)

**Developed by: David Vernet (Byte-Lab [GitHub](<https://github.com/Byte-Lab>))**

It's a great choice for almost every use case. Web browsing, Gaming, Code compilation and so on. 

Being one of the heaviest schedulers yet released on sched-ext, it comes with a lot of features that add to his flexibility and capability. Tunability is one of them so you can adjust Rusty to your desires and use case.

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

Use cases:

* Gaming
* Audio Production
* Latency sensitive workloads
* Desktop usage
* Great interactivity under intensive workloads
* Power saving

One of the main and awesome capabilities that LAVD includes is **Core Compaction.** which without going into technical details: When CPU usage < 50%, Currently active cores will run for longer and at a higher frequency. Meanwhile Idle Cores will stay in C-State (Sleep) for a much longer duration achieving less overall power usage.


### [scx_bpfland](<https://github.com/sched-ext/scx/tree/main/scheds/rust/scx_bpfland>)

**Developed by: Andrea Righi (arighi [GitHub](<https://github.com/arighi>))**

A vruntime-based sched_ext scheduler that prioritizes interactive workloads. Highly flexible and easy to adapt, a deadline-based behavior can be achieved when lowlatency mode is enabled.

Bpfland when making decisions on which cores to use, it takes in consideration their cache layout and which cores share the same L2/L3 cache leading to fewer cache misses = more performance.

Use cases:

* Gaming
* Latency sensitive workloads
* Desktop usage
* Multimedia/Audio production (Thanks to the low latency mode)
* Great interactivity under intensive workloads
* Power saving (Primary domain > powersave)

## Scheduler Profiles

:::note
These profiles are only accessible by using [CachyOS Kernel Manager](/configuration/kernel-manager#sched-ext-gui):
:::

### Bpfland

- ***Low Latency:*** As the name implies, this profile is meant to be used when latency is critical. Enabling this option can be beneficial in soft real-time scenarios, such as audio
processing, multimedia etc.

- ***Gaming:*** Bpfland is going to try it's best to achieve the highest performance on the game and if you're in a Intel CPU with a mix of P/E Cores then it will prioritize P Cores over E Cores, same goes for Ryzen X3D CPUs and their CCD with stacked L3 X3D cache. **Be aware**, this mode is meant to be used only when you're just running the game and nothing else on the background, otherwise you'll experience some frame time spikes and a less stable experience.

- ***Power Save:*** In order to achieve more savings in power consumption, Bpfland will adjust itself to prioritize less performant cores such as E Cores on Intel meaning the P cores are going to be avoided when possible.

### LAVD

- ***Power saving profile:*** The primary goal of this profile is to save power consumption while providing reasonable performance. It tries to use the minimum number of cores serving the compute demand. Notably, hybrid processor architectures (e.g., P/E cores in Intel Alder Lake or big/LITTLE cores in ARM) choose energy-efficient cores (E or LITTLE cores) to save energy. Similarly, when hyper-threading is enabled, the scheduler prefers using hyper-thread to minimize the number of physical cores and power consumption. The power saving profile will be useful when your laptop's battery is low or if u want to reduce power usage when performance is not a priority.

- ***Balanced profile*** **(Default)**: With this profile, LAVD tries to achieve good performance without consuming too much power. Like the power-saving profile, it minimizes the number of active cores serving the compute demand to save power consumption. However, it chooses performant cores (P or big cores) over energy-efficient cores and physical cores over hyper-twins for performance. In most usage scenarios, this profile will work best.

- ***Performance profile:***  LAVD aims to maximize performance without taking in consideration power consumption. With the performance profile, LAVD always utilizes all the cores while still preferring to schedule tasks on performant, physical cores over energy-efficient, hyper-twin cores. Also, when the [sched_util](<https://github.com/sched-ext/scx/tree/main/rust/scx_utils>) scaling governor is used, LAVD lies to the underlying CPU driver, stating that the workload requires maximum performance no matter the demand.

## FAQ

### Why X scheduler performs worse than the other?

They're lots of variables that take place when comparing each one of them, for example: How do they measure a task's weight? Does it prioritize interactive instead of non interactive ones? and so on.

### Why everyone keeps saying this X scheduler is the best for X case but it does not perform as well for me?

Similar to the answer from above. Which cpu is used and his design, being their core layout or similar might cause the scheduler to not work as intended.

That's why having choices is one of the highlights from the sched-ext framework, so don't be scared to try the main ones and see which one works best for your use case, being ex: fps stability, maximum performance, responsiveness under intensive workloads etc.

Each of these schedulers' behaviour can be tuned with flags. Refer to each scheduler's `--help` output for a brief explanation
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

## GitHub

- scx-scheds (Schedulers): https://github.com/sched-ext/scx
- https://github.com/sched-ext/scx-kernel-releases
