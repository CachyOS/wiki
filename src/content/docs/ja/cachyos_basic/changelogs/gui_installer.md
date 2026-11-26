---
title: GUI インストーラー
description: Calamares と GUI ライブ ISO の更新ログ
ai_translated: true
sidebar:
  order: 1
---
26.06
----

**新機能**

* **パッケージ**
  * Python のパフォーマンス向上のため、拡張 PGO を使用するように
  * 汎用 x86 の分岐予測ミス調整のための [GCC パッチ](https://www.phoronix.com/news/GCC-x86-Generic-Mispredict)を追加、最新の Intel/AMD CPU における分岐予測ミスコストの算出方法を改善
  * コア数の多い CPU で OpenBLAS を使用する際に Phoronix Benchmarks で見つかったリグレッションを修正
  * `proton-cachyos` を `proton-cachyos-native` にリネーム
* **pacman** スクリプトレットおよびフックに[ネットワーク分離機能](https://github.com/CachyOS/pacman/commit/4056cd687f6379e61e7decb9b66e9b57cb3949a9)を追加
* **インストーラー**
  * デスクトップ環境の選択画面に CachyOS Hyprland Noctalia とプレビュー動画を追加
  * 標準アプリから `paru` を削除 (かわりに GUI や CLI を問わず [Shelly](https://wiki.cachyos.org/configuration/post_install_setup/#updating-the-system) の使用をおすすめします)
  * MangoWM 用のディスプレイマネージャーとして SDDM を追加
  * GNOME システムモニターを Resources に置き換え
  * オーディオパッケージグループに `realtime-privileges` を追加
  * ライブセッションにおけるキーボードレイアウトとバリアントの検出を改善
* **CachyOS-Welcome**
  * `blocky` 経由の DNS over QUIC (DoQ) に対応
  * 専用のトラブルシューティングページを追加
  * Ptyxis ターミナルに対応
  * アゼルバイジャン語とギリシャ語に対応
  * README と「貢献する」ページがフランス語に対応
  * イタリア語、ドイツ語、フランス語、日本語、ブルガリア語の翻訳を更新
* **chwd**
  * トルコ語に対応
  * ハンドヘルド用パッケージリストから `cachyos-handheld` を削除
  * 互換性のないドライバブランチが必要なマルチ GPU 環境 (異なる世代の NVIDIA GPU が混在する場合など) でのドライバ競合を、最適な共通ドライバをインストールして解決し、失敗したときはプライマリ GPU へフォールバックするように
  * 仮想マシン用に 32-bit Vulkan ドライバを追加
* **cachyos-settings:** ユーザーサービスに 15 秒の起動タイムアウトと 10 秒のシャットダウンタイムアウトを適用し、90 秒のシャットダウン遅延を防止するように

**修正**

* **インストーラー**
  * キーボードレイアウトの順序と `locale1` 設定の処理を修正
  * インストール先システムへの正しい pacman 設定のコピーを修正
  * インストール後に残っていた `/etc/calamares` ディレクトリを削除
  * Calamares のクリーンアップ処理を、全インストールスクリプトの実行後に行うように
  * 冗長な Limine のポストインストール手順を削除
* **CachyOS-Welcome**
  * `cachyos-pi` がインストールされていない状態で「アプリのインストール」を選択した際のクラッシュを防止、利用できない場合はボタンを非表示に
  * 保存された設定ファイルの読み込みまたは解析に失敗した際のクラッシュを修正、失敗時には設定をデフォルトにリセットするように
  * チューニングの検出処理 (`graphical-session.target.wants` を含む) と polkit 経由でのユーザーサービス系チューニングの一括無効化機能を修正
* **chwd**
  * 仮想マシンのベンダー ID を修正
  * 不要な `fprintd` サービスの有効化処理を削除
  * Mesa の削除ガードを修正

26.04
----

**新機能**

* **インストーラー**
  * GUI パッケージマネージャーを Octopi から Shelly に変更
  * インストール直後に初期状態への復元ポイントとなるスナップショットを作成し、恒久的に保存されるように
  * GRUB の `os-prober` をデフォルトで有効化
  * デスクトップ環境の MangoWM にドットファイルつきで対応
  * UKUI デスクトップへの対応を終了
  * AMD GPU において、Plymouth テーマが外部モニターを接続したノート PC で正しく表示されない問題があったため別のテーマに変更
  * GNOME のパッケージ一覧の内容を整理・更新
  * `MangoWM` と `DMS` シェルをインストールするオプションを追加
* **CachyOS-Welcome**
  * `blocky` 経由の DNS-over-HTTPS (DoH) に対応
  * カスタム DNS サーバーへの対応と、DHCP の自動検出表示およびリセット機能を追加
  * DNS サーバーにメタデータ (地域、ホームページ、フィルタリング) を表示し、個別のレイテンシテストに対応
  * VRAM 管理を切り替える `dmemcg-booster` を追加 (KDE では `plasma-foreground-booster` もインストール)
  * アクセシビリティ向けに完全なキーボードナビゲーションへ対応
  * PNG のソーシャルアイコンを鮮明で HiDPI 対応の SVG に置き換え
  * ターミナルヘルパーに `wezterm` を追加
* **chwd**
  * ネイティブな USB デバイス検出 (libusb/sysfs 経由) とシャーシ種別の検出を追加
  * 指紋認証 (`fprint`) と sudo の統合に対応
  * `intel-lpmd` 対応のため CPU ファミリー/モデル検出を追加
  * **ハンドヘルド:** Xbox ROG Ally の正確なパターンを追加
  * **ネットワーク:** Marvell AVASTAR 88W8897 Wi-Fi プロファイル (Surface Pro 4) を追加
  * NVIDIA プロファイルをノート PC とデスクトップ環境向けに分割
  * 仮想マシン用プロファイルを分割して更新
* **cachyos-settings:** デフォルトの NVMe I/O スケジューラを `none` から `kyber` へ変更

**修正**

* **インストーラー**
  * パーティション方式をデバッグログに出力するように
  * 既存のブートパーティションを再利用する際、古いマイクロコードパッケージを削除するように
* **CachyOS-Welcome**
  * ping に失敗しても接続確認が誤って true を返す問題を修正
  * ダークテーマで外部リンクアイコンが見えるように修正
  * ウェルカムアプリが同時に複数起動しないように修正
  * `StartupWMClass` を追加し、`.desktop` ウィンドウのマッチングを改善
* **chwd**
  * NVIDIA ドライバの競合を修正するため、非ポータブルデスクトップ環境で `kms` フックを `mkinitcpio.conf` から削除
  * NVIDIA プロファイルにおけるインストール済みカーネルの検索精度を向上
  * NVIDIA 470xx プロファイルから強制的な Xorg セッションを削除 (`plasma-login-manager` との互換性を修正)
  * 仮想マシン用プロファイルから古い GDM の `WaylandEnable=false` を削除
  * ハンドヘルドの誤検出 (特定の MSI ノート PC が MSI Claw として検出される場合など) を修正
* **cachyos-settings**
  * NVIDIA 595 ドライバにおける問題のため、`S01x` 電源管理を廃止
  * NVIDIA ドライバの VR 関連の問題のため、`AggressiveVblank` を無効化

26.03
----

**機能**

* **インストーラー**
  * デスクトップ環境の選択画面で、デスクトップの見た目を GIF / WebP 動画で確認できるように (Plasma, GNOME, Niri, COSMIC で対応)
  * 画像サイズ削減のため、デスクトップ環境の選択画面で JPEG XL に対応
  * GNOME および KDE 環境をインストールする際、デフォルトで Cachy-Update を有効化するように
  * マイクロコードのインストールロジックを改善し、ハードウェアを識別して適切なマイクロコードのみをインストールするよう変更
  * EFI パーティションが小さすぎる際のエラーメッセージを改善
  * デスクトップ環境の一覧を、セットアップの難易度順に並び替え (上から順にかんたん -> WM など上級者向け)
* **CachyOS-Welcome**
  * かんたんに Windows Docker 仮想マシンを構築できる "Winboat" をインストール・有効化するボタンを追加
  * DNS の選択肢に FFMUC DNS サーバーを追加
  * ウクライナ語の翻訳を追加
* **chwd:** NVIDIA dGPU 構成において initramfs のサイズを大幅に削減
* **linux-cachyos:** `0001-cachyos-base-all.patch` を生成する代わりに、リリースごとに Linux リポジトリ内で CachyOS のパッチ済みカーネルを生成するよう変更
* **cachyos-rate-mirrors:** 中国およびロシアのユーザー向けに、ミラーの評価前に適切なチェックを行うよう改善
* **cachyos-settings:** タイムゾーンに基づいてワイヤレスの規制区域を自動設定する機能を追加
* **ウェブサイト:** ウェブサイトのデザインをよりモダンに刷新・改善
* **GitHub:** バグレポートの品質向上とユーザーへのヘルプを目的として、重要な GitHub リポジトリに Issue テンプレートを追加
* **ミラー:** ロシア (jura12, cachy-arch.ru)、スウェーデン (Zyner)、カナダ (All Things Linux) に新しいミラーを追加

**修正**

* **インストーラー**
  * bcachefs-dkms が必要となるため、ファイルシステム選択から bcachefs を削除
  * 特定のデバイスで LUKS2 を使用した際の暗号化を修正
  * ディスプレイマネージャー "ly" の有効化に関する問題を修正
* **cachyos-settings:** `cachyos-bugreport.sh` が IP アドレス、ユーザー名、ホスト名、MAC アドレスを伏せ字にするように
* **chwd**
  * 汎用的なハンドヘルドプロファイルの追加と、ハンドヘルド用 GPU 対応の改善
  * Lenovo 製ハンドヘルドデバイスで fwupd を有効化


**ハンドヘルド版の変更履歴**

* **gamescope-session:** gamescope-session-plus を、Valve の gamescope-session からフォークした gamescope-session-cachyos へ置き換え
  * Steam Deck および Lenovo Legion Go デバイスのファームウェアアップデートに対応
* **plasma-login-manager:** ログインマネージャーを SDDM から plasma-login-manager へ置き換え
* **ブートローダー:** Limine を自動スナップショット付きのデフォルトとして選択するように変更、systemd-boot も引き続き選択可能
* **インストーラー:** Handheld 版 Calamares とデスクトップ版 Calamares を統合
* **ISO:** ISO が X11 に代わり Wayland を使用するように変更

26.01
----

**新機能**

* **インストーラー**
  * ブートローダーの選択を Calamares に統合し、管理を単一パッケージに集約
  * ダウンロードサイズ削減のため、ベースシステムのインストール**前**にアーキテクチャ検出を実行するように変更
  * GRUB の暗号化に LUKS2 を使用するように変更
  * パッケージの二重インストールを防ぐため、pacman に `--needed` を渡すように変更
  * NVMe 上の Btrfs で単一レベルの圧縮を使用するように変更
  * Wayland デスクトップ環境から Xorg 依存関係を削除
* **ISO**
  * ISO 環境のログインマネージャーを `plasma-login-manager` に切り替え
  * ISO に Stable カーネルと LTS カーネルの両方を同梱 (デフォルトでは Stable カーネルが選択されます)
  * ISO セッションを X11 から Wayland に切り替え
* **Netinstall**
  * Plasma インストールで SDDM の代わりに `plasma-login-manager` を使用するように変更
  * Niri で `noctalia-shell` を使用し、ドットファイルを更新
  * GNOME のインストール処理を整理
* **スライド:** Calamares スライドの誤字を修正し、Wiki を紹介する新しいスライドを追加
* **ミラー:** ミラーステータスページ (<https://packages.cachyos.org/mirrors>) に CachyOS ミラーの同期状態が表示されるように
* **cachyos-settings:** NVIDIA モジュールで `EnableAggressiveVblank` を有効化。割り込みトップハーフでの処理時間を短縮し、低遅延なディスプレイ割り込みを実現します
* **chwd**
  * NVIDIA Kepler 世代カード向けに Nouveau で VA-API を有効化するため `nouveau-fw` をインストールするように
  * 複数の新しい AMD GPU に AI-SDK 対応を追加
  * HHD を `steamos-manager` と `inputplumber` に置き換え
* **Proton-CachyOS**
  * FSR4 MLFG (機械学習フレーム生成) に対応。`PROTON_FSR4_[RDNA3_]UPGRADE` 使用時に自動で有効化されます
  * `d7vk` モジュールに対応。`PROTON_DXVK_DDRAW=1` で有効化できます
  * DualSense ハプティックフィードバックのパッチを取り込み
  * Wine が特定のドメインへ接続するのを防ぐ `WINE_BLOCK_HOSTS` を追加
  * NVIDIA dGPU 上で `winewayland` を使用する際、自動的に `ENABLE_HDR_WSI=1` を有効化
  * `winewayland.drv` 使用時のキーボードレイアウトの問題を修正
  * 1% Low FPS の低下を引き起こしていた長年のパッチを削除
  * DLSS プリセット選択と `libxess_dx11.dll` リダイレクトをより適切に処理するよう `protonfixes` にパッチを適用
  * 「gaming-meta」のデフォルトとして `proton-cachyos-slr` を使用するように変更 (ネイティブ版も引き続きサポートされます)

**修正**

* **Limine:** `limine-snapper-sync` の高い容量要件に対応するため、ブートパーティションのサイズを 4192 MB に拡大
* **インストーラー**
  * 「共存してインストール」または「パーティションを置換」オプション使用時に EFI パーティションが小さすぎる場合、インストーラーが進行をブロックするように
  * デスクトップを選択して次のステップへ進んだ後、戻って別のデスクトップを選択すると両方が選択されてしまう問題を修正
* **chwd:** デュアル GPU システムで問題を引き起こしていた `libva-nvidia-driver` を強制する環境変数を削除
* **cachyos-hello:** cachy-update が有効になっているにもかかわらず無効と表示される問題を修正
* **コントローラー:** 入力ルールを最新に更新し、複数のコントローラー入力の問題を修正
* **Framework 16 (Zen 5):** Calamares への書き込み時にセッションがフリーズする問題を修正

25.11
----

**新機能**

* **ISO/インストーラー:** アクセシビリティ向上のため Orca と espeak-ng を追加
* **initcpiocfg:** 対応構成で systemd フックを有効化
* **Netinstall:** Hyprland のドットファイルを削除
* **pacstrap:** ファイルシステムとして `bcachefs` が選択された場合に `bcachefs-dkms` をインストールするように
* **Calamares:** `plasma-login-manager` と `cosmic-greeter` に対応
* **Cosmic:** SDDM から `cosmic-greeter` に切り替え
* **フォント:** アジア圏ユーザー向けのフォントを改善
* **chwd**
  * 対応 GPU に `intel-media-sdk` と `vpl-gpu-rt` をインストールするように
  * Fermi GPU 向けに Nouveau NvBoost を有効化
  * 390xx レガシー NVIDIA ドライバのサポートを終了
  * Xbox ROG Ally / X に対応
* **cachyos-hello**
  * 内蔵パッケージインストーラーを削除し、代わりに CachyOS パッケージインストーラーを開くように変更
  * GUI 機能向けの CLI インターフェースを追加
  * ISO バージョン確認に関する各種修正
* **cachyos-settings:** zram-generator: 非圧縮ページに対する圧縮を削除
* **Proton-CachyOS**
  * 代替 DXVK として `dxvk-gplasync` を追加。`PROTON_DXVK_GPLASYNC=1` で有効化できます
  * `PROTON_FSR4_UPGRADE` 使用時に `DISABLE_LAYER_MESA_ANTI_LAG` を追加
  * 複数の **Wayland 修正** (フルスクリーン時のオフセット、デッドキー、DPI 挙動、映像出力の調整) と `winewayland.drv` の改善を取り込み
  * **ゲームごとのシェーダーキャッシュ**動作を導入・調整し、特に NVIDIA 向けにシェーダーキャッシュを拡大
  * FSR3 および XeSS アップスケーラーのアップグレード機能を追加

**修正**

* **Limine**
  * 仕様に問題のある UEFI 環境でエントリ登録なしでの Limine インストールを修正
  * `btrfs-overlayfs` フックの systemd バリアントを使用するように変更
* **Calamares:** XFS マウント設定のオプションから `attr2` を削除
* **chwd:** T2 チップの USB イーサネットインターフェースを無効化

25.08
----

**新機能**

* **サービス:** Arch Linux 公式サイトと同等のパッケージ検索機能を備えた **packages.cachyos.org** を追加 (CachyOS パッケージを除外するオプション付き)
* **カーネル:** インストール後、セカンダリ/バックアップカーネルとして **linux-cachyos-lts** も追加でインストールするように変更。通常は引き続き Stable カーネルの使用をおすすめします
* **ISO:** 起動の安定性を向上させるため、Stable カーネルで発生していた問題を受けてライブ ISO のカーネルを Stable から LTS に切り替え
* **デスクトップ:** デスクトップ選択肢に **Niri** を追加 (いくつかの事前設定済みドットファイルを含む)
* **NVIDIA:** 最新の省電力スタンバイ向けに、対応ハードウェアで **S0ix** スリープを有効化
* **GRUB:** ルートファイルシステムに **Btrfs** を使用している場合、起動可能なスナップショットが自動的に有効化・設定されるように
* **チューニング:** Welcome アプリのチューニングページに **Cachy-Update** を統合。Cachy-Update はタイマーとシステムトレイのインジケーターを追加し、アップデートを通知してワンクリックで更新できるようにします
* **Proton-CachyOS**
  * FSR4 ダウンローダーと同様に、DLSS DLL (バージョン **310.3.0**) のダウンローダーを追加。有効化するには環境変数 `PROTON_DLSS_UPGRADE=1` を使用します
  * DLSS HUD を有効化する環境変数 `PROTON_DLSS_INDICATOR=1` を追加
  * DLSS ダウンローダーと同様に、XeSS DLL (バージョン **2.1.0**) のダウンローダーを追加。有効化するには環境変数 `PROTON_XESS_UPGRADE=1` を使用します
  * RDNA3 GPU 向けに `PROTON_FSR4_RDNA3_UPGRADE` を追加。`PROTON_FSR4_UPGRADE` と同じ処理に加え、必要な他の変数も設定します
  * Proton に不足していた NVIDIA ライブラリのより完全な実装を追加。これまで無効化されていたゲームで PhysX などのオプションが有効化できるようになります。`PROTON_NVIDIA_NVCUDA`、`PROTON_NVIDIA_NVENC`、`PROTON_NVIDIA_NVML`、`PROTON_NVIDIA_NVOPTIX` を使って個別に有効化することも可能です
  * ゲームごとのシェーダーキャッシュを追加 (デフォルトで有効、`PROTON_LOCAL_SHADER_CACHE=0` で無効化可能)。シェーダー事前キャッシュ有効時と同様に、各ゲームの `<steamlibrary>/shadercache/<appid>` 配下にキャッシュされます。ゲームごとにシェーダーキャッシュが再構築される間はスタッタリングが発生しますが、キャッシュサイズの上限によってキャッシュ済みシェーダーが追い出されることはありません
  * Vulkan 1.3 に完全対応していない旧世代 GPU 向けのオプションの DXVK 代替として [dxvk-sarek](https://github.com/pythonlover02/DXVK-Sarek) を追加。`async` ブランチを使用しているため、アンチチートを使用するゲームやマルチプレイヤーゲーム全般では**使用しないでください** (ご注意ください)。有効化するには `PROTON_DXVK_SAREK=1` を使用します
  * FSR 3.1 DLL を新しいバージョンへアップグレードする `PROTON_FSR3_UPGRADE` を追加

**修正**

* **Limine**
  * MBR システムでブートローダーの場所に **/boot** マウントポイントを選択した際の `limine bios-install /dev/sdaX` エラーを修正
  * ブートローダーの場所が明示的に選択されていない場合に MBR システムでインストールが失敗する原因となっていた、`bootLoader` パスの未初期化値を修正
  * ブートパーティションで **bios-grub** フラグを使用すると「Stage 3 file not found」エラーが発生する可能性があることについての警告を追加
  * BIOS インストール環境における Windows との標準的なデュアルブートを修正
  * **GNOME (GDM)** 使用時に Btrfs スナップショットの起動が失敗する問題を修正
* **Launch Installer:** **cachyos.org** への ping が失敗した場合のオンラインチェック用フォールバック IP を追加

25.07
----

**新機能**

* **シェル:** インストール時にユーザーシェルを fish、zsh、bash から選択できるように変更 (引き続き fish がデフォルトで有効です)
* **chwd:** レガシー NVIDIA ドライバ向けに `plasma-x11` をインストールするように
* **Netinstall:** KDE Plasma と GNOME に `fwupd` を追加
* **mesa-git:** AMD Anti-Lag に対応
* **firefox:** userjs プロファイルの改善を含む代替 Firefox「firefox-pure」を導入。また、Firefox に追加インストールできる「cachyos-firefox-settings」も追加
* **Proton-CachyOS**
  * アップストリームの wine-wayland コミットを取り込み
  * FSR 3.1 対応ゲームで最新の FSR4 DLL を自動ダウンロードして置き換え、自動アップグレードを行う環境変数 `PROTON_FSR4_UPGRADE` を追加
  * Wine 10.0 以降にリリースされたアップストリーム Wine の Wayland 関連パッチを多数追加
  * アンチチート統合を改善するためのパッチを追加 (NelloKudo 氏に感謝)
  * vkd3d-proton および Wine 向けに AMD Anti-Lag 2 のパッチを追加
  * `umu-protonfixes` を最新コミットに更新

**修正**

* **キーリング:** 問題を回避し複数回リトライするようキーリングのインストール処理を改善
* **systemd-oomd:** le9 との併用時に処理の問題がありアプリケーションを早すぎる段階で強制終了していたため、systemd-oomd を無効化

**ハンドヘルド版の変更履歴**

* **handheld-settings:** SteamOS の複数の調整をハンドヘルド版に取り込み
* **pipewire:** 最小クォンタムを 256 に設定
* **SteamDeck-OLED:** Steam Deck OLED 向けに `galileo-mura` をインストールするように
* **Lenovo Legion Go S:** Lenovo Legion Go S に対応

25.05
----

**新機能**

* **ISO:** ISO 起動時にシステムの NVIDIA GPU を自動検出し、適切なモジュール (例: `nvidia-open`、`nvidia`) を読み込む機能を追加。10xx シリーズ以前のサポートを改善しました
* **Plymouth:** 新しい Plymouth アニメーションを追加
  * 制作に協力してくれた Eren 氏 ([https://github.com/erenyldz89](https://github.com/erenyldz89)) に感謝します！
* **ブラウザ:** Cachy-Browser は非推奨となり、デフォルトのプリインストールブラウザとして Firefox を提供するようになりました。Firefox (およびそのフォーク) へのプロファイル移行ガイドはこちらにあります: [https://wiki.cachyos.org/support/faq/#migrating-your-profile-from-cachy-browser-to-firefox](https://wiki.cachyos.org/support/faq/#migrating-your-profile-from-cachy-browser-to-firefox)
* **netinstall:** KDE のインストールに `kcalc`、`filelight`、`plymouth-kcm`、`kio-admin` を追加
* **mkinitcpio:** デフォルトでフォールバック initramfs の生成を無効化。これによりかなりのディスク容量を節約できます
* **ミラー:** バングラデシュに新しい 10 Gbps ミラーを追加。ホスティングしてくれた Limda に感謝します！
* **Proton**
  * **Proton CachyOS 9.0** のほぼすべてのパッチをリベース
  * Steam Linux Runtime ビルド向けに Wayland ドライバを有効化。`PROTON_ENABLE_WAYLAND=1` で有効にできます。実現してくれた [GloriousEggroll](https://github.com/GloriousEggroll) 氏に感謝します
  * Wine 10.0 以降にリリースされたアップストリーム Wine の Wayland 関連パッチを多数追加
  * Wayland ドライバと Vulkan ゲームにおける各種問題を修正。尽力してくれた [Etaash-mathamsetty](https://github.com/Etaash-mathamsetty) 氏に感謝します
  * FSR4 を有効化するための `amdxc64.dll` スタブ実装を追加。`FSR4_UPGRADE=1` で FSR 3.1 ゲームを FSR4 にアップグレードできます。重ねて [Etaash-mathamsetty](https://github.com/Etaash-mathamsetty) 氏に感謝します。手順: [https://github.com/Etaash-mathamsetty/wine-builds/releases/tag/fsr4](https://github.com/Etaash-mathamsetty/wine-builds/releases/tag/fsr4)
  * 有線音声ベースのハプティクスにおけるオーディオデバイス検出機能をより完全にする DualSense 関連パッチを追加。この特定の挙動に依存していた一部ゲームで機能が動作するようになります。元のパッチを提供した [ClearlyClaire](https://github.com/ClearlyClaire) 氏と、**Proton CachyOS 9.0** 以降調査してくれた [Exotic0015](https://github.com/Exotic0015) 氏に感謝します。アップストリーム: [https://gitlab.winehq.org/wine/wine/-/merge_requests/7238](https://gitlab.winehq.org/wine/wine/-/merge_requests/7238)
  * 機能していなかった Dragon Age: Inquisition 用パッチを削除。現時点では該当ゲームには **Proton CachyOS 9.0** をご使用ください
* **GRUB:** 新しい GRUB テーマを追加。[diegons490](https://github.com/diegons490/cachyos-grub-theme) 氏に感謝します

**修正**

* **ミラー:** ロシアのユーザーがインストールできなくなっていた問題を修正。ロシアがブロックし始めた CDN77 を使用しないことで緩和しました
* **kde-settings:** タスクバーの Discover アイコンを無効化
* **ddcutil:** YouTube 動画視聴時に AMD GPU がフリーズする問題を修正するため、`ddcutil` 2.2.1 プレリリース版を公開

**ハンドヘルド版の変更履歴**

* **os-branch:** ゲームモードで CachyOS Linux が使用されていることが正しく表示されるように
* **オーディオ:** コンボルバープロファイルを更新
* **steamos-manager:** Steam Deck における GPU クロック・TDP 管理、BIOS/ドックのアップデート、ストレージデバイスのメンテナンス、外部ストレージのフォーマット、バッテリー充電上限に使用されます
* **steamos-powerbuttond:** より快適なスリープ体験のため、標準の powerbuttond を置き換えます
* **jupiter-hw-support:** 20250501 に更新

25.04
----

**新機能**

* **occt:** ストレスチェック用のライブ環境を提供するため ISO に OCCT を追加
  * アイデアを提供してくれた Marek 氏に感謝します！

**修正**

* **カーネル:** Asus 製ノート PC におけるモジュールのクラッシュを修正
* **limine:** Limine に `mkinitcpio-limine-hook` がインストールされ、ブートローダーエントリを自動作成するように

**ハンドヘルド版の変更履歴**

* **オーディオ:** ROG Ally X と Legion Go 用のオーディオプロファイルを追加
* **gamescope:** `gamescope-plus` をアップストリームの `gamescope` に置き換え

25.03
----

**新機能**

* **ブートローダー:** Limine ブートローダーに対応
* **ブートローダー:** Limine ブートローダーの自動スナップショットに対応
* **Samba:** Samba マウントを簡単に設定できる `cachyos-samba-settings` パッケージを追加
* **NVIDIA:** クローズドソース NVIDIA モジュールで GSP ファームウェアを再び有効化
* **カーネル:** Asus Armoury ドライバに対応
* **セキュアブート:** 必要なファイルのみに署名するよう `sbctl-batch-sign` スクリプトを改善
* **udev:** NTFS パーティションのデフォルトドライバとして `ntfs3` を使用する設定を元に戻しました
  * 補足: NTFS3 カーネルドライバをデフォルトで使用したところ一部のユーザーで問題が発生したため、再び元に戻しています
* **wine:** Wine および Wine-Staging で WoW64 と NTSync をデフォルト化
* **scx-manager:** sched-ext GUI マネージャーをカーネルマネージャーから分離し独立したアプリケーションに変更
* **ハードウェア対応:** RDNA4、RTX 5070 Ti、RTX 5070 に対応
* **設定:** DLSS Swapper サポートを追加 (最新の DLSS バージョンとプリセットを自動的に更新・使用するスクリプトです)
* **パッケージ更新:** linux-cachyos 6.14.0、NVIDIA 570.133.07、Gnome 48、Plasma 6.3.3、mesa 25.0.2、linux-api-headers 6.14.0、linux-tools 6.14.0

**修正**

* **initcpiocfg:** `mkinitcpio` への `crc32c-intel` モジュール追加を削除 (非推奨となり、現在はデフォルトで `crc32c` モジュールが使用されます)
* **chwd:** T2 MacBook で `brcmfmac` のオフロードを無効化
* **chwd:** ノート PC には NVIDIA 390.xx ドライバをインストールしないように

25.02
----

**新機能**

* **カーネル**
  * 利用可能な全アーキテクチャのデフォルト **linux-cachyos** カーネルに Propeller 最適化を適用
    * **補足:** AutoFDO と組み合わせることで、ワークロードに応じてパフォーマンスが約 10% 向上する可能性があります
* **NVIDIA:** Blackwell アーキテクチャに対応
* **ISO:** Blackwell に対応するためデフォルトで `nvidia-open` モジュールを使用。Turing より前の世代の GPU をお使いの方は、1 番目またはフォールバックの起動オプションをご使用ください
* **設定:** X11 セッションでタップクリックをデフォルトで有効化
* **udev:** NTFS パーティションのデフォルトドライバとして `ntfs3` を使用
* **game-performance:** ゲーム実行中にスクリーンセーバーを無効化
* **kernel-manager (sched-ext):** サーバーモードに対応
* **カーネル:** AMD Preferred Core 機能の修正を追加
* **chwd:** RTD3 の回避策を再び追加
* **パッケージ更新:** linux-cachyos 6.13.0、NVIDIA 570.86.16、LLVM 19、glibc 2.41、mesa 24.3.4

**修正**

* **chwd:** Intel と NVIDIA のハイブリッド構成ノート PC で DaVinci Resolve が GPU を使用できない問題を修正
* **glibc:** CVE-2025-0395 の修正を追加
* **kernel-manager:** デフォルトの Arch カーネル用にビルド済みの NVIDIA モジュールが利用可能な場合、そのインストールを試行するように
* **kernel-manager:** モジュールが利用できない場合に値が上書きされるのを防ぐ追加チェックを実装

**ハンドヘルド版の変更履歴**

* **hooks:** ネイティブコンパイルされた Proton の使用を再び許可
* **その他:** 各種アップデートおよび修正

24.12
----

**新機能**

* **カーネル**
  * 利用可能な全アーキテクチャのデフォルト `linux-cachyos` カーネルに AutoFDO を適用
    * **補足:** 現時点の制限によりパフォーマンス向上は最小限です。プロファイルのマージには LLVM 19 が必要であり、Propeller 最適化もそれに依存しています。Arch Linux での LLVM 19 採用に伴い、年末までには LLVM 19 とさらに最適化されたプロファイルが利用可能になる見込みです
* **chwd:** Rusticl が正しく設定されるように
* **chwd:** フック呼び出し時のエラーログ出力を改善
* **chwd:** VA-API ドライバの選択を修正
* **cachyos-settings:** Zink 経由でのアプリケーション実行を容易にするスクリプトを追加
* **Sysctl 設定:** 複数の設定を見直し・最適化
* **カーネルマネージャー:** ネイティブなスケジューラ切り替えを可能にする `scx_loader` に対応
* **インストーラー:** Bluetooth サービスをデフォルトで有効化
* **Netinstall**
  * インストールパッケージに `wireless-regdb` を追加
    * これにより適切なチャンネルを使用するよう接続が設定され、追加チャンネルが解放されて通信速度が向上する可能性があります
    * **補足:** デフォルトでは汎用地域が設定されています。最適なパフォーマンスを得るにはお住まいの地域に合わせてカスタマイズすることをおすすめします
* **パッケージ更新:** NVIDIA 565.77、linux-cachyos 6.12.6、mesa 24.3.2、scx-scheds 1.0.8、zfs 2.2.7

**バグ修正**

* **インストーラー:** インストールログ表示時にデバッグ用ターミナルウィンドウが開かないように変更
* **パーティション管理**
  * 適切な `umask` 設定により、十分な権限がない状態での `/boot` へのアクセスを防止
* **Launch Installer:** インターネット接続チェックを修正

**ハンドヘルド版の変更履歴**

* ハンドヘルド関連パッケージを更新
* 電源プロファイル処理の問題を修正
* Wi-Fi 6 に対応

24.11
----

**新機能**

* **thp-shrinker:** ゼロ埋めページに対して `max_ptes_none` の値を 80% に設定。THP を常に使用する際のメモリ使用量を削減しつつ、同等のパフォーマンスを維持します
* **NVIDIA:** ユーザーが手動でクローズドドライバに切り替えた際、GSP ファームウェアが自動的に無効化されるように
* **chwd (NVIDIA):** ノート PC で最大の TDP を引き出せるよう `nvidia-powerd` サービスを有効化
* **proton-cachyos:** DLSS フレーム生成が動作するように。将来的にはアップストリームの Proton でも動作する見込みです
* **カーネル:** AMD Cache Optimizer を適用。デュアル X3D CCD 搭載 CPU のユーザーは、周波数優先コアとキャッシュ優先コアを切り替えられるようになりました
* **カーネル (amd-pstate):** Strix Point 向けの `amd-pstate` パフォーマンス修正をバックポート
* **カーネル:** AMD RDNA2 および RDNA3 GPU の TDP 問題に対するアップストリーム修正を追加
* **カーネル:** 5120x1440@240Hz 構成のディスプレイ向けタイミング修正を追加
* **カーネル:** リポジトリ内に実験的な AutoFDO 最適化カーネル「linux-cachyos-autofdo」を用意
* **ISO:** ハンドヘルド版を実行中のユーザーが非対応デバイスでインストールを開始した場合に警告を出すチェックを追加
* **ISO:** ユーザーが最新の ISO を使用しているか確認し、古い場合は警告を出すチェックを追加

**バグ修正**

* **refind (パーティショニング):** 3 分割パーティションレイアウトから 2 分割レイアウトに変更
* **netinstall:** Plasma のインストールに `kdeplasma-addons` を追加
* **calamares:** スワップパーティションを含むパーティショニング時の問題を修正

**ハンドヘルド版の変更履歴**

* ROG Ally X のサポートを改善

24.10
----

**新機能**

* **パッケージ更新:** linux-cachyos 6.11.1、mesa 24.2.4、scx-scheds 1.0.5、python 3.12.7

**バグ修正**

* **sddm:** Wayland セッションのログイン問題を修正するため新しい SDDM を取り込み
* **ISO:** 一部環境でのグラフィカルセッション読み込みを修正するため `xf86-video-amdgpu` を追加
* **chwd:** プロファイルの再インストールを修正

24.09
----

**新機能**

* **パッケージ:** LLVM、Clang、svt-av1、nodejs など多数のパッケージを PGO で最適化。たとえば Clang コンパイラが 10% 高速化しました
* **リポジトリ:** リポジトリの同期・更新頻度が向上し、遅延がさらに減少。同期間隔を 3 時間ごとから 1 時間ごとに短縮しました
* **リポジトリ:** 2024 年 9 月 27 日より、`-fpic` でコンパイルされるパッケージでは自動的に `-fno-semantic-interposition` が有効になります。多くのパッケージでパフォーマンス向上が期待できます
* **zlib-ng:** `zlib` の代替として使用するように変更
* **sddm:** KDE インストールで SDDM のコンポジタがデフォルトで Wayland を使用するように変更
* **cachyos-settings:** NetworkManager のバックエンドとして `systemd-resolved` を使用するようになり、DNS キャッシュが改善
* **cachyos-settings:** 一部環境での時刻同期問題を回避するため、タイムサーバーとして `time.google.com` を使用するように
* **gcc:** `znver5` のチューニングに関する修正を追加
* **gcc:** Clear Linux からパッチとフラグをチェリーピック
* **glibc:** Clear Linux からのチェリーピックに加え、「evex」パッチを追加
* **wiki:** Wiki に多数の新規追加と全面改訂を実施
* **chwd:** デバイス処理を簡素化
* **chwd:** すべてのプロファイルを PCI デバイス専用に設計
* **chwd:** ドライバのインストールを自動処理する `--autoconfigure` を追加
* **パッケージ更新:** linux-cachyos 6.11.0、mesa 24.2.3、Plasma 6.1.5、NVIDIA 560.35.03、calamares 3.3.10、Qt 6.7.3

**バグ修正**

* **Launch-Installer:** インストール開始前にハードウェアクロックを同期する修正を追加
* **calamares:** インストール後のファイルシステムのアンマウントに関する修正を追加
* **keyring:** インストール開始前にキーリングをクリーンアップして再生成するようにし、まれに発生するキーリングの問題を修正
* **sysctl:** コアダンプを再び有効化
* **chwd:** 潜在的な競合を防ぎ Spectacle などのソフトウェアとの互換性を高めるため、PRIME プロファイルから `libva-nvidia-driver` を削除
* **cachyos-settings:** GNOME Wayland のクラッシュに対する回避策を追加
* **cachyos-fish/zsh-config:** Wayland 固有のワークアラウンドを削除

**ハンドヘルド版の変更履歴**

* **Ally / Ally X:** HHD がカーネルドライバを正しく使用せず問題を引き起こしていたため、`inputplumber` に置き換え
* ハンドヘルド関連パッケージを更新

24.08
----

**新機能**

* **chwd:** NVIDIA が対応カードでデフォルトとしてオープンモジュールを使用するように
* **デスクトップ:** インストール選択肢に COSMIC デスクトップ環境を追加
* **NVIDIA:** 最新の 560 ベータドライバがデフォルトに。Firefox やその他アプリケーションでのクラッシュを修正するため `egl-wayland` にパッチを適用
* **ミラー:** CDN77 が世界中のキャッシュを備えたオブジェクトストレージを CachyOS に提供し、ユーザーの接続速度が大幅に向上
* **ミラー:** 同期の問題を回避するため CachyOS 独自の Arch Linux ミラーを提供開始し、フォールバックミラーとともにインストール時のデフォルトに設定
* **セキュアブート:** 簡単にセキュアブートに対応できるよう Wiki にスクリプトとチュートリアルを追加
* **cachy-chroot:** chroot を簡素化するため `fstab` 経由の自動マウントを追加
* **cachy-chroot:** LUKS 暗号化に対応
* **kernel-manager:** sched-ext 設定で sched-ext フラグを設定する機能を追加
* **kernel-manager:** `nvidia-open` をビルドするオプションを導入
* **kernel-manager:** 設定ページで最後に使用したオプションを記憶する機能を追加
* **パッケージ更新:** linux-cachyos 6.10.5、mesa 24.2.0、Plasma 6.1.4、NVIDIA 560.31.02

**バグ修正**

* **chwd:** デバイス名に基づく PRIME プロファイル検出を改善
* **chwd:** 一部環境での問題のため RTD3 の回避策を削除
* **cachyos-rate-mirrors:** ライブ ISO 上での実行時はミラーのランキングを無効化
* **cachy-chroot:** パーティションに有効な fstype または UUID がない場合 (例: Microsoft 回復パーティション) にクラッシュする問題を修正
* **calamares:** キーリングの初期化処理をリファクタリング
* **kernel-manager:** LTO カーネルおよびモジュール有効時にカスタム pkgbase をビルドする際のサポートを修正
* **kernel-manager:** パスワードプロンプトの遅延を修正
* **ISO:** 最新の GPU 向けに `radeon.modeset=1` を `amdgpu.modeset=1` に置き換え
* **game-performance:** プロファイルが利用できない場合の失敗を防止

**ハンドヘルド版の変更履歴**

* **デバイス対応:** Ally X に対応 (Luke Jones 氏に感謝)
* **libei:** `libextest` を置き換える `libei` に対応
* **packagekit:** Discover 経由でのシステム更新時の問題を防ぐため `packagekit` のインストールをブロック
* **hook:** 潜在的な問題を避けるため、ネイティブコンパイルされた Proton バージョンと競合する pacman フックを追加
* `jupiter-fan-control`、`steamdeck-dsp`、および Steam Deck ファームウェアを更新

24.07
----

**新機能**

- **リポジトリ:** Zen 4 最適化リポジトリを導入 (Zen 4 および Zen 5 CPU 向けに使用されます)
- **ISO:** Zen 4 / Zen 5 リポジトリ向けの自動アーキテクチャチェックを追加
- **chwd:** AMD GPU 向けに GC サポートを追加。公式 ROCm 対応 GPU の検出に役立ちます
- **chwd:** 対応カードで `libva-nvidia-driver` を使用するように
- **ksmctl:** KSM を有効/無効化するツールを導入 (`ksmctl --enable`)
- **カーネル:** `linux-cachyos` カーネル向けにデバッグ用の未ストリップ `vmlinux` を含む `linux-cachyos-dbg` パッケージを提供
- **カーネル:** AMD CPB ブーストが利用可能になり、`power-profiles-daemon` にパッチを適用して `powersave` プロファイル設定時に AMD CPU のブーストを無効化するように
- **カーネル:** 動画再生時の AMD SoC 向け省電力パッチを追加
- **kernel-manager:** GUI から sched-ext スケジューラの管理および情報取得を行うサポートを追加
- **steam/proton:** Steam の起動オプションに追加できる `game-performance` スクリプトを追加
- **power-profiles:** AMD P-State 対応 CPU で最小リニア周波数をより高く設定し、レイテンシと 1% Low を改善できるように
- **kwin:** ティアリングのバックポートを追加して検証済み (NVIDIA ではネイティブ Wayland アプリケーションのみで動作します)
- **netinstall:** インストール可能なデスクトップ環境から Cutefish を削除
- **ミラー:** オーストリアと中国 (清華大学 TUNA 協会ホスト) のミラーを追加。中国のユーザーにとって大きな助けになるはずです
- **パッケージ更新:** linux-cachyos 6.9.9、mesa 24.1.3、NVIDIA 555.58.02、Plasma 6.1.2、LLVM 18.1.8

**バグ修正**

- **ISO:** `copytoram` を `yes` ではなく `auto` に設定
- **ISO:** ノート PC におけるライブ ISO でのスリープを修正
- **Launch Installer:** chroot 内での `archlinux-keyring` 取得時の問題を避けるため、インストール開始前に最新の `archlinux-keyring` をインストールするように
- **ミラーランキング:** インストール時は Tier 1 ミラーのみをランク付けするように
- **pacman.conf:** 使用されていない pacman リポジトリを削除
- **cachy-chroot:** `.snapshot` サブボリュームを表示しないように
- **Calamares:** ユーザーから問題の報告があったため `Preservefiles` モジュールを使用しないように変更

**ハンドヘルド版の変更履歴**

- 異なるスケーリングを適用するための設定ファイル `/home/$USER/.config/deckscale` を追加
- GameMode の切り替えをより安定化
- Steam Deck の Wi-Fi / Bluetooth ファームウェアを更新
- GameMode 用の自動マウントを実装
- Wine の CPU トポロジー、HDR、バックライトに関する `gamescope-session` のワークアラウンドを追加
- リフレッシュレート選択を修正
- `jupiter-hw-support`、`steamdeck-dsp`、`jupiter-fan-control`、`gamescope-session-git` を更新

24.06
----

**新機能**

- **chwd:** ハンドヘルドハードウェア検出を導入
- **chwd:** T2 MacBook サポートを導入
- **chwd:** ネットワークドライバ検出を追加
- **インストール:** MacBook T2 に対応
- **ISO:** システムへの chroot を支援するスクリプト `cachy-chroot` を追加
- **ISO:** Microcode フックに切り替え (最新の Ventoy リリース 1.0.98 の使用が必要です)
- **ISO:** オフラインインストーラーを提供しなくなったため、`copytoram` を無効化する必要がなくなり有効化
- **ファイルシステム:** BTRFS をデフォルト選択のファイルシステムに設定
- **netinstall:** `firewalld` の代わりに `ufw` を使用
- **Calamares:** ブランディングスライドを更新
- **スライド:** 最新の変更に合わせて更新
- **パッケージ更新:** linux-cachyos 6.9.3、mesa 24.1.1、xwayland 24.1、NVIDIA 555.52.04、Plasma 6.0.5

**バグ修正**

- **Calamares (umount):** emergency を再び有効化
- **Qtile:** マルチメディアコントロールが正しく動作するように修正
- **NVIDIA:** Wayland でのスリープが機能するために必要なサービスとオプションを有効化
- **netinstall:** インストールから `b43-fwcutter` を削除
- **netinstall:** `hyprland-git` を `hyprland` に置き換え
- **netinstall:** モジュール欠落による問題を避けるため選択肢から `linux-cachyos-lts` を削除
- **Calamares (Shellprocess):** キーリングのインストール前にミラーランキングを実行するように移動

**実験的ハンドヘルド版の変更履歴**

- デフォルトを KDE Vapor テーマ (SteamOS テーマ) に設定
- デフォルトファイルシステム: BTRFS
- デフォルトカーネル: `linux-cachyos-deckify`
- SDDM が Wayland を使用するように
- レイテンシ削減のための HHD 環境変数フラグを追加
- ゲームモードの切り替え挙動を改善するカーネル引数を追加
- ユーザー名を編集可能に
- ハードウェア検出により使用デバイスに応じた必要パッケージを設定・インストール
- Maliit キーボードがダークモードを使用するように
- 適切なスリープのための Valve 製 `powerbuttond` を採用
- Steam にショートカットを追加できるように
- `scx-scheds` を最新 git コミットに更新し、LAVD スケジューラの最新改善を提供
- `cachyos-handheld` に自動マウントを追加
- CachyOS から Steam Deck の BIOS アップデートを実行可能に

24.05
----

**新機能**

- **ファイルシステム:** ファイルシステム選択肢として Bcachefs を導入
- **pacstrap:** Bcachefs 使用を検出し対応する `bcachefs-tools` をインストールする機能を追加
- **CachyOS-AI-SDK:** すぐに使える NVIDIA SDK 環境を提供する新しいインストールオプションを導入
- **CachyOS-Deckify:** ハンドヘルド向けバリアント (実験的) を提供。詳細は[こちら](https://discuss.cachyos.org/t/information-experimental-cachyos-deckify/203)をご覧ください
- **BTRFS:** スナップショット用の自動 Snapper (CachyOS Hello アプリ内からインストール可能)
- **ISO:** オフラインインストーラーを廃止
- **パッケージ更新:** Python 3.12、gcc 14.1.1、mesa 24.0.6、xwayland 24.1rc2、NVIDIA 550.78

**バグ修正**

- **settings.conf:** ハードウェア検出を netinstall の前に移動
- **pacstrap:** `btrfs-assistant-git` の代わりに `btrfs-assistant` を使用
- **plymouth:** ZFS + 暗号化構成で `plymouth` フックを削除
- **ISO:** インストール中の画面ロックを防ぐため KDE 用の各種設定ファイルを追加
- **services-systemd:** `fstrim.timer` を正しく有効化
- **umount:** ZFS インストール時の問題を避けるため emergency を無効化
- **shellprocess:** オフラインインストールの残存ファイルをクリーンアップ

24.04
----

**新機能**

- **Plymouth:** テーマ付きのブートアニメーションを提供するため Plymouth を使用
- **ISO:** Calamares でのキーボードレイアウト設定時の問題のため X11 に戻しました
- **rEFInd:** 新しいパーティショニングレイアウト (`/boot` と `/boot/efi` を分離)
- **netinstall (KDE):** デフォルトで `xwaylandvideobridge` をインストール
- **netinstall:** `ly` のバグのため、複数のデスクトップ環境で `ly` の代わりに `lightdm` を使用
- **systemd-boot:** 前回選択したブートエントリを記憶できるよう systemd-boot で `@saved` を使用
- **cachyos-keyring:** `cachyos-keyring` パッケージをリファクタリングし、`cachyos-trusted` キーリングを提供
- **ISO:** ISO の `mkinitcpio` イメージに ZSTD 19 圧縮を使用
- **パッケージ更新:** xz 5.6.1-3、linux-cachyos 6.8.2、pacman 6.1.0-5、mesa 24.0.4、Plasma 6.0.3、nvidia 550.67、cachyos-settings 39-2

**バグ修正**

- **自動ログイン:** SDDM と併用した際の自動ログインオプションを修正
- **xz:** パッチ適用済みの `xz` パッケージを提供
- **libarchive:** 悪意のある xz 開発者によるコミットの影響を軽減
- **cachyos-settings (udev ルール):** RAM 使用量が大幅に増加するため、`watermark_scale_factor` を 125 に設定しないように変更
- **calamares (pacman-keyring):** キーリングをインストール環境に統合するためのよりシンプルな手法を使用

24.03.1
----

**新機能**

- **netinstall:** ユーザーの混乱を避けるため、netinstall の選択肢から追加カーネルを削除 (他のカスタムカーネルはカーネルマネージャーからインストールできます)
- **カーネルマネージャー:** 検出時に NVIDIA モジュールを自動インストール、Qt 6 向けにリベース、LTO オプション使用時のカスタム名を修正
- **パッケージインストーラー:** Qt 6 向けにリベースし、pacman 6.1 に対応
- **パッケージ更新:** linux-cachyos 6.8.1、pacman 6.1、mesa 24.0.3、Plasma 6.0.2、llvm 17.0.6

**バグ修正**

- **NVIDIA:** NVIDIA グラフィックス環境での問題を避けるため、`nvidia.drm.modeset` の所有権をより早い段階で取得するよう nvidia モジュールにパッチを適用
- **rEFInd:** 問題を避けるため LTS カーネルをインストールしないように変更
- **shellprocess:** `liveusers` ディレクトリを完全に削除

24.03
----

**新機能**

- **ISO:** ISO に Plasma 6 を同梱しデフォルトで Wayland を使用。netinstall に関する混乱を避けるため GNOME ISO は廃止
- **Calamares:** Qt 6 向けにリベース
- **refind:** LUKS2 暗号化を含め、オプションとして F2FS と ZFS を追加
- **ミラー:** 2 つのグローバル CDN を提供開始 (Cloudflare R2 ホストと DigitalOcean ホスト)
- **ミラーリスト:** より高速に配信するため、CDN から直接オンラインインストーラーを取得するように変更
- **initcpiocfg:** マイクロコードの早期読み込みに新しい `microcode` フックを使用
- **ブートローダー:** ブートローダーでマイクロコードを読み込まないように変更
- **パッケージ更新:** linux-cachyos 6.7.9、mesa 24.0.2、zfs-utils 2.2.3

**バグ修正**

- **pacstrap:** ユーザーによりクリーンなインストール選択肢を提供するため、設定パッケージをインストールしないように変更
- **shellprocess_pacman:** ランク付けされた `cachyos-v4-mirrorlist` もターゲット環境にコピーするように修正

24.02
-----

**新機能**

- **refind:** より多くのファイルシステムと暗号化オプションを提供するため、レイアウトを `/boot/efi` から `/boot` に変更
- **Live-ISO:** ライブ ISO のクリーンアップと同期を実施
- **Launch Installer:** オンラインインストールの推奨表示を追加
- **shell-configs:** ターミナル起動時に fastfetch を無効化するオプションと `update` エイリアスを追加
- **netinstall:** KDE に `phonon-qt5-vlc` を追加
- **パッケージ更新:** linux-cachyos 6.7.5、mesa 23.3.5、gcc 13.2.1-12、glibc 2.39、mesa 24.0.1、nvidia 550.54.14

24.01
-----

**新機能**

- **x86-64-v4:** インストール時の自動検出とリポジトリの有効化に対応
- **linux-cachyos:** デフォルトカーネルで `sched-ext` スケジューラフレームワークを提供開始
- **xwayland:** Explicit Sync パッチをデフォルトで提供
- **パッケージ更新:** linux-cachyos 6.7、mesa 23.3.3、gcc 13.2.1-8、xorg-xwayland 23.2.4

**バグ修正**

- **chwd:** Ada Lovelace 世代の NVIDIA カードにおいて、アーリー KMS での問題を避けるため NVIDIA モジュールを直接 initramfs に組み込むように変更

23.12
-----

**バグ修正**

- **zfs:** 互換性を確保するためプールオプションに `compatibility=grub` を追加
- **grub/xfs:** 新しい XFS の `bigtime` デフォルト設定との互換性を保つため GRUB にパッチを追加
- **netinstall:** `xdg-desktop-portal-hyprland-git` の代わりに `xdg-desktop-portal-hyprland` を使用

23.11
-----

**新機能**

- **nvidia:** DKMS の代わりに `nvidia` モジュールを使用
- **Calamares:** アップストリームと同期
- **パッケージ更新:** linux-cachyos 6.6.1、nvidia-utils 545.29.02、mesa 23.2.1、zfs-utils 2.2.0、mkinitcpio 37

**バグ修正**

- **nvidia-hook:** 新モジュールでのインストール時の問題を避けるため `nvidia-hook` を再追加
- **netinstall:** 最近の KF5 パッケージング変更に伴いパッケージ名を変更
- **netinstall:** GNOME インストールに `xdg-desktop-portal-gnome` を追加

23.09
-----

**新機能**

- **systemd-boot:** デフォルトを LUKS2 に設定
- **netinstall:** CachyOS パッケージ用の専用カテゴリを提供
- **Calamares:** アップストリームと同期
- **パッケージ更新:** linux-cachyos 6.5.3、nvidia-utils 535.104.05、mesa 23.2.7

**バグ修正**

- **shellprocess_sdboot:** インストール処理中にブートエントリを生成する際、`sudo` を使用しないように変更

23.08
-----

**新機能**

- **Calamares:** アップストリームと同期
- **パッケージ更新:** linux-cachyos 6.4.10、nvidia-utils 535.98

**バグ修正**

- キーリングを更新し、正しく動作するように修正

23.07
-----

**新機能**

- **CachyOS-Settings:** 使用状況に応じてネットワーク設定を自動調整する `bpftune` を同梱
- **CachyOS-Qtile-Settings:** 使い勝手の改善、より見やすいアイコンなどを追加
- **パッケージ更新:** linux-cachyos 6.4.2、cachy-browser 115.0.1、mesa 23.1.3

**バグ修正**

- `rate-mirrors` を修正
- `chwd` (ハードウェア検出) に複数の修正を実施
- インストーラーにおけるハイブリッド構成向けプロプライエタリドライバのインストールを修正
- 主に VM などごく一部の構成で発生していた Calamares のフリーズを修正
- **スライド:** スライド 6 の誤字を修正

23.06
-----

**バグ修正**

- **オフラインインストール:** Calamares を修正

23.05
-----

**新機能**

- CachyOS の Git 移行レイアウトをインストールに反映
- `chwd` (`mhwd`) に複数の修正を実施
- **Pacman:** アップデート前にユーザーへメッセージを表示できる機能を追加
- Calamares をアップストリームと同期
- **パッケージ更新:** linux-cachyos 6.3.4、cachy-browser 113.0.1、mesa 23.1.1、python 3.11

**バグ修正**

- **netinstall:** パッケージ変更に伴う軽微な修正
- **スライド:** 最新の変更を反映するようスライド 6 を更新

23.04
-----

**新機能**

- Qtile デスクトップ環境を導入
- **mhwd を刷新:** Rust で書き直し、GPU とネットワークカードのプロファイルを簡素化し、古いコードを多数削除
- **パッケージ更新:** linux-cachyos 6.2.12、cachy-browser 112.0.1、mesa 23.0.3、zfs-utils 2.1.11

**バグ修正**

- **f2fs:** systemd との問題があるため `atgc` マウントオプションを削除

23.03.1
-------

**新機能**

- **パッケージ更新:** linux-cachyos 6.2.7、cachy-browser 111.0

**バグ修正**

- アップストリームの不具合コミットに起因する Calamares と `lightdm` ディスプレイマネージャーの問題を修正
- オフラインインストール時のキーリング問題を修正
- **rEFInd:** デフォルトで `linux-cachyos-lts` を使用するように変更 (現行の 6.2 は rEFInd と相性が良くないため)

23.03
-----

**新機能**

- rEFInd ブートローダーを追加
- MHWD を使用した NVIDIA ドライバの自動インストールに対応
- ZFS インストールの暗号化に対応
- ネットインストールに Hyprland を追加
- `CachyOS-KDE-Settings` が KDE デフォルトテーマを使用するように変更 (CachyOS テーマも引き続きプリインストールされており利用可能)
- **パッケージ更新:** linux-cachyos 6.2.2、mesa 23.0.0、cachy-browser 110.0.1、plasma 5.27.2
- Calamares のブートローダーモジュールを全面的に見直し・改善
- ISO が GPG キーで署名されるように
- MHWD を改善・更新
- Calamares をアップストリームと同期

**バグ修正**

- 「パーティションを置換」オプションでファイルシステム選択が可能に
- スライド 3 の誤字を修正
- `nouveau` を修正しモジュールが適切に読み込まれるように
- **MHWD:** Intel/ATI および Nouveau で modesetting を使用するように
- 起動時の問題を引き起こしていたため、ライブ ISO の `mkinitcpio` から `zfs` フックを削除
- アップデートは SourceForge 上のミラーからダウンロードできます

23.02
-----

**新機能**

- `cachyos-community-v3` リポジトリを追加
- ネットインストールに Budgie、MATE、LXDE デスクトップ環境を追加
- `bluetooth.service` をデフォルトで有効化
- F2FS と GRUB を再び有効化し、正常に動作するように
- **パッケージ更新:** linux-cachyos 6.1.10、mesa 22.3.4、zfs-utils 2.1.9、glibc 2.37、cachy-browser 109.0.1

**バグ修正**

- ミラーのランク付けに失敗した場合、`rate-mirrors` が未ランク付けのミラーにフォールバックするように
- `cachyos-rate-mirrors` の `fetch-mirrors-timeout` を延長
- ミラーリストの問題を避けるため hosts に GitHub を追加
- `syslinux` における BIOS 用ブートエントリを更新

23.01
-----

**新機能**

- Calamares スライドを見直し・更新
- ネットインストールに UKUI デスクトップ環境を追加
- ネットインストールに Cinnamon デスクトップ環境を追加
- **カーネルコマンドライン:** CachyOS はデフォルトで zram を提供するため、zswap をデフォルトで無効化
- Calamares を最新コミットに更新
- LLVM 15 をデフォルトとして同梱
- **パッケージ更新:** linux-cachyos 6.1.7、mesa 22.3.3、Plasma 5.26.5、llvm 15.0.7、gcc 12.1.1、binutils 2.40、zfs-utils 2.1.8、nvidia 525.85.05
- CLI インストーラーを更新

**バグ修正**

- オフラインインストール時にも `remove-ucode` シェルプロセスが実行されるように
- netinstall から `pamac` を削除
- ランク付けされた CachyOS ミラーがインストール先へ正しくコピーされるように修正
- `power-profile-daemon` をデフォルトで有効化しないように変更

22.12
-----

**新機能**

- ISO ブートローダーに新しい GRUB 背景を採用
- UEFI システム向けに `memtest` を同梱
- KDE インストールに `CachyOS-sddm-theme` を追加
- ISO 作成時の自動バージョンスクリプトを追加
- Calamares を最新コミットに更新
- CachyOS と Arch のミラーをランク付けする `cachyos-rate-mirrors` でミラーをランク付けするように
- **パッケージ更新:** 6.1.1 カーネル、mesa 22.3.1、plasma 5.26.4 など
- Kofuku デスクトップ環境を削除
- 新しい AMD カードをサポートするため LLVM 15 を同梱した追加 ISO を用意

**バグ修正**

- ISO として GNOME を使用した際の Calamares を修正
- オフラインおよびオンラインの両方のインストールで `zfshostid` が正しく機能するように修正
- Arch Linux のデフォルトに合わせるため、`initcpiocfg` モジュールに `kms` フックを追加
- その他 ISO の修正

22.11
-----

**新機能**

- Calamares とその設定を 1 つのパッケージとして同梱
- netinstall 内のパッケージを全面整理
- 不要な ucode を自動的に削除するモジュールを追加
- 必要 RAM 容量を 2.5 GB に削減
- Btrfs に必要なパッケージは、Btrfs 選択時のみインストールするように変更
- Calamares を最新コミットに更新
- ISO ブートローダーに背景画像を追加
- 一般的なパッケージのアップグレード (mesa、カーネルなど)
- `systemd-network` を NetworkManager に置き換え

**バグ修正**

- ISO から `qemu-guest-agent.service` を削除
- オフラインインストールが壊れるため `copytoram` を完全に無効化
- `mkinitcpio.conf` を更新
- その他 ISO の修正

22.10
-----

**新機能**

- pacman が x86-64-v3 を自動検出するパッチを追加したため、x86-64-v3 インストールで `Architecture=auto` を使用するように
- pacman でパッケージがどのリポジトリからインストールされたか表示されるように
- ブートローダー選択で EFI の有無を自動検出し、ない場合は GRUB をデフォルトにするように
- zram が自動で動的に生成されるため、スワップ選択をデフォルトで無効化
- Calamares を最新コミットに更新
- 最小 RAM 要件を 4 GB に設定
- `cachyos-grub-theme` を削除

**バグ修正**

- アップストリームの修正があるまで SSD と HDD の `fstab` 検出を無効化
- Btrfs サブボリュームが二重になる問題を修正
- ISO の GRUB ブートローダーに不足していたマイクロコードを追加
- modeset を設定しないフォールバック起動モード (`nomodeset`) を追加
- その他 ISO の修正

22.09
-----

**新機能**

- Calamares が最新の 3.3 ブランチになり、バグ修正と新機能が追加
- GUI ISO に TUI インストーラーを同梱 (`cachyos-installer` で起動できます)
- 対象ファイルシステムが SSD か HDD かを Calamares が自動検出し、それに合わせて `fstab` オプションを調整するように
- nouveau との問題を避けるため、最新 GPU (9xx 以降) の NVIDIA 用に専用の起動エントリを用意
- `fstab` と ZFS のマウントオプションを更新
- デフォルトで `cachy-browser` がインストールされるようになったため、Firefox はデフォルトでインストールされなくなりました

**バグ修正**

- インストール処理中の問題を避けるため、netinstall モジュールから `cachyos-gaming-meta` を削除
- netinstall パッケージを更新し、いくつかの修正を実施
- OpenBox のインストールを修正
- 通常の翻訳修正

22.07
-----

**新機能**

- **ブートローダー選択:** オンラインインストールで GRUB と systemd-boot を選択可能に
- オンラインインストール時に常に最新の Calamares がインストールされるようになり、オンエアでのバグ修正が可能に
- 必要なドライバ (フリードライバ) を自動インストールする `mhwd` モジュールを Calamares に追加
- インストール時の Calamares に新しい画像スライドを追加
- `fstab` と ZFS のマウントオプションを更新
- HiDPI に対応

**バグ修正**

- Calamares のロケールバグを修正
- 現在動作しない (Calamares の問題) ため GRUB ブートローダーから F2FS を削除 (`systemd-boot` では引き続き利用可能です)
- Calamares が正しいデフォルトファイルシステムを表示するように修正
- GNOME ISO を修正
- オフラインインストール向けにライブ ISO で不足していたパッケージを追加
- Btrfs スワップと LUKS 暗号化を修正
- 通常の翻訳修正

22.06
-----

以下の既知のバグを修正しました。

- 汎用 CPU を使用した場合にインストールが失敗する問題
- KDE が ZFS パーティションを自動マウントし、ISO への自動ログインが機能しなくなる問題

**改善点**

- サーバーのファイアウォールを修正しました (Cloudflare がユーザーを「ボット」としてブロックし、インストール時にエラーが発生する原因になっていました)
- GNOME、XFCE、OpenBox のテーマ設定サポートを追加しました
- Wiki を更新しました

**_CachyOS - Kernel - Manager_**
あわせて、CachyOS-Kernel-Manager の公開をお知らせします。
リポジトリからカーネルをインストールできるだけでなく、GUI で独自のカーネルビルドを設定でき、ご自身の用途に合わせて非常に簡単にカスタマイズできます。

カーネルのコンパイルでは以下のオプションを選択できます。

- スケジューラ (BMQ、BORE、cacULE、cfs、PDS、TT)
- NUMA の有効化/無効化
- KBUILD CFLAGS (-O3 または -O2)
- performance ガバナーをデフォルトに設定
- BBR2 の有効化
- ティックレート (500Hz、600Hz、750Hz、1000Hz)
- tickless (idle、periodic、full)
- MQ-Deadline I/O スケジューラの無効化
- Kyber I/O スケジューラの無効化
- MG-LRU の有効化/無効化
- DAMON の有効化/無効化
- Speculative page fault の有効化/無効化
- LRNG (Linux Random Number Generator) の有効化/無効化
- カーネル自動最適化の適用 (CPU のマイクロアーキテクチャを自動検出します)
- カーネル最適化の選択適用 (CPU マイクロアーキテクチャの一覧から番号で選択できます)
- デバッグの無効化 (カーネルのサイズが小さくなります)
- nf cone の有効化/無効化
- LTO の有効化 (Full、Thin、No)

22.05
-----

CachyOS は 1 年前に設立されました。約 1 年の開発期間を経て、GUI インストーラー初の安定版リリースを発表できることを大変誇りに思います。
私たちはリポジトリ管理、カーネル開発、インフラ、テーマ設定などの調査・検証に多くの時間を費やし、それらすべてを CachyOS GUI インストーラーに統合しました。
インストーラーに実装したすべての機能は、ユーザーに完全にカスタマイズ可能な体験を提供することを目指したものです。

最も注目すべき変更点は、オンラインインストールに `pacstrap` を採用して完全にクリーンなインストール環境を提供するようになったこと、そして ZFS ファイルシステムをネイティブで完全にサポートしたことです。

Discord ではメッセージの文字数制限があるため、発表の全文はこちらからご確認いただけます。

<https://discuss.cachyos.org/t/cachyos-gui-installer-changelog/>

ダウンロードはこちらから行えます。
<https://mirror.cachyos.org/ISO/kde/220522/>
<https://sourceforge.net/projects/cachyos-arch/>
