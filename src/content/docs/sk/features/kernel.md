---
title: Jadro CachyOS
description: Funkcie a zmeny v jadre CachyOS
---

Jadro CachyOS je prispôsobené jadro, ktoré využíva vylepšenia, konfigurácie a patche z upstreamu.

## Funkcie

- Výber medzi 3 plánovačmi jadra a rôznymi plánovačmi [sched-ext](/configuration/sched-ext) pre lepšiu odozvu
- Vylepšenia AMD P-State
- Najnovší BBRv3 od spoločnosti Google
- le9uo pre výrazne zlepšenú odozvu pri vysokom zaťažení pamäte
- Aktuálny NTSYNC patchset, používaný s kompatibilnou zostavou wine/proton
- Kompatibilita so zariadeniami T2 MacOS s patchmi od [t2linux](https://github.com/t2linux/linux-t2-patches/)
- Umožňuje čítanie spotreby energie CPU pre každé jadro pre používateľov AMD
- ACS Override a v412loopback
- VHBA modul pre emuláciu CD/DVD-ROM zariadení
- Najnovší ZSTD patchset
- Rôzne ďalšie patche, ktoré sa zameriavajú na zlepšenie výkonu (optimalizované príznaky kompilátora, kryptografické vylepšenia, úpravy správy pamäte)

Pre rozsiahlejší zoznam patchov, ktoré CachyOS ponúka, si prosím pozrite kompletný
[zoznam funkcií](https://github.com/CachyOS/linux-cachyos/?tab=readme-ov-file#features), [úložisko kernel-patches](https://github.com/CachyOS/kernel-patches)
a [zdrojový strom Linuxu od CachyOS](https://github.com/CachyOS/linux).

## Varianty

CachyOS ponúka rôznorodú škálu možností jadra. Všetky jadrá, ktoré poskytujeme, sa dodávajú s [základným patchsetom CachyOS](https://github.com/CachyOS/kernel-patches).
Pre každé z jadier existuje [zodpovedajúci variant `-lto`](#package-naming-convention), ktorý je
zostavený s [clang](https://clang.llvm.org/) namiesto [GCC](https://gcc.gnu.org/). Výnimkou sú predvolené jadro a jadro `-rc`, pretože sú
predvolene zostavené s [ThinLTO](https://blog.llvm.org/2016/06/thinlto-scalable-and-incremental-lto.html), a preto majú zodpovedajúce varianty jadra `-gcc`.

- **linux-cachyos**
    - Predvolené jadro. Toto je odporúčané jadro, ak si nie ste istí, ktoré jadro by sa malo použiť.
    - Používa plánovač [BORE](https://github.com/firelzrd/bore-scheduler).
    - Predvolene zostavené s clang a ThinLTO na vytvorenie optimalizovanejších binárnych súborov.
    - Profilované s naším vlastným profilom [AutoFDO](https://cachyos.org/blog/2411-kernel-autofdo/) pre zlepšený výkon. [Skript](https://github.com/CachyOS/cachyos-benchmarker/blob/master/kernel-autofdo.sh) použitý na profilovanie jadra.
- **linux-cachyos-bore**
    - Používa plánovač BORE.
- **linux-cachyos-bmq**
    - Používa plánovač BMQ z [Project C](https://gitlab.com/alfredchen/projectc/) od Alfreda Chena.
        - **Nepodporuje sched-ext**.
- **linux-cachyos-deckify**
    - Predvolené jadro pre handheldy. Používanie akéhokoľvek iného jadra na handheldoch okrem tohto jadra sa **neodporúča** a je **nepodporované**.
    - Používa plánovač BORE.
    - Špecifické patche pre handheldy nad rámec základného patchsetu na zlepšenie kompatibility a celkového zážitku na handheld zariadeniach.
- **linux-cachyos-eevdf**
    - Vylepšuje predvolený plánovač jadra pre zlepšenú odozvu.
- **linux-cachyos-lts**
    - Založené na najnovšom jadre s dlhodobou podporou (Long Term Support).
    - Používa plánovač BORE.
    - Minimálne patchované v porovnaní s inými jadrami na zabezpečenie maximálnej stability.
- **linux-cachyos-hardened**
    - Používa plánovač BORE.
    - Obsahuje patchset [linux-hardened](https://github.com/anthraxx/linux-hardened).
    - Konfigurácia jadra založená na [konfigurácii linux-hardened](https://gitlab.archlinux.org/archlinux/packaging/packages/linux-hardened/-/blob/main/config).
        - Obsahuje veľmi agresívne hardening, ktorý výrazne obmedzuje výkon a používateľský zážitok.
        - **Nepodporuje sched-ext**.
- **linux-cachyos-rc**
    - Založené na najnovšom mainline jadre z [stromu Linusa](https://github.com/torvalds/linux/).
    - Používa plánovač BORE.
    - Hlavné jadro na zavedenie nových funkcií v našom patchsete.
- **linux-cachyos-server**
    - Ladené pre serverové pracovné zaťaženia v porovnaní s desktopovým používaním.
        - 300Hz `tickrate`.
        - Bez preempcie.
        - Stock EEVDF.
- **linux-cachyos-rt-bore**
    - Preempcia v reálnom čase.
    - Používa plánovač BORE.

Prosím, otvorte issue v [linux-cachyos GitHub](https://github.com/CachyOS/linux-cachyos) pre návrhy a vylepšenia, ktoré je možné pridať do predvoleného jadra.

## Predkompilované Moduly Jadra

Na uspokojenie väčšej používateľskej základne, CachyOS dodáva niektoré známe a často používané moduly jadra spolu s jadrom. To znamená, že používatelia už nebudú musieť prekompilovať tieto moduly po každej aktualizácii jadra alebo pri každej novej inštalácii jadra, ale budú si ich musieť iba nainštalovať z repozitára, pretože sú už predkompilované. Tým sa efektívne stanú zastaranými všetky balíčky `-dkms`, ktoré používateľ môže mať a ktoré poskytujú rovnaký modul ako predkompilovaná verzia.

### ZFS

[ZFS](https://openzfs.org/wiki/Main_Page) je jeden z mnohých súborových systémov, ktoré sú podporované v CachyOS. Vzhľadom na to, že je licencovaný pod
[CDDL](https://opensource.org/license/cddl-1-0), je nekompatibilný s licenciou Linux jadra, a preto nemôže byť zlúčený in-tree. Dodávaný modul obsahuje
najnovšie upstream funkcie a opravy na zabezpečenie kompatibility s najnovším jadrom.

### NVIDIA

CachyOS dodáva obe predkompilované verzie close-source a [open-source](https://github.com/NVIDIA/open-gpu-kernel-modules/) modulov jadra. Vzhľadom na vývoj
jadrového modulu NVIDIA mimo stromu, a teda nesleduje kadenciu vydávania jadra, môže byť štandardná konfigurácia niekedy nekompatibilná s najnovším
jadrom. Ako obchádzku, CachyOS patchuje moduly s komunitou vytvorenými patchmi alebo patchmi zdieľanými priamo spoločnosťou NVIDIA.

## Iné

Jadro CachyOS má aj niektoré ďalšie pozoruhodné funkcie, ktoré sú nenápadné, ale zlepšujú používateľský zážitok

- Obsahuje debug variantu jadra, ktorá poskytuje neodstránený binárny súbor jadra na účely ladenia. Tento balík je potrebný na profilovanie jadra pomocou AutoFDO.
- [Binder](https://developer.android.com/reference/android/os/Binder), modul potrebný pre [Waydroid](https://waydro.id/), je predvolene povolený v konfigurácii jadra
a už [nastavený](https://github.com/CachyOS/linux-cachyos/blob/2f380e2b35c4ad9acda98296f638f93af3742533/linux-cachyos/config#L11037).

## Konvencia Pomenovania Balíkov

```sh
linux-cachyos # Základný balík jadra pre predvolené jadro. Kompilované s clang
linux-cachyos-gcc # Protipól pre linux-cachyos kompilovaný pomocou GCC
linux-cachyos-{,gcc-}headers # Hlavičky jadra, hlavne pre zostavovanie
linux-cachyos-{,gcc-}nvidia # Predkompilované closed source NVIDIA moduly pre jadro linux-cachyos
linux-cachyos-{,gcc-}nvidia-open
linux-cachyos-{,gcc-}zfs # Predkompilované ZFS moduly pre jadro linux-cachyos
linux-cachyos-{,gcc-}dbg # Neodstránený binárny súbor linuxu pre ladenie

linux-cachyos-hardened # Základný balík jadra pre hardened jadro. Kompilované s GCC
linux-cachyos-hardened-lto # Protipól pre linux-cachyos-hardened kompilovaný pomocou clang
linux-cachyos-hardened-{,lto-}headers
linux-cachyos-hardened-{,lto-}nvidia
linux-cachyos-hardened-{,lto-}nvidia-open
linux-cachyos-hardened-{,lto-}zfs
linux-cachyos-hardened-{,lto-}dbg
```

## FAQ

### Prečo sa AutoFDO nepoužíva pre všetky ostatné varianty jadra?

Pretože je náročné na zostavenie, keďže v podstate vyžaduje dvojité zostavenie jadra, a preto si vyžaduje viac zdrojov a času venovaného kompilácii. Proces zostavovania jadra s AutoFDO zahŕňa nasledujúce kroky:

1) Zostavenie jadra s povoleným AutoFDO a možnosťami ladenia.
2) Vytvorenie profilu, čo znamená vykonávanie pracovných zaťažení na zhromažďovanie profilovacích údajov pre možné optimalizácie.
3) Opätovné zostavenie jadra s profilom AutoFDO.

Preto je zatiaľ prítomný iba vo variante [linux-cachyos](/features/kernel#linux-cachyos-default-kernel).

Viac informácií o AutoFDO nájdete [tu.](https://cachyos.org/blog/2411-kernel-autofdo/)

### Zlepšuje realtime jadro výkon v hrách?

Nie, nezlepšuje. Realtime jadro robí oveľa viac kódu preemptibilným v porovnaní s normálnym plne preemptibilným jadrom. To znamená, že oveľa viac úloh (vrátane herných procesov) je často preemptovaných a násilne uvoľní systémové zdroje, čo vedie k horšiemu výkonu.
