---
title: Moduly jadra v CachyOS
---

CachyOS poskytuje prekompilované moduly jadra pre každý nami poskytované jadro.

## Modul ZFS

Pretože poskytujeme podporu ZFS priamo v inštalátore, chceme zabezpečiť, aby bol modul ZFS vždy kompatibilný s našou verziou jadra.

To môžeme dosiahnuť, keď modul kompilujeme priamo s jadrom a balíme ho do samostatného balíka.
Taktiež do modulu zahrnujeme patche z upstreamu, aby sme zabezpečili kompatibilitu s najnovším jadrom.

Modul ZFS je jednoducho pomenovaný ako nainštalované jadro + "-zfs" na konci.
Tu sú niektoré príklady:

```
linux-cachyos (Základné jadro)
linux-cachyos-headers (Hlavičky jadra)
linux-cachyos-zfs (Modul ZFS pre toto jadro)

linux-cachyos-bore-lto (Základné jadro)
linux-cachyos-bore-lto-headers (Hlavičky jadra)
linux-cachyos-bore-lto-zfs (Modul ZFS)
```

Ak inštalujete iné jadro a používate súborový systém ZFS, uistite sa, že s ním inštalujete aj modul ZFS.

## Modul NVIDIA

Poskytujeme tiež prekompilovaný modul NVIDIA, ktorý eliminuje potrebu "nvidia-dkms".
To je výhodné pre používateľov, pretože nemusia modul kompilovať sami. Táto kompilácia môže pri aktualizačnom procese trvať nejaký čas, v závislosti od výkonu CPU.

Taktiež môžeme zabezpečiť, že modul je správne kompilovaný pre používateľov.
Do modulu zahrnujeme patche, ak je to potrebné, aby sme zabezpečili kompatibilitu s najnovšou verziou jadra.

Modul NVIDIA je jednoducho pomenovaný ako nainštalované jadro + "-nvidia" na konci.
Tu sú niektoré príklady:

```
linux-cachyos:
linux-cachyos (Základné jadro)
linux-cachyos-headers (Hlavičky jadra)
linux-cachyos-nvidia (Modul NVIDIA pre toto jadro)

linux-cachyos-bore-lto:
linux-cachyos-bore-lto (Základné jadro)
linux-cachyos-bore-lto-headers (Hlavičky jadra)
linux-cachyos-bore-lto-nvidia (Modul NVIDIA)
```

## Ďalšie patche do modulov jadra v CachyOS

Tu nájdete zoznam externých modulov patchovaných do jadra CachyOS:

- OpenRGB
- v4l2loopback
