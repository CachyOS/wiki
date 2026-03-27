---
title: De ce CachyOS?
description: De ce CachyOS ar putea fi o alegere mai bună pentru tine
tableOfContents:
  minHeadingLevel: 1
  maxHeadingLevel: 4
---

CachyOS este o distribuție Arch Linux axată pe performanță, concepută pentru a oferi un mediu de utilizare stabil, eficient și prietenos. Îți oferă întreaga putere și flexibilitate a unui sistem de tip rolling-release, îmbunătățită prin optimizări avansate și un set de unelte personalizate care simplifică experiența atât pentru utilizatorii noi, cât și pentru cei experimentați.

## Performanță și Optimizare

### Pachete și Repozitorii Optimizate

CachyOS oferă o selecție largă de **[pachete optimizate](https://packages.cachyos.org/)** compilate special pentru diverse arhitecturi de procesoare moderne. Aceasta include suport pentru sistemele `x86-64-v3`, `x86-64-v4` și `Zen4+`, asigurându-te că software-ul tău este construit pentru a profita din plin de capabilitățile hardware-ului tău, oferind un spor semnificativ de performanță.

Pentru o privire mai detaliată asupra repozitoriilor noastre optimizate, consultă ghidul nostru despre **[Repozitorii Optimizate](/ro/features/optimized_repos)**.

### Kernel Personalizat, Reglat pentru Performanță și Stabilitate

Pe lângă setul de patch-uri de bază CachyOS care reglează diverși parametri ai kernelului pentru a îmbunătăți timpul de răspuns al desktopului, CachyOS selectează cu atenție seturi de patch-uri care nu au fost incluse oficial (mainlined) sau nu sunt prezente în revizia stabilă a kernelului.

Prin urmare, aceste patch-uri trec prin teste interne înainte de a fi lansate către utilizatori, pentru a ne asigura că stabilitatea nu este afectată. Pentru o listă completă a patch-urilor pe care le oferă CachyOS, consultă secțiunea **[Kernel](/ro/features/kernel)**.

### Suport Avansat pentru Planificatorul CPU (CPU Scheduler)

CachyOS livrează kerneluri cu cele mai noi optimizări ale planificatorului CPU pentru a asigura un desktop fluid și interactiv, chiar și sub sarcină mare.

* **EEVDF (Planificatorul implicit al kernelului Linux):** Deși este excelent pentru lățimea de bandă generală, kernelul CachyOS include **[parametri EEVDF personalizați](https://github.com/CachyOS/linux/blob/6.15/cachy/kernel/sched/fair.c#L79-81)** pentru a îmbunătăți timpul de răspuns al desktopului.

* **[BORE](https://github.com/firelzrd/bore-scheduler) (Burst-Oriented Response Enhancer):** Pentru utilizatorii care au nevoie de interactivitate maximă, kernelurile noastre suportă planificatorul BORE, un set de patch-uri care îmbunătățește EEVDF pentru a oferi o experiență mai fluidă în timpul sarcinilor de lucru intensive.
  * Disponibil pe varianta de kernel `linux-cachyos-bore`.

Pentru mai multe informații despre kernelurile oferite de CachyOS și framework-ul sched-ext, consultă documentația pentru **[Kernel](/ro/features/kernel)** și **[sched-ext](/ro/configuration/sched-ext)**.

## Unelte Prietenoase și Personalizare

### [Detectare Hardware Automatizată](/ro/features/chwd/chwd/)

CachyOS include o unealtă personalizată de detectare a hardware-ului care identifică și instalează automat driverele și pachetele necesare pentru sistemul tău. Acest lucru elimină necesitatea căutării manuale a driverelor, economisind timp și efort după instalare.

### Proces de Instalare Personalizabil

Instalatorul CachyOS permite utilizatorilor să își personalizeze sistemul alegând mediul desktop, pachetele, sistemul de fișiere, managerul de boot, kernelul și multe altele, pentru a se potrivi nevoilor lor:

- [Medii Desktop](/ro/installation/desktop_environments/)
- [Manageri de Boot](/ro/installation/boot_managers/)
- [Variante de Kernel](/ro/features/kernel#variants)
- [Sisteme de Fișiere](/ro/installation/filesystem)
- [Pachete personalizate de inclus în timpul instalării](https://github.com/CachyOS/cachyos-calamares/blob/cachyos-limine-qt6/src/modules/netinstall/netinstall.yaml)

### Aplicații Personalizate CachyOS

CachyOS dezvoltă și întreține propria suită de aplicații pentru a simplifica gestionarea sistemului și pentru a-ți îmbunătăți experiența.

Lista aplicațiilor pe care CachyOS le dezvoltă și le întreține în prezent:

-   **[CachyOS Hello](https://github.com/CachyOS/CachyOS-Welcome):** O aplicație de bun venit pentru controlul optimizărilor, aplicarea de remedieri și instalarea pachetelor.
-   **[CachyOS Package Installer](https://github.com/CachyOS/packageinstaller):** O interfață grafică (GUI) pentru instalarea ușoară a aplicațiilor.
-   **[CachyOS Kernel Manager](https://github.com/CachyOS/kernel-manager):** Instalează cu ușurință kerneluri din repozitoriu, configurează-le pe ale tale și gestionează framework-ul `sched-ext`.
-   **[cachyos-rate-mirrors](https://github.com/CachyOS/rate-mirrors):** Clasifică automat mirror-urile Arch și CachyOS pentru viteze optime de descărcare cu `pacman`.
-   **[systemd-boot-manager](https://github.com/CachyOS/systemd-boot-manager):** Generează automat intrări noi de boot pentru `systemd-boot`, care pot fi configurate ușor prin `/etc/sdboot-manage.conf`.

## O Comunitate Prietenoasă și Activă

Cea mai mare forță a CachyOS este comunitatea sa în continuă expansiune. Membrii comunității se ajută unii pe alții împărtășind sfaturi, oferind suport și contribuind la succesul proiectului. Feedback-ul tău ne ajută să îmbunătățim continuu experiența CachyOS.

Vino alături de noi și devino parte din comunitate pe **[Discord-ul CachyOS](https://discord.gg/cachyos-862292009423470592)** și pe **[Forumul CachyOS](https://discuss.cachyos.org/)**.
