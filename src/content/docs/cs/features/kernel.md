---
title: CachyOS Kernel
description: Vlastnosti a změny v kernelu CachyOS
---

Kernel CachyOS je upravený kernel, který využívá vylepšení, konfigurace a patche z upstreamu.

## Vlastnosti

- Možnost volby mezi 3 plánovači kernelu a různými [sched-ext](/configuration/sched-ext) plánovači pro zlepšení odezvy
- Vylepšení AMD P-State
- Nejnovější BBRv3 od Googlu
- le9uo pro výrazně zlepšenou odezvu při vysokém zatížení paměti
- Aktuální sada patchů NTSYNC, používaná s kompatibilním sestavením wine/protonu
- Kompatibilita se zařízeními T2 MacOS s patchy z [t2linux](https://github.com/t2linux/linux-t2-patches/)
- Umožňuje čtení spotřeby energie CPU pro jednotlivá jádra pro uživatele AMD
- ACS Override a v412loopback
- Modul VHBA pro emulaci zařízení CD/DVD-ROM
- Nejnovější sada patchů ZSTD
- Různé další patche, které se zaměřují na zlepšení výkonu (optimalizované příznaky kompilátoru, kryptografická vylepšení, úpravy správy paměti)

Pro podrobnější seznam patchů, které CachyOS nabízí, se prosím podívejte na kompletnější
[seznam vlastností](https://github.com/CachyOS/linux-cachyos/?tab=readme-ov-file#features), [repozitář kernel-patches](https://github.com/CachyOS/kernel-patches)
a [strom zdrojového kódu Linuxu CachyOS](https://github.com/CachyOS/linux).

## Varianty

CachyOS nabízí širokou škálu možností kernelu. Všechny kernely, které poskytujeme, jsou dodávány se [základní sadou patchů CachyOS](https://github.com/CachyOS/kernel-patches).
Pro každý z kernelů existuje [odpovídající varianta `-lto`](#package-naming-convention), která
je sestavena s [clang](https://clang.llvm.org/) namísto [GCC](https://gcc.gnu.org/).

- **linux-cachyos**
    - Tickrate 1000Hz pro zlepšenou odezvu.
    - Výchozí kernel. Toto je doporučený kernel, pokud si nejste jisti, který kernel by měl být použit.
    - Používá plánovač [BORE](https://github.com/firelzrd/bore-scheduler).
    - Sestaveno s GCC.
    - Profilováno naším vlastním profilem [AutoFDO](https://cachyos.org/blog/2411-kernel-autofdo/) pro zlepšení výkonu. [Skript](https://github.com/CachyOS/cachyos-benchmarker/blob/master/kernel-autofdo.sh) použitý pro profilování kernelu.
- **linux-cachyos-bore**
    - Používá plánovač [BORE](https://github.com/firelzrd/bore-scheduler).
- **linux-cachyos-bmq**
    - Používá plánovač BMQ z [Project C](https://gitlab.com/alfredchen/projectc/) od Alfreda Chena.
        - **Nepodporuje sched-ext**.
- **linux-cachyos-deckify**
    - Výchozí kernel pro handheldy. **Není doporučeno** a **nepodporováno** používat na handheldech jakýkoli jiný kernel než tento.
    - Používá plánovač [BORE](https://github.com/firelzrd/bore-scheduler).
    - Specifické patche pro handheldy navíc k základní sadě patchů pro zlepšení kompatibility a celkového zážitku na handheld zařízeních.
- **linux-cachyos-eevdf**
    - Upravuje výchozí plánovač kernelu pro zlepšení odezvy.
- **linux-cachyos-lts**
    - Založeno na nejnovějším Long Term Support kernelu.
    - Používá plánovač [BORE](https://github.com/firelzrd/bore-scheduler).
    - Minimálně opatchován ve srovnání s ostatními kernely pro zajištění maximální stability.
- **linux-cachyos-hardened**
    - Používá plánovač [BORE](https://github.com/firelzrd/bore-scheduler).
    - Zahrnuje sadu patchů [linux-hardened](https://github.com/anthraxx/linux-hardened).
    - Konfigurace kernelu založená na [konfiguraci linux-hardened](https://gitlab.archlinux.org/archlinux/packaging/packages/linux-hardened/-/blob/main/config).
        - Obsahuje velmi agresivní zabezpečení, které výrazně omezuje výkon a uživatelský zážitek.
        - **Nepodporuje sched-ext**.
- **linux-cachyos-rc**
    - Založeno na nejnovějším mainline kernelu ze [stromu Linuse](https://github.com/torvalds/linux/).
    - Používá plánovač [BORE](https://github.com/firelzrd/bore-scheduler).
    - Hlavní kernel pro zavádění nových funkcí do naší sady patchů.
- **linux-cachyos-server**
    - Vyladěno pro serverové zátěže ve srovnání s desktopovým použitím.
        - Tickrate 300Hz.
        - Žádná preempce.
        - Standardní EEVDF.
- **linux-cachyos-rt-bore**
    - Preempce v reálném čase.
    - Používá plánovač [BORE](https://github.com/firelzrd/bore-scheduler).

:::note
Pokud není uvedeno jinak, je bezpečné předpokládat, že všechny ostatní varianty kernelu
mají stejnou konfiguraci jako výchozí kernel.
:::

Prosím, otevřete issue na [linux-cachyos GitHubu](https://github.com/CachyOS/linux-cachyos) pro návrhy a vylepšení, která mohou být přidána do výchozího kernelu.

## Předkompilované moduly kernelu

Aby vyhověl širší uživatelské základně, CachyOS dodává některé dobře známé a hojně používané moduly kernelu spolu s kernelem. To znamená, že uživatelé již nebudou
muset tyto moduly znovu kompilovat po každé aktualizaci kernelu nebo při každé nové instalaci kernelu, ale budou je muset pouze nainstalovat z repozitáře, protože jsou
již předkompilované. Tím se efektivně stávají zastaralými jakékoli balíčky `-dkms`, které by uživatel mohl mít a které poskytují stejný modul jako předkompilovaná verze.

### ZFS

[ZFS](https://openzfs.org/wiki/Main_Page) je jedním z mnoha souborových systémů, které jsou v CachyOS podporovány. Kvůli tomu, že je licencován pod
[CDDL](https://opensource.org/license/cddl-1-0), je nekompatibilní s licencí linuxového kernelu a proto nemůže být začleněn do hlavního stromu. Dodávaný modul zahrnuje
nejnovější upstreamové funkce a opravy pro zajištění kompatibility s nejnovějším kernelem.

### NVIDIA

CachyOS dodává předkompilované verze jak uzavřených, tak [otevřených](https://github.com/NVIDIA/open-gpu-kernel-modules/) modulů kernelu. Kvůli tomu, že vývoj
modulu kernelu NVIDIA probíhá mimo hlavní strom a tudíž nesleduje vydávací cyklus kernelu, může být standardní konfigurace někdy nekompatibilní s nejnovějším
kernelem. Jako řešení CachyOS patchuje moduly komunitou vytvořenými patchy nebo patchy sdílenými přímo společností NVIDIA.

## Ostatní

Kernel CachyOS má také některé další pozoruhodné vlastnosti, které jsou nenápadné, ale zlepšují uživatelský zážitek.

- Zahrnuje debug variantu kernelu, která poskytuje ne-stripnutý binární soubor kernelu pro účely ladění. Tento balíček je potřebný pro profilování kernelu pomocí AutoFDO.
- [Binder](https://developer.android.com/reference/android/os/Binder), modul potřebný pro [Waydroid](https://waydro.id/), je ve výchozím nastavení povolen v konfiguraci kernelu
a již [nastaven](https://github.com/CachyOS/linux-cachyos/blob/master/linux-cachyos/config#L10559).

## Konvence pojmenování balíčků

```sh
linux-cachyos # Základní balíček kernelu pro výchozí kernel. Kompilováno s GCC
linux-cachyos-hardened # Základní balíček kernelu pro hardened kernel. Kompilováno s GCC
linux-cachyos-hardened-lto # clang-kompilovaný protějšek pro linux-cachyos-hardened
linux-cachyos-hardened-{,lto-}headers
linux-cachyos-hardened-{,lto-}nvidia
linux-cachyos-hardened-{,lto-}nvidia-open
linux-cachyos-hardened-{,lto-}zfs
linux-cachyos-hardened-{,lto-}dbg
```

## Často kladené otázky (FAQ)

### Proč se AutoFDO nepoužívá pro všechny ostatní varianty kernelu?

Protože je jeho sestavení nákladné, v podstatě vyžaduje sestavení kernelu dvakrát, a proto vyžaduje více zdrojů a času věnovaného kompilaci. Proces sestavení kernelu s AutoFDO zahrnuje následující kroky:

1) Sestavení kernelu s povoleným AutoFDO a ladícími schopnostmi.
2) Vytvoření profilu, což znamená spouštění zátěží za účelem shromáždění profilovacích dat pro možné optimalizace.
3) Znovu sestavení kernelu s profilem AutoFDO.

Proto je prozatím přítomen pouze ve variantě [linux-cachyos](/features/kernel#variants).

Pro více informací o AutoFDO klikněte [zde.](https://cachyos.org/blog/2411-kernel-autofdo/)

### Zlepšuje kernel v reálném čase výkon při hraní her?

Ne, nezlepšuje. Kernel v reálném čase činí mnohem více kódu preemptibilním ve srovnání s normálním plně preemptibilním kernelem. To znamená, že mnohem více úloh (včetně herních procesů) je často přerušováno a bude nuceně uvolňovat systémové prostředky, což vede k horšímu výkonu.
