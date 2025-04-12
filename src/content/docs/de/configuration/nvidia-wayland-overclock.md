---
title: Einfaches Übertakten und/oder Undervolting von NVIDIA-Karten unter CachyOS
description: Übertakten und Undervolten von NVIDIA-Karten einfach unter Wayland
---

Dieses Tutorial beschreibt, wie man NVIDIA-Karten unter Linux übertakten und/oder undervolten kann. Während NVIDIA-Karten nicht die gleiche Bandbreite an Tools wie unter Windows haben (kein MSI Afterburner oder direkte Kontrolle über die Spannungskurve), gibt es dennoch relativ einfache Möglichkeiten, die Taktraten zu erhöhen oder die Karte zu undervolten, wenn man weiß, wie es geht.

In diesem Tutorial richten wir Python-Skripte ein, um verschiedene Boosts/Offsets anzupassen, und erstellen einen Dienst, der diese Skripte automatisch nach dem Booten ausführt.

## Voraussetzungen

- Ein CachyOS-System mit einer NVIDIA-Grafikkarte
- Root-Zugriff

## Einrichtungsprozess

### 1. Umgebung vorbereiten

Öffne ein Terminal deiner Wahl (Konsole, Alacritty usw.) und folge diesen Schritten:

1. Wechsel zu Root:
   ```sh
   sudo -i
   ```

2. Erstelle das NVIDIA-Verzeichnis und navigiere dorthin:
   ```sh
   mkdir NVIDIA
   cd NVIDIA
   ```

### 2. Python Virtual Environment einrichten

1. Erstelle eine virtuelle Umgebung:
   ```sh
   python -m venv venv
   ```

2. Aktiviere die virtuelle Umgebung:
   ```sh
   source /root/NVIDIA/venv/bin/activate
   ```

3. Überprüfe die Aktivierung:
   ```sh
   which pip
   ```
   Es sollte "/root/NVIDIA/venv/bin/pip" zurückgegeben werden.

4. Installiere die erforderlichen Module:
   ```sh
   pip install nvidia-ml-py pynvml
   ```

5. Deaktiviere die virtuelle Umgebung:
   ```sh
   deactivate
   ```

### 3. Das Loader-Skript erstellen

Erstelle eine Datei namens `nvidia-oc.sh` in `/root/NVIDIA/`:

```bash
#!/usr/bin/fish
source /root/NVIDIA/venv/bin/activate.fish
python /root/NVIDIA/nvidia-oc.py
deactivate
```

Mache das Skript ausführbar:
```sh
chmod 770 nvidia-oc.sh
```

### 4. GPU-Taktratenbereiche bestimmen

Finde die Standard-Minimal- und Maximaltaktraten deiner Karte heraus:

```sh
nvidia-smi -q -d SUPPORTED_CLOCKS | less
```

Notiere dir die obersten und untersten 'Graphics:'-Taktwerte.

### 5. Das Python-Skript erstellen

Erstelle eine Datei namens `nvidia-oc.py` in `/root/NVIDIA/` mit folgendem Inhalt:

```python
from pynvml import *
nvmlInit()

# Dies legt die anzupassende GPU fest - wenn dies Fehler verursacht oder du mehrere GPUs hast, setze den Wert auf 1 oder probiere andere Werte aus.
myGPU = nvmlDeviceGetHandleByIndex(0)

# Setze die minimalen und maximalen Kerntaktraten
nvmlDeviceSetGpuLockedClocks(myGPU, MINCLOCK, MAXCLOCK)

# Takt-Offset (standardmäßig 0)
nvmlDeviceSetGpcClkVfOffset(myGPU, CLOCKOFFSET)

# Speicher-Takt-Offset (standardmäßig 0)
nvmlDeviceSetMemClkVfOffset(myGPU, MEMOVERCLOCK)
```

Ersetze `MINCLOCK`, `MAXCLOCK`, `CLOCKOFFSET` und `MEMOVERCLOCK` durch geeignete Werte.

### 6. Konfiguration testen

Führe das Skript aus:
```sh
/root/NVIDIA/nvidia-oc.sh
```

Überwache die GPU:
```sh
watch nvidia-smi -q -d VOLTAGE,CLOCK
```

Teste deine Konfiguration mit Spielen oder anderen GPU-intensiven Aufgaben.

### 7. Einen Systemd-Dienst erstellen

Erstelle eine Datei namens `nvidia-oc.service` in `/etc/systemd/system/`:

```ini
[Unit]
Description=Nvidia-Einstellungen einrichten
Wants=basic.target

[Service]
Type=oneshot
ExecStart=/root/NVIDIA/nvidia-oc.sh

[Install]
WantedBy=network.target
```

### 8. Dienst aktivieren und starten

```sh
systemctl daemon-reload
systemctl enable nvidia-oc.service
systemctl start nvidia-oc.service
```

Überprüfe den Dienststatus:
```sh
systemctl status nvidia-oc.service
```

## Fazit

Du hast jetzt benutzerdefinierte Taktraten und möglicherweise Undervolting für deine NVIDIA-Karte beim Booten. Denke daran, gründlich zu testen und die Werte nach Bedarf anzupassen, um Stabilität und Leistung zu gewährleisten.
