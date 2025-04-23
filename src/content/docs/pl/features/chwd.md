---
title: Wykrywanie sprzętu CachyOS
description: Wykrywanie i konfiguracja sprzętu dla CachyOS
---

[CachyOS Hardware Detection](https://github.com/CachyOS/chwd/), lepiej znane jako **`chwd`**, umożliwia obsługę różnorodnego sprzętu poprzez instalację niezbędnych pakietów i sterowników dla działającego systemu. Obejmuje to systemy z kartami graficznymi NVIDIA, Macbooki T2 oraz urządzenia przenośne, takie jak Steam Deck i ROG Ally.

## Użycie

**`chwd`** jest zazwyczaj uruchamiane podczas instalacji systemu w celu dostarczenia niezbędnych pakietów. Można go jednak używać również po instalacji.

### Automatyczna konfiguracja

**`chwd`** wspiera instalację i konfigurację niezbędnych sterowników oraz pakietów, aby system mógł działać w optymalnych warunkach.

```sh
❯ sudo chwd -a
```

### Instalowanie profilu

Alternatywą dla powyższej metody jest instalacja poszczególnych profili.

```sh title='Wyświetl wszystkie dostępne profile'
❯ chwd --list-all
╭─────────────────────────┬─────────────╮
│ Nazwa                   ┆ Zastrzeżony │
╞═════════════════════════╪═════════════╡
│ nvidia-open-dkms.prime  ┆ true        │
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┤
│ nvidia-dkms             ┆ true        │
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┤
│ macbook-t2              ┆ false       │
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┤
│ phoenix                 ┆ false       │
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┤
│ steam-deck              ┆ false       │
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┤
│ amd                     ┆ false       │
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌╌╌╌╌┤
│ intel                   ┆ false       │
╰─────────────────────────┴─────────────╯
```

```sh title='Instalowanie profilu chwd'
❯ sudo chwd -i amd
> Installing amd ...

> Successfully installed amd
```

### Inne

Sprawdź pomoc **`chwd`**, aby poznać składnię poleceń i inne opcje użycia.

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
