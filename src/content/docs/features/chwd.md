---
title: CachyOS Hardware Detection
description: Hardware Detection and Configuration for CachyOS
---

[CachyOS Hardware Detection](https://github.com/CachyOS/chwd/) or better known as **`chwd`** is our hardware detection tool that
enables us to power a variety of hardware.
This includes systems running NVIDIA's graphics cards, T2 Macbooks and handheld devices such as Steam Deck and ROG Ally.

## Usage

**`chwd`** is typically ran during installation time to provide the necessary packages for your system. However, it is also possible
to use it post-install.

### Auto Configuration via Class IDs

We can get class IDs by running the following command

```sh
❯ chwd --detail --list
> PCI Device:  (0300:1002:1681)
#               ^^^^ This is the ClassID !
  VGA compatible controller Advanced Micro Devices, Inc. [AMD/ATI] Rembrandt [Radeon 680M]

```

After finding the necessary class ID, we can pass it to chwd to install **all** the necessary profiles for your system.

```sh
❯ sudo chwd -a 0300
> Using profile 'amd' for device: 0000:05:00.0 (0300:1002:1681) VGA compatible controller Advanced Micro Devices, Inc. [AMD/ATI] Rembrandt [Radeon 680M]
> Using profile 'nvidia-open-dkms.prime' for device: 0000:01:00.0 (0300:10de:25e2) VGA compatible controller NVIDIA Corporation GA107BM [GeForce RTX 3050 Mobile]
```

### Installing a profile

An alternative to the above method is to install each specific profile. You can find what profiles exist from `chwd` itself

```sh title='List all available profiles'
❯ chwd --list-all
╭─────────────────────────┬─────────╮
│ Name                    ┆ NonFree │
╞═════════════════════════╪═════════╡
│ nvidia-open-dkms.prime  ┆ true    │
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌┤
│ nvidia-dkms             ┆ true    │
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌┤
│ macbook-t2              ┆ false   │
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌┤
│ phoenix                 ┆ false   │
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌┤
│ steam-deck              ┆ false   │
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌┤
│ amd                     ┆ false   │
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌┤
│ intel                   ┆ false   │
╰─────────────────────────┴─────────╯
```

After that, we can install a profile with the `-i` flag

```sh title='Installing a chwd profile'
❯ sudo chwd -i amd
> Installing amd ...

> Successfully installed amd
```

### Others

Consult the help output of **`chwd`** for command syntax and other usage.

```sh
❯ chwd --help
Usage: chwd [OPTIONS]

Options:
  -i, --install <profile>          Install profile
  -r, --remove <profile>           Remove profile
  -d, --detail                     Show detailed info for listings
  -f, --force                      Force reinstall
      --list-installed             List installed kernels
      --list                       List available profiles for all devices
      --list-all                   List all profiles
  -a, --autoconfigure [<classid>]  Autoconfigure
      --ai_sdk                     Toggle AI SDK profiles
      --pmcachedir <PMCACHEDIR>    [default: /var/cache/pacman/pkg]
      --pmconfig <PMCONFIG>        [default: /etc/pacman.conf]
      --pmroot <PMROOT>            [default: /]
  -h, --help                       Print help
  -V, --version                    Print version
```
