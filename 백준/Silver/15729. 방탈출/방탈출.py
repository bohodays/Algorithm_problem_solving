# 방탈출

N = int(input())
arr = list(map(int, input().split()))
ans = [0] * N

cnt = 0
for i in range(N):
    if arr[i] != ans[i]:
        arr[i] = 0
        cnt += 1
        for j in range(1,3):
            if i+j < N:
                if arr[i+j] == 1:
                    arr[i+j] = 0
                elif arr[i+j] == 0:
                    arr[i+j] = 1


print(cnt)