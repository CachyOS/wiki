---
title: sched-ext Návod
description: Návod ako používať LAVD, Rusty and Rustland
---

## Inštalácia jadra s podporou sched-ext

CachyOS poskytuje jadrá, ktoré majú podporu pre sched-ext framework priamo z balíka.
Podporované jadrá sú:

- linux-cachyos (predvolené jadro)
- linux-cachyos-sched-ext (najnovšie stabilné vydanie)
- linux-cachyos-sched-ext-debug (určené pre vývojárov na vývoj a prácu so sched-ext)
- linux-cachyos-rc (najnovšie testovacie vydanie s najnovšími funkciami)

Jednoducho môžete skontrolovať podporu sched-ext v jadre pomocou nasledujúceho príkazu:

```bash
❯ zcat /proc/config.gz | grep SCHED_CLASS_EXT
CONFIG_SCHED_CLASS_EXT=y
```

## Spustenie a používanie scx plánovačov

Plánovače sa nachádzajú v balíku `scx-scheds` alebo `scx-scheds-git`.
Jednoducho spustite nasledujúci príkaz na inštaláciu balíka:

```sh
sudo pacman -Sy scx-scheds
```

Balík `scx-scheds-git` môže mať problémy pri použití so stabilným jadrom kvôli zmenám v API alebo funkciách. Takže balík `scx-scheds-git` by sa mal používať spolu s jadrom `linux-cachyos-rc`.

### Spustenie plánovača

Plánovač môžete jednoducho spustiť v termináli pomocou nasledujúceho príkazu:

```sh
sudo scx_rusty
```

Týmto sa spustí plánovač rusty a odpojí sa predvolený plánovač.

Na zastavenie plánovača jednoducho stlačte CTRL + C a plánovač sa zastaví a znovu sa použije predvolený jadrový plánovač.

### Systemd služba

Balíky scx poskytujú aj systemd službu. Táto služba môže byť konfigurovaná v súbore `/etc/default/scx`.
Tu môžete zmeniť plánovač, ktorý chcete používať pre systemd službu, a tiež mu pridať možnosti.
Predvolene je nastavený plánovač rusty. Ak chcete zmeniť používaný plánovač službou, jednoducho zmeňte `SCX_SCHEDULER=scx_rusty` na `SCX_SCHEDULER=scx_lavd`.

Teraz môžete spustiť/povoliť/zastaviť plánovač ako akúkoľvek inú systemd službu.

#### Použitie scx plánovača ako predvoleného a povolenie priamo pri bootovaní

```sh
sudo systemctl enable --now scx
```

#### Spustenie plánovača iba raz pomocou systemd služby

```sh
sudo systemctl start scx
```

#### Zastavenie scx plánovača pomocou systemd služby

```sh
sudo systemctl stop scx
```

## Odporúčania pre plánovače

Pretože existuje veľa príkladov plánovačov, chceme poskytnúť malé odporúčanie pre plánovače:

- **scx_rusty** - dobrý globálny plánovač, ktorý je veľmi interaktívny a odolný voči stresu. Môže byť použitý pre akékoľvek pracovné zaťaženie.
- **scx_lavd** - plánovač vyvinutý pre hry a hlavne pre prenosné zariadenia. Tento plánovač momentálne nemá Topology Aware (napríklad keď má CPU 2 CCX, ako 7950X).
- **scx_rustland** - plánovač s plánovaním v užívateľskom priestore. Dokáže dobre zvládať ťažké pracovné zaťaženie, ale má režijné náklady kvôli plánovaniu v užívateľskom priestore.

## GitHub

- scx-scheds (Plánovače): [https://github.com/sched-ext/scx](https://github.com/sched-ext/scx)
- sched-ext (Kernel Framework): [https://github.com/sched-ext/sched-ext](https://github.com/sched-ext/sched-ext)
