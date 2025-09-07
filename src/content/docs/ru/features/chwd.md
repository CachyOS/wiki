---
title: Распознавание оборудования CachyOS
description: Распознавание и настройка оборудования для CachyOS
---

[Распознавание оборудования CachyOS](https://github.com/CachyOS/chwd/) (более известное как `chwd`) позволяет нам обеспечивать поддержку различного оборудования путём установки необходимых
пакетов и драйверов для работающей системы. Это включает системы с видеокартами NVIDIA, Macbook с чипом T2 и портативные устройства, такие как Steam Deck и ROG Ally.

## Использование

`chwd` обычно запускается во время установки для предоставления необходимых пакетов системе. Однако его также можно
использовать и после установки.

### Автоматическая настройка

`chwd` поддерживает установку и настройку необходимых драйверов и пакетов, чтобы система могла работать в оптимальных условиях.

```sh
sudo chwd -a
```

### Установка профиля

Альтернативой вышеуказанному методу является установка каждого конкретного профиля.

```sh title='Список всех доступных профилей'
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

```sh title='Установка профиля chwd'
sudo chwd -i amd
> Installing amd ...

> Successfully installed amd
```

### Прочее

Обратитесь к справочной информации `chwd` для ознакомления с синтаксисом команд и другими вариантами использования.

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
