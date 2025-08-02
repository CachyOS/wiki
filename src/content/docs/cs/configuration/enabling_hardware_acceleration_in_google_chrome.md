---
title: HW akcelerace pro prohlížeče založené na Chromiu
description: Konfigurace hardwarové akcelerace pro dekódování/kódování videa v prohlížečích založených na Chromiu v CachyOS. Zahrnuje nastavení pro AMD GPU a šablonu pro další GPU/prohlížeče.
---

# HW akcelerace pro prohlížeče založené na Chromiu

Tento průvodce popisuje povolení hardwarové akcelerace v prohlížečích založených na Chromiu v CachyOS. Tím se úlohy spojené s videem/grafikou přesunou na vaši GPU, což zlepší výkon.

## Předpoklady

* **Prohlížeč založený na Chromiu:** (např. Chrome, Brave, Ungoogled Chromium, Edge)
* **Ovladače/API pro GPU:** Aktuální ovladače Mesa (AMD/Intel) nebo NVIDIA, s nakonfigurovaným Vulkanem/VA-API/VDPAU.
* **`amdgpu_top` (pro uživatele AMD):** Nainstalujte `amdgpu_top` z repozitáře pomocí správce balíčků, pokud chcete sledovat aktivitu AMD GPU z terminálu.

## Příspěvek

Tento průvodce je rozšiřitelný. Pokud máte funkční nastavení hardwarové akcelerace pro konkrétní GPU a prohlížeč založený na Chromiu, přispějte přidáním nové sekce pod "Konfigurace GPU a prohlížečů". Uveďte:

* **Název prohlížeče**
* **Model GPU**
* **Příznaky:** Obsah souboru `~/.config/[prohlížeč]-flags.conf`.
* **Cesta k souboru:** Plná cesta k souboru s příznaky.
* **Poznámky (volitelné):** Klíčové ovladače, balíčky nebo specifika nastavení.

## Kroky nastavení

1.  **Identifikujte soubor s příznaky:** Najděte cestu k souboru s příznaky vašeho prohlížeče v sekci "Konfigurace GPU a prohlížečů".
2.  **Upravte soubor s příznaky:** Otevřete/vytvořte soubor pomocí `nano` (nebo vašeho preferovaného textového editoru jako `micro`, `vim`).
    ```bash
    nano [CESTA_K_SOUBORU_S_PŘÍZNAKY_PROHLÍŽEČE]
    # Příklad: nano ~/.config/chrome-flags.conf
    ```
3.  **Přidejte příznaky:** Vložte příslušné příznaky pro GPU/prohlížeč do souboru.
4.  **Uložte a zavřete.**
5.  **Restartujte prohlížeč:** Zavřete všechny instance prohlížeče a znovu jej spusťte.
6.  **Ověřte:** Přejděte na `chrome://gpu` (nebo `brave://gpu`, `edge://gpu` atd.). Potvrďte stav "Hardware accelerated" v sekcích "Video Acceleration Information" a "Graphics Feature Status".

## Tipy pro ověření

Chcete-li si definitivně ověřit, zda je hardwarová akcelerace aktivní během přehrávání videa, použijte tyto metody:

### 1. Zkontrolujte využití AMD GPU (`amdgpu_top`)

Pokud máte AMD GPU a nainstalovaný `amdgpu_top`, otevřete terminál a spusťte jej:

```bash
amdgpu_top
````

Zatímco se v prohlížeči přehrává video (např. na YouTube), sledujte sekci `media` v `amdgpu_top`. Měli byste zde vidět nějaké využití, což naznačuje, že mediální engine vaší GPU je aktivní. Pokud během přehrávání videa zůstává na 0 %, hardwarová akcelerace nemusí být pro dekódování plně zapojena.

### 2. Zkontrolujte nástroje pro vývojáře v prohlížeči (Video Decoder)

Tato metoda poskytuje přímé potvrzení ze samotného prohlížeče:

1. Otevřete svůj prohlížeč založený na Chromiu.
    
2. Spusťte přehrávání videa (např. na YouTube nebo lokální soubor).
    
3. Otevřete Nástroje pro vývojáře: Stiskněte `F12` nebo `Ctrl+Shift+I`.
    
4. Přejděte na kartu **Media**. Pokud ji nevidíte, klikněte na tři tečky (`...`) nebo `>>` (Další karty) na nástrojové liště Nástrojů pro vývojáře a poté vyberte `Media`.
    
5. V sekci "Players" vlevo klikněte na položku odpovídající vašemu videu.
    
6. V hlavním panelu sjeďte dolů do sekce **Video Decoder**.
    
7. Hledejte štítek `Hardware decoder`. Měl by být `true`. Pokud je `false` nebo zobrazuje název softwarového dekodéru (např. `FFmpegVideoDecoder`, `VpxVideoDecoder`, `Dav1dVideoDecoder`), hardwarová akcelerace pro toto video není aktivní.
    

## Konfigurace GPU a prohlížečů

### AMD Radeon RX 6900 XT (Google Chrome)

- **Prohlížeč:** Google Chrome
    
- **GPU:** AMD Radeon RX 6900 XT
    
- **Soubor s příznaky:** `~/.config/chrome-flags.conf`
    

```bash
--use-gl=angle
--use-angle=vulkan
--enable-features=Vulkan,VulkanFromANGLE,DefaultANGLEVulkan,AcceleratedVideoDecodeLinuxZeroCopyGL,AcceleratedVideoEncoder,VaapiIgnoreDriverChecks,UseMultiPlaneFormatForHardwareVideo
--ozone-platform-hint=x11
```

**Poznámky:** Využívá Vulkan (přes ANGLE) a VA-API. `--ozone-platform-hint=x11` může být užitečné i na Waylandu pro určité cesty akcelerace.

---

### Šablona pro příspěvek

### [Váš prohlížeč] - [Váš model GPU] (Přispěl/a [Vaše jméno/přezdívka])

- **Prohlížeč:** [např. Brave, Ungoogled Chromium, Microsoft Edge, Vivaldi, Opera, Chromium]
    
- **GPU:** [např. NVIDIA GeForce RTX 3080, Intel Iris Xe]
    
- **Cesta k souboru s příznaky:** (Klíčové, liší se podle prohlížeče!)
    
    - **Běžné cesty k `.conf`:**
        
        - **Chromium:** `~/.config/chromium-flags.conf`
            
        - **Brave Browser:** `~/.config/brave-browser-flags.conf`
            
        - **Ungoogled Chromium:** `~/.config/ungoogled-chromium-flags.conf`
            
    - **Úprava souboru `.desktop`:** Některé prohlížeče (Brave, Edge, Vivaldi, Opera) mohou vyžadovat úpravu řádku `Exec=` v jejich souboru `.desktop` (nejprve zkopírujte z `/usr/share/applications/` do `~/.local/share/applications/`).
        

**Obsah příznaků (pro soubor `.conf` nebo řádek `Exec=`):**

```bash
# Zde vložte své příznaky.
# U souborů .desktop jsou příznaky odděleny mezerou za spustitelným souborem.
```

**Poznámky (volitelné):**

- Požadované ovladače (např. `nvidia-dkms`, `intel-media-driver`).
    
- Specifické úvahy o nastavení nebo pokyny k úpravě souboru `.desktop`.

