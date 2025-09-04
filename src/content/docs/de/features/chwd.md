---
title: CachyOS-Hardwareerkennung
description: Hardwareerkennung und -konfiguration für CachyOS
---

[CachyOS Hardware Detection](https://github.com/CachyOS/chwd/) (besser bekannt als `chwd`) ermöglicht es uns, eine Vielzahl von Hardware zu unterstützen, indem die notwendigen
Pakete und Treiber für das laufende System installiert werden. Dies schließt Systeme mit NVIDIA-Grafikkarten, T2 Macbooks und Handheld-Geräte wie das Steam Deck und ROG Ally ein.

## Verwendung

`chwd` wird typischerweise während der Installation ausgeführt, um die notwendigen Pakete für das System bereitzustellen. Es ist jedoch auch möglich,
es nach der Installation zu verwenden.

### Automatische Konfiguration

`chwd` unterstützt die Installation und Konfiguration der notwendigen Treiber und Pakete, damit das System unter optimalen Bedingungen arbeiten kann.

```sh
sudo chwd -a
```

### Ein Profil installieren

Eine Alternative zur oben genannten Methode ist die Installation jedes spezifischen Profils.

```sh title='Alle verfügbaren Profile auflisten'
chwd --list-all
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

```sh title='Ein chwd-Profil installieren'
sudo chwd -i amd
> Installing amd ...

> Successfully installed amd
```

### Sonstiges

Konsultieren Sie die Hilfeausgabe von `chwd` für die Befehlssyntax und weitere Verwendungshinweise.

```sh
chwd --help
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
