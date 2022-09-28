# 1249 보급로

from collections import deque

def dijkstra(x, y):
    queue = deque()
    queue.append((x, y))
    timeDiff[x][y] = 0

    while queue:
        x, y = queue.popleft()

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < N and 0 <= ny < N:
                if timeDiff[nx][ny] > graph[nx][ny] + timeDiff[x][y]:
                    timeDiff[nx][ny] = graph[nx][ny] + timeDiff[x][y]
                    queue.append((nx, ny))


T = int(input())

for tc in range(1, T+1):

    N = int(input())

    graph = []
    for _ in range(N):
        graph.append(list(map(int, input())))

    timeDiff = [[float('inf')] * N for _ in range(N)]

    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]

    dijkstra(0, 0)

    ans = timeDiff[N-1][N-1]

    print('#{} {}'.format(tc, ans))