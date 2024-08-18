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

You can simply check with following command, if your kernel supports sched-ext:
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

## Brief introduction to the main ones

Since there are many schedulers to choose from, we want to give a little introduction about the schedulers in hand:

Reminder: These schedulers are in constant development while being tested, so expect some of its features/flags which are subject to change.

Feel free to report any issue or feedback to their GitHub repo referenced below.

- **scx_rusty** - Balanced choice, can be used for a wide range of workloads (Gaming included)
- **scx_lavd** - Latency-criticality Aware Virtual Deadline, focused on Gaming and mainly in handhelds such as the Steam Deck. This Scheduler has currently no Topology Aware (For example when the CPU has 2 CCX, like a 7950X)
- **scx_rustland** - Scheduler that does its scheduling in userspace. Can handle heavy workloads good, due to working in userspace it might lead to some overhead.
- **scx_bpfland** - Scheduler based on rustland, but without the userspace part. This removed the overhead part from it. Can be utilized for anything including intensive workloads, gaming or in a day to day basis such as browsing, media consumption.
In games it provides a substantial fps stability, meaning frametimes are really stable and consistent at the cost of max fps.

## FAQ

### Why X scheduler performs worse than the other?

They're lots of variables that take place when comparing each one of them, for example: How do they measure a task's weight? Does it prioritize interactive instead of non interactive ones? and so on.

### Why everyone keeps saying this X scheduler is the best for X case but it does not perform as well for me?

Similar to the answer from above. Which cpu is used and his design, being their core layout or similar might cause the scheduler to not work as intended.

That's why having choices is one of the highlights from the sched-ext framework, so don't be scared to try the main ones and see which one works best for your use case, being ex: fps stability, maximum performance, responsiveness under intensive workloads etc.

### Which one do i choose?

It depends but for mixed workloads meaning it could vary from gaming, programming, video editing, browsing etc. Rusty/Bpfland/Rustland or even LAVD.

Gaming? then you'll have to choose what matters the most for you.

FPS Stability?: Bpfland and ASDF, LAVD depending on the game

Maximum performance?: Rusty, ASDF, LAVD

Responsiveness no matter the workload: Rusty and Bpfland, LAVD might be able to handle it pretty well too but again it depends

Battery life: LAVD or Rustland, LAVD enables Core compaction by default unless specified not to, what does this mean? it tries to use the least amount of cores for the task without harvesting too much of performance, Rustland has a low power mode which can be enabled by the flag `-l` or `--low-power`

Each of these schedulers' behaviour can be tuned with flags. Refer to each scheduler's `--help` output for a brief explanation
of what each flag does

```sh
❯ scx_lavd --help

Options:
      --no-core-compaction
          Disable core compaction, which uses minimum CPUs for power saving, and always use all the online
          CPUs

      --prefer-smt-core
          Use SMT logical cores before using other physcial cores in core compaction

      --no-freq-scaling
          Disable frequency scaling by scx_lavd
```

## GitHub

- scx-scheds (Schedulers): https://github.com/sched-ext/scx
- https://github.com/sched-ext/scx-kernel-releases
