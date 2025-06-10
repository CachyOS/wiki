---
title: Dlaczego CachyOS?
description: Dlaczego CachyOS może być dla Ciebie lepszym wyborem
---

CachyOS oferuje dopracowane środowisko Arch Linux, wraz z przyjaznym dla użytkownika instalatorem, wstępnie skonfigurowanymi pulpitami oraz optymalizacjami wydajności, nie rezygnując przy tym z komfortu użytkowania i bezpieczeństwa systemu. Poniżej znajdują się niektóre z kluczowych funkcji, które CachyOS zapewnia, aby zagwarantować niesamowite wrażenia z użytkowania pulpitu.

## Zoptymalizowane pakiety i repozytoria

CachyOS oferuje zoptymalizowane pakiety dla różnych konfiguracji sprzętowych, w tym dla systemów x86-64-v3, x86-64-v4 i Zen4+, aby poprawić ogólną
wydajność systemu. Dodatkowo CachyOS dostarcza popularne pakiety z [AUR](https://aur.archlinux.org/), o które prosili użytkownicy, w celu poprawy komfortu użytkowania (QoL).

Aby lepiej zrozumieć różnorodność zoptymalizowanych pakietów CachyOS, zobacz [Zoptymalizowane Repozytoria](/pl/features/optimized_repos).

## Niestandardowe jądro zoptymalizowane pod kątem wydajności i stabilności

Oprócz podstawowego zestawu łatek jądra CachyOS, który dostraja różne parametry jądra w celu poprawy responsywności pulpitu, CachyOS włącza również obiecujące
zestawy łatek, które nie zostały jeszcze włączone do głównej gałęzi rozwoju jądra lub nie znajdują się w jego stabilnej wersji. Łatki te przechodzą wewnętrzne testy przed udostępnieniem użytkownikom,
aby upewnić się, że stabilność nie zostanie naruszona. Pełną listę łatek dostarczanych przez CachyOS można znaleźć w sekcji [Jądro](/pl/features/kernel).

## Wsparcie dla niestandardowych harmonogramów CPU

Planowanie zadań procesora (CPU scheduling) jest ważną częścią jądra, zapewniającą sprawiedliwy przydział czasu procesora dla wszystkich zadań. Jądro Linux implementuje różne klasy planowania,
aby zapewnić odpowiednie szeregowanie każdego zadania. Klasa planowania sprawiedliwego (fair scheduling class), bardziej znana jako "domyślny planista", opiera się na
algorytmie [EEVDF (Earliest Eligible Virtual Deadline First)](https://lwn.net/Articles/925371/).

Domyślnie EEVDF jest dostrojony tak, aby sprawiedliwie dzielić dostępny czas procesora między wszystkie zadania i jest głównie ukierunkowany na obciążenia zorientowane na przepustowość. Jądro CachyOS
[konfiguruje niektóre parametry EEVDF](https://github.com/CachyOS/linux/blob/6.12/cachy/kernel/sched/fair.c#L76-L79), aby priorytetyzować responsywność pulpitu ponad
czystą przepustowość.

Jednak EEVDF z założenia nie został zaprojektowany z myślą o interaktywności pulpitu. Mając to na uwadze, CachyOS dostarcza jądra z łatką implementującą planistę
[BORE (Burst-Oriented Response Enhancer)](https://github.com/firelzrd/bore-scheduler), który wprowadza dodatkową właściwość, aby przydzielać więcej czasu procesora zadaniom wymagającym wysokiej responsywności w porównaniu do tych, które tego nie wymagają, w oparciu o ich charakterystykę impulsową ('burstiness').

W wersji 6.12 jądro Linux umożliwia podłączanie planistów BPF "na gorąco" i zastępowanie klasy planowania sprawiedliwego innym planistą. Aby to ułatwić,
CachyOS zapewnia pełne wsparcie dla [planistów sched-ext](https://github.com/sched-ext/scx).

Więcej informacji na temat jąder oferowanych przez CachyOS oraz planistów sched-ext można znaleźć w sekcjach [Jądro](/pl/features/kernel) i [sched-ext](/pl/configuration/sched-ext/).

## Wykrywanie sprzętu

CachyOS dostarcza własne [narzędzie do wykrywania sprzętu](https://github.com/CachyOS/chwd), które poprawnie instaluje niezbędne pakiety i sterowniki dla każdego systemu, aby odciążyć
użytkowników od konieczności konfiguracji po instalacji.

## Personalizowany proces instalacji

Instalator CachyOS gwarantuje użytkownikom możliwość wyboru systemu, jakiego oczekują. Ta możliwość konfiguracji obejmuje między innymi:
- [Środowiska graficzne](/pl/installation/desktop_environments/)
- [Menedżery rozruchu](/pl/installation/boot_managers/)
- [Warianty jądra](/pl/features/kernel#warianty)
- [Systemy plików](/pl/installation/filesystem)
- Niestandardowe pakiety do zainstalowania podczas procesu instalacji

## Aplikacje CachyOS

Domyślnie CachyOS dostarcza własne aplikacje pomocnicze, takie jak CachyOS Hello i Instalator Pakietów CachyOS, aby uprościć i wzbogacić Twoje doświadczenie z Linuksem.
Na przykład, CachyOS Hello oferuje opcje aktualizacji systemu, włączania usług i oceniania serwerów lustrzanych. Zawiera również gotowe poprawki i usprawnienia dla niektórych
częstych problemów. Instalator Pakietów pomoże Ci w instalacji oprogramowania.

Lista aplikacji rozwijanych i utrzymywanych przez CachyOS:

- **CachyOS Kernel Manager**: Łatwo instaluj jądra z repozytorium lub skonfiguruj własne jądro, dołączając własne łatki, a nawet zarządzaj frameworkiem sched-ext za pomocą [scx_loader](<https://github.com/sched-ext/scx/tree/main/rust/scx_loader>).
- **CachyOS Hello**: Aplikacja do zarządzania usprawnieniami, stosowania poprawek, instalacji pakietów i uzyskiwania informacji o CachyOS.
- **CachyOS Package Installer**: Graficzny interfejs ułatwiający instalację popularnych aplikacji.
- **cachyos-rate-mirrors**: Automatycznie ocenia serwery lustrzane Arch i CachyOS w celu uzyskania optymalnych prędkości pobierania.
- **systemd-boot-manager**: Automatycznie generuje nowe wpisy dla menedżera rozruchu systemd-boot i można go łatwo skonfigurować w `/etc/sdboot-manage.conf`.

## Przyjazna i aktywna Społeczność

Najważniejszym punktem jest stale rosnąca społeczność CachyOS. Bez społeczności CachyOS nigdy nie osiągnąłby obecnej pozycji.
Członkowie społeczności pomagają sobie nawzajem oraz dzielą się poradami i wskazówkami, aby ulepszyć doświadczenia z Linuksem. Dołącz do nas na
[Discordzie CachyOS](https://discord.com/invite/cachyos-862292009423470592) lub na [Forum CachyOS](https://discuss.cachyos.org/).
