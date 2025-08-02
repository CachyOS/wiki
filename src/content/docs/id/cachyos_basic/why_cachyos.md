---
title: Mengapa CachyOS?
description: Mengapa CachyOS mungkin lebih baik untuk Anda
---

CachyOS menawarkan pengalaman Arch Linux yang lengkap dan apik dengan pemasang yang ramah pengguna, desktop yang telah dikonfigurasi sebelumnya, dan optimisasi performa tanpa mengorbankan pengalaman pengguna dan keamanan sistem.

Di bawah ini adalah beberapa fitur utama yang disediakan CachyOS untuk memastikan pengalaman desktop yang lebih baik.

## Paket dan Repositori yang Dioptimalkan

CachyOS menawarkan banyak pilihan paket yang dioptimalkan untuk berbagai konfigurasi perangkat keras, termasuk sistem `x86-64-v3`, `x86-64-v4`, dan `Zen4+` untuk meningkatkan performa secara keseluruhan.

Untuk informasi lebih lanjut, lihat [**Repositori yang Dioptimalkan.**](/id/features/optimized_repos)

## Kernel Kustom yang Disetel untuk Performa dan Stabilitas

Selain kumpulan *patch* dasar kernel CachyOS yang menyetel berbagai parameter kernel untuk meningkatkan responsivitas desktop, CachyOS memilih kumpulan *patch* yang belum masuk ke *mainline* atau tidak disertakan dalam revisi stabil kernel.

Oleh karena itu, *patch* ini menjalani pengujian internal sebelum dirilis kepada pengguna untuk memastikan stabilitas tidak terpengaruh. Untuk daftar lengkap *patch* yang disediakan CachyOS, lihat [Kernel](/id/features/kernel).

## Dukungan Penjadwal CPU Kustom

Secara bawaan, EEVDF disetel untuk membagi waktu CPU yang tersedia secara adil di antara semua tugas dan sebagian besar ditujukan untuk beban kerja yang berorientasi pada *throughput*. Kernel CachyOS [**mengonfigurasi beberapa *tunable* EEVDF**](https://github.com/CachyOS/linux/blob/6.15/cachy/kernel/sched/fair.c#L79-81) untuk memprioritaskan interaktivitas desktop.

Namun, EEVDF secara desain tidak dimaksudkan untuk digunakan untuk interaktivitas desktop. Dengan pemikiran tersebut, CachyOS menyertakan kernel yang di-*patch* dengan penjadwal
[BORE (Burst-Oriented Response Enhancer)](https://github.com/firelzrd/bore-scheduler) yang menyempurnakan EEVDF untuk meningkatkan interaktivitas di bawah beban kerja yang berat.

Pada versi 6.12, kernel Linux memperkenalkan kemampuan untuk melakukan *hotplug* pada penjadwal BPF dan mengganti EEVDF dengan penjadwal yang berbeda.

Untuk informasi lebih lanjut tentang kernel yang ditawarkan oleh CachyOS dan penjadwal sched-ext, lihat [Kernel](/id/features/kernel) dan [sched-ext](/id/configuration/sched-ext).

## Deteksi Perangkat Keras

CachyOS menyertakan alat deteksi perangkat kerasnya sendiri, yang secara otomatis mengidentifikasi dan memasang driver serta paket yang diperlukan untuk setiap sistem, menyederhanakan proses pasca-instalasi bagi pengguna.

## Proses Instalasi yang Dapat Disesuaikan

Pemasang CachyOS memungkinkan pengguna untuk menyesuaikan sistem mereka dengan memilih lingkungan desktop, paket, sistem berkas, manajer boot, kernel, dan lainnya agar sesuai dengan kebutuhan mereka:
- [**Lingkungan Desktop**](/id/installation/desktop_environments/)
- [**Manajer Boot**](/id/installation/boot_managers/)
- [**Varian Kernel**](/id/features/kernel#variants)
- [**Sistem Berkas**](/id/installation/filesystem)
- [**Paket Kustom yang akan disertakan selama instalasi**](https://github.com/CachyOS/cachyos-calamares/blob/cachyos-limine-qt6/src/modules/netinstall/netinstall.yaml)

## Aplikasi CachyOS

Secara bawaan, CachyOS menyediakan rangkaian aplikasinya sendiri, seperti CachyOS Hello dan CachyOS Package Installer.

Daftar aplikasi yang saat ini dikembangkan dan dikelola oleh CachyOS:

- [**CachyOS Kernel Manager**](https://github.com/CachyOS/kernel-manager): Memasang kernel dari repositori dengan mudah atau mengonfigurasi kernel Anda sendiri dan menyertakan *patch* Anda sendiri, bahkan mengelola kerangka kerja sched-ext melalui [**scx_loader**](<https://github.com/sched-ext/scx/tree/main/rust/scx_loader>).
- [**CachyOS Hello**](https://github.com/CachyOS/CachyOS-Welcome): Aplikasi untuk mengontrol *tweak*, menerapkan perbaikan, instalasi paket, dan informasi lebih lanjut tentang CachyOS.
- [**CachyOS Package Installer**](https://github.com/CachyOS/packageinstaller): GUI untuk kemudahan instalasi aplikasi.
- [**cachyos-rate-mirrors**](https://github.com/CachyOS/rate-mirrors): Secara otomatis memeringkat *mirror* Arch dan CachyOS untuk kecepatan unduh yang optimal dengan pacman.
- [**systemd-boot-manager**](https://github.com/CachyOS/systemd-boot-manager): Secara otomatis menghasilkan entri baru untuk systemd-boot-manager dan dapat dengan mudah dikonfigurasi di `/etc/sdboot-manage.conf`.

## Komunitas yang Ramah dan Aktif

Kekuatan terbesar CachyOS adalah komunitasnya yang terus berkembang. Tanpa dukungan mereka, CachyOS tidak akan mencapai kesuksesannya saat ini. Anggota komunitas saling membantu dengan berbagi kiat dan trik untuk meningkatkan pengalaman Linux.

Bergabunglah dengan kami di [**Discord CachyOS**](https://discord.com/invite/cachyos-862292009423470592) dan [**Forum CachyOS**](https://discuss.cachyos.org/).
