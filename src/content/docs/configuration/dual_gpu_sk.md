---
title: Návod na nastavenie notebooku s dvojitou GPU
---

# NVIDIA PRIME Render Offload
## Oficiálny spôsob od NVIDIA
Pridajte tieto premenné prostredia pred spustením programu:
```bash
__NV_PRIME_RENDER_OFFLOAD=1 __VK_LAYER_NV_optimus=NVIDIA_only __GLX_VENDOR_LIBRARY_NAME=nvidia <program>
```
### Steam
```bash
__NV_PRIME_RENDER_OFFLOAD=1 __VK_LAYER_NV_optimus=NVIDIA_only __GLX_VENDOR_LIBRARY_NAME=nvidia %command%
```
:::tip
Ak vás zaujíma, prečo sme pridali `__VK_LAYER_NV_optimus=NVIDIA_only`, prečítajte si [dokumentáciu od NVIDIA](https://download.nvidia.com/XFree86/Linux-x86_64/435.17/README/primerenderoffload.html)
:::

## Wrapper skript
Arch Linux poskytuje balíček nazývaný [`nvidia-prime`](https://archlinux.org/packages/extra/any/nvidia-prime/), ktorý pomáha nastaviť vyššie uvedené premenné prostredia pri spustení programu. Na jeho použitie jednoducho vykonajte nasledujúce kroky:

### Inštalácia Wrapper skriptu
```bash
sudo pacman -S nvidia-prime
```

Teraz môžete používať `prime-run`.
```bash
prime-run <program>
```

### GNOME
Od GNOME 3.38 a novšie môžete vybrať *"Spustiť s diskrétnou grafikou"* z kontextového menu po kliknutí pravým tlačidlom na aplikáciu.

**Šikovný nástroj na jednoduché prepínanie medzi integrovanou GPU a diskrétnou GPU v notebooku.**

Moderné notebooky majú dve grafické karty, najmä ak hovoríme o herných notebookoch.
**iGPU** - integrovaná GPU, dlhšia výdrž batérie a nižší výkon.
**dGPU** - diskrétna GPU, vyšší výkon, ale spotrebuje viac batérie, veľmi odporúčaná pre hry, rendering, kódovanie videa, NVENC a ďalšie náročné úlohy.

Windows automaticky prepína medzi iGPU a dGPU v závislosti od použitia.
Tu je návod, ako nastaviť to isté pre CachyOS, najmä ak plánujete používať ho na hry alebo streamovanie, 3D vývoj a pod.


## Úplné vypnutie GPU, keď sa nepoužíva
:::note
Táto funkcia je podporovaná len na notebookoch s Turing GPU (RTX 20xx/GTX 16xx) a novšími a Intel Coffee Lake CPU (8. generácia) a novšími.
:::

**PCI-Express Runtime D3 (RTD3) Power Management**
Pridajte tieto pravidlá do súboru `/etc/udev/rules.d/80-nvidia-pm.rules`

```bash
# Načítanie a odobratie modulu nvidia-modeset
ACTION=="add", DEVPATH=="/bus/pci/drivers/nvidia", RUN+="/sbin/modprobe nvidia-modeset"
ACTION=="remove", DEVPATH=="/bus/pci/drivers/nvidia", RUN+="/sbin/modprobe -r nvidia-modeset"

# Načítanie a odobratie modulu nvidia-drm
ACTION=="add", DEVPATH=="/bus/pci/drivers/nvidia", RUN+="/sbin/modprobe nvidia-drm"
ACTION=="remove", DEVPATH=="/bus/pci/drivers/nvidia", RUN+="/sbin/modprobe -r nvidia-drm"

# Načítanie a odobratie modulu nvidia-uvm
ACTION=="add", DEVPATH=="/bus/pci/drivers/nvidia", RUN+="/sbin/modprobe nvidia-uvm"
ACTION=="remove", DEVPATH=="/bus/pci/drivers/nvidia", RUN+="/sbin/modprobe -r nvidia-uvm"

# Povolenie runtime PM pre NVIDIA VGA/3D ovládače pri pripojení ovládača
ACTION=="bind", SUBSYSTEM=="pci", DRIVERS=="nvidia", ATTR{vendor}=="0x10de", ATTR{class}=="0x03[0-9]*", TEST=="power/control", ATTR{power/control}="auto"

# Zakázanie runtime PM pre NVIDIA VGA/3D ovládače pri odpojení ovládača
ACTION=="unbind", SUBSYSTEM=="pci", DRIVERS=="nvidia", ATTR{vendor}=="0x10de", ATTR{class}=="0x03[0-9]*", TEST=="power/control", ATTR{power/control}="on"
```
> Horné tri pravidlá `ACTION=="add"` nie sú potrebné pri spustení Linux kernel `5.5` a novšieho, viď https://download.nvidia.com/XFree86/Linux-x86_64/530.30.02/README/dynamicpowermanagement.html.

Na okamžité aplikovanie týchto zmien:
```sh
sudo udevadm control --reload
sudo udevadm trigger
```

## Použitie nvidia-persistenced
Povoľte službu nvidia-persistenced.service, aby sa zabránilo systému jadra v ukončení stavu zariadenia vždy, keď sa už zdroje zariadenia NVIDIA nepoužívajú.
```sh
sudo systemctl enable --now nvidia-persistenced.service
```
A nakoniec, reštartujte systém.
Hybridný režim vášho notebooku by mal teraz fungovať rovnako ako vo Windows!