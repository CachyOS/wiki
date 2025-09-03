---
title: Kernel de CachyOS
description: Características y cambios en el kernel de CachyOS
tableOfContents:
  minHeadingLevel: 1
  maxHeadingLevel: 4
---

El kernel de CachyOS es un kernel personalizado que utiliza mejoras, configuraciones y parches del upstream.

## Características

### Optimizaciones de rendimiento

- **Compilación avanzada**: PKGBUILD altamente personalizable con soporte para los compiladores GCC y Clang.
- **Optimización en tiempo de enlace (LTO)**: Thin LTO activado por defecto para un mejor rendimiento.
- **Optimización guiada por perfiles (PGO)**: Perfilado con AutoFDO + Propeller para una generación de código óptima ([Más información](https://cachyos.org/blog/2411-kernel-autofdo/)).
- **Integridad del flujo de control del kernel (kCFI)**: Disponible al usar LLVM para una seguridad mejorada.
- **Opciones de frecuencia del temporizador**: Configurable entre 300Hz, 500Hz, 600Hz, 750Hz y 1000Hz (por defecto: 1000Hz).
- **Optimizaciones de arquitectura**: Soporte para compilaciones específicas para x86-64-v3, x86-64-v4 y AMD Zen4.
- **Optimizaciones del compilador**: Opciones avanzadas de GCC incluyendo `-fivopts` y `-fmodulo-sched`.

### Mejoras de la CPU

- **Múltiples planificadores**: Planificadores BORE, EEVDF y BMQ para la optimización de diferentes cargas de trabajo.
- **Mejoras en AMD P-State**: Soporte para Preferred Core y las últimas mejoras de amd-pstate de linux-next.
- **Soporte de tiempo real**: Compilaciones del kernel RT disponibles con integración del planificador BORE.
- **CachyOS Sauce**: Configuración personalizada `CONFIG_CACHY` con ajustes del planificador y del sistema.
- **Optimizaciones de baja latencia**: Parches para mejorar la capacidad de respuesta y reducir el jitter.

### Sistema de archivos y memoria

- **Soporte ZFS**: Soporte integrado para el sistema de archivos ZFS con módulos precompilados.
- **Integración de NVIDIA**:
  - Módulos del controlador propietario de NVIDIA con parches.
  - Soporte para el controlador de código abierto de NVIDIA.
  - Módulos listos para usar en el repositorio.
- **Mejoras del planificador de E/S**:
  - Rendimiento mejorado de BFQ y mq-deadline.
  - Soporte para el planificador de E/S alternativo [ADIOS](https://github.com/firelzrd/adios).
- **Gestión de memoria**:
  - Parche [le9uo](https://github.com/firelzrd/le9uo) para prevenir el page thrashing bajo presión de memoria.
  - Ajustes de gestión de memoria de Zen-kernel (compactación, optimización de watermark).

### Características adicionales

#### Soporte de hardware
- **Hardware para juegos**: Parches para Steam Deck (Audio, HW Quirks, HID) y soporte para ROG Ally.
- **Hardware de Apple**: Soporte para MacBook T2 incluido por defecto.
- **Hardware de ASUS**: Parches extendidos de compatibilidad para hardware de ASUS.
- **Gráficos**: Soporte HDR activado, anulación de min_powercap de AMDGPU (`amdgpu_ignore_min_pcap`).

#### Mejoras del sistema
- **Multimedia**: Módulos v4l2loopback incluidos por defecto.
- **Virtualización**: Soporte para ACS Override para passthrough de VFIO/GPU.
- **Integración con upstream**: Parches seleccionados de Clear Linux y linux-next.

#### Miscelánea

El kernel de CachyOS también tiene otras características notables que, aunque sutiles, mejoran la experiencia del usuario:

- Incluye una variante de depuración del kernel que proporciona un binario de kernel no depurado (unstripped) para fines de depuración. Este paquete es necesario para perfilar el kernel con AutoFDO.
- [Binder](https://developer.android.com/reference/android/os/Binder), el módulo necesario para [Waydroid](https://waydro.id/), está habilitado por defecto en la configuración del kernel
y ya está [configurado](https://github.com/CachyOS/linux-cachyos/blob/master/linux-cachyos/config#L10784).

## Variantes

CachyOS ofrece una amplia gama de opciones de kernel. Todos los kernels que proporcionamos se entregan con el [conjunto de parches base de CachyOS](https://github.com/CachyOS/kernel-patches).
Para cada uno de los kernels, existe una [variante `-lto` correspondiente](#convención-de-nomenclatura-de-paquetes) que
se compila con [clang](https://clang.llvm.org/) en lugar de [GCC](https://gcc.gnu.org/).

- **linux-cachyos**
  - El kernel por defecto. Este es el kernel recomendado si no estás seguro de cuál usar.
  - Frecuencia de 1000Hz para una mejor capacidad de respuesta.
  - Utiliza el planificador [BORE](https://github.com/firelzrd/bore-scheduler).
  - Compilado con Clang y ThinLTO.
  - Perfilado con nuestro propio perfil [AutoFDO](https://cachyos.org/blog/2411-kernel-autofdo/) para un rendimiento mejorado. [Script](https://github.com/CachyOS/cachyos-benchmarker/blob/master/kernel-autofdo.sh) utilizado para perfilar el kernel.
- **linux-cachyos-bore**
  - Utiliza el planificador [BORE](https://github.com/firelzrd/bore-scheduler).
- **linux-cachyos-bmq**
  - Utiliza el planificador BMQ de [Project C](https://gitlab.com/alfredchen/projectc/) por Alfred Chen.
    - `No soporta sched-ext.`
- **linux-cachyos-deckify**
  - El kernel por defecto para dispositivos portátiles. **No se recomienda** y **no se da soporte** al uso de cualquier otro kernel en dispositivos portátiles.
  - Utiliza el planificador [BORE](https://github.com/firelzrd/bore-scheduler).
  - Parches específicos para portátiles además del conjunto de parches base para mejorar la compatibilidad y la experiencia general en estos dispositivos.
- **linux-cachyos-eevdf**
  - Modifica el planificador de kernel por defecto para una mejor capacidad de respuesta.
- **linux-cachyos-lts**
  - Basado en el último kernel de Soporte a Largo Plazo (LTS).
  - Utiliza el planificador [BORE](https://github.com/firelzrd/bore-scheduler).
  - Mínimamente parcheado en comparación con otros kernels para garantizar la máxima estabilidad.
- **linux-cachyos-hardened**
  - Utiliza el planificador [BORE](https://github.com/firelzrd/bore-scheduler).
  - Incluye el conjunto de parches de [linux-hardened](https://github.com/anthraxx/linux-hardened).
  - Configuración del kernel basada en la [configuración de linux-hardened](https://gitlab.archlinux.org/archlinux/packaging/packages/linux-hardened/-/blob/main/config).
    - Contiene un endurecimiento muy agresivo que afecta significativamente el rendimiento y la experiencia del usuario.
    - `No soporta sched-ext.`
- **linux-cachyos-rc**
  - Basado en el último kernel mainline del [árbol de Linus](https://github.com/torvalds/linux/).
  - Utiliza el planificador [BORE](https://github.com/firelzrd/bore-scheduler).
  - Kernel principal para introducir nuevas características en nuestro conjunto de parches.
- **linux-cachyos-server**
  - Optimizado para cargas de trabajo de servidor en comparación con el uso de escritorio.
    - Frecuencia de 300Hz.
    - Sin preemption (apropiación).
    - EEVDF de serie.
- **linux-cachyos-rt-bore**
  - Preemption de tiempo real.
  - Utiliza el planificador [BORE](https://github.com/firelzrd/bore-scheduler).

:::note
A menos que se especifique lo contrario, es seguro asumir que todas las demás variantes del kernel
tienen la misma configuración que el kernel por defecto.
:::

Por favor, abre un issue en el [GitHub de linux-cachyos](https://github.com/CachyOS/linux-cachyos) para sugerencias y mejoras que puedan añadirse al kernel por defecto.

### Convención de nomenclatura de paquetes

```sh
linux-cachyos # Paquete base del kernel por defecto. Compilado con Clang y ThinLTO
linux-cachyos-hardened # Paquete base del kernel hardened. Compilado con GCC
linux-cachyos-hardened-lto # Contraparte compilada con clang de linux-cachyos-hardened
linux-cachyos-hardened-{,lto-}headers
linux-cachyos-hardened-{,lto-}nvidia
linux-cachyos-hardened-{,lto-}nvidia-open
linux-cachyos-hardened-{,lto-}zfs
linux-cachyos-hardened-{,lto-}dbg
```

## Módulos de kernel precompilados

Para dar cabida a una base de usuarios más amplia, CachyOS distribuye algunos módulos de kernel conocidos y muy utilizados junto con el kernel. Esto significa que los usuarios ya no
tendrán que recompilar esos módulos después de cada actualización del kernel o en cada nueva instalación de kernel, sino que solo tendrán que instalarlos desde el repositorio, ya que
están precompilados. Esto efectivamente deja obsoletos los paquetes `-dkms` que un usuario pudiera tener y que proporcionen el mismo módulo que la versión precompilada.

### ZFS

[ZFS](https://openzfs.org/wiki/Main_Page) es uno de los muchos sistemas de archivos compatibles con CachyOS. Debido a que está licenciado bajo
la [CDDL](https://opensource.org/license/cddl-1-0), es incompatible con la licencia del kernel de Linux y, por lo tanto, no puede ser integrado en el árbol principal. El módulo distribuido incluye
las últimas características y correcciones de upstream para garantizar la compatibilidad con el kernel más reciente.

### NVIDIA

CachyOS distribuye versiones precompiladas de los módulos de kernel tanto de código cerrado como de [código abierto](https://github.com/NVIDIA/open-gpu-kernel-modules/). Debido a que el desarrollo
del módulo de kernel de NVIDIA se realiza fuera del árbol principal y, por lo tanto, no sigue el ritmo de lanzamientos del kernel, la configuración de serie a veces puede ser incompatible con el último
kernel. Como solución, CachyOS parchea los módulos con parches creados por la comunidad o compartidos directamente por NVIDIA.

## Preguntas frecuentes

### ¿Por qué no se utiliza AutoFDO en todas las demás variantes del kernel?

Porque su compilación es costosa, ya que básicamente requiere compilar el kernel dos veces, lo que resulta en más tiempo y recursos dedicados a la compilación. El proceso de compilar un kernel con AutoFDO implica los siguientes pasos:

1) Compilar el kernel con AutoFDO y las capacidades de depuración habilitadas.
2) Crear un perfil, lo que significa ejecutar cargas de trabajo para recopilar datos de perfilado para las posibles optimizaciones.
3) Recompilar el kernel con el perfil AutoFDO.

Por lo tanto, por ahora solo está presente en la variante [linux-cachyos](/es/features/kernel#variantes).

Para más información sobre AutoFDO, haz clic [aquí.](https://cachyos.org/blog/2411-kernel-autofdo/)

### ¿El kernel de tiempo real mejora el rendimiento en los juegos?

No, no lo hace. El kernel de tiempo real hace que mucho más código sea apropiable (preemptible) en comparación con un kernel normal totalmente apropiable. Esto significa que muchas más tareas (incluidos los
procesos de los juegos) son interrumpidas con frecuencia y cederán forzosamente los recursos del sistema, lo que conduce a un peor rendimiento.
