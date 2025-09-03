---
title: Configuración del Gestor de Arranque
description: Configure los ajustes del gestor de arranque y pase parámetros del kernel a la línea de comandos
---

## systemd-boot

systemd-boot tiene dos tipos de archivos de configuración: uno para systemd-boot en `/boot/loader/loader.conf`, y otro para cada
entrada de kernel individual en `/boot/loader/entry`.

### Configuración del cargador

En este archivo de configuración, puede cambiar la entrada predeterminada y el tiempo de espera de systemd-boot.

```shell
# /boot/loader/loader.conf

default @saved
timeout 5
#console-mode keep # Esta opción configura la resolución de la consola.
```

### Configuración de la línea de comandos del kernel

Proporcionamos una herramienta para facilitar la configuración de systemd-boot: [`sdboot-manage`](https://github.com/CachyOS/CachyOS-PKGBUILDS/tree/master/systemd-boot-manager).
Una de las ventajas de esta herramienta es la configuración global de la línea de comandos del kernel. El archivo de configuración para `sdboot-manage` se encuentra en `/etc/sdboot-manage.conf`.

Edite la línea `LINUX_OPTIONS=` en `/etc/sdboot-manage.conf` para cambiar los parámetros del kernel.

```shell
# /etc/sdboot-manage.conf
LINUX_OPTIONS="zswap.enabled=0 nowatchdog quiet splash"
```

Después de realizar cambios, regenere todas las entradas de systemd-boot con el siguiente comando:

```shell
sudo sdboot-manage gen
```

## rEFInd

Al igual que [systemd-boot](/es/configuration/boot_manager_configuration#systemd-boot), rEFInd tiene dos archivos de configuración. `refind.conf` ubicado en
`boot/efi/EFI/refind` sirve principalmente para cambiar el comportamiento de rEFind, mientras que `/boot/refind_linux.conf` es para gestionar sus opciones de arranque.
`refind.conf` contiene comentarios extensos que explican todas sus opciones.

### Configuración de la línea de comandos del kernel

Para pasar parámetros del kernel a la línea de comandos, modifique "Boot using default options" en `/boot/refind_linux.conf`

```shell
# /boot/refind_linux.conf

"Boot using default options"     "root=PARTUUID=1cb353ec-7f03-4820-8b4b-03baf53a208f rw zswap.enabled=0 nowatchdog quiet splash"
```

Los cambios en ambos archivos de configuración surtirán efecto inmediatamente. No es necesario ejecutar un comando para "guardar" los cambios.

## GRUB

A diferencia de [systemd-boot](/es/configuration/boot_manager_configuration#systemd-boot) y [rEFInd](/es/configuration/boot_manager_configuration#refind),
GRUB solo tiene un archivo de configuración ubicado en `/etc/default/grub`. Hay una documentación bastante buena en este archivo que explica qué
hace cada opción.

### Ocultar el menú de arranque de GRUB

Para ocultar el menú de GRUB, simplemente configure las siguientes opciones de la manera correspondiente.

```shell
# /etc/default/grub

GRUB_TIMEOUT='0'
GRUB_TIMEOUT_STYLE=hidden
```

Presione ESC para acceder a la línea de comandos de GRUB. Desde aquí, ejecute `normal` o `exit` para volver al menú de arranque familiar de GRUB.

### Configuración de la línea de comandos del kernel

Para pasar parámetros del kernel a la línea de comandos con GRUB, necesitamos editar `GRUB_CMDLINE_LINUX_DEFAULT` dentro de `/etc/default/grub`.

```shell
# /etc/default/grub

GRUB_CMDLINE_LINUX_DEFAULT='nowatchdog zswap.enabled=0 quiet splash'
```

Cada vez que modificamos el archivo de configuración de GRUB, necesitamos rehacer la configuración con el siguiente comando:

```shell
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

## Limine

Limine es un gestor de arranque moderno conocido por su configuración sencilla. Esta guía cubre los conceptos básicos para que pueda empezar.

La configuración se realiza principalmente en `/boot/limine.conf` (o a veces en la partición del sistema EFI) para los ajustes del menú, y en `/etc/default/limine` para los parámetros del kernel.

### Configuración del Menú de Arranque

Este archivo controla el comportamiento y la apariencia del menú de arranque. Los cambios realizados aquí surten efecto inmediatamente después de guardarlos, no se necesitan comandos adicionales.

* **Timeout (Tiempo de espera):** Establece cuántos segundos espera Limine antes de arrancar automáticamente la entrada predeterminada.

  ```shell
  # /boot/limine.conf

  timeout: 5
  ```

* **Default Entry (Entrada predeterminada):** Especifica qué entrada del menú arranca por defecto. Las entradas se numeran a partir de 1. Si no se establece, el valor predeterminado es 1.

  ```shell
  # /boot/limine.conf

  default_entry: 2 # Arrancar la segunda entrada por defecto
  ```

  :::tip
   Si `default_entry` apunta a un directorio (por ejemplo, `/+CachyOS`), el autoarranque se desactivará. Para arrancar automáticamente una entrada dentro de un directorio, `default_entry` debe apuntar directamente al número de esa entrada específica.
  :::

Ejemplo (`/boot/limine.conf`):

```shell
# /boot/limine.conf

timeout: 5
default_entry: 2 # Apunta directamente a la entrada 'linux-cachyos' de abajo

/+CachyOS        # Entrada 1: Un directorio (usar /+ para expandir por defecto)
//linux-cachyos  # Entrada 2: La entrada arrancable real
    protocol: linux
    kernel_path: boot():/vmlinuz-linux-cachyos
    cmdline: quiet splash root=UUID=... rw # Parámetros básicos del kernel
    module_path: boot():/initramfs-linux-cachyos.img
```

:::note
`boot():/` se refiere a la raíz de la unidad de arranque.
:::

### Apariencia (Theming)

Puede personalizar la apariencia visual del menú de arranque de Limine:

* **Wallpaper (Fondo de pantalla):** Establezca una imagen de fondo. Los formatos admitidos incluyen BMP, PNG y JPEG.

  ```shell
  # /boot/limine.conf

  wallpaper: boot():/splash.png
  wallpaper_style: stretched # Opciones: 'stretched' (estirado), 'tiled' (mosaico), 'centered' (centrado)
  backdrop: 000000           # Color de fondo (hex RRGGBB) si el estilo es 'centered'
  ```

* **Fonts (Fuentes):** Use un [archivo de fuente personalizado](https://github.com/viler-int10h/vga-text-mode-fonts) y ajuste su tamaño.

  ```shell
  # /boot/limine.conf

  term_font: boot():/custom_font.F16
  term_font_scale: 2x2 # Escala el tamaño de la fuente, útil para pantallas de alta resolución
  ```

* **Colors (Colores):** Modifique los colores del texto y del fondo del terminal.

  ```shell
  # /boot/limine.conf

  term_background: 80000000 # Ejemplo: Negro semitransparente (AARRGGBB)
  # Otras opciones de color como term_foreground, etc., están disponibles.
  ```

### Configuración de la Línea de Comandos del Kernel

En CachyOS, las entradas del kernel en el menú de arranque de Limine se **gestionan automáticamente**. Cuando instala o elimina kernels, el `limine-mkinitcpio-hook` utiliza la utilidad `limine-entry-tool` en segundo plano para actualizar las entradas de arranque.

Aunque las entradas se manejan automáticamente, puede **configurar los parámetros del kernel** (también conocidos como la línea de comandos del kernel) que se pasan al kernel cuando arranca.

1. **Edite el archivo de configuración:** Modifique las variables `KERNEL_CMDLINE` en `/etc/default/limine`. Puede establecer parámetros predeterminados para todos los kernels o parámetros específicos para ciertos nombres de kernel (por ejemplo, `linux-cachyos`).

   ```shell
   # /etc/default/limine

   # Parámetros predeterminados para la mayoría de los kernels
   KERNEL_CMDLINE[default]="quiet splash rd.udev.log_priority=3"

   # Parámetros específicos para el kernel 'linux-cachyos'
   KERNEL_CMDLINE["linux-cachyos"]="quiet splash mitigations=off"

   # Parámetros para las entradas de respaldo (si se generan)
   # KERNEL_CMDLINE[fallback]="..."
   ```

2. **Aplique los cambios:** Después de guardar `/etc/default/limine`, necesita regenerar sus imágenes initramfs y actualizar las entradas de Limine para aplicar los nuevos parámetros del kernel. Ejecute el siguiente comando:

   ```bash
   sudo limine-mkinitcpio
   ```

   Este comando activa el proceso `mkinitcpio`, que incluye el `limine-mkinitcpio-hook`, asegurando que sus cambios en `/etc/default/limine` se incorporen a las entradas de arranque en `/boot/limine.conf`.

## Más información

* [Página de manual de loader.conf](https://man.archlinux.org/man/loader.conf.5)
* [rEFInd: Configurando el gestor de arranque](https://www.rodsbooks.com/refind/configfile.html)
* [Manual de GRUB: Configuración](https://www.gnu.org/software/grub/manual/grub/grub.html#Configuration)
* [Documentación Oficial de Configuración de Limine](https://github.com/limine-bootloader/limine/blob/v9.x/CONFIG.md)
* [Proyecto limine-entry-tool](https://gitlab.com/Zesko/limine-entry-tool)
