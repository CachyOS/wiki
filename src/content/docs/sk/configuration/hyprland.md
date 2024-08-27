---
title: Konfigurácia Hyprland
description: CachyOS Hyprland klávesové skratky a FAQ
---

:::caution[UPOZORNENIE]
Keďže Hyprland začal svoju rekonštrukciu, uvedomte si, že momentálne nie je stabilný a môžete zažiť chyby/nečakané pády. Používajte na vlastné riziko.
Dokonca aj ich "stabilná" verzia je tiež nefunkčná a chybná, preto neplánujeme poskytovať podporu v budúcnosti. Odkazujte na ich wiki.
:::

- https://wiki.hyprland.org/

Naším hlavným cieľom s naším nastavením je mať funkčný Hyprland, ale udržiavať ho v minimalistickom stave, preto môžu chýbať niektoré základné nástroje a programy, ako napríklad GUI správca súborov. Skontrolujte sekciu FAQ (na konci).

# Klávesové skratky

Väčšina klávesových skratiek vyžaduje použitie modifikačného kľúča, čo je v našom prípade kláves Windows (označovaný ako SUPER), môžete ho zmeniť v konfiguračnom súbore.

### Otvoriť terminál

- SUPER + Enter

### Prejsť na pracovnú plochu (1-9)

- SUPER + 1-9 (horný rad čísel, čísla na numerickej klávesnici sa nepočítajú)

### Zmeniť zameranie na (Vľavo, Vpravo, Hore, Dole)

- SUPER + šípky

### Pohyb medzi pracovnými plochami s kolieskom myši

- SUPER + rolovanie

### Pohyb medzi pracovnými plochami pomocou čiarok a bodiek

- SUPER + bodka (Ďalšia pracovná plocha)
- SUPER + čiarka (Predchádzajúca pracovná plocha)

### Presun zameraného okna na pracovnú plochu (1-9), ale neprejsť na ňu

- SUPER + Shift + 1-9

### Rovnaké ako vyššie, ale tiež prejsť na túto pracovnú plochu

- SUPER + CTRL + 1-9

### Otvoriť rofi (spúšťač programov)

- CTRL + Space

### Zatvoriť zamerané okno

- SUPER + Q

### Presun zameraného okna do smeru (Hore, Dole, Vľavo, Vpravo)

- SUPER + Shift + šípky

### Zmeniť veľkosť zameraného okna

- CTRL + Shift + J (Nadol)
- CTRL + Shift + K (Nahor)
- CTRL + Shift + H (Vľavo)
- CTRL + Shift + L (Vpravo)
- CTRL + Shift + šípky

### Prepnúť zamerané okno do plávajúceho alebo celého okna

- SUPER + F (Celé okno)
- SUPER + V (Plávajúce okno)

### Vstúpiť do režimu zmeny veľkosti (umožňuje zmenu veľkosti), H, J, K, L alebo pomocou šípok

- SUPER + R
- ESC na ukončenie

### Pohyb okna pomocou myši

- SUPER + ľavé tlačidlo myši

### Zmena veľkosti okna

- SUPER + pravé tlačidlo myši (držte stlačené a ťahajte kurzorom v ľubovoľnom smere)

### Ovládanie hlasitosti (multimediálne klávesy) ako zvýšenie hlasitosti, zníženie hlasitosti a stlmenie

### Ovládanie jasu by malo fungovať v závislosti od hardvéru

### Ovládanie prehrávania pre pauzu, prehrávanie, ďalšiu a predchádzajúcu skladbu pomocou multimediálnych kláves (notebook alebo klávesnica)

### Pripnúť zamerané okno, aby sa zobrazovalo na všetkých pracovných plochách (plávajúce)

- SUPER + Y

### Prepnúť aktuálne okno do skupiny

- SUPER + K

### Zmeniť aktívnu skupinu

- SUPER + TAB

### Reload waybar

- SUPER + O

### Zmenšiť medzeru medzi oknami

- SUPER + G

### Obnoviť medzery na predvolenú hodnotu

- SUPER + Shift + G

# FAQ

## Prečo má môj Discord, Thunar, Nautilus divné pozadie?

Je to preto, že okno má upravenú priehľadnosť.

- Skúste upraviť pravidlo okna pre Discord v konfiguračnom súbore Hyprland:
  `windowrule=opacity 0.96,discord`

## Je zahrnutý správca súborov?

- Nie, nainštalujte si ten, ktorý sa vám páči.

## Ako môžem urobiť snímku obrazovky?

- SUPER + A (Môžete tam tiež kresliť)

## Prečo Hyprland náhodne spadol?

- Skontrolujte začiatok tejto stránky, prečo.
