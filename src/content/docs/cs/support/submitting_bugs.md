---
title: Odesílání chyb
---

# Popište svůj problém

- Co nefunguje?
- Pomáhá downgrade balíčku X s řešením problému?
- Použijte funkci vyhledávání pro podobné problémy.

# Poskytněte logy

CachyOS poskytuje skvělý nástroj pro sběr logů nazvaný `cachyos-bugreport.sh`.
Tento nástroj shromažďuje logy z:

- dmesg
- journlctl

Když budou logy shromážděny, aplikace se zeptá uživatele, zda má být nahraný na naše paste služby.

Spusťte následující příkaz v terminálu a odkaz s chybami zveřejněte ve vlákně:

```sh
sudo cachyos-bugreport.sh
```

# Odkazy pro odeslání hlášení

- Github: https://github.com/CachyOS/distribution
- Fórum: https://discuss.cachyos.org/c/feedback/bugreports/10
