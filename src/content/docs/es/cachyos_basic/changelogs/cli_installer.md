---
title: Instalador CLI
description: Registros de cambios del Instalador CLI
ai_translated: true
---
# 0.8.4

## Características ✨

- **Manejo de particiones mejorado:** Se han realizado refactorizaciones y mejoras significativas en la forma en que el instalador maneja las particiones, lo que ofrece mayor precisión y fiabilidad.
- **Generación de parámetros del kernel:** El instalador ahora genera automáticamente los parámetros del kernel según el esquema de particiones detectado.
- **Biblioteca `gucc` mejorada:** La biblioteca `gucc` se ha mejorado significativamente y ahora abarca capacidades de instalación y configuración de refind.

## Tareas de mantenimiento 🧹

- **Clang-Format y Clang-Tidy:** Se ha mejorado la consistencia y la calidad del código base mediante la aplicación de clang-format y clang-tidy.
- **Refactorización con String Views:** Varias áreas del código base ahora utilizan literales string_view para mejorar el rendimiento y la legibilidad.
- **Implementación de Doctest:** Se han reemplazado las aserciones de C por doctest para lograr pruebas más robustas e informativas.
- **Pruebas refactorizadas:** Los conjuntos de pruebas se han refactorizado para mayor claridad y facilidad de mantenimiento.
- **Manejo de Refind en `gucc`:** El código relacionado con refind se ha refactorizado y movido a la biblioteca `gucc` para una mejor organización y facilidad de mantenimiento.

## Corrección de errores 🐛

- **Detección de subvolúmenes Btrfs:** Se han resuelto los problemas al detectar subvolúmenes btrfs existentes.
- **Precisión en la información de particiones:** Se han realizado mejoras para garantizar la recopilación y visualización precisas de la información de las particiones.
- **Punto de montaje raíz para Refind:** Se ha corregido un error que afectaba al punto de montaje raíz utilizado por refind.
- **Detección de UUID:** Se ha mejorado el proceso de detección de UUID de particiones durante la inicialización.
- **Correcciones de compilación con Meson:** Se han solucionado los problemas encontrados durante el proceso de compilación con meson.
- **Anexado de subvolúmenes Btrfs:** Se ha corregido un error relacionado con la adición de subvolúmenes btrfs en entornos de desarrollo.
- **Rootfs en configuraciones predefinidas:** Se ha resuelto un problema con el rootfs de los esquemas de particiones derivados de configuraciones predefinidas.
- **Montaje de lectura-escritura en Refind:** Se ha garantizado que refind monte las particiones necesarias con permisos de lectura y escritura.

# 0.8.3

## Tareas de mantenimiento 🧹

- Se actualizó la dependencia de CPR a una versión más reciente para mejorar la funcionalidad.
- Se indicó explícitamente a CTRE (biblioteca Compile Time Regular Expressions) que utilice el estándar C++23 para mayor consistencia y posibles mejoras de rendimiento.
- Se incrementó el tiempo de espera de comprobación de conexión en la sección de utilidades para adaptarse a posibles retrasos de red o respuestas lentas.

# 0.8.2

## Correcciones 🐛

- Se resolvió un problema por el cual "gucc" no manejaba correctamente los puntos de montaje de subvolúmenes btrfs.
- Se mejoró "gucc" para manejar diferentes estados de montaje de subvolúmenes btrfs.

## Tareas de mantenimiento 🧹

- Se corrigió un error tipográfico en el archivo README y se actualizó la información de versión.

# 0.8.1

## Correcciones 🐛

- Se resolvió un problema por el cual los repositorios ISA se habilitaban incorrectamente en Oracle VM.
- Se corrigieron inconsistencias de estilo en los comandos para mejorar la experiencia de usuario.

## Tareas de mantenimiento 🧹

- Se eliminó la lógica innecesaria de ucode relacionada con refind, simplificando el código base.

# 0.8.0

## Características ✨

- Se añadió un analizador para perfiles de paquetes de red.
- Se introdujo la capacidad de obtener paquetes de entorno desde un archivo TOML analizado por gucc.
- Se implementó una función auxiliar en gucc para descargar archivos desde URLs 📥.
- Se añadió soporte para obtener perfiles de red desde una URL con un mecanismo de respaldo dentro de gucc.
- Se integró la instalación de perfiles de red con la distribución binaria.
- Se movió el montaje de particiones especificadas y la lógica de detección a gucc.
- Se introdujo `utils::exec_checked` para una ejecución más segura de comandos externos.

## Mejoras ✅

- Se mejoró la cobertura de pruebas para la funcionalidad crypttab en gucc 🧪.
- Se mejoró el registro en gucc configurando el registrador adecuadamente.
- **Se actualizó la versión de C++ a C++23** ⬆️.
- Se refactorizó el código base para utilizar características de C++23 como `std::ranges` y `contains` para mejorar la legibilidad y eficiencia.
- Se refactorizaron varios componentes para utilizar `utils::exec_checked`.

## Correcciones 🐛

- Se resolvió un problema con los tipos de biblioteca codificados de forma rígida en gucc.
- Se solucionó la falta de implementación del registrador y del archivo de cabecera en gucc.
- Se habilitó la biblioteca CPR para compilaciones en entornos que no son de desarrollo.
- Se corrigió el proceso de compilación estática.
- Se solucionaron problemas introducidos en el commit [`a70e641e364`](https://github.com/CachyOS/New-Cli-Installer/commit/a70e641e364).
- Se corrigieron errores de compilación en el componente TUI.
- Se corrigió un problema de dependencias donde la dependencia de FTXUI sobre range-v3 no era pública.

## Tareas de mantenimiento 🧹

- Se actualizaron las comprobaciones de CI, los procesos de compilación y se corrigieron problemas relacionados.
- Se eliminó la instalación revertida de perfiles de red junto con la distribución binaria.
- Se refactorizó y limpió el código en varios componentes: TUI, utils, chwd_profiles, user y pruebas.
- Se eliminó la biblioteca no utilizada range-v3 de las dependencias del instalador.
- Se actualizó el archivo README.
