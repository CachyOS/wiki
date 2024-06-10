# CachyOS Boot Manažéry

Aby sme zabezpečili najlepší zážitok na rôznych zariadeniach, CachyOS momentálne ponúka nasledujúce boot manažéry: systemd-boot, rEFInd a Grub. Tento článok popisuje vlastnosti každého boot manažéra a tiež obsahuje naše odporúčania, kedy ich použiť.

:::note
Každý boot manažér podporuje všetky naše aktuálne dostupné voľby súborových systémov a plné šifrovanie koreňového adresára.
:::

## systemd-boot

Súčasť rodiny systemd, systemd-boot bol vytvorený tak, aby bol čo najjednoduchší, preto podporuje iba systémy založené na UEFI. Tento jednoduchý, ale efektívny dizajn zaisťuje, že je spoľahlivý a rýchly. Toto však ide na úkor pokročilých funkcií, ktoré podporujú iné boot manažéry.

### Klady:
- Najrýchlejší z troch boot manažérov.
- Veľmi jednoduchá konfigurácia.
- Bootovacie položky sú rozdelené do viacerých súborov, čo uľahčuje ich správu.
- Jednoduchý, ale moderný dizajn.

### Zápory:
- Nepodporuje BIOS systémy.
- Neobsahuje žiadne možnosti témovania alebo prispôsobenia.
- Konfigurácia nie je automaticky generovaná, pokiaľ nie je nastavená na to. CachyOS zahŕňa nástroj systemd-boot manažér na automatickú generáciu.
- Môže čítať bootovacie obrazy len na súborových systémoch podporovaných EFI (FAT, FAT16, FAT32).
- Neschopnosť nájsť bootovacie obrazy na iných partíciách bez manuálneho zásahu.

### Konfigurácia
Hlavný príkazový nástroj pre systemd-boot je sdboot-manage.
Konfiguračný súbor na zmenu parametrov jadra a iných možností sa nachádza v /etc/sdboot-manage.conf.
Bootovacie položky sú umiestnené v /boot/loader/entries/.

### Rozloženie partícií:
- Minimálne 1GB (odporúčané 2GB) FAT32 EFI boot partícia (/boot).
- Minimálne 5.5GB používateľom zvolený súborový systém koreňového adresára (/).

### Odporúčanie:
Systemd-boot je odporúčaný boot manažér pre CachyOS. Vyberte tento, ak nepotrebujete žiadne z funkcií špecifických pre grub a rEFInd.

## rEFInd

Fork rEFIt, rEFInd bol pôvodne vytvorený na uľahčenie multi-bootovania pre používateľov MacOS. rEFInd sa však vyvinul do hardvérového agnostika, čo ho robí skvelou voľbou pre multi-bootovanie na akomkoľvek systéme. Hlavným lákadlom rEFInd je jeho schopnosť skenovať všetky úložné zariadenia pri bootovaní a zodpovedajúcim spôsobom zobrazovať položky pre každý nájdený OS/jadro.

### Klady:
- Automatická detekcia všetkých operačných systémov a jadier na úložných zariadeniach.
- Minimálna alebo žiadna konfigurácia potrebná vďaka spomínanej automatickej detekcii.
- Ľahko podporuje zabezpečené bootovanie.
- Grafické užívateľské rozhranie podobné MacOS Boot selectoru.
- Skvelá podpora tém.
- CachyOS poskytuje iné rozloženie partícií pre rEFInd na ďalšie zvýšenie kompatibility multi-bootovania s inými OS ako Windows.
- Schopnosť čítať bootovacie obrazy zo súborových systémov EFI (FAT, FAT16, FAT32) ako aj ext4 a btrfs.

### Zápory:
- Nepodporuje BIOS systémy.
- O niečo pomalší kvôli funkcii automatickej detekcie.

### Konfigurácia
Hlavný príkazový nástroj pre rEFInd je refind-install.
Parametre jadra sú poskytované súborom nazvaným refind_linux.conf, ktorý sa nachádza vedľa jadier. (Zvyčajne /boot)
Hlavný konfiguračný súbor rEFInd je obvykle umiestnený v /boot/efi/refind/refind.conf.

### Rozloženie partícií:
- Minimálne 50MB FAT32 EFI partícia (/boot/efi).
- Minimálne 1GB (odporúčané 2GB) ext4 boot partícia (/boot).
- Minimálne 5.5GB používateľom zvolený súborový systém koreňového adresára (/).

### Odporúčanie:
rEFInd je odporúčaný boot manažér pre bootovanie s viacerými operačnými systémami.

## Grub

Grub je najstarší z dostupných boot manažérov a teda jediný, ktorý podporuje BIOS bootovanie. Má veľmi veľkú sadu funkcií, funguje na takmer každom stroji a je najčastejšie používaným Linux boot manažérom.

### Klady:
- Schopnosť čítať bootovacie obrázky z takmer všetkých dostupných linuxových súborových systémov.
- Široko používaný a veľmi ľahko nájditeľné informácie online.
- Schopnosť dešifrovať šifrované boot partície.
- Jediný boot*loader*, ktorý umožňuje bootovanie BIOS strojov.
- Vyzerá zastarane. Má však skvelú podporu tém na kompenzáciu.

### Zápory:
- Preplnený kvôli potrebe podporovať oveľa starší hardvér a potrebuje veľa ovládačov súborových systémov.
- O niečo pomalší ako ostatné boot manažéry kvôli spomínanej preplnenosti.
- Komplikovaná konfigurácia, ktorá sa musí regenerovať zakaždým, keď sa aktualizuje jadro. (Toto je však robené automaticky.)

### Konfigurácia
Hlavný príkazový nástroj pre grub je grub-mkconfig.
Hlavný konfiguračný súbor grub je obvykle umiestnený v /boot/grub/grub.cfg.

### Rozloženie partícií:
#### BIOS:
- Minimálne 6.5GB používateľom zvolený súborový systém koreňového adresára (/).
#### UEFI:
- Minimálne 50MB EFI partícia (/boot/efi).
- Minimálne 6.5GB používateľom zvolený súborový systém koreňového adresára (/).

### Odporúčanie:
Grub je jediný dostupný boot manažér, ak váš stroj podporuje iba BIOS bootovanie. Je to tiež jediný boot manažér, ktorý podporuje šifrovanie boot partície (odlišné od šifrovania disku). Ak nespadáte do týchto kritérií, odporúčame alternatívne boot manažéry.

## TL:DR
Vyberte Grub, ak váš stroj je iba BIOS, vyberte rEFInd, ak plánujete mať na svojom stroji viacero operačných systémov (najmä Windows), inak zvoľte systemd-boot.