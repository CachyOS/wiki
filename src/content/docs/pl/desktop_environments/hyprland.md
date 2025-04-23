---
title: Konfiguracja Hyprland
description: Skróty klawiszowe i FAQ dla Hyprland w CachyOS
---

:::caution
Ponieważ Hyprland rozpoczął swoją przebudowę, prosimy mieć na uwadze, że obecnie nie jest stabilny i mogą wystąpić błędy/niespodziewane awarie. Używaj na własne ryzyko.
Nawet ich "stabilna" wersja jest również zepsuta i pełna błędów, dlatego nie planujemy zapewniać wsparcia poza naszymi plikami konfiguracyjnymi. Zamiast tego odwołaj się do ich [wiki](<https://wiki.hyprland.org/>).
:::

:::tip
Uruchom Hyprland używając wpisu bez systemd, w przeciwnym razie nie uruchomi się i doprowadzi do czarnego ekranu.

Przykład: **`Hyprland`** zamiast **`Hyprland(systemd)`**.
:::

Naszym głównym celem przy tworzeniu tej konfiguracji jest zapewnienie działającego Hyprland, przy jednoczesnym zachowaniu prostoty, dlatego mogą brakować niektórych niezbędnych narzędzi i programów, takich jak graficzny menedżer plików.

Zapoznaj się z naszym [FAQ dotyczącym Hyprland.](/pl/desktop_environments/hyprland#faq)

**Pliki konfiguracyjne utrzymywane przez [msmafra](https://github.com/msmafra) i [Lysec](https://github.com/Ly-sec)**

## Skróty klawiszowe

Większość kombinacji klawiszy wymaga użycia klawisza modyfikującego, którym w naszym przypadku jest klawisz Windows (określany jako SUPER), możesz go zmienić w pliku konfiguracyjnym.

### Otwórz terminal

*   SUPER + Enter

### Przejdź do przestrzeni roboczej (1-9)

*   SUPER + 1-9 (Rząd cyfr, klawiatura numeryczna się nie liczy)

### Zmień aktywne okno na (Lewo, Prawo, Góra, Dół)

*   SUPER + Klawisze strzałek

### Przełączaj między przestrzeniami roboczymi za pomocą kółka myszy

*   Super + Kółko myszy

### Przełączaj między przestrzeniami roboczymi za pomocą przecinka i kropki

*   Super + Kropka (Następna przestrzeń robocza)
*   Super + Przecinek (Poprzednia przestrzeń robocza)

### Przenieś aktywne okno do przestrzeni roboczej (1-9), ale nie przechodź do niej

*   SUPER + Shift + 1-9

### To samo co powyżej, ale przełącz się również do tej przestrzeni roboczej

*   SUPER + CTRL + 1-9

### Otwórz Rofi (Uruchamianie programów)

*   SUPER + Spacja

### Zamknij aktywne okno

*   SUPER + Q

### Przesuń aktywne okno w kierunku (Góra, Dół, Lewo, Prawo)

*   SUPER + Shift + Klawisze strzałek

### Zmień rozmiar aktywnego okna

*   SUPER + CTRL + Shift + J (W dół)
*   SUPER + CTRL + Shift + K (W górę)
*   SUPER + CTRL + Shift + H (W lewo)
*   SUPER + CTRL + Shift + L (W prawo)
*   SUPER + CTRL + Shift + Klawisz strzałki (Dowolny kierunek)

### Przełącz aktywne okno w tryb Pływający lub Pełnoekranowy

*   SUPER + F (Pełny ekran)
*   SUPER + V (Pływające)

### Wejdź w tryb podmapy zmiany rozmiaru (pozwala na zmianę rozmiaru), H,J,K,L lub za pomocą klawiszy strzałek

*   SUPER + R
*   ESC aby wyjść

### Przesuń okno przeciągając myszą

*   SUPER + Lewy przycisk myszy

### Zmień rozmiar okna

*   SUPER + Prawy przycisk myszy (przytrzymaj i przeciągnij kursor w dowolnym kierunku)

### Kontrola głośności (Klawisze multimedialne) takie jak Zwiększ głośność, Zmniejsz głośność i Wycisz

### Kontrola jasności powinna działać w zależności od sprzętu

### Kontrola odtwarzania do pauzowania, odtwarzania, następnego i poprzedniego utworu za pomocą klawiszy multimedialnych (Laptop lub klawiatura)

### Przypnij aktywne okno, aby było widoczne we wszystkich przestrzeniach roboczych (Pływające)

*   SUPER + Y

### Przełącz bieżące okno do grupy

*   SUPER + K

### Zmień aktywną grupę

*   SUPER + TAB

### Przeładuj Waybar

*   SUPER + O

### Zmniejsz odstęp między oknami

*   SUPER + G

### Zresetuj odstępy do wartości domyślnej

*   SUPER + Shift + G

### Otwórz menedżer plików (zmienna domyślnie nieskonfigurowana)

*   SUPER + E

### Zrzut ekranu

*   Print Screen (PrtSc)

## FAQ

### Dlaczego mój Discord, Thunar i Nautilus mają dziwne tło?

Dzieje się tak, ponieważ okno ma zmodyfikowaną przezroczystość

*   Rozważ modyfikację reguły okna w pliku konfiguracyjnym [Hyprland](https://github.com/CachyOS/cachyos-hyprland-settings/blob/master/etc/skel/.config/hypr/config/windowrules.conf#L21).

```sh title='Przykład'
windowrulev2 = opacity 0.92, class:^(thunar|nemo)$
```

### Czy jest dołączony Menedżer Plików?

*   Nie, zainstaluj taki, który Ci odpowiada
