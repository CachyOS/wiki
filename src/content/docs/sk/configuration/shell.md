---
title: Konfigurácia Shell
---

CachyOS momentálne používa fish shell ako predvolený.
Je však možné zmeniť predvolený shell.

## Zsh

Ponúkame predvolenú konfiguráciu zsh s bežne používanými pluginmi a nastaveniami.
Nájdete ju [tu](https://github.com/CachyOS/cachyos-zsh-config).
Na zmenu predvoleného shellu na zsh, spustite nasledujúci príkaz:

```bash
chsh -s /usr/bin/zsh
```

## Fish

Fish má tiež predvolenú konfiguráciu, ktorú nájdete [tu](https://github.com/CachyOS/cachyos-fish-config).
Na zmenu predvoleného shellu na fish, spustite nasledujúci príkaz:

```bash
chsh -s /usr/bin/fish
```

## Bash

Toto je bežne používaný predvolený shell. Bash neposkytuje funkcie ako automatické dokončovanie, jednoduchú históriu, ...
Na zmenu predvoleného shellu na bash, spustite nasledujúci príkaz:

```bash
chsh -s /usr/bin/bash
```