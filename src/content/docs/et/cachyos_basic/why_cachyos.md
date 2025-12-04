---
title: Miks just CachyOS?
description: Miks CachyOS võiks olla sinu jaoks parem valik
---

CachyOS pakub lihvitud ja terviklikku Arch Linuxi kogemust koos kasutajasõbraliku paigaldaja, eelhäälestatud töölaudade ja jõudlust optimeerivate lahendustega, tegemata seejuures järeleandmisi süsteemi kasutuskogemuses ega turvalisuses.

Allpool on toodud mõned CachyOS-i olulisemad omadused, mis tagavad parema töölauaelamuse.

## Optimeeritud paketid ja tarkvarahoidlad

CachyOS pakub suurt valikut optimeeritud pakette erinevate riistvarakonfiguratsioonide jaoks, sealhulgas `x86-64-v3`, `x86-64-v4` ja `Zen4+` süsteemidele, et parandada üldist jõudlust.

Lisateabe saamiseks vaata [**Optimeeritud tarkvarahoidlad.**](/et/features/optimized_repos)

## Jõudlusele ja stabiilsusele häälestatud tuum

Lisaks CachyOS-i tuuma põhipaigakomplektile, mis kohandab erinevaid tuuma parameetreid, et parandada töölaua reageerimisvõimet, valib CachyOS hoolikalt välja ka paigakomplekte, mida pole veel põhivoolustatud või mis ei kuulu tuuma stabiilsesse versiooni.

Seetõttu läbivad need paigad sisemise testimise, enne kui need kasutajatele väljastatakse, et tagada stabiilsuse säilimine. CachyOS-i pakutavate paikade täieliku nimekirja leiate siit: [Tuum](/et/features/kernel).

## Kohandatud protsessoriplaaniuri tugi

Vaikimisi on EEVDF häälestatud jaotama saadaolevat protsessoriaega õiglaselt kõigi ülesannete vahel ning see on peamiselt suunatud läbilaskepõhistele töökoormustele. CachyOS-i tuum [**konfigureerib mõningaid EEVDF-i parameetreid**](https://github.com/CachyOS/linux/blob/6.15/cachy/kernel/sched/fair.c#L79-81), et eelistada töölaua interaktiivsust.

Siiski ei olnud EEVDF oma olemuselt mõeldud töölaua interaktiivsuse jaoks. Seda silmas pidades tarnib CachyOS tuumasid, mis on paigatud [BORE (Burst-Oriented Response Enhancer)](https://github.com/firelzrd/bore-scheduler) plaaniuriga, mis täiustab EEVDF-i, et parandada interaktiivsust suurte töökoormuste korral.

Versioonis 6.12 tõi Linuxi tuum kaasa võimaluse vahetada käigult BPF-plaaniure ja asendada EEVDF mõne teise plaaniuriga.

Lisateavet CachyOS-i pakutavate tuumade ja sched-ext plaaniuride kohta leiate siit: [Tuum](/et/features/kernel) ja [sched-ext](/et/configuration/sched-ext).

## Riistvara tuvastamine

CachyOS sisaldab omaenda riistvara tuvastamise tööriista, mis automaatselt tuvastab ja paigaldab iga süsteemi jaoks vajalikud draiverid ja paketid, lihtsustades kasutajate jaoks paigaldusjärgset protsessi.

## Kohandatav paigaldusprotsess

CachyOS-i paigaldaja laseb kasutajatel oma süsteemi kohandada, valides vastavalt oma vajadustele töölauakeskkonna, paketid, failisüsteemi, alglaaduri, tuuma ja palju muud:

- [**Töölauakeskkonnad**](/et/installation/desktop_environments/)
- [**Alglaadurid**](/et/installation/boot_managers/)
- [**Tuuma variandid**](/et/features/kernel#variants)
- [**Failisüsteemid**](/et/installation/filesystem)
- [**Kohandatud paketid, mida paigaldamise ajal kaasata**](https://github.com/CachyOS/cachyos-calamares/blob/cachyos-limine-qt6/src/modules/netinstall/netinstall.yaml)

## CachyOS-i rakendused

Vaikimisi pakub CachyOS oma rakenduste komplekti, nagu CachyOS Hello ja CachyOS Package Installer.

Nimekiri rakendustest, mida CachyOS hetkel arendab ja haldab:

- [**CachyOS Kernel Manager**](https://github.com/CachyOS/kernel-manager): Paigaldage hõlpsalt tuumasid tarkvarahoidlast või konfigureerige oma tuum, lisades oma paiku ja hallates isegi sched-ext raamistikku [**scx_loader**](<https://github.com/sched-ext/scx/tree/main/rust/scx_loader>) abil.
- [**CachyOS Hello**](https://github.com/CachyOS/CachyOS-Welcome): Rakendus seadistuste haldamiseks, paranduste rakendamiseks, pakettide paigaldamiseks ja lisateabe saamiseks CachyOS-i kohta.
- [**CachyOS Package Installer**](https://github.com/CachyOS/packageinstaller): Graafiline kasutajaliides rakenduste lihtsaks paigaldamiseks.
- [**cachyos-rate-mirrors**](https://github.com/CachyOS/rate-mirrors): Seab automaatselt Arch ja CachyOS peegelserverid pingeritta, et tagada pacmaniga optimaalsed allalaadimiskiirused.
- [**systemd-boot-manager**](https://github.com/CachyOS/systemd-boot-manager): Loob automaatselt uusi kirjeid systemd-boot-managerile ja seda saab hõlpsasti konfigureerida failis `/etc/sdboot-manage.conf`.

## Sõbralik ja aktiivne kogukond

CachyOS-i suurim tugevus on selle laienev kogukond. Ilma nende toetuseta poleks CachyOS saavutanud oma praegust edu. Kogukonna liikmed aitavad üksteist, jagades näpunäiteid ja nippe Linuxi kasutuskogemuse parandamiseks.

Liitu meiega [**CachyOS-i Discordis**](https://discord.gg/cachyos-862292009423470592) ja [**CachyOS-i foorumis**](https://discuss.cachyos.org/).
