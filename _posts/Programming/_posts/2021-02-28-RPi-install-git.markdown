---
layout: post
title: "라즈베리 파이 Git 최신 버전 설치"
date: 2021-02-28 13:30:00 +0900
categories: Programming
tags: [Git, OS, RPi]
image: programming/210228_RPi-install-git/2021-02-28-RPi-install-git-7.png
---

> 라즈베리 파이에 Git 최신 버전을 설치하는 방법입니다.  
>
> {:.lang-en}
>
> This is how to install the latest version of Git at Raspbian OS.  

&nbsp;

2021년 2월 28일 기준 Git 최신 버전은 2월 8일 나온 2.30.1<sup>[1]</sup>입니다. 하지만 라즈베리 파이에서 apt로 Git을 설치하면 여전히 2.20.1 버전입니다.  

{:.lang-en}

As of Feb. 28, 2021, the latest version of Git is 2.30.1, released on Feb. 8th. But when install Git with apt on RPi, it is still 2.20.1 version.  

![RPiGit]({{"assets/img/programming/210228_RPi-install-git/2021-02-28-RPi-install-git-1.png" | relative_url}})

&nbsp;

라즈비안 OS에 Git 최신 버전을 설치해 봅시다.  

{:.lang-en}

Let's install the latest Git on Raspbian OS.  

&nbsp;

1. 의존성 패키지를 먼저 설치합니다.  
    
    {:.lang-en}

    Install the dependencies first.

    ```bash
    $ sudo apt-get install dh-autoreconf libcurl4-gnutls-dev libexpat1-dev \
    gettext libz-dev libssl-dev
    ```

    ![RPiGit]({{"assets/img/programming/210228_RPi-install-git/2021-02-28-RPi-install-git-2.png" | relative_url}})  

    ```bash
    $ sudo apt-get install install-info
    ```

    ![RPiGit]({{"assets/img/programming/210228_RPi-install-git/2021-02-28-RPi-install-git-3.png" | relative_url}})  

1. 의존성 패키지 설치가 끝나면 [여기](https://github.com/git/git/releases)에서 원하는 버전의 `tar.gz` 압축 파일을 찾고, 마우스 우클릭을 해서 링크 주소를 복사합니다.  

    {:.lang-en}

    After installing all dependencies, Go [here](https://github.com/git/git/releases). Find the desired version of the `tar.gz` compressed file and right-click the mouse to copy the link path.  

    ![RPiGit]({{"assets/img/programming/210228_RPi-install-git/2021-02-28-RPi-install-git-4.png" | relative_url}})  

1. `wget` 명령어로 파일을 다운로드하고 압축을 풀고 폴더로 이동합니다.  

    {:.lang-en}

    Download the file using `wget` and decompress it, change the directory.  

    ![RPiGit]({{"assets/img/programming/210228_RPi-install-git/2021-02-28-RPi-install-git-5.png" | relative_url}})  

    ![RPiGit]({{"assets/img/programming/210228_RPi-install-git/2021-02-28-RPi-install-git-6.png" | relative_url}})  

1. 다음 명령어를 차례로 입력하여 설치 과정을 진행합니다. 시간이 오래 걸립니다.  

    {:.lang-en}

    Run these commands to install. It will take quite long time.  

    ```bash
    $ make configure
    $ ./configure --prefix=/usr
    $ make all
    $ sudo make install
    ```

    ![RPiGit]({{"assets/img/programming/210228_RPi-install-git/2021-02-28-RPi-install-git-7.png" | relative_url}})  

    ![RPiGit]({{"assets/img/programming/210228_RPi-install-git/2021-02-28-RPi-install-git-8.png" | relative_url}})  

    ![RPiGit]({{"assets/img/programming/210228_RPi-install-git/2021-02-28-RPi-install-git-9.png" | relative_url}})  

&nbsp;

2.30.1 버전 설치가 완료되었습니다.  

![RPiGit]({{"assets/img/programming/210228_RPi-install-git/2021-02-28-RPi-install-git-10.png" | relative_url}})  

## References

{:.references}

[1] "Git v2.30.1 Release Notes". raw.githubusercontent.com. <https://raw.githubusercontent.com/git/git/master/Documentation/RelNotes/2.30.1.txt> (accessed Feb. 28, 2021).  
[2] "1.5 Getting Started - Installing Git". git-scm.com. <https://git-scm.com/book/en/v2/Getting-Started-Installing-Git> (accessed Feb. 28, 2021).  
[3] "How to Install Git on Raspberry Pi". linuxize.com. <https://linuxize.com/post/how-to-install-git-on-raspberry-pi/> (accessed Feb. 28, 2021).  
[4] "Releases". github.com. <https://github.com/git/git/releases> (accessed Feb. 28, 2021).  