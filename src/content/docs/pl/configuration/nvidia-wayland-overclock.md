---
title: Łatwe podkręcanie i/lub undervolting kart NVIDIA w CachyOS
description: Łatwe podkręcanie i undervolting kart NVIDIA w Wayland
---

Ten poradnik opisuje, jak podkręcać i/lub obniżać napięcie (undervolting) kart NVIDIA pod Linuksem. Chociaż dla kart NVIDIA nie ma tak szerokiej gamy narzędzi jak w systemie Windows (brak MSI Afterburner czy bezpośredniej kontroli nad krzywą napięcia), nadal istnieją stosunkowo proste sposoby na zwiększenie taktowania lub obniżenie napięcia karty, jeśli wiesz, jak to zrobić.

W tym poradniku skonfigurujemy skrypty Python do dostosowywania różnych wartości boost/offsetów oraz utworzymy usługę systemową, która będzie automatycznie uruchamiać te skrypty po starcie systemu.

## Wymagania wstępne

- System CachyOS z kartą graficzną NVIDIA
- Dostęp do roota (uprawnienia administratora)

## Proces konfiguracji

### 1. Przygotuj środowisko

Otwórz wybrany terminal (np. Konsole, Alacritty) i wykonaj następujące kroki:

1. Przełącz się na użytkownika root:
   ```sh
   sudo -i
   ```

2. Utwórz katalog NVIDIA i przejdź do niego:
   ```sh
   mkdir NVIDIA
   cd NVIDIA
   ```

### 2. Skonfiguruj wirtualne środowisko Python

1. Utwórz wirtualne środowisko:
   ```sh
   python -m venv venv
   ```

2. Aktywuj wirtualne środowisko:
   ```sh
   source /root/NVIDIA/venv/bin/activate
   ```

3. Sprawdź aktywację:
   ```sh
   which pip
   ```
   Polecenie powinno zwrócić "/root/NVIDIA/venv/bin/pip".

4. Zainstaluj wymagane moduły:
   ```sh
   pip install nvidia-ml-py pynvml
   ```

5. Dezaktywuj wirtualne środowisko:
   ```sh
   deactivate
   ```

### 3. Utwórz skrypt ładujący

Utwórz plik o nazwie `nvidia-oc.sh` w katalogu `/root/NVIDIA/`:

```bash
#!/usr/bin/fish
source /root/NVIDIA/venv/bin/activate.fish
python /root/NVIDIA/nvidia-oc.py
deactivate
```

Nadaj skryptowi uprawnienia do wykonania:
```sh
chmod 770 nvidia-oc.sh
```

### 4. Określ zakresy taktowania GPU

Znajdź standardowe minimalne i maksymalne taktowania dla Twojej karty:

```sh
nvidia-smi -q -d SUPPORTED_CLOCKS | less
```

Zanotuj najwyższą i najniższą wartość taktowania ('Graphics:') z listy.

### 5. Utwórz skrypt Python

Utwórz plik o nazwie `nvidia-oc.py` w katalogu `/root/NVIDIA/` z następującą zawartością:

```python
from pynvml import *
nvmlInit()

# To ustawia GPU do modyfikacji - jeśli powoduje to błędy lub masz wiele kart GPU, ustaw na 1 lub spróbuj innych wartości.
myGPU = nvmlDeviceGetHandleByIndex(0)

# Ustaw minimalne i maksymalne taktowanie rdzenia
nvmlDeviceSetGpuLockedClocks(myGPU, MINCLOCK, MAXCLOCK)

# Offset taktowania rdzenia (domyślnie 0)
nvmlDeviceSetGpcClkVfOffset(myGPU, CLOCKOFFSET)

# Offset taktowania pamięci (domyślnie 0)
nvmlDeviceSetMemClkVfOffset(myGPU, MEMOVERCLOCK)
```

Zastąp `MINCLOCK`, `MAXCLOCK`, `CLOCKOFFSET` i `MEMOVERCLOCK` odpowiednimi wartościami.

### 6. Przetestuj konfigurację

Uruchom skrypt:
```sh
/root/NVIDIA/nvidia-oc.sh
```

Monitoruj GPU:
```sh
watch nvidia-smi -q -d VOLTAGE,CLOCK
```

Przetestuj konfigurację w grach lub innych zadaniach intensywnie wykorzystujących GPU.

### 7. Utwórz usługę Systemd

Utwórz plik o nazwie `nvidia-oc.service` w katalogu `/etc/systemd/system/`:

```ini
[Unit]
Description=Ustawienia konfiguracji Nvidia
Wants=basic.target

[Service]
Type=oneshot
ExecStart=/root/NVIDIA/nvidia-oc.sh

[Install]
WantedBy=network.target
```

### 8. Włącz i uruchom usługę

```sh
systemctl daemon-reload
systemctl enable nvidia-oc.service
systemctl start nvidia-oc.service
```

Sprawdź status usługi:
```sh
systemctl status nvidia-oc.service
```

## Podsumowanie

Masz teraz niestandardowe taktowania i opcjonalnie undervolting dla swojej karty NVIDIA, stosowane automatycznie przy starcie systemu. Pamiętaj, aby dokładnie przetestować konfigurację i w razie potrzeby dostosować wartości w celu zapewnienia stabilności i wydajności.
