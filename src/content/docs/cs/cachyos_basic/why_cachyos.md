---
title: Proč CachyOS?
description: Proč pro vás může být CachyOS lepší
---

CachyOS nabízí vyladěný zážitek s Arch Linuxem, doplněný o uživatelsky přívětivý instalátor, předkonfigurovaná desktopová prostředí a optimalizace výkonu bez kompromisů v uživatelské zkušenosti a zabezpečení systému. Níže jsou uvedeny některé z hlavních funkcí, které CachyOS poskytuje pro zajištění úžasného desktopového zážitku.

## Optimalizované balíčky a repozitáře

CachyOS nabízí optimalizované balíčky pro různé hardwarové konfigurace, včetně systémů x86-64-v3, x86-64-v4 a Zen4+, pro zlepšení celkového výkonu systému. Kromě toho CachyOS obsahuje velmi žádané balíčky [AUR](https://aur.archlinux.org/) od uživatelů pro zlepšení kvality života.

Pro lepší představu o různých balíčcích, které CachyOS optimalizoval, se podívejte na [Optimalizované repozitáře](/features/optimized_repos).

## Vlastní jádro vyladěné pro výkon a stabilitu

Kromě základní sady patchů jádra CachyOS, která ladí různé parametry jádra pro zlepšení odezvy desktopu, CachyOS také vybírá slibné sady patchů, které ještě nebyly začleněny do hlavní větve nebo nejsou ve stabilní revizi jádra. Tyto patche procházejí interním testováním před odesláním uživatelům, aby se zajistilo, že nebude ovlivněna stabilita. Kompletní seznam patchů, které CachyOS poskytuje, naleznete v sekci [Jádro](/features/kernel).

## Vlastní podpora plánovače CPU

Plánování CPU je důležitou součástí jádra pro zajištění spravedlivého přidělování času CPU všem úlohám. Jádro Linuxu implementuje různé třídy plánování, aby zajistilo, že každá úloha bude naplánována odpovídajícím způsobem. Třída spravedlivého plánování, známější jako „výchozí plánovač“, je založena na algoritmu [EEVDF (Earliest Eligible Virtual Deadline First)](https://lwn.net/Articles/925371/).

Ve výchozím nastavení je EEVDF vyladěn tak, aby spravedlivě rozděloval dostupný čas CPU mezi všechny úlohy a je většinou zaměřen na pracovní zátěže orientované na propustnost. Jádro CachyOS [konfiguruje některé laditelné parametry EEVDF](https://github.com/CachyOS/linux/blob/6.12/cachy/kernel/sched/fair.c#L76-L79) tak, aby upřednostňovalo odezvu desktopu před samotnou propustností.

Nicméně EEVDF z principu nebyl určen pro interaktivitu desktopu. S ohledem na to CachyOS dodává jádra opatchovaná plánovačem [BORE (Burst-Oriented Response Enhancer)](https://github.com/firelzrd/bore-scheduler), který zavádí další vlastnost pro přidělování více času CPU úlohám vyžadujícím vysokou odezvu ve srovnání s úlohami, které ji nevyžadují, na základě jejich „výbušnosti“.

V 6.12 umožňuje jádro Linuxu za běhu připojovat BPF plánovače a nahradit třídu spravedlivého plánování jiným plánovačem. Pro usnadnění tohoto procesu poskytuje CachyOS prvotřídní podporu pro [plánovače sched-ext](https://github.com/sched-ext/scx).

Více informací o jádrech, která CachyOS nabízí, a o plánovačích sched-ext naleznete v sekcích [Jádro](/features/kernel) a [sched-ext](/configuration/sched-ext/).

## Detekce hardwaru

CachyOS dodává svůj vlastní [nástroj pro detekci hardwaru](https://github.com/CachyOS/chwd), který správně instaluje potřebné balíčky a ovladače pro každý systém, aby uživatelům ulehčil zátěž spojenou s nastavením po instalaci.

## Přizpůsobitelný proces instalace

Instalátor CachyOS zaručuje, že si uživatelé mohou vybrat systém, který chtějí. Tato přizpůsobitelnost zahrnuje mimo jiné:
- [Desktopová prostředí](/installation/desktop_environments/)
- [Správce spouštění](/installation/boot_managers/)
- [Varianty jádra](/features/kernel#variants)
- [Souborové systémy](/installation/filesystem)
- Vlastní balíčky pro instalaci během procesu instalace

## Aplikace CachyOS

Ve výchozím nastavení CachyOS poskytuje své vlastní aplikace, jako je CachyOS Hello nebo CachyOS Package Installer. Ve výchozím nastavení jsou uživatelsky přívětivé aplikace, jako je CachyOS Hello a CachyOS Package Installer, poskytovány CachyOS pro zjednodušení a vylepšení vašeho zážitku s Linuxem. Například CachyOS Hello nabízí možnosti aktualizace systému, povolení služeb a seřazení zrcadel. Dodává se také s vylepšeními a opravami běžných problémů na jedno kliknutí. Package Installer vám pomůže instalovat balíčky.

Seznam aplikací, které CachyOS vyvíjí a udržuje:

- **CachyOS Kernel Manager**: Snadno instalujte jádra z repozitáře nebo si nakonfigurujte vlastní jádro a zahrňte vlastní patche a dokonce spravujte rámec sched-ext prostřednictvím [scx_loader](<https://github.com/sched-ext/scx/tree/main/rust/scx_loader>).
- **CachyOS Hello**: Aplikace pro ovládání vylepšení, aplikování oprav, instalaci balíčků a další informace o CachyOS.
- **CachyOS Package Installer**: GUI pro snadnou instalaci běžně používaných aplikací.
- **cachyos-rate-mirrors**: Automaticky řadí zrcadla Archu a CachyOS pro optimální rychlost stahování.
- **systemd-boot-manager**: Automaticky generuje nové záznamy pro systemd-boot-manager a lze jej snadno konfigurovat v `/etc/sdboot-manage.conf`.

## Přátelská a aktivní komunita

Nejdůležitějším bodem je neustále rostoucí komunita CachyOS. Bez komunity by CachyOS nikdy nemohl dosáhnout toho, kde je nyní. Komunita si navzájem pomáhá a sdílí tipy a triky pro lepší zážitek s Linuxem. Přidejte se k nám na [CachyOS Discordu](https://discord.com/invite/cachyos-862292009423470592) nebo na [fóru CachyOS](https://discuss.cachyos.org/).
