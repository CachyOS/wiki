---
title: Konfiguracja Qtile
description: Skróty klawiszowe i FAQ Qtile w CachyOS
---

Podziękowania dla [Shendisx](<https://github.com/Shendisx>) za stworzenie tej konfiguracji Qtile.

> Sesja X11 i Wayland

## Skróty klawiszowe

Większość kombinacji klawiszy wymaga użycia klawisza modyfikującego (mod key), którym w naszym przypadku jest klawisz Windows (określany jako SUPER). Można go zmienić w pliku konfiguracyjnym.
Niektóre mogą również wykorzystywać mod1 (klawisz ALT).

### Otwórz terminal

*   SUPER + Enter

### Zamknij aktywne okno

*   SUPER + Q

### Przejdź do przestrzeni roboczej (1-9)

*   SUPER + 1-9 (Górny rząd cyfr, klawiatura numeryczna się nie liczy)

### Otwórz Rofi (Uruchamianie programów)

*   ALT + Spacja

### Przenieś fokus na (Lewo, Prawo, Dół, Góra)

*   SUPER + H (Lewo)
*   SUPER + L (Prawo)
*   SUPER + J (Dół)
*   SUPER + K (Góra)
*   SUPER + Spacja (Przenosi okna między lewą/prawą kolumną lub w górę/dół w bieżącym stosie)

### Przenieś aktywne okno do (Lewo, Prawo, Dół, Góra)

*   SUPER + Shift + H (Lewo)
*   SUPER + Shift + L (Prawo)
*   SUPER + Shift + J (Dół)
*   SUPER + Shift + K (Góra)

### Powiększ aktywne okno w kierunku (Lewo, Prawo, Dół, Góra)

*   SUPER + Control + H (Lewo)
*   SUPER + Control + L (Prawo)
*   SUPER + Control + J (Dół)
*   SUPER + Control + K (Góra)

### Przywróć oryginalny rozmiar wszystkich okien w bieżącej przestrzeni roboczej

*   SUPER + N

### Przełącz tryb pełnoekranowy w aktywnym oknie

*   SUPER + F

### Przełącz tryb pływający w aktywnym oknie

*   SUPER + V

### Przełącz między podzielonymi i niepodzielonymi stronami stosu

*   SUPER + Shift + Enter

### Przełącz między układami

*   SUPER + TAB

### Przeładuj plik konfiguracyjny Qtile

*   SUPER + Control + R

### Wyjdź z Qtile (zakończ bieżącą sesję X)

*   SUPER + Control + Q

### Uruchom Flameshot (Narzędzie do robienia zrzutów ekranu)

*   Print Screen

### Zrób zrzut całego ekranu (Zapisany w $HOME/Obrazy)

*   Control + Print Screen

### Otwórz menedżer plików (domyślnie Thunar)

*   SUPER + E

### Przeciągnij pływające okno myszką

*   SUPER + Lewy przycisk myszy

### Zmień rozmiar pływającego okna myszką

*   SUPER + Prawy przycisk myszy

### Przenieś okno na wierzch

*   SUPER + Przycisk kółka myszy

### Przypnij okno (Na przykład przypięte okno Firefox PIP będzie podążać za Tobą między przestrzeniami roboczymi)

*   SUPER + S

## FAQ

### Dlaczego widżet głośności pokazuje błąd lub zatrzymał się na 0%?

*   Czasami jest to spowodowane tym, że widżet głośności Qtile nie może wykryć domyślnego urządzenia wyjściowego. Więcej informacji znajdziesz w wiki.
*   <https://docs.qtile.org/en/latest/manual/ref/widgets.html#pulsevolume>

### Czy istnieje skrypt autostart.sh?

*   Znajduje się w katalogu scripts/ w folderze Qtile

### Czy pasek Qtile reaguje na mysz?

*   Tak, na przykład jeśli przewiniesz kółkiem myszy nad małymi kropkami reprezentującymi przestrzenie robocze (Aktywna, Nieaktywna, Pusta itp.), przełączysz się w lewo lub w prawo, możesz też kliknąć jedną z nich.
*   Innym przykładem jest układ (domyślnie kolumny) - kliknięcie na jego ikonę pozwala przełączać się między dostępnymi układami.
*   Kliknięcie na wskaźniki użycia CPU i RAM otworzy Btop (Monitor systemu TUI).
*   Zwiększanie/Zmniejszanie/Wyciszanie poprzez interakcję z widżetem głośności.

Więcej informacji o Qtile znajdziesz w ich wiki.

*   <https://docs.qtile.org/en/stable/>
