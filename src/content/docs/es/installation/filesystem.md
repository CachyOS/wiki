---
title: Sistemas de archivos
description: Descripción y recomendaciones para los sistemas de archivos disponibles. (ext4, f2fs, btrfs, xfs, zfs, bcachefs)
---

CachyOS ofrece 5 sistemas de archivos diferentes para permitir al usuario elegir el que mejor se adapte a sus necesidades. A continuación se explicarán las ventajas, desventajas y recomendaciones para cada sistema de archivos. Cada sistema de archivos viene con sus requisitos/utilidades preinstalados en CachyOS.

:::note
BTRFS es el sistema de archivos predeterminado y recomendado para CachyOS. Elígelo si no estás seguro.
:::

## XFS

XFS es un sistema de archivos con registro de transacciones (journaling) creado y desarrollado por Silicon Graphics, Inc. Fue creado en 1993, portado a Linux en 2001 y ahora es ampliamente compatible con la mayoría de las distribuciones de Linux.

### Ventajas

- Rápido, XFS fue diseñado originalmente pensando en la velocidad y la escalabilidad extrema.
- Fiable, XFS utiliza varias tecnologías para prevenir la corrupción de datos.
- Resistente a la fragmentación debido a su naturaleza basada en extensiones y su estrategia de asignación diferida.

### Desventajas

- No se puede reducir su tamaño.

### Utilidad de espacio de usuario

El paquete que contiene las herramientas de espacio de usuario para gestionar sistemas de archivos XFS es `xfsprogs`.

### Recomendación

XFS es el sistema de archivos recomendado para usuarios que no necesitan funciones avanzadas y simplemente quieren un sistema de archivos rápido y fiable.

## BTRFS

BTRFS es un moderno sistema de archivos con copia en escritura (copy-on-write, COW) creado en 2007 y declarado estable en el kernel de Linux en 2013. Es ampliamente compatible y es conocido principalmente por su avanzado conjunto de características.

### Ventajas

- Compresión transparente. BTRFS permite comprimir archivos de forma transparente para lograr un ahorro de espacio significativo sin intervención del usuario. CachyOS viene con la compresión ZSTD configurada en el nivel 3 por defecto.
- Funcionalidad de instantáneas (snapshots). BTRFS aprovecha su naturaleza COW para permitir la creación de instantáneas de subvolúmenes que ocupan muy poco espacio real.
- Funcionalidad de subvolúmenes que permite un mayor control sobre el sistema de archivos.
- Se puede ampliar o reducir.
- Desarrollo muy rápido.

### Desventajas

- A veces requiere desfragmentación o balanceo.
- Peor rendimiento en discos duros rotacionales debido a la fragmentación mencionada.

### Utilidad de espacio de usuario

El paquete de utilidades de espacio de usuario para Btrfs es `btrfs-progs`

### Estructura de Subvolúmenes

CachyOS proporciona una estructura de subvolúmenes por defecto para permitir una fácil funcionalidad de instantáneas.

- Subvol @ = /
- Subvol @home = /home
- Subvol @root = /root
- Subvol @srv = /srv
- Subvol @cache = /var/cache
- Subvol @tmp = /var/tmp
- Subvol @log = /var/log

### Recomendación

BTRFS se recomienda para usuarios que deseen la funcionalidad de instantáneas/copias de seguridad y la compresión transparente.

## EXT4

EXT4 (cuarto sistema de archivos extendido) es el sistema de archivos de Linux más utilizado. EXT4 se declaró estable en el kernel de Linux en 2008.

### Ventajas

- Muy común, lo que permite un fácil acceso a una gran cantidad de recursos.
- Fiable. EXT4 tiene un historial probado de ser muy fiable.
- Se puede ampliar o reducir.

### Desventajas

- Construido sobre una base de código antigua.
- Carece de muchas de las características avanzadas que ofrecen otros sistemas de archivos.

### Utilidades de espacio de usuario

El paquete para gestionar ext4 es `e2fsprogs`

### Recomendación

EXT4 se recomienda para usuarios que desean el sistema de archivos más simple y comúnmente utilizado.

## ZFS

ZFS es un sistema de archivos avanzado desarrollado originalmente por Sun Microsystems en 2005. ZFS tiene muchas características, pero está licenciado bajo la CDDL, lo que significa que no puede ser incluido dentro del kernel de Linux y requiere la instalación de un módulo por separado.

:::caution
No utilice un kernel de tiempo real junto con ZFS, no es compatible debido a problemas de licencia.
:::

### Ventajas

- Almacenamiento agrupado (zpool)
- Instantáneas usando COW
- Compresión
- Soporte para Raid-Z
- La caché ARC permite tiempos de lectura increíblemente rápidos en archivos de acceso frecuente.

### Desventajas

- Muy complicado de usar y entender debido a características como zpool y ARC.
- ARC requiere mucha memoria RAM para ser efectivo.
- No está incluido en el kernel de Linux, por lo que depende de un módulo de kernel de terceros (OpenZFS)
- Incompatible con la preemption de tiempo real (Real-time preemption)

### Herramientas requeridas

'ZFS-Module' CachyOS proporciona un módulo zfs precompilado para cada versión del kernel.
`zfs-utils` para las utilidades de espacio de usuario.

### Recomendación

ZFS solo debería ser utilizado por usuarios avanzados que quieran usar sus características avanzadas, como el almacenamiento agrupado o la caché ARC.

## F2FS

F2FS (Flash-Friendly File System) es un sistema de archivos flash creado y desarrollado originalmente por Samsung para el kernel de Linux. F2FS fue creado para adaptarse específicamente a la memoria flash NAND utilizada en el almacenamiento moderno.

### Ventajas

- Diseñado pensando en la compatibilidad con memorias flash.
- Compresión transparente utilizada para reducir las escrituras en disco (el ahorro de espacio no es utilizable actualmente por el usuario).
- Más rápido que otros sistemas de archivos como EXT4.
- Mejor nivelación del desgaste, lo que prolonga aún más la vida útil de la memoria flash NAND.

### Desventajas

- No se puede reducir su tamaño.
- El ahorro de espacio por compresión no puede ser utilizado actualmente por el usuario. Esto podría añadirse en el futuro.
- Comprobación del sistema de archivos (fsck) relativamente débil.
- Retroceder a una versión del kernel anterior a la que creó el sistema de archivos puede causar problemas.

### Utilidades de espacio de usuario

La principal utilidad para f2fs es `f2fs-tools`

### Recomendación

F2FS solo se recomienda para usuarios que quieran maximizar la vida útil de su memoria flash NAND.

## BcacheFS

Bcachefs es un nuevo y avanzado sistema de archivos para Linux, con un énfasis en la fiabilidad y robustez y el conjunto completo de características que se esperarían de un sistema de archivos moderno.

:::caution[ATENCIÓN]
Bcachefs todavía se considera experimental y puede tener problemas.
:::

### Ventajas

- Copia en escritura (CoW) - como BTRFS o ZFS
- Compresión
- Caché, Ubicación de Datos
- Replicación
- Escalable

### Desventajas

- Experimental
- La configuración puede ser complicada

## TL:DR

Usa el sistema de archivos predeterminado **BTRFS**, ya que se considera estable y tiene muchas características interesantes (instantáneas, compresión, etc.). Usa **XFS** o **EXT4** para un sistema de archivos simple
y rápido.
