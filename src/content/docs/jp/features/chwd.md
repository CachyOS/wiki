---
title: CachyOS Hardware-Erkennung
description: Hardware-Erkennung und -Konfiguration für CachyOS
---

[CachyOS Hardware-Erkennung](https://github.com/CachyOS/chwd/), besser bekannt als **`chwd`**, ermöglicht es uns, eine Vielzahl von Hardware zu betreiben, indem die notwendigen
Pakete und Treiber für das laufende System installiert werden. Dies beinhaltet Systeme mit Grafikkarten von NVIDIA, T2 Macbooks und Handheld-Geräte wie Steam Deck und ROG Ally.

## Verwendung

**`chwd`** wird typischerweise während der Installation ausgeführt, um die notwendigen Pakete für das System bereitzustellen. Es ist jedoch auch möglich,
es nach der Installation zu verwenden.

### Auto-Konfiguration

**`chwd`** unterstützt die Installation und Konfiguration der notwendigen Treiber und Pakete, damit das System unter optimalen Bedingungen arbeiten kann.

```sh
❯ sudo chwd -a
```

### Installation eines Profils

Eine Alternative zur obigen Methode ist die Installation jedes spezifischen Profils.

```sh title='Alle verfügbaren Profile auflisten'
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

```sh title='Installation eines chwd-Profils'
❯ sudo chwd -i amd
> Installing amd ...

> Successfully installed amd
```

### Sonstiges

Weitere Informationen zur Befehlssyntax und anderen Verwendungsmöglichkeiten finden Sie in der Hilfeausgabe von **`chwd`**.

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
