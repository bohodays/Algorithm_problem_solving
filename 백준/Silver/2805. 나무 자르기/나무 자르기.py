# 2805 나무 자르기

import sys
input = sys.stdin.readline

N, M = map(int, input().split())
heights = list(map(int,input().split()))
heights.sort()
start, end = 1, heights[-1]
while start <= end:
    mid = (start + end) // 2
    total = 0
    for i in range(len(heights)):
        if heights[i] > mid:
            total += heights[i] - mid


    if total >= M:
        start = mid + 1
    else:
        end = mid - 1
    # print(start, end, mid, total)

# 중간값이 아니라 end값을 뽑아야 한다!!!
print(end)    

