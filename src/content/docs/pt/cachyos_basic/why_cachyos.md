---
title: Porquê o CachyOS?
description: Por que razão o CachyOS pode ser a melhor escolha para si
tableOfContents:
  minHeadingLevel: 1
  maxHeadingLevel: 4
---

O CachyOS é uma distribuição Arch Linux focada no desempenho, desenhada para oferecer um ambiente computacional estável, eficiente e amigável para o utilizador. Oferece todo o poder e flexibilidade de um sistema rolling-release, potenciado por otimizações avançadas e um conjunto de ferramentas personalizadas que simplificam a experiência tanto para utilizadores novos como experientes.

## Desempenho e Otimização

### Pacotes e Repositórios Otimizados

O CachyOS disponibiliza uma vasta seleção de **[pacotes otimizados](https://packages.cachyos.org/)** compilados especificamente para várias arquiteturas de CPU modernas. Isto inclui suporte para sistemas `x86-64-v3`, `x86-64-v4` e `Zen4+`, garantindo que o seu software é construído para tirar total partido das capacidades do seu hardware, resultando num aumento significativo de desempenho.

Para uma análise mais aprofundada dos nossos repositórios otimizados, consulte o nosso guia detalhado sobre **[Repositórios Otimizados](/features/optimized_repos)**.

### Kernel Personalizado Ajustado para Desempenho e Estabilidade

Além do conjunto de patches base do kernel CachyOS, que ajusta vários parâmetros para melhorar a fluidez do desktop, o CachyOS seleciona (cherry-pick) conjuntos de patches que ainda não foram integrados na linha principal (mainline) ou que não estão incluídos na revisão estável do kernel.

Por conseguinte, estes patches passam por testes internos antes de serem lançados para garantir que a estabilidade não é afetada. Para uma lista completa dos patches fornecidos pelo CachyOS, veja **[Kernel](/features/kernel)**.

### Suporte Avançado para Agendadores de CPU

O CachyOS fornece kernels com as mais recentes otimizações de agendadores (schedulers) de CPU para garantir um desktop suave e interativo, mesmo sob carga pesada.

* **EEVDF (O agendador padrão do kernel Linux):** Embora excelente para o processamento geral (throughput), o kernel CachyOS inclui **[ajustes EEVDF personalizados](https://github.com/CachyOS/linux/blob/6.15/cachy/kernel/sched/fair.c#L79-81)** para melhorar a capacidade de resposta do desktop.

* **[BORE](https://github.com/firelzrd/bore-scheduler) (Burst-Oriented Response Enhancer):** Para utilizadores que necessitam da máxima interatividade, os nossos kernels suportam o agendador BORE, um conjunto de patches que melhora o EEVDF para proporcionar uma experiência mais fluida durante cargas de trabalho intensivas.
  * Disponível na variante de kernel `linux-cachyos-bore`.

Para mais informações sobre os kernels oferecidos pelo CachyOS e a estrutura sched-ext, consulte a documentação de **[Kernel](/features/kernel)** e **[sched-ext](/configuration/sched-ext)**.

## Ferramentas Intuitivas e Personalização

### [Deteção Automática de Hardware](/features/chwd/chwd/)

O CachyOS inclui uma ferramenta de deteção de hardware personalizada que identifica e instala automaticamente os controladores (drivers) e pacotes necessários para o seu sistema. Isto elimina a necessidade de procurar controladores manualmente, poupando tempo e esforço após a instalação.

### Processo de Instalação Personalizável

O instalador do CachyOS permite aos utilizadores personalizar o sistema escolhendo o ambiente de desktop, pacotes, sistema de ficheiros, gestor de arranque, kernel e muito mais, de forma a ajustar-se às suas necessidades:

- [Ambientes de Desktop](/installation/desktop_environments/)
- [Gestores de Arranque](/installation/boot_managers/)
- [Variantes de Kernel](/features/kernel#variants)
- [Sistemas de Ficheiros](/installation/filesystem)
- [Pacotes personalizados para incluir durante a instalação](https://github.com/CachyOS/cachyos-calamares/blob/cachyos-limine-qt6/src/modules/netinstall/netinstall.yaml)

### Aplicações Personalizadas do CachyOS

O CachyOS desenvolve e mantém a sua própria suite de aplicações para simplificar a gestão do sistema e melhorar a sua experiência.

Lista de aplicações que o CachyOS desenvolve e mantém atualmente:

-   **[CachyOS Hello](https://github.com/CachyOS/CachyOS-Welcome):** Uma aplicação de boas-vindas para controlar ajustes (tweaks), aplicar correções e instalar pacotes.
-   **[CachyOS Package Installer](https://github.com/CachyOS/packageinstaller):** Uma interface gráfica (GUI) para a instalação fácil de aplicações.
-   **[CachyOS Kernel Manager](https://github.com/CachyOS/kernel-manager):** Instale facilmente kernels do repositório, configure o seu próprio e gira a estrutura `sched-ext`.
-   **[cachyos-rate-mirrors](https://github.com/CachyOS/rate-mirrors):** Classifica automaticamente os mirrors do Arch e CachyOS para velocidades de download ideais com o `pacman`.
-   **[systemd-boot-manager](https://github.com/CachyOS/systemd-boot-manager):** Gera automaticamente novas entradas de arranque para o `systemd-boot`, que podem ser facilmente configuradas via `/etc/sdboot-manage.conf`.

## Uma Comunidade Amigável e Ativa

A maior força do CachyOS é a sua comunidade em expansão. Os membros ajudam-se uns aos outros partilhando dicas, fornecendo suporte e contribuindo para o sucesso do projeto. O seu feedback ajuda-nos a melhorar continuamente a experiência CachyOS.

Junte-se a nós e torne-se parte da comunidade no **[Discord do CachyOS](https://discord.gg/cachyos-862292009423470592)** e no **[Fórum do CachyOS](https://discuss.cachyos.org/)**.
