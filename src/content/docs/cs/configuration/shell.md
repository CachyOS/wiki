---
title: Konfigurace Shell
---

CachyOS v současné době používá jako výchozí shell fish.
Je možné změnit výchozí shell.


## Zsh

Již dodáváme konfiguraci zsh s běžně používanými pluginy a nastavením.
Najdete ji [zde](https://github.com/CachyOS/cachyos-zsh-config).
Pro změnu výchozího shellu na zsh spusťte následující příkaz:

```bash
chsh -s /usr/bin/zsh
```

## Fish

Fish má také Out-Of-Box konfiguraci, kterou najdete [zde](https://github.com/CachyOS/cachyos-zsh-config).
Pro změnu výchozího shellu na fish spusťte následující příkaz:

```bash
chsh -s /usr/bin/fish
```

## Bash

Toto je běžně používaný výchozí shell. Bash neobsahuje funkce jako automatické doplňování, snadná historie, ...
Pro změnu výchozího shellu na bash spusťte následující příkaz:

```bash
chsh -s /usr/bin/bash
```
