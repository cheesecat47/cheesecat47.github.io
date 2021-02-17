---
layout: post
title: "[PS] Integer Triangle"
date: 2020-12-28 13:00:00 +0900
categories: Programming
tags: [Algorithm, Programmers, DP]
image: programming/201228_intTree/2020-12-28-programmers-integer-triangle.jpg
---

# [from Programmers](https://programmers.co.kr/learn/courses/30/lessons/43105){:target="blank"}

## Conditions

![triangle]({{"assets/img/programming/201228_intTree/2020-12-28-programmers-integer-triangle.jpg" | relative_url}}){:class="imgframe"}  

- 위와 같은 삼각형의 꼭대기에서 바닥까지 이어지는 경로 중, 거쳐간 숫자의 합이 가장 큰 경우를 찾음.  
- 아래 칸으로 이동할 때는 대각선으로 한 칸 오른쪽 또는 왼쪽으로만 이동 가능.  
- 삼각형의 높이는 1 이상 500 이하.  
- 삼각형을 이루는 숫자는 0 이상 9,999 이하 정수.  

{:.lang-en}

- Among the paths from the top of the triangle to the bottom, find the case where the sum of the numbers passed is the largest.  
- When moving to the lower cell, you can only move to the right or left by one diagonally.  
- The height of the triangle is 1...500.  
- Numbers forming the triangle are 1...9,999.  

## Design

- 이차원 배열 형태로 변경.  

{:.lang-en}

- Change the triangle to 2-dimensional array.  

$$
\begin{bmatrix}
-\infty & -\infty & -\infty & -\infty & -\infty & -\infty \\
-\infty & 7 & -\infty & -\infty & -\infty & -\infty \\
-\infty & 3 & 8 & -\infty & -\infty & -\infty \\
-\infty & 8 & 1 & 0 & -\infty & -\infty \\
-\infty & 2 & 7 & 4 & 4 & -\infty \\
-\infty & 4 & 5 & 2 & 6 & 5
\end{bmatrix}
$$  

- $$ m_{ij} $$까지 경로의 최대값은 $$ m_{i-1j-1} $$ 혹은 $$ m_{i-1j} $$ 중 큰 값 + 자기 값.  

{:.lang-en}

- The maximum value of the path to $$ m_{ij} $$ is itself value + the larger one between $$ m_{i-1j-1} $$ or $$ m_{i-1j} $$.  

## Recursive equation

$$
L[i,j]:\mbox{ Maximum length from } (1,1) \mbox{ to } (i,j)\\
L[i,j] =  
\begin{cases}
m_{ij}, & \mbox{if } i \mbox{ = 1 and } j \mbox{ = 1} \\
max(L[i-1][j-1], L[i-1][j]) + m_{ij}, & \mbox{otherwise}
\end{cases}
$$

## Implementation

![code]({{"assets/img/programming/201228_intTree/2020-12-28-programmers-integer-triangle-code.png" | relative_url}}){:class="imgframe"}  

## Remember
