# 2564 경비원

r, c = map(int, input().split())

N = int(input())

shop = [0] * (2 * (r+c))

# 동근이 위치 까지 루프를 돌린다.
# 상점의 위치는 1로 표시하고, 동근이 위치는 -1로 표시한다.
for i in range(N+1):
    a, b = map(int, input().split())
    if a == 1:
        if i == N:
            shop[b-1] = -1
        else:
            shop[b-1] = 1
    elif a == 2:
        if i == N:
            shop[r+c+(r-b)-1] = -1
        else:    
            shop[r+c+(r-b)-1] = 1
    elif a == 3:
        if i == N:
            shop[r+c+r+(c-b)-1] = -1
        else:
            shop[r+c+r+(c-b)-1] = 1
    else:
        if i == N:
            shop[r+b-1] = -1
        else:
            shop[r+b-1] = 1

# 동근이의 위치 인덱스 찾기
ans = []
temp1 = shop.index(-1)
for i in range(N):
    temp2 = shop.index(1)
    distance = abs(temp1 - temp2)
    ans.append(min(distance, (2*r+2*c) - distance))
    shop[temp2] = 0
print(sum(ans))
