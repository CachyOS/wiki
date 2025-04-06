---
title: Обнаружение оборудования CachyOS
description: Обнаружение и настройка оборудования для CachyOS
---

[Обнаружение оборудования CachyOS](https://github.com/CachyOS/chwd/), также известное как **`chwd`**, позволяет нам использовать различное оборудование, устанавливая необходимые
пакеты и драйверы для работающей системы. Сюда входят системы, использующие видеокарты NVIDIA, T2 Macbook и портативные устройства, такие как Steam Deck и ROG Ally.

## Использование

Обычно **`chwd`** запускается во время установки, чтобы предоставить необходимые пакеты для системы. Однако его также можно
использовать после установки.

### Автоматическая настройка

**`chwd`** поддерживает установку и настройку необходимых драйверов и пакетов, чтобы система могла работать в оптимальных условиях.

```sh
❯ sudo chwd -a
```

### Установка профиля

Альтернативой вышеуказанному методу является установка каждого конкретного профиля.

```sh title='Список всех доступных профилей'
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

```sh title='Установка профиля chwd'
❯ sudo chwd -i amd
> Installing amd ...

> Successfully installed amd
```

### Прочее

Обратитесь к справке **`chwd`** для получения информации о синтаксисе команд и других способах использования.

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
