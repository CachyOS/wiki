---
title: Systemy plików
description: Opis i zalecenia dla dostępnych systemów plików. (ext4, f2fs, btrfs, xfs, zfs, bcachefs)
---

CachyOS oferuje 5 różnych systemów plików, aby pozwolić użytkownikowi wybrać to, co najlepiej odpowiada jego potrzebom. Poniżej omówione zostaną zalety, wady i zalecenia dla każdego systemu plików. Każdy system plików jest dostarczany z preinstalowanymi w CachyOS wymaganymi pakietami/narzędziami.

:::note
BTRFS jest domyślnym i zalecanym systemem plików dla CachyOS. Wybierz go, jeśli nie masz pewności.
:::

## XFS

XFS to system plików z księgowaniem, stworzony i rozwijany przez Silicon Graphics, Inc. Powstał w 1993 roku, został przeniesiony do Linuksa w 2001 roku i jest obecnie szeroko wspierany przez większość dystrybucji Linuksa.

### Zalety

- Szybki, XFS został pierwotnie zaprojektowany z myślą o szybkości i ekstremalnej skalowalności.
- Niezawodny, XFS wykorzystuje kilka technologii zapobiegających uszkodzeniu danych.
- Odporny na fragmentację dzięki swojej naturze opartej na ekstensjach i strategii opóźnionej alokacji.

### Wady

- Nie można go zmniejszyć.

### Narzędzie przestrzeni użytkownika

Pakiet zawierający narzędzia przestrzeni użytkownika do zarządzania systemami plików XFS to `xfsprogs`.

### Zalecenie

XFS jest zalecanym systemem plików dla użytkowników, którzy nie potrzebują zaawansowanych funkcji i po prostu chcą szybkiego i niezawodnego systemu plików.

## BTRFS

BTRFS to nowoczesny system plików typu copy-on-write (COW), stworzony w 2007 roku i uznany za stabilny w jądrze Linuksa w 2013 roku. Jest szeroko wspierany i znany głównie ze swojego zaawansowanego zestawu funkcji.

### Zalety

- Przezroczysta kompresja. BTRFS wspiera przezroczystą kompresję plików, co pozwala na znaczną oszczędność miejsca bez interwencji użytkownika. **CachyOS domyślnie dostarczany jest z kompresją ZSTD ustawioną na poziom 3.**
- Funkcjonalność migawek. BTRFS wykorzystuje swoją naturę COW, aby umożliwić tworzenie migawek podwoluminów, które zajmują bardzo mało rzeczywistej przestrzeni.
- Funkcjonalność podwoluminów pozwalająca na większą kontrolę nad systemem plików.
- Możliwość powiększania i zmniejszania.
- Bardzo szybki rozwój.

### Wady

- Czasami wymaga defragmentacji lub balansowania.
- Gorzej radzi sobie na dyskach talerzowych z powodu wspomnianej fragmentacji.

### Narzędzie przestrzeni użytkownika

Pakiet z narzędziem przestrzeni użytkownika dla Btrfs to `btrfs-progs`.

### Układ podwoluminów

CachyOS zapewnia gotowy układ podwoluminów, aby umożliwić łatwe tworzenie migawek.

- Podwolumin @ = /
- Podwolumin @home = /home
- Podwolumin @root = /root
- Podwolumin @srv = /srv
- Podwolumin @cache = /var/cache
- Podwolumin @tmp = /var/tmp
- Podwolumin @log = /var/log

### Zalecenie

BTRFS jest zalecany dla użytkowników, którzy chcą korzystać z funkcjonalności migawek/kopii zapasowych oraz przezroczystej kompresji.

## EXT4

EXT4 (fourth extended filesystem) to najczęściej używany system plików w Linuksie. EXT4 został uznany za stabilny w jądrze Linuksa w 2008 roku.

### Zalety

- Bardzo powszechny, co zapewnia łatwy dostęp do wielu zasobów.
- Niezawodny. EXT4 ma udokumentowaną historię wysokiej niezawodności.
- Możliwość powiększania i zmniejszania.
  - Zmniejszanie jest wspierane tylko w trybie offline i wymaga odmontowania systemu plików.

### Wady

- Zbudowany na starej bazie kodu.
- Brak wielu zaawansowanych funkcji oferowanych przez inne systemy plików.

### Narzędzia przestrzeni użytkownika

