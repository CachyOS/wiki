---
title: ¿Por qué CachyOS?
description: Por qué CachyOS puede ser mejor para ti
tableOfContents:
  minHeadingLevel: 1
  maxHeadingLevel: 4
---

CachyOS es una distribución de Arch Linux centrada en el rendimiento, diseñada para ofrecer un entorno informático estable, eficiente y fácil de usar. Ofrece toda la potencia y flexibilidad de un sistema de lanzamiento continuo (rolling-release), mejorado con optimizaciones avanzadas y una cadena de herramientas personalizada que simplifica la experiencia tanto para usuarios nuevos como experimentados.

## Rendimiento y optimización

### Paquetes y repositorios optimizados

CachyOS proporciona una gran selección de **[paquetes optimizados](https://packages.cachyos.org/)** compilados específicamente para diversas arquitecturas de CPU modernas. Esto incluye soporte para sistemas `x86-64-v3`, `x86-64-v4` y `Zen4+`, asegurando que tu software esté construido para aprovechar al máximo las capacidades de tu hardware y obtener un aumento significativo en el rendimiento.

Para una visión más detallada de nuestros repositorios optimizados, consulta nuestra guía detallada sobre **[Repositorios Optimizados](/es/features/optimized_repos)**.

### Kernel personalizado y ajustado para rendimiento y estabilidad

Además del conjunto de parches base del kernel de CachyOS que ajusta varios parámetros del kernel para mejorar la capacidad de respuesta del escritorio, CachyOS selecciona cuidadosamente conjuntos de parches que no han sido incorporados en la rama principal o que no están incluidos en la revisión estable del kernel.

Por lo tanto, estos parches se someten a pruebas internas antes de ser lanzados a los usuarios para garantizar que la estabilidad no se vea afectada. Para obtener una lista completa de los parches que proporciona CachyOS, consulta [Kernel](/es/features/kernel).

### Soporte para planificadores de CPU avanzados

CachyOS incluye kernels con las últimas optimizaciones en el planificador de CPU para asegurar un escritorio fluido e interactivo, incluso bajo cargas pesadas.

* **EEVDF (el planificador por defecto del kernel de Linux):** Aunque es excelente para el rendimiento general, el kernel de CachyOS incluye **[ajustes personalizados para EEVDF](https://github.com/CachyOS/linux/blob/6.15/cachy/kernel/sched/fair.c#L79-81)** para mejorar la capacidad de respuesta del escritorio.

* **[BORE](https://github.com/firelzrd/bore-scheduler) (Burst-Oriented Response Enhancer):** Para los usuarios que necesitan la máxima interactividad, nuestros kernels soportan el planificador BORE, un conjunto de parches que mejora EEVDF para ofrecer una experiencia más fluida durante cargas de trabajo intensivas.

Para más información sobre los kernels ofrecidos por CachyOS y el framework sched-ext, consulta la documentación de **[Kernel](/es/features/kernel)** y **[sched-ext](/es/configuration/sched-ext)**.

## Herramientas fáciles de usar y personalización

### [Detección automática de hardware](/es/features/chwd)

CachyOS incluye una herramienta personalizada de detección de hardware que identifica e instala automáticamente los controladores y paquetes necesarios para tu sistema. Esto elimina la necesidad de buscar controladores manualmente, ahorrándote tiempo y esfuerzo después de la instalación.

### Proceso de instalación personalizable

El instalador de CachyOS permite a los usuarios personalizar su sistema eligiendo el entorno de escritorio, paquetes, sistema de archivos, gestor de arranque, kernel y más para adaptarse a sus necesidades:

* [Entornos de escritorio](/es/installation/desktop_environments/)
* [Gestores de arranque](/es/installation/boot_managers/)
* [Variantes del kernel](/es/features/kernel#variantes)
* [Sistemas de archivos](/es/installation/filesystem)
* [Paquetes personalizados para incluir durante la instalación](https://github.com/CachyOS/cachyos-calamares/blob/cachyos-limine-qt6/src/modules/netinstall/netinstall.yaml)

### Aplicaciones personalizadas de CachyOS

CachyOS desarrolla y mantiene su propio conjunto de aplicaciones para simplificar la gestión del sistema y mejorar tu experiencia.

Lista de aplicaciones que CachyOS desarrolla y mantiene actualmente:

* **[CachyOS Hello](https://github.com/CachyOS/CachyOS-Welcome):** Una aplicación de bienvenida para controlar ajustes, aplicar correcciones e instalar paquetes.
* **[CachyOS Package Installer](https://github.com/CachyOS/packageinstaller):** Una interfaz gráfica de usuario (GUI) para la fácil instalación de aplicaciones.
* **[CachyOS Kernel Manager](https://github.com/CachyOS/kernel-manager):** Instala fácilmente kernels desde el repositorio, configura el tuyo propio y gestiona el framework `sched-ext`.
* **[cachyos-rate-mirrors](https://github.com/CachyOS/rate-mirrors):** Clasifica automáticamente los espejos de Arch y CachyOS para obtener velocidades de descarga óptimas con `pacman`.
* **[systemd-boot-manager](https://github.com/CachyOS/systemd-boot-manager):** Genera automáticamente nuevas entradas de arranque para `systemd-boot`, que pueden configurarse fácilmente a través de `/etc/sdboot-manage.conf`.

## Una comunidad amigable y activa

La mayor fortaleza de CachyOS es su comunidad en expansión. Los miembros de la comunidad se ayudan mutuamente compartiendo consejos, brindando apoyo y contribuyendo al éxito del proyecto. Tus comentarios nos ayudan a mejorar continuamente la experiencia de CachyOS.

Únete a nosotros y forma parte de la comunidad en el **[Discord de CachyOS](https://discord.gg/cachyos-862292009423470592)** y en el **[Foro de CachyOS](https://discuss.cachyos.org/)**.
