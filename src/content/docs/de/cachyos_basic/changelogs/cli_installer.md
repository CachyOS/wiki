---
title: CLI-Installer
description: Changelogs für den CLI-Installer
---
# 0.8.4

## Funktionen ✨

- **Verbesserte Partitionsverwaltung:** Der Umgang des Installers mit Partitionen wurde umfassend überarbeitet und verbessert, was zu einer höheren Genauigkeit und Zuverlässigkeit führt.
- **Generierung von Kernel-Parametern:** Der Installer generiert Kernel-Parameter nun automatisch auf Basis des erkannten Partitionsschemas.
- **Erweiterte `gucc`-Bibliothek:** Die `gucc`-Bibliothek wurde erheblich erweitert und umfasst nun auch Funktionen zur Installation und Konfiguration von refind.

## Wartungsarbeiten 🧹

- **Clang-Format und Clang-Tidy:** Die Konsistenz und Qualität der Codebasis wurden durch den Einsatz von clang-format und clang-tidy verbessert.
- **Refactoring mit String Views:** Mehrere Bereiche der Codebasis nutzen nun string_view-Literale für eine bessere Leistung und Lesbarkeit.
- **Doctest-Implementierung:** C-Asserts wurden durch doctest ersetzt, um robustere und aussagekräftigere Tests zu ermöglichen.
- **Überarbeitete Tests:** Test-Suites wurden für bessere Übersichtlichkeit und Wartbarkeit überarbeitet.
- **refind-Verarbeitung in `gucc`:** Der refind-bezogene Code wurde überarbeitet und zur besseren Strukturierung und Wartbarkeit in die `gucc`-Bibliothek verschoben.

## Fehlerbehebungen 🐛

- **Erkennung von Btrfs-Subvolumes:** Probleme bei der Erkennung vorhandener Btrfs-Subvolumes wurden behoben.
- **Genauigkeit der Partitionsinformationen:** Es wurden Verbesserungen vorgenommen, um die genaue Erfassung und Anzeige von Partitionsinformationen sicherzustellen.
- **Root-Einhängepunkt für refind:** Ein Fehler beim von refind verwendeten Root-Einhängepunkt wurde behoben.
- **UUID-Erkennung:** Der Prozess zur Erkennung von Partitions-UUIDs während der Initialisierung wurde verbessert.
- **Meson-Build-Korrekturen:** Probleme, die während des Meson-Build-Prozesses auftraten, wurden behoben.
- **Anhängen von Btrfs-Subvolumes:** Ein Fehler beim Anhängen von Btrfs-Subvolumes in Entwicklungsumgebungen wurde behoben.
- **Rootfs in vordefinierten Konfigurationen:** Ein Problem mit dem Rootfs von Partitionsschemata, die aus vordefinierten Konfigurationen abgeleitet wurden, wurde behoben.
- **Lese-/Schreib-Einhängen für refind:** Es wurde sichergestellt, dass refind die erforderlichen Partitionen mit Lese- und Schreibrechten einhängt.

# 0.8.3

## Wartungsarbeiten 🧹

- Die CPR-Abhängigkeit wurde für erweiterte Funktionalität auf eine neuere Version aktualisiert.
- CTRE (Compile Time Regular Expressions-Bibliothek) wurde explizit angewiesen, den C++23-Standard für bessere Konsistenz und potenzielle Leistungssteigerungen zu verwenden.
- Das Timeout für die Verbindungsprüfung im Utilities-Bereich wurde erhöht, um mögliche Netzwerkverzögerungen oder langsame Antworten abzufangen.

# 0.8.2

## Fehlerbehebungen 🐛

- Ein Problem wurde behoben, bei dem „gucc“ Einhängepunkte von Btrfs-Subvolumes nicht korrekt verarbeitete.
- „gucc“ wurde verbessert, um verschiedene Einhängezustände von Btrfs-Subvolumes zu verarbeiten.

## Wartungsarbeiten 🧹

- Ein Tippfehler in der README-Datei wurde behoben und die Versionsinformationen wurden aktualisiert.

# 0.8.1

## Fehlerbehebungen 🐛

- Ein Problem wurde behoben, bei dem ISA-Repositories auf Oracle VM fälschlicherweise aktiviert wurden.
- Inkonsistenzen beim Befehlsstil wurden für eine bessere Benutzerfreundlichkeit behoben.

## Wartungsarbeiten 🧹

- Unnötige ucode-Logik im Zusammenhang mit refind wurde entfernt, um die Codebasis zu verschlanken.

# 0.8.0

## Funktionen ✨

- Parser für Netzwerk-Paketprofile hinzugefügt.
- Möglichkeit eingeführt, Umgebungspakete aus einer von gucc geparsten TOML-Datei abzurufen.
- Eine Hilfsfunktion in gucc zum Herunterladen von Dateien über URLs implementiert 📥.
- Unterstützung zum Abrufen von Netzwerkprofilen über eine URL mit einem Fallback-Mechanismus in gucc hinzugefügt.
- Die Installation von Netzwerkprofilen wurde in die Binärdistribution integriert.
- Das Einhängen angegebener Partitionen sowie die Erkennungslogik wurden in gucc verschoben.
- `utils::exec_checked` für eine sicherere Ausführung externer Befehle eingeführt.

## Verbesserungen ✅

- Testabdeckung für die crypttab-Funktionalität in gucc erweitert 🧪.
- Logging in gucc durch korrekte Einrichtung des Loggers verbessert.
- **C++-Version auf C++23 aktualisiert** ⬆️.
- Codebasis überarbeitet, um C++23-Funktionen wie `std::ranges` und `contains` für bessere Lesbarkeit und Effizienz zu nutzen.
- Verschiedene Komponenten überarbeitet, um `utils::exec_checked` zu verwenden.

## Fehlerbehebungen 🐛

- Ein Problem mit fest codierten Bibliothekstypen in gucc behoben.
- Fehlende Logger-Implementierung und Header-Datei in gucc behoben.
- CPR-Bibliothek für Builds außerhalb von Entwicklungsumgebungen aktiviert.
- Statischen Build-Prozess korrigiert.
- Probleme behoben, die mit Commit [`a70e641e364`](https://github.com/CachyOS/New-Cli-Installer/commit/a70e641e364) eingeführt wurden.
- Kompilierungsfehler in der TUI-Komponente behoben.
- Ein Abhängigkeitsproblem korrigiert, bei dem die Abhängigkeit von FTXUI auf range-v3 nicht öffentlich war.

## Wartungsarbeiten 🧹

- CI-Prüfungen und Build-Prozesse aktualisiert sowie zugehörige Probleme behoben.
- Die rückgängig gemachte Installation von Netzwerkprofilen zusammen mit der Binärdistribution entfernt.
- Code in verschiedenen Komponenten überarbeitet und bereinigt: TUI, utils, chwd_profiles, user und Tests.
- Die ungenutzte Bibliothek range-v3 aus den Installer-Abhängigkeiten entfernt.
- README-Datei aktualisiert.
