# 1210 Ladder1
# 2022-08-11


for _ in range(10):   

    tc = int(input())

    ladder = []
    for i in range(100):
        ladder.append(list(map(int, input().split())))

    for i in range(100):
        if ladder[99][i] == 2:
            win = i
            break

    x, y = 99, win      # 시작지점 (2가 있는 지점)

    # 오른쪽, 왼쪽, 위쪽 순서로 탐색
    dx = [0, 0, -1]
    dy = [1, -1, 0]
    a = 0

    while x > 0:
        nx = x + dx[a]
        ny = y + dy[a]
        if 0 <= nx < 100 and 0 <= ny < 100:     # 인덱스 에러 방지
            # 세 방향 중 1이 있다면 그 방향으로 이동
            if ladder[nx][ny] == 1:
                x = nx
                y = ny
                ladder[nx][ny] = -1     # 탐색 과정에서 무한 루프에 빠지는 것을 방지
        a = (a + 1) % 3
    
    print('#{} {}'.format(tc, y))



