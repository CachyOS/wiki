---
title: Jádra CachyOS
---

CachyOS poskytuje předkompilované jádrové moduly pro každé z jeho jader.

## Modul ZFS

Zahrnujeme podporu pro ZFS přímo v našem instalačním programu a zajistíme, že modul ZFS zůstává kompatibilní s verzemi našeho jádra po celou dobu. Toho dosahujeme kompilací modulu přímo s jádrem a jeho zabalením do samostatného balíčku modulu. Také začleňujeme upstream patche do modulu, abychom udrželi kompatibilitu s nejnovějšími verzemi jádra.

Modul ZFS je pojmenován podle nainstalovaného jádra s připojením "-zfs". Zde jsou některé příklady:

```
linux-cachyos (Základní jádro)
linux-cachyos-headers (Hlavičky jádra)
linux-cachyos-zfs (Modul ZFS)

linux-cachyos-bore-lto (Základní jádro)
linux-cachyos-bore-lto-headers (Hlavičky jádra)
linux-cachyos-bore-lto-zfs (Modul ZFS)
```

Pokud používáte jiné jádro a plánujete používat souborový systém ZFS, ujistěte se, že nainstalujete také odpovídající modul ZFS.

## Modul NVIDIA

Poskytujeme předkompilovaný modul NVIDIA, což eliminuje potřebu pro "nvidia-dkms". To uživatelům usnadňuje, protože nemusí modul kompilovat sami, což může být časově náročné při aktualizacích v závislosti na výpočetní síle CPU. Zajistíme, že modul NVIDIA je správně zkompilován pro naše uživatele a začleníme potřebné patche pro udržení kompatibility s nejnovějšími verzemi jádra.

Modul NVIDIA je pojmenován podle nainstalovaného jádra s připojením "-nvidia". Zde jsou některé příklady:

```
linux-cachyos:
linux-cachyos (Základní jádro)
linux-cachyos-headers (Hlavičky jádra)
linux-cachyos-nvidia (Modul NVIDIA)

linux-cachyos-bore-lto:
linux-cachyos-bore-lto (Základní jádro)
linux-cachyos-bore-lto-headers (Hlavičky jádra)
linux-cachyos-bore-lto-nvidia (Modul NVIDIA)
```

## Další upravené moduly v jádře CachyOS

Zde je seznam externích modulů upravených v jádře CachyOS:

- OpenRGB
- v4l2loopback