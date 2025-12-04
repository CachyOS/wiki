---
title: Proč CachyOS?
description: Proč může být CachyOS pro vás lepší
---

CachyOS nabízí vyladěný a kompletní zážitek z Arch Linuxu s uživatelsky přívětivým instalátorem, předkonfigurovanými pracovními prostředími a optimalizacemi výkonu bez kompromisů v oblasti uživatelského zážitku a bezpečnosti systému.

Níže jsou uvedeny některé z klíčových vlastností, které CachyOS poskytuje k zajištění vylepšeného zážitku z používání desktopu.

## Optimalizované balíčky a repozitáře

CachyOS nabízí velký výběr optimalizovaných balíčků pro různé hardwarové konfigurace, včetně systémů `x86-64-v3`, `x86-64-v4` a `Zen4+`, pro zlepšení celkového výkonu.

Pro více informací se podívejte na [**Optimalizované repozitáře.**](/features/optimized_repos)

## Vlastní kernel vyladěný pro výkon a stabilitu

Kromě základní sady patchů pro kernel CachyOS, která ladí různé parametry kernelu pro zlepšení odezvy desktopu, CachyOS pečlivě vybírá sady patchů, které ještě nebyly začleněny do hlavní větve (mainlined) nebo nejsou zahrnuty ve stabilní revizi kernelu.

Tyto patche proto procházejí interním testováním, než jsou uvolněny uživatelům, aby se zajistilo, že stabilita nebude ovlivněna. Pro kompletní seznam patchů, které CachyOS poskytuje, se podívejte na [Kernel](/features/kernel).

## Podpora vlastních CPU plánovačů

Ve výchozím stavu je EEVDF naladěn tak, aby spravedlivě rozděloval dostupný čas CPU mezi všechny úlohy a je zaměřen především na zátěže orientované na propustnost. Kernel CachyOS [**konfiguruje některé laditelné parametry EEVDF**](https://github.com/CachyOS/linux/blob/6.15/cachy/kernel/sched/fair.c#L79-81), aby upřednostnil interaktivitu desktopu.

EEVDF však nebyl od návrhu určen pro použití v oblasti interaktivity desktopu. S ohledem na to CachyOS dodává kernely s patchem plánovače [BORE (Burst-Oriented Response Enhancer)](https://github.com/firelzrd/bore-scheduler), který vylepšuje EEVDF pro zlepšení interaktivity při vysoké zátěži.

Ve verzi 6.12 zavedl linuxový kernel možnost připojovat za běhu (hotplug) BPF plánovače a nahradit EEVDF jiným plánovačem.

Pro více informací o kernelech nabízených CachyOS a plánovačích sched-ext se podívejte na [Kernel](/features/kernel) a [sched-ext](/configuration/sched-ext).

## Detekce hardwaru

CachyOS obsahuje vlastní nástroj pro detekci hardwaru, který automaticky identifikuje a instaluje potřebné ovladače a balíčky pro každý systém, což uživatelům zjednodušuje proces po instalaci.

## Přizpůsobitelný proces instalace

Instalátor CachyOS umožňuje uživatelům přizpůsobit si systém výběrem pracovního prostředí, balíčků, souborového systému, zavaděče, kernelu a dalších prvků podle svých potřeb:
- [**Pracovní prostředí**](/installation/desktop_environments/)
- [**Zavaděče**](/installation/boot_managers/)
- [**Varianty kernelu**](/features/kernel#variants)
- [**Souborové systémy**](/installation/filesystem)
- [**Vlastní balíčky k zahrnutí během instalace**](https://github.com/CachyOS/cachyos-calamares/blob/cachyos-limine-qt6/src/modules/netinstall/netinstall.yaml)

## Aplikace CachyOS

Ve výchozím nastavení poskytuje CachyOS vlastní sadu aplikací, jako jsou CachyOS Hello a CachyOS Package Installer.

Seznam aplikací, které CachyOS v současné době vyvíjí a udržuje:

- [**CachyOS Kernel Manager**](https://github.com/CachyOS/kernel-manager): Snadno instalujte kernely z repozitáře nebo si nakonfigurujte vlastní kernel a zahrňte vlastní patche a dokonce spravujte framework sched-ext pomocí [**scx_loader**](<https://github.com/sched-ext/scx/tree/main/rust/scx_loader>).
- [**CachyOS Hello**](https://github.com/CachyOS/CachyOS-Welcome): Aplikace pro ovládání úprav, aplikování oprav, instalaci balíčků a další informace o CachyOS.
- [**CachyOS Package Installer**](https://github.com/CachyOS/packageinstaller): GUI pro snadnou instalaci aplikací.
- [**cachyos-rate-mirrors**](https://github.com/CachyOS/rate-mirrors): Automaticky seřadí zrcadla Arch a CachyOS pro optimální rychlost stahování pomocí pacmana.
- [**systemd-boot-manager**](https://github.com/CachyOS/systemd-boot-manager): Automaticky generuje nové položky pro zavaděč systemd-boot a lze jej snadno konfigurovat v `/etc/sdboot-manage.conf`.

## Přátelská a aktivní komunita

Největší silou CachyOS je jeho rozrůstající se komunita. Bez její podpory by CachyOS nedosáhl svého současného úspěchu. Členové komunity si navzájem pomáhají sdílením tipů a triků pro vylepšení zážitku s Linuxem.

Připojte se k nám na [**CachyOS Discordu**](https://discord.gg/cachyos-862292009423470592) a na [**CachyOS Fóru**](https://discuss.cachyos.org/).
