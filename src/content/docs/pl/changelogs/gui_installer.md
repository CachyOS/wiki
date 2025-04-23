---
title: Lista zmian instalatora GUI
description: Lista zmian Calamares oraz obrazu Live ISO GUI
---
25.04
----
 
**Nowości:**
- **occt**: Dodano OCCT do obrazu ISO, aby umożliwić testowanie obciążeniowe w środowisku live
- Podziękowania dla Marka za ten pomysł!
 
**Poprawki:**
- **jądro**: Naprawiono awarię modułu na laptopach Asus
- **limine**: Limine ma teraz zainstalowany mkinitcpio-limine-hook i automatycznie utworzy wpisy programu rozruchowego
 
 
**Lista zmian dla Edycji Przenośnej:**
- **audio**: Dodano profile audio dla ROG Ally X i Legion Go
- **gamescope**: Zastąpiono gamescope-plus wersją upstream gamescope
 
 
25.03
----
 
**Nowości**:
- **Program rozruchowy**: Dodano wsparcie dla programu rozruchowego Limine
- **Program rozruchowy**: Dodano wsparcie dla automatycznych migawek dla programu rozruchowego Limine
- **Samba**: Dodano pakiet "cachyos-samba-settings" do łatwej konfiguracji montowania Samby
- **NVIDIA**: Ponownie włączono firmware GSP dla zamkniętego modułu NVIDIA
- **Jądro**: Dodano wsparcie dla sterownika Asus Armoury
- **Secure Boot**: Ulepszono skrypt "sbctl-batch-sign" do podpisywania tylko wybranych plików
- **udev**: Wycofano używanie ntfs3 jako domyślnego sterownika dla partycji NTFS
- Info: Używanie sterownika jądra NTFS3 jako domyślnego powodowało problemy u niektórych użytkowników. Dlatego ponownie to wycofaliśmy.
- **wine**: Wine i Wine-Staging domyślnie używają teraz WoW64 i NTSync
- **scx-manager**: Przeniesiono menedżer GUI sched-ext z Menedżera Jądra do osobnej aplikacji
- **Wsparcie sprzętowe**: Dodano wsparcie dla RDNA4, RTX 5070 Ti i 5070.
- **Ustawienia**: Dodano wsparcie dla DLSS Swapper - jest to skrypt, który automatycznie aktualizuje i używa najnowszej wersji i ustawień DLSS
- **Aktualizacje pakietów**: linux-cachyos 6.14.0, NVIDIA 570.133.07, Gnome 48, Plasma 6.3.3, mesa 25.0.2, linux-api-headers 6.14.0, linux-tools 6.14.0
 
**Poprawki**:
- **initcpiocfg**: Usunięto dodawanie modułu "crc32c-intel" do mkinitcpio - Został on uznany za przestarzały i teraz domyślnie używany jest moduł "crc32c"
- **chwd**: Wyłączono odciążanie brcmfmac na MacBookach T2
- **chwd**: Nie instaluj sterownika NVIDIA 390.xx na laptopach
 
25.02
----
 
**Nowości**:
- **Jądro**:
- Optymalizacja Propeller jest teraz stosowana do domyślnego jądra **linux-cachyos** dla wszystkich dostępnych architektur.
- **Uwaga**: W połączeniu z AutoFDO może to poprawić wydajność o około 10%, w zależności od obciążenia.
- **NVIDIA**: Dodano wsparcie dla architektury Blackwell.
- **ISO**: Używanie modułu nvidia-open jako domyślnego w celu zapewnienia wsparcia dla Blackwell. Użytkownicy z GPU starszymi niż Turing powinni używać pierwszej lub zapasowej opcji rozruchu.
- **Ustawienia**: Domyślnie włączono dotknięcie-by-kliknąć dla sesji X11.
- **udev**: Używaj ntfs3 jako domyślnego sterownika dla partycji NTFS.
- **game-performance**: Wyłączono wygaszacz ekranu podczas uruchamiania gier.
- **kernel-manager (sched-ext)**: Dodano wsparcie dla trybu serwera.
- **jądro**: Dodano poprawki dla funkcji preferowanych rdzeni AMD.
- **chwd**: Ponownie dodano obejście dla RTD3.
- **Aktualizacje pakietów**: linux-cachyos 6.13.0, NVIDIA 570.86.16, LLVM 19, glibc 2.41, mesa 24.3.4.
 
**Poprawki**:
- **chwd**: Naprawiono problem, przez który laptopy hybrydowe ze sprzętem Intel i NVIDIA nie mogły używać swojego GPU w DaVinci Resolve.
- **glibc**: Dodano poprawkę dla CVE-2025-0395.
- **kernel-manager**: Próba instalacji prekompilowanego modułu NVIDIA, jeśli jest dostępny dla domyślnego jądra Arch.
- **kernel-manager**: Dodano dodatkowe sprawdzenie, aby uniknąć nadpisania wartości w przypadku braku modułu.
 
**Lista zmian dla Edycji Przenośnej:**
- **hooki**: Ponownie zezwolono na używanie natywnie skompilowanego Protona.
- **różne**: Kilka aktualizacji i poprawek.
 
24.12
----
 
