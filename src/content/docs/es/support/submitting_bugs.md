---
title: Enviar informes de errores
---

# Describe tu problema

- ¿Qué es lo que no funciona?
- ¿Bajar la versión del paquete X soluciona el problema?
- Usa la función de búsqueda para encontrar problemas similares.
- ¿Has hecho modificaciones por tu cuenta?
  - Ejemplo: `Añadir un indicador adicional en un archivo de modprobe`

# Proporciona los registros

CachyOS proporciona una excelente herramienta para recopilar registros del sistema llamada `cachyos-bugreport.sh`.
Esta herramienta recogerá registros de:

- dmesg
- journalctl
- inxi `(Para recopilar información del hardware)`

Cuando se recopilen los registros, se le pedirá al usuario que decida si quiere subirlos a nuestra página de pegado.

Ejecuta el siguiente comando en la terminal y pega el enlace con los errores en el tema:

```sh
sudo cachyos-bugreport.sh
```

# Enlaces para enviar el informe

- Github: <https://github.com/CachyOS/distribution>
- Foro: <https://discuss.cachyos.org/c/feedback/bugreports/10>
- Discord: [Canal de soporte](https://discord.com/channels/862292009423470592/862294383470051348)
