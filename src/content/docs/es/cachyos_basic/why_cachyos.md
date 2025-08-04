---
title: ¿Por qué CachyOS?
description: Por qué CachyOS puede ser la mejor opción para ti
---

CachyOS ofrece una experiencia de Arch Linux pulida y completa con un instalador fácil de usar, escritorios preconfigurados y optimizaciones de rendimiento sin comprometer la experiencia del usuario ni la seguridad del sistema.

A continuación, se presentan algunas de las características clave que CachyOS proporciona para garantizar una experiencia de escritorio mejorada.

## Paquetes y repositorios optimizados

CachyOS ofrece una gran selección de paquetes optimizados para diversas configuraciones de hardware, incluyendo sistemas `x86-64-v3`, `x86-64-v4` y `Zen4+` para mejorar el rendimiento general.

Para más información, consulta [**Repositorios optimizados.**](/es/features/optimized_repos)

## Kernel personalizado ajustado para rendimiento y estabilidad

Además del conjunto de parches base del kernel de CachyOS que ajusta varios parámetros para mejorar la capacidad de respuesta del escritorio, CachyOS selecciona cuidadosamente conjuntos de parches que aún no han sido incorporados a la rama principal o que no están incluidos en la revisión estable del kernel.

Por lo tanto, estos parches se someten a pruebas internas antes de ser lanzados a los usuarios para garantizar que la estabilidad no se vea afectada. Para una lista completa de los parches que CachyOS proporciona, consulta [Kernel](/es/features/kernel).

## Soporte para planificadores de CPU personalizados

Por defecto, EEVDF está configurado para dividir el tiempo de CPU disponible de manera equitativa entre todas las tareas, y está orientado principalmente a cargas de trabajo que priorizan el rendimiento bruto. El kernel de CachyOS [**configura algunos parámetros de EEVDF**](https://github.com/CachyOS/linux/blob/6.15/cachy/kernel/sched/fair.c#L79-81) para priorizar la interactividad del escritorio.

Sin embargo, EEVDF por diseño no fue pensado para la interactividad del escritorio. Teniendo esto en cuenta, CachyOS distribuye kernels parcheados con el planificador
[BORE (Burst-Oriented Response Enhancer)](https://github.com/firelzrd/bore-scheduler), que mejora EEVDF para aumentar la interactividad bajo cargas de trabajo pesadas.

En la versión 6.12, el kernel de Linux introdujo la capacidad de conectar en caliente planificadores BPF y reemplazar EEVDF por uno diferente.

Para más información sobre los kernels que ofrece CachyOS y los planificadores sched-ext, consulta [Kernel](/es/features/kernel) y [sched-ext](/es/configuration/sched-ext).

## Detección de hardware

CachyOS incluye su propia herramienta de detección de hardware, que identifica e instala automáticamente los controladores y paquetes necesarios para cada sistema, simplificando el proceso posterior a la instalación para los usuarios.

## Proceso de instalación personalizable

El instalador de CachyOS permite a los usuarios personalizar su sistema eligiendo el entorno de escritorio, paquetes, sistema de archivos, gestor de arranque, kernel y más para adaptarlo a sus necesidades:
- [**Entornos de escritorio**](/es/installation/desktop_environments/)
- [**Gestores de arranque**](/es/installation/boot_managers/)
- [**Variantes de kernel**](/es/features/kernel#variants)
- [**Sistemas de archivos**](/es/installation/filesystem)
- [**Paquetes personalizados para incluir durante la instalación**](https://github.com/CachyOS/cachyos-calamares/blob/cachyos-limine-qt6/src/modules/netinstall/netinstall.yaml)

## Aplicaciones de CachyOS

Por defecto, CachyOS proporciona su propio conjunto de aplicaciones, como CachyOS Hello y el Instalador de Paquetes de CachyOS.

Lista de aplicaciones que CachyOS desarrolla y mantiene actualmente:

- [**CachyOS Kernel Manager**](https://github.com/CachyOS/kernel-manager): Instala fácilmente kernels desde el repositorio o configura tu propio kernel e incluye tus propios parches, e incluso gestiona el framework sched-ext a través de [**scx_loader**](<https://github.com/sched-ext/scx/tree/main/rust/scx_loader>).
- [**CachyOS Hello**](https://github.com/CachyOS/CachyOS-Welcome): Aplicación para controlar ajustes, aplicar correcciones, instalar paquetes y obtener más información sobre CachyOS.
- [**CachyOS Package Installer**](https://github.com/CachyOS/packageinstaller): Interfaz gráfica para una fácil instalación de aplicaciones.
- [**cachyos-rate-mirrors**](https://github.com/CachyOS/rate-mirrors): Clasifica automáticamente los mirrors de Arch y CachyOS para obtener velocidades de descarga óptimas con pacman.
- [**systemd-boot-manager**](https://github.com/CachyOS/systemd-boot-manager): Genera automáticamente nuevas entradas para systemd-boot y se puede configurar fácilmente en `/etc/sdboot-manage.conf`.

## Comunidad amigable y activa

La mayor fortaleza de CachyOS es su comunidad en expansión. Sin su apoyo, CachyOS no habría alcanzado el éxito que tiene hoy. Los miembros de la comunidad se ayudan mutuamente compartiendo consejos y trucos para mejorar la experiencia con Linux.

Únete a nosotros en el [**Discord de CachyOS**](https://discord.com/invite/cachyos-862292009423470592) y en el [**Foro de CachyOS**](https://discuss.cachyos.org/).
