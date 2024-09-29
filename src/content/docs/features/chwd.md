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

### Auto Configuration

Our hardware detection program supports installing and configuring necessary drivers and packages so that your system
can work at optimal condition.

```sh
❯ sudo chwd -a
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
