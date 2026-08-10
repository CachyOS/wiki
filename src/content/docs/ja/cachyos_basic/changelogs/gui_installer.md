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
  * ブートローダーの選択を Calamares に移し、管理を単一のパッケージに統合
  * ダウンロードサイズを削減するため、ベースシステムのインストール**前**にアーキテクチャを検出するように
  * GRUB の暗号化で LUKS2 を使用するように
  * パッケージの重複インストールを避けるため pacman に --needed を渡すように
  * NVMe 上の Btrfs で単一レベル圧縮を使用するように
  * Wayland デスクトップ環境から Xorg の依存関係を削除
* **ISO**
  * ISO 環境を `plasma-login-manager` に変更
  * Stable と LTS の両方のカーネルを ISO に収録し、Stable カーネルをデフォルトで選択するように
  * ISO セッションを X11 から Wayland に変更
* **Netinstall**
  * Plasma のインストールで SDDM の代わりに `plasma-login-manager` を使用するように
  * Niri で `noctalia-shell` と更新済みのドットファイルを使用するように
  * GNOME のインストール処理を整理
* **スライド:** Calamares スライドの誤字を修正し、Wiki を紹介する新しいスライドを追加
* **ミラー:** ミラーステータスページ (<https://packages.cachyos.org/mirrors>) に CachyOS ミラーの同期状態を表示するように
* **cachyos-settings:** NVIDIA モジュールの `EnableAggressiveVblank` を有効化し、低遅延ディスプレイ割り込みのトップハーフ処理時間を短縮
* **chwd**
  * NVIDIA Kepler ファミリーのカードで Nouveau の VA-API 対応を有効化するため `nouveau-fw` をインストールするように
  * 複数の新しい AMD GPU で AI-SDK に対応
  * HHD を `steamos-manager` と `inputplumber` に置き換え
* **Proton-CachyOS**
  * FSR4 MLFG (Machine Learning Frame Generation) に対応し、`PROTON_FSR4_[RDNA3_]UPGRADE` の使用時に自動で有効化
  * `d7vk` モジュールに対応 (`PROTON_DXVK_DDRAW=1` で有効化可能)
  * DualSense のハプティックフィードバックパッチを導入
  * Wine から特定のドメインへの接続を防ぐ `WINE_BLOCK_HOSTS` を追加
  * `ENABLE_HDR_WSI=1` を NVIDIA dGPU で `winewayland` を使用する際に自動で有効化
  * `winewayland.drv` 使用時のキーボードレイアウトの問題を修正
  * 1% Low FPS を低下させていた長年のパッチを削除
  * `protonfixes` にパッチを適用し、DLSS プリセットの選択と `libxess_dx11.dll` のリダイレクトを適切に処理できるように
  * 「gaming-meta」のデフォルトを proton-cachyos-slr に変更し、native 版も引き続きサポート


**修正**

* **Limine:** `limine-snapper-sync` の大きな容量要件に対応するため、ブートパーティションのサイズを 4192MB に拡大
* **インストーラー**
  * 「共存してインストール」または「パーティションを置換」の使用時、EFI パーティションが小さすぎる場合は処理を続行できないように
  * デスクトップを選択して次へ進んだ後、戻って別のデスクトップを選択すると両方が選択される問題を修正
* **chwd:** デュアル GPU システムで問題が発生するため、`libva-nvidia-driver` を強制する環境変数を削除
* **cachyos-hello:** cachy-update が有効でも無効と表示される問題を修正
* **コントローラー:** 入力ルールを最新版へ更新し、複数のコントローラー入力を修正
* **Framework 16 (Zen5):** Calamares で入力した際にセッションがフリーズする問題を修正

25.11
----

**新機能**

* **ISO/インストーラー:** アクセシビリティ向上のため Orca と espeak-ng を追加
* **initcpiocfg:** 対応する構成で systemd フックを有効化
* **Netinstall:** Hyprland のドットファイルを削除
* **pacstrap:** `bcachefs-dkms` を、ファイルシステムに `bcachefs` を選択した場合にインストールするように
* **Calamares:** plasma-login-manager と cosmic-greeter に対応
* **Cosmic:** SDDM から cosmic-greeter に変更
* **フォント:** アジア圏のユーザー向けフォントを改善
* **chwd**
  * 対応 GPU に `intel-media-sdk` と `vpl-gpu-rt` をインストールするように
  * Fermi GPU で Nouveau NvBoost を有効化
  * 390xx レガシー NVIDIA ドライバのサポートを終了
  * Xbox ROG Ally/X に対応
* **cachyos-hello**
  * 内蔵パッケージインストーラーを削除し、代わりに CachyOS パッケージインストーラーを開くように
  * GUI 機能の CLI インターフェースを追加
  * ISO バージョン確認に関する複数の問題を修正
* **cachyos-settings:** zram-generator で圧縮できないページの圧縮を削除
* **Proton-CachyOS**
  * 代替 DXVK として `dxvk-gplasync` を追加 (`PROTON_DXVK_GPLASYNC=1` で有効化可能)
  * `DISABLE_LAYER_MESA_ANTI_LAG` を `PROTON_FSR4_UPGRADE` の使用時に追加
  * 複数の **Wayland 向け修正** (フルスクリーンのオフセット、デッドキー、DPI の動作、動画出力の調整) と `winewayland.drv` の改善を導入
  * **ゲームごとのシェーダーキャッシュ**の動作と、とくに NVIDIA 向けの大容量シェーダーキャッシュを導入・調整
  * FSR3 と XeSS のアップスケーラー更新機能を追加

**修正**

* **Limine**
  * 壊れた UEFI でエントリ登録を行わずに Limine をインストールする処理を修正
  * `btrfs-overlayfs` フックの systemd バリアントを使用するように
* **Calamares:** XFS マウント設定の選択肢から `attr2` を削除
* **chwd:** T2 チップの USB Ethernet インターフェースを無効化

25.08
----

**新機能**

* **サービス:** Arch Linux のウェブサイトに相当するパッケージ検索サービス **packages.cachyos.org** を追加し、CachyOS パッケージを除外するオプションを用意
* **カーネル:** インストール後のセカンダリ/バックアップカーネルとして **linux-cachyos-lts** もインストールするように (引き続き Stable カーネルを推奨)
* **ISO:** Stable カーネルで問題が続いていたため、ライブ ISO のカーネルを Stable から LTS に変更して起動の信頼性を改善
* **デスクトップ:** 設定済みのドットファイルとともに **Niri** をデスクトップの選択肢へ追加
* **NVIDIA:** 対応ハードウェアで、最新の低消費電力スタンバイ向けに **S0ix** スリープを有効化
* **GRUB:** ルートファイルシステムが **Btrfs** の場合、起動可能なスナップショットを自動で有効化・設定するように
* **チューニング:** ウェルカムアプリのチューニングページに **Cachy-Update** を統合。Cachy-Update はタイマーとシステムトレイインジケーターでアップデートを通知し、クリックで更新可能
* **Proton-CachyOS:**
    - FSR4 ダウンローダーと同様の DLSS DLL (バージョン **310.3.0**) ダウンローダーを追加。環境変数 `PROTON_DLSS_UPGRADE=1` で有効化
    - DLSS HUD を有効化する環境変数 `PROTON_DLSS_INDICATOR=1` を追加
    - DLSS ダウンローダーと同様の XeSS DLL (バージョン **2.1.0**) ダウンローダーを追加。環境変数 `PROTON_XESS_UPGRADE=1` で有効化
    - RDNA3 GPU 向けに `PROTON_FSR4_RDNA3_UPGRADE` を追加。`PROTON_FSR4_UPGRADE` と同じ処理に加え、ほかの必要な変数も設定
    - Proton に不足していた Nvidia ライブラリのより完全な実装を追加。以前 PhysX などのオプションが無効だったゲームで有効化できるようになる可能性あり。`PROTON_NVIDIA_NVCUDA`, `PROTON_NVIDIA_NVENC`, `PROTON_NVIDIA_NVML`, `PROTON_NVIDIA_NVOPTIX` で個別に有効化可能
    - ゲームごとのシェーダーキャッシュを追加。デフォルトで有効、`PROTON_LOCAL_SHADER_CACHE=0` で無効化可能。シェーダーのプリキャッシュが有効な場合と同様に、ゲームごとのシェーダーを `<steamlibrary>/shadercache/<appid>` 以下に保存。各ゲームのキャッシュ再構築時にはスタッタリングが発生するものの、キャッシュサイズ制限によって保存済みシェーダーが破棄されないように
    - Vulkan 1.3 に完全対応していない古い GPU 向けの任意の DXVK 代替として [dxvk-sarek](https://github.com/pythonlover02/DXVK-Sarek) を追加。`async` ブランチを使用するため、アンチチートを使用するゲームや一般的なマルチプレイヤーゲームでは使用しないでください。`PROTON_DXVK_SAREK=1` で有効化
    - FSR 3.1 DLL を新しいバージョンへ更新する `PROTON_FSR3_UPGRADE` を追加

**修正**

* **Limine:**
    - MBR システムでブート先として **/boot** マウントポイントを選択した際の `limine bios-install /dev/sdaX` エラーを修正
    - ブートローダーの場所を明示的に選択しない場合に MBR システムでインストールが失敗する原因となっていた、`bootLoader` パスの未初期化値を修正
    - ブートパーティションで **bios-grub** フラグを使用すると「Stage 3 file not found」エラーが発生する可能性があることを示す警告を追加
    - BIOS インストールで Windows とのデュアルブートがそのまま動作するよう修正
    - **GNOME (GDM)** 使用時に Btrfs スナップショットを起動できない問題を修正
* **インストーラーの起動:** **cachyos.org** への ping が失敗した場合のオンライン確認用フォールバック IP を追加

25.07
----

**新機能**

- **シェル**: インストール時にユーザーシェルを fish, zsh, bash から選択できるように。デフォルトは引き続き fish
- **chwd**: レガシー NVIDIA ドライバ向けに plasma-x11 をインストールするように
- **Netinstall**: KDE Plasma と Gnome に fwupd を追加
- **mesa-git**: AMD Anti Lag に対応
- **firefox**: userjs プロファイルを改善した代替 Firefox「firefox-pure」を導入。Firefox に追加インストールできる「cachyos-firefox-settings」も追加
- **Proton-CachyOS**:
  - 上流の wine-wayland コミットを導入
  - 最新の FSR4 DLL を自動でダウンロードして置き換え、FSR 3.1 対応ゲームを自動更新する環境変数「PROTON_FSR4_UPGRADE」を追加
  - Wine 10.0 のリリース後に上流 Wine へ追加された多数の Wayland 関連パッチを導入
  - アンチチートとの統合を改善するパッチを追加。NelloKudo に感謝
  - vkd3d-proton と wine に AMD Anti Lag 2 用パッチを追加
  - umu-protonfixes を最新コミットへ更新

**修正**

- **Keyring**: 問題を回避し複数回再試行するよう、キーリングのインストール処理を改善
- **systemd-oomd**: le9 と併用した際の処理に問題があり、アプリケーションを早すぎる段階で終了させていたため systemd-oomd を無効化

**ハンドヘルド版の変更履歴**

- **handheld-settings**: SteamOS の複数のチューニングをハンドヘルド版へ導入
- **pipewire**: 最小 quantum を 256 に設定
- **SteamDeck-OLED**: Steam Deck OLED 向けに galileo-mura をインストール
- **Lenovo Legion Go S**: Lenovo Legion Go S に対応

25.05
----

**新機能**

- **ISO**: ISO の起動時にシステムの NVIDIA GPU を自動検出し、適切なモジュール (nvidia-open, nvidia など) を読み込むようにして、10xx シリーズ以前への対応を改善
- **Plymouth**: 新しい Plymouth アニメーションを追加
  - 制作した Eren ([https://github.com/erenyldz89](https://github.com/erenyldz89)) に感謝
- **ブラウザ**: Cachy-Browser を廃止し、Firefox をデフォルトのプリインストールブラウザとして提供。Firefox およびそのフォークへプロファイルを移行するガイド: [https://wiki.cachyos.org/support/faq/#migrating-your-profile-from-cachy-browser-to-firefox](https://wiki.cachyos.org/support/faq/#migrating-your-profile-from-cachy-browser-to-firefox)
- **netinstall**: KDE のインストールに kcalc, filelight, plymouth-kcm, kio-admin を追加
- **mkinitcpio**: fallback initramfs をデフォルトで無効化し、使用容量を大幅に削減
- **ミラー**: バングラデシュに新しい 10 Gbps ミラーを追加。ホストを提供した Limda に感謝
- **Proton**:
  - **Proton CachyOS 9.0** のほぼすべてのパッチをリベース
  - Steam Linux Runtime ビルドで Wayland ドライバを有効化。`PROTON_ENABLE_WAYLAND=1` で有効化可能。実現に貢献した [GloriousEggroll](https://github.com/GloriousEggroll) に感謝
  - Wine 10.0 のリリース後に上流 Wine へ追加された多数の Wayland 関連パッチを導入
  - Wayland ドライバと Vulkan ゲームに関するさまざまな問題を修正。尽力した [Etaash-mathamsetty](https://github.com/Etaash-mathamsetty) に感謝
  - FSR4 を有効化する `amdxc64.dll` のスタブ実装を追加。`FSR4_UPGRADE=1` で FSR3.1 ゲームを FSR4 に更新可能。再び [Etaash-mathamsetty](https://github.com/Etaash-mathamsetty) に感謝。手順: [https://github.com/Etaash-mathamsetty/wine-builds/releases/tag/fsr4](https://github.com/Etaash-mathamsetty/wine-builds/releases/tag/fsr4)
  - 有線接続の音声ベースハプティクス向けに、オーディオデバイス検出をより完全にする DualSense 関連パッチを追加。この特有の動作に依存するゲームで機能するように。元のパッチを作成した [ClearlyClaire](https://github.com/ClearlyClaire) と、**Proton CachyOS 9.0** から調査を続けた [Exotic0015](https://github.com/Exotic0015) に感謝。上流: [https://gitlab.winehq.org/wine/wine/-/merge_requests/7238](https://gitlab.winehq.org/wine/wine/-/merge_requests/7238)
  - 動作しなかったため Dragon Age Inquisition パッチを削除。当面このゲームでは **Proton CachyOS 9.0** を使用してください
- **GRUB**: 新しい GRUB テーマを追加。制作した [diegons490](https://github.com/diegons490/cachyos-grub-theme) に感謝

**修正**

- **ミラー**: ロシアのユーザーがインストールできなくなっていた問題を修正。ロシアでブロックされ始めた CDN77 を使用しないことで回避
- **kde-settings**: タスクバーの Discover アイコンを無効化
- **ddcutil**: YouTube 動画の視聴時に AMD GPU がフリーズする問題を修正するため、ddcutil 2.2.1 プレリリース版を提供

**ハンドヘルド版の変更履歴**

- **os-branch**: ゲームモードで CachyOS Linux が使用中であることを正しく表示するように
- **audio**: コンボルバープロファイルを更新
- **steamos-manager**: Steam Deck の GPU クロックと TDP の管理、BIOS/ドックの更新、ストレージデバイスのメンテナンス、外部ストレージのフォーマット、バッテリー充電上限に使用
- **steamos-powerbuttond**: スリープ動作を改善するため、標準の powerbuttond をこのコンポーネントに置き換え
- **jupiter-hw-support**: 20250501 に更新

25.04
----

**新機能**

- **occt**: ライブ環境でストレステストを行えるよう OCCT を ISO に追加
  - アイデアを提供した Marek に感謝

**修正**

- **kernel**: Asus ノート PC でのモジュールクラッシュを修正
- **limine**: Limine に mkinitcpio-limine-hook をインストールし、ブートローダーエントリを自動作成するように

**ハンドヘルド版の変更履歴**

- **audio**: ROG Ally X と Legion Go のオーディオプロファイルを追加
- **gamescope**: gamescope-plus を上流の gamescope に置き換え

25.03
----

**新機能**:

- **ブートローダー**: Limine ブートローダーに対応
- **ブートローダー**: Limine ブートローダーの自動スナップショットに対応
- **Samba**: Samba マウントを簡単に設定できる「cachyos-samba-settings」パッケージを追加
- **NVIDIA**: クローズドソース NVIDIA モジュールで GSP Firmware を再度有効化
- **カーネル**: Asus Armoury ドライバに対応
- **セキュアブート**: 必要なファイルだけに署名するよう「sbctl-batch-sign」スクリプトを改善
- **udev**: NTFS パーティションのデフォルトドライバとして ntfs3 を使用する変更を取り消し
  - 情報: NTFS3 カーネルドライバをデフォルトにすると一部ユーザーに問題が発生したため、元に戻しました
- **wine**: Wine と Wine-Staging のデフォルトを WoW64 と NTSync に変更
- **scx-manager**: sched-ext GUI マネージャーをカーネルマネージャーから独立したアプリケーションへ移動
- **ハードウェア対応**: RDNA4, RTX 5070 Ti, RTX 5070 に対応
- **設定**: 最新の DLSS バージョンとプリセットへ自動更新して使用するスクリプト、DLSS Swapper に対応
- **パッケージ更新**: linux-cachyos 6.14.0, NVIDIA 570.133.07, Gnome 48, Plasma 6.3.3, mesa 25.0.2, linux-api-headers 6.14.0, linux-tools 6.14.0

**修正**:

- **initcpiocfg**: 廃止されて「crc32c」モジュールがデフォルトになったため、mkinitcpio への「crc32c-intel」モジュール追加を削除
- **chwd**: T2 MacBook で brcmfmac のオフロードを無効化
- **chwd**: ノート PC に NVIDIA 390.xx ドライバをインストールしないように

25.02
----

**新機能**:

- **カーネル**:
  - 利用可能なすべてのアーキテクチャで、デフォルトの **linux-cachyos** カーネルに Propeller Optimization を適用
    - **補足**: AutoFDO と組み合わせることで、処理内容によっては約 10% のパフォーマンス向上が可能
- **NVIDIA**: Blackwell アーキテクチャに対応
- **ISO**: Blackwell 対応のため nvidia-open モジュールをデフォルトで使用。Turing より古い GPU のユーザーは最初のブートオプションまたはフォールバックオプションを使用してください
- **設定**: X11 セッションでタップによるクリックをデフォルトで有効化
- **udev**: NTFS パーティションのデフォルトドライバとして ntfs3 を使用
- **game-performance**: ゲーム実行中のスクリーンセーバーを無効化
- **kernel-manager (sched-ext)**: サーバーモードに対応
- **kernel**: AMD Preferred Core 機能の修正を追加
- **chwd**: RTD3 の回避策を再度追加
- **パッケージ更新**: linux-cachyos 6.13.0, NVIDIA 570.86.16, LLVM 19, glibc 2.41, mesa 24.3.4

**修正**:

- **chwd**: Intel と NVIDIA を搭載したハイブリッドノート PC で DaVinci Resolve が GPU を使用できない問題を修正
- **glibc**: CVE-2025-0395 の修正を追加
- **kernel-manager**: デフォルトの Arch カーネル向けにプリビルド NVIDIA モジュールが利用可能な場合、インストールを試行するように
- **kernel-manager**: モジュールを利用できない場合に値を上書きしないよう追加確認を実装

**ハンドヘルド版の変更履歴**

- **hooks**: ネイティブコンパイル版 Proton を再び使用できるように
- **misc**: 複数の更新と修正

24.12
----

**新機能**:

- カーネル:
  - 利用可能なすべてのアーキテクチャで、デフォルトの `linux-cachyos` カーネルに AutoFDO を適用するように
    - **注記**: 現在の制限により、現時点でのパフォーマンス向上はわずかです。プロファイルの統合には LLVM 19 が必要で、Propeller Optimization もこれに依存しています。Arch Linux での LLVM 19 採用に伴い、年末までに LLVM 19 と、より最適化されたプロファイルが利用可能になる見込みです
- chwd: Rusticl が正しく設定されるように修正
- chwd: フック呼び出し時のエラーログを改善
- chwd: VAAPI ドライバの選択を修正
- cachyos-settings: Zink 経由でアプリケーションを実行しやすくするスクリプトを追加
- Sysctl 設定: 複数の設定を見直して最適化
- カーネルマネージャー: `scx_loader` に対応し、スケジューラをネイティブに切り替えられるように
- インストーラー: Bluetooth サービスをデフォルトで有効化
- Netinstall:
  - インストール対象パッケージに `wireless-regdb` を追加
    - これにより接続で適切なチャンネルが使用され、追加のチャンネルも利用可能になるため、インターネット速度が向上する可能性があります
    - **注記**: デフォルトでは汎用的な地域が設定されます。最適なパフォーマンスを得るには、お住まいの地域に合わせて設定することを推奨します
- **パッケージ更新**: NVIDIA 565.77、linux-cachyos 6.12.6、mesa 24.3.2、scx-scheds 1.0.8、zfs 2.2.7

**バグ修正**

- インストーラー: インストールログによってデバッグ用ターミナルウィンドウが開かないように
- パーティション管理:
  - 適切な `umask` 設定により、十分な権限がなければ `/boot` にアクセスできないように
- インストーラーの起動: インターネット接続の確認処理を修正

**ハンドヘルド版の変更履歴:**

- ハンドヘルド関連パッケージを更新
- 電源プロファイルの処理に関する問題を修正
- WiFi 6 に対応

24.11
----

**新機能:**

- thp-shrinker: ゼロで埋められたページに対する max_ptes_none の値を 80% に設定。これにより、同等のパフォーマンスを維持しながら、THP を常時使用する場合のメモリ使用量を削減
- NVIDIA: ユーザーが独自にクローズドドライバへ切り替えた場合、GSP ファームウェアを自動的に無効化するように
- chwd: NVIDIA: ノート PC で利用可能な最大 TDP を実現するため、nvidia-powerd サービスを有効化するように
- proton-cachyos: DLSS Frame Generation が動作するように。将来的にはアップストリームの Proton でも動作する見込み
- カーネル: AMD Cache Optimizer を適用。2 つの X3D CCD を搭載した CPU で、周波数コアまたはキャッシュコアのどちらを優先するか切り替えられるように
- カーネル: amd-pstate: Strix Point 向けの amd-pstate パフォーマンス修正をバックポート
- カーネル: AMD RDNA2 および RDNA3 GPU の TDP 問題に対するアップストリームの修正を追加
- カーネル: 5120x1440x240 構成のディスプレイ向けにタイミングの修正を追加
- カーネル: AutoFDO で最適化した実験的カーネルを "linux-cachyos-autofdo" としてリポジトリに追加
- ISO: ハンドヘルド版を実行中のユーザーが非対応デバイスでインストールを開始した場合に警告する確認処理を追加
- ISO: 最新の ISO を使用しているか確認し、使用していない場合に警告するように

**バグ修正:**

- refind: パーティション構成を 3 パーティションから 2 パーティションへ変更
- netinstall: Plasma のインストールに kdeplasma-addons を追加
- calamares: スワップパーティションを含むパーティション設定時の問題を修正

**ハンドヘルド版の変更履歴:**

- ROG Ally X への対応を改善

24.10
----

**新機能:**

- パッケージ更新: linux-cachyos 6.11.1、mesa 24.2.4、scx-scheds 1.0.5、python 3.12.7

**バグ修正:**

- sddm: Wayland セッションへのログインを修正するため、新しい sddm を導入
- ISO: 一部の環境でグラフィカルセッションが読み込まれない問題を修正するため、xf86-video-amdgpu を追加
- chwd: プロファイルの再インストールを修正

24.09
----

**新機能:**

- パッケージ: LLVM、Clang、svt-av1、nodejs など、多数のパッケージを PGO で最適化。これにより、たとえば Clang コンパイラが 10% 高速化
- リポジトリ: リポジトリの同期と更新頻度を高め、遅延をさらに短縮。同期間隔を 3 時間ごとから 1 時間ごとへ短縮
- リポジトリ: 27.09.2024 以降、-fpic でコンパイルされたパッケージで -fno-semantic-interposition を自動的に有効化。多くのパッケージでパフォーマンスが向上する可能性があります
- zlib-ng: zlib の代替として使用するように
- sddm: KDE のインストールでは、sddm のデフォルトコンポジターを Wayland に変更。# リリース投稿に移行手順を記載
- cachyos-settings: NetworkManager のバックエンドに systemd-resolved を使用し、DNS キャッシュを改善
- cachyos-settings: 一部の環境での時刻同期に関する問題を避けるため、時刻同期サーバーに time.google.com を使用
- gcc: znver5 のチューニングに関する修正を追加
- gcc: Clear Linux からパッチとフラグをチェリーピック
- glibc: "evex" パッチと Clear Linux からのチェリーピックを追加
- wiki: Wiki に多数の新規コンテンツを追加し、既存コンテンツを刷新
- chwd: デバイス処理を簡素化
- chwd: すべてのプロファイルを PCI デバイス専用として設計
- chwd: ドライバのインストールを自動処理する --autoconfigure を追加
- パッケージ更新: linux-cachyos 6.11.0、mesa 24.2.3、Plasma 6.1.5、NVIDIA 560.35.03、calamares 3.3.10、QT 6.7.3

**バグ修正:**

- インストーラーの起動: インストール開始前にハードウェアクロックを同期するための修正を追加
- calamares: インストール後にファイルシステムをアンマウントする処理を修正
- keyring: インストール開始前にキーリングを消去して再作成するようにし、まれに発生するキーリングの問題を修正
- sysctl: コアダンプを再び有効化
- chwd: 競合の可能性を防ぎ、Spectacle などのソフトウェアとの互換性を改善するため、PRIME プロファイルから `libva-nvidia-driver` を削除
- cachyos-settings: GNOME Wayland のクラッシュに対する回避策を追加
- cachyos-fish/zsh-config: Wayland 固有の調整を削除

**ハンドヘルド版の変更履歴:**

- Ally/Ally X: HHD がカーネルドライバを正しく使用せず問題が発生するため、HHD を inputplumber に置き換え
- ハンドヘルド関連パッケージを更新

24.08
----

**新機能:**

- chwd: 対応するカードで NVIDIA の open モジュールをデフォルトで使用するように
- デスクトップ: インストールオプションに Cosmic デスクトップ環境を追加
- NVIDIA: 最新の 560 Beta ドライバをデフォルトに変更。Firefox などのアプリケーションでのクラッシュを修正するパッチを egl-wayland に適用
- ミラー: CDN77 が世界規模のキャッシュを備えた Object Storage を CachyOS に提供し、ユーザーの接続速度を大幅に改善
- ミラー: 同期の問題を避けるため、CachyOS 独自の Arch Linux ミラーを提供し、フォールバックミラーとともにインストール時のデフォルトとして設定
- SecureBoot: Secure Boot に簡単に対応できるスクリプトとチュートリアルを Wiki に追加
- cachy-chroot: chroot を簡単に行えるよう、fstab 経由の自動マウントを追加
- cachy-chroot: LUKS 暗号化に対応
- kernel-manager: sched-ext 設定で sched-ext フラグを設定できるように
- kernel-manager: nvidia-open をビルドするオプションを追加
- kernel-manager: 設定ページで前回使用したオプションを記憶する機能を追加
- パッケージ更新: linux-cachyos 6.10.5、mesa 24.2.0、Plasma 6.1.4、NVIDIA 560.31.02

**バグ修正:**

- chwd: デバイス名に基づく PRIME プロファイルの検出を改善
- chwd: 一部の環境で問題が発生するため、RTD3 の回避策を削除
- cachyos-rate-mirrors: ライブ ISO での実行時はミラーの順位付けを無効化
- cachy-chroot: パーティションに有効な fstype または uuid がない場合 (Microsoft 回復パーティションなど) のクラッシュを修正
- calamares: キーリングの初期化処理をリファクタリング
- kernel-manager: LTO カーネルとモジュールを有効にしたカスタム pkgbase のビルド対応を修正
- kernel-manager: パスワードプロンプトの遅延を修正
- ISO: 最新の GPU 向けに radeon.modeset=1 を amdgpu.modeset=1 へ置き換え
- game-performance: プロファイルが利用できない場合に失敗しないように

**ハンドヘルド版の変更履歴:**

- デバイス対応: Luke Jones 氏の協力により Ally X に対応
- libei: libextest を置き換え、libei に対応
- packagekit: Discover 経由のシステム更新で問題が発生するのを防ぐため、packagekit のインストールをブロック
- フック: ネイティブコンパイル版 Proton と競合させる pacman-hook を追加し、潜在的な問題を回避
- jupiter-fan-control、steamdeck-dsp、Steam Deck ファームウェアを更新

24.07
----

**新機能:**

- リポジトリ: Zen 4 最適化リポジトリを導入。Zen4 および Zen5 CPU で使用
- ISO: Zen4/Zen5 リポジトリ向けのアーキテクチャ自動確認を追加
- chwd: AMD GPU の GC に対応し、ROCm が公式に対応する GPU の検出を支援
- chwd: 対応カードで libva-nvidia-driver を使用
- ksmctl: KSM を有効化・無効化するツールを導入: ksmctl --enable
- カーネル: "linux-cachyos" カーネル向けに、デバッグ用のストリップされていない vmlinux を含む "linux-cachyos-dbg" パッケージを追加
- カーネル: AMD CPB Boost に対応し、power-profiles-daemon にパッチを適用。"powersave" プロファイルの設定時は AMD CPU のブーストを無効化
- カーネル: 動画再生時の AMD SoC 向け省電力パッチを追加
- kernel-manager: sched-ext スケジューラの管理と GUI での情報取得に対応
- steam/proton: Steam の起動オプションに追加できる "game-performance" スクリプトを導入
- power-profiles: AMD Pstate 対応 CPU で最低 Linear 周波数を引き上げ、レイテンシと 1% Low を改善できるように
- kwin: ティアリング対応のバックポートを追加し、動作を確認。NVIDIA ではネイティブ Wayland アプリケーションでのみ動作
- netinstall: インストール可能なデスクトップ環境から Cutefish を削除
- ミラー: オーストリアと中国のミラーを追加。中国のミラーは TUNA University がホストし、中国の多くのユーザーの利便性を向上
- パッケージ更新: linux-cachyos 6.9.9、mesa 24.1.3、NVIDIA 555.58.02、Plasma 6.1.2、LLVM 18.1.8

**バグ修正:**

- ISO: copytoram を yes ではなく auto に設定
- ISO: ノート PC でライブ ISO のスリープを修正
- インストーラーの起動: chroot 内で archlinux-keyring を取得する際の問題を避けるため、インストール開始前に最新の archlinux-keyring をインストール
- ミラーの順位付け: インストール時は Tier 1 ミラーのみを順位付け
- pacman.conf: 未使用の pacman リポジトリを削除
- cachy-chroot: .snapshot サブボリュームを表示しないように
- Calamares: ユーザーから問題が報告されているため、"Preservefiles" モジュールを使用しないように

**ハンドヘルド版の変更履歴:**

- 異なるスケーリングを適用する設定ファイル '/home/$USER/.config/deckscale を追加
- GameMode の切り替えをより堅牢に
- Steam Deck の WiFi/Bluetooth ファームウェアを更新
- GameMode の自動マウントを実装
- Wine の CPU トポロジー、HDR、バックライト向けに gamescope-session の調整を追加
- リフレッシュレートの選択を修正
- jupiter-hw-support、steamdeck-dsp、jupiter-fan-control、gamescope-session-git を更新

24.06
----

**新機能:**

- chwd: ハンドヘルドハードウェアの検出を導入
- chwd: T2 MacBook に対応
- chwd: ネットワークドライバの検出を追加
- インストール: MacBook T2 に対応
- ISO: システムへの chroot を支援するスクリプト cachy-chroot を追加
- ISO: Microcode Hooks に変更。最新の Ventoy リリース (1.0.98) が必要
- ISO: オフラインインストールを提供しなくなったため、copytoram を有効化
- ファイルシステム: デフォルトで選択されるファイルシステムを BTRFS に変更
- netinstall: firewalld の代わりに ufw を使用
- Calamares: ブランディングスライドを更新
- スライド: 最新の変更に合わせて更新
- パッケージ更新: linux-cachyos 6.9.3、mesa 24.1.1、xwayland 24.1、NVIDIA 555.52.04、Plasma 6.0.5

**バグ修正:**

- Calamares: umount: emergency を再び有効化
- Qtile: マルチメディアコントロールが正しく動作するように
- NVIDIA: Wayland でスリープを動作させるために必要なサービスとオプションを有効化
- netinstall: インストール対象から b43-fwcutter を削除
- netinstall: hyprland-git を hyprland に置き換え
- netinstall: モジュール不足の問題を避けるため、選択肢から linux-cachyos-lts を削除
- Calamares: Shellprocess: ミラーの順位付けをキーリングのインストール前に移動

**実験的ハンドヘルド版の変更履歴:**

- KDE Vapor テーマ (SteamOS テーマ) をデフォルトに設定
- デフォルトのファイルシステム: BTRFS
- デフォルトのカーネル: linux-cachyos-deckify
- SDDM が Wayland を使用するように
- レイテンシを削減する HHD 用環境フラグを追加
- Game Mode の切り替え動作を改善するカーネル引数を追加
- ユーザー名を編集できるように
- 使用するデバイスに応じて、ハードウェア検出が必要なパッケージを設定・インストールするように
- Mallit Keyboard がダークモードを使用するように
- 適切なスリープのため Valve の Powerbuttond を導入
- Steam にショートカットを追加できるように
- scx-scheds を最新の git コミットに更新し、LAVD スケジューラの最新改善を導入
- cachyos-handheld に自動マウントを追加
- Steam Deck 上で CachyOS から Steam Deck の BIOS を更新できるように

24.05
----

**新機能:**

- ファイルシステム: ファイルシステムの選択肢に Bcachefs を追加
- pacstrap: Bcachefs の使用を検出し、対応する Bcachefs-tools をインストールする処理を追加
- CachyOS-AI-SDK: すぐに使える NVIDIA SDK 環境を提供する新しいインストールオプションを導入
- CachyOS-Deckify: ハンドヘルド向けのバリアント (実験的) を提供。詳細は[こちら](https://discuss.cachyos.org/t/information-experimental-cachyos-deckify/203)を参照
- BTRFS: スナップショット用の自動 Snapper を CachyOS hello アプリからインストールできるように
- ISO: オフラインインストーラーを廃止
- パッケージ更新: Python 3.12、gcc 14.1.1、mesa 24.0.6、xwayland 24.1rc2、NVIDIA 550.78

**バグ修正:**

- settings.conf: ハードウェア検出を netinstall より前に移動
- pacstrap: btrfs-assistant-git の代わりに btrfs-assistant を使用
- plymouth: zfs と暗号化の併用時に plymouth フックを削除
- ISO: インストール中に画面がロックされないよう、KDE 向けの各種設定ファイルを追加
- services-systemd: fstrim.timer を正しく有効化
- umount: zfs のインストールに関する問題を避けるため、emergency を無効化
- shellprocess: オフラインインストールの残存ファイルを削除

24.04
----

**新機能:**

- Plymouth: plymouth を使用してテーマ付きのブートアニメーションを提供
- ISO: calamares でキーボードレイアウトを設定する際の問題により、X11 へ戻すように
- rEFInd: 新しいパーティション構成 (/boot と /boot/efi を分離)
- netinstall: KDE: xwaylandvideobridge をデフォルトでインストール
- netinstall: ly のバグにより、複数のデスクトップ環境で ly の代わりに lightdm を使用
- systemd-boot: 前回選択したブートエントリを記憶できるよう、systemd-boot で @saved を使用
- cachyos-keyring: cachyos-keyring パッケージをリファクタリングし、cachyos-trusted キーリングを提供
- ISO: ISO の mkinitcpio イメージに ZSTD 19 圧縮を使用
- パッケージ更新: xz 5.6.1-3、linux-cachyos 6.8.2、pacman 6.1.0-5、mesa 24.0.4、Plasma 6.0.3、nvidia 550.67、cachyos-settings 39-2

**バグ修正:**

- 自動ログイン: sddm と併用した場合の自動ログインオプションを修正
- xz: パッチ適用済みの xz パッケージを提供
- libarchive: 悪意ある xz 攻撃者によるコミットの影響を緩和
- cachyos-settings: udev-rule: RAM 使用量が大幅に増加するため、watermark_scale_factor を 125 に設定しないように
- calamares: pacman-keyring: キーリングをインストール環境へ統合する方法を簡素化

24.03.1
----

**新機能:**

- netinstall: ユーザーの混乱を避けるため、netinstall の選択肢から追加のカーネルを削除。その他のカスタムカーネルはカーネルマネージャーからインストール可能
- カーネルマネージャー: NVIDIA モジュールを検出時に自動インストールするようにし、QT6 へ移行。LTO オプション使用時のカスタム名を修正
- パッケージインストーラー: QT6 へ移行し、pacman 6.1 に対応
- パッケージ更新: linux-cachyos 6.8.1、pacman 6.1、mesa 24.0.3、Plasma 6.0.2、llvm 17.0.6

**バグ修正:**

- NVIDIA: NVIDIA グラフィックスでの問題を避けるため、nvidia.drm.modeset の所有権を早い段階で取得するよう nvidia モジュールにパッチを適用
- Refind: 問題を避けるため、LTS カーネルをインストールしないように
- shellprocess: liveusers ディレクトリを完全に削除

24.03
----

**新機能:**

- ISO: Plasma 6 を ISO に収録し、Wayland をデフォルトで使用。netinstall に関する混乱を避けるため、GNOME ISO を廃止
- Calamares: QT6 へ移行
- refind: LUKS2 暗号化を含む f2fs と zfs のオプションを追加
- ミラー: 2 つのグローバル CDN を提供。1 つは Cloudflare R2、もう 1 つは Digital Ocean がホスト
- mirrorlist: より高速に配信するため、オンラインインストーラーを CDN から直接取得
- initcpiocfg: ucode を早期に読み込むため、新しい microcode フックを使用
- ブートローダー: ブートローダーで microcode を読み込まないように
- パッケージ更新: linux-cachyos 6.7.9、mesa 24.0.2、zfs-utils 2.2.3

**バグ修正:**

- pacstrap: インストール時の選択肢を整理するため、設定パッケージをインストールしないように
- shellprocess_pacman: 順位付け済みの cachyos-v4-mirrorlists もインストール先へコピー

24.02
-----

**新機能:**

- refind: ファイルシステムと暗号化の選択肢を増やすため、構成を /boot/efi から /boot へ変更
- ライブ ISO: ライブ ISO を整理して同期
- インストーラーの起動: オンラインインストールを推奨する案内を追加
- shell-configs: ターミナル起動時の fastfetch を無効化するオプションと "update" エイリアスを追加
- netinstall: KDE に phonon-qt5-vlc を追加
- パッケージ更新: linux-cachyos 6.7.5、mesa 23.3.5、gcc 13.2.1-12、glibc 2.39、mesa 24.0.1、nvidia 550.54.14

24.01
-----

**新機能:**

- x86-64-v4: インストール時に自動検出してリポジトリを有効化
- linux-cachyos: デフォルトカーネルで sched-ext スケジューラフレームワークを提供
- xwayland: Explicit Sync パッチをデフォルトで提供
- パッケージ更新: linux-cachyos 6.7、mesa 23.3.3、gcc 13.2.1-8、xorg-xwayland 23.2.4

**バグ修正:**

- chwd: Early KMS に関する問題を避けるため、Ada Lovelace 世代の NVIDIA カードでは nvidia モジュールを initramfs に直接組み込むように

23.12
-----

**バグ修正:**

- zfs: 互換性を確保するため、プールオプションに compatibility=grub を追加
- grub/xfs: 新しい xfs のデフォルトである bigtime との互換性を確保するパッチを grub に追加
- netinstall: xdg-desktop-portal-hyprland-git の代わりに xdg-desktop-portal-hyprland を使用

23.11
-----

**新機能**

- nvidia: dkms の代わりに nvidia モジュールを使用
- Calamares を上流と同期
- パッケージ更新: linux-cachyos 6.6.1, nvidia-utils 545.29.02, mesa 23.2.1, zfs-utils 2.2.0, mkinitcpio 37

**バグ修正**

- nvidia-hook: 新しいモジュールによるインストール時の問題を回避するため、nvidia-hook を再度追加
- netinstall: KF5 パッケージングの直近の変更に合わせてパッケージ名を変更
- netinstall: GNOME のインストールに xdg-desktop-portal-gnome を追加

23.09
-----

**新機能**

- systemd-boot: luks2 をデフォルトに変更
- netinstall: CachyOS パッケージ専用カテゴリを用意
- Calamares を上流と同期
- パッケージ更新: linux-cachyos 6.5.3, nvidia-utils 535.104.05, mesa 23.2.7

**バグ修正**

- shellprocess_sdboot: インストール処理でブートエントリを生成する際に「sudo」を使用しないように

23.08
-----

**新機能**

- Calamares を上流と同期
- パッケージ更新: linux-cachyos 6.4.10, nvidia-utils 535.98

**バグ修正**

- キーリングを更新し、正常に動作するよう修正

23.07
-----

**新機能**

- CachyOS-Settings に、用途に応じてネットワーク設定を自動調整する「bpftune」を追加
- CachyOS-Qtile-Settings: 利便性の改善、アイコンの改良など
- パッケージ更新: linux-cachyos 6.4.2, cachy-browser 115.0.1, mesa 23.1.3

**バグ修正**

- rate-mirrors を修正
- chwd (ハードウェア検出) に複数の修正を適用
- インストーラーでハイブリッド構成向け nonfree ドライバのインストールを修正
- 主に仮想マシンなど一部のまれな構成で発生していた Calamares のフリーズを修正
- スライド: スライド6の誤字を修正

23.06
-----

**バグ修正**

- オフラインインストール: Calamares を修正

23.05
-----

**新機能**

- CachyOS の Git 移行レイアウトをインストールへ反映
- chwd (mhwd) に複数の修正を適用
- Pacman: 更新前にユーザーへメッセージを表示できる機能を追加
- Calamares を上流と同期
- パッケージ更新: linux-cachyos 6.3.4, cachy-browser 113.0.1, mesa 23.1.1, python 3.11

**バグ修正**

- netinstall: パッケージ変更に伴う軽微な修正
- スライド: 最新の変更を反映するようスライド6を更新

23.04
-----

**新機能**

- Qtile デスクトップ環境を導入
- mhwd を刷新: Rust で書き直し、GPU とネットワークカードのプロファイルを簡素化し、多数の古いコードを削除
- パッケージ更新: linux-cachyos 6.2.12, cachy-browser 112.0.1, mesa 23.0.3, zfs-utils 2.1.11

**バグ修正**

- f2fs: systemd で問題が発生するため「atgc」マウントオプションを削除

23.03.1
-------

**新機能**

- パッケージ更新: linux-cachyos 6.2.7, cachy-browser 111.0

**バグ修正**

- Calamares 上流の不具合のあるコミットが原因で発生していた lightdm ディスプレイマネージャーの問題を修正
- オフラインインストールでのキーリングの問題を修正
- Refind: linux-cachyos-lts をデフォルトで使用。現在の 6.2 は refind との相性が良くないため

23.03
-----

**新機能**

- refind ブートローダーを追加
- MHWD による Nvidia ドライバの自動インストール
- ZFS インストールの暗号化に対応
- netinstallation に Hyprland を追加
- CachyOS-KDE-Settings で KDE のデフォルトテーマを使用するように。CachyOS テーマも引き続きプリインストールされ、利用可能
- パッケージ更新: linux-cachyos 6.2.2, mesa 23.0.0, cachy-browser 110.0.1, plasma 5.27.2
- Calamares のブートローダーモジュールを全面的に刷新・改善
- ISO を GPG キーで署名するように
- MHWD を改善・更新
- Calamares を上流と同期

**バグ修正**

- 「パーティションを置換」オプションでファイルシステムを選択できるように
- スライド3の誤字を修正
- nouveau を修正し、モジュールを正しく読み込むように
- MHWD: INTEL/ATI と Nouveau で modesetting を使用
- 起動時の問題を引き起こしていた zfs フックをライブ ISO の mkinitcpio から削除
- アップデートは SourceForge のミラーからダウンロード可能

23.02
-----

**新機能:**

- cachyos-community-v3 リポジトリを追加
- Netinstallation に Budgie、Mate、LXDE デスクトップ環境を追加
- Bluetooth.service をデフォルトで有効化
- F2FS と grub を再び有効化し、正常に動作するように
- パッケージ更新: linux-cachyos 6.1.10, mesa 22.3.4, zfs-utils 2.1.9, glibc 2.37, cachy-browser 109.0.1

**バグ修正:**

- Rate-mirrors がミラーの評価に失敗した場合、順位付けされていないミラーへフォールバックするように
- cachyos-rate-mirrors の fetch-mirrors-timeout を延長
- ミラーリストの問題を回避するため、hosts に Github を追加
- syslinux の BIOS 用起動エントリーを更新

23.01
-----

**新機能:**

- Calamares のスライドを刷新・更新
- Netinstallation に UKUI デスクトップ環境を追加
- Netinstallation に Cinnamon デスクトップ環境を追加
- Cmdline: CachyOS は zram をデフォルトで提供しているため、zswap をデフォルトで無効化
- Calamares を最新のコミットへ更新
- LLVM 15 をデフォルトで同梱
- パッケージ更新: linux-cachyos 6.1.7, mesa 22.3.3, Plasma 5.26.5, llvm 15.0.7, gcc 12.1.1, binutils 2.40, zfs-utils 2.1.8, nvidia 525.85.05
- CLI インストーラーを更新

**バグ修正:**

- remove-ucode shellprocess がオフラインインストールでも実行されるように
- netinstall から pamac を削除
- 順位付けされた CachyOS ミラーがインストール先へ正しくコピーされるように
- power-profile-daemon をデフォルトで有効化しないように

22.12
-----

**新機能:**

- ISO ブートローダーに新しい GRUB 背景画像を追加
- UEFI システム向けに memtest を同梱
- KDE インストールに CachyOS-sddm-theme を追加
- ISO 作成時にバージョンを自動設定するスクリプトを追加
- Calamares を最新のコミットへ更新
- CachyOS と Arch のミラーを順位付けする「cachyos-rate-mirros」を使用するように
- パッケージ更新: Kernel 6.1.1, mesa 22.3.1, plasma 5.26.4,...
- Kofuku デスクトップ環境を削除
- 新しい AMD カードに対応するため、llvm 15 を同梱した追加 ISO を提供

**バグ修正:**

- GNOME を ISO として使用した場合の Calamares を修正
- zfshostid がオフライン・オンラインインストールの両方で正しく動作するように
- Arch Linux のデフォルトに合わせ、initcpiocfg モジュールに「kms」フックを追加
- その他の ISO に関する修正

22.11
-----

**新機能:**

- Calamares とその設定を1つのパッケージで提供
- netinstall のパッケージを全面的に整理
- 不要な ucode を自動的に削除するモジュールを追加
- 必要な RAM を 2.5GB へ削減
- btrfs に必要なパッケージを、btrfs 使用時にのみインストールするように
- Calamares を最新のコミットへ更新
- ISO ブートローダーに背景画像を追加
- 一般的なパッケージを更新 (mesa, kernel, ...)
- systemd-network を networkmanager に置き換え

**バグ修正:**

- ISO から qemu-quest-agent.service を削除
- オフラインインストールを壊すため、copytoram を完全に無効化
- mkinitcpio.conf を更新
- その他の ISO に関する修正

22.10
-----

**新機能:**

- Pacman が x86-64-v3 を自動検出するパッチを追加したため、x86-64-v3 のインストールで Architecture=auto を使用するように
- Pacman でパッケージのインストール元リポジトリを表示するように
- ブートローダーの選択時に EFI の有無を自動検出し、存在しない場合は grub をデフォルトに設定
- zram が動的に自動生成されるため、スワップの選択をデフォルトで無効化
- Calamares を最新のコミットへ更新
- 最小 RAM 要件を 4GB に設定
- cachyos-grub-theme を削除

**バグ修正:**

- 上流で修正されるまで、fstab での SSD と HDD の検出を無効化
- BTRFS サブボリュームが重複する問題を修正
- ISO の grub ブートローダーに不足していた microcode を追加
- modeset を一切設定しないフォールバック起動モード (nomodeset) を追加
- その他の ISO に関する修正

22.09
-----

**新機能:**

- Calamares を最新の 3.3 ブランチへ更新し、バグ修正と新機能を導入
- GUI ISO に TUI インストーラーを同梱。「cachyos-installer」で使用可能
- Calamares が対象ファイルシステムの SSD/HDD を自動検出し、それに応じて fstab オプションを調整するように
- nouveau の問題を回避するため、新しい Nvidia GPU (9xx 以降) 向けに専用の起動エントリーを追加
- fstab と zfs のマウントオプションを更新
- cachy-browser がデフォルトでインストールされるため、FireFox をデフォルトでインストールしないように

**バグ修正:**

- インストール処理での問題を回避するため、netinstall モジュールから cachyos-gaming-meta を削除
- netinstall パッケージを更新し、複数の問題を修正
- OpenBox のインストールを修正
- 通常の翻訳修正

22.07
-----

**新機能:**

- ブートローダーの選択: オンラインインストールで grub と systemd-boot を選択可能に
- オンラインインストールでは常に最新の Calamares をインストールし、即時のバグ修正を可能に
- Calamares に必要なドライバー (free drivers) を自動インストールする mhwd モジュールを追加
- Calamares のインストール画面に新しい画像スライドを追加
- fstab と zfs のマウントオプションを更新
- HiDPI に対応

**バグ修正:**

- Calamares の locales に関する不具合を修正
- 現在動作しないため (Calamares の問題)、grub ブートローダーでは F2FS を削除。systemd-boot では引き続き使用可能
- Calamares が正しいデフォルトファイルシステムを表示するように
- Gnome ISO を修正
- オフラインインストール向けに、ライブ ISO で不足していたパッケージを追加
- btrfs のスワップに対する LUKS 暗号化を修正
- 通常の翻訳修正

22.06
-----

以下の既知の不具合を修正しました:

- generic CPU を使用するとインストールに失敗する問題
- KDE が zfs パーティションを自動マウントし、ISO への自動ログインが動作しなくなる問題

**改善:**

- サーバーのファイアウォールを修正。cloudflare がユーザーを「bots」としてブロックし、インストール時にエラーが発生していました
- Gnome、XFCE、OpenBox のテーマ設定に対応
- Wiki を更新

**_CachyOS - Kernel - Manager_**
CachyOS-Kernel-Manager も発表できることを嬉しく思います。
リポジトリからカーネルをインストールできるほか、独自のカーネルビルドを GUI で設定できるため、好みに合わせて簡単にカスタマイズできます。

カーネルのコンパイルでは、以下のオプションを選択できます:

- スケジューラ (BMQ, BORE, cacULE, cfs, PDS, TT)
- NUMA の無効化または有効化
- KBUILD CFLAGS (-O3 または -O2)
- performance governor をデフォルトに設定
- BBR2 を有効化
- Tickrate (500Hz, 600Hz, 750Hz, 1000Hz)
- tickless (idle, perodic, full)
- MQ-Deadline I/O Scheduler を無効化
- Kyber I/O Scheduler を無効化
- MG-LRU の有効化または無効化
- DAMON の有効化または無効化
- Speculative page fault の有効化または無効化
- LRNG (Linux Random Number Generator) の有効化または無効化
- カーネルの自動最適化を適用 (CPU March を自動検出)
- カーネル最適化を選択して適用 (さまざまな CPU-Marches の一覧から番号で選択)
- debug を無効化 (カーネルのサイズを削減)
- nf cone の有効化または無効化
- LTO を有効化 (Full, Thin, No)

22.05
-----

CachyOS は1年前に設立されました。約1年間の開発を経て、GUI インストーラー初の安定版リリースを発表できることを大変誇りに思います。
リポジトリ管理、カーネル開発、インフラストラクチャ、テーマ設定などに多くの時間を費やして調査し、その成果をついに CachyOS GUI インストーラーへ統合しました。
インストーラーへ実装したすべての機能は、ユーザーが完全にカスタマイズできる体験を提供するためのものです。

最も大きな変更点は、オンラインインストールで pacstrap を使用して完全にクリーンなインストール環境を提供するようになったことと、zfs ファイルシステムを完全にネイティブ対応したことです。

Discord ではメッセージの長さに制限があるため、発表全文はこちらで確認できます:

<https://discuss.cachyos.org/t/cachyos-gui-installer-changelog/>

ダウンロードはこちら:
<https://mirror.cachyos.org/ISO/kde/220522/>
<https://sourceforge.net/projects/cachyos-arch/>
