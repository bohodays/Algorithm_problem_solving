# 5014 스타트링크

from collections import deque


def BFS(x):
    queue = deque()
    queue.append(x)
    visited[x] = 1

    while queue:
        x = queue.popleft()
        for i in range(2):
            nx = x + transList[i]
            if 0 < nx <= F:
                if not visited[nx]:
                    visited[nx] = visited[x] + 1
                    queue.append(nx)
                    # print(visited)

F, S, G, U, D = map(int, input().split())

visited = [0] * (F+1)
transList = [U, -D]
if S == G:
    print(0)
else:
    ans = BFS(S)

    if not visited[G]:
        print("use the stairs")
    else:
        print(visited[G]-1)
