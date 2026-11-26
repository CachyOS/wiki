---
title: Instalator CLI
description: Dziennik zmian instalatora CLI
ai_translated: true
---
# 0.8.4

## Funkcje ✨

- **Ulepszona obsługa partycji:** Przeprowadzono znaczącą refaktoryzację i wprowadzono ulepszenia w sposobie obsługi partycji przez instalator, co przekłada się na większą dokładność i niezawodność.
- **Generowanie parametrów jądra:** Instalator automatycznie generuje teraz parametry jądra na podstawie wykrytego układu partycji.
- **Rozbudowana biblioteka `gucc`:** Biblioteka `gucc` została znacznie rozbudowana i obejmuje teraz obsługę instalacji oraz konfiguracji rEFInd.

## Prace porządkowe 🧹

- **Clang-Format i Clang-Tidy:** Poprawiono spójność i jakość bazy kodu poprzez zastosowanie narzędzi clang-format oraz clang-tidy.
- **Refaktoryzacja z użyciem string_view:** W kilku obszarach bazy kodu zastosowano teraz literały string_view w celu zwiększenia wydajności i czytelności.
- **Wdrożenie Doctest:** Asercje języka C zostały zastąpione biblioteką doctest w celu zapewnienia bardziej niezawodnych i szczegółowych testów.
- **Zrefaktoryzowane testy:** Zestawy testów zostały zrefaktoryzowane pod kątem przejrzystości i łatwości utrzymania.
- **Obsługa rEFInd w `gucc`:** Kod związany z rEFInd został zrefaktoryzowany i przeniesiony do biblioteki `gucc` dla lepszej organizacji i łatwiejszego utrzymania.

## Poprawki błędów 🐛

- **Wykrywanie podwoluminów Btrfs:** Rozwiązano problemy z wykrywaniem istniejących podwoluminów btrfs.
- **Dokładność informacji o partycjach:** Wprowadzono ulepszenia zapewniające dokładne zbieranie i wyświetlanie informacji o partycjach.
- **Punkt montowania root dla rEFInd:** Naprawiono błąd wpływający na główny punkt montowania (root) używany przez rEFInd.
- **Wykrywanie UUID:** Usprawniono proces wykrywania identyfikatorów UUID partycji podczas inicjalizacji.
- **Poprawki budowania Meson:** Rozwiązano problemy występujące podczas procesu budowania za pomocą Meson.
- **Dołączanie podwoluminów Btrfs:** Naprawiono błąd związany z dołączaniem podwoluminów btrfs w środowiskach deweloperskich.
- **Rootfs we wstępnie zdefiniowanych konfiguracjach:** Rozwiązano problem z rootfs w schematach partycjonowania opartych na wstępnie zdefiniowanych konfiguracjach.
- **Montowanie w trybie odczytu i zapisu dla rEFInd:** Zapewniono, że rEFInd montuje niezbędne partycje z uprawnieniami odczytu i zapisu.

# 0.8.3

## Prace porządkowe 🧹

- Zaktualizowano zależność CPR do nowszej wersji w celu poprawy funkcjonalności.
- Jawnie nakazano bibliotece CTRE (Compile Time Regular Expressions) korzystanie ze standardu C++23 dla spójności i potencjalnego wzrostu wydajności.
- Zwiększono limit czasu sprawdzania połączenia w sekcji narzędziowej, aby uwzględnić ewentualne opóźnienia sieciowe lub wolne odpowiedzi.

# 0.8.2

## Poprawki 🐛

- Rozwiązano problem, w którym „gucc” nie obsługiwał poprawnie punktów montowania podwoluminów btrfs.
- Ulepszono „gucc” w zakresie obsługi różnych stanów montowania podwoluminów btrfs.

## Prace porządkowe 🧹

- Poprawiono literówkę w pliku README i zaktualizowano informacje o wersji.

# 0.8.1

## Poprawki 🐛

- Rozwiązano problem, w którym repozytoria ISA były nieprawidłowo włączane na maszynach wirtualnych Oracle VM.
- Usunięto niespójności stylu poleceń w celu poprawy komfortu użytkownika.

## Prace porządkowe 🧹

- Usunięto zbędną logikę ucode związaną z rEFInd, upraszczając bazę kodu.

# 0.8.0

## Funkcje ✨

- Dodano parser sieciowych profili pakietów.
- Wprowadzono możliwość pobierania pakietów środowiskowych z pliku TOML analizowanego przez gucc.
- Zaimplementowano funkcję pomocniczą w gucc do pobierania plików z adresów URL 📥.
- Dodano obsługę pobierania profili sieciowych z adresu URL z mechanizmem awaryjnym w gucc.
- Zintegrowano instalację profili sieciowych z dystrybucją binarną.
- Przeniesiono montowanie określonych partycji oraz logikę wykrywania do gucc.
- Wprowadzono `utils::exec_checked` dla bezpieczniejszego wykonywania zewnętrznych poleceń.

## Ulepszenia ✅

- Zwiększono pokrycie testami dla funkcjonalności crypttab w gucc 🧪.
- Ulepszono logowanie w gucc poprzez odpowiednią konfigurację loggera.
- **Zaktualizowano wersję C++ do C++23** ⬆️.
- Zrefaktoryzowano bazę kodu pod kątem wykorzystania funkcji C++23, takich jak `std::ranges` i `contains`, dla lepszej czytelności i wydajności.
- Zrefaktoryzowano różne komponenty w celu wykorzystania `utils::exec_checked`.

## Poprawki 🐛

- Rozwiązano problem z zakodowanymi na stałe typami bibliotek w gucc.
- Naprawiono brakującą implementację loggera oraz pliku nagłówkowego w gucc.
- Włączono bibliotekę CPR dla kompilacji w środowiskach niedeweloperskich.
- Naprawiono proces kompilacji statycznej.
- Rozwiązano problemy wprowadzone w commicie [`a70e641e364`](https://github.com/CachyOS/New-Cli-Installer/commit/a70e641e364).
- Naprawiono błędy kompilacji w komponencie TUI.
- Naprawiono problem z zależnościami, w którym zależność FTXUI od range-v3 nie była publiczna.

## Prace porządkowe 🧹

- Zaktualizowano testy CI, procesy budowania oraz naprawiono powiązane problemy.
- Usunięto wycofaną instalację profili sieciowych wraz z dystrybucją binarną.
- Zrefaktoryzowano i uporządkowano kod w różnych komponentach: TUI, utils, chwd_profiles, user oraz testach.
- Usunięto nieużywaną bibliotekę range-v3 z zależności instalatora.
- Zaktualizowano plik README.
