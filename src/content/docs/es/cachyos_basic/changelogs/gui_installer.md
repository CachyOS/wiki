---
title: Instalador gráfico
description: Registro de cambios de Calamares y la ISO Live con interfaz gráfica
ai_translated: true
sidebar:
  order: 1
---
26.06
----

**Características:**

* **Paquetes:**
  * Python ahora utiliza PGO extendido para mejorar el rendimiento
  * Añadido un [parche de GCC](https://www.phoronix.com/news/GCC-x86-Generic-Mispredict) para el ajuste genérico de predicción errónea de saltos en x86, mejorando cómo GCC calcula los costes de predicción errónea de saltos en CPUs Intel y AMD modernas
  * Corregida una regresión detectada en Phoronix Benchmarks al usar OpenBLAS en CPUs con alto número de núcleos
  * Renombrado `proton-cachyos` a `proton-cachyos-native`
* **pacman:** Añadido [aislamiento de red para scriptlets y hooks](https://github.com/CachyOS/pacman/commit/4056cd687f6379e61e7decb9b66e9b57cb3949a9)
* **Instalador:**
  * Añadida la opción de escritorio CachyOS Hyprland Noctalia y su vídeo de vista previa
  * Eliminado `paru` de la instalación; se recomienda a los usuarios utilizar [Shelly](https://wiki.cachyos.org/configuration/post_install_setup/#updating-the-system), ya sea mediante su interfaz gráfica o CLI, como alternativa
  * Añadido SDDM como gestor de pantalla para MangoWM
  * Reemplazado GNOME System Monitor por Resources
  * Añadido `realtime-privileges` al grupo de paquetes de audio
  * Mejorada la detección de la distribución y variante del teclado en la sesión live
* **CachyOS-Welcome:**
  * Añadido soporte para DNS sobre QUIC (DoQ) a través de `blocky`
  * Añadida una página dedicada de solución de problemas
  * Añadido soporte para el terminal Ptyxis
  * Añadidas traducciones al azerbaiyano y al griego
  * Añadidas las páginas de léame y participación en francés
  * Actualizadas las traducciones al italiano, alemán, francés, japonés y búlgaro
* **chwd:**
  * Añadida traducción al turco
  * Eliminado `cachyos-handheld` de las listas de paquetes para consolas portátiles
  * Resuelve conflictos de controladores en sistemas multi-GPU que requieren ramas de controladores incompatibles (p. ej., generaciones mixtas de NVIDIA), instalando el mejor controlador común o recurriendo a la GPU principal
  * Añadido el controlador Vulkan de 32 bits para máquinas virtuales
* **cachyos-settings:** Aplicados tiempos de espera de 15 segundos al inicio y 10 segundos al apagado para servicios de usuario, evitando retrasos de 90 segundos al apagar

**Correcciones:**

* **Instalador:**
  * Corregido el orden de las distribuciones de teclado y el manejo de la configuración de `locale1`
  * Corregida la copia de la configuración correcta de pacman al sistema instalado
  * Eliminados los directorios residuales de `/etc/calamares` tras la instalación
  * Movida la limpieza de Calamares después de todos los scripts de instalación
  * Eliminado el paso redundante de Limine posterior a la instalación
* **CachyOS-Welcome:**
  * Evitado un cierre inesperado al seleccionar «Install Apps» sin tener `cachyos-pi` instalado; ahora el botón se oculta cuando no está disponible
  * Corregido un cierre inesperado cuando el archivo de configuración guardado no podía leerse o analizarse; ahora la configuración se restablece a los valores predeterminados en caso de fallo
  * Corregida la detección de ajustes (incluyendo `graphical-session.target.wants`) y la desactivación global de ajustes de servicios de usuario mediante polkit
* **chwd:**
  * Corregidos los IDs de proveedor de máquinas virtuales
  * Eliminada la activación innecesaria del servicio `fprintd`
  * Corregida la comprobación de seguridad al eliminar Mesa

26.04
----

**Características:**

* **Instalador:**
  * Shelly ha reemplazado a Octopi como gestor de paquetes con interfaz gráfica
  * Ahora se crea una instantánea limpia inmediatamente después de la instalación y se conserva de forma permanente, proporcionando un punto de restauración base
  * `os-prober` de GRUB ahora está habilitado por defecto
  * Añadido MangoWM como opción de escritorio con dotfiles
  * Eliminado el escritorio UKUI
  * Las GPUs AMD ahora usan un tema de Plymouth diferente, ya que el controlador amdgpu no puede renderizar el tema anterior de forma fiable en portátiles con un monitor secundario conectado
  * Limpiada y modernizada la selección de paquetes de GNOME
  * Añadida opción para instalar `MangoWM` con la shell `DMS`
* **CachyOS-Welcome:**
  * Añadido soporte para DNS sobre HTTPS (DoH) a través de `blocky`
  * Añadido soporte para servidores DNS personalizados e indicador/restablecimiento automático de DHCP
  * Los servidores DNS ahora muestran metadatos (región, página principal, filtrado) y permiten pruebas individuales de latencia
  * Añadido el interruptor de gestión de VRAM `dmemcg-booster` (además instala `plasma-foreground-booster` en KDE)
  * Añadido soporte completo de navegación por teclado para accesibilidad
  * Reemplazados los iconos sociales en PNG por SVGs nítidos compatibles con HiDPI
  * Añadido `wezterm` al asistente de terminal
* **chwd:**
  * Añadida detección nativa de dispositivos USB (mediante libusb/sysfs) y detección de tipo de chasis
  * Añadido soporte para integración de huella dactilar (`fprint`) con sudo
  * Añadida detección de familia/modelo de CPU para soportar `intel-lpmd`
  * **Consolas portátiles:** Añadidos patrones exactos para Xbox ROG Ally
  * **Red:** Añadido perfil de Wi-Fi Marvell AVASTAR 88W8897 (Surface Pro 4)
  * Divididos los perfiles de NVIDIA para portátiles y entornos de escritorio
  * Divididos y actualizados los perfiles para máquinas virtuales
* **cachyos-settings:** Cambiado el planificador de E/S predeterminado para NVMe de `none` a `kyber`

**Correcciones:**

* **Instalador:**
  * El método de particionado ahora se registra en el log de depuración
  * Los paquetes antiguos de microcódigo ahora se eliminan al reutilizar una partición de arranque existente
* **CachyOS-Welcome:**
  * Corregidas las comprobaciones de conectividad que devolvían verdadero incorrectamente cuando el ping fallaba
  * Asegurada la visibilidad de los iconos de enlaces externos en temas oscuros
  * Evitado que se inicien múltiples instancias de la aplicación de bienvenida simultáneamente
  * Añadido `StartupWMClass` para mejorar la asociación de ventanas `.desktop`
* **chwd:**
  * Eliminado el hook `kms` de `mkinitcpio.conf` en escritorios no portátiles para corregir conflictos con el controlador de NVIDIA
  * Hecha más precisa la búsqueda de kernels instalados en los perfiles de NVIDIA
  * Eliminada la sesión Xorg forzada de los perfiles NVIDIA 470xx (corrige compatibilidad con `plasma-login-manager`)
  * Eliminado el obsoleto `WaylandEnable=false` para GDM en los perfiles de máquinas virtuales
  * Corregidos falsos positivos en la detección de consolas portátiles (p. ej., ciertos portátiles MSI confundidos con el MSI Claw)
* **cachyos-settings:**
  * Eliminada la gestión de energía `S01x` debido a problemas con el controlador NVIDIA 595
  * Deshabilitado `AggressiveVblank` debido a problemas relacionados con VR con el controlador de NVIDIA

26.03
----

**Características:**

* **Instalador:**
  * Añadido soporte para mostrar vídeos GIF/WebP en la selección de escritorio para presentar los entornos. Esto está habilitado para Plasma, GNOME, Niri y COSMIC
  * Añadido soporte para JPEG XL en la selección de escritorio para reducir el tamaño de las imágenes
  * Cachy-Update ahora está habilitado por defecto para las instalaciones de GNOME y KDE
  * Mejorada la lógica de instalación de microcódigo: ahora detectará el hardware e instalará el microcódigo adecuado en lugar de instalar ambos y luego eliminar el innecesario
  * Mejorado el mensaje de error cuando la partición EFI es demasiado pequeña
  * Ordenada la lista de entornos de escritorio desde configuraciones fáciles y accesibles hasta otras más avanzadas como gestores de ventanas (WMs)
* **CachyOS-Welcome:**
  * Añadido un botón para instalar y habilitar fácilmente «Winboat» para una máquina virtual Windows Docker sencilla
  * Añadido soporte para el servidor DNS FFMUC en la selección de DNS
  * Añadida traducción al ucraniano
* **chwd:** Reducido enormemente el tamaño del initramfs para configuraciones con dGPU NVIDIA
* **linux-cachyos:** En lugar de generar un `0001-cachyos-base-all.patch`, ahora se genera una release en un repositorio de Linux para cada versión de nuestro kernel parcheado
* **cachyos-rate-mirrors:** Mejorada enormemente la experiencia para usuarios en China y Rusia con una comprobación adecuada antes de clasificar los espejos
* **cachyos-settings:** Añadido soporte para configurar automáticamente el dominio regulador inalámbrico según la zona horaria
* **Sitio web:** El diseño del sitio web ha sido renovado y mejorado para seguir estándares más modernos
* **GitHub:** Añadidas plantillas de incidencias a los repositorios importantes de GitHub para mejorar la calidad de los informes de errores y orientar al usuario
* **Espejos:** Nuevos espejos en Rusia (jura12, cachy-arch.ru), Suecia (Zyner) y Canadá (All Things Linux)

**Correcciones:**

* **Instalador:**
  * Eliminado el soporte para bcachefs en la selección de sistemas de archivos debido al requisito de bcachefs-dkms
  * Corregido el cifrado cuando se usa LUKS2 en dispositivos específicos
  * Corregida la activación del gestor de pantalla «ly»
* **cachyos-settings:** `cachyos-bugreport.sh` ahora censura la IP, el nombre de usuario, el nombre de host y la dirección MAC
* **chwd:**
  * Perfiles genéricos para consolas portátiles y soporte mejorado para GPUs de portátiles de mano
  * fwupd ahora está habilitado para las consolas portátiles Lenovo


**Registro de cambios para la Edición Handheld:**

* **gamescope-session:** Reemplazado gamescope-session-plus por gamescope-session-cachyos, una bifurcación de gamescope-session de Valve
  * Habilita actualizaciones de firmware para dispositivos Steam Deck y Lenovo Legion Go
* **plasma-login-manager:** Reemplazado SDDM por plasma-login-manager como gestor de inicio de sesión
* **gestores de arranque:** Limine ahora está seleccionado por defecto con instantáneas automáticas. systemd-boot seguirá pudiendo seleccionarse
* **Instalador:** Fusionado Calamares de la edición Handheld con Calamares de la edición de escritorio
* **ISO:** La ISO ahora utiliza Wayland en lugar de X11

26.01
----

**Características:**

* **Instalador:**
  * Movida la selección del gestor de arranque a Calamares; la gestión ahora está consolidada en un único paquete.
  * La detección de arquitectura ahora se realiza **antes** de la instalación del sistema base para reducir el tamaño de descarga.
  * GRUB ahora usa LUKS2 para el cifrado.
  * Se pasa --needed a pacman para evitar instalar paquetes dos veces.
  * Uso de compresión de un solo nivel en NVMe para Btrfs.
  * Eliminadas las dependencias de xorg en entornos de escritorio Wayland.
* **ISO:**
  * Cambio a `plasma-login-manager` para el entorno de la ISO.
  * La ISO ahora contiene tanto el kernel Stable como el LTS. El kernel Stable está seleccionado por defecto.
  * Cambiada la sesión de la ISO de X11 a Wayland.
* **Netinstall:**
  * Las instalaciones de Plasma ahora usan `plasma-login-manager` en lugar de SDDM.
  * Niri ahora usa `noctalia-shell` y dotfiles actualizados.
  * Limpiado el proceso de instalación de GNOME.
* **Diapositivas:** Corregidas erratas en las diapositivas de Calamares y añadida una nueva diapositiva que muestra la Wiki.
* **Espejos:** La página de estado de los espejos (<https://packages.cachyos.org/mirrors>) ahora muestra el estado de sincronización de los espejos de CachyOS.
* **cachyos-settings:** Habilitado `EnableAggressiveVblank` para el módulo de NVIDIA. Esto reduce el tiempo empleado en la mitad superior de interrupción para interrupciones de pantalla de baja latencia.
* **chwd:**
  * Instala `nouveau-fw` para habilitar el soporte VA-API en Nouveau para tarjetas NVIDIA de la familia Kepler.
  * Añadido soporte de AI-SDK para varias GPUs AMD nuevas.
  * Reemplazado HHD por `steamos-manager` e `inputplumber`.
* **Proton-CachyOS:**
  * Añadido soporte para FSR4 MLFG (Machine Learning Frame Generation); habilitado automáticamente al usar `PROTON_FSR4_[RDNA3_]UPGRADE`
  * Añadido soporte para el módulo `d7vk`. Puede habilitarse mediante `PROTON_DXVK_DDRAW=1`
  * Importados parches de retroalimentación háptica para DualSense
  * Añadido `WINE_BLOCK_HOSTS` para evitar que Wine se conecte a dominios específicos
  * Habilitado automáticamente `ENABLE_HDR_WSI=1` al usar `winewayland` en dGPUs NVIDIA
  * Corregidos problemas de distribución de teclado al usar `winewayland.drv`
  * Eliminado un parche antiguo que causaba degradación en el 1% low de FPS
  * Parcheado `protonfixes` para manejar mejor la selección de preajustes DLSS y la redirección de `libxess_dx11.dll`
  * proton-cachyos-slr ahora se usa por defecto en el paquete «gaming-meta». La versión nativa seguirá recibiendo soporte.


**Correcciones:**

* **Limine:** Aumentado el tamaño de la partición de arranque a 4192MB para satisfacer los altos requisitos de `limine-snapper-sync`.
* **Instalador:** 
  * El instalador ahora bloquea/impide continuar si la partición EFI es demasiado pequeña al usar las opciones «instalar junto a» o «reemplazar partición».
  * Corregido un problema en el que al seleccionar un escritorio, avanzar un paso y luego retroceder para seleccionar otro escritorio, ambos quedaban seleccionados.
* **chwd:** Eliminada la variable de entorno que forzaba `libva-nvidia-driver`, ya que causaba problemas en sistemas con doble GPU.
* **cachyos-hello**: Corregido un problema donde cachy-update aparecía como deshabilitado cuando estaba habilitado.
* **Mando**: Corregida la entrada de varios mandos al actualizar las reglas de entrada a la última versión.
* **Framework 16 (Zen5)**: Corregido un problema que congelaba la sesión al escribir en calamares

25.11
----

**Características:**

* **ISO/Instalador:** Añadidos Orca y espeak-ng para mejorar la accesibilidad
* **initcpiocfg:** Habilitado el hook systemd en configuraciones compatibles
* **Netinstall:** Eliminados los dotfiles de Hyprland
* **pacstrap:** Instala `bcachefs-dkms` si se selecciona `bcachefs` como sistema de archivos
* **Calamares:** Añadido soporte para plasma-login-manager y cosmic-greeter
* **Cosmic:** Cambio de SDDM a cosmic-greeter
* **Fuentes:** Mejoradas las fuentes para usuarios asiáticos
* **chwd:**
  * Instala `intel-media-sdk` y `vpl-gpu-rt` en GPUs compatibles
  * Habilitado Nouveau NvBoost para GPUs Fermi
  * Eliminado el soporte para el controlador heredado NVIDIA 390xx
  * Añadido soporte para Xbox ROG Ally/X
* **cachyos-hello:**
  * Eliminado el instalador de paquetes interno; en su lugar abre el instalador de paquetes de CachyOS
  * Añadida interfaz CLI para la funcionalidad de la GUI
  * Varias correcciones en la comprobación de versión de la ISO
* **cachyos-settings:** zram-generator: Eliminada la compresión para páginas incompresibles
* **Proton-CachyOS:**
  * Añadido `dxvk-gplasync` como DXVK alternativo. Puede habilitarse mediante `PROTON_DXVK_GPLASYNC=1`
  * Añadido `DISABLE_LAYER_MESA_ANTI_LAG` al usar `PROTON_FSR4_UPGRADE`
  * Incorporadas múltiples **correcciones de Wayland** (desplazamiento en pantalla completa, teclas muertas, comportamiento de DPI, ajustes de salida de vídeo) y mejoras en `winewayland.drv`
  * Introducido y ajustado el comportamiento de la **caché de shaders por juego** y cachés de shaders más grandes (especialmente para NVIDIA)
  * Añadidas actualizaciones de escalado FSR3 y XeSS

**Correcciones:**

* **Limine:**
  * Corregida la instalación de Limine sin registro de entrada en UEFIs defectuosas
  * Usa la variante systemd del hook `btrfs-overlayfs`
* **Calamares:** Eliminada `attr2` como opción en los ajustes de montaje XFS
* **chwd:** Deshabilitada la interfaz Ethernet USB del chip T2

25.08
----

**Características:**

* **Servicios:** Añadido **packages.cachyos.org**, un buscador de paquetes equivalente al sitio web de Arch Linux, con opción para excluir paquetes de CachyOS.
* **Kernel:** El instalador ahora instala adicionalmente **linux-cachyos-lts** como kernel secundario/de respaldo tras la instalación. Seguimos recomendando usar el kernel Stable.
* **ISO:** Cambiado el kernel de la ISO live de Stable a LTS debido a problemas continuos con el kernel Stable, mejorando la fiabilidad del arranque.
* **Escritorio:** Añadido **Niri** como opción de escritorio, incluyendo algunos dotfiles preconfigurados.
* **NVIDIA:** Habilitada la suspensión **S0ix** en hardware compatible para un modo de espera moderno de bajo consumo.
* **GRUB:** Las instantáneas arrancables ahora se habilitan y configuran automáticamente cuando el sistema de archivos raíz utiliza **Btrfs**.
* **Ajustes:** Integrado **Cachy-Update** en la página Tweaks de la aplicación de bienvenida. Cachy-Update añade un temporizador y un indicador en la bandeja del sistema para notificar actualizaciones y permitir actualizar con un clic.
* **Proton-CachyOS:**
    - Añadido descargador para DLLs de DLSS (versión **310.3.0**), similar al descargador de FSR4. Usa la variable de entorno `PROTON_DLSS_UPGRADE=1` para habilitarlo.
    - Añadida la variable de entorno `PROTON_DLSS_INDICATOR=1` para activar el HUD de DLSS.
    - Añadido descargador para DLLs de XeSS (versión **2.1.0**), similar al descargador de DLSS. Usa la variable de entorno `PROTON_XESS_UPGRADE=1` para habilitarlo.
    - Añadido `PROTON_FSR4_RDNA3_UPGRADE` para GPUs RDNA3. Hace lo mismo que `PROTON_FSR4_UPGRADE` pero también establece otras variables necesarias.
    - Añadidas implementaciones más completas de bibliotecas de Nvidia ausentes en Proton. Debería ayudar a habilitar opciones como PhysX en juegos donde estaban desactivadas. También puedes habilitarlas individualmente usando `PROTON_NVIDIA_NVCUDA`, `PROTON_NVIDIA_NVENC`, `PROTON_NVIDIA_NVML` y `PROTON_NVIDIA_NVOPTIX`.
    - Añadida caché de shaders por juego, habilitada por defecto, se puede deshabilitar con `PROTON_LOCAL_SHADER_CACHE=0`. Los shaders se almacenarán en caché bajo `<steamlibrary>/shadercache/<appid>` para cada juego, de forma similar a cuando la precarga de shaders está habilitada. Tendrás tirones mientras se reconstruye la caché de shaders de cada juego, pero los shaders en caché no se descartarán por límite de tamaño.
    - Añadido [dxvk-sarek](https://github.com/pythonlover02/DXVK-Sarek) como reemplazo opcional de DXVK para GPUs antiguas que no soportan adecuadamente Vulkan 1.3. Utiliza la rama `async`, por lo que NO DEBE usarse en juegos con antitrampas ni en juegos multijugador en general. Quedas avisado. Usa `PROTON_DXVK_SAREK=1` para habilitarlo.
    - Añadido `PROTON_FSR3_UPGRADE` para actualizar las DLLs de FSR 3.1 a versiones más recientes.

**Correcciones:**

* **Limine:**
    - Corregido el error `limine bios-install /dev/sdaX` al seleccionar el punto de montaje **/boot** como ubicación de arranque en sistemas MBR.
    - Corregido el valor no inicializado de la ruta `bootLoader`, que provocaba fallos de instalación en sistemas MBR cuando no se seleccionaba explícitamente la ubicación del gestor de arranque.
    - Añadida una advertencia sobre el uso de la bandera **bios-grub** en la partición de arranque, lo que puede provocar un error de «Stage 3 file not found».
    - Corregido el arranque dual automático con Windows en instalaciones BIOS.
    - Corregido el fallo al arrancar instantáneas Btrfs al usar **GNOME (GDM)**.
* **Lanzador del instalador:** Añadidas IPs de respaldo para la comprobación de conexión si falla el ping a **cachyos.org**.

25.07
----

**Características:**

- **Shell**: Ahora se puede elegir la shell del usuario durante la instalación entre fish, zsh y bash. Fish se mantiene habilitada por defecto.
- **chwd**: Instala plasma-x11 para los controladores NVIDIA heredados
- **Netinstall**: Añadido fwupd a KDE Plasma y Gnome
- **mesa-git**: Añadido soporte para AMD Anti Lag
- **firefox**: Introducido un Firefox alternativo llamado «firefox-pure», que incluye mejoras con el perfil userjs. Además, se ha añadido «cachyos-firefox-settings», que puede instalarse sobre firefox.
- **Proton-CachyOS**:
  - Importados commits de wine-wayland de upstream
  - Añadida la variable de entorno «PROTON_FSR4_UPGRADE», que descargará automáticamente la última DLL de FSR4 y la reemplazará para una actualización automática en juegos compatibles con FSR 3.1
  - Añadidos muchos parches relacionados con Wayland de Wine upstream publicados después de Wine 10.0.
  - Añadidos parches para mejorar la integración con sistemas antitrampas. Gracias a NelloKudo
  - Añadidos parches para AMD Anti Lag 2 en vkd3d-proton y wine
  - Actualizado umu-protonfixes al último commit

**Correcciones:**

- **Keyring**: Mejorado el manejo de la instalación del keyring para evitar problemas y realizar varios reintentos.
- **systemd-oomd**: Deshabilitado systemd-oomd, ya que tenía problemas al trabajar junto con le9 y cerraba aplicaciones demasiado pronto

**Registro de cambios para la Edición Handheld:**

- **handheld-settings**: Importados varios ajustes de SteamOS a la Edición Handheld
- **pipewire**: Establecido el quantum mínimo en 256
- **SteamDeck-OLED**: Instala galileo-mura para Steam Deck OLED
- **Lenovo Legion Go S**: Añadido soporte para Lenovo Legion Go S

25.05
----

**Características:**

- **ISO**: Añadida detección automática durante el arranque de la ISO para identificar la GPU NVIDIA del sistema y cargar el módulo adecuado (p. ej., nvidia-open, nvidia), ofreciendo mejor soporte para la serie 10xx y anteriores.
- **Plymouth**: Añadida una nueva animación de Plymouth.
  - ¡Gracias a Eren ([https://github.com/erenyldz89](https://github.com/erenyldz89)) por trabajar en esto!
- **Navegador**: Cachy-Browser ha quedado obsoleto. Ahora ofrecemos Firefox como navegador preinstalado por defecto. Puedes encontrar una guía para migrar perfiles a Firefox (y sus bifurcaciones) aquí: [https://wiki.cachyos.org/support/faq/#migrating-your-profile-from-cachy-browser-to-firefox](https://wiki.cachyos.org/support/faq/#migrating-your-profile-from-cachy-browser-to-firefox)
- **netinstall**: Añadidos kcalc, filelight, plymouth-kcm y kio-admin a la instalación de KDE.
- **mkinitcpio**: Deshabilitado el initramfs de respaldo por defecto. Esto ahorrará una cantidad significativa de espacio.
- **Espejos**: Añadido un nuevo espejo de 10 Gbps en Bangladés. ¡Gracias a Limda por alojarlo!
- **Proton**:
  - Rebaseados casi todos los parches de **Proton CachyOS 9.0**.
  - Habilitado el controlador Wayland para las compilaciones de Steam Linux Runtime. Habilítalo con `PROTON_ENABLE_WAYLAND=1`. Gracias a [GloriousEggroll](https://github.com/GloriousEggroll) por hacerlo posible.
  - Añadidos muchos parches relacionados con Wayland de Wine upstream publicados después de Wine 10.0.
  - Corregidos varios problemas con el controlador Wayland y juegos Vulkan. Gracias a [Etaash-mathamsetty](https://github.com/Etaash-mathamsetty) por todo el duro trabajo.
  - Añadida una implementación stub para `amdxc64.dll` para habilitar FSR4. Usa `FSR4_UPGRADE=1` para actualizar juegos FSR3.1 a FSR4. Gracias de nuevo a [Etaash-mathamsetty](https://github.com/Etaash-mathamsetty). Instrucciones: [https://github.com/Etaash-mathamsetty/wine-builds/releases/tag/fsr4](https://github.com/Etaash-mathamsetty/wine-builds/releases/tag/fsr4)
  - Añadidos parches relacionados con DualSense para una detección de dispositivos de audio más completa para háptica basada en sonido por cable. Algunos juegos que dependían de ese comportamiento específico ahora deberían contar con esa funcionalidad. Gracias a [ClearlyClaire](https://github.com/ClearlyClaire) por los parches originales y a [Exotic0015](https://github.com/Exotic0015) por investigarlo desde **Proton CachyOS 9.0**. Upstream: [https://gitlab.winehq.org/wine/wine/-/merge_requests/7238](https://gitlab.winehq.org/wine/wine/-/merge_requests/7238)
  - Eliminado el parche de Dragon Age Inquisition ya que no funcionaba. Por favor, usa **Proton CachyOS 9.0** por ahora para ese juego.
- **GRUB**: Añadido un nuevo tema de GRUB. Gracias a [diegons490](https://github.com/diegons490/cachyos-grub-theme).

**Correcciones:**

- **Espejos**: Corregido un problema por el que los usuarios de Rusia ya no podían instalar. Se mitigó dejando de usar CDN77, que Rusia había empezado a bloquear.
- **kde-settings**: Deshabilitado el icono de Discover en la barra de tareas.
- **ddcutil**: Publicada la versión preliminar ddcutil 2.2.1 para corregir un problema donde las GPUs AMD se congelaban al ver vídeos de YouTube.

**Registro de cambios para la Edición Handheld:**

- **os-branch**: El Modo Juego ahora muestra correctamente que se está utilizando CachyOS Linux.
- **audio**: Actualizados los perfiles de convolver.
- **steamos-manager**: Se utiliza para la gestión de reloj de GPU y TDP, actualizaciones de BIOS/dock, mantenimiento de dispositivos de almacenamiento, formateo de almacenamiento externo y límite de carga de batería para Steam Deck.
- **steamos-powerbuttond**: Este componente reemplaza al powerbuttond estándar para una mejor experiencia de suspensión.
- **jupiter-hw-support**: Actualizado a 20250501.

25.04
----

**Características:**

- **occt**: Añadido OCCT a la ISO para disponer de un entorno live para pruebas de estrés
  - ¡Gracias a Marek por aportar esta idea!

**Correcciones:**

- **kernel**: Corrige un fallo de módulo en portátiles Asus
- **limine**: Limine ahora tiene instalado mkinitcpio-limine-hook y creará entradas en el gestor de arranque automáticamente

**Registro de cambios para la Edición Handheld:**

- **audio**: Añadidos perfiles de audio para ROG Ally X y Legion Go
- **gamescope**: Reemplazado gamescope-plus por gamescope upstream

25.03
----

**Características**:

- **Gestor de arranque**: Añadido soporte para el gestor de arranque Limine
- **Gestor de arranque**: Añadido soporte para instantáneas automáticas en el gestor de arranque Limine
- **Samba**: Añadido el paquete «cachyos-samba-settings» para configurar fácilmente un montaje Samba
- **NVIDIA**: Vuelto a habilitar el firmware GSP para el módulo de código cerrado de NVIDIA
- **Kernel**: Añadido soporte para el controlador Asus Armoury
- **Arranque Seguro**: Mejorado el script «sbctl-batch-sign» para firmar únicamente los archivos deseados
- **udev**: Revertido el uso de ntfs3 como controlador predeterminado para particiones NTFS
  - Información: Usar el controlador NTFS3 del kernel por defecto causó problemas a algunos usuarios. Por lo tanto, lo hemos revertido nuevamente.
- **wine**: Wine y Wine-Staging ahora usan WoW64 y NTSync por defecto
- **scx-manager**: Separado el gestor gráfico de sched-ext de Kernel Manager a su propia aplicación
- **Soporte de hardware**: Añadido soporte para RDNA4, RTX 5070 Ti y 5070.
- **Configuración**: Añadido soporte de DLSS Swapper; es un script que actualiza y utiliza automáticamente la última versión y preajuste de DLSS
- **Actualizaciones de paquetes**: linux-cachyos 6.14.0, NVIDIA 570.133.07, Gnome 48, Plasma 6.3.3, mesa 25.0.2, linux-api-headers 6.14.0, linux-tools 6.14.0

**Correcciones**:

- **initcpiocfg**: Eliminada la adición del módulo «crc32c-intel» a mkinitcpio; ha quedado obsoleto y ahora usa por defecto el módulo «crc32c»
- **chwd**: Deshabilitada la descarga de brcmfmac en MacBook T2
- **chwd**: No instalar el controlador NVIDIA 390.xx en portátiles

25.02
----

**Características**:

- **Kernel**:
  - Ahora se aplica Propeller Optimization al kernel predeterminado **linux-cachyos** para todas las arquitecturas disponibles.
    - **Nota**: En combinación con AutoFDO, esto puede mejorar el rendimiento alrededor de un 10%, dependiendo de la carga de trabajo.
- **NVIDIA**: Añadido soporte para la arquitectura Blackwell.
- **ISO**: Uso del módulo nvidia-open por defecto para ofrecer soporte Blackwell. Los usuarios con GPUs anteriores a Turing deben usar la primera opción de arranque o la opción de respaldo.
- **Configuración**: Habilitado tocar para hacer clic (tap-to-click) por defecto en sesiones X11.
- **udev**: Uso de ntfs3 como controlador predeterminado para particiones NTFS.
- **game-performance**: Deshabilitado el salvapantallas mientras se ejecutan juegos.
- **kernel-manager (sched-ext)**: Añadido soporte para modo servidor.
- **kernel**: Añadidas correcciones para la función AMD preferred core.
- **chwd**: Vuelta a añadir la solución alternativa para RTD3.
- **Actualizaciones de paquetes**: linux-cachyos 6.13.0, NVIDIA 570.86.16, LLVM 19, glibc 2.41, mesa 24.3.4.

**Correcciones**:

- **chwd**: Corregido un problema por el que los portátiles híbridos con hardware Intel y NVIDIA no podían usar su GPU en DaVinci Resolve.
- **glibc**: Añadida una corrección para CVE-2025-0395.
- **kernel-manager**: Intenta instalar el módulo precompilado de NVIDIA, si está disponible para el kernel predeterminado de Arch.
- **kernel-manager**: Añadida una comprobación adicional para evitar sobrescribir el valor en caso de que un módulo no esté disponible.

**Registro de cambios para la Edición Handheld:**

- **hooks**: Permitido nuevamente el uso de Proton compilado nativamente.
- **varios**: Diversas actualizaciones y correcciones.

24.12
----

**Características**:

- Kernel:
  - AutoFDO ahora se aplica al kernel predeterminado `linux-cachyos` para todas las arquitecturas disponibles
    - **Nota**: Las mejoras de rendimiento son mínimas por ahora debido a las limitaciones actuales. Combinar perfiles requiere LLVM 19, y Propeller Optimization depende de ello. Prevemos que LLVM 19 y perfiles más optimizados estarán disponibles a finales de año, tras la adopción de LLVM 19 por parte de Arch Linux
- chwd: Rusticl ahora está configurado correctamente
- chwd: mejorado el registro de errores durante las llamadas de hooks
- chwd: corregida la selección de controladores VAAPI
- cachyos-settings: Añadido un script para facilitar la ejecución de aplicaciones mediante Zink
- Configuración Sysctl: Reelaborados y optimizados varios ajustes
- Kernel Manager: Añadido soporte para `scx_loader`, habilitando el cambio nativo de planificador
- Instalador: El servicio Bluetooth ahora está habilitado por defecto
- Netinstall:
  - Añadido `wireless-regdb` a los paquetes instalados
    - Esto configura la conexión para usar los canales adecuados y desbloquea canales adicionales, mejorando potencialmente la velocidad de internet
    - **Nota**: Se establece una región genérica por defecto; se recomienda personalizarla a tu región para un rendimiento óptimo
- **Actualizaciones de paquetes**: NVIDIA 565.77, linux-cachyos 6.12.6, mesa 24.3.2, scx-scheds 1.0.8, zfs 2.2.7

**Correcciones de errores**

- Instalador: Los registros de instalación ya no abren ventanas de terminal de depuración
- Gestión de particiones:
  - Ajustes adecuados de `umask` garantizan que `/boot` sea inaccesible sin permisos suficientes
- Lanzador del instalador: Corregidas las comprobaciones de conectividad a internet

**Registro de cambios de la Edición Handheld:**

- Actualizados los paquetes relacionados con consolas portátiles
- Corregido problema con el manejo de perfiles de energía
- Añadido soporte para WiFi 6

24.11
----

**Características:**

- thp-shrinker: Establecido el valor max_ptes_none al 80% para páginas llenas de ceros. Esto reducirá el uso de memoria cuando THP always esté en uso, manteniendo el mismo rendimiento
- NVIDIA: El firmware GSP ahora se deshabilita automáticamente si el usuario cambia por su cuenta al controlador cerrado
- chwd: NVIDIA: Los servicios nvidia-powerd se habilitan para portátiles para alcanzar el mayor TDP disponible
- proton-cachyos: La generación de fotogramas DLSS ahora funciona. También se espera que funcione en el futuro en el Proton upstream
- kernel: Ahora se aplica AMD Cache Optimizer. Los usuarios con CPUs de doble CCD x3d ahora pueden cambiar entre preferir núcleos de frecuencia o de caché
- kernel: amd-pstate: Retroportadas correcciones de rendimiento de amd-pstate para Strix Point
- kernel: Añadidas correcciones upstream para los problemas de TDP en GPUs AMD rdna2 y rdna3
- kernel: Añadidas correcciones de temporización para pantallas con configuración 5120x1440x240
- kernel: Kernel experimental optimizado con AutoFDO en el repositorio bajo «linux-cachyos-autofdo»
- ISO: Añadida comprobación si el usuario ejecuta la edición handheld y advertencia si inicia la instalación en un dispositivo no compatible
- ISO: Añadida comprobación de si el usuario está usando la última ISO; si no, se le advierte

**Correcciones de errores:**

- refind: particionado: cambiado de diseño de 3 particiones a 2
- netinstall: añadido kdeplasma-addons a la instalación de Plasma
- calamares: Corregido un problema al particionar con una partición swap

**Registro de cambios de la Edición Handheld:**

- El soporte para Rog Ally X debería haber mejorado

24.10
----

**Características:**

- Actualizaciones de paquetes: linux-cachyos 6.11.1, mesa 24.2.4, scx-scheds 1.0.5, python 3.12.7

**Correcciones de errores:**

- sddm: Incorporado un sddm más reciente para corregir inicios de sesión en Wayland
- ISO: Añadido xf86-video-amdgpu para corregir la carga de la sesión gráfica en algunas configuraciones
- chwd: Corregida la reinstalación de perfiles

24.09
----

**Características:**

- Paquetes: Optimizados varios paquetes con PGO, como LLVM, Clang, svt-av1 y nodejs. Esto dio como resultado, por ejemplo, un compilador Clang un 10% más rápido
- Repositorio: El repositorio ahora se sincroniza y actualiza con mayor frecuencia, lo que significa aún menos retraso. El intervalo de sincronización se ha reducido de cada 3 horas a cada hora.
- Repositorio: A partir del 27.09.2024, los paquetes compilados con -fpic habilitarán automáticamente -fno-semantic-interposition. Esto puede proporcionar una mejora de rendimiento para muchos paquetes.
- zlib-ng: Ahora se utiliza como reemplazo de zlib
- sddm: En la instalación de KDE, sddm ahora usará Wayland por defecto como compositor. # Proporcionar cambios de migración en la publicación de lanzamiento
- cachyos-settings: NetworkManager ahora utiliza systemd-resolved como backend, lo que ayuda con el almacenamiento en caché de DNS
- cachyos-settings: Uso de time.google.com como servidor de sincronización horaria para evitar problemas de sincronización en algunas configuraciones
- gcc: Añadidas correcciones para el ajuste de znver5
- gcc: Seleccionados parches y flags de Clear Linux
- glibc: Añadidos parches «evex» así como selecciones de Clear Linux
- wiki: La Wiki recibió muchas adiciones y renovaciones nuevas
- chwd: Simplificado el manejo de dispositivos
- chwd: Todos los perfiles ahora están diseñados específicamente para dispositivos PCI
- chwd: Añadido --autoconfigure para gestionar automáticamente la instalación de controladores
- Actualizaciones de paquetes: linux-cachyos 6.11.0, mesa 24.2.3, Plasma 6.1.5, NVIDIA 560.35.03, calamares 3.3.10, QT 6.7.3

**Correcciones de errores:**

- Launch-Installer: Añadidas correcciones para sincronizar el reloj de hardware antes de iniciar la instalación
- calamares: Añadida corrección para desmontar el sistema de archivos tras la instalación
- keyring: Limpiar el keyring y recrearlo antes de iniciar la instalación; esto corrige problemas poco frecuentes del keyring
- sysctl: Los volcados de memoria (core dumps) se han vuelto a habilitar
- chwd: Eliminado `libva-nvidia-driver` del perfil PRIME para evitar posibles conflictos y mejorar la compatibilidad con software como Spectacle
- cachyos-settings: Añadida solución alternativa para cierres inesperados de GNOME Wayland
- cachyos-fish/zsh-config: Eliminadas peculiaridades específicas de Wayland

**Registro de cambios para la Edición Handheld:**

- Ally/Ally X: HHD fue reemplazado por inputplumber, ya que hhd no usa correctamente el controlador del kernel para ello, lo que provoca problemas.
- Actualizados los paquetes relacionados con consolas portátiles

24.08
----

**Características:**

- chwd: NVIDIA ahora usa el módulo open por defecto para tarjetas compatibles
- Escritorio: Añadido el entorno de escritorio Cosmic a las opciones de instalación
- NVIDIA: El último controlador 560 Beta es ahora el predeterminado; egl-wayland parcheado para corregir cierres inesperados en Firefox y otras aplicaciones
- espejos: CDN77 patrocinó a CachyOS con Object Storage con caché mundial, mejorando significativamente las velocidades de conexión para los usuarios
- espejos: CachyOS ahora proporciona su propio espejo de Arch Linux para evitar problemas de sincronización, establecido por defecto durante la instalación junto con espejos de respaldo
- Arranque Seguro: Introducido script y tutorial en la Wiki para facilitar el soporte de Arranque Seguro (Secure Boot)
- cachy-chroot: Añadido automontaje mediante fstab para simplificar el chrooting
- cachy-chroot: Implementado soporte para cifrado LUKS
- kernel-manager: Añadido soporte para establecer flags de sched-ext en la configuración de sched-ext
- kernel-manager: Introducida opción para compilar nvidia-open
- kernel-manager: Añadida opción para recordar las últimas opciones usadas en la página de configuración
- Actualizaciones de paquetes: linux-cachyos 6.10.5, mesa 24.2.0, Plasma 6.1.4, NVIDIA 560.31.02

**Correcciones de errores:**

- chwd: Mejorada la detección del perfil PRIME según el nombre del dispositivo
- chwd: Eliminada la solución alternativa de RTD3 debido a problemas en algunas configuraciones
- cachyos-rate-mirrors: Deshabilitada la clasificación de espejos al ejecutarse en la ISO Live
- cachy-chroot: Corrige un cierre inesperado cuando una partición no tenía un fstype o uuid válido (p. ej., Microsoft Recovery Partition)
- calamares: Refactorizada la inicialización del keyring
- kernel-manager: Corregido el soporte para compilar pkgbase personalizados con kernels LTO y módulos habilitados
- kernel-manager: Corregido el retraso en la solicitud de contraseña
- ISO: Reemplazado radeon.modeset=1 por amdgpu.modeset=1 para GPUs modernas
- game-performance: Evitado el fallo cuando el perfil no está disponible

**Registro de cambios para la Edición Handheld:**

- soporte de dispositivos: Añadido soporte para Ally X, gracias a Luke Jones
- libei: Implementado soporte para libei, reemplazando a libextest
- packagekit: Bloqueada la instalación de packagekit para evitar problemas con actualizaciones del sistema mediante Discover
- hook: Añadido pacman-hook para entrar en conflicto con versiones de Proton compiladas nativamente, evitando posibles problemas
- Actualizados jupiter-fan-control, steamdeck-dsp y el firmware de Steam Deck

24.07
----

**Características:**

- Repositorio: Introducido el repositorio optimizado para Zen 4, que se utilizará para CPUs Zen4 y Zen5
- ISO: Añadida comprobación automática de arquitectura para el repositorio Zen4/Zen5
- chwd: Añadido soporte GC para GPUs AMD, lo que ayuda a detectar las GPUs con soporte oficial de ROCm
- chwd: Uso de libva-nvidia-driver en tarjetas compatibles
- ksmctl: Introducida herramienta para habilitar/deshabilitar KSM: `ksmctl --enable`
- kernel: Para el kernel «linux-cachyos» ahora hay disponible un paquete «linux-cachyos-dbg», que contiene un vmlinux sin depurar (unstripped) con fines de depuración
- kernel: amd cpb boost ahora está disponible y power-profiles-daemon está parcheado; si se establece el perfil «powersave», deshabilitará el boost en CPUs AMD
- kernel: Añadido parche de ahorro de energía para SoCs AMD en reproducción de vídeo
- kernel-manager: Añadido soporte para gestionar planificadores sched-ext y obtener información mediante la GUI
- steam/proton: Ahora existe un script «game-performance», que puede añadirse a las opciones de lanzamiento de Steam
- power-profiles: En CPUs compatibles con AMD Pstate, la frecuencia lineal más baja ahora se establece más alta; esto puede mejorar la latencia y los 1% lows
- kwin: Añadido backport para tearing; esto ha sido probado. En NVIDIA solo funciona en aplicaciones Wayland nativas
- netinstall: Cutefish ha sido eliminado como entorno de escritorio instalable
- Espejos: Añadidos espejos en Austria y China; el espejo de China está alojado por la Universidad TUNA. Esto debería ayudar mucho a los usuarios de China
- Actualizaciones de paquetes: linux-cachyos 6.9.9, mesa 24.1.3, NVIDIA 555.58.02, Plasma 6.1.2, LLVM 18.1.8

**Correcciones de errores:**

- ISO: Establecido copytoram en auto en lugar de yes
- ISO: Corregida la suspensión en la ISO Live para portátiles
- Lanzador del instalador: Instala el último archlinux-keyring antes de que comience la instalación para evitar problemas al obtener archlinux-keyring en el chroot
- Clasificación de espejos: Clasifica únicamente los espejos de nivel 1 (Tier 1) durante la instalación
- pacman.conf: Eliminado repositorio de pacman no utilizado
- cachy-chroot: No mostrar subvolúmenes .snapshot
- Calamares: No utilizar el módulo «Preservefiles», ya que los usuarios están informando problemas con él.

**Registro de cambios para la Edición Handheld:**

- Añadido archivo de configuración para aplicar un escalado diferente, '/home/$USER/.config/deckscale
- Cambio a GameMode más robusto
- Actualizado el firmware de WiFi/Bluetooth para Steam Deck
- Implementado el montaje automático para GameMode
- Añadidas peculiaridades de gamescope-session para la topología de CPU en Wine, HDR y retroiluminación
- Corregida la selección de tasa de refresco
- Actualizados jupiter-hw-support, steamdeck-dsp, jupiter-fan-control, gamescope-session-git

24.06
----

**Características:**

- chwd: Introduce detección de hardware para consolas portátiles
- chwd: Introduce soporte para MacBook T2
- chwd: Añade detección de controladores de red
- Instalación: Añadido soporte para MacBook T2
- ISO: Añadido cachy-chroot. Es un script que ayuda al usuario a hacer chroot en el sistema.
- ISO: Cambio a Microcode Hooks; esto requiere utilizar la última versión de Ventoy (1.0.98)
- ISO: Habilitado copytoram; ya no es necesario deshabilitarlo porque ya no ofrecemos la instalación offline
- sistema de archivos: BTRFS es ahora el sistema de archivos seleccionado por defecto
- netinstall: Uso de ufw en lugar de firewalld
- Calamares: Actualizadas las diapositivas de marca
- Diapositivas: Actualizadas para los últimos cambios
- Actualizaciones de paquetes: linux-cachyos 6.9.3, mesa 24.1.1, xwayland 24.1, NVIDIA 555.52.04, Plasma 6.0.5

**Correcciones de errores:**

- Calamares: umount: Habilitado emergency nuevamente
- Qtile: Los controles multimedia ahora funcionan correctamente
- NVIDIA: Habilitados los servicios y opciones necesarios para que la suspensión funcione en Wayland
- netinstall: Eliminado b43-fwcutter de la instalación
- netinstall: Reemplazado hyprland-git por hyprland
- netinstall: Eliminado linux-cachyos-lts de la selección para evitar problemas con módulos faltantes
- Calamares: Shellprocess: Movida la clasificación de espejos antes de instalar el keyring

**Registro de cambios de la versión experimental Handheld:**

- Tema KDE Vapor por defecto (tema de SteamOS)
- Sistema de archivos predeterminado: BTRFS
- Kernel predeterminado: linux-cachyos-deckify
- SDDM ahora utiliza Wayland
- Bandera de entorno para HHD para reducir la latencia
- Añadidos argumentos del kernel para mejorar el comportamiento al cambiar al Modo Juego
- Ahora se puede editar el nombre de usuario
- La detección de hardware configura e instala los paquetes necesarios según el dispositivo utilizado
- El teclado Maliit ahora usa el Modo Oscuro
- Powerbuttond de Valve para una suspensión adecuada
- Ahora se pueden añadir accesos directos a Steam
- Actualizado scx-scheds al último commit de git, ofreciendo las últimas mejoras para el planificador LAVD
- Añadido automontaje a cachyos-handheld
- CachyOS ahora puede realizar actualizaciones de BIOS de Steam Deck en Steam Deck

24.05
----

**Características:**

- Sistemas de archivos: Introducido Bcachefs como opción de sistema de archivos
- pacstrap: Añadida detección por si se usa Bcachefs para instalar las herramientas Bcachefs-tools correspondientes
- CachyOS-AI-SDK: Introducida nueva opción de instalación para ofrecer una configuración lista para usar del SDK de NVIDIA
- CachyOS-Deckify: Ofrece una variante para consolas portátiles (experimental), consulta [aquí](https://discuss.cachyos.org/t/information-experimental-cachyos-deckify/203) para más detalles
- BTRFS: Snapper automático para instantáneas, puede instalarse desde la aplicación CachyOS Hello.
- ISO: Eliminado el instalador offline
- Actualizaciones de paquetes: Python 3.12, gcc 14.1.1, mesa 24.0.6, xwayland 24.1rc2, NVIDIA 550.78

**Correcciones de errores:**

- settings.conf: Movida la detección de hardware antes de netinstall
- pacstrap: Uso de btrfs-assistant en lugar de btrfs-assistant-git
- plymouth: eliminado el hook de plymouth en zfs + cifrado
- ISO: Añadidos varios archivos de configuración para KDE para evitar el bloqueo de pantalla durante la instalación
- services-systemd: Habilitado correctamente fstrim.timer
- umount: Deshabilitado emergency para evitar problemas con la instalación de zfs
- shellprocess: Limpieza de restos de la instalación offline

24.04
----

**Características:**

- Plymouth: Uso de plymouth para proporcionar una animación de arranque temática
- ISO: Vuelta a X11 debido a problemas al configurar la distribución del teclado en calamares
- rEFInd: Nuevo diseño de particionado (/boot y /boot/efi separados)
- netinstall: KDE: Instala xwaylandvideobridge por defecto
- netinstall: Uso de lightdm en lugar de ly para varios entornos de escritorio debido a un error en ly
- systemd-boot: Uso de @saved para systemd-boot para permitirle recordar la entrada de arranque seleccionada previamente
- cachyos-keyring: Refactorizado el paquete cachyos-keyring y proporcionado un keyring cachyos-trusted
- ISO: Uso de compresión ZSTD 19 para la imagen mkinitcpio de la ISO
- Actualizaciones de paquetes: xz 5.6.1-3, linux-cachyos 6.8.2, pacman 6.1.0-5, mesa 24.0.4, Plasma 6.0.3, nvidia 550.67 y cachyos-settings 39-2

**Correcciones de errores:**

- Inicio automático de sesión: Corregida la opción de inicio automático cuando se usa junto con sddm
- xz: Proporcionado un paquete xz parcheado
- libarchive: Mitigado commit de un actor malicioso en xz
- cachyos-settings: udev-rule: no establecer watermark_scale_factor a 125, ya que aumenta significativamente el uso de RAM
- calamares: pacman-keyring: Uso de un método más simple para integrar el keyring en la instalación

24.03.1
----

**Características:**

- netinstall: Eliminados los kernels adicionales en la selección de netinstall para evitar confusión en los usuarios. Otros kernels personalizados pueden instalarse mediante Kernel Manager
- Kernel Manager: Los módulos de NVIDIA se instalan automáticamente cuando se detectan, rebaseado para QT6, corregidos nombres personalizados al usar la opción LTO
- Package Installer: Rebaseado en QT6, actualizado para pacman 6.1
- Actualizaciones de paquetes: linux-cachyos 6.8.1, pacman 6.1, mesa 24.0.3, Plasma 6.0.2, llvm 17.0.6

**Correcciones de errores:**

- NVIDIA: parcheado el módulo nvidia para tomar antes el control de nvidia.drm.modeset y evitar problemas en gráficos NVIDIA
- Refind: No instalar el kernel lts para evitar problemas
- shellprocess: Eliminar por completo el directorio de liveusers

24.03
----

**Características:**

- ISO: Plasma 6 ahora se incluye en la ISO y usa Wayland por defecto; se eliminó la ISO de GNOME para evitar confusión sobre netinstall
- Calamares: Rebaseado para QT6
- refind: Añadidos f2fs y zfs como opción incluyendo cifrado luks2
- espejos: Ahora proporcionamos 2 CDNs globales. Una alojada por Cloudflare R2 y otra por Digital Ocean
- mirrorlist: Descargar el instalador en línea directamente desde la CDN para ofrecer una entrega más rápida
- initcpiocfg: Usar el nuevo hook de microcódigo para cargar tempranamente el ucode
- gestor de arranque: Ya no cargar el microcódigo desde el gestor de arranque
- Actualizaciones de paquetes: linux-cachyos 6.7.9, mesa 24.0.2, zfs-utils 2.2.3

**Correcciones de errores:**

- pacstrap: No instalar paquetes de configuración para ofrecer al usuario una selección más limpia en la instalación
- shellprocess_pacman: Copiar también los cachyos-v4-mirrorlists clasificados al destino

24.02
-----

**Características:**

- refind: Cambiado el diseño de /boot/efi a /boot para ofrecer más opciones de sistemas de archivos y cifrado
- Live-ISO: Limpieza y sincronización de la Live-ISO
- Lanzador del instalador: Añadida recomendación para la instalación en línea
- configuraciones de shell: Añadida opción para deshabilitar fastfetch al abrir el terminal y añadido un alias «update»
- netinstall: Añadido phonon-qt5-vlc a kde
- Actualizaciones de paquetes: linux-cachyos 6.7.5, mesa 23.3.5, gcc 13.2.1-12, glibc 2.39, mesa 24.0.1, nvidia 550.54.14

24.01
-----

**Características:**

- x86-64-v4: Detección automática y habilitación del repositorio durante la instalación
- linux-cachyos: el framework de planificadores sched-ext ahora se proporciona en el kernel predeterminado
- xwayland: Proporciona parches de sincronización explícita por defecto
- Actualizaciones de paquetes: linux-cachyos 6.7, mesa 23.3.3, gcc 13.2.1-8, xorg-xwayland 23.2.4

**Correcciones de errores:**

- chwd: Para tarjetas Nvidia Ada Lovelace los módulos de nvidia se empaquetan directamente en el initramfs para evitar problemas con el kms temprano

23.12
-----

**Correcciones de errores:**

- zfs: Añadido compatibility=grub a las opciones del pool para garantizar la compatibilidad
- grub/xfs: Añadido un parche a grub para tener compatibilidad con el nuevo valor predeterminado bigtime de xfs
- netinstall: xdg-desktop-portal-hyprland en lugar de xdg-desktop-portal-hyprland-git

23.11
-----

**Características:**

- nvidia: Uso del módulo nvidia en lugar de dkms
- Calamares sincronizado con upstream
- Actualizaciones de paquetes: linux-cachyos 6.6.1, nvidia-utils 545.29.02, mesa 23.2.1, zfs-utils 2.2.0, mkinitcpio 37

**Correcciones de errores:**

- nvidia-hook: Vuelto a añadir nvidia-hook para evitar problemas en el momento de la instalación con el nuevo módulo
- netinstall: Se renombraron paquetes debido a los cambios recientes en el empaquetado de KF5
- netinstall: Se añadió xdg-desktop-portal-gnome a la instalación de GNOME

23.09
-----

**Características:**

- systemd-boot: Predeterminado a luks2
- netinstall: Proporciona una categoría propia para los paquetes de CachyOS
- Calamares sincronizado con upstream
- Actualizaciones de paquetes: linux-cachyos 6.5.3, nvidia-utils 535.104.05, mesa 23.2.7

**Correcciones de errores:**

- shellprocess_sdboot: Evitar el uso de «sudo» al generar las entradas de arranque en el proceso de instalación

23.08
-----

**Características:**

- Calamares sincronizado con upstream
- Actualizaciones de paquetes: linux-cachyos 6.4.10, nvidia-utils 535.98

**Correcciones de errores:**

- Keyring actualizado y ahora funciona correctamente

23.07
-----

**Características:**

- CachyOS-Settings ahora incluye «bpftune», que ajusta automáticamente la configuración de red según el uso
- CachyOS-Qtile-Settings: Cambios de calidad de vida, mejores iconos, ...
- Actualizaciones de paquetes: linux-cachyos 6.4.2, cachy-browser 115.0.1, mesa 23.1.3,

**Correcciones de errores:**

- rate-mirrors ha sido corregido
- chwd (Detección de hardware) recibió múltiples correcciones
- corregida la instalación de controladores privativos para configuraciones híbridas en el instalador
- corregidos congelamientos de Calamares que ocurrían en algunas configuraciones poco frecuentes, principalmente en VM
- Diapositivas: Corrección de errata en la diapositiva 6

23.06
-----

**Correcciones de errores:**

- Instalación offline: Corrección de calamares

23.05
-----

**Características:**

- La estructura de migración de Git de CachyOS ahora se refleja en la instalación
- chwd (mhwd) recibió múltiples correcciones
- Pacman: Añadimos una función que permite mostrar un mensaje a nuestros usuarios antes de actualizar
- Calamares fue sincronizado con upstream
- Actualizaciones de paquetes: linux-cachyos 6.3.4, cachy-browser 113.0.1, mesa 23.1.1, python 3.11

**Correcciones de errores:**

- netinstall: correcciones mínimas por cambios de paquetes
- Diapositivas: La diapositiva 6 fue actualizada para reflejar los últimos cambios

23.04
-----

**Características:**

- Introducción del entorno de escritorio Qtile
- Reelaboración de mhwd: Reescritura en Rust; perfiles simplificados para GPUs y tarjetas de red; eliminado un montón de código antiguo
- Actualizaciones de paquetes: linux-cachyos 6.2.12, cachy-browser 112.0.1, mesa 23.0.3, zfs-utils 2.1.11

**Correcciones de errores:**

- f2fs: Eliminada la opción de montaje «atgc» ya que presenta problemas con systemd

23.03.1
-------

**Características:**

- Actualizaciones de paquetes: linux-cachyos 6.2.7, cachy-browser 111.0

**Correcciones de errores:**

- Calamares corregido con el gestor de pantalla lightdm debido a commits defectuosos de calamares upstream
- Corregido el problema del keyring en la instalación offline
- Refind: Usar linux-cachyos-lts por defecto. La versión actual 6.2 parece no funcionar bien junto con refind

23.03
-----

**Nuevas características:**

- Añadido el gestor de arranque refind
- Instalación automática de controladores Nvidia usando MHWD
- Soporte de cifrado para la instalación ZFS
- Añadido Hyprland a la instalación por red (netinstallation)
- CachyOS-KDE-Settings ahora usa el tema predeterminado de KDE, pero los temas de CachyOS siguen preinstalados y disponibles para usar
- Actualizaciones de paquetes: linux-cachyos 6.2.2, mesa 23.0.0, cachy-browser 110.0.1, plasma 5.27.2
- Reelaborado y mejorado por completo el módulo de gestor de arranque en calamares
- La ISO ahora se firma con una clave GPG
- MHWD mejorado y actualizado
- Sincronizado Calamares con upstream

**Correcciones de errores:**

- La opción «reemplazar partición» ahora ofrece una selección de sistema de archivos
- Corregida una errata en la diapositiva 3
- nouveau corregido y ahora carga correctamente el módulo
- MHWD: Usar modesetting para INTEL/ATI y Nouveau
- Eliminado el hook de zfs de mkinitcpio en la live iso, que causaba problemas al arrancar
- Puedes descargar la actualización desde nuestros espejos en SourceForge.

23.02
-----

**Nuevas características:**

- Añadido el repositorio cachyos-community-v3
- Añadidos los entornos de escritorio Budgie, Mate y LXDE a la instalación por red (Netinstallation)
- Bluetooth.service ahora está habilitado por defecto
- F2FS y grub están habilitados y funcionando de nuevo
- Actualizaciones de paquetes: linux-cachyos 6.1.10, mesa 22.3.4, zfs-utils 2.1.9, glibc 2.37, cachy-browser 109.0.1

**Correcciones de errores:**

- Rate-mirrors ahora recurre a espejos sin clasificar si falla al clasificarlos
- cachyos-rate-mirrors tiene un tiempo de espera fetch-mirrors-timeout más largo
- Se ha añadido Github al archivo hosts para evitar problemas con la lista de espejos
- Actualizadas las entradas de arranque para BIOS en syslinux

23.01
-----

**Características:**

- Diapositivas de Calamares reelaboradas y actualizadas
- Añadido el entorno de escritorio UKUI a la instalación por red
- Añadido el entorno de escritorio Cinnamon a la instalación por red
- Cmdline: zswap ahora está deshabilitado por defecto porque CachyOS proporciona zram por defecto
- Calamares actualizado al último commit
- LLVM 15 ahora se distribuye por defecto
- Actualizaciones de paquetes: linux-cachyos 6.1.7, mesa 22.3.3, Plasma 5.26.5, llvm 15.0.7, gcc 12.1.1, binutils 2.40, zfs-utils 2.1.8, nvidia 525.85.05
- Instalador CLI actualizado

**Correcciones de errores:**

- el shellprocess remove-ucode ahora también se ejecuta en la instalación offline
- pamac eliminado de netinstall
- Los espejos clasificados de cachyos ahora se copian correctamente al destino de la instalación
- power-profile-daemon ya no se habilita por defecto

22.12
-----

**Características:**

- Nuevo fondo de GRUB en el gestor de arranque de la ISO
- memtest ahora está incluido para sistemas UEFI
- CachyOS-sddm-theme añadido a la instalación de KDE
- Añadido script automático de versión al crear la ISO
- Calamares actualizado al último commit
- Los espejos ahora se clasifican con «cachyos-rate-mirrors», que clasifica nuestros espejos y los de arch
- Actualización de paquetes: Kernel 6.1.1, mesa 22.3.1, plasma 5.26.4,...
- Eliminado el entorno de escritorio Kofuku
- ISO extra con llvm 15 incluido para dar soporte a tarjetas AMD más nuevas

**Correcciones de errores:**

- Calamares corregido al usar GNOME como ISO
- zfshostid ahora funciona correctamente para la instalación offline y online
- Añadido el hook «kms» al módulo initcpiocfg para seguir los valores predeterminados de archlinux
- Y más correcciones de la ISO

22.11
-----

**Características:**

- Calamares y su configuración se distribuyen en un solo paquete
- Limpieza completa de los paquetes en netinstall
- Añadido un módulo que elimina automáticamente el ucode no necesario
- RAM requerida reducida a 2.5GB
- Los paquetes necesarios para btrfs ahora solo se instalan para btrfs
- Calamares actualizado al último commit
- El gestor de arranque de la ISO ahora tiene fondo
- Actualizaciones habituales de paquetes (mesa, kernel, ...)
- Reemplazado systemd-network por networkmanager

**Correcciones de errores:**

- qemu-quest-agent.service eliminado de la ISO
- copytoram completamente deshabilitado, rompe la instalación offline
- mkinitcpio.conf actualizado
- Y más correcciones de la ISO

22.10
-----

**Características:**

- Pacman ahora usa Architecture=auto para la instalación x86-64-v3, ya que añadimos un parche para que pacman detecte automáticamente x86-64-v3
- Pacman ahora muestra desde qué repositorio se instaló un paquete
- La selección del gestor de arranque detecta automáticamente si EFI está presente; si no, usará grub por defecto
- La opción de swap ha sido deshabilitada por defecto, ya que zram se genera dinámicamente de forma automática
- Calamares actualizado al último commit
- El requisito mínimo de RAM se ha establecido en 4GB
- cachyos-grub-theme eliminado

**Correcciones de errores:**

- La detección de SSD y hdd en fstab se ha deshabilitado hasta que haya una corrección upstream
- Corregido el doble subvolumen BTRFS
- Añadido microcódigo faltante al gestor de arranque grub de la ISO
- Añadido un modo de arranque de respaldo que no establece ningún modeset (nomodeset)
- Y más correcciones de la ISO

22.09
-----

**Características:**

- Calamares está ahora en la última rama 3.3. Trae correcciones de errores y nuevas características a calamares
- TUI-Installer ahora está incluido en la ISO GUI; puedes usarlo con «cachyos-installer»
- Calamares ahora detecta automáticamente si el sistema de archivos de destino es un ssd o un hdd y ajusta las opciones de fstab en consecuencia
- Nvidia para las últimas GPUs (a partir de la serie 9xx) ahora tiene su propia entrada de arranque para evitar problemas con nouveau
- Opciones de montaje de fstab y zfs actualizadas
- FireFox ya no se instalará por defecto, ya que cachy-browser viene instalado por defecto

**Correcciones de errores:**

- cachyos-gaming-meta ha sido eliminado del módulo netinstall para evitar problemas en el proceso de instalación
- los paquetes de netinstall han sido actualizados y recibieron algunas correcciones
- Corregida la instalación de OpenBox
- correcciones habituales de traducción

22.07
-----

**Características:**

- Selección de gestor de arranque: El usuario ahora puede elegir en la instalación en línea entre grub y systemd-boot
- En la instalación en línea ahora se instalará siempre el calamares más reciente, lo que ayuda a corregir errores «sobre la marcha»
- Calamares ahora tiene un módulo mhwd que instala automáticamente los controladores necesarios (controladores libres)
- Calamares tiene nuevas diapositivas con imágenes durante la instalación
- Opciones de montaje de fstab y zfs actualizadas
- Soporte HiDPI

**Correcciones de errores:**

- Corregido el error de configuraciones regionales (locales) en calamares
- Se ha eliminado F2FS para el gestor de arranque grub ya que actualmente no funciona (problema de calamares); aún puede usarse con systemd-boot
- Calamares ahora muestra el sistema de archivos predeterminado correcto
- Corregida la ISO de Gnome
- Añadidos paquetes faltantes en la live ISO para la instalación offline
- corregido el cifrado luks de btrfs swap
- correcciones habituales de traducción

22.06
-----

Se han corregido los siguientes errores conocidos:

- La instalación fallaba cuando se usaba una CPU genérica
- KDE montaba automáticamente particiones zfs, lo que provocaba que el inicio de sesión automático en la ISO dejara de funcionar

**Mejoras:**

- Se ha corregido el firewall del servidor; cloudflare bloqueaba a los usuarios como «bots», lo que provocaba un error durante la instalación
- Añadido soporte de temas para Gnome, XFCE, OpenBox
- Actualizada nuestra wiki

**_CachyOS - Kernel - Manager_**
Además, nos complace anunciar nuestro CachyOS-Kernel-Manager.
En él tienes la posibilidad de instalar el kernel desde el repositorio y también configurar mediante una GUI tu propia compilación del kernel, lo que facilita mucho personalizarlo a tu gusto.

Puedes seleccionar las siguientes opciones para compilar un kernel:

- Planificador (BMQ, BORE, cacULE, cfs, PDS, TT)
- NUMA deshabilitado o habilitado
- KBUILD CFLAGS (-O3 o -O2)
- Establecer el gobernador performance por defecto
- Habilitar BBR2
- Frecuencia de tick (500Hz, 600Hz, 750Hz, 1000Hz)
- tickless (idle, periodic, full)
- deshabilitar el planificador de E/S MQ-Deadline
- deshabilitar el planificador de E/S Kyber
- Habilitar o deshabilitar MG-LRU
- Habilitar o deshabilitar DAMON
- Habilitar o deshabilitar Speculative page fault
- Habilitar o deshabilitar LRNG (Linux Random Number Generator)
- Aplicar optimización automática del kernel (detecta automáticamente la microarquitectura de tu CPU)
- Aplicar optimización del kernel por selección (verás una lista de diferentes microarquitecturas de CPU y podrás seleccionar la tuya con un número)
- Deshabilitar depuración (reduce el tamaño del kernel)
- Habilitar o deshabilitar nf cone
- Habilitar LTO (Full, Thin, No)

22.05
-----

CachyOS fue fundado hace un año. Tras casi un año de desarrollo, estamos muy orgullosos de anunciar nuestro primer lanzamiento estable del instalador GUI.
Dedicamos mucho tiempo a investigar la gestión de repositorios, desarrollo del kernel, infraestructura, tematización, ... y finalmente lo reunimos todo en el instalador GUI de CachyOS.
Todas las características en las que trabajamos e implementamos en el instalador buscan ofrecer a los usuarios una experiencia completamente personalizable.

Los cambios más emocionantes son que ahora usamos pacstrap para la instalación en línea, lo que proporciona un entorno instalado completamente limpio, y que ofrecemos soporte nativo completo para el sistema de archivos zfs.

Dado que Discord limita la longitud de los mensajes, el anuncio completo se puede encontrar aquí:

<https://discuss.cachyos.org/t/cachyos-gui-installer-changelog/>

La descarga se puede encontrar aquí:
<https://mirror.cachyos.org/ISO/kde/220522/>
<https://sourceforge.net/projects/cachyos-arch/>