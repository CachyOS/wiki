---
title: Waarom CachyOS?
description: Waarom CachyOS better kan zijn voor jou
tableOfContents:
  minHeadingLevel: 1
  maxHeadingLevel: 4
---

CachyOS is een prestatie gerichte Arch Linux distributie ontworpen om een stabiele, efficiënte en gebruiksvriendelijke computer omgeving te bieden. Het bied de volledige kracht en flexibiliteit van een 'rolling-release' systeem, versterkt door geavanceerde optimalisaties en een aangepaste 'toolchain' die de gebruikerservaring stroomlijnt voor zowel nieuwe als ervaren gebruikers.

## Prestatie en Optimalisatie

### Geoptimaliseerde pakketten en repositories

CachyOS levert een grote selectie aan **[geoptimaliseerde pakketten](https://packages.cachyos.org/)** specifiek gecompileerde voor de gevarieerde moderne CPU architecten. Dit bevat ondersteuning voor `x86-64-v3`, `x86-64-v4`, en `Zen4+` systemen, waardoor jouw software zo is opgebouwd dat deze optimaal gebruikmaakt van de mogelijkheden van de hardware, wat resulteert in een aanzienlijke prestatiewinst.

Voor een diepere duik in onze optimalisatie repositories, zie onze gedetailleerde handleiding op **[Geoptimaliseerde Repositories](/nl/features/optimized_repos)**.

### Aangepaste Kernel geoptimaliseerd voor Prestatie en Stabiliteit

Naast de verzameling van basis updates voor de CachyOS-kernel, die verschillende kernel parameters afstemt om de responsiviteit van het bureaublad te verbeteren, neemt CachyOS ook geselecteerde verzamelingen van updates over die nog niet in de standaard kernel zijn opgenomen of die niet in de stabiele versie van de kernel zitten.

Daarom worden deze updates eerst intern getest voordat ze aan de gebruikers worden uitgebracht, zodat de stabiliteit niet in gevaar kamt. Voor een volledige lijst van updates die CachyOS levert, zie [Kernel](/nl/features/kernel).]

### Geavanceerde CPU Planner Ondersteuning

CachyOS levert kernels met de laatste CPU planner optimalisaties om te zorgen voor een soepel en responsief bureaublad, zelfs onder zware belasting.

* **EEVDF (De standaard Linux Kernel Planner):** Hoewel uitstekend voor algemene doorvoer, de CachyOS kernel bevat aangepaste **[EEVDF instellingen](https://github.com/CachyOS/linux/blob/6.15/cachy/kernel/sched/fair.c#L79-81)** om de responsiviteit van het bureaublad te verbeteren

* **[BORE](https://github.com/firelzrd/bore-scheduler) (Burst-Oriented Response Enhancer):** Voor gebruikers die maximaal interactiviteit nodig zijn, onze kernels bevatten ondersteuning voor de BORE planner, een verzameling van updates die EEVDF verbeterd voor een vloeibare ervaring bij zware belasting
  * Beschikbaar in de kernel variant `linux-cachyos-bore`.

Voor meer informatie over de kernels aangeboden door CachyOS en the sched-ext raamwerk, zie de **[Kernel](/nl/features/kernel)** en **[sched-ext](/nl/configuration/sched-ext)** documentatie.

## Gebruiksvriendelijke hulpmiddelen en aanpassingsmogelijkheden 

### [Geautomatiseerde Hardware Detectie](/nl/features/chwd/chwd/) 

CachyOS bevat een aangepaste hardware detectie hulpmiddel dat automatisch de benodigde stuurprogramma's en pakketten identificeert en installeert voor jouw systeem. Zo hoef je niet zelf naar drivers te zoeken, wat je na de installatie tijd en moeite bespaart.

### Aanpasbaar installatieproces

Met het installatieprogramma van CachyOS kun je je systeem helemaal naar wens inrichten door zelf de bureaublad omgeving, pakketten, het bestandssysteem, de bootmanager, de kernel en meer te kiezen:

- [Bureaublad omgevingen](/nl/installation/desktop_environments/)
- [Boot Managers](/nl/installation/boot_managers/)
- [Kernel smaken](/nl/features/kernel#varianten)
- [Bestandssystemen](/nl/installation/filesystem)
- [Eigen pakketten toevoegen tijdens de installatie](https://github.com/CachyOS/cachyos-calamares/blob/cachyos-limine-qt6/src/modules/netinstall/netinstall.yaml)

### Eigen applicaties van CachyOS

CachyOS ontwikkelt en onderhoudt een eigen reeks applicaties die het systeembeheer eenvoudiger maken en je ervaring verbeteren.

Lijst van applicaties die CachyOS momenteel ontwikkelt en onderhoudt:

-   **[CachyOS Hello](https://github.com/CachyOS/CachyOS-Welcome):** Een welkomstapplicatie waarmee je tweaks beheert, fixes toepast en pakketten installeert.
-   **[CachyOS Package Installer](https://github.com/CachyOS/packageinstaller):** Een grafische gebruikersinterface (GUI) waarmee je eenvoudig applicaties installeert.
-   **[CachyOS Kernel Manager](https://github.com/CachyOS/kernel-manager):** Installeer eenvoudig kernels uit de repository, configureer je eigen kernel en beheer het `sched-ext`-framework.
-   **[cachyos-rate-mirrors](https://github.com/CachyOS/rate-mirrors):** Rangschikt automatisch de mirrors van Arch en CachyOS voor optimale downloadsnelheden met `pacman`.
-   **[systemd-boot-manager](https://github.com/CachyOS/systemd-boot-manager):** Maakt automatisch nieuwe opstartitems aan voor `systemd-boot`, die je eenvoudig kunt configureren via `/etc/sdboot-manage.conf`.

## Een vriendelijke en actieve community

De grootste kracht van CachyOS is de groeiende community. Leden helpen elkaar door tips te delen, ondersteuning te bieden en bij te dragen aan het succes van het project. Jouw feedback helpt ons om CachyOS steeds verder te verbeteren.

Doe mee en word onderdeel van de community op de **[CachyOS Discord](https://discord.gg/cachyos-862292009423470592)** en het **[CachyOS Forum](https://discuss.cachyos.org/)**.