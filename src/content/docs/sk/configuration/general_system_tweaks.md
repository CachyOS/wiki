---
title: Všeobecné systémové úpravy
description: Čo môžete urobiť po inštalácii pre vylepšenie systému
---

# Všeobecné systémové úpravy

1\. Zmiernienie zraniteľností CPU
--------------------------------

V júli 2022 bola odhalený verejný špekulatívny útok na vykonávanie návratových inštrukcií (retbleed). Jadro túto chybu opravilo, ale výsledkom je výrazný pokles výkonu (14-39%).

Tieto CPU sú ovplyvnené:

*   AMD: Zen 1, Zen 1+, Zen 2
*   Intel: 6. až 8. generácia, Skylake, Kaby Lake, Coffee Lake

Skontrolujte, ktoré zmiernienia ovplyvňujú váš CPU pomocou:

```sh
grep . /sys/devices/system/cpu/vulnerabilities/*
```

### Deaktivácia zmierniení

Hoci deaktivácia zmierniení zvyšuje výkon, zároveň zvyšuje bezpečnostné riziká.

:::caution
Urobte tak na vlastné riziko.
:::

Pridajte nasledujúce do príkazového riadku jadra: `retbleed=off` alebo na deaktiváciu všetkých zmierniení: `mitigations=off`

Upravte príslušný súbor, aby boli zmeny trvalé:

- **GRUB**: `/etc/default/grub`
- **systemd boot**: `/etc/sdboot-manage.conf`
- **rEFInd**: `/boot/refind_linux.conf`

:::caution
Deaktivácia týchto zmierniení predstavuje bezpečnostné riziko pre váš systém.
:::

Pre viac informácií:

*   https://www.phoronix.com/review/retbleed-benchmark
*   https://www.phoronix.com/review/xeon-skylake-retbleed

### Downfall

Downfall je charakterizovaná ako zraniteľnosť kvôli optimalizačnej funkcii pamäte, ktorá neúmyselne odhaľuje interné hardvérové registre softvéru. S Downfall môže nedôveryhodný softvér pristupovať k dátam uloženým inými programami, ktoré by mali byť za normálnych okolností nedostupné: inštrukcia AVX GATHER môže počas špekulatívneho vykonávania odhaliť obsah vnútorného vektorového registra. Downfall objavil bezpečnostný výskumník Daniel Moghimi z Google. Moghimi napísal demo kód pre Downfall, ktorý ukazuje, ako môžu byť ukradnuté 128-bitové a 256-bitové AES kľúče od iných používateľov na miestnom systéme, ako aj schopnosť ukradnúť ľubovoľné dáta z jadra Linuxu.


Toto ovplyvňuje nasledujúce generácie CPU:
- Skylake
- Tiger Lake
- Ice Lake


#### Deaktivácia Downfall

Pridajte `gather_data_sampling=off` do možností príkazového riadku jadra.
`mitigations=off` tiež deaktivuje downfall.

2\. Ovládač AMD P-State
---------------------------

Pre lepší výkon a energetickú efektívnosť môžete povoliť ovládač AMD P-State EPP. Predvolený ovládač AMD P-State nemusí poskytovať rovnaké výhody ako ovládač acpi-cpufreq.

Pridajte jednu z nasledujúcich možností do príkazového riadku jadra:

- **AMD P-State**: `amd-pstate=passive`
- **AMD P-State-GUIDED**: `amd-pstate=guided`
- **AMD P-State EPP**: `amd-pstate=active`

Môžete prepínať medzi režimami za behu na testovanie možností:

- **Autonómny režim**: platforma zohľadňuje iba hodnoty nastavené pre minimálny výkon, maximálny výkon a preferenciu energetického výkonu.
   ```sh
   echo active | sudo tee /sys/devices/system/cpu/amd_pstate/status 
   ```

- **Guided-autonómny režim**: platforma nastavuje úroveň prevádzkového výkonu podľa aktuálnej pracovnej záťaže a v rámci limitov nastavených OS cez registre minimálneho a maximálneho výkonu.
   ```sh
   echo guided | sudo tee /sys/devices/system/cpu/amd_pstate/status
   ```

- **Neautonómny režim**: platforma dostáva požadovanú úroveň výkonu priamo od OS cez Desired Performance Register.
   ```sh
   echo passive | sudo tee /sys/devices/system/cpu/amd_pstate/status
   ```

Pre viac informácií:

*   [https://lore.kernel.org/lkml/20221110175847.3098728-1-Perry.Yuan@amd.com/](https://lore.kernel.org/lkml/20221110175847.3098728-1-Perry.Yuan@amd.com/)
*   [https://lore.kernel.org/lkml/20230119115017.10188-1-wyes.karny@amd.com/](https://lore.kernel.org/lkml/20230119115017.10188-1-wyes.karny@amd.com/)

3\. Použitie AMD P-State EPP
------------------------

Na použitie P-State EPP sú k dispozícii dvaja správcovia škálovania frekvencie CPU: powersave a performance. Odporúča sa použiť správcu powersave a nastaviť preferenciu.

*   Nastavenie správcu powersave: `sudo cpupower frequency-set -g powersave`
*   Nastavenie správcu performance: `sudo cpupower frequency-set -g performance`

Na nastavenie preferencie, spustite nasledujúci príkaz s požadovanou preferenciou:

```sh
echo power | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/energy_performance_preference
```

Dostupné preferencie: `performance`, `power`, `balance_power`, `balance_performance`

Benchmarky pre každú preferenciu nájdete tu:
[https://lore.kernel.org/lkml/20221219064042.661122-1-perry.yuan@amd.com/](https://lore.kernel.org/lkml/20221219064042.661122-1-perry.yuan@amd.com/)

4\. AMD P-State Preferované spracovanie jadra (predvolene povolené)
---------------------------------

Ovládač AMD Pstate poskytne počiatočné usporiadanie jadier pri bootovaní. Spolieha sa na rozhranie CPPC, ktoré komunikuje poradie jadier s operačným systémom a plánovačom, aby sa zabezpečilo, že OS bude vyberať jadrá s najvyšším výkonom ako prvé pri plánovaní procesov. Keď ovládač AMD Pstate dostane správu o zmene najvyššieho výkonu, aktualizuje poradie jadier.

Toto môže viesť k lepšiemu výkonu a spracovaniu procesov.
Viac informácií nájdete tu:
https://lore.kernel.org/linux-pm/20230808081001.2215240-1-li.meng@amd.com/

Preferované spracovanie jadra AMD P-State je teraz predvolene povolené.

Nasledujúcim príkazom môžete skontrolovať, či to váš CPU podporuje:
```sh
cat /sys/devices/system/cpu/amd_pstate/prefcore
```
alebo
```sh
cat /sys/devices/system/cpu/amd_pstate/status
```
aby ste zistili, či je povolené.

5\. Deaktivácia Split Lock Mitigate
---------------------------------

V niektorých prípadoch môže split lock mitigate spomaliť výkon niektorých aplikácií a hier. Je dostupná záplata na deaktiváciu pomocou sysctl.

*   Deaktivácia split lock mitigate: `sudo sysctl kernel.split_lock_mitigate=0`
*   Aktivácia split lock mitigate: `sudo sysctl kernel.split_lock_mitigate=1`

Aby bola zmena trvalá, pridajte nasledujúci riadok do súboru `/etc/sysctl.d/99-splitlock.conf`:

```conf
kernel.split_lock_mitigate=0
```

Pre viac informácií o split lock, pozrite sa na:

- https://www.phoronix.com/news/Linux-Splitlock-Hurts-Gaming
- https://github.com/doitsujin/dxvk/issues/2938