# 1952 수영장
# 2022-09-23

def DFS(total, idx):
    global minV
    if idx >= 12:
        if minV > total:
            minV = total
        return
    if plan[idx] * cost[0] < cost[1]:
        DFS(total + plan[idx] * cost[0], idx + 1)
    else:
        DFS(total + cost[1], idx + 1)
    if plan[idx]:
        DFS(total + cost[2], idx + 3)


T = int(input())

for tc in range(1, T+1):
    cost = list(map(int, input().split()))
    plan = list(map(int, input().split()))
    minV = cost[3]
    DFS(0,0)
    print('#{} {}'.format(tc, minV))