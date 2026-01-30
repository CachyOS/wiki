---
title: Dlaczego CachyOS?
description: Dlaczego CachyOS może być dla Ciebie lepszy
tableOfContents:
  minHeadingLevel: 1
  maxHeadingLevel: 4
---

CachyOS to skoncentrowana na wydajności dystrybucja Arch Linux, zaprojektowana w celu zapewnienia stabilnego, wydajnego i przyjaznego dla użytkownika środowiska komputerowego. Oferuje pełną moc i elastyczność systemu typu rolling-release, wzbogaconą o zaawansowane optymalizacje i niestandardowy zestaw narzędzi, który upraszcza obsługę zarówno dla nowych, jak i doświadczonych użytkowników.

## Wydajność i optymalizacja

### Zoptymalizowane pakiety i repozytoria

CachyOS dostarcza duży wybór **[zoptymalizowanych pakietów](https://packages.cachyos.org/)**, specjalnie skompilowanych dla różnych nowoczesnych architektur procesorów. Obejmuje to wsparcie dla systemów `x86-64-v3`, `x86-64-v4` i `Zen4+`, zapewniając, że Twoje oprogramowanie jest zbudowane tak, aby w pełni wykorzystać możliwości sprzętowe, co daje znaczący wzrost wydajności.

Aby uzyskać bardziej szczegółowe informacje na temat naszych zoptymalizowanych repozytoriów, zapoznaj się z naszym szczegółowym przewodnikiem na temat **[Zoptymalizowanych repozytoriów](/pl/features/optimized_repos)**.

### Niestandardowe jądro dostosowane pod kątem wydajności i stabilności

Oprócz podstawowego zestawu poprawek jądra CachyOS, które dostrajają różne parametry jądra w celu poprawy responsywności pulpitu, CachyOS selektywnie wybiera zestawy poprawek, które nie zostały włączone do głównej gałęzi rozwoju lub nie są zawarte w stabilnej wersji jądra.

Dlatego też, te poprawki przechodzą wewnętrzne testy przed udostępnieniem ich użytkownikom, aby upewnić się, że stabilność nie jest zagrożona. Pełną listę poprawek dostarczanych przez CachyOS można znaleźć w sekcji [Jądro](/pl/features/kernel).

### Wsparcie dla zaawansowanego harmonogramu procesora

CachyOS dostarcza jądra z najnowszymi optymalizacjami harmonogramu procesora, aby zapewnić płynny i interaktywny pulpit, nawet przy dużym obciążeniu.

* **EEVDF (domyślny harmonogram jądra Linux):** Chociaż jest doskonały pod względem ogólnej przepustowości, jądro CachyOS zawiera niestandardowe **[parametry dostrajające EEVDF](https://github.com/CachyOS/linux/blob/6.15/cachy/kernel/sched/fair.c#L79-81)** w celu poprawy responsywności pulpitu.

* **[BORE](https://github.com/firelzrd/bore-scheduler) (Burst-Oriented Response Enhancer):** Dla użytkowników, którzy potrzebują maksymalnej interaktywności, nasze jądra obsługują harmonogram BORE, zestaw poprawek, który ulepsza EEVDF, aby zapewnić bardziej płynne działanie podczas intensywnych obciążeń.
  * Dostępne w wariancie jądra `linux-cachyos-bore`.

Więcej informacji na temat jąder oferowanych przez CachyOS oraz frameworku sched-ext można znaleźć w dokumentacji **[Jądro](/pl/features/kernel)** i **[sched-ext](/pl/configuration/sched-ext)**.

## Narzędzia przyjazne dla użytkownika i personalizacja

### [Automatyczne wykrywanie sprzętu](/pl/features/chwd/chwd/)

CachyOS zawiera niestandardowe narzędzie do wykrywania sprzętu, które automatycznie identyfikuje i instaluje niezbędne sterowniki i pakiety dla Twojego systemu. Eliminuje to potrzebę ręcznego wyszukiwania sterowników, oszczędzając czas i wysiłek po instalacji.

### Konfigurowalny proces instalacji

Instalator CachyOS pozwala użytkownikom dostosować system poprzez wybór środowiska graficznego, pakietów, systemu plików, menedżera rozruchu, jądra i wielu innych, aby dopasować je do swoich potrzeb:

- [Środowiska graficzne](/pl/installation/desktop_environments/)
- [Menedżery rozruchu](/pl/installation/boot_managers/)
- [Wersje jądra](/pl/features/kernel#warianty)
- [Systemy plików](/pl/installation/filesystem)
- [Niestandardowe pakiety do dołączenia podczas instalacji](https://github.com/CachyOS/cachyos-calamares/blob/cachyos-limine-qt6/src/modules/netinstall/netinstall.yaml)

### Niestandardowe aplikacje CachyOS

CachyOS rozwija i utrzymuje własny zestaw aplikacji, aby uprościć zarządzanie systemem i poprawić wrażenia z użytkowania.

Lista aplikacji, które CachyOS obecnie rozwija i utrzymuje:

-   **[CachyOS Hello](https://github.com/CachyOS/CachyOS-Welcome):** Aplikacja powitalna do zarządzania poprawkami, stosowania napraw i instalowania pakietów.
-   **[CachyOS Package Installer](https://github.com/CachyOS/packageinstaller):** Graficzny interfejs użytkownika (GUI) do łatwej instalacji aplikacji.
-   **[CachyOS Kernel Manager](https://github.com/CachyOS/kernel-manager):** Łatwo instaluj jądra z repozytorium, konfiguruj własne i zarządzaj frameworkiem `sched-ext`.
-   **[cachyos-rate-mirrors](https://github.com/CachyOS/rate-mirrors):** Automatycznie szereguje serwery lustrzane Arch i CachyOS w celu uzyskania optymalnych prędkości pobierania za pomocą `pacman`.
-   **[systemd-boot-manager](https://github.com/CachyOS/systemd-boot-manager):** Automatycznie generuje nowe wpisy rozruchowe dla `systemd-boot`, które można łatwo skonfigurować za pomocą `/etc/sdboot-manage.conf`.

## Przyjazna i aktywna społeczność

Największą siłą CachyOS jest jego rozwijająca się społeczność. Członkowie społeczności pomagają sobie nawzajem, dzieląc się wskazówkami, zapewniając wsparcie i przyczyniając się do sukcesu projektu. Wasze opinie pomagają nam stale ulepszać CachyOS.

Dołącz do nas i stań się częścią społeczności na **[Discordzie CachyOS](https://discord.gg/cachyos-862292009423470592)** oraz na **[Forum CachyOS](https://discuss.cachyos.org/)**.
