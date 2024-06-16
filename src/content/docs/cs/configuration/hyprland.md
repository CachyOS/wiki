---
title: Hyprland nastavení
description: CachyOS Hyprland klávesové zkratky & FAQ
---


:::Upozornění
Od doby, kdy Hyprland začal s přepracováním, je třeba si uvědomit, že momentálně není stabilní a můžete se setkat s chybami/náhlými pády. Používejte na vlastní nebezpečí.
Dokonce jejich "stabilní" verze je také rozbitá a chybová, proto nemáme v plánu poskytovat podporu v budoucnosti. Místo toho se obracejte na jejich wiki.
:::

*   https://wiki.hyprland.org/

Naším hlavním cílem s naším nastavením je mít fungující Hyprland, ale udržovat ho čistý, což může znamenat, že některé základní nástroje a programy mohou chybět, jako je například správce souborů s grafickým rozhraním. Prosím, zkontrolujte sekci FAQ (v dolní části) pro další informace.



# Klávesové zkratky

Většina kombinací kláves vyžaduje použití modifikační klávesy, kterou je v našem případě klávesa Windows (označovaná jako SUPER), kterou můžete změnit v konfiguračním souboru.

### Otevřít terminál

* SUPER + Enter

### Přejít na pracovní plochu (1-9)

* SUPER + 1-9 (řádek s čísly, numerická klávesnice se nepočítá)

### Změnit zaměření na (doleva, doprava, nahoru, dolů)

* SUPER + šipky

### Pohyb mezi pracovními plochami pomocí kolečka myši

* SUPER + kolečko

### Pohyb mezi pracovními plochami pomocí čárky a tečky

* SUPER + tečka (další pracovní plocha)
* SUPER + čárka (předchozí pracovní plocha)

### Přesunutí zaměřeného okna na pracovní plochu (1-9), ale nepřepnout se na ni

* SUPER + Shift + 1-9

### Stejné jako výše, ale přepnout se i na danou pracovní plochu

* SUPER + CTRL + 1-9

### Otevřít rofi (Program Launcher)

* CTRL + Mezerník

### Zavřít zaměřené okno

* SUPER + Q

### Přesunutí zaměřeného okna do určeného směru (nahoru, dolů, doleva, doprava)

* SUPER + Shift + šipky

### Změna velikosti zaměřeného okna

* CTRL + Shift + J (dolů)
* CTRL + Shift + K (nahoru)
* CTRL + Shift + H (doleva)
* CTRL + Shift + L (doprava)
* CTRL + Shift + šipky

### Přepnutí zaměřeného okna do režimu plávajícího okna nebo na celou obrazovku

* SUPER + F (Celá obrazovka)
* SUPER + V (Plávající okno)

### Vstup do režimu změny velikosti (umožňuje změnu velikosti), H, J, K, L nebo pomocí šipek

* SUPER + R
* ESC pro ukončení

### Pohyb oknem pomocí myši

* SUPER + kliknutí levým tlačítkem myši

### Změna velikosti okna

* SUPER + kliknutí pravým tlačítkem myši ( podržte stisknuté a táhněte kurzor na libovolném směru)

### Ovládání hlasitosti (multimediální klávesy) jako je VolUP, VolDOWN a MUTE

### Ovládání jasu by mělo fungovat v závislosti na hardwaru

### Ovládání přehrávání pro pozastavení, přehrátí, další a předchozí pomocí multimediálních kláves (na laptopu nebo klávesnici)

### Připnutí zaměřeného okna, aby se zobrazovalo na všech pracovních plochách (plávající okno)

* SUPER + Y

### Přepnutí aktuálního okna do skupiny

* SUPER + K

### Změna aktivní skupiny

* SUPER + TAB

### Obnovení waybaru

* SUPER + O

### Snížení mezery mezi okny

* SUPER + G

### Resetování mezí na výchozí hodnotu

* SUPER + Shift + G


# Časté dotazy (FAQ)

## Proč má Discord, Thunar a Nautilus podivné pozadí?

To je způsobeno upravenou průhledností okna.

* Zvažte úpravu pravidla okna pro Discord blízko konce konfiguračního souboru Hyprland:
   `windowrule=opacity 0.96,discord`

## Je zahrnutý správce souborů?

* Ne, nainstalujte si takový, který se vám líbí.

## Jak mohu udělat screenshot?

* SUPER + A (Můžete tam také kreslit)

## Proč Hyprland padá náhodně?

* Zkontrolujte na začátku této stránky proč

