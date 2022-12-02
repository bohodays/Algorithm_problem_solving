N = int(input())

cnt = 1
num_honey = 0
ans = 1

while True:
    if N - ans > 0:
        num_honey += 6
        ans += num_honey
        cnt += 1
    else:
        break
print(cnt)
