---
title: Proč CachyOS
description: Proč je pro tebe CachyOS lepší
---

CachyOS je uživatelsky přívětivá a vysoce optimalizovaná Linuxová distribuce založená na Arch Linuxu.

# Co dělá CachyOS nejen distribucí založenou na Archy?

CachyOS není obyčejná distribuce založená na Arch Linuxu; má několik významných změn oproti ostatním.

## Optimalizované balíčky a repozitáře
CachyOS udržuje vlastní repozitáře s optimalizovanými balíčky, zejména pro váš hardware.
Existují optimalizované repozitáře x86-64-v3 a x86-64-v4, které zlepšují váš zážitek tím, že snižují latenci, zlepšují výkon, aplikují speciální úpravy atd.
Systém také automaticky vybírá repozitáře, které jsou nejrychlejší a optimalizované speciálně pro váš procesor.

:::caution[POZOR]
Repozitář x86-64-v3 funguje pouze pro procesory, které podporují instrukce AVX a AVX2,
zatímco x86-64-v4 je určený pouze pro instrukce AVX, AVX2 a AVX512, které jsou podporovány na procesorech AMD od Zen4 a vyšších.
Systém jej automaticky vybere kontrolou vašeho procesoru. Neměli byste to tedy měnit.
:::

## Advanced Scheduler Support
Nejprve si pojďme vysvětlit, co je to scheduler. V linuxovém jádře je scheduler klíčovou součástí, která spravuje, jak jsou úlohy (nebo procesy) vykonávány v systému. Rozhoduje, která úloha by měla běžet jako další, a zajišťuje efektivní využití systémových prostředků, aby mohlo současně běžet více úloh.

Ve výchozím nastavení poskytuje CachyOS BORE Scheduler (Burst-Oriented Response Enhancer) ve výchozím jádře. Podle našich testů poskytuje lepší výkon a interaktivitu. Nabízíme však také další scheduler, jako jsou: EEVDF, sched-ext (framework pro načítání schedulerů z uživatelského prostoru), ECHO a RT. Můžete si vybrat kterýkoli z nich podle vašich preferencí pomocí správce jádra.

## Přizpůsobitelný instalační proces
Když načtete live ISO (z USB), automaticky se setkáte s naším instalátorem. Ale co když nechcete instalovat některé komponenty nebo, ještě hlouběji, nemáte rádi tento bootloader nebo jádro? Možná budete chtít změnit prostředí plochy nebo správce oken. Náš instalátor poskytuje mnohem více možností než jiné distribuce. Můžete a měli byste si vybrat, co chcete mít a co ne. A my vám tyto možnosti poskytujeme. Váš systém, váš domov.

## Uživatelsky přívětivý operační systém
Ve výchozím nastavení poskytujeme naše aplikace, jako jsou CachyOS Hello nebo CachyOS Package Installer a další, aby váš zážitek byl jednodušší a lepší. Například CachyOS Hello nabízí možnosti aktualizace systému, povolení služeb a hodnocení zrcadel. Package Installer vám pomůže s instalací balíčků. CachyOS má také velmi dobrou a přátelskou komunitu, která si vzájemně velmi dobře pomáhá.
