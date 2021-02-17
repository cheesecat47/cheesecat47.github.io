---
layout: post
title: "[PS] 학교 가는 길"
date: 2020-12-28 20:00:00 +0900
categories: Programming
tags: [Algorithm, Programmers, DP]
image: programming/201228_school/2020-12-28-programmers-school.jpg
---

# [from Programmers](https://programmers.co.kr/learn/courses/30/lessons/42898){:target="blank"}

## Conditions

![triangle]({{"assets/img/programming/201228_school/2020-12-28-programmers-school.jpg" | relative_url}}){:class="imgframe"}  

- 집에서 학교까지 가는 길은 m x n 크기의 격자 모양으로 나타낼 수 있음.  
- m, n은 1 이상 100 이하인 자연수. m, n이 모두 1인 경우는 입력으로 주어지지 않음.  
- 집의 좌표는 (1, 1), 학교의 좌표는 (m, n).  
- 물에 잠긴 지역인 puddles의 좌표는 0개 이상 10개 이하.  
- 집과 학교가 물에 잠긴 경우는 입력으로 주어지지 않음.  
- 오른쪽과 아래쪽으로만 움직여 집에서 학교까지 갈 수 있는 최단경로의 개수를 1,000,000,007로 나눈 나머지를 반환.  

{:.lang-en}

- The road from home to school can be represented by a `m x n` grid.  
- `m` and `n` are natural numbers that are 1...100. The case that both `m` and `n` are 1 is not given as input.  
- The coordinates of the house are (1, 1), the coordinates of the school are (m, n).  
- The number of coordinates of puddles, which are submerged areas, are 0...10.  
- The case that the house or school is submerged is not given as an input.  
- You can only move right and down. Count the number of shortest paths from home to school and return its remainder divided by 1,000,000,007.  

## Design
  
$$
matrix =
\begin{bmatrix}
0 & 0 & 0 & 0 & 0 \\
0 & 1 & 1 & 1 & 1 \\
0 & 1 & -\infty & 1 & 2 \\
0 & 1 & 1 & 2 & 4 \\
\end{bmatrix}
$$  

- 해당 지점까지 올 수 있는 경로의 개수를 이차원 배열로 나타냄.  
- $$ m_{ij} $$가 puddle이면 그 지점은 갈 수 없음.  
- $$ m_{i-1j} $$이 puddle이면 $$ m_{ij} = m_{ij-1} $$, vice versa.  
- 둘 다 puddle이 아니라면 $$ m_{ij} = m_{i-1j} + m_{ij-1} $$.  

{:.lang-en}

- The number of paths that can be reached to that point is represented in a 2-dimensional array.  
- If $$ matrix_{ij} $$ is a puddle, the point cannot be reached.  
- If $$ matrix_{i-1j} $$ is a puddle, $$ matrix_{ij} = matrix_{ij-1} $$. Vice versa.  
- If neither is puddle, $$ matrix_{ij} = matrix_{i-1j} + matrix_{ij-1} $$.  

## Recursive equation

$$
C[i,j]:\mbox{ The number of paths from } (1,1) \mbox{ to } (m,n)\\
C[i,j] =  
\begin{cases}
1, & \mbox{if } m \mbox{ = 1 and } n \mbox{ = 1} \\
-\infty, & \mbox{if } matrix_{ij} \mbox{ is a puddle} \\
matrix_{i-1j}, & \mbox{if } matrix_{ij-1} \mbox{ is a puddle} \\
matrix_{ij-1}, & \mbox{if } matrix_{i-1j} \mbox{ is a puddle} \\
matrix_{i-1j} + matrix_{ij-1}, & \mbox{otherwise}
\end{cases}
$$

## Implementation

![code]({{"assets/img/programming/201228_school/2020-12-28-programmers-school-code.png" | relative_url}}){:class="imgframe"}  

## Remember
