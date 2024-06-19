---
title: General System Tweaks
description: Things you can do to tweak after installing
---

# General System Tweaks

1\. CPU mitigations
--------------------------------

A public speculative execution attack exploiting return instructions (retbleed) was revealed in July 2022. The kernel has fixed this, but it results in a significant performance regression (14-39%).

The following CPU's are affected:

*   AMD: Zen 1, Zen 1+, Zen 2
*   Intel: 6th to 8th Generation, Skylake, Kaby Lake, Coffee Lake

Check which mitigation's your CPU is affected by using:

```sh
grep . /sys/devices/system/cpu/vulnerabilities/*
```

### Disabling mitigations

While disabling the mitigation's increases performance, it also introduces security risks.

:::caution
Do so at your own risk.
:::


Add the following to your kernel command line: `retbleed=off` or to disable all mitigation's: `mitigations=off`

Edit the appropriate file to make the changes persistent:

- **GRUB**: `/etc/default/grub`
- **systemd boot**: `/etc/sdboot-manage.conf`
- **rEFInd**: `/boot/refind_linux.conf`

:::caution
Disabling these mitigation's poses a security risk to your system.
:::

For more information:

*   https://www.phoronix.com/review/retbleed-benchmark
*   https://www.phoronix.com/review/xeon-skylake-retbleed

### Downfall

Downfall is characterized as a vulnerability due to a memory optimization feature that unintentionally reveals internal hardware registers to software. With Downfall, untrusted software can access data stored by other programs that typically should be off-limits: the AVX GATHER instruction can leak the contents of the internal vector register file during speculative execution. Downfall was discovered by security researcher Daniel Moghimi of Google. Moghimi has written demo code for Downfall to show 128-bit and 256-bit AES keys being stolen from other users on the local system as well as the ability to steal arbitrary data from the Linux kernel.

This affects the following CPU generations:
- Skylake
- Tiger Lake
- Ice Lake


#### Disabling Downfall

Add `gather_data_sampling=off` to your kernel cmdline options.
`mitigations=off` will also disable downfall.

2\. AMD P-State Driver
---------------------------

`amd-pstate` is the AMD CPU performance scaling driver that introduces a new CPU frequency control mechanism on modern AMD APU and CPU series in Linux kernel. The new mechanism is based on Collaborative Processor Performance Control (CPPC) which provides finer grain frequency management than the `acpi-cpufreq` driver. CPPC allows a flexible, low-latency interface for the Linux kernel to directly communicate the performance hints to hardware.

Below are 3 operation modes of the `amd-pstate` driver and kernel cmdline entries to use them on boot:

- **AMD P-State (Non-Autonomous Mode)**: `amd-pstate=passive`
- **AMD P-State Guided (Guided Autonomous Mode)**: `amd-pstate=guided`
- **AMD P-State EPP (Autonomous Mode)**: `amd-pstate=active`

:::note
The AMD P-State EPP Driver is used by default when no explicit configuration is made.
:::

You can also switch between operation modes at runtime to test the options:

- **Autonomous mode**: platform considers only the values set for Minimum performance, Maximum performance, and Energy Performance Preference.
   ```sh
   echo active | sudo tee /sys/devices/system/cpu/amd_pstate/status 
   ```

- **Guided-autonomous mode**: platform sets operating performance level according to the current workload and within limits set by the OS through minimum and maximum performance registers.
   ```sh
   echo guided | sudo tee /sys/devices/system/cpu/amd_pstate/status
   ```

- **Non-autonomous mode**: platform gets desired performance level from OS directly through Desired Performance Register.
   ```sh
   echo passive | sudo tee /sys/devices/system/cpu/amd_pstate/status
   ```

For more information:

*   [https://lore.kernel.org/lkml/20221110175847.3098728-1-Perry.Yuan@amd.com/](https://lore.kernel.org/lkml/20221110175847.3098728-1-Perry.Yuan@amd.com/)
*   [https://lore.kernel.org/lkml/20230119115017.10188-1-wyes.karny@amd.com/](https://lore.kernel.org/lkml/20230119115017.10188-1-wyes.karny@amd.com/)

3\. Using AMD P-State EPP
------------------------

To use the P-State EPP, there are two CPU frequency scaling governors available: powersave and performance. It is recommended to use the powersave governor and set a preference.

*   Set powersave governor: `sudo cpupower frequency-set -g powersave`
*   Set performance governor: `sudo cpupower frequency-set -g performance`

To set a preference, run the following command with the desired preference:

```sh
echo power | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/energy_performance_preference
```

Available preferences: `performance`, `power`, `balance_power`, `balance_performance`

Benchmarks for each preference can be found here:
[https://lore.kernel.org/lkml/20221219064042.661122-1-perry.yuan@amd.com/](https://lore.kernel.org/lkml/20221219064042.661122-1-perry.yuan@amd.com/)

4\. AMD P-State Preferred Core Handling
---------------------------------

AMD Pstate driver will provide an initial core ordering at boot time. It relies on the CPPC interface to communicate the core ranking to the operating system and scheduler to make sure that OS is choosing the cores with highest performance firstly for scheduling the process. When AMD Pstate driver receives a message with the highest performance change, it will update the core ranking.

This can result into a better performance and process handling.
More information here:
https://lore.kernel.org/linux-pm/20230808081001.2215240-1-li.meng@amd.com/

:::note
AMD P-State Preferred Core Handling is enabled by default for all supported CPUs.
:::

You can use the following command to check if your CPU supports it:
```sh
cat /sys/devices/system/cpu/amd_pstate/prefcore
```
or
```sh
cat /sys/devices/system/cpu/amd_pstate/status
```
to see if it is enabled 

5\. Disabling Split Lock Mitigate
---------------------------------

In some cases, split lock mitigate can slow down performance in some applications and games. A patch is available to disable it via sysctl.

*   Disable split lock mitigate: `sudo sysctl kernel.split_lock_mitigate=0`
*   Enable split lock mitigate: `sudo sysctl kernel.split_lock_mitigate=1`

To make the change persistent, add the following line to `/etc/sysctl.d/99-splitlock.conf`:

```conf
kernel.split_lock_mitigate=0
```

For more information on split lock, see:

- https://www.phoronix.com/news/Linux-Splitlock-Hurts-Gaming
- https://github.com/doitsujin/dxvk/issues/2938