**Nowości**:
- Jądro:
- AutoFDO jest teraz stosowane do domyślnego jądra `linux-cachyos` dla wszystkich dostępnych architektur
- **Uwaga**: Poprawa wydajności jest na razie minimalna z powodu obecnych ograniczeń. Łączenie profili wymaga LLVM 19, a Optymalizacja Propeller zależy od tego. Spodziewamy się, że LLVM 19 i bardziej zoptymalizowane profile będą dostępne pod koniec roku, po przyjęciu LLVM 19 przez Arch Linux
- chwd: Rusticl jest teraz poprawnie skonfigurowany
- chwd: ulepszone logowanie błędów podczas wywołań hooków
- chwd: naprawiono wybór sterowników VAAPI
- cachyos-settings: Dodano skrypt ułatwiający uruchamianie aplikacji przez Zink
- Konfiguracja Sysctl: Przerobiono i zoptymalizowano kilka ustawień
- Menedżer Jądra: Dodano wsparcie dla `scx_loader`, umożliwiając natywne przełączanie planistów
- Instalator: Usługa Bluetooth jest teraz domyślnie włączona
- Netinstall:
- Dodano `wireless-regdb` do instalowanych pakietów
- Konfiguruje to połączenie do używania odpowiednich kanałów i odblokowuje dodatkowe kanały, potencjalnie poprawiając prędkość internetu
- **Uwaga**: Domyślnie ustawiony jest region ogólny; dostosowanie go do swojego regionu jest zalecane dla optymalnej wydajności
- **Aktualizacje pakietów**: NVIDIA 565.77, linux-cachyos 6.12.6, mesa 24.3.2, scx-scheds 1.0.8, zfs 2.2.7
 
**Poprawki błędów**
- Instalator: Logi instalacji nie tworzą już okien terminala debugowania
- Zarządzanie partycjami:
- Odpowiednie ustawienia `umask` zapewniają, że `/boot` jest niedostępny bez wystarczających uprawnień
- Uruchamianie instalatora: Naprawiono sprawdzanie łączności internetowej
 
**Lista zmian Edycji Przenośnej:**
- Zaktualizowano pakiety związane z urządzeniami przenośnymi
- Naprawiono problem z obsługą profili zasilania
- Dodano wsparcie dla WiFi 6
 
24.11
----
 
**Nowości:**
- thp-shrinker: Ustawiono wartość max_ptes_none na 80% dla stron wypełnionych zerami. Zmniejszy to zużycie pamięci, gdy THP jest zawsze używane, zachowując tę samą wydajność
- NVIDIA: Firmware GSP jest teraz automatycznie wyłączany, jeśli użytkownik samodzielnie przełączy się na zamknięty sterownik
- chwd: NVIDIA: Usługi nvidia-powerd są włączane dla laptopów, aby osiągnąć maksymalne dostępne TDP
- proton-cachyos: Generowanie klatek DLSS działa teraz. Oczekuje się, że będzie to również działać w przyszłości w upstream proton
- jądro: Zastosowano Optymalizator Pamięci Podręcznej AMD. Użytkownicy z procesorami z podwójnymi CCD x3d mogą teraz przełączać się między preferowaniem rdzeni częstotliwościowych a rdzeni pamięci podręcznej
- jądro: amd-pstate: Przeniesiono poprawki wydajności amd-pstate dla Strix Point
- jądro: Dodano poprawki upstream dla problemów z TDP na GPU AMD RDNA2 i RDNA3
- jądro: Dodano poprawki timingów dla wyświetlaczy o konfiguracji 5120x1440x240
- jądro: Eksperymentalne jądro zoptymalizowane przez AutoFDO w repozytorium pod nazwą "linux-cachyos-autofdo"
- ISO: Dodano sprawdzanie, czy użytkownik uruchamia edycję przenośną i ostrzeganie, jeśli rozpoczyna instalację na nieobsługiwanym urządzeniu
- ISO: Dodano sprawdzanie, czy użytkownik używa najnowszego obrazu ISO, jeśli nie, ostrzegaj go
 
**Poprawki błędów:**
- refind: partycjonowanie: zmieniono układ partycji z 3-częściowego na 2-częściowy
- netinstall: dodano kdeplasma-addons do instalacji Plasmy
- calamares: Naprawiono problem podczas partycjonowania z partycją wymiany (swap)
 
**Lista zmian Edycji Przenośnej:**
- Wsparcie dla Rog Ally X powinno zostać ulepszone
 
24.10
----
 
**Nowości:**
- Aktualizacje pakietów: linux-cachyos 6.11.1, mesa 24.2.4, scx-scheds 1.0.5, python 3.12.7
 
**Poprawki błędów:**
- sddm: Wprowadzono nowszy sddm, aby naprawić logowanie do sesji Wayland
- ISO: Dodano xf86-video-amdgpu, aby naprawić ładowanie sesji graficznej w niektórych konfiguracjach
- chwd: Naprawiono ponowną instalację profili
 
24.09
----
 
**Nowości:**
- Pakiety: Zoptymalizowano wiele pakietów za pomocą PGO, takich jak LLVM, Clang, svt-av1 i nodejs. Przyniosło to na przykład o 10% szybszy kompilator Clang
- Repozytorium: Repozytorium jest teraz synchronizowane i aktualizowane częściej, co oznacza jeszcze mniejsze opóźnienia. Interwał synchronizacji został zmniejszony z co 3 godzin do co godzinę.
- Repozytorium: Od 27.09.2024 pakiety skompilowane z -fpic będą automatycznie włączać -fno-semantic-interposition. Może to zapewnić poprawę wydajności dla wielu pakietów.
- zlib-ng: Jest teraz używany jako zamiennik zlib
- sddm: W instalacji KDE, sddm będzie teraz domyślnie używać Wayland jako kompozytora. # Podaj zmiany migracyjne w poście wydania
- cachyos-settings: NetworkManager używa teraz systemd-resolved jako backendu, co pomaga w buforowaniu DNS
- cachyos-settings: Używaj time.google.com jako serwera synchronizacji czasu, aby uniknąć problemów z synchronizacją czasu w niektórych konfiguracjach
- gcc: Dodano poprawki do dostrajania znver5
- gcc: Wybrano łaty i flagi z Clear Linux
- glibc: Dodano łaty "evex" oraz wybrane elementy z Clear Linux
- wiki: Wiki otrzymało wiele nowych dodatków i przeróbek
- chwd: Uproszczono obsługę urządzeń
- chwd: Wszystkie profile są teraz specjalnie zaprojektowane dla urządzeń PCI
- chwd: Dodaj --autoconfigure do automatycznej obsługi instalacji sterowników
- Aktualizacje pakietów: linux-cachyos 6.11.0, mesa 24.2.3, Plasma 6.1.5, NVIDIA 560.35.03, calamares 3.3.10, QT 6.7.3
 
