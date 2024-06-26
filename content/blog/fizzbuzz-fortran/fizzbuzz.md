---
layout: post
title:  "Fizz Buzz in Fortran"
date:   2024-05-12 17:51:00 -0400
categories: programming
---

Last week I did FizzBuzz in Cobol.  Continuing my old programming language series, here is Fizzbuzz in Fortran.

```
program fizzbuzz
    ! Fuzzbuzz 1 to 99, if divisible by 3 print fizz, if 5 print buzz
    integer :: count
    integer :: fizz
    integer :: buzz

    do count = 1, 99
        write(*,fmt="(i0, 1x)", advance="no") count
        fizz = mod(count,3)
        buzz = mod(count,5)
        if (fizz == 0) then
            write(*,fmt="(4a)", advance="no") "fizz"
        end if
        if (buzz == 0) then
            write(*,fmt="(4a)", advance="no") "buzz"
        end if
        write(*,*)
    end do

end program fizzbuzz
```

Fortran isn't as foreign to me as Cobol was, and it is a bit easier in my opinion.

The hardest part is figuring out how to print the output.  The 'print' statement didn't do what I want, so I had to google how to print output without a newline and it turns out that I had to use the 'write' statement.

Output looks like this:

```
❯ gfortran -o fizzbuzz fizzbuzz.f90
❯ ./fizzbuzz
1
2
3 fizz
4
5 buzz
6 fizz
7
8
9 fizz
10 buzz
11
12 fizz
13
14
15 fizzbuzz
16
17
18 fizz
19
20 buzz
21 fizz
22
23
24 fizz
25 buzz
26
27 fizz
28
29
30 fizzbuzz
31
32
33 fizz
34
35 buzz
36 fizz
37
38
39 fizz
40 buzz
41
42 fizz
43
44
45 fizzbuzz
46
47
48 fizz
49
50 buzz
51 fizz
52
53
54 fizz
55 buzz
56
57 fizz
58
59
60 fizzbuzz
61
62
63 fizz
64
65 buzz
66 fizz
67
68
69 fizz
70 buzz
71
72 fizz
73
74
75 fizzbuzz
76
77
78 fizz
79
80 buzz
81 fizz
82
83
84 fizz
85 buzz
86
87 fizz
88
89
90 fizzbuzz
91
92
93 fizz
94
95 buzz
96 fizz
97
98
99 fizz
```