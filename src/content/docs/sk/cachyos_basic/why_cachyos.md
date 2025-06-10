---
title: Prečo CachyOS?
description: Prečo môže byť CachyOS pre vás lepší
---

CachyOS ponúka vyladený zážitok s Archom, doplnený o používateľsky prívetivý inštalátor, predkonfigurované desktopové prostredia a optimalizácie výkonu bez kompromisov v používateľskom zážitku a bezpečnosti systému. Nižšie sú uvedené niektoré z hlavných funkcií, ktoré CachyOS poskytuje na zabezpečenie úžasného zážitku s desktopom.

## Optimalizované balíčky a repozitáre

CachyOS ponúka optimalizované balíčky pre rôzne konfigurácie hardvéru, vrátane systémov x86-64-v3, x86-64-v4 a Zen4+, s cieľom zlepšiť celkový výkon systému. Okrem toho CachyOS obsahuje vysoko žiadané balíčky z [AUR](https://aur.archlinux.org/) od používateľov pre zlepšenie QoL (kvality života).

Pre lepšiu predstavu o rôznych balíčkoch, ktoré CachyOS optimalizoval, pozrite si [Optimalizované repozitáre](/features/optimized_repos).

## Vlastné jadro vyladené pre výkon a stabilitu

Okrem sady základných záplat jadra CachyOS, ktoré ladia rôzne parametre jadra na zlepšenie odozvy desktopu, CachyOS tiež vyberá sľubné sady záplat, ktoré nie sú zahrnuté v hlavnej vetve alebo v stabilnej revízii jadra. Tieto záplaty prechádzajú interným testovaním pred odoslaním používateľom, aby sa zabezpečilo, že stabilita nebude ovplyvnená. Úplný zoznam záplat, ktoré CachyOS poskytuje, nájdete v časti [Jadro](/features/kernel).

## Podpora vlastného plánovača CPU

Plánovanie CPU je dôležitou súčasťou jadra na zabezpečenie spravodlivého prideľovania času CPU všetkým úlohám. Jadro Linuxu implementuje rôzne triedy plánovania, aby sa zabezpečilo, že každá úloha bude naplánovaná primerane. Spravodlivá trieda plánovania, známejšia ako „predvolený plánovač“, je založená na algoritme [EEVDF (Earliest Eligible Virtual Deadline First)](https://lwn.net/Articles/925371/).

Predvolene je EEVDF naladený tak, aby spravodlivo rozdeľoval dostupný čas CPU medzi všetky úlohy a je zameraný najmä na pracovné zaťaženia orientované na priepustnosť. Jadro CachyOS [konfiguruje niektoré nastaviteľné parametre EEVDF](https://github.com/CachyOS/linux/blob/6.12/cachy/kernel/sched/fair.c#L76-L79) tak, aby uprednostňovali odozvu desktopu pred samotnou priepustnosťou.

Avšak EEVDF nebol od začiatku určený na použitie pre interaktivitu desktopu. S týmto na pamäti CachyOS dodáva jadrá so záplatami [BORE (Burst-Oriented Response Enhancer)](https://github.com/firelzrd/bore-scheduler) plánovača, ktorý zavádza ďalšiu vlastnosť na priradenie úlohám vyžadujúcim vysokú odozvu viac času CPU v porovnaní s úlohami, ktoré to nevyžadujú, na základe ich „výbušnosti“.

V 6.12 umožňuje jadro Linuxu hotplug BPF plánovačov a nahradenie spravodlivej triedy plánovania iným plánovačom. Na uľahčenie tohto CachyOS poskytuje prvotriednu podporu pre [plánovače sched-ext](https://github.com/sched-ext/scx).

Viac informácií o jadrách, ktoré CachyOS ponúka, a plánovačoch sched-ext nájdete v časti [Jadro](/features/kernel) a [sched-ext](/configuration/sched-ext/).

## Detekcia hardvéru

CachyOS obsahuje vlastný [nástroj na detekciu hardvéru](https://github.com/CachyOS/chwd), ktorý správne inštaluje potrebné balíčky a ovládače pre každý systém, aby odľahčil používateľov od záťaže poinštalačných nastavení.

## Prispôsobiteľný proces inštalácie

Inštalátor CachyOS zaručuje, že používatelia si môžu vybrať, aký systém chcú. Táto prispôsobiteľnosť zahŕňa, ale nie je obmedzená na:
- [Desktopové prostredia](/installation/desktop_environments/)
- [Správcov bootovania](/installation/boot_managers/)
- [Verzie jadra](/features/kernel#variants)
- [Súborové systémy](/installation/filesystem)
- Vlastné balíčky na inštaláciu počas procesu inštalácie

## Aplikácie CachyOS

CachyOS predvolene poskytuje vlastné aplikácie, ako napríklad CachyOS Hello alebo CachyOS Package Installer
Predvolene sú používateľom poskytované pomocné aplikácie, ako napríklad CachyOS Hello a CachyOS Package Installer, aby zjednodušili a vylepšili váš zážitok s Linuxom. Napríklad CachyOS Hello poskytuje možnosti aktualizovať váš systém, povoliť služby a zoradiť zrkadlá. Dodáva sa aj s vylepšeniami a opravami niektorých bežných problémov na jedno kliknutie. Package Installer vám pomôže s inštaláciou balíčkov.

Zoznam aplikácií, ktoré CachyOS vyvíja a udržiava:

- **CachyOS Kernel Manager**: Jednoducho inštalujte jadrá z repozitára alebo konfigurujte vlastné jadro a zahrňte vlastné záplaty a dokonca spravujte rámec sched-ext prostredníctvom [scx_loader](<https://github.com/sched-ext/scx/tree/main/rust/scx_loader>).
- **CachyOS Hello**: Aplikácia na ovládanie vylepšení, aplikovanie opráv, inštaláciu balíčkov a ďalšie informácie o CachyOS.
- **CachyOS Package Installer**: GUI pre jednoduchú inštaláciu bežne používaných aplikácií.
- **cachyos-rate-mirrors**: Automaticky zaraďuje zrkadlá Archu a CachyOS pre optimálne rýchlosti sťahovania.
- **systemd-boot-manager**: Automaticky generuje nové záznamy pre systemd-boot-manager a dá sa jednoducho konfigurovať v `/etc/sdboot-manage.conf`.

## Priateľská a aktívna komunita

Najdôležitejším bodom je neustále rastúca komunita CachyOS. Bez komunity by CachyOS nikdy nedosiahol to, kde je teraz. Komunita si navzájom pomáha a zdieľa tipy a triky pre lepší zážitok s Linuxom. Pridajte sa k nám na [CachyOS Discord](https://discord.com/invite/cachyos-862292009423470592) alebo na [CachyOS Forum](https://discuss.cachyos.org/).
