---
title: Oferowane menedżery rozruchu
description: Opis i rekomendacje dotyczące obecnie oferowanych menedżerów rozruchu
---

Aby zapewnić najlepsze doświadczenia na różnych urządzeniach, CachyOS obecnie oferuje następujące menedżery rozruchu: systemd-boot, rEFInd, GRUB oraz Limine.
Ten artykuł wiki opisze zestaw funkcji każdego menedżera rozruchu i zawiera również nasze rekomendacje dotyczące ich wyboru. W celu konfiguracji, zapoznaj się z [Konfiguracja menedżera rozruchu](/pl/configuration/boot_manager_configuration).

## systemd-boot

Będąc częścią rodziny systemd, systemd-boot został stworzony, aby być jak najprostszym, dlatego obsługuje tylko systemy oparte na UEFI. Ten prosty, ale wydajny projekt zapewnia niezawodność i szybkość. Odbywa się to jednak kosztem zaawansowanych funkcji obsługiwanych przez inne menedżery rozruchu.

### Zalety
- Bardzo prosta konfiguracja.
- Wpisy rozruchowe są rozdzielone na wiele plików, co ułatwia zarządzanie.

### Wady
 - Nie obsługuje systemów BIOS.
 - Bardzo podstawowy wygląd, brak jakichkolwiek motywów czy możliwości dostosowania.
 - Konfiguracja nie jest generowana automatycznie, chyba że zostanie to skonfigurowane. CachyOS zawiera menedżera systemd-boot, aby oferować automatycznie generowaną konfigurację.
 - Odczytuje obrazy rozruchowe tylko z systemów plików obsługiwanych przez EFI (FAT, FAT16, FAT32).
 - Nie potrafi znaleźć obrazów rozruchowych na partycjach innych niż własna.
 - Nie obsługuje poprawnie przywracania migawek Btrfs z powodu wymogu przechowywania obrazów jądra na partycji rozruchowej zamiast w głównym systemie plików.

### Rekomendacja

Systemd-boot jest zalecanym i domyślnym menedżerem rozruchu dla CachyOS. Wybierz go, jeśli nie masz pewności.

## rEFInd

Będąc forkiem rEFIt, rEFInd został stworzony głównie po to, aby ułatwić użytkownikom MacOS uruchamianie wielu systemów (multi-boot). Jednak rEFInd ewoluował, stając się niezależnym od sprzętu, co czyni go doskonałym wyborem do multi-bootingu na dowolnym systemie. Główną zaletą rEFInd jest jego zdolność do skanowania wszystkich urządzeń pamięci masowej podczas rozruchu i odpowiedniego wyświetlania wpisów dla każdego znalezionego systemu operacyjnego/jądra.

### Zalety

- Automatyczne wykrywanie wszystkich systemów operacyjnych i kerneli na urządzeniach pamięci masowej.
- Niewielka lub żadna konfiguracja wymagana dzięki wspomnianemu automatycznemu wykrywaniu.
- Znacznie bardziej graficzny interfejs użytkownika przypominający selektor rozruchu MacOS.
- Świetne wsparcie dla motywów.
- Opcjonalne wsparcie dla ekranu dotykowego.
- Potrafi odczytywać obrazy rozruchowe z systemów plików EFI (FAT, FAT16, FAT32), a także EXT4 i BTRFS. Obsługę innych systemów plików można dodać poprzez instalację sterowników EFI z pakietu ``efifs``.

### Wady

- Nie obsługuje systemów BIOS.

### Rekomendacja

rEFInd jest zalecanym menedżerem rozruchu do uruchamiania wielu systemów operacyjnych.

## GRUB

GRUB jest najstarszym z dostępnych menedżerów rozruchu. Posiada bardzo duży zestaw funkcji, działa na prawie każdej maszynie i jest najczęściej używanym menedżerem rozruchu Linuksa. Poniżej znajduje się lista jego głównych zalet i wad.

### Zalety
- Potrafi odczytywać obrazy rozruchowe z prawie wszystkich dostępnych systemów plików Linuksa.
- Szeroko stosowany i bardzo łatwo znaleźć informacje online.
- Potrafi odszyfrować zaszyfrowane partycje rozruchowe.
- Jedyny oferowany program rozruchowy pozwalający na uruchamianie maszyn z BIOS.
- Wygląda przestarzale. Jednak posiada świetne wsparcie dla motywów, aby to zrekompensować.

### Wady
- Przeładowany z powodu konieczności obsługi znacznie starszego sprzętu i potrzeby posiadania wielu sterowników systemów plików.
- Zauważalnie wolniejszy w porównaniu do systemd-boot i rEFInd.

### Rekomendacja

GRUB jest jedynym menedżerem rozruchu, który obsługuje szyfrowanie partycji rozruchowej (inne niż szyfrowanie dysku).

## Limine

Limine to nowoczesny, zaawansowany i przenośny wieloprotokołowy program rozruchowy. Służy jako referencyjna implementacja protokołu rozruchowego Limine i obsługuje uruchamianie Linuksa, a także ładowanie łańcuchowe (chainloading) innych programów rozruchowych.

### Zalety

- Obsługuje wiele protokołów rozruchowych, w tym Multiboot2 i protokoły rozruchowe Linuksa.
- Może uruchamiać się zarówno na systemach UEFI, jak i BIOS, co czyni go wszechstronnym dla różnych konfiguracji sprzętowych.
- Posiada możliwości dostosowywania wyglądu (motywy) podobne do GRUB.
- Bezpośrednie wsparcie dla migawek Btrfs, które jest domyślnie włączone dla instalacji używających Btrfs jako systemu plików.

### Wady

- Obsługuje tylko kilka systemów plików, takich jak FAT12, FAT16, FAT32 i ISO9660 dla partycji `/boot`, co może wymagać dodatkowej konfiguracji dla systemów używających innych systemów plików.
- W przeciwieństwie do niektórych innych programów rozruchowych, Limine nie dodaje automatycznie wpisu do NVRAM w systemach UEFI; należy to zrobić ręcznie za pomocą narzędzi takich jak `efibootmgr` lub za pośrednictwem `limine-entry-tool`, który jest preinstalowany w CachyOS.

### Rekomendacja

Limine jest zalecany dla użytkowników potrzebujących lekkiego i wszechstronnego programu rozruchowego, który obsługuje zarówno systemy UEFI, jak i BIOS. Jest szczególnie odpowiedni dla tych, którzy preferują prostą konfigurację z opcjami motywów i wsparciem dla migawek Btrfs. Dodatkowo, Limine służy jako nowoczesny zamiennik dla GRUB-a, który ostatnio otrzymywał mniej aktualizacji i borykał się z wieloma problemami bezpieczeństwa z powodu swoich sterowników EFI/systemów plików.

## TL:DR (W skrócie)
Wybierz GRUB, jeśli używana maszyna obsługuje tylko BIOS, wybierz rEFInd, jeśli planujesz mieć wiele systemów operacyjnych na maszynie (szczególnie Windows), w przeciwnym razie wybierz systemd-boot.
