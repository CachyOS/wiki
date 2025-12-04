---
title: Warum CachyOS?
description: Warum CachyOS für dich besser sein könnte
tableOfContents:
  minHeadingLevel: 1
  maxHeadingLevel: 4
---

CachyOS ist eine leistungsorientierte Arch-Linux-Distribution, die entwickelt wurde, um eine stabile, effiziente und benutzerfreundliche Computerumgebung zu bieten. Es bietet die volle Leistung und Flexibilität eines Rolling-Release-Systems, erweitert durch fortschrittliche Optimierungen und eine benutzerdefinierte Toolchain, die das Nutzererlebnis sowohl für neue als auch für erfahrene Benutzer vereinfacht.

## Leistung und Optimierung

### Optimierte Pakete und Repositories

CachyOS bietet eine große Auswahl an **[optimierten Paketen](https://packages.cachyos.org/)**, die speziell für verschiedene moderne CPU-Architekturen kompiliert wurden. Dies beinhaltet Unterstützung für `x86-64-v3`, `x86-64-v4` und `Zen4+` Systeme, was sicherstellt, dass deine Software so erstellt ist, dass sie die Fähigkeiten deiner Hardware voll ausnutzt und einen erheblichen Leistungsschub bietet.

Für einen detaillierteren Einblick in unsere optimierten Repositories, sieh dir unsere ausführliche Anleitung zu **[optimierten Repositories](/de/features/optimized_repos)** an.

### Benutzerdefinierter Kernel, abgestimmt auf Leistung und Stabilität

Abgesehen von dem CachyOS-Basis-Kernel-Patchset, das verschiedene Kernel-Parameter zur Verbesserung der Desktop-Reaktionsfähigkeit anpasst, wählt CachyOS gezielt Patchsets aus, die noch nicht in den Hauptzweig aufgenommen wurden oder nicht in der stabilen Version des Kernels enthalten sind.

Daher durchlaufen diese Patches interne Tests, bevor sie für Benutzer freigegeben werden, um sicherzustellen, dass die Stabilität nicht beeinträchtigt wird. Eine vollständige Liste der von CachyOS bereitgestellten Patches findest du unter [Kernel](/de/features/kernel).

### Unterstützung für fortschrittliche CPU-Scheduler

CachyOS liefert Kernel mit den neuesten CPU-Scheduler-Optimierungen aus, um einen flüssigen und interaktiven Desktop auch unter hoher Last zu gewährleisten.

* **EEVDF (Der Standard-Linux-Kernel-Scheduler):** Obwohl er für den allgemeinen Durchsatz hervorragend geeignet ist, enthält der CachyOS-Kernel benutzerdefinierte **[EEVDF-Anpassungen](https://github.com/CachyOS/linux/blob/6.15/cachy/kernel/sched/fair.c#L79-81)**, um die Reaktionsfähigkeit des Desktops zu verbessern.

* **[BORE](https://github.com/firelzrd/bore-scheduler) (Burst-Oriented Response Enhancer):** Für Benutzer, die maximale Interaktivität benötigen, unterstützen unsere Kernel den BORE-Scheduler, ein Patchset, das EEVDF erweitert, um bei intensiven Arbeitslasten ein flüssigeres Erlebnis zu bieten.

Weitere Informationen über die von CachyOS angebotenen Kernel und das sched-ext Framework findest du in der Dokumentation zu **[Kernel](/de/features/kernel)** und **[sched-ext](/de/configuration/sched-ext)**.

## Benutzerfreundliche Werkzeuge und Anpassungsmöglichkeiten

### [Automatisierte Hardware-Erkennung](/de/features/chwd)

CachyOS enthält ein benutzerdefiniertes Werkzeug zur Hardware-Erkennung, das automatisch die notwendigen Treiber und Pakete für dein System identifiziert und installiert. Dies erspart die manuelle Treibersuche und spart dir nach der Installation Zeit und Mühe.

### Anpassbarer Installationsprozess

Der CachyOS-Installer ermöglicht es Benutzern, ihr System anzupassen, indem sie die Desktop-Umgebung, Pakete, Dateisystem, Bootmanager, Kernel und mehr nach ihren Bedürfnissen auswählen:

* [Desktop-Umgebungen](/de/installation/desktop_environments/)
* [Bootmanager](/de/installation/boot_managers/)
* [Kernel-Varianten](/de/features/kernel#varianten)
* [Dateisysteme](/de/installation/filesystem)
* [Benutzerdefinierte Pakete, die während der Installation eingeschlossen werden sollen](https://github.com/CachyOS/cachyos-calamares/blob/cachyos-limine-qt6/src/modules/netinstall/netinstall.yaml)

### Benutzerdefinierte CachyOS-Anwendungen

CachyOS entwickelt und pflegt eine eigene Suite von Anwendungen, um die Systemverwaltung zu vereinfachen und dein Erlebnis zu verbessern.

Liste der Anwendungen, die CachyOS derzeit entwickelt und pflegt:

* **[CachyOS Hello](https://github.com/CachyOS/CachyOS-Welcome):** Eine Willkommensanwendung zur Steuerung von Optimierungen, zur Anwendung von Korrekturen und zur Installation von Paketen.
* **[CachyOS Package Installer](https://github.com/CachyOS/packageinstaller):** Eine grafische Benutzeroberfläche (GUI) zur einfachen Installation von Anwendungen.
* **[CachyOS Kernel Manager](https://github.com/CachyOS/kernel-manager):** Installiere einfach Kernel aus dem Repository, konfiguriere deine eigenen und verwalte das `sched-ext` Framework.
* **[cachyos-rate-mirrors](https://github.com/CachyOS/rate-mirrors):** Ordnet automatisch Arch- und CachyOS-Spiegelserver für optimale Download-Geschwindigkeiten mit `pacman`.
* **[systemd-boot-manager](https://github.com/CachyOS/systemd-boot-manager):** Erstellt automatisch neue Boot-Einträge für `systemd-boot`, die einfach über `/etc/sdboot-manage.conf` konfiguriert werden können.

## Eine freundliche und aktive Community

Die größte Stärke von CachyOS ist seine wachsende Community. Community-Mitglieder helfen sich gegenseitig, indem sie Tipps austauschen, Unterstützung bieten und zum Erfolg des Projekts beitragen. Dein Feedback hilft uns, das CachyOS-Erlebnis kontinuierlich zu verbessern.

Schließ dich uns an und werde Teil der Community auf dem **[CachyOS Discord](https://discord.gg/cachyos-862292009423470592)** und im **[CachyOS Forum](https://discuss.cachyos.org/)**.
