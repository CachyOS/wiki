---
title: Konfiguracja menedżera rozruchu
description: Skonfiguruj ustawienia menedżera rozruchu i przekaż parametry jądra do linii poleceń
---
 
## systemd-boot
 
systemd-boot używa dwóch rodzajów plików konfiguracyjnych: jednego dla samego systemd-boot w `/boot/loader/loader.conf` oraz po jednym dla każdego
indywidualnego wpisu jądra w `/boot/loader/entry`.
 
### Konfiguracja loadera
 
W tym pliku konfiguracyjnym możesz zmienić domyślny wpis rozruchowy oraz czas oczekiwania systemd-boot.
 
```shell
# /boot/loader/loader.conf
 
default @saved
timeout 5
#console-mode keep # Ta opcja konfiguruje rozdzielczość konsoli.
```
 
### Konfiguracja linii poleceń jądra
 
Dostarczamy narzędzie ułatwiające konfigurację systemd-boot: [`sdboot-manage`](https://github.com/CachyOS/CachyOS-PKGBUILDS/tree/master/systemd-boot-manager).
Jedną z zalet tego narzędzia jest globalna konfiguracja linii poleceń jądra. Plik konfiguracyjny dla `sdboot-manage` znajduje się w `/etc/sdboot-manage.conf`.
Edytuj linię `LINUX_OPTIONS=` w `/etc/sdboot-manage.conf`, aby zmienić parametry jądra.
 
```shell
# /etc/sdboot-manage.conf
LINUX_OPTIONS="zswap.enabled=0 nowatchdog quiet splash"
```
 
Po dokonaniu zmian wygeneruj ponownie wszystkie wpisy systemd-boot za pomocą następującego polecenia:
 
```shell
❯ sudo sdboot-manage gen
```
 
## rEFInd
 
Podobnie jak [systemd-boot](/pl/configuration/boot_manager_configuration#systemd-boot), rEFInd ma dwa pliki konfiguracyjne. `refind.conf` znajdujący się w
`boot/efi/EFI/refind` służy głównie do zmiany sposobu działania rEFInd, podczas gdy `/boot/refind_linux.conf` służy do zarządzania opcjami rozruchowymi.
`refind.conf` zawiera obszerne komentarze wyjaśniające wszystkie jego opcje.
 
### Konfiguracja linii poleceń jądra
 
Aby przekazać parametry jądra do linii poleceń, zmodyfikuj wpis "Boot using default options" w `/boot/refind_linux.conf`.
 
```shell
# /boot/refind_linux.conf
 
"Boot using default options" "root=PARTUUID=1cb353ec-7f03-4820-8b4b-03baf53a208f rw zswap.enabled=0 nowatchdog quiet splash"
```
 
Zmiany w obu plikach konfiguracyjnych zaczną obowiązywać natychmiast. Uruchamianie polecenia w celu "zapisania" zmian nie jest konieczne.
 
## GRUB
 
W przeciwieństwie do [systemd-boot](/pl/configuration/boot_manager_configuration#systemd-boot) i [rEFInd](/pl/configuration/boot_manager_configuration#refind),
GRUB ma tylko jeden plik konfiguracyjny znajdujący się w `/etc/default/grub`. W tym pliku znajduje się całkiem dobra dokumentacja, która wyjaśnia, co
robi każda opcja.
 
### Ukrywanie menu rozruchowego GRUB
 
Aby ukryć menu GRUB, po prostu ustaw odpowiednio poniższe opcje.
 
```shell
# /etc/default/grub
 
GRUB_TIMEOUT='0'
GRUB_TIMEOUT_STYLE=hidden
```
 
Naciśnij ESC, aby uzyskać dostęp do wiersza poleceń GRUB. Stąd uruchom `normal` lub `exit`, aby powrócić do znanego menu rozruchowego GRUB.
 
### Konfiguracja linii poleceń jądra
 
Aby przekazać parametry jądra do linii poleceń za pomocą GRUB, musimy edytować `GRUB_CMDLINE_LINUX_DEFAULT` w `/etc/default/grub`.
 
```shell
# /etc/default/grub
 
GRUB_CMDLINE_LINUX_DEFAULT='nowatchdog zswap.enabled=0 quiet splash'
```
 
Za każdym razem, gdy modyfikujemy plik konfiguracyjny GRUB, musimy ponownie utworzyć konfigurację za pomocą następującego polecenia:
 
```shell
❯ sudo grub-mkconfig -o /boot/grub/grub.cfg
```
 
## Limine
Limine to nowoczesny program rozruchowy, znany z prostej konfiguracji. Ten przewodnik omawia podstawy, które pomogą Ci zacząć.

Konfiguracja odbywa się głównie w pliku `/boot/limine.conf` (lub czasami na partycji systemowej EFI) dla ustawień menu oraz w `/etc/default/limine` dla parametrów jądra.

### Konfiguracja menu rozruchowego

Ten plik kontroluje zachowanie i wygląd menu rozruchowego. Zmiany wprowadzone tutaj zaczynają obowiązywać natychmiast po zapisaniu – nie są potrzebne żadne dodatkowe polecenia.

*   **Timeout:** Ustawia, ile sekund Limine ma czekać przed automatycznym uruchomieniem domyślnego wpisu.
    ```shell
    # /boot/limine.conf

    timeout: 5
    ```
*   **Default Entry:** Określa, który wpis menu jest uruchamiany domyślnie. Wpisy są numerowane od 1. Jeśli nie jest ustawione, domyślną wartością jest 1.
    ```shell
    # /boot/limine.conf

    default_entry: 2 # Domyślnie uruchom drugi wpis
    ```
    :::tip
    Jeśli `default_entry` wskazuje na katalog (np. `/+CachyOS`), automatyczne uruchamianie zostanie wyłączone. Aby automatycznie uruchomić wpis znajdujący się w katalogu, `default_entry` musi wskazywać bezpośrednio na numer tego konkretnego wpisu.
    :::

**Przykład (`/boot/limine.conf`):**

```shell
# /boot/limine.conf

timeout: 5
default_entry: 2 # Wskazuje bezpośrednio na wpis 'linux-cachyos' poniżej

/+CachyOS        # Wpis 1: Katalog (użyj /+, aby domyślnie rozwinąć)
//linux-cachyos  # Wpis 2: Rzeczywisty wpis rozruchowy
    protocol: linux
    kernel_path: boot():/vmlinuz-linux-cachyos
    cmdline: quiet splash root=UUID=... rw # Podstawowe parametry jądra
    module_path: boot():/initramfs-linux-cachyos.img
```

:::note
`boot():/` odnosi się do katalogu głównego dysku rozruchowego.
:::

### Motywy

Możesz dostosować wygląd wizualny menu rozruchowego Limine:

*   **Tapeta:** Ustaw obraz tła. Obsługiwane formaty to BMP, PNG i JPEG.
    ```shell
    # /boot/limine.conf

    wallpaper: boot():/splash.png
    wallpaper_style: stretched # Opcje: 'stretched' (rozciągnięty), 'tiled' (kafelkowy), 'centered' (wyśrodkowany)
    backdrop: 000000           # Kolor tła (szesnastkowo RRGGBB), jeśli styl to 'centered'
    ```
*   **Czcionki:** Użyj [niestandardowego pliku czcionki](https://github.com/viler-int10h/vga-text-mode-fonts) i dostosuj jej rozmiar.
    ```shell
    # /boot/limine.conf

    term_font: boot():/custom_font.F16
    term_font_scale: 2x2 # Skaluje rozmiar czcionki, przydatne przy wyświetlaczach o wysokiej rozdzielczości
    ```
*   **Kolory:** Zmodyfikuj kolory tekstu i tła terminala.
    ```shell
    # /boot/limine.conf

    term_background: 80000000 # Przykład: Półprzezroczysta czerń (AARRGGBB)
    # Dostępne są inne opcje kolorów, takie jak term_foreground itp.
    ```

### Konfiguracja poleceń jądra

W CachyOS wpisy jądra w menu rozruchowym Limine są **zarządzane automatycznie**. Kiedy instalujesz lub usuwasz jądra, `limine-mkinitcpio-hook` używa w tle narzędzia `limine-entry-tool` do aktualizacji wpisów rozruchowych.

Chociaż wpisy są obsługiwane automatycznie, możesz **skonfigurować parametry jądra** (znane również jako linia poleceń jądra), które są przekazywane do jądra podczas rozruchu.

1.  **Edytuj plik konfiguracyjny:** Zmodyfikuj zmienne `KERNEL_CMDLINE` w `/etc/default/limine`. Możesz ustawić domyślne parametry dla wszystkich jąder lub specyficzne parametry dla określonych nazw jąder (np. `linux-cachyos`).
    ```shell
    # /etc/default/limine

    # Domyślne parametry dla większości jąder
    KERNEL_CMDLINE[default]="quiet splash rd.udev.log_priority=3"

    # Specyficzne parametry dla jądra 'linux-cachyos'
    KERNEL_CMDLINE["linux-cachyos"]="quiet splash mitigations=off"

    # Parametry dla wpisów zapasowych (jeśli są generowane)
    # KERNEL_CMDLINE[fallback]="..."
    ```
2.  **Zastosuj zmiany:** Po zapisaniu `/etc/default/limine`, musisz ponownie wygenerować obrazy initramfs i zaktualizować wpisy Limine, aby zastosować nowe parametry jądra. Uruchom następujące polecenie:
    ```bash
    sudo limine-mkinitcpio
    ```
    To polecenie uruchamia proces `mkinitcpio`, który zawiera `limine-mkinitcpio-hook`, zapewniając, że zmiany w `/etc/default/limine` zostaną uwzględnione we wpisach rozruchowych w `/boot/limine.conf`.


## Dowiedz się więcej

- [Strona podręcznika loader.conf](https://man.archlinux.org/man/loader.conf.5)
- [rEFInd: Konfiguracja menedżera rozruchu](https://www.rodsbooks.com/refind/configfile.html)
- [Podręcznik GRUB: Konfiguracja](https://www.gnu.org/software/grub/manual/grub/grub.html#Configuration)
- [Oficjalna dokumentacja konfiguracji Limine](https://github.com/limine-bootloader/limine/blob/v9.x/CONFIG.md)
- [Projekt limine-entry-tool](https://gitlab.com/Zesko/limine-entry-tool)
