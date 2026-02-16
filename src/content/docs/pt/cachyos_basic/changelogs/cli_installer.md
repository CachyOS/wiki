---
title: Instalador CLI
description: Changelogs do Instalador CLI
---
# 0.8.4

## Funcionalidades ✨

- **Gestão de Partições Melhorada:** Foram realizadas refatorizações e melhorias significativas na forma como o instalador gere as partições, resultando numa maior precisão e fiabilidade.
- **Geração de Parâmetros do Kernel:** O instalador gera agora automaticamente os parâmetros do kernel com base no esquema de partições detetado.
- **Biblioteca `gucc` Melhorada:** A biblioteca `gucc` foi significativamente aprimorada, abrangendo agora capacidades de instalação e configuração do rEFInd.

## Tarefas (Chores) 🧹

- **Clang-Format e Clang-Tidy:** A consistência e qualidade da base de código foram melhoradas através da aplicação do clang-format e clang-tidy.
- **Refatorização com String Views:** Diversas áreas da base de código utilizam agora literais `string_view` para melhor desempenho e legibilidade.
- **Implementação do Doctest:** Os `asserts` de C foram substituídos pelo doctest para testes mais robustos e informativos.
- **Testes Refatorizados:** As suítes de testes foram refatorizadas para maior clareza e manutenibilidade.
- **Gestão do rEFInd na `gucc`:** O código relacionado com o rEFInd foi refatorizado e movido para a biblioteca `gucc` para uma melhor organização.

## Correções de Erros 🐛

- **Deteção de Subvolumes Btrfs:** Foram resolvidos problemas na deteção de subvolumes btrfs existentes.
- **Precisão das Informações de Partição:** Foram feitas melhorias para garantir a recolha e exibição precisa das informações das partições.
- **Ponto de Montagem Root para rEFInd:** Foi corrigido um erro que afetava o ponto de montagem root utilizado pelo rEFInd.
- **Deteção de UUID:** O processo de deteção de UUIDs de partição durante a inicialização foi melhorado.
- **Correções na Build Meson:** Foram resolvidos problemas encontrados durante o processo de build com meson.
- **Anexação de Subvolumes Btrfs:** Foi corrigido um erro relacionado com a anexação de subvolumes btrfs em ambientes de desenvolvimento.
- **Rootfs em Configurações Predefinidas:** Foi resolvido um problema com o rootfs de esquemas de partição derivados de configurações predefinidas.
- **Montagem rEFInd com Escrita/Leitura:** Garantia de que o rEFInd monta as partições necessárias com permissões de leitura e escrita.

# 0.8.3

## Tarefas (Chores) 🧹

- Atualização da dependência CPR para uma versão mais recente para melhor funcionalidade.
- Instrução explícita ao CTRE (biblioteca Compile Time Regular Expressions) para utilizar o padrão C++23 para consistência e melhorias de desempenho.
- Aumento do timeout de verificação de ligação na secção de utilitários para acomodar potenciais atrasos de rede.

# 0.8.2

## Correções 🐛

- Resolvido um problema em que a "gucc" não geria corretamente os pontos de montagem de subvolumes btrfs.
- Melhoria da "gucc" para gerir diferentes estados de montagem de subvolumes btrfs.

## Tarefas (Chores) 🧹

- Correção de um erro ortográfico no ficheiro README e atualização da informação de versão.

# 0.8.1

## Correções 🐛

- Resolvido um problema em que os repositórios ISA eram ativados incorretamente em Oracle VM.
- Corrigidas inconsistências no estilo de comandos para uma melhor experiência de utilizador.

## Tarefas (Chores) 🧹

- Remoção de lógica ucode desnecessária relacionada com o rEFInd, simplificando a base de código.

# 0.8.0

## Funcionalidades ✨

- Adicionado parser para perfis de pacotes de rede.
- Introduzida a capacidade de obter pacotes de ambiente a partir de um ficheiro TOML processado pela gucc.
- Implementada uma função auxiliar na gucc para descarregar ficheiros de URLs 📥.
- Adicionado suporte para obtenção de perfis de rede a partir de um URL com mecanismo de fallback na gucc.
- Integrada a instalação de perfis de rede com a distribuição binária.
- Movida a montagem de partições especificadas e a lógica de deteção para a gucc.
- Introduzido `utils::exec_checked` para uma execução mais segura de comandos externos.

## Melhorias ✅

- Melhorada a cobertura de testes para a funcionalidade crypttab na gucc 🧪.
- Melhorado o registo de logs na gucc através da configuração apropriada do logger.
- **Atualização da versão de C++ para C++23** ⬆️.
- Refatorização da base de código para utilizar funcionalidades do C++23 como `std::ranges` e `contains` para melhor legibilidade e eficiência.
- Refatorização de vários componentes para utilizar `utils::exec_checked`.

## Correções 🐛

- Resolvido um problema com tipos de biblioteca hardcoded na gucc.
- Corrigida a falta de implementação do logger e do ficheiro de cabeçalho na gucc.
- Ativada a biblioteca CPR para builds em ambientes de produção (non-development).
- Correção do processo de build estática.
- Resolvidos problemas introduzidos no commit [`a70e641e364`](https://github.com/CachyOS/New-Cli-Installer/commit/a70e641e364).
- Corrigidos erros de compilação no componente TUI.
- Corrigido um problema de dependência onde a dependência do FTXUI no range-v3 não era pública.

## Tarefas (Chores) 🧹

- Atualização das verificações de CI, processos de build e correção de problemas relacionados.
- Removida a instalação revertida de perfis de rede juntamente com a distribuição binária.
- Refatorização e limpeza de código em vários componentes: TUI, utils, chwd_profiles, user e testes.
- Removida a biblioteca range-v3 (não utilizada) das dependências do instalador.
- Atualização do ficheiro README.
