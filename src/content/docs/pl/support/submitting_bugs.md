---
title: Zgłaszanie błędów
---

# Opisz swój problem

- *Co nie działa?*
- *Czy przywrócenie poprzedniej wersji pakietu X rozwiązuje problem?*
- *Użyj funkcji wyszukiwania, aby znaleźć podobne problemy*
- *Czy wprowadziłeś/aś własne modyfikacje?*
  - Przykład: `Dodanie dodatkowej flagi w pliku modprobe`

# Dostarcz logi

CachyOS udostępnia świetne narzędzie do zbierania logów systemowych o nazwie `cachyos-bugreport.sh`.
Narzędzie to zbierze logi z:
- dmesg
- journalctl
- inxi `(Do zebrania informacji o sprzęcie)`

Po zebraniu logów użytkownik zostanie zapytany, czy chce je przesłać na naszą stronę pastebin.

**Uruchom poniższe polecenie w terminalu i wklej link z błędami w wątku:**
```sh
sudo cachyos-bugreport.sh
```

# Linki do zgłaszania raportów

- Github: <https://github.com/CachyOS/distribution>
- Forum: <https://discuss.cachyos.org/c/feedback/bugreports/10>
- Discord: [Kanał wsparcia](https://discord.com/channels/862292009423470592/862294383470051348)
