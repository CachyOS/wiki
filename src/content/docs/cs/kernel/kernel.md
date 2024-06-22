---
title: CachyOS Kernel
description: Funkce a změny v jádře CachyOS
---

# Co je jádro CachyOS?

Jádro CachyOS je upravené jádro, které využívá záplaty, vylepšení, konfigurace a úpravy ze zdrojového kódu.
To vede k tomu, že uživatelé mají optimalizovanější jádro pro svůj systém. Desktopová jádra jsou hlavně laděna pro interaktivitu, ale existují také varianty zaměřené na průtok dat.

## Základní sada záplat CachyOS

Základní sada záplat obsahuje řadu změn ve srovnání se zdrojovým kódem. Zde je malý seznam běžně zahrnutých úprav v každé větvi:

- **aes-crypto**: Obsahuje masivní vylepšení pro šifrovací zátěže a dynamicky využívá různé instrukční sady (avx2, avx512, avx10.1).
- **amd-pstate**: Obsahuje vylepšení a změny pro ovladač amd-pstate. Záplaty jsou obvykle získávány z mailového seznamu.
- **bbr3**: Nahrazuje bbrv1 nejnovějším bbrv3 poskytovaným společností Google.
- **cachy**: Různé konfigurační změny pro plánovač a interaktivitu (CONFIG_CACHY), patch OpenRGB, ACS Override, vylepšení MM, v4l2loopback, patche Clear Linux a povolení HDR.
- **fixes**: Různé opravy, které se hromadí během doby stabilního jádra.
- **ksm**: Poskytuje systémové volání pro uksmd. Uksmd identifikuje stejné paměťové stránky a sloučí je.
- **ntsync**: Obsahuje nejnovější soubor patchů NTSync pro jádro.
- **zstd**: Patchuje zstd API uvnitř jádra na nejnovější verzi. Obvykle zlepšuje výkon pro úkoly s kompresí pomocí zstd (BTRFS, Zram, Zswap).

## Varianty

CachyOS poskytuje řadu různých variant jádra. Níže naleznete vysvětlení každé z nich.

### linux-cachyos (Výchozí jádro)

Výchozí jádro je navrženo podle našeho doporučení a jsme otevřeni změnám týkajícím se plánovače a konfigurace.
Změny mohou nastat v případě, že dochází ke zhoršením plánovačů nebo jiných konfigurací.
V současné době jádro linux-cachyos obsahuje základní sadu záplat CachyOS, rámec sched-ext (rozšiřitelná třída plánovače) a plánovač BORE (Burst-Oriented Response Enhancer).

### linux-cachyos-bore

Jádro BORE využívá základní sadu záplat CachyOS a plánovač BORE se svou výchozí konfigurací.

### linux-cachyos-deckify

Jádro Deckify obsahuje stejné záplaty jako výchozí jádro, ale využívá další změny pro zařízení Steam Deck a další handheldy, aby zajistilo jejich kompatibilitu.
Toto jádro je používáno jako výchozí v edici CachyOS pro handheldy.

### linux-cachyos-echo

Jádro ECHO obsahuje základní sadu záplat CachyOS a plánovač ECHO.

### linux-cachyos-eevdf

Jádro EEVDF (Earliest Eligible Virtual Deadline First) využívá základní sadu záplat CachyOS a výchozí plánovač jádra (EEVDF).

### linux-cachyos-hardened

Hardened jádro využívá základní sadu záplat CachyOS a záplaty z linux-hardened.

### linux-cachyos-lts

Jádro LTS (Longterm) je založeno na nejnovější verzi dlouhodobé větve a zahrnuje několik malých a stabilních záplat, jako jsou konfigurační změny, patche pro amd-pstate a BBRv3.

### linux-cachyos-rc

RC jádro je založeno na nejnovějším dostupném Release Candidate. Obsahuje nejnovější funkce a změny ze zdrojového kódu, ale může mít problémy.
Kromě toho obsahuje naši základní sadu záplat CachyOS, rámec sched-ext a plánovač BORE.
Toto jádro není doporučeno pro nové uživatele a je určeno pouze pro účely testování.

### linux-cachyos-rt-bore

RT (realtime) jádro využívá základní sadu záplat CachyOS, patche pro real-time a plánovač BORE. RT preemptivita je v tomto jádře implicitně povolena.

### linux-cachyos-sched-ext

Jádro sched-ext obsahuje základní sadu záplat CachyOS a rámec sched-ext. Existuje také další varianta nazvaná "linux-cachyos-sched-ext-debug". Tato varianta obsahuje nesestripaný vmlinux, který je vyžadován pro ladění jádra pro vývojáře.

### linux-cachyos-server

Serverové jádro je určeno pro servery a vyšší průtok dat. Jádro není laděno pro interaktivitu a není doporučeno pro desktopové uživatele.
Hlavní rozdíly zahrnují nižší frekvenci ticků (300Hz), žádnou preemptivitu a nepoužití CONFIG_CACHY. Jádro obsahuje pouze základní sadu záplat CachyOS.
