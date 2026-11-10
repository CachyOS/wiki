---
title: GUI 설치 프로그램
description: Calamares 및 GUI Live ISO의 변경 로그
sidebar:
  order: 1
---
26.04
----

**기능:**

* **Installer:**
  * 이제 GUI 패키지 관리자로 Octopi 대신 Shelly가 사용됩니다.
  * 설치 직후 깨끗한 스냅샷을 생성하고 영구 보관하여 기준 복원 지점을 제공합니다.
  * GRUB `os-prober`가 이제 기본으로 활성화됩니다.
  * dotfiles가 포함된 데스크톱 옵션으로 MangoWM을 추가했습니다.
  * UKUI 데스크톱을 제거했습니다.
  * 보조 모니터가 연결된 노트북에서 amdgpu 드라이버가 이전 테마를 안정적으로 렌더링하지 못하기 때문에, AMD GPU는 이제 다른 Plymouth 테마를 사용합니다.
  * GNOME 패키지 선택 구성을 정리하고 현대화했습니다.
  * `DMS` 셸과 함께 `MangoWM`을 설치하는 옵션을 추가했습니다.
* **CachyOS-Welcome:**
  * `blocky`를 통한 DNS-over-HTTPS(DoH) 지원을 추가했습니다.
  * 사용자 지정 DNS 서버 지원과 DHCP 자동 표시/초기화 기능을 추가했습니다.
  * DNS 서버가 이제 메타데이터(지역, 홈페이지, 필터링)를 표시하고 개별 지연 시간 테스트를 지원합니다.
  * VRAM 관리 토글 `dmemcg-booster`를 추가했습니다. KDE에서는 추가로 `plasma-foreground-booster`도 설치됩니다.
  * 접근성을 위해 전체 키보드 내비게이션 지원을 추가했습니다.
  * PNG 소셜 아이콘을 선명하고 HiDPI를 인식하는 SVG로 교체했습니다.
  * 터미널 도우미에 `wezterm`을 추가했습니다.
* **chwd:**
  * 기본 USB 장치 감지(libusb/sysfs 사용)와 섀시 유형 감지를 추가했습니다.
  * 지문(`fprint`) sudo 통합 지원을 추가했습니다.
  * `intel-lpmd` 지원을 위한 CPU 제품군/모델 감지를 추가했습니다.
  * **Handhelds:** Xbox ROG Ally에 대한 정확한 패턴을 추가했습니다.
  * **Network:** Marvell AVASTAR 88W8897 Wi-Fi 프로필(Surface Pro 4)을 추가했습니다.
  * 노트북과 데스크톱 환경에 맞게 NVIDIA 프로필을 분리했습니다.
  * 가상 머신용 프로필을 분리하고 업데이트했습니다.
* **cachyos-settings:** 기본 NVMe I/O 스케줄러를 `none`에서 `kyber`로 변경했습니다.

**수정:**

* **Installer:**
  * 이제 파티션 방식이 디버그 로그에 출력됩니다.
  * 기존 부트 파티션을 재사용할 때 오래된 마이크로코드 패키지가 제거됩니다.
* **CachyOS-Welcome:**
  * ping 실패 시 연결 확인이 잘못 true를 반환하던 문제를 수정했습니다.
  * 다크 테마에서 외부 링크 아이콘이 보이도록 보장했습니다.
  * Welcome 앱이 동시에 여러 인스턴스로 실행되지 않도록 방지했습니다.
  * 향상된 `.desktop` 창 매칭을 위해 `StartupWMClass`를 추가했습니다.
* **chwd:**
  * NVIDIA 드라이버 충돌을 해결하기 위해 비휴대용 데스크톱의 `mkinitcpio.conf`에서 `kms` 훅을 제거했습니다.
  * NVIDIA 프로필에서 설치된 커널 검색을 더 정확하게 만들었습니다.
  * NVIDIA 470xx 프로필에서 강제 Xorg 세션을 제거했습니다. 이는 `plasma-login-manager`와의 호환성을 수정합니다.
  * 가상 머신 프로필에서 오래된 GDM용 `WaylandEnable=false`를 제거했습니다.
  * 오탐 handheld 감지를 수정했습니다. 예를 들어 특정 MSI 노트북이 MSI Claw로 잘못 인식되는 문제를 수정했습니다.
* **cachyos-settings:**
  * NVIDIA 595 드라이버 문제로 인해 `S01x` 전원 관리를 제거했습니다.
  * NVIDIA 드라이버의 VR 관련 문제로 인해 `AggressiveVblank`를 비활성화했습니다.

26.03
----

**기능:**

* **Installer:**
  * 데스크톱 선택 화면에서 데스크톱을 보여주기 위해 GIF/WebP 비디오 표시 지원을 추가했습니다. Plasma, GNOME, Niri, COSMIC에서 활성화됩니다.
  * 이미지 크기를 줄이기 위해 데스크톱 선택 화면에 JPEG XL 지원을 추가했습니다.
  * GNOME 및 KDE 설치에서 Cachy-Update가 이제 기본으로 활성화됩니다.
  * 마이크로코드 설치 로직을 개선했습니다. 이제 양쪽을 모두 설치한 뒤 불필요한 것을 제거하는 대신, 하드웨어를 감지해 적절한 마이크로코드만 설치합니다.
  * EFI 파티션이 너무 작을 때 표시되는 오류 메시지를 개선했습니다.
  * 데스크톱 환경 목록을 쉽고 접근성 높은 구성부터 WM 같은 고급 구성 순서로 정렬했습니다.
* **CachyOS-Welcome:**
  * 쉬운 Windows Docker VM을 위해 "Winboat"를 간편하게 설치하고 활성화하는 버튼을 추가했습니다.
  * DNS 선택에 FFMUC DNS 서버 지원을 추가했습니다.
  * 우크라이나어 번역을 추가했습니다.
* **chwd:** NVIDIA dGPU 구성에서 initramfs 크기를 크게 줄였습니다.
* **linux-cachyos:** 이제 `0001-cachyos-base-all.patch`를 생성하는 대신, 패치된 커널의 각 릴리스마다 Linux 저장소에서 릴리스가 생성됩니다.
* **cachyos-rate-mirrors:** 미러 평가 전에 적절한 확인을 수행하여 중국 및 러시아 사용자 경험을 크게 개선했습니다.
* **cachyos-settings:** 시간대를 기준으로 무선 규제 도메인을 자동 설정하는 지원을 추가했습니다.
* **website:** 웹사이트 디자인을 더 현대적인 기준에 맞춰 재작업하고 개선했습니다.
* **GitHub:** 중요한 GitHub 저장소에 이슈 템플릿을 추가하여 버그 보고 품질을 높이고 사용자에게 안내를 제공합니다.
* **Mirrors:** 러시아(jura12, cachy-arch.ru), 스웨덴(Zyner), 캐나다(All Things Linux)에 새 미러를 추가했습니다.

**수정:**

* **Installer:**
  * bcachefs-dkms 요구 사항 때문에 파일시스템 선택에서 bcachefs 지원을 제거했습니다.
  * 특정 장치에서 LUKS2를 사용할 때 암호화 문제를 수정했습니다.
  * "ly" 디스플레이 매니저 활성화 문제를 수정했습니다.
* **cachyos-settings:** `cachyos-bugreport.sh`가 이제 IP, 사용자 이름, 호스트 이름, MAC 주소를 가립니다.
* **chwd:**
  * 일반 handheld 프로필과 handheld GPU 지원을 개선했습니다.
  * Lenovo handheld에서 fwupd가 이제 활성화됩니다.


**Handheld Edition 변경 로그:**

* **gamescope-session:** gamescope-session-plus를 Valve의 gamescope-session에서 포크한 gamescope-session-cachyos로 교체했습니다.
  * Steam Deck 및 Lenovo Legion Go 장치의 펌웨어 업데이트를 활성화합니다.
* **plasma-login-manager:** 로그인 매니저로 SDDM을 plasma-login-manager로 교체했습니다.
* **bootloaders:** 자동 스냅샷과 함께 Limine이 기본으로 선택됩니다. systemd-boot도 계속 선택할 수 있습니다.
* **Installer:** Handheld Calamares와 데스크톱 에디션 Calamares를 병합했습니다.
* **ISO:** ISO가 이제 X11 대신 Wayland를 사용합니다.

26.01
----

**기능:**

* **Installer:**
  * 부트로더 선택을 Calamares로 이동했습니다. 관리는 이제 하나의 패키지로 통합됩니다.
  * 다운로드 크기를 줄이기 위해 아키텍처 감지를 기본 시스템 설치 **이전**에 수행합니다.
  * GRUB이 이제 암호화에 LUKS2를 사용합니다.
  * 패키지를 두 번 설치하지 않도록 pacman에 --needed를 전달합니다.
  * NVMe의 Btrfs에 단일 레벨 압축을 사용합니다.
  * Wayland 데스크톱 환경에서 xorg 의존성을 제거했습니다.
* **ISO:**
  * ISO 환경에서 `plasma-login-manager`로 전환했습니다.
  * ISO가 이제 Stable 및 LTS 커널을 모두 포함합니다. Stable 커널이 기본으로 선택됩니다.
  * ISO 세션을 X11에서 Wayland로 전환했습니다.
