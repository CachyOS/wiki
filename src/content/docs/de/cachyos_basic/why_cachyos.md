---
title: Warum CachyOS?
description: Warum CachyOS möglicherweise besser für dich ist
---

CachyOS bietet eine ausgereifte Arch-Erfahrung, komplett mit einem benutzerfreundlichen Installationsprogramm, vorkonfigurierten Desktops und Leistungsoptimierungen, ohne die Benutzerfreundlichkeit und Sicherheit des Systems zu beeinträchtigen. Im Folgenden sind einige der wichtigsten Funktionen aufgeführt, die CachyOS bietet, um ein hervorragendes Desktop-Erlebnis zu gewährleisten.

## Optimierte Pakete und Repositories

CachyOS bietet optimierte Pakete für verschiedene Hardwarekonfigurationen, einschließlich x86-64-v3-, x86-64-v4- und Zen4+-Systeme, um die Gesamtleistung des Systems zu verbessern. Darüber hinaus liefert CachyOS häufig angefragte [AUR](https://aur.archlinux.org/)-Pakete von Benutzern für QoL-Verbesserungen (Quality of Life).

Für eine bessere Vorstellung von den verschiedenen Paketen, die CachyOS optimiert hat, siehe [Optimierte Repositories](/de/features/optimized_repos).

## Angepasster Kernel, optimiert für Leistung und Stabilität

Abgesehen vom CachyOS-Basiskernel-Patchset, das verschiedene Kernelparameter optimiert, um die Reaktionsfähigkeit des Desktops zu verbessern, übernimmt CachyOS auch vielversprechende
Patchsets, die noch nicht in den Mainline-Kernel übernommen wurden oder sich nicht in der stabilen Revision des Kernels befinden. Diese Patches werden intern getestet, bevor sie an die Benutzer ausgeliefert werden,
um sicherzustellen, dass die Stabilität nicht beeinträchtigt wird. Eine vollständige Liste der von CachyOS bereitgestellten Patches finden Sie unter [Kernel](/de/features/kernel).

## Unterstützung für benutzerdefinierte CPU-Scheduler

Die CPU Scheduler ist ein wichtiger Bestandteil des Kernels, um sicherzustellen, dass alle Aufgaben fair CPU-Zeit zugewiesen bekommen. Der Linux-Kernel implementiert verschiedene Planungsklassen,
um sicherzustellen, dass jede Aufgabe angemessen geplant wird. Die Fair-Scheduling-Klasse, besser bekannt als "Standard-Scheduler", basiert auf dem
[EEVDF-Algorithmus (Earliest Eligible Virtual Deadline First)](https://lwn.net/Articles/925371/).

Standardmäßig ist EEVDF darauf ausgelegt, die verfügbare CPU-Zeit fair auf alle Aufgaben aufzuteilen und ist hauptsächlich auf durchsatzorientierte Workloads ausgerichtet. Der CachyOS-Kernel
[konfiguriert einige EEVDF-Tunables](https://github.com/CachyOS/linux/blob/6.12/cachy/kernel/sched/fair.c#L76-L79), um die Reaktionsfähigkeit des Desktops gegenüber
reinem Durchsatz zu priorisieren.

EEVDF war jedoch von vornherein nicht für die Desktop-Interaktivität gedacht. Vor diesem Hintergrund liefert CachyOS Kernel aus, die mit dem
[BORE-Scheduler (Burst-Oriented Response Enhancer)](https://github.com/firelzrd/bore-scheduler) gepatcht sind, der eine zusätzliche Eigenschaft
einführt, um Aufgaben, die eine hohe Reaktionsfähigkeit erfordern, mehr CPU-Zeit zuzuweisen als Aufgaben, die dies nicht tun, basierend auf ihrer "Burstiness".

In 6.12 ermöglicht der Linux-Kernel das Hotpluggen von BPF-Schedulern und das Ersetzen der Fair-Scheduling-Klasse durch einen anderen Scheduler. Um dies zu ermöglichen,
bietet CachyOS erstklassige Unterstützung für [sched-ext-Scheduler](https://github.com/sched-ext/scx).

Weitere Informationen über die von CachyOS angebotenen Kernel und sched-ext-Scheduler finden Sie unter [Kernel](/de/features/kernel) und [sched-ext](/de/configuration/sched-ext/).

## Hardware-Erkennung

CachyOS liefert sein eigenes [Hardware-Erkennungstool](https://github.com/CachyOS/chwd) mit, das die notwendigen Pakete und Treiber für jedes System korrekt installiert, um Benutzern die Last der Nachinstallations-Einrichtung abzunehmen.

## Anpassbarer Installationsprozess

Der CachyOS-Installer garantiert, dass Benutzer die Wahl haben, welches System sie möchten. Diese Anpassbarkeit umfasst unter anderem:
- [Desktop-Umgebungen](/de/installation/desktop_environments/)
- [Bootmanager](/de/installation/boot_managers/)
- [Kernel-Varianten](/de/features/kernel#varianten)
- [Dateisysteme](/de/installation/filesystem)
- Benutzerdefinierte Pakete, die während des Installationsprozesses installiert werden sollen

## CachyOS-Anwendungen

Standardmäßig bietet CachyOS eigene Anwendungen wie CachyOS Hello oder CachyOS Package Installer an.
Standardmäßig werden benutzerfreundliche Anwendungen wie CachyOS Hello und CachyOS Package Installer von CachyOS bereitgestellt, um Ihre Linux-Erfahrung zu vereinfachen und zu verbessern.
CachyOS Hello bietet beispielsweise Optionen zum Aktualisieren Ihres Systems, zum Aktivieren von Diensten und zum Ranking der Spiegelserver. Es bietet auch Ein-Klick-Tweaks und -Fixes für einige häufige Probleme. Der Package Installer hilft Ihnen bei der Installation von Paketen.

Liste der Anwendungen, die CachyOS entwickelt und pflegt:

- **CachyOS Kernel Manager**: Installieren Sie einfach Kernel aus dem Repository oder konfigurieren Sie Ihren eigenen Kernel und fügen Sie Ihre eigenen Patches hinzu und verwalten Sie sogar das Sched-Ext-Framework über den [scx_loader](<https://github.com/sched-ext/scx/tree/main/rust/scx_loader>).
- **CachyOS Hello**: Anwendung zur Steuerung von Tweaks, zum Anwenden von Fixes, zur Paketinstallation und für weitere Informationen über CachyOS.
- **CachyOS Package Installer**: GUI für eine einfache Installation häufig verwendeter Anwendungen.
- **cachyos-rate-mirrors**: Automatisches Ranking von Arch- und CachyOS-Spiegelservern für optimale Download-Geschwindigkeiten.
- **systemd-boot-manager**: Generiert automatisch neue Einträge für den systemd-boot-manager und kann einfach in `/etc/sdboot-manage.conf` konfiguriert werden.

## Freundliche und aktive Community

Das wichtigste Highlight ist die stetig wachsende Community von CachyOS. Ohne die Community wäre CachyOS niemals in der Lage, dorthin zu gelangen, wo es jetzt ist.
Die Community unterstützt sich gegenseitig und teilt Tipps und Tricks für eine bessere Linux-Erfahrung. Treten Sie uns im
[CachyOS Discord](https://discord.com/invite/cachyos-862292009423470592) oder im [CachyOS Forum](https://discuss.cachyos.org/) bei.
