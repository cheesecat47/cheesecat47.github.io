---
layout: post
title: "Teachable Machine by Google"
date: 2020-05-17 10:00:00 +0900
categories: Programming
tags: [TeachableMachine, AI, ML, Google]
image: thumbnails/2020-05-17-TeachableMachine.png
---

[Teachable Machine](https://teachablemachine.withgoogle.com/){:target="blank"} is a fast, easy way to create machine learning models for your sites, apps, and more.  

![img1]({{"assets/img/programming/200517_tm/img1.png" | relative_url}}){:class="imgframe"}

<!-- 메인 페이지입니다. 간단한 설명이 있습니다.  
`Get Started` 버튼을 눌러 시작합니다. -->

This is the main page. There is a brief introduction.  
Press `Get Started` button to start.  

![img2]({{"assets/img/programming/200517_tm/img2.png" | relative_url}}){:class="imgframe"}

<!-- 저는 이번에 사진을 분석하는 프로젝트를 예시로 만들어보겠습니다. 
`Image Project`를 선택합니다.-->

I will make an example project to analyse photos this time.  
Choose `Image Project` button.  

![img3]({{"assets/img/programming/200517_tm/img3.png" | relative_url}}){:class="imgframe"}

<!-- 분류의 이름을 정하고, 그 분류에 해당하는 사진을 추가합니다.
데이터는 많을 수록 좋습니다.
지금은 예시이므로 10개 씩만 추가해보겠습니다.
이 분류기의 목표는 레드벨벳 멤버 사진을 보고 누구인지 알아내는 것입니다. -->

Name the classifications and add the pictures that correspond to that classification.  
The more data, the better.  
This is an example, so I'll add 10 pictures each.  
The goal of this model is to find out who the Red Velvet members are by looking at their photos.  

![img4]({{"assets/img/programming/200517_tm/img4.png" | relative_url}}){:class="imgframe"}
![img5]({{"assets/img/programming/200517_tm/img5.png" | relative_url}}){:class="imgframe"}

<!-- 다음은 학습 과정을 설정합니다.
`Advanced`를 눌러 세부 사항을 설정할 수 있습니다.  
각 설정값에 대한 자세한 설명은 (?) 아이콘 위에 커서를 올리면 볼 수 있습니다.  
간단하게 설명하자면

- `Epochs`는 학습을 몇 번 반복할 지를 나타냅니다.
- `Batch Size`는 한 번 학습할 때 데이터의 크기를 나타냅니다.
- `Learning Rate`는 얼마나 빠르게 학습을 할 지를 나타냅니다. 일반적으로 0.001을 사용합니다.
설정을 다 했다면 `Train Model` 버튼을 누릅니다.-->

The following sets up the learning process:  
You can set the details by pressing `Advanced` button.  
For a detailed description of each setting, hover your cursor over the (?) icon.  

- `Epochs` indicates how many times to repeat the learning process.  
- `Batch Size`is the size of the data on a single epoch.  
- `Learning Rate` represents how fast the machine will learn. Typically, use 0.001.  

Press `Train Model` button to train with these settings.  

![img6]({{"assets/img/programming/200517_tm/img6.png" | relative_url}}){:class="imgframe"}  
![img7]({{"assets/img/programming/200517_tm/img7.png" | relative_url}}){:class="imgframe"}  

<!-- 학습할 때 사용하지 않은 다른 사진으로 테스트를 해서 제대로 동작하는지 확인합니다.  
이 두 경우에는 웬디와 아이린이라고 잘 맞춥니다.   -->

Test with another picture you didn't use when learning to see if it works properly.  
In these two cases, Wendy and Irene are well matched.  

![img8]({{"assets/img/programming/200517_tm/img8.png" | relative_url}}){:class="imgframe"}  

<!-- 학습이 잘 됐다면 최종 모델을 저장해서 다른 프로젝트에서 사용할 수도 있습니다. -->

If the model learned well, you can save the final model and use it for other projects.  

![img9]({{"assets/img/programming/200517_tm/img9.png" | relative_url}}){:class="imgframe"}  

<!-- 하지만, 조이 사진 중 하나를 아이린으로 잘못 판단하는 경우가 있었습니다.  
이 경우는 인풋 데이터로 사진을 10개밖에 안 넣었기 때문에 각 분류가 충분히 나눠지지 않은 탓으로 생각됩니다.  
실사용이 가능한 정확한 분류를 위해서는 학습 데이터가 충분히 많아야 할 것입니다. -->

However, there were cases where one of Joy's photos was misjudged as Irene.  
In this case, each category is not sufficiently divided because only 10 photos are included in the input data.  
For more accurate classification that is available for real use, you will need to have plenty of learning data.  
