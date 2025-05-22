---
title: Fehler melden
---

# Beschreibe dein Problem

- *Was funktioniert nicht?*
- *Behebt das Downgraden von Paket X das Problem?*
- *Nutze die Suchfunktion, um nach gleichen Problemen zu suchen*
- *Hast du eigene Modifikationen vorgenommen?*
  - Beispiel: `Hinzufügen eines zusätzlichen Flags in einer Modprobe-Datei`

# Stelle Protokolle bereit

CachyOS bietet ein großartiges Tool zum Sammeln von Protokollen vom System namens `cachyos-bugreport.sh`.
Dieses Tool sammelt Protokolle von:
- dmesg
- journalctl
- inxi `(Zum Sammeln von Hardwareinformationen)`

Wenn die Protokolle gesammelt wurden, wird der Benutzer aufgefordert zu entscheiden, ob er sie auf unsere Paste-Webseite hochladen möchte.

**Führe den folgenden Befehl im Terminal aus und poste den Link mit den Fehlern in das Thema:**
```sh
sudo cachyos-bugreport.sh
```

# Links zum Einreichen eines Berichts

- Github: <https://github.com/CachyOS/distribution>
- Forum: <https://discuss.cachyos.org/c/feedback/bugreports/10>
- Discord: [Support-Kanal](https://discord.com/channels/862292009423470592/862294383470051348)
