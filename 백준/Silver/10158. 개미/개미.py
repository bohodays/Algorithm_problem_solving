# 10158 개미

import sys

w, h = map(int,sys.stdin.readline().split())
w_list = list(range(w+1))
w_list.extend(list(range(w-1,0,-1)))
h_list = list(range(h+1))
h_list.extend(list(range(h-1,0,-1)))

p, q = map(int, sys.stdin.readline().split())
t = int(sys.stdin.readline())

x = w_list[(p + t) % (w * 2)]
y = h_list[(q + t) % (h * 2)]
print(x, y)