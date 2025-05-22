---
title: CachyOSとは?
description: CachyOSがより良い理由
---

CachyOSは洗練されたArch体験を提供し、ユーザーフレンドリーなインストーラーや、事前済みのデスクトップ環境、パフォーマンスに最適化された妥協のないユーザ体験、セキュリティシステムを備えていますします。以下にCachyOSの提供する。素晴らしいデスクトップ体験の機能を取り上げます。

## 最適化されたパッケージと、リポジトリ

CachyOSは様々なハードウェア(x86-64-v3, x86-64-v4,Zen4+ system)に最適化されたパッケージを提供し、システム全体のパフォーマンスを向上させます。
さらに、CachyOSはユーザーのQoL向上のためリクエストの多かったパッケージを[AUR](https://aur.archlinux.org/)に提供します。
CachyOSが最適化した様々なパッケージの詳細については、[最適化されたリポジトリ](/jp/features/optimized_repos)を確認ください。


## パフォーマンスと安定性のために調整されたカスタムカーネル

デスクトップの応答性を向上させるための様々なCachyOSベースのカーネルパッチセットパラメータと別に、メインラインまたはStableに取り込まれていない、有望なパッチセットを取り込みます。
それらのパッチは安定性が損なわれないようにユーザーに提供する前にテストをおこないます。
パッチの一覧については [Kernel](/jp/features/kernel)を見てください。

## カスタムCPUスケジューラのサポート

CPUスケジューリングはカーネルの重要な部分であり、すべてのタスクにCPU時間を公平に割り当てます。
Linux Kernelは各タスクが適切なスケジュールで実行するために様々なスケジューラを実装します。
公平スケジューリングクラスは、一般的にはデフォルトスケジューラーとして、
[EEVDF (Earliest Eligible Virtual Deadline First)](https://lwn.net/Articles/925371/)として知られています。

EEVDFによって、利用可能なCPU時間をすべてのタスク間で公平に分割するように調整されており、主にスループット重視のワークロードに適しています。CachyOSKernelの[EEVDFの設定](https://github.com/CachyOS/linux/blob/6.12/cachy/kernel/sched/fair.c#L76-L79),によってスループットよりもデスクトップの応答性に最適化されています。

しかしながら、EEVDFは、デスクトップ環境のインタラクティブ性のためにデザイんされたものではありません。これらを念頭においてCachyOSはデスクトップの応答性をスループットより優先する為に[BORE-Scheduler (Burst-Oriented Response Enhancer)](https://github.com/firelzrd/bore-scheduler)によるカーネルパッチを提供します。
高い応答性が必要なタスクには、バースト性に基づいて、そうでないタスクに比べてより多くのCPU時間を割り当てます。

6.12ではLinux kernelはBPF schedulersのホットプラグイン機能を有効化し、fair schedulerを異なるスケジューラに置き換えます。CachyOSはfirst-classのサポートを提供します。[sched-ext-Scheduler](https://github.com/sched-ext/scx).

よりCachyOSのカーネルについての詳しい情報はsched-ext-Schedulerを見てください [Kernel](/jp/features/kernel) 、 [sched-ext](/jp/configuration/sched-ext/).
## Anpassbarer Installationsprozess

## Hardware Detection

CachyOSは独自の [hardware detection tool](https://github.com/CachyOS/chwd) を提供します。
that correctly installs necessary packages and drivers for each system to lighten
the burden of post-install setups from users.

## Customizable Installation Process

CachyOS インストーラーはユーザーが望むシステムを選択できるようにします。これはカスタマイズに制限はありません。
- [Desktop環境](/jp/installation/desktop_environments/)
- [Boot Managers](/jp/installation/boot_managers/)
- [Kernel Flavors](/jp/features/kernel#variants)
- [Filesystems](/jp/installation/filesystem)
- インストールプロセス中にインストールするカスタムパッケージ

## CachyOS Applications

CachyOSはデフォルト「CachyOS Hello」 「CachyOS Package Installer」と呼ばれる独自のアプリケーションを提供します。 
CachyOS Helloは、システムのアップデート、サービスの有効化、ミラーリストの最適化を提供します。ワンクリックで設定や、問題の修正ができます。
Package Installerはパッケージのインストールをサポートします。
