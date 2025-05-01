---
title: Snadné přetaktování a/nebo podvoltování karet NVIDIA v CachyOS
description: Snadné přetaktování a podvoltování karet NVIDIA na Waylandu
---

:::upozornění[VAROVÁNÍ]
Tento návod je **zastaralý** a je třeba ho aktualizovat.

Mezitím se prosím podívejte na projekt [LACT](https://github.com/ilya-zlobintsev/LACT), kde najdete aktuálnější řešení pro přetaktování na Linuxu.
:::

Tento návod popisuje, jak přetaktovat a/nebo podvoltovat karty NVIDIA v Linuxu. Zatímco karty NVIDIA nemají tak širokou škálu dostupných nástrojů jako v systému Windows (žádný MSI Afterburner ani přímé ovládání napěťové křivky), stále existují relativně snadné způsoby, jak zvýšit takty nebo podvoltovat vaši kartu, pokud víte, jak na to.

V tomto návodu nastavíme Python skripty pro úpravu různých zvýšení/posunů a vytvoříme službu pro automatické spouštění těchto skriptů po spuštění systému.

## Předpoklady

- Systém CachyOS s grafickou kartou NVIDIA
- Přístup root

## Proces nastavení

### 1. Příprava prostředí

Otevřete terminál dle vašeho výběru (Konsole, Alacritty atd.) a postupujte podle těchto kroků:

1. Přepnutí na uživatele root:
   ```sh
   sudo -i
   ```

2. Vytvoření a přechod do adresáře NVIDIA:
   ```sh
   mkdir NVIDIA
   cd NVIDIA
   ```

### 2. Nastavení Python Virtual Environment

1. Vytvoření virtuálního prostředí:
   ```sh
   python -m venv venv
   ```

2. Aktivace virtuálního prostředí:
   ```sh
   source /root/NVIDIA/venv/bin/activate
   ```

3. Ověření aktivace:
   ```sh
   which pip
   ```
   Mělo by se vrátit "/root/NVIDIA/venv/bin/pip".

4. Instalace požadovaných modulů:
   ```sh
   pip install nvidia-ml-py pynvml
   ```

5. Deaktivace virtuálního prostředí:
   ```sh
   deactivate
   ```

### 3. Vytvoření spouštěcího skriptu

Vytvořte soubor s názvem `nvidia-oc.sh` v `/root/NVIDIA/`:

```bash
#!/usr/bin/fish
source /root/NVIDIA/venv/bin/activate.fish
python /root/NVIDIA/nvidia-oc.py
deactivate
```

Udělejte ze skriptu spustitelný soubor:
```sh
chmod 770 nvidia-oc.sh
```

### 4. Zjištění rozsahů taktů GPU

Vyhledejte standardní minimální a maximální takty vaší karty:

```sh
nvidia-smi -q -d SUPPORTED_CLOCKS | less
```

Poznamenejte si nejvyšší a nejnižší hodnoty taktu 'Graphics:'.

### 5. Vytvoření Python skriptu

Vytvořte soubor s názvem `nvidia-oc.py` v `/root/NVIDIA/` s následujícím obsahem:

```python
from pynvml import *
nvmlInit()

# Tímto se nastavuje GPU pro úpravu - pokud vám to dává chyby nebo máte více GPU, nastavte na 1 nebo zkuste jiné hodnoty.
myGPU = nvmlDeviceGetHandleByIndex(0)

# Nastavení minimálních a maximálních taktů jádra
nvmlDeviceSetGpuLockedClocks(myGPU, MINCLOCK, MAXCLOCK)

# Posun taktu (ve výchozím nastavení 0)
nvmlDeviceSetGpcClkVfOffset(myGPU, CLOCKOFFSET)

# Posun taktu paměti (ve výchozím nastavení 0)
nvmlDeviceSetMemClkVfOffset(myGPU, MEMOVERCLOCK)
```

Nahraďte `MINCLOCK`, `MAXCLOCK`, `CLOCKOFFSET` a `MEMOVERCLOCK` odpovídajícími hodnotami.

### 6. Testování konfigurace

Spusťte skript:
```sh
/root/NVIDIA/nvidia-oc.sh
```

Monitorujte GPU:
```sh
watch nvidia-smi -q -d VOLTAGE,CLOCK
```

Otestujte svou konfiguraci hrami nebo jinými úlohami náročnými na GPU.

### 7. Vytvoření služby Systemd

Vytvořte soubor s názvem `nvidia-oc.service` v `/etc/systemd/system/`:

```ini
[Unit]
Description=Nastavení nastavení Nvidia
Wants=basic.target

[Service]
Type=oneshot
ExecStart=/root/NVIDIA/nvidia-oc.sh

[Install]
WantedBy=network.target
```

### 8. Povolení a spuštění služby

```sh
systemctl daemon-reload
systemctl enable nvidia-oc.service
systemctl start nvidia-oc.service
```

Zkontrolujte stav služby:
```sh
systemctl status nvidia-oc.service
```

## Závěr

Nyní máte po spuštění systému vlastní takty a případně podvoltování pro vaši kartu NVIDIA. Nezapomeňte důkladně testovat a upravovat hodnoty podle potřeby pro stabilitu a výkon.