**Poprawki błędów:**
- Launch-Installer: Dodano poprawki synchronizujące zegar sprzętowy przed rozpoczęciem instalacji
- calamares: Dodano poprawkę odmontowywania systemu plików po instalacji
- keyring: Wyczyść i utwórz ponownie pęk kluczy przed rozpoczęciem instalacji; naprawia to rzadkie problemy z pękiem kluczy
- sysctl: Zrzuty pamięci (core dumps) zostały ponownie włączone
- chwd: Usunięto `libva-nvidia-driver` z profilu PRIME, aby zapobiec potencjalnym konfliktom i poprawić kompatybilność z oprogramowaniem takim jak Spectacle
- cachyos-settings: Dodano obejście dla awarii GNOME Wayland
- cachyos-fish/zsh-config: Usunięto specyficzne dla Wayland obejścia
 
**Lista zmian dla Edycji Przenośnej:**
- Ally/Ally X: HHD został zastąpiony przez inputplumber, ponieważ hhd nie używa poprawnie sterownika jądra, co powoduje problemy.
- Zaktualizowano pakiety związane z urządzeniami przenośnymi
 
24.08
----
 
**Nowości:**
- chwd: NVIDIA używa teraz domyślnie otwartego modułu dla obsługiwanych kart
- Pulpit: Dodano środowisko graficzne Cosmic do opcji instalacji
- NVIDIA: Najnowszy sterownik 560 Beta jest teraz domyślny; załatano egl-wayland, aby naprawić awarie w Firefoksie i innych aplikacjach
- mirrors: CDN77 zasponsorowało CachyOS pamięcią obiektową z globalnym cachem, znacznie poprawiając prędkości połączenia dla użytkowników
- mirrors: CachyOS udostępnia teraz własny mirror Arch Linux, aby uniknąć problemów z synchronizacją, ustawiony jako domyślny podczas instalacji wraz z mirrorami zapasowymi
- SecureBoot: Wprowadzono skrypt i samouczek w Wiki dla łatwego wsparcia Secure Boot
- cachy-chroot: Dodano automatyczne montowanie przez fstab dla uproszczonego chrootowania
- cachy-chroot: Zaimplementowano wsparcie dla szyfrowania LUKS
- kernel-manager: Dodano wsparcie dla ustawiania flag sched-ext w konfiguracji sched-ext
- kernel-manager: Wprowadzono opcję budowania nvidia-open
- kernel-manager: Dodano opcję zapamiętywania ostatnio używanych opcji na stronie konfiguracji
- Aktualizacje pakietów: linux-cachyos 6.10.5, mesa 24.2.0, Plasma 6.1.4, NVIDIA 560.31.02
 
**Poprawki błędów:**
- chwd: Ulepszono wykrywanie profilu PRIME na podstawie nazwy urządzenia
- chwd: Usunięto obejście RTD3 z powodu problemów w niektórych konfiguracjach
- cachyos-rate-mirrors: Wyłączono ranking mirrorów podczas działania na Live ISO
- cachy-chroot: Naprawia awarię, gdy partycja nie miała prawidłowego typu systemu plików lub UUID (np. partycja odzyskiwania Microsoft)
- calamares: Przeprowadzono refaktoryzację inicjalizacji pęku kluczy
- kernel-manager: Naprawiono wsparcie dla budowania niestandardowego pkgbase z włączonymi jądrami i modułami LTO
- kernel-manager: Naprawiono opóźnienie monitu o hasło
- ISO: Zastąpiono radeon.modeset=1 przez amdgpu.modeset=1 dla nowoczesnych GPU
- game-performance: Zapobieganie awarii, gdy profil jest niedostępny
 
**Lista zmian dla Edycji Przenośnej:**
- wsparcie urządzeń: Dodano wsparcie dla Ally X, dzięki Luke Jones
- libei: Zaimplementowano wsparcie dla libei, zastępując libextest
- packagekit: Zablokowano instalację packagekit, aby zapobiec problemom z aktualizacjami systemu przez Discover
- hook: Dodano pacman-hook powodujący konflikt z natywnie skompilowanymi wersjami Proton, unikając potencjalnych problemów
- Zaktualizowano jupiter-fan-control, steamdeck-dsp i firmware Steam Deck
 
24.07
----
 
**Nowości:**
- Repozytorium: Wprowadzono repozytorium zoptymalizowane dla Zen 4, będzie używane dla procesorów Zen4 i Zen5
- ISO: Dodano automatyczne sprawdzanie architektury dla repozytorium Zen4/Zen5
- chwd: Dodano wsparcie GC dla GPU AMD, pomaga to w wykrywaniu oficjalnie wspieranych przez ROCm GPU
- chwd: Używaj libva-nvidia-driver na obsługiwanych kartach
- ksmctl: Wprowadzono narzędzie do włączania/wyłączania KSM: ksmctl --enable
- jądro: Dla jądra "linux-cachyos" dostępny jest teraz pakiet "linux-cachyos-dbg", zawierający nieoczyszczony vmlinux do celów debugowania
- jądro: Dostępny jest teraz boost amd cpb, a demon power-profiles-daemon jest załatany; jeśli ustawiony jest profil "powersave", wyłączy on boost na procesorach AMD
- jądro: Dodano łatę oszczędzania energii dla SoC AMD podczas odtwarzania wideo
- kernel-manager: Dodano wsparcie dla zarządzania planistami sched-ext i uzyskiwania informacji przez GUI
- steam/proton: Dostępny jest teraz skrypt "game-performance", który można dodać do opcji uruchamiania Steam
- profile zasilania: Na procesorach obsługujących AMD Pstate najniższa częstotliwość liniowa jest teraz ustawiona wyżej, co może poprawić opóźnienie i 1% najniższych wartości (1% lows)
- kwin: Dodano back-port dla tearingu (rozrywania obrazu), został przetestowany. Na NVIDIA działa tylko w natywnych aplikacjach Wayland
- netinstall: Cutefish został usunięty jako środowisko graficzne do instalacji
- Mirrory: Dodano mirror Austriacki i Chiński, Chiński mirror jest hostowany przez Uniwersytet TUNA. Powinno to bardzo pomóc użytkownikom z Chin
- Aktualizacje pakietów: linux-cachyos 6.9.9, mesa 24.1.3, NVIDIA 555.58.02, Plasma 6.1.2, LLVM 18.1.8
 
