# 2512 예산

N = int(input())
arr = list(map(int, input().split()))
arr.sort()
M = int(input())

start, end = 0, arr[-1]

ans = []
minV = float('inf')
while start <= end:
    mid = (start + end) // 2
    total = 0
    for i in range(len(arr)):
        if arr[i] <= mid:
            total += arr[i]
        elif arr[i] > mid:
            total += mid

    if total <= M:
        ans.append(mid)
        start = mid + 1
    else:
        end = mid - 1

print(max(ans))