---
title: Fehler melden
---

# Beschreibe dein Problem

- Was funktioniert nicht?
- Behebt ein Downgrade von Paket X das Problem?
- Nutze die Suchfunktion für ähnliche Probleme
- Hast du selbst Änderungen vorgenommen?
  - Beispiel: `Ein zusätzliches Flag in einer Modprobe-Datei hinzufügen`

# Stelle Logs bereit

CachyOS bietet ein großartiges Werkzeug zum Sammeln von Systemprotokollen namens `cachyos-bugreport.sh`.
Dieses Tool sammelt Protokolle von:

- dmesg
- journalctl
- inxi `(Um Hardwareinformationen zu sammeln)`

Sobald die Protokolle gesammelt sind, wird der Benutzer aufgefordert zu entscheiden, ob er sie auf unsere Paste-Webseite hochladen möchte.

Führe den folgenden Befehl im Terminal aus und poste den Link mit den Fehlern in das Thema:

```sh
sudo cachyos-bugreport.sh
```

# Links zum Einreichen von Meldungen

- Github: <https://github.com/CachyOS/distribution>
- Forum: <https://discuss.cachyos.org/c/feedback/bugreports/10>
- Discord: [Support-Kanal](https://discord.com/channels/862292009423470592/862294383470051348)
