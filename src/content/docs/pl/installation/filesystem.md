---
title: Systemy plików
description: Opis i zalecenia dotyczące dostępnych systemów plików (ext4, f2fs, btrfs, xfs, zfs, bcachefs).
---

CachyOS oferuje 5 systemów plików, aby umożliwić użytkownikowi wybór tego, który najlepiej odpowiada jego potrzebom. Poniżej omówione zostaną zalety, wady i zalecenia dla każdego systemu plików. Każdy system plików jest dostarczany z preinstalowanymi w CachyOS wymaganymi narzędziami/zależnościami.

:::note
BTRFS jest domyślnym i zalecanym systemem plików dla CachyOS. Wybierz go, jeśli nie jesteś pewien.
:::

## XFS
XFS to system plików z księgowaniem stworzony i rozwijany przez Silicon Graphics, Inc. Został stworzony w 1993 roku, przeniesiony do Linuksa w 2001 roku i jest obecnie szeroko wspierany przez większość dystrybucji Linuksa.
### Zalety
- Szybki, XFS został pierwotnie zaprojektowany z myślą o szybkości i ekstremalnej skalowalności.
- Niezawodny, XFS wykorzystuje kilka technologii zapobiegających uszkodzeniu danych.
- Odporny na fragmentację dzięki swojej naturze opartej na ekstensjach i strategii opóźnionej alokacji.
### Wady
- Nie można go zmniejszyć.

### Narzędzie przestrzeni użytkownika
Pakiet zawierający narzędzia przestrzeni użytkownika do zarządzania systemami plików XFS to `xfsprogs`.

### Zalecenie:
XFS jest zalecanym systemem plików dla użytkowników, którzy nie potrzebują zaawansowanych funkcji i po prostu chcą szybkiego i niezawodnego systemu plików.


## BTRFS
BTRFS to nowoczesny system plików typu kopiowanie przy zapisie (COW), stworzony w 2007 roku i uznany za stabilny w jądrze Linuksa w 2013 roku. Jest szeroko wspierany i znany głównie ze swojego zaawansowanego zestawu funkcji.
### Zalety
- Przezroczysta kompresja. BTRFS obsługuje przezroczyste kompresowanie plików, co pozwala na znaczną oszczędność miejsca bez interwencji użytkownika. CachyOS domyślnie używa kompresji ZSTD ustawionej na poziom 3.
- Funkcjonalność migawek. BTRFS wykorzystuje swoją naturę COW, aby umożliwić tworzenie migawek podwolumenów, które zajmują bardzo mało rzeczywistej przestrzeni.
- Funkcjonalność podwolumenów pozwalająca na większą kontrolę nad systemem plików.
- Możliwość powiększania i zmniejszania.
- Bardzo szybki rozwój.
### Wady
- Czasami wymaga defragmentacji lub równoważenia.
- Gorzej działa na dyskach talerzowych z powodu wspomnianej fragmentacji.
### Narzędzie przestrzeni użytkownika
Pakiet narzędzi przestrzeni użytkownika Btrfs to `btrfs-progs`.

### Układ podwolumenów
CachyOS domyślnie udostępnia układ podwolumenów, aby umożliwić łatwe korzystanie z funkcji migawek.
- Subvol @ = /
- Subvol @home = /home
- Subvol @root = /root
- Subvol @srv = /srv
- Subvol @cache = /var/cache
- Subvol @tmp = /var/tmp
- Subvol @log = /var/log

### Zalecenie:
BTRFS jest zalecany dla użytkowników, którzy chcą funkcjonalności migawek/kopii zapasowych oraz przezroczystej kompresji.


## EXT4
EXT4 (czwarty rozszerzony system plików) jest najczęściej używanym systemem plików w Linuksie. EXT4 został uznany za stabilny w jądrze Linuksa w 2008 roku.
### Zalety
- Bardzo powszechny, co umożliwia łatwy dostęp do wielu zasobów.
- Niezawodny. EXT4 ma udokumentowaną historię bycia bardzo niezawodnym.
- Możliwość powiększania i zmniejszania.
### Wady
- Zbudowany na starej bazie kodu.
- Brakuje mu wielu zaawansowanych funkcji oferowanych przez inne systemy plików.

