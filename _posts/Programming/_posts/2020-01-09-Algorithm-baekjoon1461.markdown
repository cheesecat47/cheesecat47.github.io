---
layout: post
title: "[PS] Baekjoon #1461"
date: 2020-01-09 13:00:00 +0900
categories: Programming
tags: [Algorithm, Baekjoon, Greedy]
image: thumbnails/2020-01-09-Algorithm-baekjoon1461.png
---

# [Library](https://www.acmicpc.net/problem/1461){:target="blank"}

## Conditions:

- Current position is 0, books are also at 0.
- You can carry M books at a time and move a total of N books.
- There's no need to return to 0 for the last move.

## Strategy:

- Split positive and negative ways.
- Since there's a requirement to return to zero,
  the sum of travle distances is minimal when rounding as little as possible.
- If the number of books in one direction is divided by M,
  then the sum of the distance traveled should be minimal.
- If it does not divided, move r books first and move M books is the smallest.
- The last move does not need to return to 0.

```python
po = [i for i in b if i > 0]
ne = sorted(-i for i in b if i < 0)
# Sort in positive ascending order for ease of calculation.
```

```python
def g(li, m):
    if len(li) == 0: # Case if there's no books in the side.
        return 0
    o = len(li) % m

    if o == 0:
        # Can divide by M
        return sum(li[m - 1::m]) * 2
    else:
        return sum(li[o - 1::m]) * 2
```

```python
    # Last move does not need to return to zero.
    # Substract more far distance to make the result smaller.
    print(g(po, m) + g(ne, m) - max(abs(b[0]), abs(b[-1])))
```
