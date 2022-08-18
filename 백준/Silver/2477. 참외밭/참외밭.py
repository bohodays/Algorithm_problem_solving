# 2477 참외밭

import collections

K = int(input())

m = collections.deque()
for _ in range(6):
    m.append(list(map(int, input().split())))

while True:
    big = []
    small = []
    for i in range(len(m)-2):
        if m[i][0] == m[i+2][0]:
            big.append(m[i][1] + m[i+2][1])
            small.append(m[i+1][1])
    if len(big) == 2 and len(small) == 2:
        break
    else:
        m.rotate(1)

print(K * (big[0] * big[1] - small[0] * small[1]))