---
title: Nahlasovanie chýb
---

## Opíšte svoj problém

- Čo nefunguje?
- Opraví problém downgradovanie balíka X?
- Použite funkciu vyhľadávania na nájdenie podobných problémov.

## Poskytnite logy

CachyOS poskytuje skvelý nástroj na zhromažďovanie logov, nazvaný `cachyos-bugreport.sh`.
Tento nástroj zhromažďuje logy z:

- dmesg
- journalctl

Keď sa logy zhromaždia, nástroj sa opýta používateľa, či by mali byť nahraté na naše služby pre zdieľanie textu.

Spustite nasledujúci príkaz v termináli a vložte odkaz s logmi do témy:

```sh
sudo cachyos-bugreport.sh
```

## Odkazy na nahlasovanie chýb

- Github: [https://github.com/CachyOS/distribution](https://github.com/CachyOS/distribution)
- Fórum: [https://discuss.cachyos.org/c/feedback/bugreports/10](https://discuss.cachyos.org/c/feedback/bugreports/10)
