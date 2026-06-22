---
title: Systemy plików
description: Opis i zalecenia dotyczące dostępnych systemów plików. (ext4, f2fs, btrfs, xfs, zfs, bcachefs)
---

CachyOS oferuje 5 różnych systemów plików, aby pozwolić użytkownikowi wybrać ten, który najlepiej odpowiada jego potrzebom. Poniżej omówiono zalety, wady i zalecenia dla każdego z nich. Każdy system plików jest dostarczany z preinstalowanymi w CachyOS wymaganymi narzędziami.

:::note
BTRFS jest domyślnym i zalecanym systemem plików dla CachyOS. Wybierz go, jeśli nie jesteś pewien.
:::

## XFS

XFS to kronikujący system plików stworzony i rozwijany przez Silicon Graphics, Inc. Został stworzony w 1993 roku, przeniesiony na Linuksa w 2001 roku i jest obecnie szeroko wspierany przez większość dystrybucji Linuksa.

### Zalety

- XFS został pierwotnie zaprojektowany z myślą o szybkości i ekstremalnej skalowalności.
- Niezawodny, XFS wykorzystuje kilka technologii zapobiegających uszkodzeniu danych.
- Odporny na fragmentację dzięki swojej naturze opartej na ekstensjach i strategii opóźnionej alokacji.

### Wady

- Nie można go zmniejszyć.

### Narzędzie przestrzeni użytkownika

Pakiet zawierający narzędzia przestrzeni użytkownika do zarządzania systemami plików XFS to `xfsprogs`.

### Zalecenie

XFS jest zalecanym systemem plików dla użytkowników, którzy nie potrzebują zaawansowanych funkcji i po prostu chcą szybkiego i niezawodnego systemu plików.

## BTRFS

BTRFS to nowoczesny system plików typu copy-on-write (COW), stworzony w 2007 roku i uznany za stabilny w jądrze Linuksa w 2013 roku. Jest szeroko wspierany i znany głównie z zaawansowanego zestawu funkcji.

### Zalety

- Przezroczysta kompresja. BTRFS wspiera przezroczystą kompresję plików, co pozwala na znaczne oszczędności miejsca bez interwencji użytkownika. **CachyOS domyślnie używa kompresji ZSTD na poziomie 3.**
- Funkcjonalność migawek (snapshots). BTRFS wykorzystuje swoją naturę COW, aby umożliwić tworzenie migawek podwolumenów, które zajmują bardzo mało rzeczywistej przestrzeni.
- Funkcjonalność podwolumenów pozwalająca na większą kontrolę nad systemem plików.
- Możliwość powiększania i zmniejszania.
- Bardzo szybki rozwój.

### Wady

- Czasami wymaga defragmentacji lub równoważenia (balancing).
- Gorsza wydajność na dyskach talerzowych z powodu wspomnianej fragmentacji.

### Narzędzie przestrzeni użytkownika

Pakiet narzędzi przestrzeni użytkownika dla Btrfs to `btrfs-progs`.

### Układ podwolumenów

CachyOS domyślnie zapewnia układ podwolumenów, aby umożliwić łatwe korzystanie z migawek.

- Subvol @ = /
- Subvol @home = /home
- Subvol @root = /root
- Subvol @srv = /srv
- Subvol @cache = /var/cache
- Subvol @tmp = /var/tmp
- Subvol @log = /var/log

### Zalecenie

BTRFS jest zalecany dla użytkowników, którzy chcą korzystać z funkcji migawek/kopii zapasowych i przezroczystej kompresji.

## EXT4

EXT4 (czwarty rozszerzony system plików) to najczęściej używany system plików w Linuksie. EXT4 został uznany za stabilny w jądrze Linuksa w 2008 roku.

### Zalety

- W niektórych scenariuszach może być tak samo szybki lub szybszy niż XFS.
- Bardzo powszechny, co zapewnia łatwy dostęp do wielu zasobów.
- Niezawodny. EXT4 ma udokumentowaną historię bycia bardzo niezawodnym.
- Możliwość powiększania i zmniejszania.
  - Zmniejszanie jest obsługiwane tylko w trybie offline i wymaga odmontowania systemu plików.

