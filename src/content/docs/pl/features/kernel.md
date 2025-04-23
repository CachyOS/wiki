---
title: Jądro CachyOS
description: Funkcje i zmiany w jądrze CachyOS
---

Jądro CachyOS to dostosowane jądro, które wykorzystuje ulepszenia, konfiguracje i łatki z projektów nadrzędnych (upstream).

## Funkcje

- Wybór spośród 3 schedulerów jądra oraz różnych schedulerów [sched-ext](/pl/configuration/sched-ext) dla poprawy responsywności
- Ulepszenia AMD P-State
- Najnowszy BBRv3 od Google
- le9uo dla znacząco poprawionej responsywności przy dużym obciążeniu pamięci
- Aktualny zestaw łatek NTSYNC, używany z kompatybilną wersją wine/proton
- Kompatybilność z urządzeniami T2 MacOS dzięki łatkom z [t2linux](https://github.com/t2linux/linux-t2-patches/)
- Umożliwia odczyt zużycia energii CPU dla każdego rdzenia dla użytkowników AMD
- Dodanie ACS i v412loopback
- Moduł VHBA do emulacji urządzeń CD/DVD-ROM
- Najnowszy zestaw łatek ZSTD
- Różne inne łatki skupiające się na poprawie wydajności (zoptymalizowane flagi kompilatora, ulepszenia kryptograficzne, poprawki zarządzania pamięcią)

Bardziej wyczerpującą listę łatek oferowanych przez CachyOS można znaleźć w pełniejszej
[liście funkcji](https://github.com/CachyOS/linux-cachyos/?tab=readme-ov-file#features), [repozytorium kernel-patches](https://github.com/CachyOS/kernel-patches)
oraz [Drzewie Źródłowym Linuksa CachyOS](https://github.com/CachyOS/linux).

## Warianty

CachyOS oferuje różnorodną gamę opcji jądra. Wszystkie dostarczane przez nas jądra są wyposażone w [Podstawowy Zestaw Łatek CachyOS](https://github.com/CachyOS/kernel-patches).
Dla każdego z jąder istnieje [odpowiedni wariant `-lto`](#konwencja-nazewnictwa-pakietów), który
jest zbudowany przy użyciu [clang](https://clang.llvm.org/) zamiast [GCC](https://gcc.gnu.org/). Jądro domyślne i `-rc` są wyjątkami, ponieważ domyślnie
są budowane z [ThinLTO](https://blog.llvm.org/2016/06/thinlto-scalable-and-incremental-lto.html) i dlatego zamiast tego mają odpowiednie warianty jądra `-gcc`.

- **linux-cachyos**
    - Domyślne jądro. Jest to zalecane jądro, jeśli nie masz pewności, którego użyć.
    - Używa schedulera [BORE](https://github.com/firelzrd/bore-scheduler).
    - Domyślnie zbudowane przy użyciu clang i ThinLTO w celu uzyskania bardziej zoptymalizowanych plików binarnych.
    - Profilowane za pomocą naszego własnego profilu [AutoFDO](https://cachyos.org/blog/2411-kernel-autofdo/) dla poprawy wydajności. [Skrypt](https://github.com/CachyOS/cachyos-benchmarker/blob/master/kernel-autofdo.sh) używany do profilowania jądra.
- **linux-cachyos-bore**
    - Używa schedulera BORE.
- **linux-cachyos-bmq**
    - Używa schedulera BMQ z [Project C](https://gitlab.com/alfredchen/projectc/) autorstwa Alfreda Chena.
        - **Nie obsługuje sched-ext**.
- **linux-cachyos-deckify**
    - Domyślne jądro dla urządzeń przenośnych (handheldów). **Nie zaleca się** i **nie jest wspierane** używanie jakiegokolwiek innego jądra na handheldach niż to.
    - Używa schedulera BORE.
    - Specyficzne łatki dla handheldów, dodane do podstawowego zestawu łatek, aby poprawić kompatybilność i ogólne wrażenia z użytkowania na urządzeniach przenośnych.
- **linux-cachyos-eevdf**
    - Modyfikuje domyślny scheduler jądra w celu poprawy responsywności.
- **linux-cachyos-lts**
    - Oparte na najnowszym jądrze Long Term Support (długoterminowego wsparcia).
    - Używa schedulera BORE.
    - Minimalnie łatane w porównaniu do innych jąder, aby zapewnić maksymalną stabilność.
- **linux-cachyos-hardened**
    - Używa schedulera BORE.
    - Zawiera zestaw łatek [linux-hardened](https://github.com/anthraxx/linux-hardened).
    - Konfiguracja jądra oparta na [konfiguracji linux-hardened](https://gitlab.archlinux.org/archlinux/packaging/packages/linux-hardened/-/blob/main/config).
        - Zawiera bardzo agresywne zabezpieczenia, które znacząco ograniczają wydajność i komfort użytkowania.
        - **Nie obsługuje sched-ext**.
- **linux-cachyos-rc**
    - Oparte na najnowszym jądrze mainline z [drzewa Linusa](https://github.com/torvalds/linux/).
    - Używa schedulera BORE.
    - Główne jądro wprowadzające nowe funkcje w naszym zestawie łatek.
- **linux-cachyos-server**
    - Dostosowane do obciążeń serwerowych w porównaniu do użytku desktopowego.
        - Częstotliwość taktowania 300Hz.
        - Brak wywłaszczania (preemption).
        - Standardowy EEVDF.
- **linux-cachyos-rt-bore**
    - Wywłaszczanie w czasie rzeczywistym (Real-time preemption).
    - Używa schedulera BORE.

Prosimy o zgłaszanie problemów (issues) w [repozytorium linux-cachyos na GitHubie](https://github.com/CachyOS/linux-cachyos) w celu sugestii i ulepszeń, które można dodać do domyślnego jądra.

## Prekompilowane moduły jądra

Aby zaspokoić potrzeby szerszej bazy użytkowników, CachyOS dostarcza niektóre dobrze znane i często używane moduły jądra wraz z samym jądrem. Oznacza to, że użytkownicy nie będą już musieli
rekompilować tych modułów po każdej aktualizacji jądra lub przy każdej nowej instalacji jądra, ale będą musieli jedynie zainstalować je z repozytorium, ponieważ są one
już prekompilowane. Skutecznie eliminuje to potrzebę posiadania jakichkolwiek pakietów `-dkms`, które użytkownik mógłby mieć, a które dostarczają ten sam moduł co wersja prekompilowana.

### ZFS

[ZFS](https://openzfs.org/wiki/Main_Page) jest jednym z wielu systemów plików obsługiwanych w CachyOS. Ze względu na licencję [CDDL](https://opensource.org/license/cddl-1-0), jest ona niekompatybilna z licencją jądra Linuksa i dlatego nie może zostać włączona bezpośrednio do jego kodu źródłowego. Dostarczany moduł zawiera
najnowsze funkcje i poprawki z projektu nadrzędnego (upstream), aby zapewnić kompatybilność z najnowszym jądrem.

### NVIDIA

CachyOS dostarcza prekompilowane wersje zarówno zamkniętych, jak i [otwartoźródłowych](https://github.com/NVIDIA/open-gpu-kernel-modules/) modułów jądra. Ze względu na to, że rozwój
modułu jądra NVIDIA odbywa się poza głównym drzewem kodu jądra (out-of-tree) i tym samym nie podąża za cyklem wydawniczym jądra, standardowa konfiguracja może czasami być niekompatybilna z najnowszym
jądrem. Jako obejście tego problemu, CachyOS łata moduły za pomocą łatek stworzonych przez społeczność lub udostępnionych bezpośrednio przez firmę NVIDIA.

## Inne

Jądro CachyOS posiada również kilka innych godnych uwagi funkcji, które są subtelne, ale poprawiają komfort użytkowania.

- Zawiera wariant debugujący jądra, który dostarcza nieoczyszczony (unstripped) plik binarny jądra do celów debugowania. Ten pakiet jest potrzebny do profilowania jądra za pomocą AutoFDO.
- [Binder](https://developer.android.com/reference/android/os/Binder), moduł potrzebny do [Waydroid](https://waydro.id/), jest domyślnie włączony w konfiguracji jądra
i już [skonfigurowany](https://github.com/CachyOS/linux-cachyos/blob/master/linux-cachyos/config#L10559).

## Konwencja nazewnictwa pakietów

```sh
linux-cachyos # Podstawowy pakiet jądra dla domyślnego jądra. Skompilowany przy użyciu clang
linux-cachyos-gcc # Odpowiednik linux-cachyos skompilowany przy użyciu GCC
linux-cachyos-{,gcc-}headers # Nagłówki jądra, głównie do budowania
linux-cachyos-{,gcc-}nvidia # Prekompilowane zamknięte moduły NVIDIA dla jądra linux-cachyos
linux-cachyos-{,gcc-}nvidia-open # Prekompilowane otwarte moduły NVIDIA dla jądra linux-cachyos
linux-cachyos-{,gcc-}zfs # Prekompilowane moduły ZFS dla jądra linux-cachyos
linux-cachyos-{,gcc-}dbg # Nieoczyszczony plik binarny Linuksa do debugowania

linux-cachyos-hardened # Podstawowy pakiet jądra dla jądra hardened. Skompilowany przy użyciu GCC
linux-cachyos-hardened-lto # Odpowiednik linux-cachyos-hardened skompilowany przy użyciu clang
linux-cachyos-hardened-{,lto-}headers
linux-cachyos-hardened-{,lto-}nvidia
linux-cachyos-hardened-{,lto-}nvidia-open
linux-cachyos-hardened-{,lto-}zfs
linux-cachyos-hardened-{,lto-}dbg
```

## FAQ

### Dlaczego AutoFDO nie jest używane dla wszystkich pozostałych wariantów jądra?

Ponieważ jest to kosztowne w budowie, gdyż zasadniczo wymaga dwukrotnego zbudowania jądra, co pochłania więcej zasobów i czasu poświęconego na kompilację. Proces budowania jądra z AutoFDO obejmuje następujące kroki:

1) Zbudowanie jądra z włączonymi funkcjami AutoFDO i debugowania.
2) Stworzenie profilu, co oznacza wykonywanie obciążeń roboczych w celu zebrania danych profilowania dla możliwych optymalizacji.
3) Ponowne zbudowanie jądra z profilem AutoFDO.

Dlatego na razie jest ono obecne tylko w wariancie [linux-cachyos](/pl/features/kernel#warianty).

Więcej informacji o AutoFDO znajdziesz [tutaj.](https://cachyos.org/blog/2411-kernel-autofdo/)

### Czy jądro czasu rzeczywistego (realtime) poprawia wydajność w grach?

Nie, nie poprawia. Jądro czasu rzeczywistego sprawia, że znacznie więcej kodu podlega wywłaszczaniu (preemptible) w porównaniu do normalnego jądra w pełni wywłaszczalnego (fully preemptible). Oznacza to, że znacznie więcej zadań (w tym procesy gier)
jest często wywłaszczanych i będzie przymusowo oddawać zasoby systemowe, co prowadzi do gorszej wydajności.
