# 2470 두 용액
import sys
from collections import deque
input = sys.stdin.readline

N = int(input())

mix = list(map(int, input().split()))
mix = deque(sorted(mix))

minV = float('inf')
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