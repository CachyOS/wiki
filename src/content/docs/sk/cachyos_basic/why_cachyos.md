---
title: Prečo CachyOS?
description: Prečo môže byť CachyOS pre vás lepší
---

CachyOS je používateľsky prívetivá a vysoko optimalizovaná Linuxová distribúcia založená na Arch Linuxe.

# Čo robí CachyOS viac ako len Arch-based distro

CachyOS nie je obyčajná distribúcia založená na Arch; má niektoré zásadné zmeny oproti ostatným.

## Optimalizované balíky a repozitáre

CachyOS udržiava vlastné repozitáre s optimalizovanými balíkmi, najmä pre váš hardvér.
Existujú optimalizované repozitáre x86-64-v3 a x86-64-v4, ktoré zlepšujú váš zážitok tým, že:
znížia latenciu, zlepšia výkon, použijú špeciálne opravy atď.
Systém tiež automaticky vyberá repozitáre, ktoré sú najrýchlejšie a špeciálne optimalizované pre váš CPU.

:::caution[UPOZORNENIE]
Repozitár x86-64-v3 funguje iba pre CPU, ktoré podporujú inštrukcie AVX a AVX2,
zatiaľ čo x86-64-v4 iba pre AVX a AVX2 + AVX512 inštrukcie podporované na AMD CPU
od Zen4 a vyššie. Systém ho automaticky vyberie po overení vášho CPU. Nemali by ste to meniť.
:::

## Pokročilá podpora plánovača

Najprv si poďme vysvetliť, čo je plánovač. V jadre Linuxu je plánovač kľúčovou súčasťou,
ktorá riadi, ako sa úlohy (alebo procesy) vykonávajú v systéme. Rozhoduje, ktorá úloha by mala bežať ďalej,
zabezpečujúc efektívne využitie systémových zdrojov a umožňujúc simultánne beh viacerých úloh.

V predvolenom nastavení CachyOS poskytuje plánovač BORE (Burst-Oriented Response Enhancer) v našom predvolenom jadre.
Podľa našich testov poskytuje lepší výkon a interaktivitu. Ale poskytujeme aj iné plánovače, ako:
EEVDF, sched-ext (framework na načítanie plánovačov používateľského priestoru), ECHO a RT. A môžete si vybrať ten, ktorý vám najviac vyhovuje prostredníctvom správcu jadra.

## Prispôsobiteľný inštalačný proces

Keď načítate live ISO (z USB), automaticky ssa spustí náš inštalátor.
Ale čo ak nechcete niektoré komponenty inštalovať, alebo sa chcete dostať hlbšie, nepáči sa vám tento bootloader alebo jadro? Možno budete chcieť zmeniť prostredie pracovnej plochy alebo správcu okien. Náš inštalátor poskytuje oveľa viac možností ako iné distribúcie.
Môžete a mali by ste si vybrať, čo chcete mať a čo nie. A my vám poskytujeme
tieto možnosti. Váš systém, váš domov.

## Používateľsky prívetivý OS

V predvolenom nastavení poskytujeme naše aplikácie, ako CachyOS Hello alebo CachyOS Package Installer,
a ďalšie. Aby sme zjednodušili a zlepšili váš zážitok. Napríklad, CachyOS Hello poskytuje možnosti na aktualizáciu systému, povolenie služieb a hodnotenie zrkadiel. Package Installer vám pomôže s inštaláciou balíkov.
CachyOS má tiež veľmi dobrú a priateľskú komunitu, ktorá si navzájom veľmi dobre pomáha.
