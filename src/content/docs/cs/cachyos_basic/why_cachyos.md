---
title: Proč CachyOS?
description: Proč může být CachyOS pro vás lepší
tableOfContents:
  minHeadingLevel: 1
  maxHeadingLevel: 4
ai_translated: true
---

CachyOS je distribuce založená na Arch Linuxu zaměřená na výkon, navržená tak, aby poskytovala stabilní, efektivní a uživatelsky přívětivé výpočetní prostředí. Nabízí plný výkon a flexibilitu rolling-release systému, vylepšenou pokročilými optimalizacemi a vlastní sadou nástrojů, která zjednodušuje práci jak novým, tak zkušeným uživatelům.

## Výkon a optimalizace

### Optimalizované balíčky a repozitáře

CachyOS poskytuje velký výběr **[optimalizovaných balíčků](https://packages.cachyos.org/)** speciálně zkompilovaných pro různé moderní architektury CPU. To zahrnuje podporu pro systémy `x86-64-v3`, `x86-64-v4` a `Zen4+`, což zajišťuje, že váš software je sestaven tak, aby plně využil možnosti vašeho hardwaru pro výrazné zvýšení výkonu.

Podrobnější pohled na naše optimalizované repozitáře naleznete v našem podrobném průvodci **[Optimalizované repozitáře](/cs/features/optimized_repos)**.

### Vlastní jádro vyladěné pro výkon a stabilitu

Kromě základní sady patchů pro jádro CachyOS, která ladí různé parametry jádra pro zlepšení odezvy desktopu, CachyOS pečlivě vybírá sady patchů, které ještě nebyly začleněny do hlavní větve (mainlined) nebo nejsou zahrnuty ve stabilní revizi jádra.

Tyto patche proto procházejí interním testováním, než jsou uvolněny uživatelům, aby se zajistilo, že nebude ovlivněna stabilita. Kompletní seznam patchů, které CachyOS poskytuje, naleznete na stránce [Jádro](/cs/features/kernel).

### Pokročilá podpora CPU plánovačů

CachyOS dodává jádra s nejnovějšími optimalizacemi CPU plánovačů, aby zajistil plynulý a interaktivní desktop i při vysoké zátěži.

* **EEVDF (výchozí plánovač linuxového jádra):** Ačkoli je vynikající pro obecnou propustnost, jádro CachyOS obsahuje vlastní **[laditelné parametry EEVDF](https://github.com/CachyOS/linux/blob/6.15/cachy/kernel/sched/fair.c#L79-81)** pro zlepšení odezvy desktopu.

* **[BORE](https://github.com/firelzrd/bore-scheduler) (Burst-Oriented Response Enhancer):** Pro uživatele, kteří vyžadují maximální interaktivitu, naše jádra podporují plánovač BORE, sadu patchů, která vylepšuje EEVDF pro plynulejší chod během náročných zátěží.
  * Dostupný ve variantě jádra `linux-cachyos-bore`.

Více informací o jádrech nabízených CachyOS a frameworku sched-ext naleznete v dokumentaci **[Jádro](/cs/features/kernel)** a **[sched-ext](/cs/configuration/sched-ext)**.

## Uživatelsky přívětivé nástroje a přizpůsobení

### [Automatická detekce hardwaru](/cs/features/chwd/chwd/)

CachyOS obsahuje vlastní nástroj pro detekci hardwaru, který automaticky identifikuje a instaluje potřebné ovladače a balíčky pro váš systém. Odpadá tak nutnost ručního vyhledávání ovladačů, což vám ušetří čas a úsilí po instalaci.

### Přizpůsobitelný proces instalace

Instalátor CachyOS umožňuje uživatelům přizpůsobit si systém výběrem pracovního prostředí, balíčků, souborového systému, správce spouštění, jádra a dalších prvků podle svých potřeb:

- [Pracovní prostředí](/cs/installation/desktop_environments/)
- [Správci spouštění](/cs/installation/boot_managers/)
- [Varianty jádra](/cs/features/kernel#varianty)
- [Souborové systémy](/cs/installation/filesystem)
- [Vlastní balíčky k zahrnutí během instalace](https://github.com/CachyOS/cachyos-calamares/blob/cachyos-limine-qt6/src/modules/netinstall/netinstall.yaml)

### Vlastní aplikace CachyOS

CachyOS vyvíjí a udržuje vlastní sadu aplikací pro zjednodušení správy systému a zlepšení vašeho zážitku.

Seznam aplikací, které CachyOS v současné době vyvíjí a udržuje:

-   **[CachyOS Hello](https://github.com/CachyOS/CachyOS-Welcome):** Uvítací aplikace pro ovládání úprav, aplikování oprav a instalaci balíčků.
-   **[CachyOS Package Installer](https://github.com/CachyOS/packageinstaller):** Grafické uživatelské rozhraní (GUI) pro snadnou instalaci aplikací.
-   **[CachyOS Kernel Manager](https://github.com/CachyOS/kernel-manager):** Snadno instalujte jádra z repozitáře, konfigurujte si vlastní a spravujte framework `sched-ext`.
-   **[cachyos-rate-mirrors](https://github.com/CachyOS/rate-mirrors):** Automaticky seřadí zrcadla Arch a CachyOS pro optimální rychlost stahování pomocí `pacman`.
-   **[systemd-boot-manager](https://github.com/CachyOS/systemd-boot-manager):** Automaticky generuje nové spouštěcí položky pro `systemd-boot`, které lze snadno konfigurovat přes `/etc/sdboot-manage.conf`.

## Přátelská a aktivní komunita

Největší silou CachyOS je jeho rozrůstající se komunita. Členové komunity si navzájem pomáhají sdílením tipů, poskytováním podpory a přispíváním k úspěchu projektu. Vaše zpětná vazba nám pomáhá zážitek z CachyOS neustále zlepšovat.

Připojte se k nám a staňte se součástí komunity na **[CachyOS Discordu](https://discord.gg/cachyos-862292009423470592)** a na **[CachyOS Fóru](https://discuss.cachyos.org/)**.