### Narzędzia przestrzeni użytkownika
Pakiet do zarządzania ext4 to `e2fsprogs`.

### Zalecenie:
EXT4 jest zalecany dla użytkowników, którzy chcą najprostszego i najczęściej używanego systemu plików.


## ZFS

ZFS to zaawansowany system plików pierwotnie opracowany przez Sun Microsystems w 2005 roku. ZFS ma wiele funkcji, jednak jest licencjonowany na podstawie CDDL, co oznacza, że nie może być zawarty w jądrze Linuksa i wymaga zainstalowania osobnego modułu.

:::caution
Nie używaj jądra czasu rzeczywistego razem z ZFS, ponieważ nie jest ono kompatybilne z powodu problemów licencyjnych.
:::

### Zalety
- Pula pamięci masowej (zpool)
- Migawki wykorzystujące COW
- Kompresja
- Wsparcie dla Raid-Z
- Pamięć podręczna ARC pozwala na niesamowicie szybkie czasy odczytu często używanych plików.
### Wady
- Bardzo skomplikowany w użyciu i zrozumieniu ze względu na funkcje takie jak zpool i ARC.
- ARC wymaga dużo pamięci RAM, aby być efektywnym.
- Nie jest zawarty w jądrze Linuksa, dlatego zależy od modułu jądra strony trzeciej (OpenZFS).
- Niekompatybilny z wywłaszczaniem w czasie rzeczywistym (Real-time preemption).

### Wymagane narzędzia
'ZFS-Module' CachyOS dostarcza prekompilowany moduł zfs dla każdej wersji jądra.
`zfs-utils` dla narzędzi przestrzeni użytkownika.

### Zalecenie:
ZFS powinien być używany tylko przez zaawansowanych użytkowników, którzy chcą zaawansowanych funkcji ZFS, takich jak pula pamięci masowej czy pamięć podręczna ARC.


## F2FS
F2FS, czyli Flash-Friendly File System, to system plików flash stworzony i rozwijany przez firmę Samsung pierwotnie dla jądra Linuksa. F2FS został stworzony specjalnie z myślą o pamięci flash NAND używanej w nowoczesnych nośnikach danych.
### Zalety
- Zaprojektowany z myślą o przyjazności dla pamięci flash.
- Przezroczysta kompresja używana do redukcji zapisów na dysku (oszczędność miejsca obecnie nieużyteczna dla użytkownika).
- Szybszy niż inne systemy plików, takie jak EXT4.
- Lepsze równoważenie zużycia, co dodatkowo przedłuża żywotność pamięci flash NAND.
### Wady
- Nie można go zmniejszyć.
- Oszczędność miejsca wynikająca z kompresji nie może być obecnie wykorzystana przez użytkownika. Może to zostać dodane w przyszłości.
- Stosunkowo słabe narzędzie fsck (sprawdzanie systemu plików).
- Powrót do wersji jądra starszej niż ta, która utworzyła system plików, może powodować problemy.

### Narzędzia przestrzeni użytkownika
Główne narzędzie dla f2fs to `f2fs-tools`.

### Zalecenie:
F2FS jest zalecany tylko dla użytkowników, którzy chcą zmaksymalizować żywotność swojej pamięci flash NAND.

## BcacheFS
Bcachefs to nowy, zaawansowany system plików dla Linuksa, kładący nacisk na niezawodność i odporność oraz oferujący kompletny zestaw funkcji, jakich można oczekiwać od nowoczesnego systemu plików.

:::caution
Bcachefs jest nadal uważany za eksperymentalny i może sprawiać problemy.
:::

### Zalety
- Kopiowanie przy zapisie (CoW) - jak BTRFS czy ZFS
- Kompresja
- Buforowanie, rozmieszczanie danych
- Replikacja
- Skalowalny
### Wady
- Eksperymentalny
- Konfiguracja może być skomplikowana

## W skrócie
Użyj domyślnego systemu plików **BTRFS**, ponieważ jest uważany za stabilny i ma wiele przydatnych funkcji (migawki, kompresja itp.). Użyj **XFS** lub **EXT4**, jeśli potrzebujesz prostego
i szybkiego systemu plików.
