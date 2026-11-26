---
title: Instalator GUI
description: Dzienniki zmian Calamaresa i obrazu Live ISO z GUI
sidebar:
  order: 1
ai_translated: true
---
26.06
----

**Funkcje:**

* **Pakiety:**
  * Python korzysta teraz z rozszerzonego PGO w celu poprawy wydajności
  * Dodano [łatkę GCC](https://www.phoronix.com/news/GCC-x86-Generic-Mispredict) do ogólnego dostrajania błędnego przewidywania skoków dla x86, usprawniając sposób, w jaki GCC uwzględnia koszt błędnych przewidywań na nowoczesnych procesorach Intel i AMD
  * Naprawiono regresję wykrytą w testach Phoronix Benchmarks przy użyciu OpenBLAS na procesorach z dużą liczbą rdzeni
  * Zmieniono nazwę `proton-cachyos` na `proton-cachyos-native`
* **pacman:** Dodano [izolację sieciową dla skryptów pakietów i hooków](https://github.com/CachyOS/pacman/commit/4056cd687f6379e61e7decb9b66e9b57cb3949a9)
* **Instalator:**
  * Dodano opcję środowiska CachyOS Hyprland Noctalia oraz wideo podglądowe
  * Usunięto `paru` z instalacji; jako alternatywę zaleca się korzystanie z [Shelly](https://wiki.cachyos.org/configuration/post_install_setup/#updating-the-system), zarówno przez GUI, jak i CLI
  * Dodano SDDM jako menedżer wyświetlania dla MangoWM
  * Zastąpiono Monitor systemu GNOME aplikacją Resources
  * Dodano `realtime-privileges` do grupy pakietów audio
  * Ulepszono wykrywanie układu i wariantu klawiatury w sesji live
* **CachyOS-Welcome:**
  * Dodano obsługę DNS over QUIC (DoQ) za pośrednictwem `blocky`
  * Dodano dedykowaną stronę rozwiązywania problemów (Troubleshooting)
  * Dodano obsługę terminala Ptyxis
  * Dodano tłumaczenia na język azerski i grecki
  * Dodano francuskie strony readme i involvement
  * Zaktualizowano tłumaczenia na języki włoski, niemiecki, francuski, japoński i bułgarski
* **chwd:**
  * Dodano tłumaczenie na język turecki
  * Usunięto `cachyos-handheld` z list pakietów dla urządzeń przenośnych
  * Rozwiązuje konflikty sterowników w systemach z wieloma kartami GPU wymagających niekompatybilnych gałęzi sterowników (np. mieszane generacje kart NVIDIA), instalując najlepszy wspólny sterownik lub przełączając się awaryjnie na główne GPU
  * Dodano 32-bitowy sterownik Vulkan dla maszyn wirtualnych
* **cachyos-settings:** Zastosowano 15-sekundowy limit czasu uruchamiania i 10-sekundowy limit czasu zamykania dla usług użytkownika, co zapobiega 90-sekundowym opóźnieniom przy wyłączaniu systemu

**Poprawki:**

* **Instalator:**
  * Naprawiono kolejność układów klawiatury oraz obsługę konfiguracji `locale1`
  * Naprawiono kopiowanie poprawnej konfiguracji pacmana do zainstalowanego systemu
  * Usunięto pozostałe katalogi `/etc/calamares` po zakończeniu instalacji
  * Przeniesiono czyszczenie po Calamaresie za wszystkie skrypty instalacyjne
  * Usunięto zbędny krok poinstalacyjny dla Limine
* **CachyOS-Welcome:**
  * Zapobieżono awarii po wybraniu opcji „Install Apps” bez zainstalowanego `cachyos-pi`; przycisk jest teraz ukrywany, gdy pakiet jest niedostępny
  * Naprawiono awarię występującą, gdy zapisany plik ustawień nie mógł zostać odczytany lub przeanalizowany; w razie błędu ustawienia są teraz resetowane do domyślnych
  * Poprawiono wykrywanie poprawek (w tym `graphical-session.target.wants`) oraz globalne wyłączanie poprawek usług użytkownika przez polkit
* **chwd:**
  * Poprawiono identyfikatory producentów maszyn wirtualnych
  * Usunięto zbędną aktywację usługi `fprintd`
  * Naprawiono zabezpieczenie przed usunięciem pakietu Mesa

26.04
----

**Funkcje:**

* **Instalator:**
  * Shelly zastąpiło Octopi jako graficzny menedżer pakietów
  * Zaraz po instalacji tworzona jest teraz czysta migawka, która jest zachowywana na stałe, zapewniając bazowy punkt przywracania
  * Opcja `os-prober` w GRUB jest teraz domyślnie włączona
  * Dodano MangoWM jako opcję środowiska graficznego wraz z plikami dotfiles
  * Usunięto środowisko graficzne UKUI
  * Karty graficzne AMD korzystają teraz z innego motywu Plymouth, ponieważ sterownik amdgpu nie jest w stanie niezawodnie renderować poprzedniego motywu na laptopach z podłączonym drugim monitorem
  * Uporządkowano i zmodernizowano wybór pakietów GNOME
  * Dodano opcję instalacji `MangoWM` z powłoką `DMS`
* **CachyOS-Welcome:**
  * Dodano obsługę DNS-over-HTTPS (DoH) za pośrednictwem `blocky`
  * Dodano obsługę niestandardowych serwerów DNS oraz automatyczny wskaźnik/resetowanie DHCP
  * Serwery DNS wyświetlają teraz metadane (region, strona główna, filtrowanie) oraz obsługują indywidualne testowanie opóźnień
  * Dodano przełącznik zarządzania VRAM `dmemcg-booster` (w KDE instaluje dodatkowo `plasma-foreground-booster`)
  * Dodano pełną obsługę nawigacji klawiaturą w ramach ułatwień dostępu
  * Zastąpiono ikony społecznościowe PNG ostrymi ikonami SVG dostosowanymi do HiDPI
  * Dodano `wezterm` do narzędzia pomocniczego terminala
* **chwd:**
  * Dodano natywne wykrywanie urządzeń USB (przez libusb/sysfs) oraz wykrywanie typu obudowy
  * Dodano obsługę integracji czytnika linii papilarnych (`fprint`) z sudo
  * Dodano wykrywanie rodziny/modelu CPU w celu obsługi `intel-lpmd`
  * **Urządzenia przenośne:** Dodano dokładne wzorce dla Xbox ROG Ally
  * **Sieć:** Dodano profil Wi-Fi dla Marvell AVASTAR 88W8897 (Surface Pro 4)
  * Rozdzielono profile NVIDIA dla laptopów i komputerów stacjonarnych
  * Rozdzielono i zaktualizowano profile dla maszyn wirtualnych
* **cachyos-settings:** Zmieniono domyślny planista I/O dla NVMe z `none` na `kyber`

**Poprawki:**

* **Instalator:**
  * Metoda partycjonowania jest teraz zapisywana w logu debugowania
  * Stare pakiety mikrokodu są teraz usuwane podczas ponownego użycia istniejącej partycji rozruchowej
* **CachyOS-Welcome:**
  * Naprawiono błędne zwracanie wartości true przez testy łączności, gdy ping kończył się niepowodzeniem
  * Zapewniono widoczność ikon linków zewnętrznych w ciemnych motywach
  * Zapobieżono jednoczesnemu uruchamianiu wielu instancji aplikacji powitalnej
  * Dodano `StartupWMClass` dla lepszego dopasowywania okien `.desktop`
* **chwd:**
  * Usunięto hook `kms` z `mkinitcpio.conf` na nieprzenośnych komputerach stacjonarnych, aby naprawić konflikty ze sterownikiem NVIDIA
  * Zwiększono dokładność wyszukiwania zainstalowanego jądra w profilach NVIDIA
  * Usunięto wymuszoną sesję Xorg z profili NVIDIA 470xx (naprawia zgodność z `plasma-login-manager`)
  * Usunięto przestarzałą opcję `WaylandEnable=false` dla GDM w profilach maszyn wirtualnych
  * Naprawiono fałszywie dodatnie wykrywanie urządzeń przenośnych (np. mylenie określonych laptopów MSI z MSI Claw)
* **cachyos-settings:**
  * Zrezygnowano z zarządzania energią `S01x` z powodu problemów ze sterownikiem NVIDIA 595
  * Wyłączono `AggressiveVblank` z powodu problemów z VR w sterowniku NVIDIA

26.03
----

**Funkcje:**

* **Instalator:**
  * Dodano obsługę wyświetlania animacji GIF/WebP w wyborze środowiska graficznego w celu ich prezentacji. Funkcja jest włączona dla Plasma, GNOME, Niri i COSMIC
  * Dodano obsługę JPEG XL w wyborze środowiska graficznego, aby zmniejszyć rozmiar obrazów
  * Cachy-Update jest teraz domyślnie włączone w instalacjach GNOME i KDE
  * Ulepszono logikę instalacji mikrokodu — instalator wykrywa teraz sprzęt i instaluje właściwy mikrokod, zamiast instalować oba i następnie usuwać zbędny
  * Ulepszono komunikat o błędzie, gdy partycja EFI jest zbyt mała
  * Posortowano listę środowisk graficznych od prostych i przystępnych po bardziej zaawansowane, takie jak menedżery okien (WM)
* **CachyOS-Welcome:**
  * Dodano przycisk ułatwiający instalację i włączenie „Winboat” dla prostej maszyny wirtualnej Windows w Dockerze
  * Dodano obsługę serwera DNS FFMUC w wyborze DNS
  * Dodano ukraińskie tłumaczenie
* **chwd:** Znacznie zmniejszono rozmiar initramfs w konfiguracjach z dedykowanym GPU NVIDIA
* **linux-cachyos:** Zamiast generowania pliku `0001-cachyos-base-all.patch`, dla każdego wydania naszego załatanego jądra generowane jest teraz wydanie w repozytorium Linux
* **cachyos-rate-mirrors:** Znacznie poprawiono wrażenia użytkowników z Chin i Rosji dzięki właściwemu sprawdzeniu przed oceną serwerów lustrzanych
* **cachyos-settings:** Dodano obsługę automatycznego ustawiania domeny regulacyjnej sieci bezprzewodowej na podstawie strefy czasowej
* **Strona internetowa:** Wygląd strony został przeprojektowany i ulepszony, aby odpowiadał bardziej nowoczesnym standardom
* **GitHub:** Dodano szablony zgłoszeń w ważnych repozytoriach na GitHubie, aby poprawić jakość raportów o błędach i ułatwić użytkownikom ich zgłaszanie
* **Serwery lustrzane:** Nowe serwery lustrzane w Rosji (jura12, cachy-arch.ru), Szwecji (Zyner) i Kanadzie (All Things Linux)

**Poprawki:**

* **Instalator:**
  * Usunięto obsługę bcachefs przy wyborze systemu plików ze względu na wymaganie pakietu bcachefs-dkms
  * Naprawiono szyfrowanie przy użyciu LUKS2 na określonych urządzeniach
  * Naprawiono włączanie menedżera wyświetlania „ly”
* **cachyos-settings:** `cachyos-bugreport.sh` maskuje teraz adres IP, nazwę użytkownika, nazwę hosta oraz adres MAC
* **chwd:**
  * Ogólne profile dla urządzeń przenośnych oraz ulepszona obsługa ich układów GPU
  * `fwupd` jest teraz włączone dla urządzeń przenośnych Lenovo


**Dziennik zmian dla edycji Handheld:**

* **gamescope-session:** Zastąpiono gamescope-session-plus przez gamescope-session-cachyos, który jest forkiem gamescope-session od Valve
  * Umożliwia aktualizacje oprogramowania układowego dla urządzeń Steam Deck i Lenovo Legion Go
* **plasma-login-manager:** Zastąpiono SDDM przez plasma-login-manager jako menedżer logowania
* **Menedżery rozruchu:** Limine jest teraz wybierany domyślnie z automatycznymi migawkami. systemd-boot pozostaje dostępny do wyboru
* **Instalator:** Połączono instalator Calamares dla edycji Handheld z instalatorem edycji desktopowej
* **ISO:** Obraz ISO korzysta teraz z Waylanda zamiast X11

26.01
----

**Funkcje:**

* **Instalator:**
  * Przeniesiono wybór menedżera rozruchu do Calamaresa; zarządzanie jest teraz skonsolidowane w jednym pakiecie.
  * Wykrywanie architektury odbywa się teraz **przed** instalacją systemu bazowego, aby zmniejszyć ilość pobieranych danych.
  * GRUB korzysta teraz z LUKS2 do szyfrowania.
  * Przekazywanie flagi --needed do pacmana, aby uniknąć dwukrotnej instalacji pakietów.
  * Zastosowano jednopoziomową kompresję na dyskach NVMe dla Btrfs.
  * Usunięto zależności xorg w środowiskach graficznych opartych na Waylandzie.
* **ISO:**
  * Przełączono środowisko ISO na `plasma-login-manager`.
  * Obraz ISO zawiera teraz zarówno jądro Stable, jak i LTS. Domyślnie wybierane jest jądro Stable.
  * Przełączono sesję ISO z X11 na Wayland.
* **Netinstall:**
  * Instalacje Plasma używają teraz `plasma-login-manager` zamiast SDDM.
  * Niri używa teraz `noctalia-shell` oraz zaktualizowanych plików dotfiles.
  * Uporządkowano proces instalacji GNOME.
* **Slajdy:** Poprawiono literówki na slajdach Calamaresa i dodano nowy slajd prezentujący Wiki.
* **Serwery lustrzane:** Strona statusu serwerów lustrzanych (<https://packages.cachyos.org/mirrors>) wyświetla teraz stan synchronizacji serwerów CachyOS.
* **cachyos-settings:** Włączono `EnableAggressiveVblank` dla modułu NVIDIA. Skraca to czas spędzany w górnej połowie obsługi przerwań, zapewniając niskie opóźnienia przerwań wyświetlania.
* **chwd:**
  * Instaluje `nouveau-fw`, aby włączyć obsługę VA-API w Nouveau dla kart NVIDIA z rodziny Kepler.
  * Dodano obsługę AI-SDK dla kilku nowych GPU AMD.
  * Zastąpiono HHD pakietami `steamos-manager` oraz `inputplumber`.
* **Proton-CachyOS:**
  * Dodano obsługę FSR4 MLFG (Machine Learning Frame Generation); włączana automatycznie przy użyciu `PROTON_FSR4_[RDNA3_]UPGRADE`
  * Dodano obsługę modułu `d7vk`. Można go włączyć przez `PROTON_DXVK_DDRAW=1`
  * Zaimportowano łatki dla wibracji haptycznych DualSense
  * Dodano `WINE_BLOCK_HOSTS`, aby uniemożliwić Wine łączenie się z określonymi domenami
  * Automatyczne włączanie `ENABLE_HDR_WSI=1` przy użyciu `winewayland` na dedykowanych GPU NVIDIA
  * Naprawiono problemy z układem klawiatury przy użyciu `winewayland.drv`
  * Usunięto starą łatkę, która powodowała spadek 1% low FPS
  * Załatano `protonfixes` w celu lepszej obsługi wyboru presetów DLSS i przekierowania `libxess_dx11.dll`
  * proton-cachyos-slr jest teraz używany domyślnie w „gaming-meta”. Wersja natywna nadal będzie wspierana.


**Poprawki:**

* **Limine:** Zwiększono rozmiar partycji rozruchowej do 4192 MB, aby sprostać wysokim wymaganiom `limine-snapper-sync`.
* **Instalator:** 
  * Instalator blokuje teraz przejście dalej, jeśli partycja EFI jest zbyt mała przy użyciu opcji „zainstaluj obok” lub „zastąp partycję”.
  * Naprawiono błąd, w wyniku którego wybranie środowiska graficznego, przejście krok dalej, a następnie cofnięcie się i wybranie innego środowiska skutkowało zaznaczeniem obu naraz.
* **chwd:** Usunięto zmienną środowiskową wymuszającą `libva-nvidia-driver`, ponieważ powodowała problemy w systemach z dwoma GPU.
* **cachyos-hello**: Naprawiono problem, w którym cachy-update pokazywało się jako wyłączone, mimo że było włączone.
* **Kontrolery**: Naprawiono obsługę wejścia w kilku kontrolerach dzięki aktualizacji reguł wejścia do najnowszej wersji.
* **Framework 16 (Zen5)**: Naprawiono problem powodujący zawieszenie sesji podczas zapisu w Calamaresie.

25.11
----

**Funkcje:**

* **ISO/Instalator:** Dodano Orca oraz espeak-ng dla lepszej dostępności
* **initcpiocfg:** Włączono hook systemd w obsługiwanych konfiguracjach
* **Netinstall:** Usunięto pliki dotfiles dla Hyprlanda
* **pacstrap:** Instalacja `bcachefs-dkms`, jeśli jako system plików wybrano `bcachefs`
* **Calamares:** Dodano obsługę plasma-login-manager oraz cosmic-greeter
* **Cosmic:** Przełączono z SDDM na cosmic-greeter
* **Czcionki:** Ulepszono czcionki dla użytkowników z Azji
* **chwd:**
  * Instaluje `intel-media-sdk` oraz `vpl-gpu-rt` na obsługiwanych GPU
  * Włączono Nouveau NvBoost dla układów GPU Fermi
  * Zakończono wsparcie dla starszego sterownika NVIDIA 390xx
  * Dodano obsługę dla Xbox ROG Ally/X
* **cachyos-hello:**
  * Usunięto wewnętrzny instalator pakietów; zamiast tego otwierany jest CachyOS Package Installer
  * Dodano interfejs CLI dla funkcji GUI
  * Różne poprawki sprawdzania wersji ISO
* **cachyos-settings:** zram-generator: Usunięto kompresję dla niekompresowalnych stron pamięci
* **Proton-CachyOS:**
  * Dodano `dxvk-gplasync` jako alternatywny DXVK. Można go włączyć przez `PROTON_DXVK_GPLASYNC=1`
  * Dodano `DISABLE_LAYER_MESA_ANTI_LAG` przy użyciu `PROTON_FSR4_UPGRADE`
  * Wprowadzono liczne **poprawki Waylanda** (przesunięcie pełnoekranowe, martwe klawisze, zachowanie DPI, poprawki wyjścia wideo) oraz ulepszenia `winewayland.drv`
  * Wprowadzono i dostrojono **pamięć podręczną shaderów dla poszczególnych gier** oraz większe rozmiary pamięci podręcznej shaderów (zwłaszcza dla NVIDIA)
  * Dodano ulepszenia skalerów FSR3 i XeSS

**Poprawki:**

* **Limine:**
  * Naprawiono instalację Limine bez rejestrowania wpisu na wadliwym UEFI
  * Wykorzystuje wariant systemd hooka `btrfs-overlayfs`
* **Calamares:** Usunięto `attr2` jako opcję w ustawieniach montowania XFS
* **chwd:** Wyłączono interfejs USB Ethernet układu T2

25.08
----

**Funkcje:**

* **Usługi:** Dodano **packages.cachyos.org**, wyszukiwarkę pakietów odpowiadającą stronie Arch Linuxa, z możliwością wykluczenia pakietów CachyOS.
* **Jądro:** Instalator instaluje teraz dodatkowo **linux-cachyos-lts** jako zapasowe jądro po instalacji. Nadal zalecamy korzystanie z jądra Stable.
* **ISO:** Przełączono jądro obrazu live ISO z Stable na LTS z powodu utrzymujących się problemów z jądrem Stable, co poprawia niezawodność rozruchu.
* **Pulpit:** Dodano **Niri** jako opcję środowiska graficznego wraz z kilkoma wstępnie skonfigurowanymi plikami dotfiles.
* **NVIDIA:** Włączono tryb uśpienia **S0ix** na obsługiwanym sprzęcie dla nowoczesnego stanu czuwania o niskim poborze mocy.
* **GRUB:** Rozruchowe migawki są teraz automatycznie włączane i konfigurowane, gdy główny system plików używa **Btrfs**.
* **Usprawnienia (Tweaks):** Zintegrowano **Cachy-Update** ze stroną Tweaks w aplikacji powitalnej. Cachy-Update dodaje timer oraz ikonę w zasobniku systemowym, informując o aktualizacjach i pozwalając je zainstalować jednym kliknięciem.
* **Proton-CachyOS:**
    - Dodano narzędzie pobierające biblioteki DLL dla DLSS (wersja **310.3.0**), podobne do narzędzia dla FSR4. Użyj zmiennej środowiskowej `PROTON_DLSS_UPGRADE=1`, aby je włączyć.
    - Dodano zmienną środowiskową `PROTON_DLSS_INDICATOR=1` włączającą nakładkę DLSS HUD.
    - Dodano narzędzie pobierające biblioteki DLL dla XeSS (wersja **2.1.0**), podobne do narzędzia dla DLSS. Użyj zmiennej środowiskowej `PROTON_XESS_UPGRADE=1`, aby je włączyć.
    - Dodano `PROTON_FSR4_RDNA3_UPGRADE` dla układów GPU RDNA3. Działa tak samo jak `PROTON_FSR4_UPGRADE`, ale ustawia też kilka innych niezbędnych zmiennych.
    - Dodano pełniejsze implementacje bibliotek Nvidii brakujących w Protonie. Powinno to pomóc we włączeniu opcji takich jak PhysX w grach, w których były one wcześniej wyłączone. Możesz je także włączać osobno za pomocą `PROTON_NVIDIA_NVCUDA`, `PROTON_NVIDIA_NVENC`, `PROTON_NVIDIA_NVML` i `PROTON_NVIDIA_NVOPTIX`.
    - Dodano pamięć podręczną shaderów dla poszczególnych gier, włączoną domyślnie; można ją wyłączyć przez `PROTON_LOCAL_SHADER_CACHE=0`. Shadery będą buforowane w `<steamlibrary>/shadercache/<appid>` dla każdej gry, podobnie jak przy włączonym wstępnym buforowaniu shaderów. Wystąpią przycięcia podczas odbudowywania pamięci podręcznej shaderów dla danej gry, ale zapisane shadery nie będą usuwane z powodu ograniczonego rozmiaru pamięci podręcznej.
    - Dodano [dxvk-sarek](https://github.com/pythonlover02/DXVK-Sarek) jako opcjonalny zamiennik DXVK dla starszych kart GPU, które nie obsługują poprawnie Vulkan 1.3. Korzysta on z gałęzi `async`, więc NIE POWINIEN być używany w grach z systemem anti-cheat ani ogólnie w grach wieloosobowych. Zostałeś ostrzeżony. Użyj `PROTON_DXVK_SAREK=1`, aby go włączyć.
    - Dodano `PROTON_FSR3_UPGRADE` do aktualizacji bibliotek DLL FSR 3.1 do nowszych wersji.

**Poprawki:**

* **Limine:**
    - Naprawiono błąd `limine bios-install /dev/sdaX` przy wyborze punktu montowania **/boot** jako lokalizacji rozruchu na systemach MBR.
    - Naprawiono niezainicjalizowaną wartość ścieżki `bootLoader`, która powodowała błędy instalacji na systemach MBR, gdy lokalizacja menedżera rozruchu nie została jawnie wybrana.
    - Dodano ostrzeżenie o używaniu flagi **bios-grub** na partycji rozruchowej, co może powodować błąd „Stage 3 file not found”.
    - Naprawiono działający od razu po instalacji dual-boot z systemem Windows dla instalacji BIOS.
    - Naprawiono problem z uruchamianiem migawek Btrfs przy użyciu **GNOME (GDM)**.
* **Launch Installer:** Dodano zapasowe adresy IP dla testu połączenia z internetem na wypadek niepowodzenia pingowania **cachyos.org**.

25.07
----

**Funkcje:**

- **Powłoka**: Powłokę użytkownika można teraz wybrać podczas instalacji spośród fish, zsh oraz bash. Fish pozostaje domyślnie włączona.
- **chwd**: Instalacja plasma-x11 dla starszych sterowników NVIDIA
- **Netinstall**: Dodano fwupd do KDE Plasma oraz Gnome
- **mesa-git**: Dodano obsługę AMD Anti Lag
- **firefox**: Wprowadzono alternatywną wersję Firefoksa o nazwie „firefox-pure”, zawierającą ulepszenia profilu userjs. Dodatkowo dodano pakiet „cachyos-firefox-settings”, który można zainstalować na Firefoksie.
- **Proton-CachyOS**:
  - Zaimportowano nadrzędne commity wine-wayland
  - Dodano zmienną środowiskową „PROTON_FSR4_UPGRADE”, która automatycznie pobiera najnowszą bibliotekę DLL FSR4 i podmienia ją w celu automatycznego ulepszenia gier wspierających FSR 3.1
  - Dodano wiele łatek związanych z Waylandem z nadrzędnego projektu Wine wydanych po Wine 10.0.
  - Dodano łatki pomagające w lepszej integracji z systemami anti-cheat. Podziękowania dla NelloKudo
  - Dodano łatki dla AMD Anti Lag 2 w vkd3d-proton i wine
  - Zaktualizowano umu-protonfixes do najnowszego commita

**Poprawki:**

- **Keyring**: Ulepszono obsługę instalacji bazy kluczy (keyring), aby uniknąć problemów i wykonywać kilka ponownych prób.
- **systemd-oomd**: Wyłączono systemd-oomd, ponieważ miał problemy ze współpracą z le9 i zamykał aplikacje zdecydowanie zbyt wcześnie

**Dziennik zmian dla edycji Handheld:**

- **handheld-settings**: Zaimportowano kilka poprawek ze SteamOS do edycji Handheld
- **pipewire**: Ustawiono minimalne quantum na 256
- **SteamDeck-OLED**: Instalacja galileo-mura dla Steam Deck OLED
- **Lenovo Legion Go S**: Dodano obsługę dla Lenovo Legion Go S

25.05
----

**Funkcje:**

- **ISO**: Dodano automatyczne wykrywanie podczas uruchamiania ISO w celu zidentyfikowania karty GPU NVIDIA w systemie i załadowania odpowiedniego modułu (np. nvidia-open, nvidia), zapewniając lepsze wsparcie dla serii 10xx i starszych.
- **Plymouth**: Dodano nową animację Plymouth.
  - Podziękowania dla Erena ([https://github.com/erenyldz89](https://github.com/erenyldz89)) za pracę nad tym elementem!
- **Przeglądarka**: Cachy-Browser został wycofany. Teraz jako domyślną preinstalowaną przeglądarkę dostarczamy Firefoksa. Poradnik dotyczący migracji profili do Firefoksa (i jego forków) znajdziesz tutaj: [https://wiki.cachyos.org/support/faq/#migrating-your-profile-from-cachy-browser-to-firefox](https://wiki.cachyos.org/support/faq/#migrating-your-profile-from-cachy-browser-to-firefox)
- **netinstall**: Dodano kcalc, filelight, plymouth-kcm oraz kio-admin do instalacji KDE.
- **mkinitcpio**: Domyślnie wyłączono zapasowy obraz initramfs (fallback). Pozwoli to zaoszczędzić sporo miejsca.
- **Serwery lustrzane**: Dodano nowy serwer lustrzany 10 Gbps w Bangladeszu. Podziękowania dla Limdy za jego hostowanie!
- **Proton**:
  - Przebazowano niemal wszystkie łatki z **Proton CachyOS 9.0**.
  - Włączono sterownik Wayland dla kompilacji Steam Linux Runtime. Włącz za pomocą `PROTON_ENABLE_WAYLAND=1`. Podziękowania dla [GloriousEggroll](https://github.com/GloriousEggroll) za umożliwienie tego.
  - Dodano wiele łatek związanych z Waylandem z nadrzędnego projektu Wine wydanych po Wine 10.0.
  - Naprawiono różne problemy ze sterownikiem Wayland oraz grami Vulkan. Podziękowania dla [Etaash-mathamsetty](https://github.com/Etaash-mathamsetty) za całą ciężką pracę.
  - Dodano zaślepkę (stub) implementacji `amdxc64.dll` w celu włączenia FSR4. Użyj `FSR4_UPGRADE=1`, aby zaktualizować gry FSR3.1 do FSR4. Ponowne podziękowania dla [Etaash-mathamsetty](https://github.com/Etaash-mathamsetty). Instrukcje: [https://github.com/Etaash-mathamsetty/wine-builds/releases/tag/fsr4](https://github.com/Etaash-mathamsetty/wine-builds/releases/tag/fsr4)
  - Dodano łatki związane z DualSense dla pełniejszej funkcjonalności wykrywania urządzeń audio w przypadku przewodowych efektów haptycznych opartych na dźwięku. Niektóre gry polegające na takim działaniu powinny teraz poprawnie je obsługiwać. Podziękowania dla [ClearlyClaire](https://github.com/ClearlyClaire) za oryginalne łatki oraz [Exotic0015](https://github.com/Exotic0015) za rozwijanie ich od czasu **Proton CachyOS 9.0**. Upstream: [https://gitlab.winehq.org/wine/wine/-/merge_requests/7238](https://gitlab.winehq.org/wine/wine/-/merge_requests/7238)
  - Usunięto łatkę dla Dragon Age Inquisition, ponieważ nie działała. Na razie używaj **Proton CachyOS 9.0** dla tej gry.
- **GRUB**: Dodano nowy motyw GRUB. Podziękowania dla [diegons490](https://github.com/diegons490/cachyos-grub-theme).

**Poprawki:**

- **Serwery lustrzane**: Naprawiono problem, w którym użytkownicy z Rosji nie mogli już przeprowadzić instalacji. Zostało to rozwiązane przez rezygnację z CDN77, które Rosja zaczęła blokować.
- **kde-settings**: Wyłączono ikonę Discover na pasku zadań.
- **ddcutil**: Wydano przedpremierową wersję ddcutil 2.2.1, aby naprawić problem z zawieszaniem się kart GPU AMD podczas oglądania filmów na YouTube.

**Dziennik zmian dla edycji Handheld:**

- **os-branch**: Tryb gry (Game Mode) pokazuje teraz poprawnie, że używany jest CachyOS Linux.
- **audio**: Zaktualizowano profile convolver.
- **steamos-manager**: Służy do zarządzania taktowaniem GPU i TDP, aktualizacji BIOS/stacji dokujących, konserwacji nośników danych, formatowania pamięci zewnętrznych oraz limitu ładowania baterii na Steam Decku.
- **steamos-powerbuttond**: Ten komponent zastępuje standardowe powerbuttond, zapewniając lepszą obsługę trybu uśpienia.
- **jupiter-hw-support**: Zaktualizowano do wersji 20250501.

25.04
----

**Funkcje:**

- **occt**: Dodano OCCT do obrazu ISO, aby zapewnić środowisko live do testów obciążeniowych
  - Podziękowania dla Marka za ten pomysł!

**Poprawki:**

- **jądro**: Naprawia awarię modułu na laptopach Asus
- **limine**: Limine ma teraz zainstalowany mkinitcpio-limine-hook i będzie automatycznie tworzyć wpisy menedżera rozruchu

**Dziennik zmian dla edycji Handheld:**

- **audio**: Dodano profile audio dla ROG Ally X oraz Legion Go
- **gamescope**: Zastąpiono gamescope-plus przez nadrzędne gamescope

25.03
----

**Funkcje**:

- **Menedżer rozruchu**: Dodano obsługę menedżera rozruchu Limine
- **Menedżer rozruchu**: Dodano obsługę automatycznych migawek dla menedżera rozruchu Limine
- **Samba**: Dodano pakiet „cachyos-samba-settings” ułatwiający konfigurację zasobu Samba
- **NVIDIA**: Ponownie włączono oprogramowanie układowe GSP dla zamkniętego modułu NVIDIA
- **Jądro**: Dodano obsługę sterownika Asus Armoury
- **Secure Boot**: Ulepszono skrypt „sbctl-batch-sign”, aby podpisywał wyłącznie wymagane pliki
- **udev**: Cofnięto używanie ntfs3 jako domyślnego sterownika dla partycji NTFS
  - Informacja: Używanie sterownika jądra NTFS3 jako domyślnego powodowało problemy u niektórych użytkowników. Z tego powodu wróciliśmy do poprzedniego rozwiązania.
- **wine**: Wine i Wine-Staging używają teraz domyślnie WoW64 i NTSync
- **scx-manager**: Wydzielono graficzny menedżer sched-ext z Kernel Managera do osobnej aplikacji
- **Wsparcie sprzętowe**: Dodano obsługę układów RDNA4, RTX 5070 Ti oraz 5070.
- **Ustawienia**: Dodano obsługę DLSS Swapper — jest to skrypt, który automatycznie aktualizuje i stosuje najnowszą wersję oraz preset DLSS
- **Aktualizacje pakietów**: linux-cachyos 6.14.0, NVIDIA 570.133.07, Gnome 48, Plasma 6.3.3, mesa 25.0.2, linux-api-headers 6.14.0, linux-tools 6.14.0

**Poprawki**:

- **initcpiocfg**: Usunięto dodawanie modułu „crc32c-intel” do mkinitcpio — moduł ten jest przestarzały i zastępuje go domyślny moduł „crc32c”
- **chwd**: Wyłączono odciążanie (offloading) w brcmfmac na MacBookach T2
- **chwd**: Nie instaluj sterownika NVIDIA 390.xx na laptopach

25.02
----

**Funkcje**:

- **Jądro**:
  - Optymalizacja Propeller jest teraz stosowana do domyślnego jądra **linux-cachyos** dla wszystkich dostępnych architektur.
    - **Uwaga**: W połączeniu z AutoFDO może to poprawić wydajność o około 10%, w zależności od obciążenia.
- **NVIDIA**: Dodano obsługę architektury Blackwell.
- **ISO**: Domyślnym modułem jest teraz nvidia-open, aby zapewnić obsługę architektury Blackwell. Użytkownicy z GPU starszymi niż Turing powinni skorzystać z pierwszej lub zapasowej opcji rozruchu.
- **Ustawienia**: Domyślnie włączono klikanie stuknięciem (tap-to-click) w sesjach X11.
- **udev**: Użycie ntfs3 jako domyślnego sterownika dla partycji NTFS.
- **game-performance**: Wyłączanie wygaszacza ekranu podczas uruchamiania gier.
- **kernel-manager (sched-ext)**: Dodano obsługę trybu serwerowego.
- **jądro**: Dodano poprawki dla funkcji AMD preferred core.
- **chwd**: Ponownie dodano obejście problemu dla RTD3.
- **Aktualizacje pakietów**: linux-cachyos 6.13.0, NVIDIA 570.86.16, LLVM 19, glibc 2.41, mesa 24.3.4.

**Poprawki**:

- **chwd**: Naprawiono problem, przez który hybrydowe laptopy ze sprzętem Intel i NVIDIA nie mogły korzystać ze swojego GPU w DaVinci Resolve.
- **glibc**: Dodano poprawkę dla luki CVE-2025-0395.
- **kernel-manager**: Próba instalacji gotowego modułu NVIDIA, jeśli jest dostępny dla domyślnego jądra Archa.
- **kernel-manager**: Dodano dodatkowe sprawdzenie zapobiegające nadpisaniu wartości, gdy moduł nie jest dostępny.

**Dziennik zmian dla edycji Handheld:**

- **hooki**: Ponownie zezwolono na korzystanie z natywnie skompilowanego Protona.
- **różne**: Liczne aktualizacje i poprawki.

24.12
----

**Funkcje**:

- Jądro:
  - AutoFDO jest teraz stosowane do domyślnego jądra `linux-cachyos` dla wszystkich dostępnych architektur
    - **Uwaga**: Poprawa wydajności jest na razie minimalna z powodu obecnych ograniczeń. Łączenie profili wymaga LLVM 19, a optymalizacja Propeller jest od niego zależna. Przewidujemy, że LLVM 19 i lepiej zoptymalizowane profile będą dostępne pod koniec roku, po wdrożeniu LLVM 19 przez Arch Linuxa
- chwd: Rusticl jest teraz konfigurowany poprawnie
- chwd: ulepszono rejestrowanie błędów podczas wywołań hooków
- chwd: naprawiono wybór sterowników VAAPI
- cachyos-settings: Dodano skrypt ułatwiający uruchamianie aplikacji za pomocą Zink
- Konfiguracja sysctl: Przebudowano i zoptymalizowano kilka ustawień
- Kernel Manager: Dodano obsługę `scx_loader`, umożliwiającą natywne przełączanie planistów
- Instalator: Usługa Bluetooth jest teraz domyślnie włączona
- Netinstall:
  - Dodano `wireless-regdb` do instalowanych pakietów
    - Konfiguruje to połączenie do korzystania z właściwych kanałów i odblokowuje dodatkowe kanały, potencjalnie poprawiając prędkość internetu
    - **Uwaga**: Domyślnie ustawiony jest ogólny region; zalecamy dostosowanie go do twojego regionu w celu uzyskania optymalnej wydajności
- **Aktualizacje pakietów**: NVIDIA 565.77, linux-cachyos 6.12.6, mesa 24.3.2, scx-scheds 1.0.8, zfs 2.2.7

**Poprawki błędów**

- Instalator: Logi instalacji nie otwierają już okien terminala debugowania
- Zarządzanie partycjami:
  - Prawidłowe ustawienia `umask` zapewniają brak dostępu do `/boot` bez wystarczających uprawnień
- Launch Installer: Naprawiono testy łączności z internetem

**Dziennik zmian edycji Handheld:**

- Zaktualizowano pakiety powiązane z urządzeniami przenośnymi
- Naprawiono problem z obsługą profili zasilania
- Dodano obsługę WiFi 6

24.11
----

**Funkcje:**

- thp-shrinker: Ustawiono wartość max_ptes_none na 80% dla stron wypełnionych zerami. Zmniejszy to zużycie pamięci przy ustawieniu THP na always, przy zachowaniu tej samej wydajności
- NVIDIA: Oprogramowanie układowe GSP jest teraz automatycznie wyłączane, jeśli użytkownik samodzielnie przełączy się na zamknięty sterownik
- chwd: NVIDIA: Usługi nvidia-powerd są włączane dla laptopów, aby osiągać najwyższe dostępne TDP
- proton-cachyos: Generowanie klatek DLSS (DLSS Frame Generation) już działa. Oczekuje się, że w przyszłości będzie działać także w nadrzędnym Protonie
- jądro: Zastosowano AMD Cache Optimizer. Użytkownicy procesorów z dwoma CCD x3d mogą teraz przełączać preferencje między rdzeniami o wyższym taktowaniu a rdzeniami z pamięcią podręczną
- jądro: amd-pstate: Przeniesiono wstecznie poprawki wydajności amd-pstate dla Strix Point
- jądro: Dodano nadrzędne poprawki problemów z TDP na kartach GPU AMD RDNA2 i RDNA3
- jądro: Dodano poprawki taktowania dla wyświetlaczy o konfiguracji 5120x1440x240
- jądro: Eksperymentalne jądro zoptymalizowane za pomocą AutoFDO dostępne w repozytorium pod nazwą „linux-cachyos-autofdo”
- ISO: Dodano sprawdzanie, czy użytkownik uruchamia edycję handheld, i ostrzeganie przed rozpoczęciem instalacji na nieobsługiwanym urządzeniu
- ISO: Dodano sprawdzanie, czy użytkownik korzysta z najnowszego obrazu ISO, oraz ostrzeżenie w przypadku nieaktualnej wersji

**Poprawki błędów:**

- refind: partycjonowanie: zmieniono 3-częściowy układ partycji na 2-częściowy
- netinstall: dodano kdeplasma-addons do instalacji Plasma
- calamares: Naprawiono problem podczas partycjonowania z użyciem partycji wymiany (swap)

**Dziennik zmian edycji Handheld:**

- Poprawiono obsługę ROG Ally X

24.10
----

**Funkcje:**

- Aktualizacje pakietów: linux-cachyos 6.11.1, mesa 24.2.4, scx-scheds 1.0.5, python 3.12.7

**Poprawki błędów:**

- sddm: Zaktualizowano sddm do nowszej wersji, aby naprawić logowanie do sesji Wayland
- ISO: Dodano xf86-video-amdgpu, aby naprawić ładowanie sesji graficznej w niektórych konfiguracjach
- chwd: Naprawiono ponowną instalację profili

24.09
----

**Funkcje:**

- Pakiety: Zoptymalizowano wiele pakietów za pomocą PGO, takich jak LLVM, Clang, svt-av1 oraz nodejs. Przyniosło to na przykład o 10% szybszy kompilator Clang
- Repozytorium: Repozytorium jest teraz synchronizowane i aktualizowane częściej, co oznacza jeszcze mniejsze opóźnienia. Interwał synchronizacji zmniejszono z co 3 godzin do co godziny.
- Repozytorium: Począwszy od 27.09.2024 pakiety kompilowane z flagą -fpic automatycznie włączają -fno-semantic-interposition. Może to zapewnić wzrost wydajności w wielu pakietach.
- zlib-ng: Jest teraz używany jako zamiennik zlib
- sddm: W instalacji KDE sddm używa teraz domyślnie Waylanda jako kompozytora. # Provide Migration changes in release post
- cachyos-settings: NetworkManager korzysta teraz z systemd-resolved jako backendu, co pomaga w buforowaniu DNS
- cachyos-settings: Użycie time.google.com jako serwera synchronizacji czasu, aby uniknąć problemów z timesync w niektórych konfiguracjach
- gcc: Dodano poprawki dostrajania dla znver5
- gcc: Wybrano łatki i flagi z Clear Linux
- glibc: Dodano łatki „evex” oraz wybrane zmiany z Clear Linux
- wiki: Wiki otrzymało wiele nowych dodatków i przebudów
- chwd: Uproszczono obsługę urządzeń
- chwd: Wszystkie profile są teraz projektowane specjalnie dla urządzeń PCI
- chwd: Dodano --autoconfigure do automatycznej obsługi instalacji sterowników
- Aktualizacje pakietów: linux-cachyos 6.11.0, mesa 24.2.3, Plasma 6.1.5, NVIDIA 560.35.03, calamares 3.3.10, QT 6.7.3

**Poprawki błędów:**

- Launch-Installer: Dodano poprawki synchronizujące zegar sprzętowy przed rozpoczęciem instalacji
- calamares: Dodano poprawkę odmontowywania systemu plików po instalacji
- keyring: Czyszczenie bazy kluczy i jej ponowne utworzenie przed rozpoczęciem instalacji; naprawia to rzadkie problemy z kluczami
- sysctl: Ponownie włączono zrzuty pamięci (core dumps)
- chwd: Usunięto `libva-nvidia-driver` z profilu PRIME, aby zapobiec potencjalnym konfliktom i poprawić kompatybilność z programami takimi jak Spectacle
- cachyos-settings: Dodano obejście dla awarii GNOME na Waylandzie
- cachyos-fish/zsh-config: Porzucono specyficzne obejścia dla Waylanda

**Dziennik zmian dla edycji Handheld:**

- Ally/Ally X: Zastąpiono HHD narzędziem inputplumber, ponieważ hhd nie korzystało poprawnie ze sterownika jądra, co powodowało problemy.
- Zaktualizowano pakiety powiązane z urządzeniami przenośnymi

24.08
----

**Funkcje:**

- chwd: NVIDIA używa teraz domyślnie otwartego modułu dla obsługiwanych kart
- Pulpit: Dodano środowisko graficzne Cosmic do opcji instalacji
- NVIDIA: Najnowszy sterownik Beta 560 jest teraz domyślny; załatano egl-wayland, aby naprawić awarie w Firefoksie i innych aplikacjach
- serwery lustrzane: CDN77 zasponsorowało CachyOS usługą Object Storage z globalną pamięcią podręczną, znacznie przyspieszając połączenia dla użytkowników
- serwery lustrzane: CachyOS zapewnia teraz własny serwer lustrzany Arch Linuxa, aby uniknąć problemów z synchronizacją; jest on ustawiany domyślnie podczas instalacji wraz z zapasowymi serwerami lustrzanymi
- SecureBoot: Wprowadzono skrypt oraz poradnik na Wiki ułatwiający obsługę Secure Boot
- cachy-chroot: Dodano automatyczne montowanie przez fstab w celu uproszczenia chrootowania
- cachy-chroot: Zaimplementowano obsługę szyfrowania LUKS
- kernel-manager: Dodano obsługę ustawiania flag sched-ext w konfiguracji sched-ext
- kernel-manager: Wprowadzono opcję budowania nvidia-open
- kernel-manager: Dodano opcję zapamiętywania ostatnio używanych ustawień na stronie konfiguracji
- Aktualizacje pakietów: linux-cachyos 6.10.5, mesa 24.2.0, Plasma 6.1.4, NVIDIA 560.31.02

**Poprawki błędów:**

- chwd: Ulepszono wykrywanie profilu PRIME na podstawie nazwy urządzenia
- chwd: Usunięto obejście RTD3 z powodu problemów w niektórych konfiguracjach
- cachyos-rate-mirrors: Wyłączono ocenianie serwerów lustrzanych podczas uruchamiania z Live ISO
- cachy-chroot: Naprawia awarię, gdy partycja nie miała prawidłowego typu systemu plików (fstype) lub UUID (np. Microsoft Recovery Partition)
- calamares: Przebudowano inicjalizację bazy kluczy (keyring)
- kernel-manager: Naprawiono obsługę budowania niestandardowego pkgbase z jądrami LTO i włączonymi modułami
- kernel-manager: Naprawiono opóźnienie monitu o hasło
- ISO: Zastąpiono radeon.modeset=1 przez amdgpu.modeset=1 dla nowoczesnych GPU
- game-performance: Zapobieżono błędowi, gdy profil jest niedostępny

**Dziennik zmian dla edycji Handheld:**

- obsługa urządzeń: Dodano obsługę Ally X, podziękowania dla Luke'a Jonesa
- libei: Zaimplementowano obsługę libei, zastępując libextest
- packagekit: Zablokowano instalację packagekit, aby zapobiec problemom z aktualizacjami systemu przez Discover
- hook: Dodano pacman-hook wykluczający się z natywnie kompilowanymi wersjami Protona, aby uniknąć potencjalnych problemów
- Zaktualizowano jupiter-fan-control, steamdeck-dsp oraz oprogramowanie układowe Steam Decka

24.07
----

**Funkcje:**

- Repozytorium: Wprowadzono repozytorium zoptymalizowane pod Zen 4, używane dla procesorów Zen4 i Zen5
- ISO: Dodano automatyczne wykrywanie architektury dla repozytorium Zen4/Zen5
- chwd: Dodano obsługę GC dla GPU AMD, co pomaga wykrywać GPU oficjalnie obsługujące ROCm
- chwd: Użycie libva-nvidia-driver na obsługiwanych kartach
- ksmctl: Wprowadzono narzędzie do włączania/wyłączania KSM: ksmctl --enable
- jądro: Dla jądra „linux-cachyos” dostępny jest teraz pakiet „linux-cachyos-dbg”, zawierający nieoczyszczony (unstripped) plik vmlinux do celów debugowania
- jądro: Dostępny jest teraz amd cpb boost, a power-profiles-daemon został załatany tak, aby przy profilu „powersave” wyłączać boost na procesorach AMD
- jądro: Dodano łatkę oszczędzania energii dla układów AMD SoC podczas odtwarzania wideo
- kernel-manager: Dodano obsługę zarządzania planistami sched-ext oraz uzyskiwania informacji przez GUI
- steam/proton: Dostępny jest teraz skrypt „game-performance”, który można dodać do opcji uruchamiania na Steamie
- power-profiles: Na procesorach obsługujących AMD Pstate najniższa częstotliwość liniowa jest teraz ustawiona wyżej, co może poprawić opóźnienia i 1% lows
- kwin: Dodano backport obsługi tearingu, który został przetestowany. Na kartach NVIDIA działa on tylko w natywnych aplikacjach Wayland
- netinstall: Cutefish zostało usunięte z listy środowisk graficznych możliwych do instalacji
- Serwery lustrzane: Dodano serwery lustrzane w Austrii oraz w Chinach; chiński serwer jest hostowany przez Uniwersytet TUNA. Powinno to bardzo pomóc użytkownikom z Chin
- Aktualizacje pakietów: linux-cachyos 6.9.9, mesa 24.1.3, NVIDIA 555.58.02, Plasma 6.1.2, LLVM 18.1.8

**Poprawki błędów:**

- ISO: Ustawiono copytoram na auto zamiast yes
- ISO: Naprawiono uśpienie na Live ISO na laptopach
- Launch Installer: Instalacja najnowszego archlinux-keyring przed rozpoczęciem instalacji, aby uniknąć problemów podczas pobierania archlinux-keyring w środowisku chroot
- Ocenianie serwerów lustrzanych: Podczas instalacji oceniane są wyłącznie serwery lustrzane poziomu Tier 1
- pacman.conf: Usunięto nieużywane repozytorium pacmana
- cachy-chroot: Ukrycie podwoluminów .snapshot
- Calamares: Rezygnacja z używania modułu „Preservefiles”, ponieważ użytkownicy zgłaszali z nim problemy.

**Dziennik zmian dla edycji Handheld:**

- Dodano plik konfiguracyjny do stosowania innego skalowania, '/home/$USER/.config/deckscale
- Zwiększono niezawodność przełączania w tryb GameMode
- Zaktualizowano oprogramowanie układowe WiFi/Bluetooth dla Steam Decka
- Zaimplementowano automatyczne montowanie dla GameMode
- Dodano poprawki gamescope-session dla topologii CPU w Wine, HDR oraz podświetlenia
- Naprawiono wybór częstotliwości odświeżania
- Zaktualizowano jupiter-hw-support, steamdeck-dsp, jupiter-fan-control, gamescope-session-git

24.06
----

**Funkcje:**

- chwd: Wprowadzono wykrywanie sprzętu handheld
- chwd: Wprowadzono obsługę MacBooków T2
- chwd: Dodano wykrywanie sterowników sieciowych
- Instalacja: Dodano obsługę MacBooków T2
- ISO: Dodano cachy-chroot. Jest to skrypt ułatwiający użytkownikowi wykonanie chroot do systemu.
- ISO: Przełączono na hooki mikrokodu; wymaga to użycia najnowszego wydania Ventoy (1.0.98)
- ISO: Włączono copytoram; nie musi już być wyłączone, ponieważ nie oferujemy już instalacji offline
- system plików: BTRFS jest teraz domyślnie wybranym systemem plików
- netinstall: Użycie ufw zamiast firewalld
- Calamares: Zaktualizowano slajdy marki
- Slajdy: Zaktualizowano pod kątem najnowszych zmian
- Aktualizacje pakietów: linux-cachyos 6.9.3, mesa 24.1.1, xwayland 24.1, NVIDIA 555.52.04, Plasma 6.0.5

**Poprawki błędów:**

- Calamares: umount: Ponownie włączono opcję emergency
- Qtile: Przyciski multimedialne działają teraz poprawnie
- NVIDIA: Włączono wymagane usługi i opcje dla prawidłowego działania uśpienia na Waylandzie
- netinstall: Usunięto b43-fwcutter z instalacji
- netinstall: Zastąpiono hyprland-git pakietem hyprland
- netinstall: Usunięto linux-cachyos-lts z wyboru, aby uniknąć problemów z brakującymi modułami
- Calamares: Shellprocess: Przeniesiono ocenianie serwerów lustrzanych przed instalację bazy kluczy

**Dziennik zmian eksperymentalnego wydania Handheld:**

- Domyślnie motyw KDE Vapor (motyw SteamOS)
- Domyślny system plików: BTRFS
- Domyślne jądro: linux-cachyos-deckify
- SDDM używa teraz Waylanda
- Flaga środowiskowa dla HHD zmniejszająca opóźnienia
- Dodano argumenty jądra poprawiające przełączanie w tryb Game Mode
- Nazwę użytkownika można teraz edytować
- Wykrywanie sprzętu konfiguruje i instaluje wymagane pakiety w zależności od używanego urządzenia
- Klawiatura Mallit korzysta teraz z trybu ciemnego
- Powerbuttond od Valve zapewniające prawidłowe uśpienie
- Skróty można teraz dodawać do Steama
- Zaktualizowano scx-scheds do najnowszego commita git, zapewniając najnowsze ulepszenia dla planisty LAVD
- Dodano automatyczne montowanie do cachyos-handheld
- CachyOS może teraz wykonywać aktualizacje BIOS-u Steam Decka na Steam Decku

24.05
----

**Funkcje:**

- Systemy plików: Wprowadzono Bcachefs jako opcję systemu plików
- pacstrap: Dodano wykrywanie użycia Bcachefs i instalację odpowiedniego pakietu Bcachefs-tools
- CachyOS-AI-SDK: Wprowadzono nową opcję instalacji zapewniającą gotową konfigurację NVIDIA SDK
- CachyOS-Deckify: Udostępniono wariant dla urządzeń Handheld (eksperymentalny), zobacz [tutaj](https://discuss.cachyos.org/t/information-experimental-cachyos-deckify/203), aby uzyskać więcej szczegółów
- BTRFS: Automatyczny Snapper do migawek, możliwy do zainstalowania z poziomu aplikacji CachyOS hello.
- ISO: Usunięto instalator offline
- Aktualizacje pakietów: Python 3.12, gcc 14.1.1, mesa 24.0.6, xwayland 24.1rc2, NVIDIA 550.78

**Poprawki błędów:**

- settings.conf: Przeniesiono wykrywanie sprzętu przed netinstall
- pacstrap: Użycie btrfs-assistant zamiast btrfs-assistant-git
- plymouth: usunięcie hooka plymouth przy połączeniu zfs + szyfrowanie
- ISO: Dodano różne pliki konfiguracyjne dla KDE, aby uniknąć blokowania ekranu podczas instalacji
- services-systemd: Prawidłowe włączenie fstrim.timer
- umount: Wyłączono tryb emergency, aby uniknąć problemów z instalacją zfs
- shellprocess: Wyczyszczono pozostałości po instalacji offline

24.04
----

**Funkcje:**

- Plymouth: Użycie plymouth do zapewnienia tematycznej animacji rozruchu
- ISO: Powrót do X11 z powodu problemów podczas ustawiania układu klawiatury w Calamaresie
- rEFInd: Nowy układ partycji (osobne /boot oraz /boot/efi)
- netinstall: KDE: Domyślna instalacja xwaylandvideobridge
- netinstall: Użycie lightdm zamiast ly dla różnych środowisk graficznych z powodu błędu w ly
- systemd-boot: Użycie @saved dla systemd-boot, aby pamiętał poprzednio wybrany wpis rozruchu
- cachyos-keyring: Przebudowano pakiet cachyos-keyring i udostępniono cachyos-trusted keyring
- ISO: Użycie kompresji ZSTD 19 dla obrazu mkinitcpio na ISO
- Aktualizacje pakietów: xz 5.6.1-3, linux-cachyos 6.8.2, pacman 6.1.0-5, mesa 24.0.4, Plasma 6.0.3, nvidia 550.67 oraz cachyos-settings 39-2

**Poprawki błędów:**

- Autologin: Naprawiono opcję automatycznego logowania podczas używania z sddm
- xz: Dostarczono załatany pakiet xz
- libarchive: Złagodzono skutki commita złośliwego autora w xz
- cachyos-settings: reguła udev: nie ustawiaj watermark_scale_factor na 125, ponieważ znacznie zwiększa to zużycie pamięci RAM
- calamares: pacman-keyring: Zastosowano prostszą metodę integracji bazy kluczy w instalacji

24.03.1
----

**Funkcje:**

- netinstall: Usunięto dodatkowe jądra z wyboru netinstall, aby nie dezorientować użytkowników. Inne niestandardowe jądra można zainstalować przez Kernel Manager
- Kernel Manager: Moduły NVIDIA są automatycznie instalowane po wykryciu sprzętu, przebazowano pod QT6, naprawiono własne nazwy przy użyciu opcji LTO
- Package Installer: Przebazowano na QT6, zaktualizowano pod pacmana 6.1
- Aktualizacje pakietów: linux-cachyos 6.8.1, pacman 6.1, mesa 24.0.3, Plasma 6.0.2, llvm 17.0.6

**Poprawki błędów:**

- NVIDIA: załatano moduł nvidia, aby wcześniej przejmował własność nvidia.drm.modeset i uniknąć problemów na kartach graficznych NVIDIA
- Refind: Nie instaluj jądra lts, aby uniknąć problemów
- shellprocess: Całkowite usunięcie katalogu liveusers

24.03
----

**Funkcje:**

- ISO: Plasma 6 jest teraz dostarczana na obrazie ISO i domyślnie używa Waylanda; obraz GNOME ISO został wycofany, aby uniknąć nieporozumień dotyczących netinstall
- Calamares: Przebazowano pod QT6
- refind: Dodano f2fs i zfs jako opcje, w tym z szyfrowaniem luks2
- serwery lustrzane: Udostępniamy teraz 2 globalne sieci CDN. Jedną hostowaną przez Cloudflare R2, a drugą przez Digital Ocean
- lista serwerów lustrzanych: Pobieranie instalatora online bezpośrednio z CDN w celu zapewnienia szybszego dostarczania
- initcpiocfg: Użycie nowego hooka microcode do wczesnego ładowania mikrokodu
- menedżer rozruchu: Zaprzestano ładowania mikrokodu przez menedżer rozruchu
- Aktualizacje pakietów: linux-cachyos 6.7.9, mesa 24.0.2, zfs-utils 2.2.3

**Poprawki błędów:**

- pacstrap: Nie instaluj pakietów konfiguracyjnych, aby zapewnić użytkownikowi czystszy wybór podczas instalacji
- shellprocess_pacman: Kopiowanie również ocenionych list serwerów lustrzanych cachyos-v4-mirrorlists do systemu docelowego

24.02
-----

**Funkcje:**

- refind: Zmiana układu z /boot/efi na /boot, aby zapewnić więcej opcji systemów plików i szyfrowania
- Live-ISO: Czyszczenie i synchronizacja obrazu Live-ISO
- Launch Installer: Dodano zalecenie instalacji online
- konfiguracje powłoki: Dodano opcję wyłączenia fastfetch przy uruchamianiu terminala oraz dodano alias „update”
- netinstall: Dodano phonon-qt5-vlc do kde
- Aktualizacje pakietów: linux-cachyos 6.7.5, mesa 23.3.5, gcc 13.2.1-12, glibc 2.39, mesa 24.0.1, nvidia 550.54.14

24.01
-----

**Funkcje:**

- x86-64-v4: Automatyczne wykrywanie i włączanie repozytorium podczas instalacji
- linux-cachyos: szkielet planisty sched-ext jest teraz dostarczany w domyślnym jądrze
- xwayland: Domyślne dostarczanie łatek explicit sync
- Aktualizacje pakietów: linux-cachyos 6.7, mesa 23.3.3, gcc 13.2.1-8, xorg-xwayland 23.2.4

**Poprawki błędów:**

- chwd: Dla kart Nvidia Ada Lovelace moduły nvidia są pakowane bezpośrednio do initramfs, aby uniknąć problemów z wczesnym KMS

23.12
-----

**Poprawki błędów:**

- zfs: Dodano compatibility=grub do opcji puli, aby zapewnić kompatybilność
- grub/xfs: Dodano łatkę do gruba dla kompatybilności z nowym domyślnym ustawieniem xfs bigtime
- netinstall: xdg-desktop-portal-hyprland zamiast xdg-desktop-portal-hyprland-git

23.11
-----

**Funkcje:**

- nvidia: Użycie modułu nvidia zamiast dkms
- Zsynchronizowano Calamares z wydaniem nadrzędnym
- Aktualizacje pakietów: linux-cachyos 6.6.1, nvidia-utils 545.29.02, mesa 23.2.1, zfs-utils 2.2.0, mkinitcpio 37

**Poprawki błędów:**

- nvidia-hook: Ponownie dodano nvidia-hook, aby uniknąć problemów podczas instalacji z nowym modułem
- netinstall: Zmieniono nazwy pakietów z powodu ostatnich zmian w paczkowaniu KF5
- netinstall: Dodano xdg-desktop-portal-gnome do instalacji GNOME

23.09
-----

**Funkcje:**

- systemd-boot: Domyślnie luks2
- netinstall: Własna kategoria dla pakietów CachyOS
- Zsynchronizowano Calamares z wydaniem nadrzędnym
- Aktualizacje pakietów: linux-cachyos 6.5.3, nvidia-utils 535.104.05, mesa 23.2.7

**Poprawki błędów:**

- shellprocess_sdboot: Unikanie używania „sudo” podczas generowania wpisów rozruchowych w procesie instalacji

23.08
-----

**Funkcje:**

- Zsynchronizowano Calamares z wydaniem nadrzędnym
- Aktualizacje pakietów: linux-cachyos 6.4.10, nvidia-utils 535.98

**Poprawki błędów:**

- Baza kluczy (keyring) została zaktualizowana i działa teraz poprawnie

23.07
-----

**Funkcje:**

- CachyOS-Settings zawiera teraz „bpftune”, który automatycznie dostraja ustawienia sieciowe w zależności od użycia
- CachyOS-Qtile-Settings: Ulepszenia komfortu użytkowania (QoL), lepsze ikony, ...
- Aktualizacje pakietów: linux-cachyos 6.4.2, cachy-browser 115.0.1, mesa 23.1.3,

**Poprawki błędów:**

- naprawiono rate-mirrors
- chwd (Hardware Detection) otrzymało liczne poprawki
- naprawiono instalację niewolnych sterowników dla konfiguracji hybrydowych w instalatorze
- naprawiono zawieszanie się Calamaresa występujące w rzadkich konfiguracjach, głównie na maszynach wirtualnych
- Slajdy: poprawiono literówkę na slajdzie 6

23.06
-----

**Poprawki błędów:**

- Instalacja offline: Naprawiono Calamares

23.05
-----

**Funkcje:**

- Układ po migracji CachyOS na Git jest teraz odzwierciedlony w instalacji
- chwd (mhwd) otrzymało liczne poprawki
- Pacman: Dodaliśmy funkcję umożliwiającą wyświetlenie wiadomości dla naszych użytkowników przed aktualizacją
- Calamares został zsynchronizowany z wydaniem nadrzędnym
- Aktualizacje pakietów: linux-cachyos 6.3.4, cachy-browser 113.0.1, mesa 23.1.1, python 3.11

**Poprawki błędów:**

- netinstall: drobne poprawki wynikające ze zmian w pakietach
- Slajdy: Zaktualizowano slajd 6, aby odzwierciedlał najnowsze zmiany

23.04
-----

**Funkcje:**

- Wprowadzenie środowiska graficznego Qtile
- Przebudowane mhwd: Przepisane w Rust; uproszczone profile dla kart GPU i kart sieciowych; usunięto mnóstwo przestarzałego kodu
- Aktualizacje pakietów: linux-cachyos 6.2.12, cachy-browser 112.0.1, mesa 23.0.3, zfs-utils 2.1.11

**Poprawki błędów:**

- f2fs: Usunięto opcję montowania „atgc”, ponieważ powodowała problemy z systemd

23.03.1
-------

**Funkcje:**

- Aktualizacje pakietów: linux-cachyos 6.2.7, cachy-browser 111.0

**Poprawki błędów:**

- Naprawiono współpracę Calamaresa z menedżerem wyświetlania lightdm z powodu wadliwych commitów nadrzędnych w Calamaresie
- Naprawiono problem z bazą kluczy w instalacji offline
- Refind: Domyślne użycie linux-cachyos-lts. Obecne 6.2 nie wydaje się dobrze współpracować z refind

23.03
-----

**Nowe funkcje:**

- Dodano menedżer rozruchu refind
- Automatyczna instalacja sterowników Nvidia za pomocą MHWD
- Obsługa szyfrowania dla instalacji ZFS
- Dodano Hyprlanda do instalacji sieciowej (netinstallation)
- CachyOS-KDE-Settings używa teraz domyślnego motywu KDE, ale motywy CachyOS nadal są preinstalowane i dostępne do użycia
- Aktualizacje pakietów: linux-cachyos 6.2.2, mesa 23.0.0, cachy-browser 110.0.1, plasma 5.27.2
- Całkowicie przebudowano i ulepszono moduł menedżera rozruchu w Calamaresie
- Obraz ISO jest teraz podpisywany kluczem GPG
- Ulepszono i zaktualizowano MHWD
- Zsynchronizowano Calamares z wydaniem nadrzędnym

**Poprawki błędów:**

- Opcja „zastąp partycję” oferuje teraz wybór systemu plików
- Naprawiono literówkę na slajdzie 3
- naprawiono nouveau, które teraz poprawnie ładuje moduł
- MHWD: Użycie modesetting dla INTEL/ATI oraz Nouveau
- Usunięto hook zfs z mkinitcpio na live iso, co powodowało problemy podczas rozruchu
- Możesz pobrać aktualizację z naszych serwerów lustrzanych na SourceForge.

23.02
-----

**Nowe funkcje:**

- Dodano repozytorium cachyos-community-v3
- Dodano środowiska graficzne Budgie, Mate i LXDE do instalacji sieciowej
- Usługa Bluetooth.service jest teraz domyślnie włączona
- F2FS i grub są ponownie włączone i działają
- Aktualizacje pakietów: linux-cachyos 6.1.10, mesa 22.3.4, zfs-utils 2.1.9, glibc 2.37, cachy-browser 109.0.1

**Poprawki błędów:**

- Rate-mirrors przełącza się teraz na nieocenione serwery lustrzane, jeśli nie uda się ich ocenić
- cachyos-rate-mirrors ma dłuższy czas oczekiwania fetch-mirrors-timeout
- Dodano Github do hosts, aby uniknąć problemów z listą serwerów lustrzanych
- Zaktualizowano wpisy rozruchowe dla BIOS w syslinux

23.01
-----

**Funkcje:**

- Slajdy Calamaresa zostały przebudowane i zaktualizowane
- Środowisko graficzne UKUI zostało dodane do instalacji sieciowej
- Środowisko graficzne Cinnamon zostało dodane do instalacji sieciowej
- Cmdline: zswap jest teraz domyślnie wyłączony, ponieważ CachyOS domyślnie dostarcza zram
- Zaktualizowano Calamares do najnowszego commita
- LLVM 15 jest teraz dostarczany domyślnie
- Aktualizacje pakietów: linux-cachyos 6.1.7, mesa 22.3.3, Plasma 5.26.5, llvm 15.0.7, gcc 12.1.1, binutils 2.40, zfs-utils 2.1.8, nvidia 525.85.05
- Zaktualizowano instalator CLI

**Poprawki błędów:**

- skrypt shellprocess remove-ucode uruchamia się teraz także podczas instalacji offline
- usunięto pamac z instalacji sieciowej
- ocenione serwery lustrzane cachyos są teraz poprawnie kopiowane do docelowej instalacji
- power-profile-daemon nie jest już domyślnie włączany

22.12
-----

**Funkcje:**

- Nowe tło GRUB w menedżerze rozruchu ISO
- memtest jest teraz dołączony dla systemów UEFI
- Dodano motyw CachyOS-sddm-theme do instalacji KDE
- Dodano automatyczny skrypt wersji podczas tworzenia ISO
- Zaktualizowano Calamares do najnowszego commita
- Serwery lustrzane są teraz oceniane za pomocą „cachyos-rate-mirrors”, który ocenia nasze serwery lustrzane oraz serwery Arch
- Aktualizacje pakietów: Jądro 6.1.1, mesa 22.3.1, plasma 5.26.4,...
- Usunięto środowisko graficzne Kofuku
- dodatkowy obraz ISO z dołączonym llvm 15, aby zapewnić obsługę nowszych kart AMD

**Poprawki błędów:**

- Naprawiono Calamares podczas używania GNOME jako obrazu ISO
- zfshostid działa teraz poprawnie zarówno w instalacji offline, jak i online
- Dodano hook „kms” do modułu initcpiocfg, aby podążać za domyślnymi ustawieniami archlinuxa
- Oraz więcej poprawek ISO

22.11
-----

**Funkcje:**

- Calamares i jego konfiguracja są dostarczane w jednym pakiecie
- Pełne porządki w pakietach instalacji sieciowej
- Dodano moduł automatycznie usuwający niepotrzebny mikrokod
- zmniejszono wymaganą ilość pamięci RAM do 2,5 GB
- Pakiety wymagane dla btrfs są teraz instalowane tylko przy wyborze btrfs
- Zaktualizowano Calamares do najnowszego commita
- Menedżer rozruchu ISO ma teraz tło
- Ogólne aktualizacje pakietów (mesa, jądro, ...)
- Zastąpiono systemd-network przez networkmanager

**Poprawki błędów:**

- usunięto qemu-quest-agent.service z obrazu ISO
- całkowicie wyłączono copytoram, ponieważ psuło instalację offline
- zaktualizowano mkinitcpio.conf
- Oraz więcej poprawek ISO

22.10
-----

**Funkcje:**

- Pacman używa teraz Architecture=auto dla instalacji x86-64-v3, ponieważ dodaliśmy łatkę sprawiającą, że pacman automatycznie wykrywa x86-64-v3
- Pacman pokazuje teraz, z którego repozytorium pochodzi zainstalowany pakiet
- Wybór menedżera rozruchu automatycznie wykrywa obecność EFI; jeśli go nie ma, domyślnie wybiera grub
- Wybór partycji wymiany (swap) jest teraz domyślnie wyłączony, ponieważ zram jest generowany automatycznie i dynamicznie
- Zaktualizowano Calamares do najnowszego commita
- Minimalne wymagania dotyczące pamięci RAM zostały ustawione na 4 GB
- usunięto cachyos-grub-theme

**Poprawki błędów:**

- Wyłączono wykrywanie SSD i HDD w fstab do czasu pojawienia się poprawki w projekcie nadrzędnym
- naprawiono podwójny podwolumin BTRFS
- Dodano brakujący mikrokod do menedżera rozruchu grub na ISO
- Dodano zapasowy tryb rozruchu, który nie ustawia żadnego trybu modeset (nomodeset)
- Oraz więcej poprawek ISO

22.09
-----

**Funkcje:**

- Calamares jest teraz na najnowszej gałęzi 3.3. Przynosi ona poprawki błędów oraz nowe funkcje dla Calamaresa
- Instalator TUI jest teraz zawarty w GUI ISO; możesz go użyć poleceniem „cachyos-installer”
- Calamares automatycznie wykrywa teraz, czy docelowy system plików znajduje się na SSD czy HDD, i dostosowuje do tego opcje fstab
- Nvidia dla najnowszych GPU (począwszy od serii 9xx) ma teraz własny wpis rozruchowy, aby uniknąć problemów z nouveau
- zaktualizowano opcje montowania fstab i zfs
- FireFox nie będzie już domyślnie instalowany, ponieważ domyślnie instalowany jest cachy-browser

**Poprawki błędów:**

- usunięto cachyos-gaming-meta z modułu netinstall, aby uniknąć problemów podczas procesu instalacji
- pakiety netinstall zostały zaktualizowane i otrzymały kilka poprawek
- naprawiono instalację OpenBox
- zwykłe poprawki tłumaczeń

22.07
-----

**Funkcje:**

- Wybór menedżera rozruchu: Użytkownik może teraz podczas instalacji online wybrać między grub a systemd-boot
- Podczas instalacji online będzie teraz zawsze instalowany najnowszy Calamares, co ułatwia wprowadzanie poprawek błędów „w locie”
- Calamares ma teraz moduł mhwd, który automatycznie instaluje potrzebne sterowniki (wolne sterowniki)
- Calamares ma nowe slajdy graficzne podczas instalacji
- zaktualizowano opcje montowania fstab i zfs
- Obsługa HiDPI

**Poprawki błędów:**

- Naprawiono błąd z ustawieniami lokalnymi (locales) w Calamaresie
- Usunięto F2FS dla menedżera rozruchu grub, ponieważ obecnie nie działa (błąd Calamaresa); nadal można go używać z systemd-boot
- Calamares wyświetla teraz prawidłowy domyślny system plików
- Naprawiono obraz ISO Gnome
- Dodano brakujące pakiety na live ISO dla instalacji offline
- naprawiono szyfrowanie luks dla swap na btrfs
- zwykłe poprawki tłumaczeń

22.06
-----

Naprawiono następujące znane błędy:

- Instalacja kończyła się niepowodzeniem przy użyciu ogólnego CPU
- KDE automatycznie montowało partycje zfs, co powodowało, że automatyczne logowanie do obrazu ISO przestawało działać

**Ulepszenia:**

- Skorygowano zaporę sieciową na serwerze; cloudflare blokowało użytkowników jako „boty”, co powodowało błąd podczas instalacji
- Dodano obsługę motywów dla Gnome, XFCE, OpenBox
- Zaktualizowano naszą wiki

**_CachyOS - Kernel - Manager_**
Z radością ogłaszamy również nasz CachyOS-Kernel-Manager.
Daje on możliwość zainstalowania jądra z repozytorium oraz skonfigurowania w GUI własnej kompilacji jądra, co bardzo ułatwia dostosowanie go do własnych potrzeb.

Podczas kompilacji jądra możesz wybrać następujące opcje:

- Planista (BMQ, BORE, cacULE, cfs, PDS, TT)
- NUMA wyłączone lub włączone
- KBUILD CFLAGS (-O3 lub -O2)
- Ustawienie zarządcy performance jako domyślnego
- Włączenie BBR2
- Częstotliwość taktowania zegara (Tickrate: 500Hz, 600Hz, 750Hz, 1000Hz)
- tryb beztykowy (tickless: idle, periodic, full)
- wyłączenie planisty I/O MQ-Deadline
- wyłączenie planisty I/O Kyber
- Włączenie lub wyłączenie MG-LRU
- Włączenie lub wyłączenie DAMON
- Włączenie lub wyłączenie Speculative page fault
- Włączenie lub wyłączenie LRNG (Linux Random Number Generator)
- Zastosowanie automatycznej optymalizacji jądra (automatycznie wykrywa architekturę CPU March)
- Zastosowanie optymalizacji jądra przez wybór (zobaczysz listę różnych architektur CPU-March i będziesz mógł wybrać swoją numerem)
- Wyłączenie debugowania (zmniejsza rozmiar jądra)
- Włączenie lub wyłączenie nf cone
- Włączenie LTO (Full, Thin, No)

22.05
-----

CachyOS został założony rok temu. Po niemal roku prac rozwojowych z dumą ogłaszamy nasze pierwsze stabilne wydanie instalatora GUI.
Poświęciliśmy mnóstwo czasu na badanie zarządzania repozytoriami, rozwój jądra, infrastrukturę, motywy... i w końcu połączyliśmy to wszystko w instalatorze GUI CachyOS.
Wszystkie funkcje, nad którymi pracowaliśmy i które wdrożyliśmy w instalatorze, mają na celu zapewnienie użytkownikom w pełni konfigurowalnego środowiska.

Najbardziej ekscytującymi zmianami są wykorzystanie pacstrap w instalacji online, co zapewnia całkowicie czyste zainstalowane środowisko, oraz pełna natywna obsługa systemu plików zfs.

Ponieważ Discord ogranicza długość wiadomości, pełne ogłoszenie można znaleźć tutaj:

<https://discuss.cachyos.org/t/cachyos-gui-installer-changelog/>

Pliki do pobrania można znaleźć tutaj:
<https://mirror.cachyos.org/ISO/kde/220522/>
<https://sourceforge.net/projects/cachyos-arch/>
