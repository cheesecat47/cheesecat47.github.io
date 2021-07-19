---
layout: post
title: "PostgreSQL 도커 컴포즈로 구성하기"
date: 2021-03-07 09:30:00 +0900
categories: Programming
tags: [Docker, Docker-Compose, PostgreSQL]
image: programming/210307_PostgreSQL-Docker/2021-03-07-PostgreSQL-Docker-1.png
---

도커 컴포즈를 이용해 PostgreSQL 서버를 구성해봅니다.  

{:.lang-en}

Let's build the PostgreSQL server using Docker Compose.  

&nbsp;

1. 우선 `docker-compose.yml` 파일을 생성합니다.  

    {:.lang-en}

    At first, create a `docker-compose.yml` file.  

    ![PostgreSQL]({{"assets/img/programming/210307_PostgreSQL-Docker/2021-03-07-PostgreSQL-Docker-1.png" | relative_url}})  

    - #5: postgres 도커 공식 이미지<sup>[1]</sup>를 사용합니다. `:tag`로 버전을 지정하지 않으면 `latest` 버전 이미지를 가져옵니다.  
    - #7: 포트를 매핑합니다. `[외부 포트]:[컨테이너 내부 포트]` 형식입니다. 만약 외부와 내부 포트를 같게 하고싶다면 `[포트번호]`를 사용합니다.  
    - #9~11: 환경 변수를 설정합니다.  
    - #13: 컨테이너를 초기화할 때 사용합니다. `[외부 경로]:[내부 경로]` 형식입니다.  

    {:.lang-en}

    - #5: Use the official postgres image. It will use the `latest` version if you don't specify version with `:tag`.  
    - #7: Mapping the ports: `[external port]:[container internal port]`. Use only `[port]` if the external and internal port are same.  
    - #9~11: Set the environment variables.  
    - #13: This will be using for initialize the container: `[external path]:[internal path]`.  

    &nbsp;

1. 컴포즈 파일의 #13 줄을 조금 더 자세히 봅시다.  
    도커는 컨테이너가 **최초 실행될 때 한 번**, `/docker-entrypoint-initdb.d/` 폴더 안에 있는 `*.sql`, `*.sql.gz`, `*.sh` 파일을 실행합니다. 그러므로 초기화 코드를 만들고, 그 파일 또는 폴더를 컨테이너 내부의 `/docker-entrypoint-initdb.d/` 폴더에 넣어서 원하는 대로 초기화를 할 수 있습니다.  

    {:.lang-en}

    Let's take a closer look at line #13 of the compose file.  
    Docker runs the `*.sql`, `*.sql.gz` and `*.sh` files in the `/docker-entrypoint-initdb.d/` folder **once** when the container is launched for the first time. Therefore, you can create initialization code, put that file or folder in the `/docker-entrypoint-initdb.d/` folder inside the container to initialize it as you wish.  

    &nbsp;

1. `init.sql` 파일을 이렇게 만들어 봤습니다. 이제 postgres 컨테이너를 처음 만들 때 이 sql이 실행될 것입니다. 그러면 테이블이 생성되고, 홍길동이라는 이름을 가진 행이 추가될 것입니다.  
    그런데 제대로 생성되었는지 어떻게 확인할까요?  

    {:.lang-en}

    I created the `init.sql` file like this. Now this sql will be executed the first time you create the postgres container. This will create a table and add a row whose name is 'Hong, Gil-Dong'.  
    But how can you check it was created properly?  

    ![PostgreSQL]({{"assets/img/programming/210307_PostgreSQL-Docker/2021-03-07-PostgreSQL-Docker-2.png" | relative_url}})  

    &nbsp;

1. `pgAdmin`이라는 PostgreSQL 전용 오픈 소스 관리 툴이 있습니다. 이 툴도 역시 도커를 사용해 구축할 수 있습니다. 도큐먼트<sup>[3]</sup>를 보고 따라해 봅시다. `docker-compose.yml` 파일의 #16~24 줄입니다.  

    {:.lang-en}

    There is an open source management tool for PostgreSQL called `pgAdmin`. This tool can also be built using Docker. Let's follow the document.  

    - #17: 이미지는 `dpage/pgadmin4`<sup>[2]</sup>를 사용합니다.  
    - #19: pgadmin은 기본적으로 80번 포트를 사용하는데, 편의상 외부 포트를 바꿔서 사용하기 위해 포트 매핑을 해줍니다.  
    - #21, 22: pgadmin에서 사용 가능한 환경 변수 중 이메일과 비밀번호는 필수 항목입니다.  

    {:.lang-en}

    - #17: Use `dpage/pgadmin4` image.  
    - #19: pgadmin uses port 80 by default. For convenience, change the external port.  
    - #21, 22: Among the env variables available in pgadmin, email and password are required.  

    &nbsp;

