---
title: Qtile-Konfiguration
description: CachyOS Qtile Tastenkombinationen & FAQ
---

Ein Dank geht an [Shendisx](<https://github.com/Shendisx>) für die Erstellung dieses Qtile-Setups.

> X11- und Wayland-Sitzung

## Tastenkombinationen

Die meisten Tastenkombinationen erfordern die Verwendung der Mod-Taste, die in unserem Fall die Windows-Taste ist (als SUPER bezeichnet). Du kannst sie in der Konfigurationsdatei ändern.
Einige von ihnen verwenden möglicherweise mod1 (ALT-Taste).

### Terminal öffnen

* SUPER + Return

### Fokussiertes Fenster schließen

* SUPER + Q

### Zum Arbeitsbereich wechseln (1-9)

* SUPER + 1-9 (Zahlenreihe, Ziffernblock zählt nicht)

### Rofi öffnen (Programmstarter)

* ALT + Leertaste

### Fokus verschieben nach (Links, Rechts, Unten, Oben)

* SUPER + H (Links)
* SUPER + L (Rechts)
* SUPER + J (Unten)
* SUPER + K (Oben)
* SUPER + Leertaste (Fenster zwischen linken/rechten Spalten verschieben oder in aktuellem Stapel nach oben/unten bewegen)

### Fokussiertes Fenster verschieben nach (Links, Rechts, Unten, Oben)

* SUPER + Shift + H (Links)
* SUPER + Shift + L (Rechts)
* SUPER + Shift + J (Unten)
* SUPER + Shift + K (Oben)

### Fokussiertes Fenster vergrößern nach (Links, Rechts, Unten, Oben)

* SUPER + Control + H (Links)
* SUPER + Control + L (Rechts)
* SUPER + Control + J (Unten)
* SUPER + Control + K (Oben)

### Alle Fenstergrößen des aktuellen Arbeitsbereichs auf ihre ursprüngliche Größe zurücksetzen

* SUPER + N

### Vollbild im fokussierten Fenster umschalten

* SUPER + F

### Floating-Modus im fokussierten Fenster umschalten

* SUPER + V

### Zwischen geteilten und ungeteilten Seiten des Stapels umschalten

* SUPER + Shift + Return

### Zwischen Layouts umschalten

* SUPER + TAB

### Qtile-Konfigurationsdatei neu laden

* SUPER + Control + R

### Qtile beenden (laufende X-Sitzung beenden)

* SUPER + Control + Q

### Flameshot ausführen (Dienstprogramm zum Erstellen von Screenshots)

* Drucken

### Einen Vollbild-Screenshot erstellen (Gespeichert in $HOME/Pictures)

* Control + Drucken

### Dateimanager öffnen (standardmäßig Thunar)

* SUPER + E

### Ein schwebendes Fenster mit der Maus ziehen

* SUPER + Linksklick

### Ein schwebendes Fenster mit der Maus vergrößern

* SUPER + Rechtsklick

### Fenster in den Vordergrund bringen

* SUPER + Scrollradtaste

### Fenster fixieren (z. B. folgt ein fixiertes Firefox-PIP nun zwischen Arbeitsbereichen)

* SUPER + S

## FAQ

### Warum zeigt das Lautstärke-Widget einen Fehler an oder ist bei 0 % stehen geblieben?

* Manchmal liegt dies daran, dass das Qtile-Lautstärke-Widget dein Standard-Ausgabegerät nicht erkennen kann. Weitere Informationen findest du im Wiki.
* <https://docs.qtile.org/en/latest/manual/ref/widgets.html#pulsevolume>

### Gibt es ein autostart.sh-Skript?

* Es befindet sich in scripts/ im Qtile-Ordner

### Interagiert die Qtile-Leiste mit der Maus?

* Ja, zum Beispiel wechselst du zum linken oder rechten Arbeitsbereich oder klickst sogar auf einen von ihnen, wenn du auf den kleinen Punkten scrollst, die deine Arbeitsbereiche darstellen (Aktiv, Inaktiv, Leer usw.).
* Ein weiteres Beispiel ist das Layout (standardmäßig Spalten). Durch Klicken darauf kannst du zwischen den verfügbaren Layouts wechseln.
* CPU- und RAM-Auslastung: Durch Klicken darauf wird Btop (TUI System Monitor) geöffnet.
* Erhöhen/Verringern/Stummschalten durch Interaktion mit dem Lautstärke-Widget

Weitere Informationen zu Qtile findest du in deren Wiki.

* <https://docs.qtile.org/en/stable/>
