# 3055 탈출

from collections import deque


R, C = map(int, input().split())

water = []
start = []
graph = []
for i in range(R):
    tmp = list(input())
    if '*' in tmp:
        j = tmp.index('*')
        water.append((i, j, 0))
    if 'S' in tmp:
        j = tmp.index('S')
        start.append((i, j, 1))
    graph.append(tmp)

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

check = [[0] * C for _ in range(R)]

queue = deque()
queue.append((start[0][0], start[0][1], start[0][2]))
for i in water:
    queue.append(i)

ans = []
ans.append('KAKTUS')
flag = True
while queue and flag:
    x, y, key = queue.popleft()

    if key == 1:
        if graph[x][y] != '*':
            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]
                if 0 <= nx < R and 0 <= ny < C:
                    if graph[nx][ny] == '.':
                        graph[nx][ny] = 'S'
                        check[nx][ny] = check[x][y] + 1
                        queue.append((nx, ny, 1))
                    elif graph[nx][ny] == 'D':
                        check[nx][ny] = check[x][y] + 1
                        ans.append(nx)
                        ans.append(ny)
                        flag = False
                        break
    elif key == 0:
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < R and 0 <= ny < C:
                if graph[nx][ny] == '.' or graph[nx][ny] == 'S':
                    graph[nx][ny] = '*'
                    queue.append((nx, ny, 0))
    

if len(ans) > 1:
    print(check[ans[1]][ans[2]])
else:
    print(ans[0])



