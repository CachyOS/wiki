---
title: Varför CachyOS?
description: Varför CachyOS kan vara bättre för dig
---

CachyOS erbjuder en komplett och finslipad Arch Linux-upplevelse med en användarvänlig installatör, förkonfigurerade skrivbord, och prestandaoptimeringar utan att kompromissa på användarupplevelsen eller systemets säkerhet.

Nedan är några av nyckelfunktionerna som CachyOS har för en förbättrad skrivbordsupplevelse.

## Optimerade paket och repositories

CachyOS tillhandahåller ett stort utbud av optimerade paket för olika hårdvarukonfigurationer, inklusive `x86-64-v3`-, `x86-64-v4`-, och `Zen4+`-system för att förbättra generell prestanda.

För mer information, se [**Optimerade repositories.**](/features/optimized_repos)

## Anpassad kernel justerad för prestanda och stabilitet

Utöver CachyOS-baskernelpatchsetet som justerar olika kernelparametrar för att förbättra skrivbordets reaktionstid så handplackar CachyOS patchset som inte har mainlineats eller som inte är inkluderade i den stabila versionen av kerneln.

Därför så genomgår dessa patchar intern testning innan de släpps till användaer för att såe till så att stabilitet inte påverkas. För en komplett lista med patchar som CachyOS har, se [Kernel](/features/kernel).

## Stöd för anpassade CPU Schedulers

Som standard så är EEVDF justerad så att den delar upp den tillgängliga CPU-tiden rättvist mellan alla upggifter, och det är mest riktat mot hastighetsorienterade arbetsuppgifter. CachyOS-kerneln [**konfigurerar några EEVDF tunables**](https://github.com/CachyOS/linux/blob/6.15/cachy/kernel/sched/fair.c#L79-81) för att prioritera skrivbordsinteraktivitet.

Men, EEVDF designades inte för skrivbordsinteraktivitet. Med det i åtanke så kommer CachyOS-kernels patchade med [BORE (Burst-Oriented Response Enhancer)](https://github.com/firelzrd/bore-scheduler) schedulern som utökar EEVDF för att förbättra interaktiviteten under hög arbetsbelastning.

Med 6.12 så intreducerade Linux-kerneln möjligheten att hotplugga BPF schedulers och att ersätta EEVDF med en annan scheduler.

Frö mer information om kernels som CachyOS erbjuder och sched-ext schedulers, se [Kernel](/features/kernel) och [sched-ext](/configuration/sched-ext).

## Hårdvaruidentifiering

CachyOS inkluderar sitt egna hårdvaruidentifieringsverktyg som automatiskt identifierar och installerar de nödvändiga drivrutinerna och paketen för alla system, vilket förenklar post-installation-processen för användarna.

## Anpassningsbar installationsprocess

CachyOS-installatören låter användare anpassa deras system genom att välja skrivbordsmiljö, paket, filsystem, boot manager, kernel och mer för att passa deras behov:

- [**Skrivbordsmiljöer**](/installation/desktop_environments/)
- [**Boot Managers**](/installation/boot_managers/)
- [**Kernel Flavors**](/features/kernel#variants)
- [**Filsystem**](/installation/filesystem)
- [**Anpassade paket att inkludera under installationen**](https://github.com/CachyOS/cachyos-calamares/blob/cachyos-limine-qt6/src/modules/netinstall/netinstall.yaml)

## CachyOS-applikationer

Som standard så erbjuder CachyOS sin egna upsätting applikationer, så som CachyOS Hello och CachyOS Package Installer.

Lista över applikationer som CachyOS för närvarande utvecklar och underhåller:

- [**CachyOS Kernel Manager**](https://github.com/CachyOS/kernel-manager): Installera enkelt kernels från repositoryn eller konfigurera din egna kernel och inkludera dina egna patcher eller till och med hantera sched-ext framework via [**scx_loader**](<https://github.com/sched-ext/scx/tree/main/rust/scx_loader>).
- [**CachyOS Hello**](https://github.com/CachyOS/CachyOS-Welcome): Applikation för att kontrollera tweaks, tilläma fixar, installera paket, och tillhandahåller mer information om CachyOS.
- [**CachyOS Package Installer**](https://github.com/CachyOS/packageinstaller): GUI för enkel installation av applikationer.
- [**cachyos-rate-mirrors**](https://github.com/CachyOS/rate-mirrors): Rankar automatiskt Arch- och CachyOS-mirrors för optimal nerladdningshastighet med pacman.
- [**systemd-boot-manager**](https://github.com/CachyOS/systemd-boot-manager): Genererar automatiskt nya entries för systemd-boot-manager, som enkelt kan konfigureras i `/etc/sdboot-manage.conf`.

## Vänligt och aktivt community

Den största styrkan hos CachyOS är dess väkande community. Utan deras stöd så hade det inte varit möjligt för CachyOS att nå sin nuvarande framgång. Communitymedlemmar hjälper varandra genom att dela tips och tricks för att förbättra Linux-upplevelsen.

Häng med oss i [**CachyOS Discord**](https://discord.com/invite/cachyos-862292009423470592) och [**CachyOS Forum**](https://discuss.cachyos.org/).
