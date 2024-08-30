---
title: Qtile Configuration
description: CachyOS Qtile keybinds & FAQ
---

**Pro více informací o Qtile navštivte jejich wiki pro odkaz**
- [https://docs.qtile.org/en/stable/](https://docs.qtile.org/en/stable/)

#### Kredity patří Aarrayy za vytvoření tohoto nastavení Qtile
> X11 a Wayland session

# Klávesové zkratky

Většina kombinací kláves vyžaduje použití modifikační klávesy, kterou je v našem případě klávesa Windows (označovaná jako SUPER), kterou můžete změnit v konfiguračním souboru.
Některé z nich mohou využívat také mod1 (ALT klávesu).

### Otevřít terminál

* SUPER + Enter

### Ukončit zaměřené okno

* SUPER + Q

### Přejít na pracovní plochu (1-9)

* SUPER + 1-9 (řádek s čísly, numerická klávesnice se nepočítá)

### Otevřít rofi (Program launcher)

* ALT + Mezerník

### Zaměřit se na (doleva, doprava, dolů, nahoru)

* SUPER + H (doleva)
* SUPER + L (doprava)
* SUPER + J (dolů)
* SUPER + K (nahoru)
* SUPER + Mezerník (pohyb oknem mezi levým/pravým sloupcem nebo pohyb nahoru/dolů ve stávajícím zásobníku)

### Přesunout zaměřené okno (doleva, doprava, dolů, nahoru)

* SUPER + Shift + H (doleva)
* SUPER + Shift + L (doprava)
* SUPER + Shift + J (dolů)
* SUPER + Shift + K (nahoru)

### Zvětšit zaměřené okno (doleva, doprava, dolů, nahoru)

* SUPER + Control + H (doleva)
* SUPER + Control + L (doprava)
* SUPER + Control + J (dolů)
* SUPER + Control + K (nahoru)

### Resetovat všechny velikosti oken na aktuální pracovní ploše na jejich původní velikost

* SUPER + N

### Přepnout režim celé obrazovky u zaměřeného okna

* SUPER + F

### Přepnout režim plovoucího okna u zaměřeného okna

* SUPER + V

### Přepnout mezi rozdělením a nerozdělením stran zásobníku

* SUPER + Shift + Enter

### Přepnout mezi rozložením

* SUPER + TAB

### Načíst konfigurační soubor Qtile

* SUPER + Control + R

### Ukončit Qtile (ukončit běžící relaci X)

* SUPER + Control + Q

### Spustit flameshot (nástroj pro pořizování snímků obrazovky)

* Print

### Zachytit snímek celé obrazovky (uloženo v $HOME/Pictures)

* Control + Print

### Otevřít Správce souborů (výchozí Thunar)

* SUPER + E

### Přetáhnout plovoucí okno myší

* SUPER + Kliknutí levým tlačítkem myši

### Zvětšit plovoucí okno myší

* SUPER + Kliknutí pravým tlačítkem myši

### Přivést okno do popředí

* SUPER + Tlačítko rolování myši

### Přilepit okno (například přilepení Firefox PIP bude nyní následovat mezi pracovními plochami)

* SUPER + S


# FAQ

## Proč zobrazuje widget hlasitosti chybu nebo je zaseklý na 0 %?
* Někdy je to způsobeno tím, že widget hlasitosti Qtile nedokáže detekovat váš výchozí výstupní zařízení, pro více informací se podívejte do wiki.
- [https://docs.qtile.org/en/latest/manual/ref/widgets.html#pulsevolume](https://docs.qtile.org/en/latest/manual/ref/widgets.html#pulsevolume)

## Existuje skript autostart.sh?
* Nachází se ve složce scripts/ ve složce Qtile.

## Reaguje li lišta Qtile na myš?
* Ano, například pokud rolovat na malé tečky, které jsou vaše pracovní plochy (aktivní, neaktivní, prázdné atd.), budete přepínat doleva nebo doprava nebo dokonce kliknout na jednu z nich.
* Dalším příkladem je rozložení (výchozí sloupce), kliknutím na něj můžete přepínat mezi dostupnými rozloženími
* Využití procesoru a paměti kliknutím na to se otevře Btop (TUI Monitor systému)
