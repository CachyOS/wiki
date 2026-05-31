---
title: 왜 CachyOS인가요?
description: CachyOS가 사용자에게 더 나은 선택일 수 있는 이유
tableOfContents:
  minHeadingLevel: 1
  maxHeadingLevel: 4
---

CachyOS는 안정적이고 효율적이며 사용자 친화적인 컴퓨팅 환경을 제공하도록 설계된 성능 중심 Arch Linux 배포판입니다. 롤링 릴리스 시스템의 강력함과 유연성을 그대로 제공하면서, 고급 최적화와 사용자 경험을 간소화하는 맞춤형 툴체인을 통해 신규 사용자와 숙련된 사용자 모두에게 향상된 사용 환경을 제공합니다.

## 성능과 최적화

### 최적화된 패키지와 저장소

CachyOS는 다양한 최신 CPU 아키텍처에 맞게 특별히 컴파일된 **[최적화된 패키지](https://packages.cachyos.org/)** 를 폭넓게 제공합니다. 여기에는 `x86-64-v3`, `x86-64-v4`, `Zen4+` 시스템 지원이 포함되어, 사용 중인 하드웨어의 성능을 최대한 활용하도록 소프트웨어가 빌드되며 상당한 성능 향상을 기대할 수 있습니다.

최적화된 저장소에 대해 더 자세히 알아보려면 **[최적화된 저장소](/features/optimized_repos)** 상세 가이드를 참고하세요.

### 성능과 안정성에 맞게 조정된 커스텀 커널

CachyOS 기본 커널 패치 세트는 데스크톱 반응성을 개선하기 위해 다양한 커널 매개변수를 조정합니다. 여기에 더해 CachyOS는 아직 메인라인에 포함되지 않았거나 커널의 안정 버전에 포함되지 않은 패치 세트를 선별해 적용합니다.

따라서 이러한 패치는 사용자에게 배포되기 전에 내부 테스트를 거쳐 안정성에 영향을 주지 않는지 확인합니다. CachyOS가 제공하는 전체 패치 목록은 [커널](/features/kernel) 문서를 참고하세요.

### 고급 CPU 스케줄러 지원

CachyOS는 최신 CPU 스케줄러 최적화가 적용된 커널을 제공하여, 높은 부하 상황에서도 부드럽고 반응성 좋은 데스크톱 환경을 보장합니다.

* **EEVDF(기본 Linux 커널 스케줄러):** 일반적인 처리량 측면에서 뛰어난 스케줄러이지만, CachyOS 커널에는 데스크톱 반응성을 개선하기 위한 맞춤형 **[EEVDF 조정값](https://github.com/CachyOS/linux/blob/6.15/cachy/kernel/sched/fair.c#L79-81)** 이 포함되어 있습니다.

* **[BORE](https://github.com/firelzrd/bore-scheduler)(Burst-Oriented Response Enhancer):** 최대한의 상호작용성과 반응성이 필요한 사용자를 위해, CachyOS 커널은 EEVDF를 확장하여 고부하 작업 중에도 더 매끄러운 경험을 제공하는 BORE 스케줄러 패치 세트를 지원합니다.
  * `linux-cachyos-bore` 커널 변형에서 사용할 수 있습니다.

CachyOS가 제공하는 커널과 sched-ext 프레임워크에 대한 자세한 내용은 **[커널](/features/kernel)** 및 **[sched-ext](/configuration/sched-ext)** 문서를 참고하세요.

## 사용자 친화적인 도구와 사용자 지정

### [자동 하드웨어 감지](/features/chwd/chwd/)

CachyOS에는 시스템에 필요한 드라이버와 패키지를 자동으로 식별하고 설치하는 맞춤형 하드웨어 감지 도구가 포함되어 있습니다. 이를 통해 설치 후 수동으로 드라이버를 찾아야 하는 번거로움이 줄어들어 시간과 노력을 절약할 수 있습니다.

### 사용자 지정 가능한 설치 과정

CachyOS 설치 관리자는 사용자가 자신의 필요에 맞게 데스크톱 환경, 패키지, 파일시스템, 부트 매니저, 커널 등을 선택해 시스템을 구성할 수 있도록 합니다.

- [데스크톱 환경](/installation/desktop_environments/)
- [부트 매니저](/installation/boot_managers/)
- [커널 종류](/features/kernel#variants)
- [파일시스템](/installation/filesystem)
- [설치 중 포함할 사용자 지정 패키지](https://github.com/CachyOS/cachyos-calamares/blob/cachyos-limine-qt6/src/modules/netinstall/netinstall.yaml)

### CachyOS 커스텀 애플리케이션

CachyOS는 시스템 관리를 단순화하고 사용 경험을 향상하기 위해 자체 애플리케이션 모음을 개발하고 유지 관리합니다.

현재 CachyOS가 개발하고 유지 관리하는 애플리케이션 목록은 다음과 같습니다.

-   **[CachyOS Hello](https://github.com/CachyOS/CachyOS-Welcome):** 조정 항목을 관리하고, 수정 사항을 적용하며, 패키지를 설치할 수 있는 환영 애플리케이션입니다.
-   **[CachyOS Package Installer](https://github.com/CachyOS/packageinstaller):** 애플리케이션을 쉽게 설치할 수 있는 그래픽 사용자 인터페이스(GUI)입니다.
-   **[CachyOS Kernel Manager](https://github.com/CachyOS/kernel-manager):** 저장소에서 커널을 쉽게 설치하고, 직접 커널을 구성하며, `sched-ext` 프레임워크를 관리할 수 있습니다.
-   **[cachyos-rate-mirrors](https://github.com/CachyOS/rate-mirrors):** `pacman`에서 최적의 다운로드 속도를 얻을 수 있도록 Arch 및 CachyOS 미러의 순위를 자동으로 매깁니다.
-   **[systemd-boot-manager](https://github.com/CachyOS/systemd-boot-manager):** `/etc/sdboot-manage.conf`를 통해 쉽게 설정할 수 있는 `systemd-boot`용 새 부트 항목을 자동으로 생성합니다.

## 친근하고 활발한 커뮤니티

CachyOS의 가장 큰 강점은 계속 성장하는 커뮤니티입니다. 커뮤니티 구성원들은 팁을 공유하고, 지원을 제공하며, 프로젝트의 성공에 기여하면서 서로 돕습니다. 여러분의 피드백은 CachyOS 경험을 지속적으로 개선하는 데 도움이 됩니다.

**[CachyOS Discord](https://discord.gg/cachyos-862292009423470592)** 및 **[CachyOS Forum](https://discuss.cachyos.org/)** 에 참여해 커뮤니티의 일원이 되어 보세요.
