---
title: Warum CachyOS?
description: Warum CachyOS vielleicht besser für dich ist
tableOfContents:
  minHeadingLevel: 1
  maxHeadingLevel: 4
---

CachyOS ist eine leistungsorientierte Arch-Linux-Distribution, die entwickelt wurde, um eine stabile, effiziente und benutzerfreundliche Rechnerumgebung zu bieten. Es bietet die volle Leistung und Flexibilität eines Rolling-Release-Systems, verbessert durch fortschrittliche Optimierungen und eine benutzerdefinierte Toolchain, die das Nutzererlebnis sowohl für neue als auch für erfahrene User vereinfacht.

## Leistung und Optimierung

### Optimierte Pakete und Repositories

CachyOS stellt eine große Auswahl an **[optimierten Paketen](https://packages.cachyos.org/)** zur Verfügung, die speziell für verschiedene moderne CPU-Architekturen kompiliert wurden. Das schließt Unterstützung für `x86-64-v3`, `x86-64-v4` und `Zen4+`-Systeme ein und stellt sicher, dass deine Software so gebaut ist, dass sie die Fähigkeiten deiner Hardware voll ausnutzt, um einen deutlichen Leistungsschub zu erzielen.

Für einen tieferen Einblick in unsere optimierten Repositories, schau dir unseren detaillierten Guide zu **[Optimierten Repositories](/de/features/optimized_repos)** an.

### Eigener Kernel, auf Leistung und Stabilität getrimmt

Neben dem CachyOS-Basiskernel-Patch-Set, das verschiedene Kernel-Parameter anpasst, um die Reaktionsfähigkeit des Desktops zu verbessern, pickt sich CachyOS gezielt Patch-Sets heraus, die noch nicht im Mainline-Kernel gelandet sind oder nicht in der stabilen Version des Kernels enthalten sind.

Deshalb durchlaufen diese Patches interne Tests, bevor sie an die Nutzer freigegeben werden, um sicherzustellen, dass die Stabilität nicht beeinträchtigt wird. Eine vollständige Liste der von CachyOS bereitgestellten Patches findest du unter [Kernel](/features/kernel).

### Unterstützung für fortschrittliche CPU-Scheduler

CachyOS liefert Kernel mit den neuesten CPU-Scheduler-Optimierungen aus, um selbst unter hoher Last einen flüssigen und interaktiven Desktop zu gewährleisten.

* **EEVDF (Der Standard-Scheduler des Linux-Kernels):** Obwohl er für den allgemeinen Durchsatz hervorragend ist, enthält der CachyOS-Kernel benutzerdefinierte **[EEVDF-Anpassungen](https://github.com/CachyOS/linux/blob/6.15/cachy/kernel/sched/fair.c#L79-81)**, um die Reaktionsfähigkeit des Desktops zu verbessern.

* **[BORE](https://github.com/firelzrd/bore-scheduler) (Burst-Oriented Response Enhancer):** Für Nutzer, die maximale Interaktivität benötigen, unterstützen unsere Kernel den BORE-Scheduler, ein Patch-Set, das EEVDF erweitert, um bei intensiven Arbeitslasten ein flüssigeres Erlebnis zu liefern.

Für mehr Informationen über die von CachyOS angebotenen Kernel und das sched-ext Framework, siehe die Dokumentation zu **[Kernel](/de/features/kernel)** und **[sched-ext](/de/configuration/sched-ext)**.

## Benutzerfreundliche Tools und Anpassungsmöglichkeiten

### [Automatische Hardware-Erkennung](/de/features/chwd/chwd/)

CachyOS enthält ein eigenes Tool zur Hardware-Erkennung, das automatisch die notwendigen Treiber und Pakete für dein System identifiziert und installiert. Das macht die manuelle Treibersuche überflüssig und spart dir nach der Installation Zeit und Mühe.

### Anpassbarer Installationsprozess

Der CachyOS-Installer lässt dich dein System anpassen, indem du die Desktop-Umgebung, Pakete, Dateisystem, Boot-Manager, Kernel und mehr nach deinen Wünschen auswählst:

- [Desktop-Umgebungen](/de/installation/desktop_environments/)
- [Boot-Manager](/de/installation/boot_managers/)
- [Kernel-Varianten](/de/features/kernel#variants)
- [Dateisysteme](/de/installation/filesystem)
- [Benutzerdefinierte Pakete, die während der Installation eingeschlossen werden sollen](https://github.com/CachyOS/cachyos-calamares/blob/cachyos-limine-qt6/src/modules/netinstall/netinstall.yaml)

### Eigene CachyOS-Anwendungen

CachyOS entwickelt und pflegt seine eigene Suite von Anwendungen, um die Systemverwaltung zu vereinfachen und dein Erlebnis zu verbessern.

Liste der Anwendungen, die CachyOS derzeit entwickelt und pflegt:

-   **[CachyOS Hello](https://github.com/CachyOS/CachyOS-Welcome):** Eine Willkommensanwendung zur Steuerung von Tweaks, zum Anwenden von Korrekturen und zur Installation von Paketen.
-   **[CachyOS Package Installer](https://github.com/CachyOS/packageinstaller):** Eine grafische Benutzeroberfläche (GUI) für die einfache Installation von Anwendungen.
-   **[CachyOS Kernel Manager](https://github.com/CachyOS/kernel-manager):** Installiere einfach Kernel aus dem Repository, konfiguriere deine eigenen und verwalte das `sched-ext`-Framework.
-   **[cachyos-rate-mirrors](https://github.com/CachyOS/rate-mirrors):** Ordnet Arch- und CachyOS-Mirrors automatisch nach Rang, um mit `pacman` optimale Download-Geschwindigkeiten zu erzielen.
-   **[systemd-boot-manager](https://github.com/CachyOS/systemd-boot-manager):** Erstellt automatisch neue Boot-Einträge für `systemd-boot`, die einfach über `/etc/sdboot-manage.conf` konfiguriert werden können.

## Eine freundliche und aktive Community

Die größte Stärke von CachyOS ist seine wachsende Community. Die Mitglieder der Community helfen sich gegenseitig, indem sie Tipps austauschen, Unterstützung bieten und zum Erfolg des Projekts beitragen. Dein Feedback hilft uns, das CachyOS-Erlebnis kontinuierlich zu verbessern.

Mach mit und werde Teil der Community auf dem **[CachyOS Discord](https://discord.gg/cachyos-862292009423470592)** und im **[CachyOS Forum](https://discuss.cachyos.org/)**.
