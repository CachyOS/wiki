---
title: Instalador GUI
description: Changelogs do Calamares e da ISO Live GUI
sidebar:
  order: 1
---
26.01

**Funcionalidades:**

* **Instalador:**
  * Movida a seleção do bootloader para o Calamares; a gestão está agora consolidada num único pacote.
  * A deteção da arquitetura é agora realizada **antes** da instalação do sistema base para reduzir o tamanho do download.
  * O GRUB utiliza agora LUKS2 para encriptação.
  * Passado o argumento `--needed` ao pacman para evitar instalar pacotes repetidos.
  * Utilização de compressão de nível único em NVMe para Btrfs.
  * Removidas dependências do xorg em ambientes de desktop Wayland.
* **ISO:**
  * Alteração para o `plasma-login-manager` no ambiente da ISO.
  * A ISO contém agora os kernels Stable e LTS. O kernel Stable é selecionado por predefinição.
  * Alterada a sessão da ISO de X11 para Wayland.
* **Netinstall:**
  * As instalações Plasma utilizam agora o `plasma-login-manager` em vez do SDDM.
  * O Niri utiliza agora o `noctalia-shell` e dotfiles atualizados.
  * Limpeza do processo de instalação do GNOME.
* **Slides:** Corrigidos erros ortográficos nos slides do Calamares e adicionado um novo slide a apresentar a Wiki.
* **Mirrors:** A página de estado dos mirrors (<https://packages.cachyos.org/mirrors>) apresenta agora o estado de sincronização dos mirrors do CachyOS.
* **cachyos-settings:** Ativado o `EnableAggressiveVblank` para o módulo NVIDIA. Isto reduz o tempo gasto na metade superior da interrupção para interrupções de ecrã de baixa latência.
* **chwd:**
  * Instala o `nouveau-fw` para ativar o suporte VA-API no Nouveau para placas NVIDIA da família Kepler.
  * Adicionado suporte AI-SDK para vários novos GPUs AMD.
  * Substituído o HHD pelo `steamos-manager` e `inputplumber`.
* **Proton-CachyOS:**
  * Adicionado suporte para FSR4 MLFG (Machine Learning Frame Generation); ativado automaticamente ao usar `PROTON_FSR4_[RDNA3_]UPGRADE`.
  * Adicionado suporte ao módulo `d7vk`. Pode ser ativado via `PROTON_DXVK_DDRAW=1`.
  * Importados patches de feedback háptico do DualSense.
  * Adicionado `WINE_BLOCK_HOSTS` para impedir o Wine de se ligar a domínios específicos.
  * Ativação automática de `ENABLE_HDR_WSI=1` ao usar `winewayland` em dGPUs NVIDIA.
  * Corrigidos problemas de layout de teclado ao usar `winewayland.drv`.
  * Removido um patch antigo que causava degradação nos 1% low FPS.
  * Aplicado patch no `protonfixes` para melhor gestão da seleção de predefinições DLSS e redirecionamento de `libxess_dx11.dll`.
  * O proton-cachyos-slr é agora usado por predefinição no “gaming-meta”. A versão nativa continuará a ser suportada.


**Correções:**

* **Limine:** Aumentado o tamanho da partição de boot para 4192MB para acomodar os requisitos elevados do `limine-snapper-sync`.
* **Instalador:** * O instalador agora bloqueia/impede o avanço se a partição EFI for demasiado pequena ao usar as opções "ao lado de" ou "substituir partição".
  * Corrigido um problema em que, ao selecionar um desktop e avançar um passo, se voltasse atrás e selecionasse um desktop diferente, resultava na seleção de ambos.
* **chwd:** Removida a variável de ambiente que forçava o `libva-nvidia-driver`, pois causava problemas em sistemas com duas GPUs.
* **cachyos-hello**: Corrigido um problema em que o cachy-update aparecia como desativado quando estava ativo.
* **Comandos (Controller)**: Corrigida a entrada de vários comandos devido à atualização das regras de entrada para as mais recentes.
* **Framework 16 (Zen5)**: Corrigido um problema em que a sessão bloqueava ao escrever no Calamares.

25.11
----

**Funcionalidades:**

* **ISO/Instalador:** Adicionados Orca e espeak-ng para melhor acessibilidade.
* **initcpiocfg:** Ativado o hook do systemd em configurações suportadas.
* **Netinstall:** Os dotfiles do Hyprland foram removidos.
* **pacstrap:** Instala o `bcachefs-dkms` se o `bcachefs` for selecionado como sistema de ficheiros.
* **Calamares:** Adicionado suporte para plasma-login-manager e cosmic-greeter.
* **Cosmic:** Alterado de SDDM para cosmic-greeter.
* **Tipos de Letra:** Fontes melhoradas para utilizadores asiáticos.
* **chwd:**
  * Instala `intel-media-sdk` e `vpl-gpu-rt` em GPUs suportadas.
  * Ativado Nouveau NvBoost para GPUs Fermi.
  * Removido suporte para o controlador legado NVIDIA 390xx.
  * Adicionado suporte para Xbox ROG Ally/X.
* **cachyos-hello:**
  * Removido o instalador de pacotes interno; abre agora o instalador de pacotes do CachyOS.
  * Adicionada interface CLI para a funcionalidade GUI.
  * Várias correções na verificação da versão da ISO.
* **cachyos-settings:** zram-generator: Removida a compressão para páginas incompressíveis.
* **Proton-CachyOS:**
  * Adicionado `dxvk-gplasync` como DXVK alternativo. Pode ser ativado via `PROTON_DXVK_GPLASYNC=1`.
  * Adicionado `DISABLE_LAYER_MESA_ANTI_LAG` ao usar `PROTON_FSR4_UPGRADE`.
  * Incluídas múltiplas **correções Wayland** (offset de ecrã inteiro, teclas mortas, comportamento de DPI, ajustes de saída de vídeo) e melhorias no `winewayland.drv`.
  * Introduzido e ajustado o comportamento da **cache de shaders por jogo** e caches de shaders maiores (especialmente para NVIDIA).
  * Adicionadas atualizações para upscalers FSR3 e XeSS.

**Correções:**

* **Limine:**
  * Corrigida a instalação do Limine sem registo de entrada em UEFIs corrompidas.
  * Utiliza a variante systemd do hook `btrfs-overlayfs`.
* **Calamares:** Removido o `attr2` como opção nas definições de montagem XFS.
* **chwd:** Desativada a interface Ethernet USB do chip T2.

25.08
----

**Funcionalidades:**

* **Serviços:** Adicionado **packages.cachyos.org**, uma pesquisa de pacotes equivalente ao site do Arch Linux, com a opção de excluir pacotes do CachyOS.
* **Kernel:** O instalador instala agora adicionalmente o **linux-cachyos-lts** como kernel secundário/de reserva após a instalação. Continuamos a recomendar o uso do kernel Stable.
* **ISO:** Alterado o kernel da ISO live de Stable para LTS devido a problemas persistentes com o kernel Stable, melhorando a fiabilidade do arranque.
* **Ambiente de Trabalho:** Adicionado **Niri** como opção de desktop, incluindo alguns dotfiles pré-configurados.
* **NVIDIA:** Ativado o modo de suspensão **S0ix** em hardware suportado para standby moderno de baixo consumo.
* **GRUB:** Snapshots de arranque são agora automaticamente ativados e configurados quando o sistema de ficheiros root utiliza **Btrfs**.
* **Ajustes (Tweaks):** Integrado o **Cachy-Update** na página de Ajustes da aplicação Welcome. O Cachy-Update adiciona um temporizador e um indicador na bandeja do sistema para notificar os utilizadores sobre atualizações e permite atualizar com um clique.
* **Proton-CachyOS:**
    - Adicionado descarregador para DLLs DLSS (versão **310.3.0**), semelhante ao descarregador FSR4. Utiliza a variável de ambiente `PROTON_DLSS_UPGRADE=1` para ativá-lo.
    - Adicionada a variável de ambiente `PROTON_DLSS_INDICATOR=1` para ativar o HUD do DLSS.
    - Adicionado descarregador para DLLs XeSS (versão **2.1.0**), semelhante ao descarregador DLSS. Utiliza a variável de ambiente `PROTON_XESS_UPGRADE=1` para ativá-lo.
    - Adicionado `PROTON_FSR4_RDNA3_UPGRADE` para GPUs RDNA3. Realiza o mesmo que o `PROTON_FSR4_UPGRADE` mas também define outras variáveis necessárias.
    - Adicionadas implementações de bibliotecas Nvidia em falta no Proton. Deve ajudar a ativar opções como PhysX em jogos onde estas estavam desativadas. Também podem ser ativadas individualmente usando `PROTON_NVIDIA_NVCUDA`, `PROTON_NVIDIA_NVENC`, `PROTON_NVIDIA_NVML` e `PROTON_NVIDIA_NVOPTIX`.
    - Adicionada cache de shaders por jogo, ativada por predefinição, pode ser desativada com `PROTON_LOCAL_SHADER_CACHE=0`. Os shaders serão armazenados em `<steamlibrary>/shadercache/<appid>` para cada jogo, de forma semelhante a quando o pré-carregamento de shaders está ativado. Poderá ocorrer stuttering enquanto a cache de shaders de cada jogo é reconstruída, mas os shaders em cache não serão eliminados devido ao tamanho limitado da cache.
    - Adicionado [dxvk-sarek](https://github.com/pythonlover02/DXVK-Sarek) como substituto opcional do DXVK para GPUs antigas que não suportam corretamente Vulkan 1.3. Utiliza o ramo `async`, por isso NÃO DEVE ser usado em jogos com anti-cheat ou jogos multijogador em geral. Fica o aviso. Utiliza `PROTON_DXVK_SAREK=1` para ativar.
    - Adicionado `PROTON_FSR3_UPGRADE` para atualizar DLLs FSR 3.1 para versões mais recentes.

**Correções:**

* **Limine:**
    - Corrigido o erro `limine bios-install /dev/sdaX` ao selecionar o ponto de montagem **/boot** como local de arranque em sistemas MBR.
    - Corrigido o valor não inicializado do caminho do `bootLoader`, que causava falhas de instalação em sistemas MBR quando o local do bootloader não era explicitamente selecionado.
    - Adicionado um aviso sobre o uso da flag **bios-grub** na partição de boot, que pode causar o erro “Stage 3 file not found”.
    - Corrigido o dual-boot nativo (out-of-the-box) com Windows para instalações BIOS.
    - Corrigida a falha no arranque de snapshots Btrfs ao usar **GNOME (GDM)**.
* **Lançar Instalador:** Adicionados IPs de reserva para a verificação online caso o ping a **cachyos.org** falhe.

25.07
----

**Funcionalidades:**

- **Shell**: A shell do utilizador pode agora ser escolhida no momento da instalação entre fish, zsh e bash. Fish continua ativa por predefinição.
- **chwd**: Instala o plasma-x11 para controladores (drivers) NVIDIA legados.
- **Netinstall**: Adicionado o `fwupd` ao KDE Plasma e Gnome.
- **mesa-git**: Adicionado suporte para AMD Anti Lag.
- **firefox**: Introduzida uma alternativa ao Firefox chamada "firefox-pure", que inclui melhorias com o perfil userjs. Adicionalmente, foi adicionado o "cachyos-firefox-settings", que pode ser instalado sobre o Firefox.
- **Proton-CachyOS**:
  - Importados commits upstream do wine-wayland.
  - Adicionada a variável de ambiente "PROTON_FSR4_UPGRADE", que descarregará automaticamente a DLL FSR4 mais recente e a substituirá para uma atualização automática em jogos que suportem FSR 3.1.
  - Adicionados vários patches relacionados com Wayland vindos do Wine upstream, lançados após o Wine 10.0.
  - Adicionados patches para ajudar numa melhor integração de anti-cheat. Agradecimentos ao NelloKudo.
  - Adicionados patches para Anti Lag 2 da AMD para vkd3d-proton e wine.
  - Atualizado o umu-protonfixes para o commit mais recente.

**Correções:**

- **Keyring**: Melhorada a gestão da instalação do chaveiro (keyring) para evitar problemas, com a inclusão de várias tentativas.
- **systemd-oomd**: Desativado o systemd-oomd, uma vez que apresentava problemas ao gerir isto em conjunto com o le9 e encerrava aplicações prematuramente.

**Changelog para Handheld Edition:**

- **handheld-settings**: Importados vários ajustes (tweaks) do SteamOS para a Handheld Edition.
- **pipewire**: Definido o quantum mínimo para 256.
- **SteamDeck-OLED**: Instalação do galileo-mura para a Steam Deck OLED.
- **Lenovo Legion Go S**: Adicionado suporte para a Lenovo Legion Go S.

25.05
----

**Funcionalidades:**

- **ISO**: Adicionada deteção automática durante o arranque da ISO para identificar a GPU NVIDIA do sistema e carregar o módulo apropriado (ex: nvidia-open, nvidia), oferecendo melhor suporte para a série 10xx e anteriores.
- **Plymouth**: Adicionada uma nova animação Plymouth.
  - Agradecimentos ao Eren ([https://github.com/erenyldz89](https://github.com/erenyldz89)) pelo trabalho neste componente!
- **Navegador**: O Cachy-Browser foi descontinuado. Agora fornecemos o Firefox como o navegador predefinido pré-instalado. Um guia para migrar perfis para o Firefox (e derivados) pode ser encontrado aqui: [https://wiki.cachyos.org/support/faq/#migrating-your-profile-from-cachy-browser-to-firefox](https://wiki.cachyos.org/support/faq/#migrating-your-profile-from-cachy-browser-to-firefox)
- **netinstall**: Adicionados kcalc, filelight, plymouth-kcm e kio-admin à instalação KDE.
- **mkinitcpio**: Desativado o initramfs de fallback por predefinição. Isto irá poupar uma quantidade significativa de espaço.
- **Mirrors**: Adicionado um novo mirror de 10 Gbps no Bangladesh. Agradecimentos ao Limda por alojar este mirror!
- **Proton**:
  - Rebase de quase todos os patches do **Proton CachyOS 9.0**.
  - Ativado o controlador Wayland para builds Steam Linux Runtime. Ative com `PROTON_ENABLE_WAYLAND=1`. Agradecimentos ao [GloriousEggroll](https://github.com/GloriousEggroll) por tornar isto possível.
  - Adicionados vários patches relacionados com Wayland do Wine upstream lançados após o Wine 10.0.
  - Corrigidos vários problemas com o controlador Wayland e jogos Vulkan. Agradecimentos ao [Etaash-mathamsetty](https://github.com/Etaash-mathamsetty) por todo o trabalho árduo.
  - Adicionada uma implementação "stub" para `amdxc64.dll` para ativar o FSR4. Use `FSR4_UPGRADE=1` para atualizar jogos FSR3.1 para FSR4. Agradecimentos novamente ao [Etaash-mathamsetty](https://github.com/Etaash-mathamsetty). Instruções: [https://github.com/Etaash-mathamsetty/wine-builds/releases/tag/fsr4](https://github.com/Etaash-mathamsetty/wine-builds/releases/tag/fsr4)
  - Adicionados patches relacionados com DualSense para uma funcionalidade de deteção de dispositivo de áudio mais completa para haptics baseados em som via cabo. Alguns jogos que dependiam desse comportamento específico deverão agora ter essa funcionalidade. Agradecimentos à [ClearlyClaire](https://github.com/ClearlyClaire) pelos patches originais e ao [Exotic0015](https://github.com/Exotic0015) por investigar o assunto desde o **Proton CachyOS 9.0**. Upstream: [https://gitlab.winehq.org/wine/wine/-/merge_requests/7238](https://gitlab.winehq.org/wine/wine/-/merge_requests/7238)
  - Removido o patch para o Dragon Age Inquisition, pois não estava a funcionar. Por favor, utilize o **Proton CachyOS 9.0** por agora com esse jogo.
- **GRUB**: Adicionado um novo tema para o GRUB. Agradecimentos ao [diegons490](https://github.com/diegons490/cachyos-grub-theme).

**Correções:**

- **Mirrors**: Corrigido um problema onde utilizadores na Rússia já não conseguiam instalar. Isto foi mitigado ao não utilizar o CDN77, que a Rússia começou a bloquear.
- **kde-settings**: Desativado o ícone do Discover na barra de tarefas.
- **ddcutil**: Lançada a pré-versão 2.2.1 do ddcutil para corrigir um problema onde as GPUs AMD bloqueavam ao ver vídeos no YouTube.

**Changelog para Handheld Edition:**

- **os-branch**: O Game Mode mostra agora corretamente que o CachyOS Linux está a ser utilizado.
- **áudio**: Atualizados os perfis de convolver.
- **steamos-manager**: Utilizado para gestão de clock da GPU e TDP, atualizações de BIOS/dock, manutenção de dispositivos de armazenamento, formatação de armazenamento externo e limite de carga da bateria para a Steam Deck.
- **steamos-powerbuttond**: Este componente substitui o powerbuttond padrão para uma melhor experiência de suspensão (sleep).
- **jupiter-hw-support**: Atualizado para 20250501.

25.04
----

**Funcionalidades:**

- **occt**: Adicionado o OCCT à ISO para disponibilizar um ambiente live para testes de stress.
  - Agradecimentos ao Marek por sugerir esta ideia!

**Correções:**

- **kernel**: Corrige o crash de módulos em portáteis Asus.
- **limine**: O Limine inclui agora o `mkinitcpio-limine-hook` instalado e criará automaticamente entradas no bootloader.

**Changelog para Handheld Edition:**

- **áudio**: Adicionados perfis de áudio para o ROG Ally X e Legion Go.
- **gamescope**: Substituído o gamescope-plus pelo gamescope oficial (upstream).

25.03
----

**Funcionalidades**:

- **Bootloader**: Adicionado suporte para o bootloader Limine.
- **Bootloader**: Adicionado suporte para snapshots automáticos no bootloader Limine.
- **Samba**: Adicionado o pacote "cachyos-samba-settings" para configurar facilmente uma montagem Samba.
- **NVIDIA**: Reativado o Firmware GSP para o módulo NVIDIA de código fechado.
- **Kernel**: Adicionado suporte para o controlador Asus Armoury.
- **Secure Boot**: Melhorado o script "sbctl-batch-sign" para assinar apenas os ficheiros pretendidos.
- **udev**: Revertido o uso do `ntfs3` como controlador predefinido para partições NTFS.
  - Informação: O uso do controlador de Kernel NTFS3 como padrão resultou em problemas para alguns utilizadores. Por conseguinte, revertemos a alteração.
- **wine**: Wine e Wine-Staging agora usam WoW64 e NTSync por predefinição.
- **scx-manager**: Separado o gestor GUI do sched-ext do Kernel Manager para uma aplicação própria.
- **Suporte de Hardware**: Adicionado suporte para RDNA4, RTX 5070 Ti e 5070.
- **Definições**: Adicionado suporte para o DLSS Swapper - trata-se de um script que atualiza e utiliza automaticamente a versão e predefinição (preset) mais recente do DLSS.
- **Atualizações de Pacotes**: linux-cachyos 6.14.0, NVIDIA 570.133.07, Gnome 48, Plasma 6.3.3, mesa 25.0.2, linux-api-headers 6.14.0, linux-tools 6.14.0.

**Correções**:

- **initcpiocfg**: Removida a adição do módulo "crc32c-intel" ao mkinitcpio - este módulo foi descontinuado e agora utiliza-se o módulo "crc32c" por predefinição.
- **chwd**: Desativado o descarregamento (offloading) do brcmfmac em MacBooks T2.
- **chwd**: Não instalar o controlador NVIDIA 390.xx em portáteis.

25.02
----

**Funcionalidades**:

- **Kernel**:
  - A Otimização Propeller é agora aplicada ao kernel **linux-cachyos** padrão para todas as arquiteturas disponíveis.
    - **Nota**: Em combinação com AutoFDO, isto pode melhorar o desempenho em cerca de 10%, dependendo da carga de trabalho.
- **NVIDIA**: Adicionado suporte para a arquitetura Blackwell.
- **ISO**: Utilização do módulo nvidia-open como predefinição para fornecer suporte Blackwell. Utilizadores com GPUs anteriores à arquitetura Turing devem usar a primeira opção de arranque ou a de reserva (fallback).
- **Definições**: Ativado o "tocar para clicar" (tap-to-click) para sessões X11 por predefinição.
- **udev**: Uso do ntfs3 como controlador (driver) predefinido para partições NTFS.
- **game-performance**: Desativado o protetor de ecrã durante a execução de jogos.
- **kernel-manager (sched-ext)**: Adicionado suporte para o modo servidor.
- **kernel**: Adicionadas correções para a funcionalidade de núcleos preferenciais da AMD (preferred core).
- **chwd**: Reintroduzida a solução temporária (workaround) para RTD3.
- **Atualizações de Pacotes**: linux-cachyos 6.13.0, NVIDIA 570.86.16, LLVM 19, glibc 2.41, mesa 24.3.4.

**Correções**:

- **chwd**: Corrigido um problema em que portáteis híbridos com hardware Intel e NVIDIA não conseguiam usar a sua GPU no DaVinci Resolve.
- **glibc**: Adicionada uma correção para a vulnerabilidade CVE-2025-0395.
- **kernel-manager**: Tentativa de instalação do módulo NVIDIA pré-compilado, caso esteja disponível para o kernel padrão do Arch.
- **kernel-manager**: Adicionada uma verificação extra para evitar substituir o valor no caso de um módulo não estar disponível.

**Changelog para Handheld Edition:**

- **hooks**: Permitida novamente a utilização de versões do Proton compiladas nativamente.
- **diversos**: Várias atualizações e correções.

24.12
----

**Funcionalidades**:

- **Kernel**:
  - AutoFDO é agora aplicado ao kernel `linux-cachyos` padrão para todas as arquiteturas disponíveis.
    - **Nota**: As melhorias de desempenho são mínimas por agora devido a limitações atuais. A fusão de perfis requer o LLVM 19, do qual a Otimização Propeller depende. Prevemos que o LLVM 19 e perfis mais otimizados estejam disponíveis até ao final do ano, após a adoção do LLVM 19 pelo Arch Linux.
- **chwd**: O Rusticl está agora configurado corretamente.
- **chwd**: Melhoria no registo de erros (logging) durante as chamadas de hooks.
- **chwd**: Corrigida a seleção de controladores VAAPI.
- **cachyos-settings**: Adicionado um script para facilitar a execução de aplicações via Zink.
- **Configuração Sysctl**: Remodeladas e otimizadas várias definições.
- **Kernel Manager**: Adicionado suporte para `scx_loader`, permitindo a troca nativa de agendadores (schedulers).
- **Instalador**: O serviço Bluetooth está agora ativado por predefinição.
- **Netinstall**:
  - Adicionado `wireless-regdb` aos pacotes instalados.
    - Isto configura a ligação para usar os canais apropriados e desbloqueia canais adicionais, melhorando potencialmente a velocidade da internet.
    - **Nota**: Uma região genérica é definida por predefinição; recomenda-se a personalização para a sua região para um desempenho ideal.
- **Atualizações de Pacotes**: NVIDIA 565.77, linux-cachyos 6.12.6, mesa 24.3.2, scx-scheds 1.0.8, zfs 2.2.7.

**Correções de Erros**

- **Instalador**: Os registos de instalação já não abrem janelas de terminal de depuração.
- **Gestão de Partições**:
  - Definições adequadas de `umask` garantem que a diretoria `/boot` seja inacessível sem permissões suficientes.
- **Lançar Instalador**: As verificações de conectividade à Internet foram corrigidas.

**Changelog Handheld Edition:**

- Atualizados os pacotes relacionados com dispositivos portáteis (handhelds).
- Corrigido o problema com a gestão de perfis de energia.
- Adicionado suporte para WiFi 6.

24.11
----

**Funcionalidades:**

- **thp-shrinker**: Definido o valor `max_ptes_none` para 80% para páginas preenchidas com zeros. Isto reduzirá o uso de memória quando o THP (Transparent Huge Pages) é usado em modo "always", mantendo o mesmo desempenho.
- **NVIDIA**: O Firmware GSP é agora desativado automaticamente se o utilizador mudar por conta própria para o controlador fechado (closed driver).
- **chwd**: NVIDIA: O serviço `nvidia-powerd` é agora ativado em portáteis, para alcançar o TDP máximo disponível.
- **proton-cachyos**: O DLSS Frame Generation está agora a funcionar. Espera-se que isto também funcione no futuro no Proton oficial (upstream).
- **kernel**: Aplicado o AMD Cache Optimizer. Utilizadores com CPUs de dois CCDs x3d podem agora alternar entre preferência por núcleos de frequência ou núcleos de cache.
- **kernel**: amd-pstate: Retroportadas (backported) correções de desempenho do amd-pstate para Strix Point.
- **kernel**: Adicionadas correções oficiais para os problemas de TDP em GPUs AMD RDNA2 e RDNA3.
- **kernel**: Adicionadas correções de timing para monitores com configuração 5120x1440x240.
- **kernel**: Kernel experimental otimizado com AutoFDO disponível no repositório como "linux-cachyos-autofdo".
- **ISO**: Adicionada verificação para detetar se o utilizador está a correr a Handheld Edition, emitindo um aviso caso iniciem a instalação num dispositivo não suportado.
- **ISO**: Adicionada verificação para garantir que o utilizador está a usar a ISO mais recente; caso contrário, será emitido um aviso.

**Correções de Erros:**

- **refind**: Particionamento: alterado o layout de 3 partições para 2 partições.
- **netinstall**: Adicionado o `kdeplasma-addons` à instalação do Plasma.
- **calamares**: Corrigido um problema ao particionar com uma partição swap.

**Changelog Handheld Edition:**

- O suporte para a Rog Ally X deverá ter sido melhorado.

24.10
----

**Funcionalidades:**

- **Atualizações de Pacotes**: linux-cachyos 6.11.1, mesa 24.2.4, scx-scheds 1.0.5, python 3.12.7.

**Correções de Erros:**

- **sddm**: Atualizado para uma versão mais recente do sddm para corrigir inícios de sessão em sessões Wayland.
- **ISO**: Adicionado `xf86-video-amdgpu` para corrigir o carregamento da sessão gráfica em certas configurações.
- **chwd**: Corrigida a reinstalação de perfis.

24.09
----

**Funcionalidades:**

- **Pacotes**: Otimização de vários pacotes com PGO, como LLVM, Clang, svt-av1 e nodejs. Isto resultou, por exemplo, num compilador Clang 10% mais rápido.
- **Repositório**: O repositório é agora sincronizado e atualizado com maior frequência, o que significa ainda menos atrasos. O intervalo de sincronização foi reduzido de 3 em 3 horas para cada hora.
- **Repositório**: A partir de 27.09.2024, os pacotes compilados com `-fpic` ativarão automaticamente `-fno-semantic-interposition`. Isto pode proporcionar melhorias de desempenho em muitos pacotes.
- **zlib-ng**: É agora utilizado como substituto da zlib.
- **sddm**: Na instalação KDE, o sddm passará a usar Wayland como compositor por predefinição. # Fornecer alterações de migração no post de lançamento.
- **cachyos-settings**: O NetworkManager utiliza agora o `systemd-resolved` como backend, o que ajuda no caching de DNS.
- **cachyos-settings**: Utilização do `time.google.com` como servidor de sincronização de tempo para evitar problemas em certas configurações.
- **gcc**: Adicionadas correções para o tuning de znver5.
- **gcc**: Selecionados patches e flags (cherry-picked) do Clear Linux.
- **glibc**: Adicionados patches "evex", bem como seleções do Clear Linux.
- **wiki**: A Wiki recebeu várias adições e remodelações.
- **chwd**: Simplificação do manuseamento de dispositivos.
- **chwd**: Todos os perfis são agora especificamente desenhados para dispositivos PCI.
- **chwd**: Adicionado `--autoconfigure` para gerir automaticamente a instalação de controladores.
- **Atualizações de Pacotes**: linux-cachyos 6.11.0, mesa 24.2.3, Plasma 6.1.5, NVIDIA 560.35.03, calamares 3.3.10, QT 6.7.3.

**Correções de Erros:**

- **Lançar Instalador**: Adicionadas correções para sincronizar o relógio de hardware antes de iniciar a instalação.
- **calamares**: Adicionada correção para a desmontagem do sistema de ficheiros após a instalação.
- **keyring**: Limpeza e recriação do chaveiro antes de iniciar a instalação; isto corrige problemas raros com o chaveiro.
- **sysctl**: Core dumps foram novamente ativados.
- **chwd**: Removido o `libva-nvidia-driver` do perfil PRIME para evitar potenciais conflitos e melhorar a compatibilidade com software como o Spectacle.
- **cachyos-settings**: Adicionada solução temporária para crashes do GNOME em Wayland.
- **cachyos-fish/zsh-config**: Removidos ajustes específicos para Wayland.

**Changelog para Handheld Edition:**

- **Ally/Ally X**: O HHD foi substituído pelo inputplumber, uma vez que o hhd não utiliza o controlador de kernel corretamente, resultando em problemas.
- **Pacotes**: Atualização de pacotes relacionados com dispositivos portáteis.

24.08
----

**Funcionalidades:**

- **chwd**: NVIDIA utiliza agora o módulo open como predefinição para placas suportadas.
- **Ambiente de Trabalho**: Adicionado o Cosmic Desktop Environment às opções de instalação.
- **NVIDIA**: O controlador 560 Beta mais recente é agora o predefinido; egl-wayland corrigido para resolver crashes no Firefox e outras aplicações.
- **mirrors**: O CDN77 patrocinou o CachyOS com Object Storage apresentando uma cache mundial, melhorando significativamente as velocidades de ligação para os utilizadores.
- **mirrors**: O CachyOS fornece agora o seu próprio mirror do Arch Linux para evitar problemas de sincronização, definido como predefinido durante a instalação juntamente com mirrors de reserva (fallback).
- **SecureBoot**: Introduzido script e tutorial na Wiki para suporte facilitado ao Secure Boot.
- **cachy-chroot**: Adicionada montagem automática via fstab para chroot simplificado.
- **cachy-chroot**: Implementado suporte para Encriptação LUKS.
- **kernel-manager**: Adicionado suporte para definir flags sched-ext na configuração do sched-ext.
- **kernel-manager**: Introduzida a opção para compilar o nvidia-open.
- **kernel-manager**: Adicionada opção para lembrar as últimas opções utilizadas na página de configuração.
- **Atualizações de Pacotes**: linux-cachyos 6.10.5, mesa 24.2.0, Plasma 6.1.4, NVIDIA 560.31.02.

**Correções de Erros:**

- **chwd**: Melhorada a deteção do perfil PRIME baseada no nome do dispositivo.
- **chwd**: Removida a solução temporária (workaround) para RTD3 devido a problemas em algumas configurações.
- **cachyos-rate-mirrors**: Desativada a classificação de mirrors ao correr na Live ISO.
- **cachy-chroot**: Corrige um crash quando uma partição não tinha um fstype ou uuid válido (ex: Partição de Recuperação da Microsoft).
- **calamares**: Refatorizada a inicialização do chaveiro (keyring).
- **kernel-manager**: Corrigido o suporte para compilar pkgbase personalizado com kernels LTO e módulos ativos.
- **kernel-manager**: Corrigido o atraso na solicitação da palavra-passe.
- **ISO**: Substituído `radeon.modeset=1` por `amdgpu.modeset=1` para GPUs modernas.
- **game-performance**: Evitada a falha quando o perfil está indisponível.

**Changelog para Handheld Edition:**

- **suporte de dispositivos**: Adicionado suporte para Ally X, agradecimentos a Luke Jones.
- **libei**: Implementado suporte para libei, substituindo a libextest.
- **packagekit**: Bloqueada a instalação do packagekit para evitar problemas com atualizações do sistema via Discover.
- **hook**: Adicionado pacman-hook para entrar em conflito com versões do Proton compiladas nativamente, evitando potenciais problemas.
- **Atualizações**: Atualizados o jupiter-fan-control, steamdeck-dsp e o firmware da Steam Deck.

24.07
----

**Funcionalidades:**

- **Repositório**: Introdução do repositório otimizado para Zen 4, que será utilizado para CPUs Zen4 e Zen5.
- **ISO**: Adicionada verificação automática de arquitetura para o repositório Zen4/Zen5.
- **chwd**: Adicionado suporte GC para GPUs AMD, o que ajuda na deteção de GPUs com suporte oficial ROCm.
- **chwd**: Utilização do `libva-nvidia-driver` em placas suportadas.
- **ksmctl**: Introduzida ferramenta para ativar/desativar KSM: `ksmctl --enable`.
- **kernel**: Para o kernel "linux-cachyos", está agora disponível um pacote "linux-cachyos-dbg", que contém um vmlinux não despido (unstripped) para fins de depuração.
- **kernel**: O "amd cpb boost" está agora disponível e o `power-profiles-daemon` foi corrigido; se o perfil "powersave" estiver definido, o boost será desativado em CPUs AMD.
- **kernel**: Adicionado patch de poupança de energia para SoCs AMD na reprodução de vídeo.
- **kernel-manager**: Adicionado suporte para gerir agendadores (schedulers) sched-ext e obter informações via GUI.
- **steam/proton**: Existe agora um script "game-performance", que pode ser adicionado às opções de lançamento do Steam.
- **power-profiles**: Em CPUs com suporte AMD Pstate, a frequência linear mais baixa é agora definida para um valor superior, o que pode melhorar a latência e os 1% lows.
- **kwin**: Adicionado back-port para tearing (sincronização vertical desativada), devidamente testado. Em NVIDIA, apenas funciona em aplicações nativas Wayland.
- **netinstall**: O Cutefish foi removido como Ambiente de Trabalho instalável.
- **Mirrors**: Adicionados mirrors da Áustria e China; o mirror da China é alojado pela TUNA University. Isto deverá ajudar muitos utilizadores na China.
- **Atualizações de Pacotes**: linux-cachyos 6.9.9, mesa 24.1.3, NVIDIA 555.58.02, Plasma 6.1.2, LLVM 18.1.8.

**Correções de Erros:**

- **ISO**: Definido `copytoram` como "auto" em vez de "yes".
- **ISO**: Corrigida a suspensão (sleep) na ISO Live para portáteis.
- **Lançar Instalador**: Instalação do `archlinux-keyring` mais recente antes de iniciar a instalação, para evitar problemas ao obter o chaveiro dentro do chroot.
- **Classificação de Mirrors**: Classifica apenas mirrors de Tier 1 no momento da instalação.
- **pacman.conf**: Removido repositório pacman não utilizado.
- **cachy-chroot**: Não mostra subvolumes `.snapshot`.
- **Calamares**: Não utiliza o módulo "Preservefiles", devido a relatos de problemas por parte dos utilizadores.

**Changelog para Handheld Edition:**

- Adicionado ficheiro de configuração para aplicar escalas diferentes: `/home/$USER/.config/deckscale`.
- Troca de GameMode mais robusta.
- Atualizado Firmware de Wifi/Bluetooth para a Steam Deck.
- Implementada montagem automática (Auto Mount) para o GameMode.
- Adicionados "quirks" de gamescope-session para Topologia de CPU em Wine, HDR e Retroiluminação (Backlight).
- Corrigida a Seleção da Taxa de Atualização.
- Atualizados jupiter-hw-support, steamdeck-dsp, jupiter-fan-control, gamescope-session-git.

24.06
----

**Funcionalidades:**

- **chwd**: Introduzida a deteção de hardware de consolas portáteis (handheld).
- **chwd**: Introduzido suporte para MacBooks T2.
- **chwd**: Adicionada deteção de controladores de rede.
- **Instalação**: Adicionado suporte para MacBook T2.
- **ISO**: Adicionado o `cachy-chroot`. Este é um script que ajuda o utilizador a entrar em ambiente chroot no sistema.
- **ISO**: Transição para Microcode Hooks; isto requer a utilização da versão mais recente do Ventoy (1.0.98).
- **ISO**: Ativado o `copytoram`; isto já não precisa de estar desativado porque deixámos de fornecer a instalação offline.
- **Sistema de Ficheiros**: O BTRFS é agora o sistema de ficheiros selecionado por predefinição.
- **netinstall**: Utilização do `ufw` em vez do `firewalld`.
- **Calamares**: Atualização dos slides de branding.
- **Slides**: Atualizados com as alterações mais recentes.
- **Atualizações de Pacotes**: linux-cachyos 6.9.3, mesa 24.1.1, xwayland 24.1, NVIDIA 555.52.04, Plasma 6.0.5.

**Correções de Erros:**

- **Calamares**: umount: Ativado o modo de emergência novamente.
- **Qtile**: Os controlos multimédia estão agora a funcionar corretamente.
- **NVIDIA**: Ativados os serviços e opções necessários para que a suspensão (sleep) funcione em Wayland.
- **netinstall**: Removido o `b43-fwcutter` da instalação.
- **netinstall**: Substituído o `hyprland-git` pelo `hyprland`.
- **netinstall**: Removido o `linux-cachyos-lts` da seleção para evitar problemas com módulos em falta.
- **Calamares**: Shellprocess: Movida a classificação de mirrors para antes da instalação do chaveiro (keyring).

**Changelog do Lançamento Experimental para Handheld:**

- Tema predefinido: KDE Vapor (Tema do SteamOS).
- Sistema de ficheiros predefinido: BTRFS.
- Kernel predefinido: linux-cachyos-deckify.
- O SDDM utiliza agora Wayland.
- Flag de ambiente para HHD para reduzir a latência.
- Adicionados argumentos de Kernel para melhorar o comportamento de troca do Game Mode.
- O nome de utilizador pode agora ser editado.
- A deteção de hardware configura e instala os pacotes necessários dependendo do dispositivo utilizado.
- O teclado Mallit utiliza agora o Modo Escuro.
- Powerbuttond da Valve para uma suspensão adequada.
- Atalhos podem agora ser adicionados ao Steam.
- Atualizado o `scx-scheds` para o commit de git mais recente, fornecendo as melhorias mais recentes para o agendador LAVD.
- Adicionada montagem automática (automount) ao cachyos-handheld.
- O CachyOS pode agora realizar atualizações de BIOS da Steam Deck na própria consola.

24.05
----

**Funcionalidades:**

- **Sistemas de Ficheiros**: Introdução do Bcachefs como opção de sistema de ficheiros.
- **pacstrap**: Adicionada deteção de utilização do Bcachefs para instalação das ferramentas correspondentes (Bcachefs-tools).
- **CachyOS-AI-SDK**: Introduzida nova opção de instalação para fornecer uma configuração NVIDIA SDK pronta a usar (OOB).
- **CachyOS-Deckify**: Disponibilizada variante para consolas portáteis (experimental), consulta [aqui](https://discuss.cachyos.org/t/information-experimental-cachyos-deckify/203) para mais detalhes.
- **BTRFS**: Snapper automático para snapshots, instalável a partir da aplicação CachyOS Hello.
- **ISO**: Removido o instalador offline.
- **Atualizações de Pacotes**: Python 3.12, gcc 14.1.1, mesa 24.0.6, xwayland 24.1rc2, NVIDIA 550.78.

**Correções de Erros:**

- **settings.conf**: Movida a deteção de hardware para antes do netinstall.
- **pacstrap**: Utilização do `btrfs-assistant` em vez do `btrfs-assistant-git`.
- **plymouth**: Removido o hook do plymouth em configurações ZFS com encriptação.
- **ISO**: Adicionados vários ficheiros de configuração para o KDE, de forma a evitar o bloqueio de ecrã durante a instalação.
- **services-systemd**: Ativado corretamente o `fstrim.timer`.
- **umount**: Desativado o modo de emergência para evitar problemas com a instalação em ZFS.
- **shellprocess**: Limpeza de resíduos da instalação offline.

24.04
----

**Funcionalidades:**

- **Plymouth**: Utilização do Plymouth para fornecer uma animação de arranque temática.
- **ISO**: Regresso ao X11 devido a problemas na configuração do layout do teclado no Calamares.
- **rEFInd**: Novo layout de particionamento (separação entre `/boot` e `/boot/efi`).
- **netinstall**: KDE: Instalação do `xwaylandvideobridge` por predefinição.
- **netinstall**: Utilização do `lightdm` em vez do `ly` para vários ambientes de desktop, devido a um erro no `ly`.
- **systemd-boot**: Utilização de `@saved` no systemd-boot para permitir que este recorde a entrada de arranque selecionada anteriormente.
- **cachyos-keyring**: Refatorização do pacote `cachyos-keyring` e introdução de um chaveiro `cachyos-trusted`.
- **ISO**: Utilização de compressão ZSTD 19 para a imagem mkinitcpio da ISO.
- **Atualizações de Pacotes**: xz 5.6.1-3, linux-cachyos 6.8.2, pacman 6.1.0-5, mesa 24.0.4, Plasma 6.0.3, nvidia 550.67 e cachyos-settings 39-2.

**Correções de Erros:**

- **Autologin**: Corrigida a opção de login automático quando utilizada em conjunto com o SDDM.
- **xz**: Fornecido um pacote `xz` corrigido.
- **libarchive**: Mitigado o commit do ator malicioso no caso `xz`.
- **cachyos-settings**: Regra udev: não definir `watermark_scale_factor` para 125, pois aumentava significativamente o uso de RAM.
- **calamares**: pacman-keyring: Utilização de um método mais simples para integrar o chaveiro na instalação.

24.03.1
----

**Funcionalidades:**

- **netinstall**: Removidos kernels extra na seleção do netinstall para evitar confusão por parte dos utilizadores. Outros kernels personalizados podem ser instalados através do Kernel Manager.
- **Kernel Manager**: Os módulos NVIDIA são instalados automaticamente quando detetados; migração para QT6; corrigidos os nomes personalizados ao utilizar a opção LTO.
- **Instalador de Pacotes**: Migração para QT6 e atualização para o pacman 6.1.
- **Atualizações de Pacotes**: linux-cachyos 6.8.1, pacman 6.1, mesa 24.0.3, Plasma 6.0.2, llvm 17.0.6.

**Correções de Erros:**

- **NVIDIA**: Aplicado patch ao módulo nvidia para assumir a propriedade do `nvidia.drm.modeset` mais cedo, evitando problemas em gráficas nvidia.
- **Refind**: Não instala o kernel lts para evitar problemas.
- **shellprocess**: Remoção completa da diretoria de utilizadores live (liveusers).

24.03
----

**Funcionalidades:**

- **ISO**: O Plasma 6 é agora fornecido na ISO e utiliza Wayland por predefinição; a ISO GNOME foi removida para evitar confusão sobre o netinstall.
- **Calamares**: Migração para QT6.
- **refind**: Adicionados f2fs e zfs como opções, incluindo encriptação luks2.
- **mirrors**: Fornecemos agora 2 CDNs globais. Uma alojada pela Cloudflare R2 e outra pela Digital Ocean.
- **mirrorlist**: Obtém o instalador online diretamente da CDN para garantir uma entrega mais rápida.
- **initcpiocfg**: Utilização do novo hook de microcode para o carregamento precoce do ucode.
- **bootloader**: O microcode já não é carregado através do bootloader.
- **Atualizações de Pacotes**: linux-cachyos 6.7.9, mesa 24.0.2, zfs-utils 2.2.3.

**Correções de Erros:**

- **pacstrap**: Não instala pacotes de configuração para proporcionar ao utilizador uma seleção de instalação mais limpa.
- **shellprocess_pacman**: Copia também as mirrorlists cachyos-v4 classificadas para o destino.

24.02
-----

**Funcionalidades:**

- **refind**: Alteração do layout de `/boot/efi` para `/boot` para oferecer mais opções de sistemas de ficheiros e encriptação.
- **Live-ISO**: Limpeza e sincronização da Live-ISO.
- **Lançar Instalador**: Adicionada recomendação para a instalação online.
- **shell-configs**: Adicionada opção para desativar o fastfetch ao iniciar o terminal e adicionado um alias "update".
- **netinstall**: Adicionado o `phonon-qt5-vlc` ao KDE.
- **Atualizações de Pacotes**: linux-cachyos 6.7.5, mesa 23.3.5, gcc 13.2.1-12, glibc 2.39, mesa 24.0.1, nvidia 550.54.14.

24.01
-----

**Funcionalidades:**

- **x86-64-v4**: Autodeteção e ativação do repositório no momento da instalação.
- **linux-cachyos**: A estrutura do agendador sched-ext é agora fornecida no kernel predefinido.
- **xwayland**: Fornecimento de patches de sincronização explícita (explicit sync) por predefinição.
- **Atualizações de Pacotes**: linux-cachyos 6.7, mesa 23.3.3, gcc 13.2.1-8, xorg-xwayland 23.2.4.

**Correções de Erros:**

- **chwd**: Para placas Nvidia Ada Lovelace, os módulos nvidia são incluídos diretamente no initramfs para evitar problemas com o KMS precoce.

23.12
-----

**Correções de Erros:**

- **zfs**: Adicionada a opção `compatibility=grub` às opções do pool para garantir a compatibilidade.
- **grub/xfs**: Adicionado um patch ao GRUB para garantir compatibilidade com o novo padrão `bigtime` do XFS.
- **netinstall**: Utilização do `xdg-desktop-portal-hyprland` em vez da versão `-git`.

23.11
-----

**Funcionalidades:**

- **nvidia**: Utilização do módulo `nvidia` em vez de `dkms`.
- **Calamares**: Sincronizado com a versão oficial (upstream).
- **Atualizações de Pacotes**: linux-cachyos 6.6.1, nvidia-utils 545.29.02, mesa 23.2.1, zfs-utils 2.2.0, mkinitcpio 37.

**Correções de Erros:**

- **nvidia-hook**: Reintroduzido o `nvidia-hook` para evitar problemas no momento da instalação com o novo módulo.
- **netinstall**: Pacotes renomeados devido às alterações recentes no empacotamento do KF5.
- **netinstall**: Adicionado o `xdg-desktop-portal-gnome` à instalação do GNOME.

23.09
-----

**Funcionalidades:**

- **systemd-boot**: Definido o `luks2` como predefinição.
- **netinstall**: Disponibilizada uma categoria própria para pacotes do CachyOS.
- **Calamares**: Sincronizado com a versão oficial (upstream).
- **Atualizações de Pacotes**: linux-cachyos 6.5.3, nvidia-utils 535.104.05, mesa 23.2.7.

**Correções de Erros:**

- **shellprocess_sdboot**: Evitada a utilização de "sudo" ao gerar as entradas de arranque durante o processo de instalação.

23.08
-----

**Funcionalidades:**

- **Calamares**: Sincronizado com a versão oficial (upstream).
- **Atualizações de Pacotes**: linux-cachyos 6.4.10, nvidia-utils 535.98.

**Correções de Erros:**

- **Chaveiro (Keyring)**: Atualizado e a funcionar corretamente.

23.07
-----

**Funcionalidades:**

- **CachyOS-Settings**: Inclui agora o "bpftune", que ajusta automaticamente as definições de rede dependendo da utilização.
- **CachyOS-Qtile-Settings**: Mudanças de qualidade de vida, ícones melhorados, etc.
- **Atualizações de Pacotes**: linux-cachyos 6.4.2, cachy-browser 115.0.1, mesa 23.1.3.

**Correções de Erros:**

- **rate-mirrors**: Corrigido.
- **chwd (Deteção de Hardware)**: Recebeu múltiplas correções.
- **Instalador**: Corrigida a instalação de controladores proprietários para configurações híbridas.
- **Calamares**: Corrigidos bloqueios que ocorriam em configurações raras, principalmente em máquinas virtuais (VM).
- **Slides**: Correção de erro ortográfico no slide 6.

23.06
-----

**Correções de Erros:**

- **Instalação Offline**: Correção do Calamares.

23.05
-----

**Funcionalidades:**

- A estrutura da migração para o Git do CachyOS está agora refletida na instalação.
- **chwd (mhwd)**: Recebeu múltiplas correções.
- **Pacman**: Adicionámos uma funcionalidade que permite fornecer uma mensagem aos utilizadores antes da atualização.
- **Calamares**: Sincronizado com a versão oficial (upstream).
- **Atualizações de Pacotes**: linux-cachyos 6.3.4, cachy-browser 113.0.1, mesa 23.1.1, python 3.11.

**Correções de Erros:**

- **netinstall**: Correções mínimas devido a alterações em pacotes.
- **Slides**: O slide 6 foi atualizado para refletir as alterações mais recentes.

23.04
-----

**Funcionalidades:**

- Introdução do ambiente de desktop **Qtile**.
- **mhwd remodelado**: Reescrito em Rust; perfis simplificados para GPUs e placas de rede; removida uma grande quantidade de código antigo.
- **Atualizações de Pacotes**: linux-cachyos 6.2.12, cachy-browser 112.0.1, mesa 23.0.3, zfs-utils 2.1.11.

**Correções de Erros:**

- **f2fs**: Removidas as opções de montagem "atgc", uma vez que apresentam problemas com o systemd.

23.03.1
-------

**Funcionalidades:**

- **Atualizações de Pacotes**: linux-cachyos 6.2.7, cachy-browser 111.0.

**Correções de Erros:**

- **Calamares**: Corrigido o problema com o gestor de ecrã lightdm devido a commits errados no upstream do calamares.
- **Instalação Offline**: Corrigido o problema com o chaveiro (keyring).
- **Refind**: Utilização do `linux-cachyos-lts` como predefinição. A versão 6.2 atual parece não funcionar bem com o refind.

23.03
-----

**Novas Funcionalidades:**

* **Bootloader:** Adicionado o bootloader rEFInd.
* **MHWD:** Instalação automática de controladores NVIDIA utilizando o MHWD.
* **ZFS:** Suporte para encriptação na instalação em ZFS.
* **Netinstall:** Adicionado o Hyprland à netinstallation.
* **KDE:** O `cachyos-kde-settings` utiliza agora o tema padrão do KDE, mas os temas CachyOS continuam pré-instalados e disponíveis para uso.
* **Atualizações de Pacotes:** linux-cachyos 6.2.2, mesa 23.0.0, cachy-browser 110.0.1, plasma 5.27.2.
* **Calamares:** Módulo do bootloader totalmente remodelado e melhorado.
* **Segurança:** A ISO é agora assinada com uma chave GPG.
* **MHWD:** Melhorado e atualizado.
* **Calamares:** Sincronizado com a versão oficial (upstream).

**Correções de Erros:**

* A opção "substituir partição" oferece agora uma seleção de sistema de ficheiros.
* Corrigido um erro ortográfico no slide 3.
* O Nouveau foi corrigido e agora carrega o módulo corretamente.
* **MHWD:** Utilização de `modesetting` para INTEL/ATI e Nouveau.
* Removido o hook do ZFS do mkinitcpio na ISO live, que causava problemas no arranque.
* Pode descarregar a atualização a partir dos nossos mirrors no SourceForge.

23.02
-----

**Novas Funcionalidades:**

* Adicionado o repositório `cachyos-community-v3`.
* Adicionados os ambientes de desktop Budgie, Mate e LXDE à Netinstallation.
* O serviço `bluetooth.service` está agora ativado por predefinição.
* F2FS e GRUB estão ativos e a funcionar novamente.
* **Atualizações de Pacotes:** linux-cachyos 6.1.10, mesa 22.3.4, zfs-utils 2.1.9, glibc 2.37, cachy-browser 109.0.1.

**Correções de Erros:**

* O `rate-mirrors` agora recorre a mirrors não classificados caso falhe a sua classificação.
* O `cachyos-rate-mirrors` tem um tempo limite (timeout) de obtenção de mirrors mais longo.
* O GitHub foi adicionado aos hosts para evitar problemas com a mirrorlist.
* As entradas de arranque para BIOS foram atualizadas no syslinux.

23.01
-----

**Funcionalidades:**

* Os slides do Calamares foram remodelados e atualizados.
* Ambiente de Desktop UKUI adicionado à Netinstallation.
* Ambiente de Desktop Cinnamon adicionado à Netinstallation.
* **Cmdline:** O zswap está agora desativado por predefinição, uma vez que o CachyOS fornece zram como padrão.
* Calamares atualizado para o commit mais recente.
* O LLVM 15 é agora fornecido por predefinição.
* **Atualizações de Pacotes:** linux-cachyos 6.1.7, mesa 22.3.3, Plasma 5.26.5, llvm 15.0.7, gcc 12.1.1, binutils 2.40, zfs-utils 2.1.8, nvidia 525.85.05.
* Instalador CLI atualizado.

**Correções de Erros:**

* O processo shell `remove-ucode` também corre agora na instalação offline.
* O pamac foi removido da netinstall.
* Os mirrors do CachyOS classificados são agora copiados corretamente para o destino da instalação.
* O `power-profile-daemon` já não é ativado por predefinição.

22.12
-----

**Funcionalidades:**

- Novo fundo do GRUB no bootloader da ISO.
- O memtest está agora incluído para sistemas UEFI.
- O `cachyos-sddm-theme` foi adicionado à instalação do KDE.
* **ISO:** Adicionado script de versão automática ao criar a ISO.
- Calamares atualizado para o commit mais recente.
- Os mirrors são agora classificados com o "cachyos-rate-mirrors", que classifica os nossos mirrors e os do Arch.
- **Atualização de Pacotes:** Kernel 6.1.1, mesa 22.3.1, plasma 5.26.4...
- O Ambiente de Trabalho Kofuku foi removido.
- ISO extra com LLVM 15 incluído para fornecer suporte a placas AMD mais recentes.

**Correções de Erros:**

- Calamares corrigido ao utilizar o GNOME como ISO.
- O `zfshostid` funciona agora corretamente para a instalação offline e online.
- Adicionado o hook "kms" ao módulo `initcpiocfg` para seguir os padrões do Arch Linux.
- E mais correções na ISO.

22.11
-----

**Funcionalidades:**

- O Calamares e a sua configuração são fornecidos num único pacote.
- Limpeza completa dos pacotes no netinstall.
- Adicionado um módulo que remove automaticamente o ucode desnecessário.
- RAM necessária reduzida para 2.5GB.
- Pacotes necessários para btrfs são agora instalados apenas para btrfs.
- Calamares atualizado para o commit mais recente.
- O bootloader da ISO tem agora um fundo (background).
- Atualizações comuns de pacotes (mesa, kernel...).
- Substituído o `systemd-network` pelo `networkmanager`.

**Correções de Erros:**

- O serviço `qemu-guest-agent.service` foi removido da ISO.
- O `copytoram` foi completamente desativado, pois corrompia a instalação offline.
- O `mkinitcpio.conf` foi atualizado.
- E mais correções na ISO.

22.10
-----

**Funcionalidades:**

- O Pacman utiliza agora `Architecture=auto` para a instalação x86-64-v3, uma vez que adicionámos um patch para o pacman detetar automaticamente x86-64-v3.
- O Pacman mostra agora de que repositório um pacote foi instalado.
- A seleção do bootloader deteta automaticamente se o EFI está presente; caso contrário, usará o GRUB por predefinição.
- A escolha de swap foi agora desativada por predefinição, uma vez que o zram é gerado automaticamente de forma dinâmica.
- Calamares atualizado para o commit mais recente.
- O requisito mínimo de RAM foi definido para 4GB.
- O `cachyos-grub-theme` foi removido.

**Correções de Erros:**

- A deteção de SSD e HDD no fstab foi desativada até que haja uma correção oficial (upstream).
- Corrigida a duplicação de subvolumes BTRFS.
- Adicionado microcode em falta ao bootloader GRUB da ISO.
- Adicionado um modo de arranque de reserva (fallback), que não define qualquer modeset (nomodeset).
- E mais correções na ISO.

22.09
-----

**Funcionalidades:**

- O Calamares utiliza agora a versão mais recente do ramo 3.3. Esta traz correções de erros e novas funcionalidades.
- O Instalador TUI está agora incluído na ISO GUI; pode ser utilizado através do comando `cachyos-installer`.
- O Calamares deteta agora automaticamente se o sistema de ficheiros de destino é um SSD ou HDD e ajusta as opções do fstab em conformidade.
- A NVIDIA para placas recentes (a partir da série 9xx) tem agora uma entrada de arranque própria para evitar problemas com o Nouveau.
- As opções de montagem do fstab e ZFS foram atualizadas.
- O Firefox deixará de ser instalado por predefinição, uma vez que o Cachy-Browser passa a ser o navegador padrão.

**Correções de Erros:**

- O pacote `cachyos-gaming-meta` foi removido do módulo netinstall para evitar problemas durante o processo de instalação.
- Os pacotes do netinstall foram atualizados e receberam várias correções.
- A instalação do OpenBox foi corrigida.
- Correções habituais de tradução.

22.07
-----

**Funcionalidades:**

- **Seleção de Bootloader**: O utilizador pode agora escolher entre GRUB e systemd-boot na instalação online.
- Na instalação online será agora sempre instalado o Calamares mais recente, o que permite aplicar correções de erros instantaneamente ("on the air").
- O Calamares inclui agora um módulo mhwd que instala automaticamente os controladores necessários (controladores livres).
- O Calamares tem novos slides de imagens durante a instalação.
- As opções de montagem do fstab e ZFS foram atualizadas.
- Suporte para HiDPI.

**Correções de Erros:**

- Corrigido o erro de locales no Calamares.
- O F2FS foi removido para o bootloader GRUB, uma vez que não está a funcionar atualmente (problema do Calamares); continua a poder ser utilizado com o systemd-boot.
- O Calamares mostra agora o sistema de ficheiros predefinido correto.
- A ISO GNOME foi corrigida.
- Adicionados pacotes em falta na ISO Live para a instalação offline.
- Corrigida a encriptação LUKS em swap com BTRFS.
- Correções habituais de tradução.

22.06
-----

Foram corrigidos os seguintes erros conhecidos:

- A instalação falhava quando era utilizado um CPU genérico.
- O KDE montava automaticamente partições ZFS, o que fazia com que o login automático na ISO deixasse de funcionar.

**Melhorias:**

- A firewall do servidor foi corrigida; a Cloudflare estava a bloquear utilizadores como "bots", o que resultava num erro durante a instalação.
- Adicionado suporte de temas para Gnome, XFCE e OpenBox.
- Wiki atualizada.

**_CachyOS - Kernel - Manager_**
Temos também o prazer de anunciar o nosso CachyOS-Kernel-Manager.
Através dele, tem a possibilidade de instalar o kernel a partir do repositório e também configurar, através de uma interface gráfica (GUI), a sua própria compilação de kernel, tornando muito fácil a personalização de acordo com as suas necessidades.

Pode selecionar as seguintes opções para a compilação de um kernel:

- Agendador (Scheduler) (BMQ, BORE, cacULE, cfs, PDS, TT)
- NUMA desativado ou ativado
- KBUILD CFLAGS (-O3 ou -O2)
- Definir o "performance governor" como predefinição
- Ativar BBR2
- Tickrate (500Hz, 600Hz, 750Hz, 1000Hz)
- Tickless (idle, periodic, full)
- Desativar o I/O Scheduler MQ-Deadline
- Desativar o I/O Scheduler Kyber
- Ativar ou desativar MG-LRU
- Ativar ou desativar DAMON
- Ativar ou desativar Speculative page fault
- Ativar ou desativar LRNG (Linux Random Number Generator)
- Aplicar Otimização Automática do Kernel (Deteta automaticamente o "march" do seu CPU)
- Seleção de Otimização do Kernel (Verá uma lista de diferentes arquiteturas de CPU e poderá selecionar a sua através de um número)
- Desativar depuração (debug) (reduz o tamanho do kernel)
- Ativar ou desativar nf cone
- Ativar LTO (Full, Thin, No)

22.05
-----

O CachyOS foi fundado há um ano. Após quase um ano de desenvolvimento, estamos muito orgulhosos de anunciar o nosso primeiro Lançamento Estável (Stable Release) do Instalador GUI.
Dedicámos muito tempo a investigar gestão de repositórios, desenvolvimento de kernels, infraestrutura, temas... e finalmente integrámos tudo no Instalador GUI do CachyOS.
Todas as funcionalidades em que trabalhámos e que implementámos no Instalador visam apenas oferecer aos utilizadores uma experiência completamente personalizável.

As alterações mais empolgantes são a utilização do `pacstrap` para a instalação online, o que proporciona um ambiente instalado totalmente limpo, e o suporte nativo completo para o sistema de ficheiros ZFS.

Uma vez que o Discord restringe o tamanho das mensagens, o anúncio completo pode ser consultado aqui:

<https://discuss.cachyos.org/t/cachyos-gui-installer-changelog/>

O download pode ser efetuado aqui:
<https://mirror.cachyos.org/ISO/kde/220522/>
<https://sourceforge.net/projects/cachyos-arch/>
