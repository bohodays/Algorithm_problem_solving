N = list(map(int, input().split()))

chess = [1, 1, 2, 2, 2, 8]

ans = []

for i in range(len(N)):
    ans.append(chess[i] - N[i])

print(*ans)