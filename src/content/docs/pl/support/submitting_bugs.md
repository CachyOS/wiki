---
title: Zgłaszanie błędów
---

# Opisz swój problem

- Co nie działa?
- Czy przywrócenie starszej wersji pakietu X rozwiązuje problem?
- Użyj funkcji wyszukiwania, aby znaleźć podobne problemy
- Czy wprowadziłeś/aś własne modyfikacje?
  - Przykład: `Dodanie dodatkowej flagi w pliku modprobe`

# Dostarcz logi

CachyOS udostępnia świetne narzędzie do zbierania logów systemowych o nazwie `cachyos-bugreport.sh`.
Narzędzie to zbierze logi z:

- dmesg
- journalctl
- inxi `(w celu zebrania informacji o sprzęcie)`

Po zebraniu logów użytkownik zostanie poproszony o decyzję, czy chce je przesłać na naszą stronę do wklejania.

Uruchom następujące polecenie w terminalu i wklej link z błędami do tematu:

```sh
sudo cachyos-bugreport.sh
```

# Linki do zgłaszania raportu

- Github: <https://github.com/CachyOS/distribution>
- Forum: <https://discuss.cachyos.org/c/feedback/bugreports/10>
- Discord: [Kanał wsparcia](https://discord.com/channels/862292009423470592/862294383470051348)