**Poprawki błędów:**
- ISO: Ustawiono copytoram na auto zamiast yes
- ISO: Naprawiono usypianie na Live ISO dla laptopów
- Uruchamianie instalatora: Zainstaluj najnowszy archlinux-keyring przed rozpoczęciem instalacji, aby uniknąć problemów podczas pobierania archlinux-keyring w chroot
- Ranking mirrorów: Ranguj tylko mirrory Tier 1 podczas instalacji
- pacman.conf: Usuń nieużywane repozytorium pacman
- cachy-chroot: Nie pokazuj podwolumenów .snapshot
- Calamares: Nie używaj modułu "Preservefiles", ponieważ użytkownicy zgłaszają z nim problemy.
 
**Lista zmian dla Edycji Przenośnej:**
- Dodano plik konfiguracyjny do stosowania różnego skalowania, '/home/$USER/.config/deckscale'
- Uczyniono przełączanie GameMode bardziej niezawodnym
- Zaktualizowano firmware Wifi/Bluetooth dla Steam Deck
- Zaimplementowano automatyczne montowanie dla GameMode
- Dodano obejścia dla sesji gamescope dotyczące topologii CPU Wine, HDR i podświetlenia
- Naprawiono wybór częstotliwości odświeżania
- Zaktualizowano jupiter-hw-support, steamdeck-dsp, jupiter-fan-control, gamescope-session-git

24.06
----

**Nowości:**
- chwd: Wprowadzenie wykrywania sprzętu przenośnego
- chwd: Wprowadzenie wsparcia dla MacBooka T2
- chwd: Dodanie wykrywania sterowników sieciowych
- Instalacja: Dodano wsparcie dla MacBooka T2
- ISO: Dodano cachy-chroot. Jest to skrypt pomagający użytkownikowi wykonać chroot do systemu.
- ISO: Przejście na Microcode Hooks; wymaga to użycia najnowszej wersji Ventoy (1.0.98)
- ISO: Włączenie copytoram; nie trzeba już tego wyłączać, ponieważ nie udostępniamy już instalacji offline
- System plików: BTRFS jest teraz domyślnie wybranym systemem plików
- Instalacja sieciowa: Użycie ufw zamiast firewalld
- Calamares: Aktualizacja slajdów marki
- Slajdy: Zaktualizowano pod kątem najnowszych zmian
- Aktualizacje pakietów: linux-cachyos 6.9.3, mesa 24.1.1, xwayland 24.1, NVIDIA 555.52.04, Plasma 6.0.5

**Poprawki błędów:**
- Calamares: umount: Ponowne włączenie trybu awaryjnego
- Qtile: Sterowanie multimediami działa teraz poprawnie
- NVIDIA: Włączenie wymaganych usług i opcji dla poprawnego usypiania w Wayland
- Instalacja sieciowa: Usunięcie b43-fwcutter z instalacji
- Instalacja sieciowa: Zastąpienie hyprland-git przez hyprland
- Instalacja sieciowa: Usunięcie linux-cachyos-lts z wyboru, aby uniknąć problemów z brakującymi modułami
- Calamares: Shellprocess: Przeniesienie rankingu mirrorów przed instalacją keyringu

**Lista zmian z eksperymentalnego wydania dla urządzeń przenośnych:**
- Domyślny motyw KDE Vapor (motyw SteamOS)
- Domyślny system plików: BTRFS
- Domyślny kernel: linux-cachyos-deckify
- SDDM używa teraz Wayland
- Flaga środowiskowa dla HHD w celu zmniejszenia opóźnień
- Dodano argumenty kernela w celu poprawy zachowania przełączania trybu gry
- Nazwę użytkownika można teraz edytować
- Wykrywanie sprzętu konfiguruje i instaluje wymagane pakiety w zależności od używanego urządzenia
- Klawiatura Mallit używa teraz trybu ciemnego
- Valve's Powerbuttond dla poprawnego usypiania
- Skróty można teraz dodawać do Steam
- Zaktualizowano scx-scheds do najnowszego commita git, zapewniając najnowsze ulepszenia dla harmonogramu LAVD
- Dodano automontowanie do cachyos-handheld
- CachyOS może teraz wykonywać aktualizacje BIOS-u Steam Deck na Steam Decku

24.05
----