1. `docker-compose up -d --build` 명령어로 실행한 후, <http://localhost:54330>으로 접속해봅니다. 환경 변수로 설정한 이메일과 비밀번호를 입력하면 됩니다.  

    {:.lang-en}

    Execute the `docker-compose up -d --build` command and connect to <http://localhost:54330>. Enter the email and password set as env variables.  

    ![PostgreSQL]({{"assets/img/programming/210307_PostgreSQL-Docker/2021-03-07-PostgreSQL-Docker-3.png" | relative_url}})  

    1. 새 서버 추가를 선택합니다.  

        {:.lang-en}

        Select 'Add New Server'.  

        ![PostgreSQL]({{"assets/img/programming/210307_PostgreSQL-Docker/2021-03-07-PostgreSQL-Docker-4.png" | relative_url}})  
        &nbsp;

    1. 서버 이름을 입력합니다. pgadmin에 보일 이름이므로 원하는 이름 입력하면 됩니다.  

        {:.lang-en}

        Enter the server name. It's for pgadmin, so anything can be the name.  

        ![PostgreSQL]({{"assets/img/programming/210307_PostgreSQL-Docker/2021-03-07-PostgreSQL-Docker-5.png" | relative_url}})  
        &nbsp;

    1. 연결 설정에는 `docker-compose.yml` 파일에 입력했던 내용을 사용합니다.  

        {:.lang-en}

        In 'Connection', the variables of `docker-compose.yml` will be using.  

        - 호스트 이름에는 #4 줄에 입력한 서비스 이름을 입력합니다.  
        - 포트 번호는 #7 줄의 내부 포트를 입력합니다.  
        - 접속 데이터 베이스는 #11, 사용자 이름은 #9, 비밀번호는 #10을 입력합니다.  
        - 입력 후 아래 '저장' 버튼을 누르면 됩니다.  

        {:.lang-en}

        - Service name at line #4 for the 'Host name'.  
        - Internal port at line #7 for the 'Port'.  
        - #11 for 'Maintenance database', #9 for 'Username', #10 for 'Password'.  
        - Then, save it.  
        &nbsp;

        ![PostgreSQL]({{"assets/img/programming/210307_PostgreSQL-Docker/2021-03-07-PostgreSQL-Docker-6.png" | relative_url}})  
        &nbsp;

    1. 연결 된 후, 왼쪽 탐색기에서 `Servers > [서버 이름] > 데이터베이스 > [데이터베이스 이름] > 스키마 > public > 테이블 > [테이블 이름]`을 선택합니다. (이 구조는 조금 다를 수 있습니다.)  
        선택한 후 '탐색기'와 '대시보드' 사이의 네 아이콘 중 왼쪽에서 두 번째 'View Data' 버튼을 누르면 해당 테이블의 내용이 보입니다. '홍길동'도 잘 들어가 있는 것을 볼 수 있습니다.  

        {:.lang-en}

        After connection, select `Servers > [Server Name] > Databases > [DB Name] > Schemas > public > Tables > [Table Name]` in the left explorer.  
        Then, click the 'View Data' button, the second of the four icons between 'Explorer' and 'Dashboard'. You can see the contents of the table.  

        ![PostgreSQL]({{"assets/img/programming/210307_PostgreSQL-Docker/2021-03-07-PostgreSQL-Docker-7.png" | relative_url}})  
        &nbsp;

소스코드는 [여기](https://github.com/cheesecat47/postgres_docker)에서 확인할 수 있습니다.  

{:.lang-en}

You can use the source codes [Here](https://github.com/cheesecat47/postgres_docker).  

## References

{:.references}

[1] "postgres". hub.docker.com. <https://hub.docker.com/_/postgres> (accessed Mar. 7, 2021).  
[2] "dpage/pgadmin4". hub.docker.com. <https://hub.docker.com/r/dpage/pgadmin4/> (accessed Mar. 7, 2021).  
[3] "Container Deployment". www.pgadmin.org. <https://www.pgadmin.org/docs/pgadmin4/5.0/container_deployment.html> (accessed Mar. 7, 2021).  
[4] "Compose file version 3 reference". docs.docker.com. <https://docs.docker.com/compose/compose-file/compose-file-v3/> (accessed Mar. 7, 2021).  
