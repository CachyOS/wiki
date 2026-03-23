---
title: CachyOS を選ぶ理由
description: CachyOS があなたに合っている理由
tableOfContents:
  minHeadingLevel: 1
  maxHeadingLevel: 4
---

CachyOS はパフォーマンスを重視した Arch Linux ディストリビューションで、安定性・効率性・使いやすさを兼ね備えたコンピューティング環境を提供します。ローリングリリースシステムによる強力な柔軟性と、高度な最適化や独自のツールチェーンによって、初心者から上級者まで快適に使える環境を実現しています。

## パフォーマンスと最適化

### 最適化されたパッケージとリポジトリ

CachyOS は、さまざまなモダン CPU アーキテクチャー向けに特別にコンパイルされた[**最適化パッケージ**](https://packages.cachyos.org/)を豊富に提供しています。`x86-64-v3`、`x86-64-v4`、`Zen4+` システムをサポートしており、ハードウェアの性能を最大限に引き出すようにソフトウェアがビルドされるため、大きなパフォーマンス向上が見込めます。

最適化リポジトリの詳しい情報については、[**最適化リポジトリ**](/ja/features/optimized_repos)をお読みください。

### パフォーマンスと安定性のためにチューニングされたカスタムカーネル

CachyOS のベースカーネルパッチセットは、デスクトップの応答性を向上させるためにさまざまなカーネルのパラメーターを調整しています。さらに、まだ mainline 版や安定版に適用されていないパッチセットも独自に取り込んでいます。

こうしたパッチはユーザーに提供される前に内部テストが行われ、安定性への影響がないことを確認しています。CachyOS が提供する全パッチの一覧については、[カーネル](/ja/features/kernel)をご覧ください。

### 高度な CPU スケジューラのサポート

CachyOS は最新の CPU スケジューラの最適化を組み込んだカーネルを提供しており、高負荷時でもスムーズで応答性の高いデスクトップ体験を実現します。

* **EEVDF (デフォルトの Linux カーネルスケジューラ):** 実効スループットに優れており、CachyOS カーネルにはデスクトップの応答性を向上させるカスタムの[**EEVDF チューニング**](https://github.com/CachyOS/linux/blob/6.15/cachy/kernel/sched/fair.c#L79-81)が適用されています。

* **[BORE](https://github.com/firelzrd/bore-scheduler) (Burst-Oriented Response Enhancer):** 最大限の応答性を必要とするユーザー向けに、BORE スケジューラをサポートしています。EEVDF を拡張するパッチセットで、高負荷な処理をしているときでもよりスムーズな体験を提供します。
  * カーネルバリアント `linux-cachyos-bore` で利用可能です。

CachyOS が提供するカーネルと sched-ext フレームワークの詳細については、[**カーネル**](/ja/features/kernel)と[**sched-ext**](/ja/configuration/sched-ext)のドキュメントをお読みください。

## 使いやすいツールとカスタマイズ

### [自動ハードウェア識別](/ja/features/chwd/chwd/)

CachyOS にはカスタムのハードウェア識別ツールが含まれており、システムに必要なドライバとパッケージを自動的に識別してインストールします。自力でドライバを探す必要がなくなるため、インストール後の手間と時間を節約できます。

### カスタマイズ可能なインストールプロセス

CachyOS のインストーラーでは、デスクトップ環境、パッケージ、ファイルシステム、ブートマネージャー、カーネルなどを自分の好みに合わせて選ぶことができます。

- [デスクトップ環境](/ja/installation/desktop_environments/)
- [ブートマネージャー](/ja/installation/boot_managers/)
- [カーネルフレーバー](/ja/features/kernel#variants)
- [ファイルシステム](/ja/installation/filesystem)
- [カスタムパッケージの自動インストール](https://github.com/CachyOS/cachyos-calamares/blob/cachyos-limine-qt6/src/modules/netinstall/netinstall.yaml)

### CachyOS カスタムアプリケーション

CachyOS はシステムの管理をシンプルにし、使い心地を良くする独自のアプリケーションを開発・メンテナンスしています。

現在 CachyOS が開発・メンテナンスしているアプリケーション一覧:

-   **[CachyOS Hello](https://github.com/CachyOS/CachyOS-Welcome):**  チューニングやパッケージのインストールを行うウェルカムアプリケーションです。
-   **[CachyOS パッケージインストーラー](https://github.com/CachyOS/packageinstaller):** アプリケーションをかんたんにインストールできるグラフィカルユーザーインターフェース (GUI) です。
-   **[CachyOS カーネルマネージャー](https://github.com/CachyOS/kernel-manager):** リポジトリからカーネルをインストールしたり、独自のカーネルを設定したり、`sched-ext` フレームワークを管理することができるツールです。
-   **[cachyos-rate-mirrors](https://github.com/CachyOS/rate-mirrors):** `pacman` の Arch と CachyOS のミラーを自動でランク付けして、パッケージのダウンロード速度を最適化するツールです。
-   **[systemd-boot-manager](https://github.com/CachyOS/systemd-boot-manager):** `systemd-boot` の新しいブートエントリを自動生成するツールです。`/etc/sdboot-manage.conf` でかんたんに設定可能です。

## フレンドリーで活発なコミュニティ

CachyOS の最大の強みは、拡大し続けるコミュニティです。コミュニティメンバーは知識を共有し、助け合い、プロジェクトの発展に貢献しています。皆さまのフィードバックが CachyOS の継続的な改善につながります。

[**CachyOS の Discord**](https://discord.gg/cachyos-862292009423470592)や[**CachyOS フォーラム**](https://discuss.cachyos.org/)からコミュニティに参加しましょう。
