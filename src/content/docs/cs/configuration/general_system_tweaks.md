---
title: Obecné Úpravy systému
description: Věci které můžete upravit po instalaci systému
---

# Obecná vylepšení systému

1\. **Zmírnění bezpečnostních opatření CPU**

Útok na speculativní provedení pomocí návratových instrukcí (retbleed) byl odhalen v červenci 2022. Jádro toto opravilo, ale způsobilo to významný pokles výkonu (14-39%).

Postiženy jsou následující typy procesorů:

- AMD: Zen 1, Zen 1+, Zen 2
- Intel: 6. až 8. generace, Skylake, Kaby Lake, Coffee Lake

Zkontrolujte, která bezpečnostní opatření se na vašem CPU aplikují pomocí:

```sh
grep . /sys/devices/system/cpu/vulnerabilities/*
```

### Zakázání bezpečnostních opatření

I když zakázání bezpečnostních opatření zlepšuje výkon, zároveň zvyšuje riziko bezpečnosti.

:::caution
Provádějte toto opatření na vlastní nebezpečí.
:::

Přidejte následující na řádek s jádrovými příkazy: `retbleed=off` nebo pro vypnutí všech bezpečnostních opatření: `mitigations=off`

Pro trvalé změny upravte příslušný soubor:

- **GRUB**: `/etc/default/grub`
- **systemd boot**: `/etc/sdboot-manage.conf`
- **rEFInd**: `/boot/refind_linux.conf`

:::caution
Vypnutí těchto bezpečnostních opatření zvyšuje riziko bezpečnosti systému.
:::

Pro více informací:

- https://www.phoronix.com/review/retbleed-benchmark
- https://www.phoronix.com/review/xeon-skylake-retbleed

### Downfall

Downfall je charakterizován jako zranitelnost způsobená optimalizací paměti, která neúmyslně odhaluje interní registry hardware software. S Downfallem může nedůvěryhodný software získávat přístup k datům uloženým jinými programy, na které by normálně neměl přístup: instrukce AVX GATHER může unikat obsah interního registru vektorů během spekulativního provádění. Downfall byl objeven bezpečnostním výzkumníkem Daniel Moghimi z Google. Moghimi napsal demo kód pro Downfall, který ukazuje, jak 128bitové a 256bitové AES klíče mohou být kradeny z jiných uživatelů na lokálním systému, stejně jako schopnost krádeže libovolných dat z jádra Linuxu.

Tato zranitelnost postihuje následující generace CPU:

- Skylake
- Tiger Lake
- Ice Lake

#### Vypnutí Downfall

Přidejte `gather_data_sampling=off` do možností příkazového řádku jádra.
`mitigations=off` také vypne Downfall.

2. **Ovladač AMD P-State**

Pro zlepšení výkonu a energetické účinnosti můžete povolit ovladač AMD P-State EPP. Výchozí ovladač AMD P-State nemusí poskytovat stejné výhody jako ovladač acpi-cpufreq.

Přidejte jednu z následujících možností na příkazový řádek jádra:

- **AMD P-State**: `amd-pstate=passive`
- **AMD P-State-GUIDED**: `amd-pstate=guided`
- **AMD P-State EPP**: `amd-pstate=active`

Můžete přepínat mezi režimy za běhu pro testování možností:

- **Autonomní režim**: platforma bere v úvahu pouze hodnoty nastavené pro minimální výkon, maximální výkon a preferenci energetického výkonu.

  ```sh
  echo active | sudo tee /sys/devices/system/cpu/amd_pstate/status
  ```

- **Vedený autonomní režim**: platforma nastavuje provozní úroveň v souladu s aktuální zátěží a v rámci limitů nastavených OS pomocí registrů minimálního a maximálního výkonu.

  ```sh
   echo guided | sudo tee /sys/devices/system/cpu/amd_pstate/status
  ```

- **Neautonomní režim**: platforma přijímá požadovanou úroveň výkonu přímo od OS prostřednictvím registru požadovaného výkonu.
  ```sh
   echo passive | sudo tee /sys/devices/system/cpu/amd_pstate/status
  ```

Pro více informací:

- [https://lore.kernel.org/lkml/20221110175847.3098728-1-Perry.Yuan@amd.com/](https://lore.kernel.org/lkml/20221110175847.3098728-1-Perry.Yuan@amd.com/)
- [https://lore.kernel.org/lkml/20230119115017.10188-1-wyes.karny@amd.com/](https://lore.kernel.org/lkml/20230119115017.10188-1-wyes.karny@amd.com/)

3\. Použití AMD P-State EPP

Pro použití P-State EPP jsou k dispozici dva správci frekvence CPU: powersave a performance. Doporučuje se používat správce powersave a nastavit preferenci.

- Nastavení správce powersave: `sudo cpupower frequency-set -g powersave`
- Nastavení správce performance: `sudo cpupower frequency-set -g performance`

Pro nastavení preference spusťte následující příkaz s požadovanou preferencí:

```sh
echo power | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/energy_performance_preference
```

Dostupné preference: `performance`, `power`, `balance_power`, `balance_performance`

Benchmarky pro každou preferenci můžete nalézt zde:
[https://lore.kernel.org/lkml/20221219064042.661122-1-perry.yuan@amd.com/](https://lore.kernel.org/lkml/20221219064042.661122-1-perry.yuan@amd.com/)

4\. AMD P-State řízení preferovaného jádra (předvoleno jako výchozí)

Ovladač AMD P-State poskytuje počáteční řazení jader při bootování. Spoléhá se na rozhraní CPPC pro komunikaci o řazení jader s operačním systémem a plánovačem, aby se zajistilo, že OS vybírá jádra s nejvyšším výkonem pro plánování procesů. Když ovladač AMD P-State obdrží zprávu o změně nejvyššího výkonu, aktualizuje řazení jader.

To může vést ke zlepšení výkonu a zpracování procesů.
Více informací zde:
https://lore.kernel.org/linux-pm/20230808081001.2215240-1-li.meng@amd.com/

AMD P-State řízení preferovaného jádra je nyní povoleno jako výchozí.

Můžete použít následující příkaz k ověření, zda váš CPU tuto funkci podporuje:

```sh
cat /sys/devices/system/cpu/amd_pstate/prefcore
```

nebo

```sh
cat /sys/devices/system/cpu/amd_pstate/status
```

abyste zjistili, zda je toto nastaveno.

5\. Vypnutí Split Lock Mitigate

V některých případech může split lock mitigate zpomalovat výkon některých aplikací a her. Je k dispozici oprava pro jeho vypnutí pomocí sysctl.

- Vypnutí split lock mitigate: `sudo sysctl kernel.split_lock_mitigate=0`
- Zapnutí split lock mitigate: `sudo sysctl kernel.split_lock_mitigate=1`

Pro trvalé nastavení přidejte následující řádek do `/etc/sysctl.d/99-splitlock.conf`:

```conf
kernel.split_lock_mitigate=0
```

Více informací o split lock naleznete zde:

- https://www.phoronix.com/news/Linux-Splitlock-Hurts-Gaming
- https://github.com/doitsujin/dxvk/issues/2938
