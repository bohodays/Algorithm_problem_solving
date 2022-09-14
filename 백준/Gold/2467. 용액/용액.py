# 2467 용액
import sys
from collections import deque

N = int(input())

mix = deque(map(int, input().split()))

minV = sys.maxsize
case1, case2 = mix.popleft(), mix.pop()

while mix:
    sumV = case1 + case2

    if abs(sumV) < minV:
        ans1, ans2 = case1, case2
        minV = abs(sumV)

    if sumV > 0:
        case2 = mix.pop()
    elif sumV < 0:
        case1 = mix.popleft()
    else:
        break

if minV:
    if abs(case1 + case2) < minV:
        ans1, ans2 = case1, case2

print(ans1, ans2)