Pakiet do zarządzania ext4 to `e2fsprogs`.

### Zalecenie

EXT4 jest zalecany dla użytkowników, którzy chcą najprostszego i najczęściej używanego systemu plików.

## ZFS

ZFS to zaawansowany system plików pierwotnie opracowany przez Sun Microsystems w 2005 roku. ZFS ma wiele funkcji, ale jest licencjonowany na licencji CDDL, co oznacza, że nie może być włączony do jądra Linuksa i wymaga zainstalowania osobnego modułu.

:::caution
Nie używaj jądra czasu rzeczywistego (Real-time) razem z ZFS, nie jest ono kompatybilne z powodu problemów licencyjnych.
:::

### Zalety

- Pamięć masowa w pulach (zpool)
- Migawki wykorzystujące COW
- Kompresja
- Wsparcie dla Raid-Z
- Pamięć podręczna ARC pozwala na niezwykle szybkie czasy odczytu często używanych plików.

### Wady

- Bardzo skomplikowany w użyciu i zrozumieniu ze względu na funkcje takie jak zpool i ARC.
- ARC wymaga dużej ilości pamięci RAM, aby być efektywnym.
- Nie jest zawarty w jądrze Linuksa, dlatego zależy od modułu jądra innej firmy (OpenZFS).
- Niekompatybilny z wywłaszczaniem w czasie rzeczywistym (Real-time preemption).

### Wymagane narzędzia

'ZFS-Module' CachyOS dostarcza prekompilowany moduł zfs dla każdej wersji jądra.
`zfs-utils` dla narzędzi przestrzeni użytkownika.

### Zalecenie

ZFS powinien być używany tylko przez zaawansowanych użytkowników, którzy chcą korzystać z jego zaawansowanych funkcji, takich jak pamięć masowa w pulach czy pamięć podręczna ARC.

## F2FS

F2FS (Flash-Friendly File System) to system plików flash, pierwotnie stworzony i rozwijany przez Samsunga dla jądra Linuksa. F2FS został stworzony specjalnie z myślą o pamięci flash NAND używanej w nowoczesnych nośnikach danych.

### Zalety

- Zaprojektowany z myślą o przyjazności dla pamięci flash.
- Przezroczysta kompresja używana do zmniejszenia liczby zapisów na dysku (oszczędność miejsca obecnie nieużyteczna dla użytkownika).
- Szybszy niż inne systemy plików, takie jak EXT4.
- Lepsze równoważenie zużycia (wear leveling), co dodatkowo przedłuża żywotność pamięci flash NAND.

### Wady

- Nie można go zmniejszyć.
- Oszczędność miejsca dzięki kompresji nie może być obecnie wykorzystana przez użytkownika. Może to zostać dodane w przyszłości.
- Stosunkowo słaby fsck (sprawdzanie systemu plików).
- Obniżenie wersji jądra do starszej niż ta, na której utworzono system plików, może powodować problemy.
- Wymaga obejścia problemu przy używaniu z GRUB na systemach MBR/BIOS.

### Narzędzia przestrzeni użytkownika

Główne narzędzie dla f2fs to `f2fs-tools`.

### Zalecenie

- F2FS jest zalecany dla użytkowników, którzy chcą zmaksymalizować żywotność swoich urządzeń z pamięcią flash NAND.
- Limine jest zalecanym bootloaderem dla użytkowników F2FS na systemach MBR/BIOS, ponieważ nie wymaga obejścia problemu, tak jak GRUB.

## BcacheFS

Bcachefs to zaawansowany, nowy system plików dla Linuksa, z naciskiem na niezawodność i solidność oraz kompletny zestaw funkcji, jakich można oczekiwać od nowoczesnego systemu plików.

:::caution[UWAGA]
Bcachefs jest nadal uważany za eksperymentalny i może sprawiać problemy.
:::

### Zalety

- Kopiowanie przy zapisie (CoW) - jak w BTRFS czy ZFS
- Kompresja
- Buforowanie, rozmieszczanie danych
- Replikacja
- Skalowalność

### Wady

- Eksperymentalny
- Konfiguracja może być skomplikowana

## TL:DR

Użyj domyślnego systemu plików **BTRFS**, ponieważ jest uważany za stabilny i ma wiele przydatnych funkcji (migawki, kompresja itp.). Użyj **XFS** lub **EXT4**, jeśli potrzebujesz prostego
i szybkiego systemu plików.
