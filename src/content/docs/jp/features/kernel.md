---
title: CachyOS Kernel
description: Funktionen und Änderungen am CachyOS Kernel
---

Der CachyOS Kernel ist ein angepasster Kernel, der Verbesserungen, Konfigurationen und Patches von Upstream nutzt.

## Funktionen

- Wähle zwischen 3 Kernel-Schedulern und verschiedenen [sched-ext](/de/configuration/sched-ext)-Schedulern für verbesserte Reaktionsfähigkeit
- AMD P-State Verbesserungen
- Neueste BBRv3 von Google
- le9uo für deutlich verbesserte Reaktionsfähigkeit bei hoher Speicherauslastung
- Aktuelles NTSYNC-Patchset, verwendet mit einem kompatiblen Build von wine/proton
- Kompatibilität mit T2 MacOS Geräten mit Patches von [t2linux](https://github.com/t2linux/linux-t2-patches/)
- Ermöglicht das Auslesen des Energieverbrauchs pro CPU-Kern für AMD-Benutzer
- ACS Override und v412loopback
- VHBA-Modul zur Emulation von CD/DVD-ROM-Geräten
- Neuestes ZSTD-Patchset
- Verschiedene andere Patches, die sich auf die Verbesserung der Leistung konzentrieren (optimierte Compiler-Flags, kryptografische Verbesserungen, Speicherverwaltungs-Tweaks)

Für eine umfassendere Liste der von CachyOS angebotenen Patches siehe die vollständigere
[Funktionsliste](https://github.com/CachyOS/linux-cachyos/?tab=readme-ov-file#features), das [Kernel-Patches-Repository](https://github.com/CachyOS/kernel-patches)
und [CachyOS's Linux Source Tree](https://github.com/CachyOS/linux).

## Varianten

CachyOS bietet eine vielfältige Auswahl an Kernel-Optionen. Alle von uns bereitgestellten Kernel werden mit dem [CachyOS Base Patchset](https://github.com/CachyOS/kernel-patches) ausgeliefert.
Für jeden der Kernel gibt es eine [entsprechende `-lto`-Variante](#namenskonvention-für-pakete), die
mit [clang](https://clang.llvm.org/) anstelle von [GCC](https://gcc.gnu.org/) gebaut wird. Sowohl der Standard- als auch der `-rc`-Kernel sind davon ausgenommen, da sie
standardmäßig mit [ThinLTO](https://blog.llvm.org/2016/06/thinlto-scalable-and-incremental-lto.html) gebaut werden und daher stattdessen entsprechende `-gcc`-Kernelvarianten haben.

- **linux-cachyos**
    - Standard-Kernel. Dies ist der empfohlene Kernel, wenn du dir nicht sicher bist, welcher Kernel verwendet werden soll.
    - Verwendet den [BORE](https://github.com/firelzrd/bore-scheduler)-Scheduler.
    - Standardmäßig mit clang und ThinLTO gebaut, um stärker optimierte Binärdateien zu erzeugen.
    - Profilerstellung mit unserem eigenen [AutoFDO](https://cachyos.org/blog/2411-kernel-autofdo/)-Profil für verbesserte Leistung. [Skript](https://github.com/CachyOS/cachyos-benchmarker/blob/master/kernel-autofdo.sh) zur Profilerstellung des Kernels.
- **linux-cachyos-bore**
    - Verwendet den BORE-Scheduler.
- **linux-cachyos-bmq**
    - Verwendet den BMQ-Scheduler von [Project C](https://gitlab.com/alfredchen/projectc/) von Alfred Chen.
        - **Unterstützt kein sched-ext**.
- **linux-cachyos-deckify**
    - Standard-Kernel für Handhelds. Es wird **nicht empfohlen** und **nicht unterstützt**, einen anderen Kernel als diesen auf Handhelds zu verwenden.
    - Verwendet den BORE-Scheduler.
    - Handheld-spezifische Patches zusätzlich zum Basis-Patchset, um die Kompatibilität und das Gesamterlebnis auf Handheld-Geräten zu verbessern.
- **linux-cachyos-eevdf**
    - Optimiert den Standard-Kernel-Scheduler für verbesserte Reaktionsfähigkeit.
- **linux-cachyos-lts**
    - Basiert auf dem neuesten Long Term Support Kernel.
    - Verwendet den BORE-Scheduler.
    - Minimal gepatcht im Vergleich zu anderen Kerneln, um maximale Stabilität zu gewährleisten.
- **linux-cachyos-hardened**
    - Verwendet den BORE-Scheduler.
    - Enthält das [linux-hardened](https://github.com/anthraxx/linux-hardened)-Patchset.
    - Kernel-Konfiguration basierend auf der [linux-hardened-Konfiguration](https://gitlab.archlinux.org/archlinux/packaging/packages/linux-hardened/-/blob/main/config).
        - Enthält sehr aggressive Härtung, die die Leistung und das Benutzererlebnis erheblich beeinträchtigt.
        - **Unterstützt kein sched-ext**.
- **linux-cachyos-rc**
    - Basiert auf dem neuesten Mainline-Kernel von [Linus's Tree](https://github.com/torvalds/linux/).
    - Verwendet den BORE-Scheduler.
    - Hauptkernel zur Einführung neuer Funktionen in unserem Patchset.
- **linux-cachyos-server**
    - Abgestimmt auf Server-Workloads im Vergleich zur Desktop-Nutzung.
        - 300Hz Tickrate.
        - Keine Präemption.
        - Stock EEVDF.
- **linux-cachyos-rt-bore**
    - Echtzeit-Präemption.
    - Verwendet den BORE-Scheduler.

Bitte eröffne ein Issue im [linux-cachyos GitHub](https://github.com/CachyOS/linux-cachyos) für Vorschläge und Verbesserungen, die dem Standard-Kernel hinzugefügt werden können.

## Vorgefertigte Kernel-Module

Um eine größere Benutzerbasis zu bedienen, liefert CachyOS einige bekannte und häufig verwendete Kernel-Module zusammen mit dem Kernel aus. Dies bedeutet, dass Benutzer diese Module nicht mehr nach jedem Kernel-Update oder bei jeder neuen Kernel-Installation neu kompilieren müssen, sondern sie nur noch aus dem Repository installieren müssen, da sie bereits vorkompiliert sind. Dies macht alle `-dkms`-Pakete, die ein Benutzer möglicherweise hat und die dasselbe Modul wie die vorkompilierte Version bereitstellen, effektiv obsolet.

### ZFS

[ZFS](https://openzfs.org/wiki/Main_Page) ist eines der vielen Dateisysteme, die in CachyOS unterstützt werden. Da es unter der
[CDDL](https://opensource.org/license/cddl-1-0) lizenziert ist, ist es inkompatibel mit der Linux-Kernel-Lizenz und kann daher nicht in den Tree integriert werden. Das mitgelieferte Modul enthält
die neuesten Upstream-Funktionen und -Korrekturen, um die Kompatibilität mit dem neuesten Kernel zu gewährleisten.

### NVIDIA

CachyOS liefert sowohl vorkompilierte Versionen der Closed-Source- als auch der [Open-Source](https://github.com/NVIDIA/open-gpu-kernel-modules/)-Kernel-Module. Da die Entwicklung
des NVIDIA-Kernel-Moduls außerhalb des Trees stattfindet und somit nicht dem Release-Zyklus des Kernels folgt, kann die Standardkonfiguration manchmal inkompatibel mit dem neuesten
Kernel sein. Als Workaround patcht CachyOS die Module mit von der Community erstellten Patches oder Patches, die direkt von NVIDIA geteilt werden.

## Sonstiges

Der CachyOS-Kernel hat auch einige andere bemerkenswerte Funktionen, die subtil sind, aber das Benutzererlebnis verbessern

- Enthält eine Debug-Variante des Kernels, die eine ungestrippte Kernel-Binärdatei für Debugging-Zwecke bereitstellt. Dieses Paket wird benötigt, um den Kernel mit AutoFDO zu profilieren.
- [Binder](https://developer.android.com/reference/android/os/Binder), das für [Waydroid](https://waydro.id/) benötigte Modul, ist standardmäßig in der Kernel-Konfiguration aktiviert
und bereits [eingerichtet](https://github.com/CachyOS/linux-cachyos/blob/master/linux-cachyos/config#L10559).

## Namenskonvention für Pakete

```sh
linux-cachyos # Basiskernel-Paket für den Standard-Kernel. Kompiliert mit clang
linux-cachyos-gcc # Mit GCC kompilierte Entsprechung für linux-cachyos
linux-cachyos-{,gcc-}headers # Kernel-Header, hauptsächlich zum Bauen
linux-cachyos-{,gcc-}nvidia # Vorkompilierte Closed-Source-NVIDIA-Module für den linux-cachyos-Kernel
linux-cachyos-{,gcc-}nvidia-open
linux-cachyos-{,gcc-}zfs # Vorkompilierte ZFS-Module für den linux-cachyos-Kernel
linux-cachyos-{,gcc-}dbg # Ungestrippte Linux-Binärdatei zum Debuggen

linux-cachyos-hardened # Basiskernel-Paket für den gehärteten Kernel. Kompiliert mit GCC
linux-cachyos-hardened-lto # Mit clang kompilierte Entsprechung für linux-cachyos-hardened
linux-cachyos-hardened-{,lto-}headers
linux-cachyos-hardened-{,lto-}nvidia
linux-cachyos-hardened-{,lto-}nvidia-open
linux-cachyos-hardened-{,lto-}zfs
linux-cachyos-hardened-{,lto-}dbg
```

## FAQ

### Warum wird AutoFDO nicht für alle anderen Kernel-Varianten verwendet?

Weil es teuer ist, es zu bauen, da es im Grunde erfordert, den Kernel zweimal zu bauen, daher erfordert es mehr Ressourcen und Zeit, die der Kompilierung gewidmet werden. Der Prozess des Bauens eines Kernels mit AutoFDO umfasst die folgenden Schritte:

1) Bauen des Kernels mit AutoFDO und aktivierten Debugging-Funktionen.
2) Erstellen eines Profils, d. h. Ausführen von Workloads, um Profiling-Daten für die möglichen Optimierungen zu sammeln.
3) Wiederaufbauen des Kernels mit dem AutoFDO-Profil.

Daher ist es vorerst nur in der [linux-cachyos](/de/features/kernel#varianten)-Variante vorhanden.

Für weitere Informationen über AutoFDO klicke [hier.](https://cachyos.org/blog/2411-kernel-autofdo/)

### Verbessert der Echtzeit-Kernel die Gaming-Leistung?

Nein, das tut er nicht. Der Echtzeit-Kernel macht viel mehr Code präemptierbar im Vergleich zu einem normalen, vollständig präemptierbaren Kernel. Dies bedeutet, dass viel mehr Aufgaben (einschließlich Gaming-Prozesse) häufig präemptiert werden und Systemressourcen gewaltsam freigeben, was zu einer schlechteren Leistung führt.
