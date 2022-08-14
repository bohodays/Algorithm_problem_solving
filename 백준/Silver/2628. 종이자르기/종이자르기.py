# 2628 종이자르기

rowV, colV = map(int, input().split())
row = [0, rowV]
col = [0, colV]

N = int(input())

for _ in range(N):
    a, b = map(int, input().split())

    if a == 1:
        row.append(b)

    if a == 0:
        col.append(b)

row = sorted(row)
col = sorted(col)

tmp = []
for i in range(len(row)-1,0,-1):
    tmp.append(row[i] - row[i-1])
maxRow = max(tmp)

tmp = []
for i in range(len(col)-1,0,-1):
    tmp.append(col[i] - col[i-1])
maxCol = max(tmp)

print(maxRow * maxCol)

