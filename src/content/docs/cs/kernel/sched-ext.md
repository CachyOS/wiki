---
title: sched-ext Návod
description: Návod na použití LAVD, Rusty a Rustland s sched-ext
---

## Instalace jádra s podporou sched-ext

CachyOS poskytuje jádra s integrovanou podporou sched-ext frameworku. Podporovaná jádra zahrnují:

- linux-cachyos (výchozí jádro)
- linux-cachyos-sched-ext (poslední stabilní verze)
- linux-cachyos-sched-ext-debug (pro vývojáře k práci a vývoji sched-ext)
- linux-cachyos-rc (poslední testovací verze s nejnovějšími funkcemi)

Můžete jednoduše zkontrolovat, zda vaše jádro podporuje sched-ext pomocí následujícího příkazu:
```bash
❯ zcat /proc/config.gz | grep SCHED_CLASS_EXT
CONFIG_SCHED_CLASS_EXT=y
```

## Spuštění a použití plánovačů scx

Plánovače můžete najít v balíčku `scx-scheds` nebo `scx-scheds-git`. Instalujte balíček jednoduše pomocí následujícího příkazu:
```sh
sudo pacman -Sy scx-scheds
```

Balíček `scx-scheds-git` může mít problémy při použití s stabilním jádrem kvůli změnám v API nebo funkcích. Doporučuje se používat balíček `scx-scheds-git` společně s jádrem `linux-cachyos-rc`.

### Spuštění plánovače

Plánovač můžete jednoduše spustit v terminálu pomocí následujícího příkazu:
```sh
sudo scx_rusty
```

Tímto příkazem spustíte plánovač rusty a odpojíte výchozí plánovač.

Pro zastavení plánovače jednoduše stiskněte CTRL + C. Plánovač se zastaví a opět bude použit výchozí jádrový plánovač.

### Služba systemd

Balíčky scx také poskytují službu systemd. Tato služba je konfigurovatelná v souboru `/etc/default/scx`. Zde můžete změnit plánovač, který chcete použít pro službu systemd, a předávat mu také možnosti. Výchozím nastavením je plánovač rusty. Pokud chcete změnit použitý plánovač, změňte `SCX_SCHEDULER=scx_rusty` na `SCX_SCHEDULER=scx_lavd`.

Nyní můžete startovat/zapnout/vypnout plánovač jako jakoukoli jinou službu systemd.

#### Použití plánovače scx jako výchozího a zapnutí při spuštění systému

```sh
sudo systemctl enable --now scx
```

#### Spuštění plánovače jednorázově pomocí služby systemd

```sh
sudo systemctl start scx
```

#### Zastavení plánovače scx pomocí služby systemd

```sh
sudo systemctl stop scx
```

## Doporučení pro plánovače

Vzhledem k mnoha existujícím plánovačům chceme poskytnout malé doporučení:

- **scx_rusty** - dobrý globální plánovač, který je velmi interaktivní a odolný vůči zátěži. Může být použit pro jakoukoli práci.
- **scx_lavd** - Plánovač vyvinutý pro hraní her, hlavně pro handheldy. Tento plánovač momentálně neumožňuje použití topologie (např. když má CPU 2 CCX, jako je 7950X).
- **scx_rustland** - Plánovač s plánováním uživatelského prostoru. Může dobře zvládat těžké zátěže, ale má nadbytečnost v důsledku plánování uživatelského prostoru.


## GitHub

- scx-scheds (Plánovače): https://github.com/sched-ext/scx
- sched-ext (Jádrový rámec): https://github.com/sched-ext/sched-ext
