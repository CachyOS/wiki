---
title: Sistemas de Ficheiros
description: Descrição e recomendações para os sistemas de ficheiros disponíveis. (ext4, f2fs, btrfs, xfs, zfs)
ai_translated: true
---

O CachyOS oferece 5 sistemas de ficheiros diferentes para permitir que o utilizador escolha o que melhor se adapta às suas necessidades. De seguida, abordaremos as vantagens, desvantagens e recomendações para cada sistema de ficheiros. Cada um deles traz os seus requisitos/utilitários pré-instalados no CachyOS.

:::note
O BTRFS é o sistema de ficheiros padrão e recomendado para o CachyOS. Escolha este se estiver na dúvida.
:::

## XFS

O XFS é um sistema de ficheiros com suporte para journaling, criado e desenvolvido pela Silicon Graphics, Inc. Foi criado em 1993, portado para Linux em 2001 e é atualmente suportado pela maioria das distribuições Linux.

### Prós

- O XFS foi originalmente desenhado com a velocidade e escalabilidade extrema em mente.
- Fiável; o XFS utiliza diversas tecnologias para prevenir a corrupção de dados.
- Resistente à fragmentação devido à sua natureza baseada em extensões e à estratégia de alocação adiada.

### Contras

- Não pode ser reduzido (shrink).

### Utilitário de utilizador (userspace)

O pacote que contém as ferramentas para gerir sistemas de ficheiros XFS é o `xfsprogs`.

### Recomendação

O XFS é o sistema de ficheiros recomendado para utilizadores que não necessitam de funcionalidades avançadas e pretendem apenas um sistema rápido e fiável.

## BTRFS

O BTRFS é um sistema de ficheiros moderno do tipo copy-on-write (COW), criado em 2007 e declarado estável no kernel Linux em 2013. É amplamente suportado e conhecido principalmente pelo seu conjunto de funcionalidades avançadas.

### Prós

- Compressão transparente. O BTRFS permite comprimir ficheiros de forma transparente, permitindo poupanças significativas de espaço sem intervenção do utilizador. **O CachyOS é fornecido com compressão ZSTD definida no nível 3 por defeito.**
- Funcionalidade de snapshots. O BTRFS aproveita a sua natureza COW para permitir a criação de snapshots de subvolumes que ocupam muito pouco espaço real.
- Funcionalidade de subvolumes, permitindo um maior controlo sobre o sistema de ficheiros.
- Capaz de expandir ou reduzir.
- Desenvolvimento muito rápido.

### Contras

- Por vezes requer desfragmentação ou balanceamento (balancing).
- Desempenho inferior em discos rotativos (HDDs) devido à fragmentação acima mencionada.

### Utilitário de utilizador

O pacote utilitário do Btrfs é o `btrfs-progs`.

### Estrutura de Subvolumes

O CachyOS fornece uma estrutura de subvolumes pré-configurada para permitir a funcionalidade fácil de snapshots.

- Subvol @ = /
- Subvol @home = /home
- Subvol @root = /root
- Subvol @srv = /srv
- Subvol @cache = /var/cache
- Subvol @tmp = /var/tmp
- Subvol @log = /var/log

### Recomendação

O BTRFS é recomendado para utilizadores que pretendem funcionalidades de snapshot/backup e compressão transparente.

## EXT4

O EXT4 (fourth extended filesystem) é o sistema de ficheiros Linux mais comummente utilizado. Tornou-se estável no kernel Linux em 2008.

### Prós

- Pode ser tão rápido ou mais rápido que o XFS em alguns cenários.
- Muito comum, permitindo fácil acesso a imensos recursos e documentação.
- Fiável. O EXT4 tem um historial comprovado de grande estabilidade.
- Capaz de expandir ou reduzir.
  - A redução só é suportada offline e requer que o sistema de ficheiros esteja desmontado.

### Contras

- Carece de muitas das funcionalidades avançadas que outros sistemas de ficheiros oferecem.

### Utilitários de utilizador

O pacote para gerir o ext4 é o `e2fsprogs`.

### Recomendação

O EXT4 é recomendado para utilizadores que pretendem o sistema de ficheiros mais simples e comum.

## ZFS

O ZFS é um sistema de ficheiros avançado originalmente desenvolvido pela Sun Microsystems em 2005. O ZFS possui muitas funcionalidades, mas está licenciado sob a CDDL, o que significa que não pode ser incluído dentro do kernel Linux e requer a instalação de um módulo separado.

:::caution
Não utilize um kernel Real-time juntamente com o ZFS; não é compatível devido a questões de licenciamento.
:::

### Prós

- Armazenamento em pool (zpool).
- Snapshots utilizando COW.
- Compressão.
- Suporte para Raid-Z.
- A cache ARC permite tempos de leitura incrivelmente rápidos em ficheiros acedidos frequentemente.

### Contras

- Muito complicado de utilizar e compreender devido a funcionalidades como zpool e ARC.
- O ARC requer muita memória RAM para ser eficaz.
- Não está incluído no kernel Linux, dependendo de um módulo de terceiros (OpenZFS).
- Incompatível com preempção Real-time.

### Ferramentas necessárias

- 'ZFS-Module': O CachyOS fornece um módulo zfs pré-compilado para cada versão do kernel.
- `zfs-utils`: para os utilitários de utilizador.

### Recomendação

O ZFS deve apenas ser utilizado por utilizadores avançados que pretendam usar as suas funcionalidades complexas, como o armazenamento em pool ou a cache ARC.

## F2FS

O F2FS (Flash-Friendly File System) é um sistema de ficheiros flash originalmente criado e desenvolvido pela Samsung para o kernel Linux. O F2FS foi criado especificamente para atender à memória NAND flash utilizada no armazenamento moderno.

### Prós

- Desenhado com a otimização para flash em mente.
- Compressão transparente utilizada para reduzir as escritas no disco (a poupança de espaço não é atualmente utilizável pelo utilizador).
- Melhor nivelamento de desgaste (wear leveling), o que prolonga ainda mais a vida da memória NAND flash.

### Contras

- Não pode ser reduzido.
- A poupança de espaço da compressão não pode ser usufruída pelo utilizador neste momento (pode ser adicionado no futuro).
- Verificação do sistema de ficheiros (fsck) relativamente fraca.
- Retroceder para um kernel mais antigo que a versão que criou o sistema de ficheiros pode causar problemas.
- Requer uma solução alternativa (workaround) quando utilizado com GRUB num sistema MBR/BIOS.

### Utilitários de utilizador

O utilitário principal para f2fs é o `f2fs-tools`.

### Recomendação

- O F2FS é recomendado para utilizadores que pretendem maximizar a vida útil dos seus dispositivos NAND flash (SSDs/NVMEs).
- O Limine é o gestor de arranque recomendado para utilizadores de F2FS em sistemas MBR/BIOS, uma vez que não requer a solução alternativa que o GRUB exige.

## Resumo (TL;DR)

Utilize o sistema de ficheiros padrão **BTRFS**, pois é considerado estável e possui imensas funcionalidades úteis (snapshots, compressão, etc.). Utilize **XFS** ou **EXT4** para um sistema
de ficheiros simples e rápido.
