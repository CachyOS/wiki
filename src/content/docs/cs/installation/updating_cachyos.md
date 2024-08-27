---
title: Aktualizace CachyOS
description: Jak aktualizovat CachyOS?
---

CachyOS je rolovací systém, což znamená, že aktualizace přicházejí automaticky prostřednictvím správce balíčků. Pokud je vyžadováno manuální nastavení, informujeme uživatele prostřednictvím sociálních médií nebo pomocí pacman.

Do pacman jsme integrovali zprávu o aktualizaci, kterou je třeba potvrdit, než uživatel aktualizuje svůj systém. Jakmile je tato zpráva potvrzena, přestane se zobrazovat při každé aktualizaci.

## pacman

Pacman je JEDINÝ doporučený způsob, jak aktualizovat váš systém.
Použijte následující příkaz k aktualizaci:

```bash
sudo pacman -Syu
```

Tento příkaz synchronizuje seznam balíčků s repozitářem a provede aktualizaci všech nainstalovaných balíčků na nejnovější verze.
