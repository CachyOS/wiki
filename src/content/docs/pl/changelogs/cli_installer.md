---
title: Dziennik zmian instalatora CLI CachyOS
description: Dzienniki zmian instalatora CLI
---
# 0.8.4

## Nowe funkcje ✨

- **Ulepszona obsługa partycji:** Wprowadzono znaczący refaktoring i ulepszenia w sposobie obsługi partycji przez instalator, co prowadzi do większej dokładności i niezawodności.
- **Generowanie parametrów jądra:** Instalator automatycznie generuje teraz parametry jądra w oparciu o wykryty schemat partycji.
- **Ulepszona biblioteka `gucc`:** Biblioteka `gucc` została znacznie ulepszona, obejmując teraz możliwości instalacji i konfiguracji refind.

## Porządki 🧹

- **Clang-Format i Clang-Tidy:** Spójność i jakość bazy kodu zostały poprawione poprzez zastosowanie clang-format i clang-tidy.
- **Refaktoring z użyciem String Views:** Kilka obszarów bazy kodu wykorzystuje teraz literały string_view w celu poprawy wydajności i czytelności.
- **Implementacja Doctest:** Asercje C zostały zastąpione przez doctest w celu bardziej niezawodnego i informatywnego testowania.
- **Zrefaktoryzowane testy:** Zestawy testów zostały zrefaktoryzowane w celu poprawy przejrzystości i łatwości konserwacji.
- **Obsługa Refind w `gucc`:** Kod związany z Refind został zrefaktoryzowany i przeniesiony do biblioteki `gucc` w celu lepszej organizacji i łatwości konserwacji.

## Poprawki błędów 🐛

- **Wykrywanie podwolumenów Btrfs:** Rozwiązano problemy z wykrywaniem istniejących podwolumenów btrfs.
- **Dokładność informacji o partycjach:** Wprowadzono ulepszenia w celu zapewnienia dokładnego gromadzenia i wyświetlania informacji o partycjach.
- **Punkt montowania root dla Refind:** Naprawiono błąd dotyczący punktu montowania root używanego przez refind.
- **Wykrywanie UUID:** Ulepszono proces wykrywania UUID partycji podczas inicjalizacji.
- **Poprawki budowania Meson:** Rozwiązano problemy napotkane podczas procesu budowania meson.
- **Dołączanie podwolumenów Btrfs:** Naprawiono błąd związany z dołączaniem podwolumenów btrfs w środowiskach deweloperskich.
- **Rootfs w predefiniowanych konfiguracjach:** Rozwiązano problem z rootfs schematów partycji pochodzących z predefiniowanych konfiguracji.
- **Montowanie Refind w trybie odczytu i zapisu:** Zapewniono, że refind montuje niezbędne partycje z uprawnieniami do odczytu i zapisu.

# 0.8.3

## Porządki 🧹

- Zaktualizowano zależność CPR do nowszej wersji w celu poprawy funkcjonalności.
- Jawnie poinstruowano CTRE (biblioteka wyrażeń regularnych czasu kompilacji), aby korzystała ze standardu C++23 w celu zapewnienia spójności i potencjalnych ulepszeń wydajności.
- Zwiększono limit czasu sprawdzania połączenia w sekcji narzędzi, aby uwzględnić potencjalne opóźnienia sieciowe lub powolne odpowiedzi.

# 0.8.2

## Poprawki 🐛

- Rozwiązano problem, w którym "gucc" nie obsługiwał poprawnie punktów montowania podwolumenów btrfs.
- Ulepszono "gucc", aby obsługiwał różne statusy montowania podwolumenów btrfs.

## Porządki 🧹

- Poprawiono literówkę w pliku README i zaktualizowano informacje o wersji.

# 0.8.1

## Poprawki 🐛

- Rozwiązano problem, w którym repozytoria ISA były niepoprawnie włączane na Oracle VM.
- Poprawiono niespójności w stylu poleceń w celu poprawy doświadczenia użytkownika.

## Porządki 🧹

- Usunięto niepotrzebną logikę ucode związaną z refind, usprawniając bazę kodu.

# 0.8.0

## Nowe funkcje ✨

- Dodano parser dla profili pakietów sieciowych.
- Wprowadzono możliwość pobierania pakietów środowiskowych z pliku TOML sparsowanego przez gucc.
- Zaimplementowano funkcję pomocniczą w gucc do pobierania plików z adresów URL 📥.
- Dodano obsługę pobierania profili sieciowych z adresu URL z mechanizmem awaryjnym w gucc.
- Zintegrowano instalację profili sieciowych z dystrybucją binarną.
- Przeniesiono montowanie określonych partycji i logikę wykrywania do gucc.
- Wprowadzono `utils::exec_checked` dla bezpieczniejszego wykonywania poleceń zewnętrznych.

## Ulepszenia ✅

- Zwiększono pokrycie testami dla funkcjonalności crypttab w gucc 🧪.
- Ulepszono logowanie w gucc poprzez odpowiednią konfigurację rejestratora.
- **Zaktualizowano wersję C++ do C++23** ⬆️.
- Zrefaktoryzowano bazę kodu, aby wykorzystać funkcje C++23, takie jak `std::ranges` i `contains`, w celu poprawy czytelności i wydajności.
- Zrefaktoryzowano różne komponenty, aby wykorzystywały `utils::exec_checked`.

## Poprawki 🐛

- Rozwiązano problem z zakodowanymi na stałe typami bibliotek w gucc.
- Naprawiono brakującą implementację rejestratora i plik nagłówkowy w gucc.
- Włączono bibliotekę CPR dla kompilacji w środowiskach innych niż deweloperskie.
- Naprawiono proces budowania statycznego.
- Rozwiązano problemy wprowadzone w commicie [`a70e641e364`](https://github.com/CachyOS/New-Cli-Installer/commit/a70e641e364).
- Naprawiono błędy kompilacji w komponencie TUI.
- Poprawiono problem zależności, w którym zależność FTXUI od range-v3 nie była publiczna.

## Porządki 🧹

- Zaktualizowano sprawdzanie CI, procesy budowania i naprawiono powiązane problemy.
- Usunięto wycofaną instalację profili sieciowych wraz z dystrybucją binarną.
- Zrefaktoryzowano i uporządkowano kod w różnych komponentach: TUI, utils, chwd_profiles, user i tests.
- Usunięto nieużywaną bibliotekę range-v3 z zależności instalatora.
- Zaktualizowano plik README.
