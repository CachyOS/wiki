---
title: Soumettre des bugs
---

# Décrivez votre problème

- *Qu'est-ce qui ne fonctionne pas ?*
- *Est-ce que revenir à une version antérieure du paquet X résout le problème ?*
- *Utilisez la fonction de recherche pour voir s'il existe des problèmes similaires*
- *Avez-vous fait des modifications par vous-même ?*
  - Exemple : `Ajout d'un indicateur supplémentaire dans un fichier modprobe`

# Fournissez les journaux

CachyOS fournit un excellent outil pour collecter les journaux du système appelé `cachyos-bugreport.sh`.
Cet outil collectera les journaux de :
- dmesg
- journalctl
- inxi `(Pour collecter les informations matérielles)`

Une fois les journaux collectés, il sera demandé à l'utilisateur de décider s'il souhaite les téléverser sur notre site de partage.

**Exécutez la commande suivante dans le terminal, et postez le lien avec les bugs dans le sujet :**
```sh
sudo cachyos-bugreport.sh
```

# Liens pour soumettre un rapport

- Github : <https://github.com/CachyOS/distribution>
- Forum : <https://discuss.cachyos.org/c/feedback/bugreports/10>
- Discord : [Canal de support](https://discord.com/channels/862292009423470592/862294383470051348)
