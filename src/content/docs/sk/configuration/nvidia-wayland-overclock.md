---
title: Jednoduché pretaktovanie a/alebo podtaktovanie NVIDIA kariet na CachyOS
description: Jednoduché pretaktovanie a podtaktovanie NVIDIA kariet na Waylande
---

:::caution[UPOZORNENIE]
Tento návod je **neaktuálny** a je potrebné ho aktualizovať.

Medzitým si, prosím, pozrite projekt [LACT](https://github.com/ilya-zlobintsev/LACT), kde nájdete aktuálnejšie riešenie na pretaktovanie v systéme Linux.
:::

Tento návod popisuje, ako pretaktovať a/alebo podtaktovať NVIDIA karty v systéme Linux. Hoci NVIDIA karty nemajú k dispozícii taký široký rozsah nástrojov ako v systéme Windows (žiadny MSI Afterburner alebo priame ovládanie napäťovej krivky), stále existujú relatívne jednoduché spôsoby, ako zvýšiť takty alebo podtaktovať vašu kartu, ak viete, ako na to.

V tomto návode nastavíme Python skripty na úpravu rôznych zvýšení/posunov a vytvoríme službu, ktorá tieto skripty spúšťa automaticky po spustení systému.

## Predpoklady

- Systém CachyOS s grafickou kartou NVIDIA
- Root prístup

## Proces Nastavenia

### 1. Príprava Prostredia

Otvorte terminál podľa vášho výberu (Konsole, Alacritty, atď.) a postupujte podľa týchto krokov:

1. Prepnite sa na root:
   ```sh
   sudo -i
   ```

2. Vytvorte a prejdite do adresára NVIDIA:
   ```sh
   mkdir NVIDIA
   cd NVIDIA
   ```

### 2. Nastavenie Python Virtuálneho Prostredia

1. Vytvorte virtuálne prostredie:
   ```sh
   python -m venv venv
   ```

2. Aktivujte virtuálne prostredie:
   ```sh
   source /root/NVIDIA/venv/bin/activate
   ```

3. Overte aktiváciu:
   ```sh
   which pip
   ```
   Malo by vrátiť "/root/NVIDIA/venv/bin/pip".

4. Nainštalujte požadované moduly:
   ```sh
   pip install nvidia-ml-py pynvml
   ```

5. Deaktivujte virtuálne prostredie:
   ```sh
   deactivate
   ```

### 3. Vytvorenie Spúšťacieho Skriptu

Vytvorte súbor s názvom `nvidia-oc.sh` v `/root/NVIDIA/`:

```bash
#!/usr/bin/fish
source /root/NVIDIA/venv/bin/activate.fish
python /root/NVIDIA/nvidia-oc.py
deactivate
```

Urobte skript spustiteľným:
```sh
chmod 770 nvidia-oc.sh
```

### 4. Zistenie Rozsahov Taktov GPU

Nájdite štandardné minimálne a maximálne takty vašej karty:

```sh
nvidia-smi -q -d SUPPORTED_CLOCKS | less
```

Poznačte si najvyššiu a najnižšiu hodnotu 'Graphics:'.

### 5. Vytvorenie Python Skriptu

Vytvorte súbor s názvom `nvidia-oc.py` v `/root/NVIDIA/` s nasledujúcim obsahom:

```python
from pynvml import *
nvmlInit()

# Toto nastavuje GPU na úpravu - ak vám to spôsobuje chyby alebo máte viacero GPU, nastavte na 1 alebo skúste iné hodnoty.
myGPU = nvmlDeviceGetHandleByIndex(0)

# Nastavenie Min a Max taktu jadra
nvmlDeviceSetGpuLockedClocks(myGPU, MINCLOCK, MAXCLOCK)

# Posun taktu (štandardne 0)
nvmlDeviceSetGpcClkVfOffset(myGPU, CLOCKOFFSET)

# Posun taktu pamäte (štandardne 0)
nvmlDeviceSetMemClkVfOffset(myGPU, MEMOVERCLOCK)
```

Nahraďte `MINCLOCK`, `MAXCLOCK`, `CLOCKOFFSET` a `MEMOVERCLOCK` vhodnými hodnotami.

### 6. Otestovanie Konfigurácie

Spustite skript:
```sh
/root/NVIDIA/nvidia-oc.sh
```

Monitorujte GPU:
```sh
watch nvidia-smi -q -d VOLTAGE,CLOCK
```

Otestujte svoju konfiguráciu hrami alebo inými úlohami náročnými na GPU.

### 7. Vytvorenie Systemd Služby

Vytvorte súbor s názvom `nvidia-oc.service` v `/etc/systemd/system/`:

```ini
[Unit]
Description=Nastavenie Nvidia nastavení
Wants=basic.target

[Service]
Type=oneshot
ExecStart=/root/NVIDIA/nvidia-oc.sh

[Install]
WantedBy=network.target
```

### 8. Povolenie a Spustenie Služby

```sh
systemctl daemon-reload
systemctl enable nvidia-oc.service
systemctl start nvidia-oc.service
```

Skontrolujte stav služby:
```sh
systemctl status nvidia-oc.service
```

## Záver

Teraz máte vlastné takty a prípadne podtaktovanie pre vašu NVIDIA kartu pri spúšťaní systému. Nezabudnite dôkladne testovať a upravovať hodnoty podľa potreby pre stabilitu a výkon.