**Nowości:**
- Systemy plików: Wprowadzenie Bcachefs jako opcji systemu plików
- pacstrap: Dodano wykrywanie, czy używany jest Bcachefs i instalacja odpowiednich narzędzi Bcachefs-tools
- CachyOS-AI-SDK: Wprowadzenie nowej opcji instalacji zapewniającej gotową konfigurację NVIDIA SDK
- CachyOS-Deckify: Udostępnienie wariantu dla urządzeń przenośnych (eksperymentalny), zobacz [tutaj](https://discuss.cachyos.org/t/information-experimental-cachyos-deckify/203) po więcej szczegółów
- BTRFS: Automatyczny Snapper dla migawek, można zainstalować z poziomu aplikacji CachyOS hello.
- ISO: Usunięcie instalatora offline
- Aktualizacje pakietów: Python 3.12, gcc 14.1.1, mesa 24.0.6, xwayland 24.1rc2 , NVIDIA 550.78

**Poprawki błędów:**
- settings.conf: Przeniesienie wykrywania sprzętu przed instalację sieciową
- pacstrap: Użycie btrfs-assistant zamiast btrfs-assistant-git
- plymouth: usunięcie hooka plymouth przy zfs + szyfrowanie
- ISO: Dodano różne pliki konfiguracyjne dla KDE, aby uniknąć blokowania ekranu podczas instalacji
- services-systemd: Poprawne włączenie fstrim.timer
- umount: Wyłączenie trybu awaryjnego, aby uniknąć problemów z instalacją zfs
- shellprocess: Usunięcie pozostałości po instalacji offline

24.04
----

**Nowości:**
- Plymouth: Użycie plymouth do zapewnienia tematycznej animacji startowej
- ISO: Powrót do X11 z powodu problemów z ustawieniem układu klawiatury w Calamares
- rEFInd: Nowy układ partycjonowania (oddzielne /boot i /boot/efi)
- Instalacja sieciowa: KDE: Domyślna instalacja xwaylandvideobridge
- Instalacja sieciowa: Użycie lightdm zamiast ly dla różnych środowisk graficznych z powodu błędu w ly
- systemd-boot: Użycie @saved dla systemd-boot, aby umożliwić zapamiętanie poprzednio wybranego wpisu rozruchowego
- cachyos-keyring: Refaktoryzacja pakietu cachyos-keyring i udostępnienie zaufanego keyringu cachyos-trusted
- ISO: Użycie kompresji ZSTD 19 dla obrazu mkinitcpio w ISO
- Aktualizacje pakietów: xz 5.6.1-3, linux-cachyos 6.8.2, pacman 6.1.0-5, mesa 24.0.4, Plasma 6.0.3, nvidia 550.67 i cachyos-settings 39-2

**Poprawki błędów:**
- Autologin: Naprawiono opcję automatycznego logowania, gdy używana jest razem z sddm
- xz: Udostępnienie spatchowanego pakietu xz
- libarchive: Złagodzenie commita od złośliwego aktora xz
- cachyos-settings: udev-rule: nie ustawiaj watermark_scale_factor na 125, ponieważ znacznie zwiększa to zużycie RAM
- calamares: pacman-keyring: Użycie prostszej metody integracji keyringu z instalacją

24.03.1
----

**Nowości:**
- Instalacja sieciowa: Usunięcie dodatkowych kerneli z wyboru instalacji sieciowej, aby uniknąć pomyłek użytkowników. Inne niestandardowe kernele można zainstalować za pomocą Menedżera Kerneli
- Menedżer Kerneli: Moduły NVIDIA są automatycznie instalowane po wykryciu, Przebudowano dla QT6, Naprawiono niestandardowe nazwy przy użyciu opcji LTO
- Instalator pakietów: Przebudowano na QT6, zaktualizowano dla pacman 6.1
- Aktualizacje pakietów: linux-cachyos 6.8.1, pacman 6.1, mesa 24.0.3, Plasma 6.0.2, llvm 17.0.6

**Poprawki błędów:**
- NVIDIA: spatchowany moduł nvidia, aby przejąć własność nvidia.drm.modeset wcześniej, aby uniknąć problemów z grafiką nvidia
- Refind: Nie instaluj kernela lts, aby uniknąć problemów
- shellprocess: Całkowite usunięcie katalogu liveusers

24.03
----

**Nowości:**
- ISO: Plasma 6 jest teraz dostarczana w ISO i domyślnie używa Wayland, ISO GNOME zostało usunięte, aby uniknąć nieporozumień dotyczących instalacji sieciowej
- Calamares: Przebudowano dla QT6
- refind: Dodano f2fs i zfs jako opcję, w tym szyfrowanie luks2
- Mirrory: Udostępniamy teraz 2 globalne sieci CDN. Jedna hostowana przez Cloudflare R2 i jedna hostowana przez Digital Ocean
- Lista mirrorów: Pobieranie instalatora online bezpośrednio z CDN w celu szybszego dostarczania
- initcpiocfg: Użycie nowego hooka microcode do wczesnego ładowania ucode
- Bootloader: Mikrokod nie jest już ładowany przez bootloader
- Aktualizacje pakietów: linux-cachyos 6.7.9, mesa 24.0.2, zfs-utils 2.2.3

**Poprawki błędów:**
- pacstrap: Nie instaluj pakietów konfiguracyjnych, aby zapewnić użytkownikowi czystszy wybór instalacji
- shellprocess_pacman: Skopiuj również uporządkowane listy mirrorów cachyos-v4 do celu

24.02
-----

**Nowości:**
- refind: Zmiana układu z /boot/efi na /boot, aby zapewnić więcej opcji systemów plików i szyfrowania
- Live-ISO: Oczyszczenie i synchronizacja Live-ISO
- Uruchom Instalator: Dodanie rekomendacji dla instalacji online
- Konfiguracje powłoki: Dodanie opcji wyłączenia fastfetch przy uruchamianiu terminala i dodanie aliasu "update"
- Instalacja sieciowa: Dodanie phonon-qt5-vlc do kde
- Aktualizacje pakietów: linux-cachyos 6.7.5, mesa 23.3.5, gcc 13.2.1-12, glibc 2.39, mesa 24.0.1, nvidia 550.54.14

24.01
-----

**Nowości:**
- x86-64-v4: Autodetekcja i włączenie repozytorium podczas instalacji
- linux-cachyos: framework harmonogramu sched-ext jest teraz dostępny w domyślnym kernelu
- xwayland: Domyślne dostarczenie patchy explicit sync
- Aktualizacje pakietów: linux-cachyos 6.7, mesa 23.3.3, gcc 13.2.1-8, xorg-xwayland 23.2.4

**Poprawki błędów:**
- chwd: Dla kart Nvidia Ada Lovelace moduły nvidia są bezpośrednio pakowane do initramfs, aby uniknąć problemów z wczesnym KMS

23.12
-----

**Poprawki błędów:**
- zfs: Dodanie compatibility=grub do opcji puli w celu zapewnienia kompatybilności
- grub/xfs: Dodanie patcha do grub, aby zapewnić kompatybilność z nowym domyślnym xfs bigtime
- Instalacja sieciowa: xdg-desktop-portal-hyprland zamiast xdg-desktop-portal-hyprland-git

23.11
-----

**Nowości:**
- nvidia: Użycie modułu nvidia zamiast dkms
- Calamares zsynchronizowany z upstream
- Aktualizacje pakietów: linux-cachyos 6.6.1, nvidia-utils 545.29.02, mesa 23.2.1, zfs-utils 2.2.0, mkinitcpio 37

**Poprawki błędów:**
- nvidia-hook: Przywrócono nvidia-hook, aby uniknąć problemów podczas instalacji z nowym modułem
- Instalacja sieciowa: Nazwy pakietów zostały zmienione z powodu ostatnich zmian w pakietowaniu KF5
- Instalacja sieciowa: xdg-desktop-portal-gnome został dodany do instalacji GNOME

23.09
-----

**Nowości:**
- systemd-boot: Domyślnie luks2
- Instalacja sieciowa: Udostępnienie własnej kategorii dla pakietów CachyOS
- Calamares zsynchronizowany z upstream
- Aktualizacje pakietów: linux-cachyos 6.5.3, nvidia-utils 535.104.05, mesa 23.2.7

**Poprawki błędów:**
- shellprocess_sdboot: Unikanie używania "sudo" podczas generowania wpisów rozruchowych w procesie instalacji

23.08
-----

**Nowości:**
- Calamares zsynchronizowany z upstream
- Aktualizacje pakietów: linux-cachyos 6.4.10, nvidia-utils 535.98

**Poprawki błędów:**
- Keyring został zaktualizowany i działa teraz poprawnie


23.07
-----

**Nowości:**
- CachyOS-Settings zawiera teraz "bpftune", który automatycznie dostosowuje ustawienia sieci w zależności od użycia
- CachyOS-Qtile-Settings: Zmiany poprawiające jakość życia, lepsze ikony, ...
- Aktualizacje pakietów: linux-cachyos 6.4.2, cachy-browser 115.0.1, mesa 23.1.3,

**Poprawki błędów:**
- rate-mirrors został naprawiony
- chwd (Wykrywanie sprzętu) otrzymał wiele poprawek
- naprawiono instalację niewolnych sterowników dla konfiguracji hybrydowej w instalatorze
- naprawiono zawieszanie się Calamares, które zdarzało się w niektórych rzadkich konfiguracjach, głównie VM
- Slajdy: Poprawka literówki na slajdzie 6

23.06
-----

**Poprawki błędów:**
- Instalacja offline: Naprawa Calamares

23.05
-----

**Nowości:**
- Układ migracji CachyOS Git jest teraz odzwierciedlony w instalatorze
- Wprowadzono wiele poprawek do chwd (mhwd)
- Pacman: Dodano funkcję, która umożliwia wyświetlanie wiadomości użytkownikom przed aktualizacją
- Zsynchronizowano Calamares z wersją upstream
- Aktualizacje pakietów: linux-cachyos 6.3.4, cachy-browser 113.0.1, mesa 23.1.1, python 3.11

**Poprawki błędów:**
- netinstall: drobne poprawki związane ze zmianami w pakietach
- Slajdy: Zaktualizowano slajd 6, aby odzwierciedlał ostatnie zmiany

23.04
-----

**Nowości:**

- Wprowadzenie środowiska graficznego Qtile
- Przerobiono mhwd: przepisano w Rust; uproszczono profile dla kart graficznych i sieciowych; usunięto sporo starego kodu
- Aktualizacje pakietów: linux-cachyos 6.2.12, cachy-browser 112.0.1, mesa 23.0.3, zfs-utils 2.1.11

**Poprawki błędów:**

- f2fs: Usunięto opcję montowania "atgc" z powodu problemów z systemd

23.03.1
-------

**Nowości:**

- Aktualizacje pakietów: linux-cachyos 6.2.7, cachy-browser 111.0

**Poprawki błędów:**

- Naprawiono błąd w Calamares dotyczący menedżera wyświetlania lightdm, spowodowany błędnymi commitami upstream w Calamares
- Naprawiono problem z keyringiem podczas instalacji offline
- Refind: Użyto linux-cachyos-lts jako domyślnego. Obecna wersja 6.2 wydaje się nie współpracować dobrze z Refind


23.03
-----

**Nowości:**

- Dodano program rozruchowy Refind
- Automatyczna instalacja sterowników Nvidia przy użyciu MHWD
- Wsparcie dla szyfrowania w instalacji ZFS
- Dodano Hyprland do instalacji sieciowej (netinstall)
- CachyOS-KDE-Settings używa teraz domyślnego motywu KDE, ale motywy CachyOS są nadal preinstalowane i dostępne do użytku
- Aktualizacje pakietów: linux-cachyos 6.2.2, mesa 23.0.0, cachy-browser 110.0.1, plasma 5.27.2
- Całkowicie przerobiono i ulepszono moduł Calamares dotyczący programu rozruchowego
- Obraz ISO jest teraz podpisywany kluczem GPG
- Ulepszono i zaktualizowano MHWD
- Zsynchronizowano Calamares z wersją upstream

**Poprawki błędów:**

- Opcja "zastąp partycję" oferuje teraz wybór systemu plików
- Poprawiono literówkę na slajdzie 3
- Naprawiono sterownik nouveau, który teraz poprawnie ładuje moduł
- MHWD: Użyto modesetting dla INTEL/ATI i Nouveau
- Usunięto hook zfs z mkinitcpio na obrazie live ISO, co powodowało problemy podczas uruchamiania
- Możesz pobrać aktualizację z naszych serwerów lustrzanych na SourceForge.

23.02
-----

**Nowości:**

- Dodano repozytorium cachyos-community-v3
- Dodano środowiska graficzne Budgie, Mate i LXDE do instalacji sieciowej (Netinstallation)
- Usługa Bluetooth.service jest teraz domyślnie włączona
- F2FS i grub są ponownie włączone i działają
- Aktualizacje pakietów: linux-cachyos 6.1.10, mesa 22.3.4, zfs-utils 2.1.9, glibc 2.37, cachy-browser 109.0.1

**Poprawki błędów:**

- Rate-mirrors używa teraz nieklasyfikowanych mirrorów, jeśli nie uda się ich ocenić
- cachyos-rate-mirrors ma dłuższy czas oczekiwania (timeout) na pobranie mirrorów (fetch-mirrors-timeout)
- Dodano Github do pliku hosts, aby uniknąć problemów z listą mirrorów
- Zaktualizowano wpisy rozruchowe dla BIOS w syslinux


23.01
-----

**Nowości:**

- Przerobiono i zaktualizowano slajdy Calamares
- Dodano środowisko graficzne UKUI do instalacji sieciowej (Netinstallation)
- Dodano środowisko graficzne Cinnamon do instalacji sieciowej (Netinstallation)
- Cmdline: zswap jest teraz domyślnie wyłączony, ponieważ CachyOS domyślnie zapewnia zram
- Zaktualizowano Calamares do najnowszego commita
- LLVM 15 jest teraz domyślnie dostarczany
- Aktualizacje pakietów: linux-cachyos 6.1.7, mesa 22.3.3, Plasma 5.26.5, llvm 15.0.7, gcc 12.1.1, binutils 2.40, zfs-utils 2.1.8, nvidia 525.85.05
- Zaktualizowano instalator CLI

**Poprawki błędów:**

- Proces powłoki remove-ucode jest teraz uruchamiany również podczas instalacji offline
- Usunięto pamac z instalacji sieciowej (netinstall)
- Klasyfikowane mirrory CachyOS są teraz poprawnie kopiowane do docelowego systemu
- Demon power-profile-daemon nie jest już domyślnie włączany


22.12
-----

**Nowości:**

- Nowe tło GRUB w programie rozruchowym ISO
- Dołączono memtest dla systemów UEFI
- Dodano motyw CachyOS-sddm-theme do instalacji KDE
- Dodano skrypt automatycznego wersjonowania podczas tworzenia ISO
- Zaktualizowano Calamares do najnowszego commita
- Mirrory są teraz klasyfikowane za pomocą "cachyos-rate-mirrors", który ocenia nasze serwery lustrzane oraz te należące do Archa
- Aktualizacje pakietów: Jądro 6.1.1, mesa 22.3.1, plasma 5.26.4,...
- Usunięto środowisko graficzne Kofuku
- Dodatkowy obraz ISO z LLVM 15 w celu zapewnienia wsparcia dla nowszych kart AMD


**Poprawki błędów:**

- Naprawiono błąd w Calamares podczas używania ISO z GNOME
- zfshostid działa teraz poprawnie przy instalacji offline i online
- Dodano hook "kms" do modułu initcpiocfg zgodnie z domyślnymi ustawieniami Arch Linux
- Oraz inne poprawki dotyczące ISO


22.11
-----

**Nowości:**

- Calamares i jego konfiguracja są teraz dostarczane w jednym pakiecie
- Całkowite uporządkowanie pakietów w instalacji sieciowej (netinstall)
- Dodano moduł, który automatycznie usuwa niepotrzebny mikrokod (ucode)
- Zmniejszono wymagany RAM do 2.5GB
- Pakiety wymagane dla btrfs są teraz instalowane tylko w przypadku wybrania btrfs
- Zaktualizowano Calamares do najnowszego commita
- Program rozruchowy ISO ma teraz tło
- Standardowe aktualizacje pakietów (mesa, jądro, ...)
- Zastąpiono systemd-network przez NetworkManager


**Poprawki błędów:**

- Usunięto usługę qemu-guest-agent.service z ISO
- Całkowicie wyłączono copytoram, ponieważ powodowało to błędy w instalacji offline
- Zaktualizowano plik mkinitcpio.conf
- Oraz inne poprawki dotyczące ISO


22.10
-----

**Nowości:**

- Pacman używa teraz Architecture=auto dla instalacji x86-64-v3, ponieważ dodaliśmy łatkę, dzięki której pacman automatycznie wykrywa x86-64-v3
- Pacman pokazuje teraz, z którego repozytorium został zainstalowany pakiet
- Wybór programu rozruchowego automatycznie wykrywa obecność EFI; jeśli go nie ma, domyślnie używany jest grub
- Wybór partycji wymiany (swap) jest teraz domyślnie wyłączony, ponieważ zram jest generowany automatycznie i dynamicznie
- Zaktualizowano Calamares do najnowszego commita
- Minimalne wymaganie RAM zostało ustawione na 4GB
- Usunięto motyw cachyos-grub-theme

**Poprawki błędów:**

- Wykrywanie SSD i HDD dla fstab zostało wyłączone do czasu pojawienia się poprawki upstream
- Naprawiono problem podwójnego podwoluminu BTRFS
- Dodano brakujący mikrokod do programu rozruchowego GRUB na ISO
- Dodano zapasowy tryb rozruchu, który nie ustawia żadnego trybu graficznego (nomodeset)
- Oraz inne poprawki dotyczące ISO


22.09
-----

**Nowości:**

- Calamares jest teraz w najnowszej gałęzi 3.3. Przynosi to poprawki błędów i nowe funkcje do Calamares
- Instalator TUI jest teraz dołączony do obrazu ISO z GUI, można go uruchomić za pomocą "cachyos-installer"
- Calamares automatycznie wykrywa teraz, czy docelowy system plików znajduje się na dysku SSD czy HDD i dostosowuje do tego opcje fstab
- Nvidia dla najnowszych kart graficznych (począwszy od serii 9xx) ma teraz własny wpis rozruchowy, aby uniknąć problemów z nouveau
- Zaktualizowano opcje montowania fstab i zfs
- FireFox nie będzie już instalowany domyślnie, ponieważ domyślnie instalowany jest cachy-browser

**Poprawki błędów:**

- Usunięto pakiet meta cachyos-gaming-meta z modułu netinstall, aby uniknąć problemów podczas procesu instalacji
- Zaktualizowano pakiety netinstall i wprowadzono kilka poprawek
- Naprawiono instalację OpenBox
- typowe poprawki tłumaczeń


22.07
-----

**Nowości:**

- Wybór programu rozruchowego: Użytkownik może teraz wybrać podczas instalacji online pomiędzy grub a systemd-boot
- Podczas instalacji online zawsze będzie instalowany najnowszy Calamares, co pomaga wprowadzać poprawki błędów "w locie"
- Calamares ma teraz moduł mhwd, który automatycznie instaluje potrzebne sterowniki (wolne sterowniki)
- Calamares ma nowe slajdy z obrazkami podczas instalacji
- Zaktualizowano opcje montowania fstab i zfs
- Wsparcie dla HiDPI

**Poprawki błędów:**

- Naprawiono błąd dotyczący ustawień regionalnych (locales) w Calamares
- Usunięto wsparcie dla F2FS w programie rozruchowym grub, ponieważ obecnie nie działa (problem Calamares); nadal można go używać z systemd-boot
- Calamares pokazuje teraz poprawny domyślny system plików
- Naprawiono obraz ISO z Gnome
- Dodano brakujące pakiety na obrazie live ISO dla instalacji offline
- Naprawiono szyfrowanie luks dla partycji wymiany (swap) na btrfs
- typowe poprawki tłumaczeń

22.06
-----

Naprawiono następujące znane błędy:

- Instalacja kończyła się niepowodzeniem przy użyciu generycznego procesora (CPU)
- KDE automatycznie montowało partycje zfs, co powodowało, że automatyczne logowanie do ISO przestawało działać

**Ulepszenia:**

- Poprawiono zaporę sieciową (firewall) na serwerze; Cloudflare blokował użytkowników jako "boty", co skutkowało błędem podczas instalacji
- Dodano wsparcie dla motywów dla Gnome, XFCE, OpenBox
- Zaktualizowano nasze wiki

**_CachyOS - Menedżer Jądra_**
Z radością ogłaszamy również nasz Menedżer Jądra CachyOS (CachyOS-Kernel-Manager).
Umożliwia on instalację jądra z repozytorium oraz konfigurację własnej kompilacji jądra za pomocą interfejsu graficznego (GUI), co bardzo ułatwia dostosowanie go do własnych potrzeb.

Podczas kompilacji jądra można wybrać następujące opcje:

- Planista (Scheduler) (BMQ, BORE, cacULE, cfs, PDS, TT)
- NUMA wyłączone lub włączone
- Flagi KBUILD CFLAGS (-O3 lub -O2)
- Ustawienie zarządcy wydajności (performance governor) jako domyślnego
- Włączenie BBR2
- Częstotliwość przerwań zegara (Tickrate) (500Hz, 600Hz, 750Hz, 1000Hz)
- Tryb Tickless (bez przerwań zegarowych) (idle, periodic, full)
- Wyłączenie planisty I/O MQ-Deadline
- Wyłączenie planisty I/O Kyber
- Włączenie lub wyłączenie MG-LRU
- Włączenie lub wyłączenie DAMON
- Włączenie lub wyłączenie spekulatywnego błędu strony (Speculative page fault)
- Włączenie lub wyłączenie LRNG (Generator Liczb Losowych Linuksa)
- Zastosuj automatyczną optymalizację jądra (automatycznie wykrywa architekturę CPU - March)
- Zastosuj wybraną optymalizację jądra (zobaczysz listę różnych architektur CPU - Marches - i możesz wybrać swoją za pomocą numeru)
- Wyłącz debugowanie (zmniejsza to rozmiar jądra)
- Włącz lub wyłącz nf_conntrack
- Włącz LTO (Full, Thin, No)


22.05
-----

CachyOS powstało rok temu. Po prawie roku rozwoju z dumą ogłaszamy pierwsze stabilne wydanie naszego instalatora GUI.
Spędziliśmy dużo czasu badając zarządzanie repozytoriami, rozwój jądra, infrastrukturę, motywy... i ostatecznie zawarliśmy to wszystko w instalatorze GUI CachyOS.
Wszystkie funkcje, nad którymi pracowaliśmy i które zaimplementowaliśmy w instalatorze, mają na celu zaoferowanie użytkownikom w pełni konfigurowalnego doświadczenia.

Najbardziej ekscytujące zmiany to użycie pacstrap do instalacji online, co zapewnia całkowicie czyste zainstalowane środowisko, oraz pełne natywne wsparcie dla systemu plików ZFS.

Ponieważ Discord ogranicza długość wiadomości, pełne ogłoszenie można znaleźć tutaj:

https://discuss.cachyos.org/t/cachyos-gui-installer-changelog/

Pliki do pobrania można znaleźć tutaj:
https://mirror.cachyos.org/ISO/kde/220522/
https://sourceforge.net/projects/cachyos-arch/
