---
title: CachyOS CLI Installer Changelog
description: Changelogs CLI Installer
---
# 0.8.4

## Features ✨

- **Verbesserte Partitionshandhabung:** Die Handhabung von Partitionen durch den Installer wurde grundlegend überarbeitet und verbessert, was zu einer höheren Genauigkeit und Zuverlässigkeit führt.
- **Generierung von Kernel-Parametern:** Der Installer generiert jetzt automatisch Kernel-Parameter basierend auf dem erkannten Partitionsschema.
- **Verbesserte `gucc`-Bibliothek:** Die `gucc`-Bibliothek wurde erheblich erweitert und umfasst nun Funktionen zur Installation und Konfiguration von Refind.

## Aufräumarbeiten 🧹

- **Clang-Format und Clang-Tidy:** Die Konsistenz und Qualität der Codebasis wurden durch die Anwendung von clang-format und clang-tidy verbessert.
- **Refactoring mit String Views:** In mehreren Bereichen der Codebasis werden jetzt string_view-Literale verwendet, um die Leistung und Lesbarkeit zu verbessern.
- **Doctest-Implementierung:** C-Asserts wurden durch Doctest ersetzt, um robustere und informativere Tests zu ermöglichen.
- **Refaktorierte Tests:** Testsuiten wurden zur besseren Übersichtlichkeit und Wartbarkeit refaktorisiert.
- **Refind-Handhabung in `gucc`:** Refind-bezogener Code wurde refaktorisiert und zur besseren Organisation und Wartbarkeit in die `gucc`-Bibliothek verschoben.

## Bugfixes 🐛

- **Btrfs-Subvolume-Erkennung:** Probleme bei der Erkennung vorhandener Btrfs-Subvolumes wurden behoben.
- **Genauigkeit der Partitionsinformationen:** Es wurden Verbesserungen vorgenommen, um die genaue Erfassung und Anzeige von Partitionsinformationen sicherzustellen.
- **Root-Mountpunkt für Refind:** Ein Fehler, der den von Refind verwendeten Root-Mountpunkt betraf, wurde behoben.
- **UUID-Erkennung:** Der Prozess der Erkennung von Partitions-UUIDs während der Initialisierung wurde verbessert.
- **Meson-Build-Fixes:** Probleme, die während des Meson-Build-Prozesses aufgetreten sind, wurden behoben.
- **Btrfs-Subvolume-Anhängen:** Ein Fehler im Zusammenhang mit dem Anhängen von Btrfs-Subvolumes in Entwicklungsumgebungen wurde behoben.
- **Rootfs in vordefinierten Konfigurationen:** Ein Problem mit dem Rootfs von Partitionsschemas, die von vordefinierten Konfigurationen abgeleitet wurden, wurde behoben.
- **Refind Read-Write Mounting:** Sichergestellt, dass Refind die notwendigen Partitionen mit Lese- und Schreibberechtigungen mountet.

# 0.8.3

## Aufräumarbeiten 🧹

- Die CPR-Abhängigkeit wurde auf eine neuere Version aktualisiert, um die Funktionalität zu verbessern.
- CTRE (Compile Time Regular Expressions library) wurde explizit angewiesen, den C++23-Standard für Konsistenz und potenzielle Leistungsverbesserungen zu verwenden.
- Das Timeout für die Verbindungsprüfung im Abschnitt "Utilities" wurde erhöht, um potenziellen Netzwerkverzögerungen oder langsamen Antworten Rechnung zu tragen.

# 0.8.2

## Fixes 🐛

- Es wurde ein Problem behoben, bei dem "gucc" Btrfs-Subvolume-Mountpoints nicht korrekt verarbeitete.
- "gucc" wurde verbessert, um verschiedene Btrfs-Subvolume-Mount-Status zu verarbeiten.

## Aufräumarbeiten 🧹

- Ein Tippfehler in der README-Datei wurde korrigiert und die Versionsinformationen wurden aktualisiert.

# 0.8.1

## Fixes 🐛

- Es wurde ein Problem behoben, bei dem ISA-Repos auf Oracle VM fälschlicherweise aktiviert wurden.
- Befehlsstil-Inkonsistenzen wurden behoben, um die Benutzerfreundlichkeit zu verbessern.

## Aufräumarbeiten 🧹

- Unnötige Ucode-Logik im Zusammenhang mit Refind wurde entfernt, wodurch die Codebasis gestrafft wurde.

# 0.8.0

## Features ✨

- Parser für Netzwerkpaketprofile hinzugefügt.
- Die Möglichkeit eingeführt, Umgebungspakete aus einer von gucc geparsten TOML-Datei abzurufen.
- Eine Hilfsfunktion in gucc implementiert, um Dateien von URLs herunterzuladen 📥.
- Unterstützung für das Abrufen von Netzwerkprofilen von einer URL mit einem Fallback-Mechanismus innerhalb von gucc hinzugefügt.
- Die Installation von Netzwerkprofilen wurde in die binäre Distribution integriert.
- Das Mounten der angegebenen Partitionen und die Erkennungslogik wurden in gucc verschoben.
- `utils::exec_checked` für eine sicherere Ausführung externer Befehle eingeführt.

## Verbesserungen ✅

- Die Testabdeckung für die Crypttab-Funktionalität in gucc wurde verbessert 🧪.
- Die Protokollierung in gucc wurde durch die entsprechende Einrichtung des Loggers verbessert.
- **C++-Version auf C++23 aktualisiert** ⬆️.
- Die Codebasis wurde refaktorisiert, um C++23-Funktionen wie `std::ranges` und `contains` für eine bessere Lesbarkeit und Effizienz zu nutzen.
- Verschiedene Komponenten wurden refaktorisiert, um `utils::exec_checked` zu verwenden.

## Fixes 🐛

- Es wurde ein Problem mit fest codierten Bibliothekstypen in gucc behoben.
- Fehlende Logger-Implementierung und Header-Datei in gucc behoben.
- Die CPR-Bibliothek für Builds in Nicht-Entwicklungsumgebungen aktiviert.
- Der statische Build-Prozess wurde korrigiert.
- Probleme behoben, die in Commit [`a70e641e364`](https://github.com/CachyOS/New-Cli-Installer/commit/a70e641e364) eingeführt wurden.
- Kompilierungsfehler in der TUI-Komponente behoben.
- Ein Abhängigkeitsproblem behoben, bei dem die Abhängigkeit von FTXUI von range-v3 nicht öffentlich war.

## Aufräumarbeiten 🧹

- CI-Prüfungen, Build-Prozesse aktualisiert und zugehörige Probleme behoben.
- Die zurückgesetzte Installation von Netzwerkprofilen zusammen mit der binären Distribution wurde entfernt.
- Code in verschiedenen Komponenten refaktorisiert und bereinigt: TUI, utils, chwd_profiles, user und tests.
- Die nicht verwendete range-v3-Bibliothek aus den Installer-Abhängigkeiten entfernt.
- README-Datei aktualisiert.
