N, K = map(int, input().split())

# arr = [[6, 13], [4, 8], [3, 6], [5, 12]]
arr = []
for _ in range(N):
    arr.append(list(map(int, input().split())))

table = [0] * (K+1)

for w, v in arr:
    if w > K:
        continue
    for j in range(K, 0, -1):
        if j + w <= K and table[j] != 0:
            table[j+w] = max(table[j+w], table[j] + v)
    table[w] = max(table[w], v)
print(max(table))