### Wady

- Brakuje mu wielu zaawansowanych funkcji oferowanych przez inne systemy plików.

### Narzędzia przestrzeni użytkownika

Pakiet do zarządzania ext4 to `e2fsprogs`.

### Zalecenie

EXT4 jest zalecany dla użytkowników, którzy chcą najprostszego i najczęściej używanego systemu plików.

## ZFS

ZFS to zaawansowany system plików pierwotnie opracowany przez Sun Microsystems w 2005 roku. ZFS ma wiele funkcji, ale jest licencjonowany na licencji CDDL, co oznacza, że nie może być dołączony do jądra Linuksa i wymaga zainstalowania osobnego modułu.

:::caution
Nie używaj jądra typu Real-time razem z ZFS, nie jest ono kompatybilne z powodu problemów licencyjnych.
:::

### Zalety

- Pule pamięci masowej (zpool)
- Migawki wykorzystujące COW
- Kompresja
- Wsparcie dla Raid-Z
- Pamięć podręczna ARC pozwala na niezwykle szybkie czasy odczytu dla często używanych plików.

### Wady

- Bardzo skomplikowany w użyciu i zrozumieniu z powodu funkcji takich jak zpool i ARC.
- ARC wymaga dużej ilości pamięci RAM, aby być efektywnym.
- Nie jest zawarty w jądrze Linuksa, przez co zależy od modułu jądra innej firmy (OpenZFS).
- Niezgodny z wywłaszczaniem w czasie rzeczywistym (Real-time preemption).

### Wymagane narzędzia

'ZFS-Module' CachyOS dostarcza prekompilowany moduł zfs dla każdej wersji jądra.
`zfs-utils` dla narzędzi przestrzeni użytkownika.

### Zalecenie

ZFS powinien być używany tylko przez zaawansowanych użytkowników, którzy chcą korzystać z jego zaawansowanych funkcji, takich jak pule pamięci masowej czy pamięć podręczna ARC.

## F2FS

F2FS (Flash-Friendly File System) to system plików typu flash pierwotnie stworzony i rozwijany przez firmę Samsung dla jądra Linuksa. F2FS został stworzony specjalnie z myślą o pamięciach flash NAND używanych w nowoczesnych nośnikach danych.

### Zalety

- Zaprojektowany z myślą o przyjazności dla pamięci flash.
- Przezroczysta kompresja używana do redukcji zapisów na dysku (oszczędności miejsca obecnie nieużyteczne dla użytkownika).
- Lepsze równoważenie zużycia (wear leveling), co dodatkowo przedłuża żywotność pamięci flash NAND.

### Wady

- Nie można go zmniejszyć.
- Oszczędności miejsca wynikające z kompresji nie mogą być obecnie wykorzystane przez użytkownika. Może to zostać dodane w przyszłości.
- Stosunkowo słaby fsck (sprawdzanie systemu plików).
- Powrót do wersji jądra starszej niż ta, na której utworzono system plików, może powodować problemy.
- Wymaga obejścia problemu przy użyciu z GRUB na systemach MBR/BIOS.

### Narzędzia przestrzeni użytkownika

Głównym narzędziem dla f2fs jest `f2fs-tools`.

### Zalecenie

- F2FS jest zalecany dla użytkowników, którzy chcą maksymalnie wydłużyć żywotność swoich urządzeń z pamięcią flash NAND.
- Limine jest zalecanym bootloaderem dla użytkowników F2FS na systemach MBR/BIOS, ponieważ nie wymaga on obejścia problemu, tak jak GRUB.

## TL:DR

Użyj domyślnego systemu plików **BTRFS**, ponieważ jest uważany za stabilny i ma wiele przydatnych funkcji (migawki, kompresja itp.). Użyj **XFS** lub **EXT4**, jeśli potrzebujesz prostego
i szybkiego systemu plików.
