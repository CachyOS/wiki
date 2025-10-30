---
title: Soumettre un rapport de bogue
---

# Décrire votre problème

- Qu’est-ce qui ne fonctionne pas ?
- Le fait de rétrograder le paquet X résout-il le problème ?
- Avez-vous utilisé la fonction de recherche pour voir si le problème a déjà été signalé ?
- Avez-vous effectué des modifications de votre côté ?  
  - Exemple : `Ajout d’un paramètre supplémentaire dans un fichier modprobe`

# Fournir les journaux

CachyOS fournit un excellent outil pour collecter les journaux du système appelé `cachyos-bugreport.sh`.  
Cet outil recueille les journaux provenant de :

- `dmesg`
- `journalctl`
- `inxi` *(pour collecter les informations matérielles)*

Une fois les journaux collectés, l’utilisateur est invité à choisir s’il souhaite les envoyer sur notre site de partage (*paste website*).

Exécutez la commande suivante dans le terminal, puis joignez le lien généré à votre rapport de bogue :

```sh
sudo cachyos-bugreport.sh
```

# Liens pour soumettre un rapport

- Github: <https://github.com/CachyOS/distribution>
- Forum: <https://discuss.cachyos.org/c/feedback/bugreports/10>
- Discord: [Support Channel](https://discord.com/channels/862292009423470592/862294383470051348)
