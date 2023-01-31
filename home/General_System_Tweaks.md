---
title: General System Tweaks
description: Things you can do to tweak after installing
published: 1
date: 2023-01-31T21:28:10.737Z
tags: information, performance
editor: markdown
dateCreated: 2022-07-26T18:23:44.222Z
---

# General System Tweaks


## 1. Reduce Swappiness and vfs_cache_pressure
The kernel's preference (or avoidance) of swap space is represented by the swappiness sysctl parameter. Swappiness can range between 0 and 100, with 60 being the default value.
A low value prevents the kernel from swapping; a high value causes the kernel to attempt to use swap space. It is well known that using a low value for sufficient memory improves responsiveness on many systems.

vfs_cache_pressure value governs the kernel's tendency to reclaim memory used for directory and inode object caching (VFS cache).
Lowering it from the default value of 100 encourages the kernel to reclaim VFS cache (do not set it to 0, this may produce out-of-memory conditions)
Increasing vfs_cache_pressure significantly beyond 100 may have negative performance impact. Reclaim code needs to take various locks to find freeable directory and inode objects. With vfs_cache_pressure=1000, it will look for ten times more freeable objects than there are.

You can change these values in `/etc/sysctl.d/99-cachyos-settings.conf`

## 2. Editing mkinitcpio.conf for faster boot times

Replace udev with systemd for faster boots and set compression algorithm to zstd and compression level to 2 because compression ratio increase isn't worth the increased latency.

(bellow isnt the whole file, just the parts that needs changes)
```ini
HOOKS="base systemd autodetect...

COMPRESSION="zstd"
COMPRESSION_OPTIONS=(-2)
```

3\. Zram or Zswap tweaking
--------------------------

Zswap is a kernel feature that caches swap pages in RAM, compressing them before storing. It improves performance by reducing disk I/O when the system needs to swap.
Zram is a RAM-based swap device that does not require a backing swap device.

For zswap, use the following recommended configurations:

```C
# echo zstd > /sys/module/zswap/parameters/compressor
# echo 10 > /sys/module/zswap/parameters/max_pool_percent
```

To make the changes persist, add `zswap.compressor=zstd zswap.max_pool_percent=10` to your bootloader's kernel command line options

For SSDs, set the `page-cluster` value to 1 in `/etc/sysctl.d/99-cachyos-settings.conf`. For HDDs, set it to 2.

## 4. CPU Mitigations

In July 2022, the speculative execution attack exploiting return instructions (called retbleed) was made public. 
This mitigation has been fixed with the kernel, but it introduces a really big performance overhead (from 14-39%), which is significantly high.

Following CPU's are affected by this mitigation:
#### AMD
- Zen 1
- Zen 1+
- Zen 2
#### Intel
- 6th Generation throug 8th Generation
- Skylake
- Caby Lake
- Coffee Lake

You can watch which mitigations your processor is affected from with the following command:

`grep . /sys/devices/system/cpu/vulnerabilities/*`

### Disable the mitigation's
It is not recommended to disable this, as it has a security risk but it will help with your performance. This is just on your own Risk!!

You need to set the following command to your kernel commandline:

`retbleed=off`

If you want to disable all mitigations you can use:

`mitigations=off`

Add this command to your `/etc/default/grub` if youre using grub.
If you are using systemd boot, add this command to `/etc/sdboot-manage.conf`

Once again, these will do a security risk in your system.

Here are some articles about retbleed and the performance impact:

https://www.phoronix.com/review/retbleed-benchmark
https://www.phoronix.com/review/xeon-skylake-retbleed

## 5. AMD PSTATE (EPP) Driver

For improved scaling of frequencies and better performance per watt, you can enable the AMD PSTATE EPP driver. The default AMD PSTATE driver does not offer significant benefits compared to the acpi-cpufreq driver.

For more information, see: https://lore.kernel.org/lkml/20221110175847.3098728-1-Perry.Yuan@amd.com/

There is also a amd-pstate=guided mode. For more information, see: https://lore.kernel.org/lkml/20230119115017.10188-1-wyes.karny@amd.com/

Simply add following to your kernel cmdline:

- AMD PSTATE: `amd_pstate=passive`
- AMD PSTATE-GUIDED: `amd_pstate=guided`
- AMD PSTATE EPP: `amd_pstate=active`

You can also switch between these modes at runtime, if you want to test these options with:

`echo active | sudo tee /sys/devices/system/cpu/amd_pstate/status`

- In autonomous mode, platform ignores the desired performance level request
  and takes into account only the values set to the Minimum requested
  performance, Maximum requested performance and Energy Performance Preference
  registers.
  
`echo guided | sudo tee /sys/devices/system/cpu/amd_pstate/status`
- In guided-autonomous mode, platform sets operating performance level
  autonomously according to the current workload and within the limits set by
  OS through min and max performance registers.

`echo passive | sudo tee /sys/devices/system/cpu/amd_pstate/status`

- In non-autonomous mode, platform gets desired performance level
  from OS directly through Desired Performance Register.


## 6. Using amd-pstate-epp

When using amd-pstate-epp there are two governors available, powersave and performance.
Actually it is suggested to use the powersave governor and then set a preference.
You can do this with following command:
Powersave:
`sudo cpupower frequency-set -g powersave`
Performance:
`sudo cpupower frequency-set -g performance`

To set a preference run following command, the example sets the power `preference`:
`echo power | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/energy_performance_preference`

There are follwing preferences available:
`performance` `power` `balance_power` `balance_performance`

Benchmarks each preference can be found here:
https://lore.kernel.org/lkml/20221219064042.661122-1-perry.yuan@amd.com/
## 7. Disabling split_lock_mitigate

Some applications and games may experience slowed performance due to split_lock_mitigate. We have backported a patch to disable it via sysctl.

To change it at runtime simply:
`sudo sysctl kernel.split_lock_mitigate=0`

and for enabling:
`sudo sysctl kernel.split_lock_mitigate=1`

To set it permanently make a entry at `/etc/sysctl.d/99-splitlock.conf` with the content:
`kernel.split_lock_mitigate=0`

For more information on split_lock, see:
https://www.phoronix.com/news/Linux-Splitlock-Hurts-Gaming
https://github.com/doitsujin/dxvk/issues/2938