* **Netinstall:**
  * Plasma 설치가 이제 SDDM 대신 `plasma-login-manager`를 사용합니다.
  * Niri가 이제 `noctalia-shell`과 업데이트된 dotfiles를 사용합니다.
  * GNOME 설치 과정을 정리했습니다.
* **Slides:** Calamares 슬라이드의 오타를 수정하고 Wiki를 소개하는 새 슬라이드를 추가했습니다.
* **Mirrors:** 미러 상태 페이지(<https://packages.cachyos.org/mirrors>)가 이제 CachyOS 미러의 동기화 상태를 표시합니다.
* **cachyos-settings:** NVIDIA 모듈에 `EnableAggressiveVblank`를 활성화했습니다. 이는 저지연 디스플레이 인터럽트에서 interrupt top half에 소요되는 시간을 줄입니다.
* **chwd:**
  * NVIDIA Kepler 계열 카드에서 Nouveau의 VA-API 지원을 활성화하기 위해 `nouveau-fw`를 설치합니다.
  * 여러 신규 AMD GPU에 AI-SDK 지원을 추가했습니다.
  * HHD를 `steamos-manager`와 `inputplumber`로 교체했습니다.
* **Proton-CachyOS:**
  * FSR4 MLFG(Machine Learning Frame Generation) 지원을 추가했습니다. `PROTON_FSR4_[RDNA3_]UPGRADE` 사용 시 자동으로 활성화됩니다.
  * `d7vk` 모듈 지원을 추가했습니다. `PROTON_DXVK_DDRAW=1`로 활성화할 수 있습니다.
  * DualSense 햅틱 피드백 패치를 가져왔습니다.
  * Wine이 특정 도메인에 연결하지 못하도록 `WINE_BLOCK_HOSTS`를 추가했습니다.
  * NVIDIA dGPU에서 `winewayland` 사용 시 `ENABLE_HDR_WSI=1`을 자동으로 활성화합니다.
  * `winewayland.drv` 사용 시 키보드 레이아웃 문제를 수정했습니다.
  * 1% low FPS 저하를 일으키던 오래된 패치를 제거했습니다.
  * DLSS 프리셋 선택과 `libxess_dx11.dll` 리디렉션을 더 잘 처리하도록 `protonfixes`를 패치했습니다.
  * proton-cachyos-slr이 이제 “gaming-meta”의 기본으로 사용됩니다. 네이티브 버전도 계속 지원됩니다.


**수정:**

* **Limine:** `limine-snapper-sync`의 높은 요구 사항을 수용하기 위해 부트 파티션 크기를 4192MB로 늘렸습니다.
* **Installer:** 
  * "alongside" 또는 "replace partition" 옵션을 사용할 때 EFI 파티션이 너무 작으면 설치 진행을 차단/방지합니다.
  * 데스크톱을 선택하고 다음 단계로 갔다가 다시 돌아와 다른 데스크톱을 선택하면 둘 다 선택되는 문제를 수정했습니다.
* **chwd:** 듀얼 GPU 시스템에서 문제를 일으켰기 때문에 `libva-nvidia-driver`를 강제하는 환경 변수를 제거했습니다.
* **cachyos-hello**: cachy-update가 활성화되어 있는데도 비활성화로 표시되던 문제를 수정했습니다.
* **Controller**: 입력 규칙을 최신으로 업데이트하여 여러 컨트롤러 입력 문제를 수정했습니다.
* **Framework 16 (Zen5)**: calamares에 기록할 때 세션이 멈추던 문제를 수정했습니다.

25.11
----

**기능:**

* **ISO/Installer:** 접근성 향상을 위해 Orca와 espeak-ng를 추가했습니다.
* **initcpiocfg:** 지원되는 구성에서 systemd 훅을 활성화했습니다.
* **Netinstall:** Hyprland dotfiles를 제거했습니다.
* **pacstrap:** 파일시스템으로 `bcachefs`가 선택되면 `bcachefs-dkms`를 설치합니다.
* **Calamares:** plasma-login-manager 및 cosmic-greeter 지원을 추가했습니다.
* **Cosmic:** SDDM에서 cosmic-greeter로 전환했습니다.
* **Fonts:** 아시아 사용자를 위한 글꼴을 개선했습니다.
* **chwd:**
  * 지원되는 GPU에 `intel-media-sdk`와 `vpl-gpu-rt`를 설치합니다.
  * Fermi GPU용 Nouveau NvBoost를 활성화했습니다.
  * 390xx 레거시 NVIDIA 드라이버 지원을 중단했습니다.
  * Xbox ROG Ally/X 지원을 추가했습니다.
* **cachyos-hello:**
  * 내부 패키지 설치 프로그램을 제거하고 대신 CachyOS 패키지 설치 프로그램을 엽니다.
  * GUI 기능을 위한 CLI 인터페이스를 추가했습니다.
  * 여러 ISO 버전 확인 문제를 수정했습니다.
* **cachyos-settings:** zram-generator: 압축할 수 없는 페이지에 대한 압축을 제거했습니다.
* **Proton-CachyOS:**
  * 대체 DXVK로 `dxvk-gplasync`를 추가했습니다. `PROTON_DXVK_GPLASYNC=1`로 활성화할 수 있습니다.
  * `PROTON_FSR4_UPGRADE` 사용 시 `DISABLE_LAYER_MESA_ANTI_LAG`를 추가했습니다.
  * 여러 **Wayland 수정**(전체 화면 오프셋, dead keys, DPI 동작, 비디오 출력 조정)과 `winewayland.drv` 개선을 반영했습니다.
  * **게임별 셰이더 캐시** 동작과 더 큰 셰이더 캐시(특히 NVIDIA용)를 도입하고 조정했습니다.
  * FSR3 및 XeSS 업스케일러 업그레이드를 추가했습니다.

**수정:**

* **Limine:**
  * 손상된 UEFI에서 엔트리 등록 없이 Limine이 설치되는 문제를 수정했습니다.
  * `btrfs-overlayfs` 훅의 systemd 변형을 사용합니다.
* **Calamares:** XFS 마운트 설정에서 `attr2` 옵션을 제거했습니다.
* **chwd:** T2 칩의 USB 이더넷 인터페이스를 비활성화했습니다.

25.08
----

**기능:**

* **Services:** Arch Linux 웹사이트에 해당하는 패키지 검색 서비스인 **packages.cachyos.org**를 추가했으며, CachyOS 패키지를 제외하는 옵션도 제공합니다.
* **Kernel:** 설치 프로그램이 이제 설치 후 보조/백업 커널로 **linux-cachyos-lts**를 추가 설치합니다. 그래도 Stable 커널 사용을 권장합니다.
* **ISO:** Stable 커널의 지속적인 문제로 인해 live ISO의 커널을 Stable에서 LTS로 전환하여 부팅 안정성을 높였습니다.
* **Desktop:** 사전 구성된 dotfiles 몇 가지와 함께 **Niri**를 데스크톱 옵션으로 추가했습니다.
* **NVIDIA:** 지원되는 하드웨어에서 최신 저전력 대기 기능을 위해 **S0ix** 절전을 활성화했습니다.
* **GRUB:** 루트 파일시스템이 **Btrfs**를 사용할 때 부팅 가능한 스냅샷이 이제 자동으로 활성화되고 설정됩니다.
* **Tweaks:** Welcome 앱의 Tweaks 페이지에 **Cachy-Update**를 통합했습니다. Cachy-Update는 업데이트를 알리는 타이머와 시스템 트레이 표시기를 추가하고, 클릭 한 번으로 업데이트할 수 있게 합니다.
* **Proton-CachyOS:**
    - FSR4 다운로더와 유사하게 DLSS dll 다운로더(버전 **310.3.0**)를 추가했습니다. 활성화하려면 `PROTON_DLSS_UPGRADE=1` 환경 변수를 사용하세요.
    - DLSS HUD를 활성화하는 `PROTON_DLSS_INDICATOR=1` 환경 변수를 추가했습니다.
    - DLSS 다운로더와 유사하게 XeSS dll 다운로더(버전 **2.1.0**)를 추가했습니다. 활성화하려면 `PROTON_XESS_UPGRADE=1` 환경 변수를 사용하세요.
    - RDNA3 GPU용 `PROTON_FSR4_RDNA3_UPGRADE`를 추가했습니다. `PROTON_FSR4_UPGRADE`와 같은 일을 하지만 필요한 다른 변수도 함께 설정합니다.
    - Proton에 누락된 Nvidia 라이브러리의 더 완전한 구현을 추가했습니다. 이전에는 비활성화되어 있던 게임의 PhysX 같은 옵션을 활성화하는 데 도움이 될 수 있습니다. `PROTON_NVIDIA_NVCUDA`, `PROTON_NVIDIA_NVENC`, `PROTON_NVIDIA_NVML`, `PROTON_NVIDIA_NVOPTIX`를 사용해 개별적으로 활성화할 수도 있습니다.
    - 게임별 셰이더 캐시를 추가했으며 기본으로 활성화됩니다. `PROTON_LOCAL_SHADER_CACHE=0`으로 비활성화할 수 있습니다. 셰이더는 각 게임별로 `<steamlibrary>/shadercache/<appid>` 아래에 캐시되며, 셰이더 사전 캐싱이 활성화된 경우와 유사합니다. 각 게임의 셰이더 캐시가 재빌드되는 동안 끊김이 발생할 수 있지만, 제한된 캐시 크기 때문에 캐시된 셰이더가 제거되지는 않습니다.
    - Vulkan 1.3을 제대로 지원하지 않는 구형 GPU를 위한 선택적 DXVK 대체로 [dxvk-sarek](https://github.com/pythonlover02/DXVK-Sarek)을 추가했습니다. `async` 브랜치를 사용하므로 안티치트나 일반적인 멀티플레이 게임에서는 사용하지 말아야 합니다. 경고했습니다. 활성화하려면 `PROTON_DXVK_SAREK=1`을 사용하세요.
    - FSR 3.1 DLL을 더 최신 버전으로 업그레이드하는 `PROTON_FSR3_UPGRADE`를 추가했습니다.

**수정:**

* **Limine:**
    - MBR 시스템에서 부트 위치로 **/boot** 마운트 지점을 선택할 때 발생하던 `limine bios-install /dev/sdaX` 오류를 수정했습니다.
    - MBR 시스템에서 부트로더 위치가 명시적으로 선택되지 않았을 때 설치 실패를 일으키던 `bootLoader` 경로의 초기화되지 않은 값을 수정했습니다.
    - 부트 파티션에 **bios-grub** 플래그를 사용할 때 “Stage 3 file not found” 오류가 발생할 수 있다는 경고를 추가했습니다.
    - BIOS 설치에서 Windows와의 기본 듀얼 부팅을 수정했습니다.
    - **GNOME (GDM)** 사용 시 Btrfs 스냅샷이 부팅에 실패하던 문제를 수정했습니다.
* **Launch Installer:** **cachyos.org** ping에 실패할 경우 온라인 확인용 대체 IP를 추가했습니다.

25.07
----

**기능:**

- **Shell**: 설치 시 사용자 셸을 fish, zsh, bash 중에서 선택할 수 있습니다. Fish는 계속 기본으로 활성화됩니다.
- **chwd**: 레거시 NVIDIA 드라이버용 plasma-x11을 설치합니다.
- **Netinstall**: KDE Plasma와 Gnome에 fwupd를 추가했습니다.
- **mesa-git**: AMD Anti Lag 지원을 추가했습니다.
- **firefox**: userjs 프로필 개선이 포함된 "firefox-pure"라는 대체 firefox를 도입했습니다. 또한 firefox 위에 설치할 수 있는 "cachyos-firefox-settings"도 추가했습니다.
- **Proton-CachyOS**:
  - upstream wine-wayland 커밋을 가져왔습니다.
  - "PROTON_FSR4_UPGRADE" 환경 변수를 추가했습니다. 이 변수는 최신 FSR4 DLL을 자동으로 다운로드한 뒤 FSR 3.1 지원 게임에서 자동 업그레이드를 위해 교체합니다.
  - Wine 10.0 이후 릴리스된 upstream Wine의 많은 Wayland 관련 패치를 추가했습니다.
  - 더 나은 안티치트 통합을 돕는 패치를 추가했습니다. NelloKudo에게 감사드립니다.
  - vkd3d-proton과 wine용 AMD Anti Lag 2 패치를 추가했습니다.
  - umu-protonfixes를 최신 커밋으로 업데이트했습니다.

**수정:**

- **Keyring**: 문제를 피하고 여러 차례 재시도하도록 keyring 설치 처리를 개선했습니다.
- **systemd-oomd**: le9와 함께 처리할 때 문제가 있었고 애플리케이션을 너무 일찍 종료했기 때문에 systemd-oomd를 비활성화했습니다.

**Handheld Edition 변경 로그:**

- **handheld-settings**: SteamOS의 여러 조정을 Handheld Edition으로 가져왔습니다.
- **pipewire**: 최소 quantum을 256으로 설정했습니다.
- **SteamDeck-OLED**: Steam Deck OLED용 galileo-mura를 설치합니다.
- **Lenovo Legion Go S**: Lenovo Legion Go S 지원을 추가했습니다.

25.05
----

**기능:**

- **ISO**: ISO 부팅 중 시스템의 NVIDIA GPU를 식별하고 적절한 모듈(예: nvidia-open, nvidia)을 로드하는 자동 감지를 추가하여 10xx 시리즈 및 이전 GPU 지원을 개선했습니다.
- **Plymouth**: 새 Plymouth 애니메이션을 추가했습니다.
  - 이 작업을 해준 Eren([https://github.com/erenyldz89](https://github.com/erenyldz89))에게 감사드립니다!
- **Browser**: Cachy-Browser는 deprecated되었습니다. 이제 기본 사전 설치 브라우저로 Firefox를 제공합니다. Firefox와 그 포크로 프로필을 이전하는 가이드는 여기에서 확인할 수 있습니다: [https://wiki.cachyos.org/support/faq/#migrating-your-profile-from-cachy-browser-to-firefox](https://wiki.cachyos.org/support/faq/#migrating-your-profile-from-cachy-browser-to-firefox)
- **netinstall**: KDE 설치에 kcalc, filelight, plymouth-kcm, kio-admin을 추가했습니다.
- **mkinitcpio**: fallback initramfs를 기본으로 비활성화했습니다. 상당한 공간을 절약할 수 있습니다.
- **Mirrors**: 방글라데시에 새 10 Gbps 미러를 추가했습니다. 호스팅해준 Limda에게 감사드립니다!
- **Proton**:
  - **Proton CachyOS 9.0**의 거의 모든 패치를 rebase했습니다.
  - Steam Linux Runtime 빌드용 Wayland 드라이버를 활성화했습니다. `PROTON_ENABLE_WAYLAND=1`로 활성화하세요. 이를 가능하게 해준 [GloriousEggroll](https://github.com/GloriousEggroll)에게 감사드립니다.
  - Wine 10.0 이후 릴리스된 upstream Wine의 많은 Wayland 관련 패치를 추가했습니다.
  - Wayland 드라이버와 Vulkan 게임의 여러 문제를 수정했습니다. 많은 노력을 해준 [Etaash-mathamsetty](https://github.com/Etaash-mathamsetty)에게 감사드립니다.
  - FSR4를 활성화하기 위해 `amdxc64.dll`의 stub 구현을 추가했습니다. FSR3.1 게임을 FSR4로 업그레이드하려면 `FSR4_UPGRADE=1`을 사용하세요. 다시 한번 [Etaash-mathamsetty](https://github.com/Etaash-mathamsetty)에게 감사드립니다. 안내: [https://github.com/Etaash-mathamsetty/wine-builds/releases/tag/fsr4](https://github.com/Etaash-mathamsetty/wine-builds/releases/tag/fsr4)
  - 유선 사운드 기반 햅틱을 위한 더 완전한 오디오 장치 감지 기능을 제공하도록 DualSense 관련 패치를 추가했습니다. 해당 특정 동작에 의존하던 일부 게임에서 이제 그 기능이 동작할 수 있습니다. 원본 패치를 제공한 [ClearlyClaire](https://github.com/ClearlyClaire)와 **Proton CachyOS 9.0** 이후 이를 살펴본 [Exotic0015](https://github.com/Exotic0015)에게 감사드립니다. Upstream: [https://gitlab.winehq.org/wine/wine/-/merge_requests/7238](https://gitlab.winehq.org/wine/wine/-/merge_requests/7238)
  - Dragon Age Inquisition 패치는 동작하지 않아 제거했습니다. 해당 게임은 당분간 **Proton CachyOS 9.0**을 사용하세요.
- **GRUB**: 새 GRUB 테마를 추가했습니다. [diegons490](https://github.com/diegons490/cachyos-grub-theme)에게 감사드립니다.

**수정:**

- **Mirrors**: 러시아 사용자가 더 이상 설치할 수 없던 문제를 수정했습니다. 이는 러시아에서 차단하기 시작한 CDN77을 사용하지 않는 방식으로 완화했습니다.
- **kde-settings**: 작업 표시줄의 Discover 아이콘을 비활성화했습니다.
- **ddcutil**: AMD GPU에서 YouTube 영상을 볼 때 멈추는 문제를 해결하기 위해 ddcutil 2.2.1 프리릴리스를 적용했습니다.

**Handheld Edition 변경 로그:**

- **os-branch**: Game Mode가 이제 CachyOS Linux가 사용 중임을 올바르게 표시합니다.
- **audio**: convolver 프로필을 업데이트했습니다.
- **steamos-manager**: Steam Deck의 GPU 클럭 및 TDP 관리, BIOS/dock 업데이트, 저장 장치 유지관리, 외부 저장소 포맷, 배터리 충전 제한에 사용됩니다.
- **steamos-powerbuttond**: 이 구성 요소는 더 나은 절전 경험을 위해 표준 powerbuttond를 대체합니다.
- **jupiter-hw-support**: 20250501로 업데이트했습니다.

25.04
----

**기능:**

- **occt**: 라이브 환경에서 스트레스 테스트를 할 수 있도록 ISO에 OCCT를 추가했습니다.
  - 이 아이디어를 제공한 Marek에게 감사드립니다!

**수정:**

- **kernel**: Asus 노트북에서 모듈 충돌을 수정합니다.
- **limine**: Limine이 이제 mkinitcpio-limine-hook을 설치하고 부트로더 엔트리를 자동으로 생성합니다.

**Handheld Edition 변경 로그:**

- **audio**: ROG Ally X 및 Legion Go용 오디오 프로필을 추가했습니다.
- **gamescope**: gamescope-plus를 upstream gamescope로 교체했습니다.

25.03
----

**기능**:

- **Bootloader**: Limine 부트로더 지원을 추가했습니다.
- **Bootloader**: Limine 부트로더용 자동 스냅샷 지원을 추가했습니다.
- **Samba**: Samba 마운트를 쉽게 설정하기 위해 "cachyos-samba-settings" 패키지를 추가했습니다.
- **NVIDIA**: 폐쇄형 NVIDIA 모듈에 GSP Firmware를 다시 활성화했습니다.
- **Kernel**: Asus Armoury 드라이버 지원을 추가했습니다.
- **Secure Boot**: 원하는 파일만 서명하도록 "sbctl-batch-sign" 스크립트를 개선했습니다.
- **udev**: NTFS 파티션의 기본 드라이버로 ntfs3를 사용하던 것을 되돌렸습니다.
  - 정보: NTFS3 커널 드라이버를 기본으로 사용하면 일부 사용자에게 문제가 발생했습니다. 따라서 다시 되돌렸습니다.
- **wine**: Wine과 Wine-Staging이 이제 기본적으로 WoW64와 NTSync를 사용합니다.
- **scx-manager**: sched-ext GUI 관리자를 Kernel Manager에서 분리하여 자체 애플리케이션으로 이동했습니다.
- **Hardware Support**: RDNA4, RTX 5070 Ti, 5070 지원을 추가했습니다.
- **Settings**: DLSS Swapper 지원을 추가했습니다. 최신 dlss 버전과 프리셋을 자동으로 업데이트하고 사용하는 스크립트입니다.
- **Package Updates**: linux-cachyos 6.14.0, NVIDIA 570.133.07, Gnome 48, Plasma 6.3.3, mesa 25.0.2, linux-api-headers 6.14.0, linux-tools 6.14.0

**수정**:

- **initcpiocfg**: mkinitcpio에 "crc32c-intel" 모듈을 추가하던 것을 제거했습니다. 이는 deprecated되었고 이제 기본적으로 "crc32c" 모듈을 사용합니다.
- **chwd**: T2 MacBook에서 brcmfmac 오프로딩을 비활성화합니다.
- **chwd**: 노트북에는 NVIDIA 390.xx 드라이버를 설치하지 않습니다.

25.02
----

**기능**:

- **Kernel**:
  - 기본 **linux-cachyos** 커널에 모든 사용 가능한 아키텍처용 Propeller Optimization이 적용됩니다.
    - **참고**: AutoFDO와 함께 사용하면 작업 부하에 따라 약 10% 성능 향상을 얻을 수 있습니다.
- **NVIDIA**: Blackwell 아키텍처 지원을 추가했습니다.
- **ISO**: Blackwell 지원을 제공하기 위해 nvidia-open 모듈을 기본으로 사용합니다. Turing보다 오래된 GPU 사용자는 첫 번째 또는 fallback 부팅 옵션을 사용해야 합니다.
- **Settings**: X11 세션에서 tap-to-click을 기본으로 활성화했습니다.
- **udev**: NTFS 파티션의 기본 드라이버로 ntfs3를 사용합니다.
- **game-performance**: 게임 실행 중 화면 보호기를 비활성화했습니다.
- **kernel-manager (sched-ext)**: server mode 지원을 추가했습니다.
- **kernel**: AMD preferred core 기능에 대한 수정 사항을 추가했습니다.
- **chwd**: RTD3 우회책을 다시 추가했습니다.
- **Package Updates**: linux-cachyos 6.13.0, NVIDIA 570.86.16, LLVM 19, glibc 2.41, mesa 24.3.4.

**수정**:

- **chwd**: Intel 및 NVIDIA 하드웨어가 있는 하이브리드 노트북이 DaVinci Resolve에서 GPU를 사용할 수 없던 문제를 수정했습니다.
- **glibc**: CVE-2025-0395에 대한 수정 사항을 추가했습니다.
- **kernel-manager**: 기본 Arch 커널용 사전 빌드 NVIDIA 모듈이 있으면 설치를 시도합니다.
- **kernel-manager**: 모듈을 사용할 수 없는 경우 값이 덮어써지지 않도록 추가 확인을 추가했습니다.

**Handheld Edition 변경 로그:**

- **hooks**: 네이티브로 컴파일된 Proton을 다시 사용할 수 있도록 허용했습니다.
- **misc**: 여러 업데이트와 수정 사항입니다.

24.12
----

**기능**:

- Kernel:
  - 기본 `linux-cachyos` 커널에 모든 사용 가능한 아키텍처용 AutoFDO가 적용됩니다.
    - **참고**: 현재 제한 사항으로 인해 성능 향상은 아직 미미합니다. 프로필 병합에는 LLVM 19가 필요하고 Propeller Optimization도 이에 의존합니다. Arch Linux의 LLVM 19 도입 이후 올해 말까지 LLVM 19와 더 최적화된 프로필이 제공될 것으로 예상합니다.
- chwd: Rusticl이 이제 올바르게 구성됩니다.
- chwd: hooks 호출 중 오류 로깅을 개선했습니다.
- chwd: VAAPI 드라이버 선택을 수정했습니다.
- cachyos-settings: Zink를 통해 애플리케이션을 실행하기 쉽게 하는 스크립트를 추가했습니다.
- Sysctl Configuration: 여러 설정을 재작업하고 최적화했습니다.
- Kernel Manager: `scx_loader` 지원을 추가하여 네이티브 스케줄러 전환을 활성화했습니다.
- Installer: Bluetooth 서비스가 이제 기본으로 활성화됩니다.
- Netinstall:
  - 설치 패키지에 `wireless-regdb`를 추가했습니다.
    - 이는 연결이 적절한 채널을 사용하도록 구성하고 추가 채널을 해제하여 인터넷 속도 향상 가능성을 제공합니다.
    - **참고**: 기본적으로 일반 지역이 설정됩니다. 최적 성능을 위해 자신의 지역에 맞게 사용자 지정하는 것을 권장합니다.
- **Package Updates**: NVIDIA 565.77, linux-cachyos 6.12.6, mesa 24.3.2, scx-scheds 1.0.8, zfs 2.2.7

**버그 수정**

- Installer: 설치 로그가 더 이상 디버그 터미널 창을 띄우지 않습니다.
- Partition Management:
  - 적절한 `umask` 설정을 통해 충분한 권한 없이는 `/boot`에 접근할 수 없도록 보장합니다.
- Launch Installer: 인터넷 연결 확인을 수정했습니다.

**Handheld Edition 변경 로그:**

- handheld 관련 패키지를 업데이트했습니다.
- 전원 프로필 처리 문제를 수정했습니다.
- WiFi 6 지원을 추가했습니다.

24.11
----

**기능:**

- thp-shrinker: zero filled pages에 대해 max_ptes_none 값을 80%로 설정했습니다. THP always가 사용될 때 같은 성능을 유지하면서 메모리 사용량을 줄입니다.
- NVIDIA: 사용자가 직접 폐쇄형 드라이버로 전환하면 GSP Firmware가 이제 자동으로 비활성화됩니다.
- chwd: NVIDIA: 노트북에서 사용 가능한 최대 tdp에 도달하도록 nvidia-powerd 서비스가 활성화됩니다.
- proton-cachyos: DLSS Frame Generation이 이제 동작합니다. 이는 앞으로 upstream proton에서도 동작할 것으로 예상됩니다.
- kernel: AMD Cache Optimizer가 이제 적용됩니다. 듀얼 x3d CCD CPU 사용자는 이제 frequency 코어 우선 또는 cache 코어 우선 중에서 전환할 수 있습니다.
- kernel: amd-pstate: Strix Point용 amd-pstate 성능 수정 사항을 백포트했습니다.
- kernel: amd rdna2 및 rdna3 GPU의 tdp 문제에 대한 upstream 수정 사항을 추가했습니다.
- kernel: 5120x1440x240 구성의 디스플레이에 대한 타이밍 수정 사항을 추가했습니다.
- kernel: 실험적 AutoFDO 최적화 커널을 저장소의 "linux-cachyos-autofdo"로 제공합니다.
- ISO: 사용자가 handheld edition을 실행 중인지 확인하고, 지원되지 않는 장치에서 설치를 시작하면 경고를 표시합니다.
- ISO: 사용자가 최신 ISO를 사용하는지 확인하고, 아니면 경고합니다.

**버그 수정:**

- refind: partitioning: 3-way 파티션 레이아웃에서 2-way로 변경했습니다.
- netinstall: Plasma 설치에 kdeplasma-addons를 추가했습니다.
- calamares: swap 파티션이 있는 구성에서 파티션 작업 중 발생하던 문제를 수정했습니다.

**Handheld Edition 변경 로그:**

- Rog Ally X 지원이 개선되었을 것입니다.

24.10
----

**기능:**

- Package Updates: linux-cachyos 6.11.1, mesa 24.2.4, scx-scheds 1.0.5, python 3.12.7

**버그 수정:**

- sddm: Wayland 세션 로그인 문제를 해결하기 위해 더 새로운 sddm을 가져왔습니다.
- ISO: 일부 구성에서 그래픽 세션 로딩을 수정하기 위해 xf86-video-amdgpu를 추가했습니다.
- chwd: 프로필 재설치 문제를 수정했습니다.

24.09
----

**기능:**

- Packages: LLVM, Clang, svt-av1, nodejs 같은 여러 패키지를 PGO로 최적화했습니다. 예를 들어 Clang 컴파일러가 10% 더 빨라졌습니다.
- Repository: 저장소가 이제 더 자주 동기화되고 업데이트되어 지연이 더 줄어듭니다. 동기화 간격이 3시간마다에서 1시간마다로 줄었습니다.
- Repository: 2024.09.27부터 -fpic으로 컴파일된 패키지는 자동으로 -fno-semantic-interposition을 활성화합니다. 이는 많은 패키지에서 성능 향상을 제공할 수 있습니다.
- zlib-ng: 이제 zlib의 대체로 사용됩니다.
- sddm: KDE 설치에서 sddm은 이제 기본적으로 Wayland를 compositor로 사용합니다. # 릴리스 글에 마이그레이션 변경 사항 제공
- cachyos-settings: NetworkManager가 이제 DNS 캐싱에 도움이 되는 systemd-resolved를 backend로 사용합니다.
- cachyos-settings: 일부 구성에서 timesync 문제를 피하기 위해 time.google.com을 timesync 서버로 사용합니다.
- gcc: znver5 튜닝 수정 사항을 추가했습니다.
- gcc: Clear Linux의 패치와 플래그를 cherry-pick했습니다.
- glibc: "evex" 패치와 Clear Linux의 cherry-pick을 추가했습니다.
- wiki: Wiki에 많은 새 추가와 재작업이 이루어졌습니다.
- chwd: 장치 처리를 단순화했습니다.
- chwd: 모든 프로필이 이제 PCI 장치용으로 구체적으로 설계되었습니다.
- chwd: 드라이버 설치를 자동으로 처리하기 위해 --autoconfigure를 추가했습니다.
- Package Updates: linux-cachyos 6.11.0, mesa 24.2.3, Plasma 6.1.5, NVIDIA 560.35.03, calamares 3.3.10, QT 6.7.3

**버그 수정:**

- Launch-Installer: 설치 시작 전에 하드웨어 시계를 동기화하는 수정 사항을 추가했습니다.
- calamares: 설치 후 파일시스템 언마운트 수정 사항을 추가했습니다.
- keyring: 설치 시작 전에 keyring을 정리하고 재생성합니다. 이는 드문 keyring 문제를 수정합니다.
- sysctl: Core dump를 다시 활성화했습니다.
- chwd: Spectacle 같은 소프트웨어와의 잠재적 충돌을 방지하고 호환성을 개선하기 위해 PRIME 프로필에서 `libva-nvidia-driver`를 제거했습니다.
- cachyos-settings: GNOME Wayland 충돌에 대한 우회책을 추가했습니다.
- cachyos-fish/zsh-config: wayland 특정 quirks를 제거했습니다.

**Handheld Edition 변경 로그:**

- Ally/Ally X: HHD가 inputplumber로 교체되었습니다. hhd가 해당 장치에 커널 드라이버를 올바르게 사용하지 않아 문제가 발생했기 때문입니다.
- Handheld 관련 패키지를 업데이트했습니다.

24.08
----

**기능:**

- chwd: NVIDIA가 이제 지원되는 카드에서 open module을 기본으로 사용합니다.
- Desktop: 설치 옵션에 Cosmic Desktop Environment를 추가했습니다.
- NVIDIA: 최신 560 Beta 드라이버가 이제 기본입니다. Firefox와 다른 애플리케이션의 충돌을 수정하기 위해 egl-wayland를 패치했습니다.
- mirrors: CDN77이 전 세계 캐시를 제공하는 Object Storage로 CachyOS를 후원하여 사용자 연결 속도를 크게 개선했습니다.
- mirrors: CachyOS가 이제 동기화 문제를 피하기 위해 자체 Arch Linux 미러를 제공하며, 설치 중 fallback 미러와 함께 기본으로 설정됩니다.
- SecureBoot: 쉬운 Secure Boot 지원을 위해 Wiki에 스크립트와 튜토리얼을 도입했습니다.
- cachy-chroot: 단순한 chroot를 위해 fstab을 통한 자동 마운트를 추가했습니다.
- cachy-chroot: LUKS Encryption 지원을 구현했습니다.
- kernel-manager: sched-ext 구성에서 sched-ext 플래그 설정 지원을 추가했습니다.
- kernel-manager: nvidia-open 빌드 옵션을 도입했습니다.
- kernel-manager: configure 페이지에서 마지막으로 사용한 옵션을 기억하는 옵션을 추가했습니다.
- Package Updates: linux-cachyos 6.10.5, mesa 24.2.0, Plasma 6.1.4, NVIDIA 560.31.02

**버그 수정:**

- chwd: 장치 이름을 기반으로 PRIME 프로필 감지를 개선했습니다.
- chwd: 일부 구성에서 문제를 일으켜 RTD3 우회책을 제거했습니다.
- cachyos-rate-mirrors: Live ISO에서 실행 중일 때 미러 순위를 비활성화했습니다.
- cachy-chroot: 파티션에 유효한 fstype 또는 uuid가 없을 때 발생하던 충돌을 수정했습니다. 예: Microsoft Recovery Partition.
- calamares: keyring 초기화를 리팩터링했습니다.
- kernel-manager: LTO 커널과 모듈이 활성화된 custom pkgbase 빌드 지원을 수정했습니다.
- kernel-manager: 비밀번호 프롬프트 지연을 수정했습니다.
- ISO: 최신 GPU를 위해 radeon.modeset=1을 amdgpu.modeset=1로 교체했습니다.
- game-performance: 프로필을 사용할 수 없을 때 실패하지 않도록 방지했습니다.

**Handheld Edition 변경 로그:**

- device support: Luke Jones에게 감사하며 Ally X 지원을 추가했습니다.
- libei: libextest를 대체하는 libei 지원을 구현했습니다.
- packagekit: Discover를 통한 시스템 업데이트 문제를 방지하기 위해 packagekit 설치를 차단했습니다.
- hook: 네이티브로 컴파일된 Proton 버전과 충돌하는 pacman-hook을 추가하여 잠재적 문제를 피했습니다.
- jupiter-fan-control, steamdeck-dsp, Steam Deck 펌웨어를 업데이트했습니다.

24.07
----

**기능:**

- Repository: Zen 4 최적화 저장소를 도입했습니다. 이는 Zen4 및 Zen5 CPU에 사용됩니다.
- ISO: Zen4/Zen5 저장소용 자동 아키텍처 확인을 추가했습니다.
- chwd: AMD GPU용 GC 지원을 추가했습니다. 공식 ROCm 지원 GPU 감지에 도움이 됩니다.
- chwd: 지원되는 카드에서 libva-nvidia-driver를 사용합니다.
- ksmctl: KSM 활성화/비활성화 도구를 도입했습니다: ksmctl --enable
- kernel: "linux-cachyos" 커널용으로 이제 "linux-cachyos-dbg" 패키지를 사용할 수 있습니다. 디버깅 목적의 unstripped vmlinux가 포함됩니다.
- kernel: amd cpb boost가 이제 사용 가능하며 power-profiles-daemon이 패치되었습니다. "powersave" 프로필이 설정되면 amd cpu에서 boost를 비활성화합니다.
- kernel: 비디오 재생을 위한 AMD SoC 전원 절약 패치를 추가했습니다.
- kernel-manager: sched-ext 스케줄러 관리와 GUI를 통한 정보 확인 지원을 추가했습니다.
- steam/proton: 이제 steam 실행 옵션에 추가할 수 있는 "game-performance" 스크립트가 있습니다.
- power-profiles: AMD Pstate 지원 CPU에서 가장 낮은 Linear 주파수가 더 높게 설정됩니다. 이는 지연 시간과 1% low를 개선할 수 있습니다.
- kwin: tearing에 대한 백포트를 추가했으며 테스트되었습니다. NVIDIA에서는 네이티브 wayland 애플리케이션에서만 동작합니다.
- netinstall: Cutefish가 설치 가능한 Desktop Environment에서 제거되었습니다.
- Mirrors: 오스트리아와 중국 미러를 추가했습니다. 중국 미러는 TUNA University가 호스팅합니다. 중국 사용자들에게 큰 도움이 될 것입니다.
- Package Updates: linux-cachyos 6.9.9, mesa 24.1.3, NVIDIA 555.58.02, Plasma 6.1.2, LLVM 18.1.8

**버그 수정:**

- ISO: copytoram을 yes 대신 auto로 설정했습니다.
- ISO: 노트북의 Live ISO에서 Sleep을 수정했습니다.
- Launch Installer: chroot에서 archlinux-keyring을 가져올 때 문제를 피하기 위해 설치 시작 전에 최신 archlinux-keyring을 설치합니다.
- Mirrors Ranking: 설치 시 Tier 1 Mirror만 순위화합니다.
- pacman.conf: 사용하지 않는 pacman 저장소를 제거합니다.
- cachy-chroot: .snapshot subvolumes를 표시하지 않습니다.
- Calamares: 사용자들이 문제를 보고했기 때문에 "Preservefiles" 모듈을 사용하지 않습니다.

**Handheld Edition 변경 로그:**

- 다른 스케일링을 적용하기 위한 구성 파일을 추가했습니다: '/home/$USER/.config/deckscale
- GameMode 전환을 더 견고하게 만들었습니다.
- Steam Deck용 Wifi/Bluetooth 펌웨어를 업데이트했습니다.
- GameMode용 Auto Mount를 구현했습니다.
- Wine CPU Topology, HDR, Backlight를 위한 gamescope-session quirks를 추가했습니다.
- Refresh Rate Selection을 수정했습니다.
- jupiter-hw-support, steamdeck-dsp, jupiter-fan-control, gamescope-session-git을 업데이트했습니다.

24.06
----

**기능:**

- chwd: handheld 하드웨어 감지를 도입했습니다.
- chwd: T2 MacBook 지원을 도입했습니다.
- chwd: 네트워크 드라이버 감지를 추가했습니다.
- Installation: MacBook T2 지원을 추가했습니다.
- ISO: cachy-chroot를 추가했습니다. 사용자가 시스템에 chroot할 수 있도록 돕는 스크립트입니다.
- ISO: Microcode Hooks로 전환했습니다. 최신 Ventoy 릴리스(1.0.98)를 사용해야 합니다.
- ISO: copytoram을 활성화했습니다. 더 이상 오프라인 설치를 제공하지 않기 때문에 비활성화할 필요가 없습니다.
- filesystem: BTRFS가 이제 기본 선택 파일시스템입니다.
- netinstall: firewalld 대신 ufw를 사용합니다.
- Calamares: Branding Slides를 업데이트했습니다.
- Slides: 최신 변경 사항에 맞춰 업데이트했습니다.
- Package Updates: linux-cachyos 6.9.3, mesa 24.1.1, xwayland 24.1, NVIDIA 555.52.04, Plasma 6.0.5

**버그 수정:**

- Calamares: umount: emergency를 다시 활성화했습니다.
- Qtile: 멀티미디어 컨트롤이 이제 올바르게 작동합니다.
- NVIDIA: Wayland에서 절전이 동작하는 데 필요한 서비스와 옵션을 활성화했습니다.
- netinstall: 설치에서 b43-fwcutter를 제거했습니다.
- netinstall: hyprland-git을 hyprland로 교체했습니다.
- netinstall: 누락된 모듈 문제를 피하기 위해 선택 항목에서 linux-cachyos-lts를 제거했습니다.
- Calamares: Shellprocess: keyring 설치 전에 미러 순위화를 이동했습니다.

**Experimental Handheld Release 변경 로그:**

- KDE Vapor Theme(SteamOS Theme)를 기본으로 설정했습니다.
- 기본 파일시스템: BTRFS
- 기본 커널: linux-cachyos-deckify
- SDDM이 이제 Wayland를 사용합니다.
- 지연 시간을 줄이기 위한 HHD용 Environment Flag
- Game Mode 전환 동작을 개선하기 위한 Kernel Arguments를 추가했습니다.
- 이제 사용자 이름을 편집할 수 있습니다.
- 하드웨어 감지가 사용 장치에 따라 필요한 패키지를 구성하고 설치합니다.
- Mallit Keyboard가 이제 Dark Mode를 사용합니다.
- 올바른 sleep을 위한 Valve의 Powerbuttond
- Steam에 Shortcuts를 추가할 수 있습니다.
- LAVD Scheduler의 최신 개선 사항을 제공하는 scx-scheds를 최신 git 커밋으로 업데이트했습니다.
- cachyos-handheld에 automount를 추가했습니다.
- CachyOS가 이제 Steam Deck에서 Steam Deck BIOS 업데이트를 수행할 수 있습니다.

24.05
----

**기능:**

- Filesystems: 파일시스템 옵션으로 Bcachefs를 도입했습니다.
- pacstrap: Bcachefs 사용 여부를 감지하고 해당 Bcachefs-tools를 설치합니다.
- CachyOS-AI-SDK: OOB NVIDIA SDK Setup을 제공하는 새 설치 옵션을 도입했습니다.
- CachyOS-Deckify: Handheld용 변형을 제공합니다(실험적). 자세한 내용은 [여기](https://discuss.cachyos.org/t/information-experimental-cachyos-deckify/203)를 참고하세요.
- BTRFS: 스냅샷을 위한 Automatic Snapper. CachyOS hello 앱 내부에서 설치할 수 있습니다.
- ISO: Offline Installer를 제거했습니다.
- Package Updates: Python 3.12, gcc 14.1.1, mesa 24.0.6, xwayland 24.1rc2, NVIDIA 550.78

**버그 수정:**

- settings.conf: hardware detection을 netinstall보다 앞으로 이동했습니다.
- pacstrap: btrfs-assistant-git 대신 btrfs-assistant를 사용합니다.
- plymouth: zfs + encryption에서 plymouth hook을 제거합니다.
- ISO: 설치 중 화면 잠금을 피하기 위해 KDE용 여러 구성 파일을 추가했습니다.
- services-systemd: fstrim.timer를 올바르게 활성화합니다.
- umount: zfs 설치 문제를 피하기 위해 emergency를 비활성화합니다.
- shellprocess: 오프라인 설치의 남은 항목을 정리합니다.

24.04
----

**기능:**

- Plymouth: 테마가 적용된 부팅 애니메이션을 제공하기 위해 plymouth를 사용합니다.
- ISO: calamares에서 키보드 레이아웃을 설정할 때 발생하는 문제로 인해 X11로 다시 전환했습니다.
- rEFInd: 새 파티션 레이아웃(별도 /boot 및 /boot/efi)
- netinstall: KDE: xwaylandvideobridge를 기본으로 설치합니다.
- netinstall: ly의 버그 때문에 여러 Desktop Environment에서 ly 대신 lightdm을 사용합니다.
- systemd-boot: 이전에 선택한 부팅 엔트리를 기억할 수 있도록 systemd-boot에 @saved를 사용합니다.
- cachyos-keyring: cachyos-keyring 패키지를 리팩터링하고 cachyos-trusted keyring을 제공합니다.
- ISO: ISO의 mkinitcpio 이미지에 ZSTD 19 Compression을 사용합니다.
- Package Updates: xz 5.6.1-3, linux-cachyos 6.8.2, pacman 6.1.0-5, mesa 24.0.4, Plasma 6.0.3, nvidia 550.67 and cachyos-settings 39-2

**버그 수정:**

- Autologin: sddm과 함께 사용할 때 autologin 옵션을 수정했습니다.
- xz: 패치된 xz 패키지를 제공합니다.
- libarchive: 악성 xz 행위자의 커밋을 완화했습니다.
- cachyos-settings: udev-rule: watermark_scale_factor를 125로 설정하지 않습니다. RAM 사용량이 크게 증가하기 때문입니다.
- calamares: pacman-keyring: keyring을 설치에 통합하는 더 단순한 방법을 사용합니다.

24.03.1
----

**기능:**

- netinstall: 사용자 혼란을 피하기 위해 netinstall 선택 항목에서 추가 커널을 제거했습니다. 다른 사용자 지정 커널은 Kernel Manager를 통해 설치할 수 있습니다.
- Kernel Manager: NVIDIA 모듈이 감지되면 자동 설치됩니다. QT6용으로 rebase했고, LTO 옵션 사용 시 사용자 지정 이름 문제를 수정했습니다.
- Package Installer: QT6 기반으로 rebase했고 pacman 6.1용으로 업데이트했습니다.
- Package Updates: linux-cachyos 6.8.1, pacman 6.1, mesa 24.0.3, Plasma 6.0.2, llvm 17.0.6

**버그 수정:**

- NVIDIA: nvidia 그래픽 문제를 피하기 위해 nvidia 모듈이 nvidia.drm.modeset 소유권을 더 일찍 가져가도록 패치했습니다.
- Refind: 문제를 피하기 위해 lts 커널을 설치하지 않습니다.
- shellprocess: liveusers 디렉터리를 완전히 제거합니다.

24.03
----

**기능:**

- ISO: Plasma 6가 이제 ISO에 포함되며 Wayland를 기본으로 사용합니다. netinstall에 대한 혼란을 피하기 위해 GNOME ISO는 제거되었습니다.
- Calamares: QT6용으로 rebase했습니다.
- refind: luks2 암호화를 포함해 f2fs와 zfs를 옵션으로 추가했습니다.
- mirrors: 이제 전역 CDN 2개를 제공합니다. 하나는 Cloudflare R2에서, 하나는 Digital Ocean에서 호스팅됩니다.
- mirrorlist: 더 빠른 전달을 위해 온라인 설치 프로그램을 cdn에서 직접 가져옵니다.
- initcpiocfg: ucode를 조기 로딩하기 위해 새 microcode hook을 사용합니다.
- bootloader: 더 이상 bootloader로 microcode를 로드하지 않습니다.
- Package Updates: linux-cachyos 6.7.9, mesa 24.0.2, zfs-utils 2.2.3

**버그 수정:**

- pacstrap: 사용자가 더 깔끔한 설치 선택을 할 수 있도록 config packages를 설치하지 않습니다.
- shellprocess_pacman: 순위가 매겨진 cachyos-v4-mirrorlists도 대상 시스템으로 복사합니다.

24.02
-----

**기능:**

- refind: 더 많은 파일시스템과 암호화 옵션을 제공하기 위해 레이아웃을 /boot/efi에서 /boot로 변경했습니다.
- Live-ISO: Live-ISO를 정리하고 동기화했습니다.
- Launch Installer: 온라인 설치 권장 사항을 추가했습니다.
- shell-configs: 터미널 시작 시 fastfetch를 비활성화하는 옵션과 "update" alias를 추가했습니다.
- netinstall: kde에 phonon-qt5-vlc를 추가했습니다.
- Package Updates: linux-cachyos 6.7.5, mesa 23.3.5, gcc 13.2.1-12, glibc 2.39, mesa 24.0.1, nvidia 550.54.14

24.01
-----

**기능:**

- x86-64-v4: 설치 시 저장소 자동 감지 및 활성화
- linux-cachyos: sched-ext scheduler framework가 이제 기본 커널에서 제공됩니다.
- xwayland: explicit sync 패치를 기본으로 제공합니다.
- Package Updates: linux-cachyos 6.7, mesa 23.3.3, gcc 13.2.1-8, xorg-xwayland 23.2.4

**버그 수정:**

- chwd: Ada Lovelace Nvidia 카드의 경우 early kms 문제를 피하기 위해 nvidia 모듈을 initramfs에 직접 포함합니다.

23.12
-----

**버그 수정:**

- zfs: 호환성을 보장하기 위해 pool 옵션에 compatibility=grub를 추가합니다.
- grub/xfs: 새 xfs bigtime 기본값과의 호환성을 위해 grub에 패치를 추가합니다.
- netinstall: xdg-desktop-portal-hyprland-git 대신 xdg-desktop-portal-hyprland를 사용합니다.

23.11
-----

**기능:**

- nvidia: dkms 대신 nvidia 모듈을 사용합니다.
- Calamares가 upstream과 동기화되었습니다.
- Package updates: linux-cachyos 6.6.1, nvidia-utils 545.29.02, mesa 23.2.1, zfs-utils 2.2.0, mkinitcpio 37

**버그 수정:**

- nvidia-hook: 새 모듈로 설치 시 발생하는 문제를 피하기 위해 nvidia-hook을 다시 추가했습니다.
- netinstall: 최근 KF5 패키징 변경으로 인해 패키지 이름이 변경되었습니다.
- netinstall: GNOME 설치에 xdg-desktop-portal-gnome을 추가했습니다.

23.09
-----

**기능:**

- systemd-boot: luks2를 기본으로 설정했습니다.
- netinstall: CachyOS Packages용 자체 카테고리를 제공합니다.
- Calamares가 upstream과 동기화되었습니다.
- Package updates: linux-cachyos 6.5.3, nvidia-utils 535.104.05, mesa 23.2.7

**버그 수정:**

- shellprocess_sdboot: 설치 과정에서 부팅 엔트리를 생성할 때 "sudo"를 사용하지 않도록 했습니다.

23.08
-----

**기능:**

- Calamares가 upstream과 동기화되었습니다.
- Package updates: linux-cachyos 6.4.10, nvidia-utils 535.98

**버그 수정:**

- Keyring이 업데이트되어 이제 올바르게 동작합니다.

23.07
-----

**기능:**

- CachyOS-Settings에 이제 사용량에 따라 네트워크 설정을 자동으로 조정하는 "bpftune"이 포함됩니다.
- CachyOS-Qtile-Settings: 사용 편의성 변경, 더 나은 아이콘 등
- Package updates: linux-cachyos 6.4.2, cachy-browser 115.0.1, mesa 23.1.3,

**버그 수정:**

- rate-mirrors를 수정했습니다.
- chwd(Hardware Detection)에 여러 수정 사항이 적용되었습니다.
- 설치 프로그램에서 하이브리드 구성의 nonfree 드라이버 설치를 수정했습니다.
- 드문 구성, 주로 VM에서 발생하던 Calamares 멈춤을 수정했습니다.
- Slides: Slide 6 오타를 수정했습니다.

23.06
-----

**버그 수정:**

- Offline Installation: calamares를 수정했습니다.

23.05
-----

**기능:**

- CachyOS Git Migration 레이아웃이 이제 설치에 반영됩니다.
- chwd(mhwd)에 여러 수정 사항이 적용되었습니다.
- Pacman: 업데이트 전에 사용자에게 메시지를 제공할 수 있는 기능을 추가했습니다.
- Calamares가 upstream과 동기화되었습니다.
- Package updates: linux-cachyos 6.3.4, cachy-browser 113.0.1, mesa 23.1.1, python 3.11

**버그 수정:**

- netinstall: 패키지 변경으로 인한 최소한의 수정
- Slides: 최신 변경 사항을 반영하도록 Slide 6을 업데이트했습니다.

23.04
-----

**기능:**

- Qtile 데스크톱 환경을 도입했습니다.
- mhwd를 재작업했습니다: Rust로 재작성, GPU 및 네트워크 카드 프로필 단순화, 오래된 코드 다수 제거
- Package updates: linux-cachyos 6.2.12, cachy-browser 112.0.1, mesa 23.0.3, zfs-utils 2.1.11

**버그 수정:**

- f2fs: systemd에서 문제가 있어 "atgc" 마운트 옵션을 제거했습니다.

23.03.1
-------

**기능:**

- Package updates: linux-cachyos 6.2.7, cachy-browser 111.0

**버그 수정:**

- 잘못된 Calamares upstream 커밋 때문에 lightdm displaymanager와 관련된 Calamares 문제가 수정되었습니다.
- Offline installation keyring 문제가 수정되었습니다.
- Refind: linux-cachyos-lts를 기본으로 사용합니다. 현재 6.2는 refind와 잘 동작하지 않는 것으로 보입니다.

23.03
-----

**새 기능:**

- refind 부트로더를 추가했습니다.
- MHWD를 사용한 자동 Nvidia 드라이버 설치
- ZFS 설치에 대한 암호화 지원
- netinstallation에 Hyprland를 추가했습니다.
- CachyOS-KDE-Settings는 이제 KDE 기본 테마를 사용하지만, CachyOS Themes는 계속 사전 설치되어 사용 가능합니다.
- Package updates: linux-cachyos 6.2.2, mesa 23.0.0, cachy-browser 110.0.1, plasma 5.27.2
- 부트로더 calamares 모듈을 완전히 재작업하고 개선했습니다.
- ISO가 이제 GPG 키로 서명됩니다.
- MHWD를 개선하고 업데이트했습니다.
- Calamares를 upstream과 동기화했습니다.

**버그 수정:**

- "replace partition" 옵션이 이제 파일시스템 선택을 제공합니다.
- slide 3의 오타를 수정했습니다.
- nouveau가 수정되어 이제 모듈을 제대로 로드합니다.
- MHWD: INTEL/ATI 및 Nouveau에 modesetting을 사용합니다.
- 부팅 시 문제를 일으켰던 live iso의 mkinitcpio에서 zfs hook을 제거했습니다.
- SourceForge의 미러에서 업데이트를 다운로드할 수 있습니다.

23.02
-----

**새 기능:**

- cachyos-community-v3 repo가 추가되었습니다.
- Budgie, Mate, LXDE 데스크톱 환경이 Netinstallation에 추가되었습니다.
- Bluetooth.service가 이제 기본으로 활성화됩니다.
- F2FS와 grub이 다시 활성화되어 동작합니다.
- Package Updates: linux-cachyos 6.1.10, mesa 22.3.4, zfs-utils 2.1.9, glibc 2.37, cachy-browser 109.0.1

**버그 수정:**

- Rate-mirrors가 미러 평가에 실패하면 순위가 없는 미러로 fallback합니다.
- cachyos-rate-mirrors의 fetch-mirrors-timeout이 더 길어졌습니다.
- mirrorlist 문제를 피하기 위해 hosts에 Github를 추가했습니다.
- BIOS용 부팅 엔트리가 syslinux에서 업데이트되었습니다.

23.01
-----

**기능:**

- Calamares Slides를 재작업하고 업데이트했습니다.
- UKUI Desktop Environment를 Netinstallation에 추가했습니다.
- Cinnamon Desktop Environment를 Netinstallation에 추가했습니다.
- Cmdline: CachyOS가 zram을 기본으로 제공하기 때문에 zswap은 이제 기본으로 비활성화됩니다.
- Calamares를 최신 커밋으로 업데이트했습니다.
- LLVM 15가 이제 기본으로 제공됩니다.
- Package Updates: linux-cachyos 6.1.7, mesa 22.3.3, Plasma 5.26.5, llvm 15.0.7, gcc 12.1.1, binutils 2.40, zfs-utils 2.1.8, nvidia 525.85.05
- CLI Installer를 업데이트했습니다.

**버그 수정:**

- remove-ucode shellprocess가 이제 offline installation에서도 실행됩니다.
- pamac이 netinstall에서 제거되었습니다.
- 순위가 매겨진 cachyos 미러가 이제 설치 대상에 올바르게 복사됩니다.
- power-profile-daemon이 더 이상 기본으로 활성화되지 않습니다.

22.12
-----

**기능:**

- ISO 부트로더에 새 GRUB 배경을 추가했습니다.
- UEFI 시스템에 memtest가 이제 포함됩니다.
- CachyOS-sddm-theme가 KDE Installation에 추가되었습니다.
- ISO 생성 시 자동 버전 스크립트를 추가했습니다.
- Calamares를 최신 커밋으로 업데이트했습니다.
- 이제 미러는 "cachyos-rate-mirros"로 순위화됩니다. 이는 CachyOS 미러와 Arch 미러의 순위를 매깁니다.
- Packages Update: 6.1.1 Kernel, mesa 22.3.1, plasma 5.26.4,...
- Kofuku Desktop Environment를 제거했습니다.
- 최신 AMD 카드 지원을 제공하기 위해 llvm 15가 포함된 extra ISO를 추가했습니다.

**버그 수정:**

- GNOME을 ISO로 사용할 때 Calamares를 수정했습니다.
- zfshostid가 이제 오프라인 및 온라인 설치에서 제대로 동작합니다.
- archlinux 기본값을 따르기 위해 initcpiocfg 모듈에 "kms" hook을 추가했습니다.
- 기타 ISO 수정 사항

22.11
-----

**기능:**

- Calamares와 그 구성은 하나의 패키지로 제공됩니다.
- netinstall의 패키지를 완전히 정리했습니다.
- 필요 없는 ucode를 자동으로 제거하는 모듈을 추가했습니다.
- 필요 RAM을 2.5GB로 줄였습니다.
- btrfs에 필요한 패키지는 이제 btrfs에만 설치됩니다.
- Calamares를 최신 커밋으로 업데이트했습니다.
- ISO Bootloader에 이제 배경이 있습니다.
- 일반 패키지 업그레이드(mesa, kernel 등)
- systemd-network를 networkmanager로 교체했습니다.

**버그 수정:**

- qemu-quest-agent.service를 ISO에서 제거했습니다.
- copytoram을 완전히 비활성화했습니다. 오프라인 설치를 깨뜨리기 때문입니다.
- mkinitcpio.conf를 업데이트했습니다.
- 기타 ISO 수정 사항

22.10
-----

**기능:**

- x86-64-v3 설치에 대해 Pacman이 이제 Architecture=auto를 사용합니다. pacman이 x86-64-v3를 자동 감지하도록 하는 패치를 추가했기 때문입니다.
- Pacman이 이제 패키지가 어느 repo에서 설치되었는지 표시합니다.
- Bootloader 선택이 EFI 존재 여부를 자동 감지하고, 없으면 grub을 기본으로 사용합니다.
- Swap 선택은 이제 기본으로 비활성화되었습니다. zram이 자동으로 동적으로 생성되기 때문입니다.
- Calamares를 최신 커밋으로 업데이트했습니다.
- 최소 RAM 요구 사항을 4GB로 설정했습니다.
- cachyos-grub-theme를 제거했습니다.

**버그 수정:**

- upstream 수정이 있을 때까지 SSD 및 HDD fstab 감지를 비활성화했습니다.
- 중복 BTRFS subvolume을 수정했습니다.
- ISO grub bootloader에 누락된 microcode를 추가했습니다.
- modeset을 설정하지 않는 fallback bootmode(nomodeset)를 추가했습니다.
- 기타 ISO 수정 사항

22.09
-----

**기능:**

- Calamares가 이제 최신 3.3 브랜치에 있습니다. 이는 Calamares에 버그 수정과 새 기능을 제공합니다.
- TUI-Installer가 이제 GUI ISO에 포함됩니다. "cachyos-installer"로 사용할 수 있습니다.
- Calamares가 이제 대상 파일시스템이 SSD인지 HDD인지 자동 감지하고 fstab 옵션을 그에 맞게 조정합니다.
- 최신 GPU(9xx부터)용 Nvidia는 nouveau 문제를 피하기 위해 자체 부팅 엔트리를 갖습니다.
- fstab 및 zfs 마운트 옵션을 업데이트했습니다.
- cachy-browser가 기본으로 설치되므로 FireFox는 더 이상 기본으로 설치되지 않습니다.

**버그 수정:**

- 설치 과정 문제를 피하기 위해 cachyos-gaming-meta를 netinstall 모듈에서 제거했습니다.
- netinstall 패키지를 업데이트하고 몇 가지 수정했습니다.
- OpenBox 설치를 수정했습니다.
- 일반적인 번역 수정

22.07
-----

**기능:**

- Boot-loader selection: 사용자는 이제 온라인 설치에서 grub과 systemd-boot 중 선택할 수 있습니다.
- 온라인 설치에서는 이제 항상 최신 Calamares가 설치되어 "air"에서 버그 수정이 가능해집니다.
- Calamares에는 이제 필요한 드라이버(무료 드라이버)를 자동 설치하는 mhwd 모듈이 있습니다.
- Calamares에 설치 중 새 그림 슬라이드가 있습니다.
- fstab 및 zfs 마운트 옵션을 업데이트했습니다.
- HiDPI 지원

**버그 수정:**

- Calamares의 locales 버그를 수정했습니다.
- 현재 동작하지 않기 때문에(calamares 문제) grub 부트로더에서 F2FS를 제거했습니다. systemd-boot에서는 계속 사용할 수 있습니다.
- Calamares가 이제 올바른 기본 파일시스템을 표시합니다.
- Gnome ISO를 수정했습니다.
- 오프라인 설치를 위해 live ISO에 누락된 패키지를 추가했습니다.
- btrfs swap luksencryption을 수정했습니다.
- 일반적인 번역 수정

22.06
-----

다음 알려진 버그가 수정되었습니다:

- 일반 CPU를 사용할 때 설치에 실패하던 문제
- KDE가 zfs 파티션을 자동으로 마운트하여 ISO 자동 로그인이 더 이상 동작하지 않던 문제

**개선 사항:**

- 서버의 방화벽을 수정했습니다. Cloudflare가 사용자를 "bots"로 차단하여 설치 중 오류가 발생하던 문제를 해결했습니다.
- Gnome, XFCE, OpenBox용 테마 지원을 추가했습니다.
- Wiki를 업데이트했습니다.

**_CachyOS - Kernel - Manager_**
또한 CachyOS-Kernel-Manager를 발표하게 되어 기쁩니다.
여기에서 repo의 커널을 설치할 수 있고, GUI로 자신만의 커널 빌드를 구성할 수도 있어 자신의 필요에 맞게 매우 쉽게 사용자 지정할 수 있습니다.

커널 컴파일 시 다음 옵션을 선택할 수 있습니다:

- Scheduler (BMQ, BORE, cacULE, cfs, PDS, TT)
- NUMA 비활성화 또는 활성화
- KBUILD CFLAGS (-O3 또는 -O2)
- performance governor를 기본으로 설정
- BBR2 활성화
- Tickrate (500Hz, 600Hz, 750Hz, 1000Hz)
- tickless (idle, perodic, full)
- MQ-Deadline I/O Scheduler 비활성화
- Kyber I/O Scheduler 비활성화
- MG-LRU 활성화 또는 비활성화
- DAMON 활성화 또는 비활성화
- Speculative page fault 활성화 또는 비활성화
- LRNG(Linux Random Number Generator) 활성화 또는 비활성화
- Kernel automatic Optimization 적용(CPU March를 자동 감지)
- Kernel Optimization selecting 적용(서로 다른 CPU-Marches 목록이 표시되며 번호로 선택 가능)
- debug 비활성화(커널 크기를 줄임)
- nf cone 활성화 또는 비활성화
- LTO 활성화(Full, Thin, No)

22.05
-----

CachyOS가 설립된 지 1년이 되었습니다. 거의 1년 동안 개발한 끝에, GUI Installer의 첫 Stable Release를 발표하게 되어 매우 자랑스럽습니다.
우리는 repo 관리, 커널 개발, 인프라, 테마 등 여러 분야를 조사하는 데 많은 시간을 들였고, 마침내 이를 모두 CachyOS GUI Installer에 담았습니다.
Installer에 작업하고 구현한 모든 기능은 사용자에게 완전히 사용자 지정 가능한 경험을 제공하기 위한 것입니다.

가장 흥미로운 변경 사항은 온라인 설치에 pacstrap을 사용하여 완전히 깨끗하게 설치된 환경을 제공하고, zfs 파일시스템에 대한 완전한 네이티브 지원을 제공한다는 점입니다.

Discord가 메시지 길이를 제한하므로 전체 공지는 여기에서 확인할 수 있습니다:

<https://discuss.cachyos.org/t/cachyos-gui-installer-changelog/>

다운로드는 여기에서 가능합니다:
<https://mirror.cachyos.org/ISO/kde/220522/>
<https://sourceforge.net/projects/cachyos-arch/>
