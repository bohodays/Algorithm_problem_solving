# 1226 미로1
# 2022-08-25


def bfs(x, y):
    global flag
    # 큐 생성
    queue = []
    # 큐에 시작 지점 추가
    queue.append((x, y))

    # 큐가 빌 때까지 반복
    while queue and flag == False:
        x, y = queue.pop(0)
        # 현재 위치에서 4가지 방향으로 위치 확인
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if maze[nx][ny] == 1:
                continue
            elif maze[nx][ny] == 0:
                maze[nx][ny] = maze[x][y] - 1
                queue.append((nx, ny))
            elif maze[nx][ny] == 3:
                flag = True
                return 1
    return 0



for _ in range(10):
    
    tc = int(input())

    maze = []
    for _ in range(16):
        maze.append(list(map(int, input())))
    
    # 이동할 네 가지 방향 정의 (상, 하, 좌, 우)
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]

    flag = False

    print('#{} {}'.format(tc, bfs(1,1)))