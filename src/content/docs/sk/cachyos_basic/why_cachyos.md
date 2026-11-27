---
title: Prečo CachyOS?
description: Prečo môže byť CachyOS pre vás lepší
tableOfContents:
  minHeadingLevel: 1
  maxHeadingLevel: 4
ai_translated: true
---

CachyOS je distribúcia založená na Arch Linuxe zameraná na výkon, navrhnutá tak, aby poskytovala stabilné, efektívne a používateľsky prívetivé výpočtové prostredie. Ponúka plnú silu a flexibilitu priebežne aktualizovaného (rolling-release) systému obohateného o pokročilé optimalizácie a vlastný súbor nástrojov (toolchain), ktorý zjednodušuje prácu so systémom novým aj skúseným používateľom.

## Výkon a optimalizácia

### Optimalizované balíky a repozitáre

CachyOS poskytuje široký výber **[optimalizovaných balíkov](https://packages.cachyos.org/)**, ktoré sú špeciálne skompilované pre rôzne moderné architektúry CPU. To zahŕňa podporu pre systémy `x86-64-v3`, `x86-64-v4` a `Zen4+`, čím sa zabezpečí, že váš softvér je zostavený tak, aby naplno využil možnosti vášho hardvéru a priniesol výrazné zvýšenie výkonu.

Podrobnejší pohľad na naše optimalizované repozitáre nájdete v našom detailnom sprievodcovi **[Optimalizované repozitáre](/sk/features/optimized_repos)**.

### Vlastné jadro vyladené pre výkon a stabilitu

Okrem základnej sady záplat jadra CachyOS, ktorá ladí rôzne parametre jadra na zlepšenie odozvy pracovnej plochy, CachyOS cielene vyberá sady záplat, ktoré zatiaľ neboli začlenené do hlavnej vetvy alebo nie sú súčasťou stabilnej revízie jadra.

Preto tieto záplaty pred vydaním používateľom prechádzajú interným testovaním, aby sa zabezpečilo, že stabilita systému nebude ovplyvnená. Úplný zoznam záplat, ktoré CachyOS poskytuje, nájdete v časti [Jadro](/sk/features/kernel).

### Pokročilá podpora plánovačov CPU

CachyOS dodáva jadrá s najnovšími optimalizáciami plánovača CPU na zabezpečenie plynulého a interaktívneho pracovného prostredia aj pri vysokom zaťažení.

* **EEVDF (predvolený plánovač jadra Linux):** Hoci je vynikajúci pre všeobecnú priepustnosť, jadro CachyOS obsahuje vlastné **[nastaviteľné parametre EEVDF](https://github.com/CachyOS/linux/blob/6.15/cachy/kernel/sched/fair.c#L79-81)** na zlepšenie odozvy pracovnej plochy.

* **[BORE](https://github.com/firelzrd/bore-scheduler) (Burst-Oriented Response Enhancer):** Pre používateľov, ktorí vyžadujú maximálnu interaktivitu, naše jadrá podporujú plánovač BORE – sadu záplat, ktorá rozširuje EEVDF s cieľom poskytnúť plynulejší chod počas náročného zaťaženia.
  * Dostupné vo variante jadra `linux-cachyos-bore`.

Viac informácií o jadrách ponúkaných systémom CachyOS a o rámci sched-ext nájdete v dokumentácii **[Jadro](/sk/features/kernel)** a **[sched-ext](/sk/configuration/sched-ext)**.

## Používateľsky prívetivé nástroje a prispôsobenie

### [Automatická detekcia hardvéru](/sk/features/chwd/chwd/)

CachyOS obsahuje vlastný nástroj na detekciu hardvéru, ktorý automaticky rozpozná a nainštaluje potrebné ovládače a balíky pre váš systém. Tým odpadá nutnosť manuálneho vyhľadávania ovládačov, čo vám po inštalácii šetrí čas a námahu.

### Prispôsobiteľný proces inštalácie

Inštalátor CachyOS umožňuje používateľom prispôsobiť si systém výberom desktopového prostredia, balíkov, súborového systému, správcu zavádzania, jadra a ďalších súčastí podľa svojich potrieb:

- [Desktopové prostredia](/sk/installation/desktop_environments/)
- [Správcovia zavádzania](/sk/installation/boot_managers/)
- [Varianty jadra](/sk/features/kernel#varianty)
- [Súborové systémy](/sk/installation/filesystem)
- [Vlastné balíky na zahrnutie počas inštalácie](https://github.com/CachyOS/cachyos-calamares/blob/cachyos-limine-qt6/src/modules/netinstall/netinstall.yaml)

### Vlastné aplikácie CachyOS

CachyOS vyvíja a udržiava vlastnú sadu aplikácií na zjednodušenie správy systému a zlepšenie vášho používateľského zážitku.

Zoznam aplikácií, ktoré CachyOS v súčasnosti vyvíja a udržiava:

-   **[CachyOS Hello](https://github.com/CachyOS/CachyOS-Welcome):** Uvítacia aplikácia na správu vylepšení, aplikovanie opráv a inštaláciu balíkov.
-   **[CachyOS Package Installer](https://github.com/CachyOS/packageinstaller):** Grafické používateľské rozhranie (GUI) na jednoduchú inštaláciu aplikácií.
-   **[CachyOS Kernel Manager](https://github.com/CachyOS/kernel-manager):** Jednoducho inštalujte jadrá z repozitára, konfigurujte si vlastné a spravujte rámec `sched-ext`.
-   **[cachyos-rate-mirrors](https://github.com/CachyOS/rate-mirrors):** Automaticky zoraďuje zrkadlá Arch Linuxu a CachyOS pre optimálne rýchlosti sťahovania pomocou `pacman`.
-   **[systemd-boot-manager](https://github.com/CachyOS/systemd-boot-manager):** Automaticky generuje nové záznamy zavádzania pre `systemd-boot`, ktoré možno jednoducho konfigurovať prostredníctvom `/etc/sdboot-manage.conf`.

## Priateľská a aktívna komunita

Najväčšou silou CachyOS je jeho rastúca komunita. Členovia komunity si navzájom pomáhajú zdieľaním tipov, poskytovaním podpory a prispievaním k úspechu projektu. Vaša spätná väzba nám pomáha neustále zlepšovať zážitok z používania CachyOS.

Pridajte sa k nám a staňte sa súčasťou komunity na **[CachyOS Discord](https://discord.gg/cachyos-862292009423470592)** a na **[CachyOS Fóre](https://discuss.cachyos.org/)**.
