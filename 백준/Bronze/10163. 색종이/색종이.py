# 색종이

import sys

# 전체 공간
c = [[0] * 1001 for _ in range(1001)]

T = int(input())

for tc in range(1, T+1):
    # 행, 열, 너비, 높이
    x, y, w, h = map(int, sys.stdin.readline().split())

    # for i in range(y, y+h):
    #     for j in range(x, x+w):
    #         c[i][j] = tc

    for i in range(y, y+h):
        c[i][x:x+w] = [tc] * w
    
for i in range(1, T+1):
    cnt = 0
    for j in c:
        cnt += j.count(i)
    print(cnt)