---
layout: post
title: "도커 레지스트리 구축"
date: 2021-02-19 16:00:00 +0900
categories: Programming
tags: [Docker, Registry, RPi]
image: programming/210219_DockerRegistry/2021-02-19-DockerRegistry5.png
---

> 도커 레지스트리란, 도커 이미지를 저장하고 배포할 수 있는 무상태성, 고확장성 서버사이드 애플리케이션<sup>[5]</sup>입니다.  
>
> {:.lang-en}
>
> Docker Registry is a stateless, highly scalable server side application that stores and lets you distribute Docker images.  

&nbsp;

GitHub처럼 도커 이미지를 저장할 수 있는 Docker Hub라는 온라인 저장소가 있습니다. 기존에는 무료로 사용하던 유저도 제한 없이 이미지를 업로드 할 수 있었지만 2020년 11월 1일부터 정책이 변경되었습니다.  
새로 바뀐 정책에 따르면, free Docker account user의 이미지는 6개월간 메니페스트를 푸시하거나 풀하지 않은 inactivity 상태가 지속되면 삭제<sup>[3]</sup>됩니다.  

{:.lang-en}

Docker Hub is an online registry where you can Docker images, like GitHub. Previously, free Docker account users could upload images without restrictions, but the policy was changed from Nov. 1, 2020.  
According to the new policy, images of free Docker account users will be deleted after six months of inactivity.  

&nbsp;

이 정책은 최근에 바뀐 것이고, 원래 레지스트리를 사용하는 목적은  

- 이미지가 저장되는 위치를 제어하거나(웹이 아닌 조직 내 서버 등)  
- 이미지 배포 파이프라인을 완전히 소유하거나  
- 이미지 저장 및 배포를 사내 개발 워크플로우에 긴밀하게 통합하기 위해  

이렇게 도커 공식 문서<sup>[5]</sup>는 설명합니다.  

{:.lang-en}

This policy has changed recently, the original purpose of using the registry is  

{:.lang-en}

- tightly control where your images are being stored  
- fully own your images distribution pipeline  
- integrate image storage and distribution tightly into your in-house development workflow  

{:.lang-en}

these are how the official docker documentation explains.  

&nbsp;

그래서 개인 컴퓨터에 도커 레지스트리를 구축해보겠습니다. 저는 라즈베리 파이 3B+ 라즈비안 OS에서 진행했습니다.  

{:.lang-en}

So, let's build a docker registry on your own computer. I tried on Raspberry Pi 3B+ with Raspbian OS.  

&nbsp;

1. 레지스트리 이미지를 가져옵니다.  

    {:.lang-en}

    Pull the registry image.  

    ![Docker]({{"assets/img/programming/210219_DockerRegistry/2021-02-19-DockerRegistry1.png" | relative_url}})

2. `docker run` 명령어로 레지스트리 컨테이너를 만듭니다.  
    각 옵션은 `docker run --name [container name] -d(detach) --restart=[when the container restart] -p [external]:[internal] -v [local path]:[container path] [image name]:[tag]` 이런 의미입니다.  

    {:.lang-en}

    Run the registry container. Each options are explained above.  

    ![Docker]({{"assets/img/programming/210219_DockerRegistry/2021-02-19-DockerRegistry2.png" | relative_url}})

3. 레지스트리가 잘 동작하는지 테스트 해봅니다. 아무 이미지 하나를 가져온 다음, 태그를 생성합니다.  
    `docker tag [original image] [host addr]:[port]/[image name]:[tag]` 입니다.  

    {:.lang-en}

    Test the registry runs well. Pull any image and generate a tag.  

    ![Docker]({{"assets/img/programming/210219_DockerRegistry/2021-02-19-DockerRegistry3.png" | relative_url}})

4. 태그한 이미지를 내 레지스트리에 올리고 확인합니다.  

    {:.lang-en}

    Push the tagged image to the registry.  

    ![Docker]({{"assets/img/programming/210219_DockerRegistry/2021-02-19-DockerRegistry4.png" | relative_url}})

5. 이미지를 삭제한 후, 레지스트리에서 가져와봅니다.  

    {:.lang-en}

    Delete the tagged image and try to re-pull the tagged image from the registry.  

    ![Docker]({{"assets/img/programming/210219_DockerRegistry/2021-02-19-DockerRegistry5.png" | relative_url}})

## References

{:.references}

[1] D. Kim. "도커 허브, 미사용 이미지 보존 기간 6개월로 제한". www.44bits.io. <https://www.44bits.io/ko/post/news--docker-hub-image-retention-limit> (accessed Feb. 20, 2021).  
[2] "Resource Consumption Updates FAQ". www.docker.com. <https://www.docker.com/pricing/resource-consumption-updates> (accessed Feb. 20, 2021).  
[3] J. Morlhon. "Docker Hub Image Retention Policy Delayed, Subscription Updates". www.docker.com. <https://www.docker.com/blog/docker-hub-image-retention-policy-delayed-and-subscription-updates/> (accessed Feb. 20, 2021).  
[4] J. Morlhon. "Scaling Docker’s Business to Serve Millions More Developers: Storage". www.docker.com. <https://www.docker.com/blog/scaling-dockers-business-to-serve-millions-more-developers-storage/> (accessed Feb. 20, 2021).  
[5] "Docker Registry". docs.docker.com. <https://docs.docker.com/registry/> (accessed Feb. 20, 2021).  
[6] hihello. "Docker Local Registry 구축". hihellloitland.tistory.com. <https://hihellloitland.tistory.com/63> (accessed Feb. 20, 2021).  
[7] HiSEON. "Docker Registry 구축 방법". hiseon.me. <https://hiseon.me/linux/docker-registry/> (accessed Feb. 20, 2021).  
