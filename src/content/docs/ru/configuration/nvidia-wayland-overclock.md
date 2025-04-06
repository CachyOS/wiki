---
title: Простой разгон и/или снижение напряжения видеокарт NVIDIA на CachyOS
description: Легкий разгон и снижение напряжения видеокарт NVIDIA на Wayland
---

В этом руководстве описывается, как разогнать и/или снизить напряжение видеокарт NVIDIA под Linux. Хотя видеокарты NVIDIA не имеют такого широкого набора инструментов, как под Windows (нет MSI Afterburner или прямого контроля над кривой напряжения), все же есть относительно простые способы повысить тактовую частоту или снизить напряжение вашей карты, если вы знаете, как это сделать.

В этом руководстве мы настроим Python-скрипты для настройки различных повышений/смещений и создадим службу для автоматического запуска этих скриптов после загрузки.

## Необходимые условия

- Система CachyOS с видеокартой NVIDIA
- Root-доступ

## Процесс установки

### 1. Подготовка окружения

Откройте терминал по вашему выбору (Konsole, Alacritty и т.д.) и выполните следующие шаги:

1. Переключитесь в режим root:
   ```sh
   sudo -i
   ```

2. Создайте и перейдите в каталог NVIDIA:
   ```sh
   mkdir NVIDIA
   cd NVIDIA
   ```

### 2. Настройка виртуального окружения Python

1. Создайте виртуальное окружение:
   ```sh
   python -m venv venv
   ```

2. Активируйте виртуальное окружение:
   ```sh
   source /root/NVIDIA/venv/bin/activate
   ```

3. Проверьте активацию:
   ```sh
   which pip
   ```
   Он должен вернуть "/root/NVIDIA/venv/bin/pip".

4. Установите необходимые модули:
   ```sh
   pip install nvidia-ml-py pynvml
   ```

5. Деактивируйте виртуальное окружение:
   ```sh
   deactivate
   ```

### 3. Создание скрипта загрузчика

Создайте файл с именем `nvidia-oc.sh` в `/root/NVIDIA/`:

```bash
#!/usr/bin/fish
source /root/NVIDIA/venv/bin/activate.fish
python /root/NVIDIA/nvidia-oc.py
deactivate
```

Сделайте скрипт исполняемым:
```sh
chmod 770 nvidia-oc.sh
```

### 4. Определение диапазонов тактовых частот GPU

Найдите стандартные минимальные и максимальные тактовые частоты вашей карты:

```sh
nvidia-smi -q -d SUPPORTED_CLOCKS | less
```

Запишите верхние и нижние значения тактовой частоты 'Graphics:'.

### 5. Создание Python-скрипта

Создайте файл с именем `nvidia-oc.py` в `/root/NVIDIA/` со следующим содержимым:

```python
from pynvml import *
nvmlInit()

# Это устанавливает GPU для настройки - если это выдает вам ошибки или у вас несколько GPU, установите значение 1 или попробуйте другие значения.
myGPU = nvmlDeviceGetHandleByIndex(0)

# Установите минимальную и максимальную тактовую частоту ядра
nvmlDeviceSetGpuLockedClocks(myGPU, MINCLOCK, MAXCLOCK)

# Смещение тактовой частоты (по умолчанию 0)
nvmlDeviceSetGpcClkVfOffset(myGPU, CLOCKOFFSET)

# Смещение тактовой частоты памяти (по умолчанию 0)
nvmlDeviceSetMemClkVfOffset(myGPU, MEMOVERCLOCK)
```

Замените `MINCLOCK`, `MAXCLOCK`, `CLOCKOFFSET` и `MEMOVERCLOCK` соответствующими значениями.

### 6. Тестирование конфигурации

Запустите скрипт:
```sh
/root/NVIDIA/nvidia-oc.sh
```

Мониторинг GPU:
```sh
watch nvidia-smi -q -d VOLTAGE,CLOCK
```

Протестируйте свою конфигурацию в играх или других задачах, интенсивно использующих GPU.

### 7. Создание службы Systemd

Создайте файл с именем `nvidia-oc.service` в `/etc/systemd/system/`:

```ini
[Unit]
Description=Настройка параметров Nvidia
Wants=basic.target

[Service]
Type=oneshot
ExecStart=/root/NVIDIA/nvidia-oc.sh

[Install]
WantedBy=network.target
```

### 8. Включение и запуск службы

```sh
systemctl daemon-reload
systemctl enable nvidia-oc.service
systemctl start nvidia-oc.service
```

Проверьте статус службы:
```sh
systemctl status nvidia-oc.service
```

## Заключение

Теперь у вас есть пользовательские тактовые частоты и, возможно, снижение напряжения для вашей видеокарты NVIDIA при загрузке. Не забудьте тщательно протестировать и отрегулировать значения по мере необходимости для стабильности и производительности.
