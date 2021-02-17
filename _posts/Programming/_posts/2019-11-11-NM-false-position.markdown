---
layout: post
title: "[2019-2 NM] False-position method implemented in C"
date: 2019-11-11 23:40:00 +0900
categories: Programming
tags: [KNU, CSE, NM]
image: thumbnails/2019-11-11-NM-false-position.png
---

False-Position Method is one of Bisection Methods.  
If a real root is bounded by given two starting points, $$ xl $$ and $$ xu $$ of $$ f(x) = 0 $$, then we can approximate the solution by doing a linear interpolation between the points $$ [xl, f(xl)] $$ and $$ [xu, f(xu)] $$ to find the $$ xr $$ value.  
Here is the source code of implementation of False-Position Method in C language.  

```c
#define thres 0.001
typedef struct {
    int len;
    float *coef;
    int *exp;
} poly;
```

Define a structure for polynomial.  
`len` represents the number of non-zero terms.  
`coef` represents an array of coefficients.  
`exp` represents an array of exponents.  

For example, if input is `4 1 4 -2 3 3 1 -5 0`, it means $$ f(x) = x^4 - 2x^3 + 3x -5 $$.  
And struct `poly p` has these data: `len = 4`, `*coef = [1, -2, 3, -5]`, `*exp = [4, 3, 1, 0]`  

```c
int main(void) {
    ...

    //read input polynomial from the file
    fopen_s(&fi, "in.txt", "r");
    fscanf_s(fi, "%f %f", &xl, &xu);

    fscanf_s(fi, "%d", &n);
    p.coef = malloc(n * sizeof(float));
    p.exp = malloc(n * sizeof(int));
    for (i = 0; i < n; i++) {
        fscanf_s(fi, "%f %d", &p.coef[i], &p.exp[i]);
        p.len += 1;
    }

    false_position(xl, xu, p);

    free(p.coef);
    free(p.exp);
    fclose(fi);
    return 0;
}
```

The main function has a simple structure.  
The procedure works in the function `false_position()`.  

```c
float calc_poly(poly p, float x) {
    //return polynomial calculated value
    float fx = 0.0;
    int i;

    for (i = 0; i < p.len; i++) {
        fx += p.coef[i] * powf(x, (float)p.exp[i]);
    }
    return fx;
}
```

This function computes the equation.  
For example, when `x` = 1, the iteration processes $$ 1 * (1)^4 + (-2)(1)^3 + 3 * (1)^1 + (-5) $$ and the return value `fx` will be -3.  

```c
int false_position(float xl, float xu, poly p) {
...

    do {
        count++;
        if (count > 1000) {
            // prevent infinite loop
            printf("False position: Failed\n");
            return -1;
        }

        //procedure 1
        fl = calc_poly(p, xl);
        fu = calc_poly(p, xu);
        if (fl * fu > 0) {
            // when signs are same
            printf("False position: Failed\n");
            return -1;
        }

        //procedure2
        xr = ((xl * fu) - (xu * fl)) / (fu - fl);
        fr = calc_poly(p, xr);

        //procedure3
        if (fr < 0) {
            xl = xr;
        }
        else if (fr > 0) {
            xu = xr;
        }
        else if (fr == 0) {
            //when find the root
            break;
        }

        //procedure4
        if (count == 1) {
            xr_prev = xr;
        }
        else if (count > 1) {
            ea = (float)fabs((double)100 * ((xr - xr_prev) / xr));
            xr_prev = xr;
        }
    } while (ea >= thres);

    printf("False position: %f (%d iterations)\n", xr, count);
    return 0;

}
```

1. Procedure 1 checks if there's a root in the given range.  
   The root means a point where polynomial and x-axis meets, in other words, $$ f(x) = 0 $$.  
   If $$ f(x_l) * f(x_u) > 0 $$, it means the signs are same(both positive or both negative), therefore no point of contact between `p` and x-axis.

1. Procedure 2 calculates `xr`, assumed root in this iteration, and the value $$ f(x_r) $$.

1. Procedure 3 determines the range for next iteration.
   This procedure reduces the range of possible root in the equation and increases the probability of finding the root.

1. Procedure 4 calculates the error. When error is less then the threshold, the iteration terminates.
