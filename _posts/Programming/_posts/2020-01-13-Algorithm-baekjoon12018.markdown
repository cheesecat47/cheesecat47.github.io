---
layout: post
title: "[PS] Baekjoon #12018"
date: 2020-01-09 13:00:00 +0900
categories: Programming
tags: [Algorithm, Baekjoon, Greedy]
image: thumbnails/2020-01-13-Algorithm-baekjoon12018.png
---

# [Yonsei TOTO](https://www.acmicpc.net/problem/12018){:target="blank"}

## Conditions:

- Set 1 to 36 mileage to the subject you wish to take.
- After all, the number of students will be decided in descending order of mileage.
- Output is the maximum number of subjects available for the given mileage.
- If the mileage is same, you are the priority.

## Strategy:

- If the applicant is less than the number of available -> Only 1 mileage can be taken.
- Else, equal to or larger, use the same value as the mileage of last available person. -> Because of the priority.
- Make sure you have enough mileage before each application.

```python
import sys
n, m = map(int, sys.stdin.readline().split())

lectures = []
for i in range(n):
    temp = {}
    temp['p'], temp['l'] = map(int, sys.stdin.readline().split())
    temp['mi'] = list(map(int, sys.stdin.readline().split()))
    temp['sorted_mi'] = sorted(temp['mi'], reverse=True)[:temp['l']]
    temp['min_mi'] = temp['sorted_mi'][-1]
    lectures.append(temp)

cnt = 0
del_list = []
for temp in lectures:
    if temp['p'] < temp['l']:
        if m < 1:               # Check left mileage
            continue
        cnt += 1
        m -= 1
        del_list.append(lectures.index(temp))

for k in del_list[::-1]:
    lectures.pop(k)

sorted_lecture = sorted(lectures, key=lambda x: x['min_mi'])
for temp in sorted_lecture:
    if m < temp['min_mi']:
        continue
    cnt += 1
    m -= temp['min_mi']

print(cnt)
```
