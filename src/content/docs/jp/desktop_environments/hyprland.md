---
title: Hyprland-Konfiguration
description: CachyOS Hyprland Keybinds & FAQ
---

:::caution
Da Hyprland mit seiner Überarbeitung begonnen hat, beachte bitte, dass es derzeit nicht stabil ist und du Fehler/unerwartete Abstürze erleben kannst. Benutzung auf eigene Gefahr.
Selbst ihre "stabile" Version ist fehlerhaft und buggy, daher planen wir keine Unterstützung außerhalb unserer Dotfiles anzubieten. Beziehe dich stattdessen auf ihr [Wiki](<https://wiki.hyprland.org/>).
:::

:::tip
Starte Hyprland mit dem Nicht-Systemd-Eintrag, da es sonst nicht startet und zu einem schwarzen Bildschirm führt.

Beispiel: **`Hyprland`** anstelle von **`Hyprland(systemd)`**.
:::

Unser Hauptziel bei unserem Setup ist es, ein funktionierendes Hyprland zu haben, es aber einfach zu halten, daher fehlen möglicherweise einige wichtige Tools und Programme, wie z. B. ein GUI-Dateimanager.

Wirf einen Blick in unsere [Hyprland FAQ.](/de/desktop_environments/hyprland#tastenkombinationen)

**Dotfiles gepflegt von [msmafra](https://github.com/msmafra) und [Lysec](https://github.com/Ly-sec)**

## Tastenkombinationen

Die meisten Tastenkombinationen erfordern die Verwendung der Mod-Taste, die in unserem Fall die Windows-Taste ist (als SUPER bezeichnet). Du kannst sie in der Konfigurationsdatei ändern.

### Terminal öffnen

* SUPER + Return

### Zum Arbeitsbereich wechseln (1-9)

* SUPER + 1-9 (Zahlenreihe, Ziffernblock zählt nicht)

### Fokus ändern auf (Links, Rechts, Oben, Unten)

* SUPER + Pfeiltasten

### Zwischen Arbeitsbereichen mit dem Scrollrad wechseln

* Super + Scrollen

### Zwischen Arbeitsbereichen mit Komma und Punkt wechseln

* Super + Punkt (Nächster Arbeitsbereich)
* Super + Komma (Vorheriger Arbeitsbereich)

### Fokussiertes Fenster in den Arbeitsbereich verschieben (1-9), aber nicht dorthin wechseln

* SUPER + Shift + 1-9

### Gleiches wie oben, aber auch zu diesem Arbeitsbereich wechseln

* SUPER + STRG + 1-9

### Rofi öffnen (Program Launcher)

* SUPER + Leertaste

### Fokussiertes Fenster schließen

* SUPER + Q

### Fokussiertes Fenster in Richtung bewegen (Oben, Unten, Links, Rechts)

* SUPER + Shift + Pfeiltasten

### Größe des fokussierten Fensters ändern

* SUPER + STRG + Shift + J (Abwärts)
* SUPER + STRG + Shift + K (Aufwärts)
* SUPER + STRG + Shift + H (Links)
* SUPER + STRG + Shift + L (Rechts)
* SUPER + STRG + Shift + Pfeiltaste (Beliebige Richtung)

### Fokussiertes Fenster in den Floating- oder Vollbildmodus schalten

* SUPER + F (Vollbild)
* SUPER + V (Floating)

### Resize-Submap-Zustand aufrufen (Ermöglicht Größenänderung), H, J, K, L oder über Pfeiltasten

* SUPER + R
* ESC zum Beenden

### Fenster durch Ziehen mit der Maus verschieben

* SUPER + Linksklick

### Fenstergröße ändern

* SUPER + Rechtsklick (gedrückt halten und den Cursor in eine beliebige Richtung ziehen)

### Lautstärkeregelung (Multimedia-Tasten) wie z. B. VolUP, VolDOWN und MUTE

### Helligkeitsregelung sollte je nach Hardware funktionieren

### Wiedergabesteuerung zum Anhalten, Abspielen, Nächster und Vorheriger über Multimedia-Tasten (Laptop oder Tastatur)

### Fokussiertes Fenster anheften, damit es in allen Arbeitsbereichen angezeigt wird (Floating)

* SUPER + Y

### Aktuelles Fenster zu einer Gruppe hinzufügen

* SUPER + K

### Aktive Gruppe wechseln

* SUPER + TAB

### Waybar neu laden

* SUPER + O

### Abstand zwischen Fenstern verringern

* SUPER + G

### Abstände auf Standardwert zurücksetzen

* SUPER + Shift + G

### Dateimanager öffnen (Variable standardmäßig nicht konfiguriert)

* SUPER + E

### Screenshot

* Druck (PrtSc)

## FAQ

### Warum haben mein Discord, Thunar und Nautilus einen seltsamen Hintergrund?

Dies liegt daran, dass das Fenster eine geänderte Deckkraft hat.

* Erwäge, die Fensterregel in der [Hyprland](https://github.com/CachyOS/cachyos-hyprland-settings/blob/master/etc/skel/.config/hypr/config/windowrules.conf#L21) Konfigurationsdatei zu ändern.

```sh title='Beispiel'
windowrulev2 = opacity 0.92, class:^(thunar|nemo)$
```

### Ist ein Dateimanager enthalten?

* Nein, installiere einen, der dir gefällt
