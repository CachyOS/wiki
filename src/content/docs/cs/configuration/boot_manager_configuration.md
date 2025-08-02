---
title: Konfigurace zavaděčů
description: Konfigurace nastavení zavaděčů a předávání parametrů kernelu do příkazového řádku
---

## systemd-boot

systemd-boot má dva druhy konfiguračních souborů, jeden pro samotný systemd-boot v `/boot/loader/loader.conf` a jeden pro každou
jednotlivou položku kernelu v `/boot/loader/entry`.

### Konfigurace zavaděče

V tomto konfiguračním souboru můžete změnit výchozí položku a časový limit systemd-boot.

```shell
# /boot/loader/loader.conf

default @saved
timeout 5
#console-mode keep # Tato volba nastavuje rozlišení konzole.
```

### Konfigurace příkazového řádku kernelu

Pro snazší konfiguraci systemd-boot poskytujeme nástroj [`sdboot-manage`](https://github.com/CachyOS/CachyOS-PKGBUILDS/tree/master/systemd-boot-manager).
Jednou z výhod tohoto nástroje je globální konfigurace příkazového řádku kernelu. Konfigurační soubor pro `sdboot-manage` se nachází v `/etc/sdboot-manage.conf`.
Upravte řádek `LINUX_OPTIONS=` v `/etc/sdboot-manage.conf` pro změnu parametrů kernelu.

```shell
# /etc/sdboot-manage.conf
LINUX_OPTIONS="zswap.enabled=0 nowatchdog quiet splash"
```

Po provedení změn znovu vygenerujte všechny položky systemd-boot následujícím příkazem:

```shell
❯ sudo sdboot-manage gen
```

## rEFInd

Stejně jako [systemd-boot](/configuration/boot_manager_configuration#systemd-boot), rEFInd má dva konfigurační soubory. `refind.conf` umístěný v
`boot/efi/EFI/refind` slouží hlavně ke změně chování rEFInd, zatímco `/boot/refind_linux.conf` slouží ke správě vašich spouštěcích voleb.
`refind.conf` obsahuje rozsáhlé komentáře vysvětlující všechny jeho volby.

### Konfigurace příkazového řádku kernelu

Pro předání parametrů kernelu do příkazového řádku upravte "Boot using default options" v `/boot/refind_linux.conf`.

```shell
# /boot/refind_linux.conf

"Boot using default options"     "root=PARTUUID=1cb353ec-7f03-4820-8b4b-03baf53a208f rw zswap.enabled=0 nowatchdog quiet splash"
```

Změny v obou konfiguračních souborech se projeví okamžitě. Spouštění příkazu k "uložení" změn není nutné.

## GRUB

Na rozdíl od [systemd-boot](/configuration/boot_manager_configuration#systemd-boot) a [rEFInd](/configuration/boot_manager_configuration#refind),
GRUB má pouze jeden konfigurační soubor umístěný v `/etc/default/grub`. V tomto souboru je poměrně dobrá dokumentace, která vysvětluje, co
každá volba dělá.

### Skrytí GRUB menu

Pro skrytí GRUB menu jednoduše nastavte následující volby odpovídajícím způsobem.

```shell
# /etc/default/grub

GRUB_TIMEOUT='0'
GRUB_TIMEOUT_STYLE=hidden
```

Stiskněte ESC pro přístup k příkazovému řádku GRUB. Odtud spusťte `normal` nebo `exit` pro návrat do známého spouštěcího menu GRUB.

### Konfigurace příkazového řádku kernelu

Pro předání parametrů kernelu do příkazového řádku s GRUBem musíme upravit `GRUB_CMDLINE_LINUX_DEFAULT` v `/etc/default/grub`.

```shell
# /etc/default/grub

GRUB_CMDLINE_LINUX_DEFAULT='nowatchdog zswap.enabled=0 quiet splash'
```

Pokaždé, když upravíme konfigurační soubor GRUB, musíme znovu vytvořit konfiguraci následujícím příkazem:

```shell
❯ sudo grub-mkconfig -o /boot/grub/grub.cfg
```

## Limine
Limine je moderní zavaděč známý svou jednoduchou konfigurací. Tento průvodce pokrývá základy, které vám pomohou začít.

Konfigurace probíhá primárně v `/boot/limine.conf` (nebo někdy v EFI system partition) pro nastavení menu a v `/etc/default/limine` pro parametry kernelu.

### Konfigurace spouštěcího menu

Tento soubor řídí chování a vzhled spouštěcího menu. Změny zde provedené se projeví ihned po uložení – nejsou potřeba žádné další příkazy.

*   **Časový limit:** Nastavuje, kolik sekund Limine počká, než automaticky spustí výchozí položku.
  ```shell
  # /boot/limine.conf

  timeout: 5
  ```
*   **Výchozí položka:** Určuje, která položka menu se spustí jako výchozí. Položky jsou číslovány od 1. Pokud není nastaveno, výchozí hodnota je 1.
  ```shell
  # /boot/limine.conf

  default_entry: 2 # Spustit druhou položku jako výchozí
  ```
  :::tip
   Pokud `default_entry` odkazuje na adresář (např. `/+CachyOS`), automatické spuštění bude zakázáno. Pro automatické spuštění položky uvnitř adresáře musí `default_entry` odkazovat přímo na konkrétní číslo této položky.
  :::

**Příklad (`/boot/limine.conf`):**

```shell
# /boot/limine.conf

timeout: 5
default_entry: 2 # Odkazuje přímo na položku 'linux-cachyos' níže

/+CachyOS        # Položka 1: Adresář (použijte /+ pro výchozí rozbalení)
//linux-cachyos  # Položka 2: Skutečná spouštěcí položka
    protocol: linux
    kernel_path: boot():/vmlinuz-linux-cachyos
    cmdline: quiet splash root=UUID=... rw # Základní parametry kernelu
    module_path: boot():/initramfs-linux-cachyos.img
```

:::note
`boot():/` odkazuje na kořenový adresář spouštěcího disku.
:::

### Vzhled (Theming)

Můžete si přizpůsobit vizuální vzhled spouštěcího menu Limine:

*   **Tapeta:** Nastavte obrázek na pozadí. Podporované formáty zahrnují BMP, PNG a JPEG.
  ```shell
  # /boot/limine.conf

  wallpaper: boot():/splash.png
  wallpaper_style: stretched # Možnosti: 'stretched', 'tiled', 'centered'
  backdrop: 000000           # Barva pozadí (RRGGBB hex) pokud je styl 'centered'
  ```
*   **Písma:** Použijte [vlastní soubor písma](https://github.com/viler-int10h/vga-text-mode-fonts) a upravte jeho velikost.
  ```shell
  # /boot/limine.conf

  term_font: boot():/custom_font.F16
  term_font_scale: 2x2 # Mění velikost písma, užitečné pro displeje s vysokým rozlišením
  ```
*   **Barvy:** Upravte barvy textu a pozadí terminálu.
  ```shell
  # /boot/limine.conf

  term_background: 80000000 # Příklad: Poloprůhledná černá (AARRGGBB)
  # Jsou k dispozici další volby barev jako term_foreground, atd.
  ```

### Konfigurace příkazového řádku kernelu

V CachyOS jsou položky kernelu v menu zavaděče Limine **spravovány automaticky**. Když instalujete nebo odstraňujete kernely, `limine-mkinitcpio-hook` používá na pozadí nástroj `limine-entry-tool` k aktualizaci spouštěcích položek.

Ačkoli jsou položky spravovány automaticky, můžete **konfigurovat parametry kernelu** (také známé jako příkazový řádek kernelu), které se předávají kernelu při spouštění.

1.  **Upravte konfigurační soubor:** Upravte proměnné `KERNEL_CMDLINE` v `/etc/default/limine`. Můžete nastavit výchozí parametry pro všechny kernely nebo specifické parametry pro určité názvy kernelů (např. `linux-cachyos`).
   ```shell
   # /etc/default/limine

   # Výchozí parametry pro většinu kernelů
   KERNEL_CMDLINE[default]="quiet splash rd.udev.log_priority=3"

   # Specifické parametry pro kernel 'linux-cachyos'
   KERNEL_CMDLINE["linux-cachyos"]="quiet splash mitigations=off"

   # Parametry pro záložní položky (pokud jsou generovány)
   # KERNEL_CMDLINE[fallback]="..."
   ```
2.  **Aplikujte změny:** Po uložení `/etc/default/limine` musíte znovu vygenerovat vaše initramfs obrazy a aktualizovat položky Limine, aby se nové parametry kernelu projevily. Spusťte následující příkaz:
   ```bash
   sudo limine-mkinitcpio
   ```
   Tento příkaz spustí proces `mkinitcpio`, který zahrnuje `limine-mkinitcpio-hook`, což zajistí, že vaše změny v `/etc/default/limine` budou začleněny do spouštěcích položek v `/boot/limine.conf`.


## Další informace

- [Manuálová stránka loader.conf](https://man.archlinux.org/man/loader.conf.5)
- [rEFInd: Konfigurace zavaděče](https://www.rodsbooks.com/refind/configfile.html)
- [Manuál GRUB: Konfigurace](https://www.gnu.org/software/grub/manual/grub/grub.html#Configuration)
- [Oficiální dokumentace konfigurace Limine](https://github.com/limine-bootloader/limine/blob/v9.x/CONFIG.md)
- [Projekt limine-entry-tool](https://gitlab.com/Zesko/limine-entry-tool)
