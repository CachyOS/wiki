---
title: Konfigurácia Qtile
description: CachyOS Qtile klávesové skratky a FAQ
---

**Pre viac informácií o Qtile si prečítajte ich wiki**

- https://docs.qtile.org/en/stable/

#### Vďaka patrí Aarrayymu za vytvorenie tohto Qtile nastavenia

> X11 a Wayland session

# Klávesové skratky

Väčšina klávesových skratiek vyžaduje použitie modifikačného kľúča, čo je v našom prípade kláves Windows (označovaný ako SUPER), môžete ho zmeniť v konfiguračnom súbore.
Niektoré z nich môžu používať mod1 (kláves ALT).

### Otvoriť terminál

- SUPER + Enter

### Ukončiť zamerané okno

- SUPER + Q

### Prejsť na pracovnú plochu (1-9)

- SUPER + 1-9 (horný rad čísel, čísla na numerickej klávesnici sa nepočítajú)

### Otvoriť rofi (spúšťač programov)

- ALT + Space

### Presunúť zameranie na (Vľavo, Vpravo, Dole, Hore)

- SUPER + H (Vľavo)
- SUPER + L (Vpravo)
- SUPER + J (Dole)
- SUPER + K (Hore)
- SUPER + Space (Presunúť okná medzi ľavým/pravým stĺpcom alebo nahor/nadol v aktuálnom stohu)

### Presunúť zamerané okno do (Vľavo, Vpravo, Dole, Hore)

- SUPER + Shift + H (Vľavo)
- SUPER + Shift + L (Vpravo)
- SUPER + Shift + J (Dole)
- SUPER + Shift + K (Hore)

### Rozšíriť zamerané okno do (Vľavo, Vpravo, Dole, Hore)

- SUPER + Control + H (Vľavo)
- SUPER + Control + L (Vpravo)
- SUPER + Control + J (Dole)
- SUPER + Control + K (Hore)

### Obnoviť všetky veľkosti okien aktuálnej pracovnej plochy na ich pôvodnú veľkosť

- SUPER + N

### Prepnúť režim celého okna v zameranom okne

- SUPER + F

### Prepnúť režim plávajúceho okna v zameranom okne

- SUPER + V

### Prepnúť medzi rozdelenými a nerozdelenými stranami stohu

- SUPER + Shift + Enter

### Prepnúť medzi rozloženiami

- SUPER + TAB

### Načítať konfiguračný súbor Qtile

- SUPER + Control + R

### Ukončiť Qtile (ukončiť bežiacu X session)

- SUPER + Control + Q

### Spustiť flameshot (nástroj na snímanie obrazovky)

- Print

### Zachytiť snímku celej obrazovky (uloženú v $HOME/Pictures)

- Control + Print

### Otvoriť správcu súborov (predvolený Thunar)

- SUPER + E

### Presunúť plávajúce okno pomocou myši

- SUPER + ľavé tlačidlo myši

### Rozšíriť plávajúce okno pomocou myši

- SUPER + pravé tlačidlo myši

### Priniesť okno dopredu

- SUPER + stredné tlačidlo myši (koliesko)

### Pripnúť okno (napríklad pripnutie Firefox PIP teraz bude nasledovať medzi pracovnými plochami)

- SUPER + S

# FAQ

## Prečo widget hlasitosti zobrazuje chybu alebo je zaseknutý na 0%?

- Niekedy je to kvôli tomu, že widget hlasitosti Qtile nedokáže zistiť vaše predvolené výstupné zariadenie, môžete sa pozrieť do wiki pre viac informácií.
- https://docs.qtile.org/en/latest/manual/ref/widgets.html#pulsevolume

## Existuje skript autostart.sh?

- Nachádza sa v priečinku scripts/ v Qtile priečinku

## Interaguje Qtile bar s myšou?

- Áno, napríklad ak sa posúvate na malých bodkách, ktoré predstavujú vaše pracovné plochy (Aktívne, Neaktívne, Prázdne atď.), prejdete naľavo alebo napravo alebo kliknete na niektorú z nich.
- Ďalším príkladom je rozloženie (predvolene stĺpce), kliknutím na neho umožníte prepínanie medzi dostupnými rozloženiami.
- Kliknutím na využitie CPU a RAM sa otvorí Btop (TUI systémový monitor).
- Zvýšenie/Zníženie/Stlmenie hlasitosti interakciou s widgetom hlasitosti.
