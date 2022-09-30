# 2382 미생물 격리
# 2022-09-30



def transDirection(n):
    if n == 1:
        return 2
    elif n == 2:
        return 1
    elif n == 3:
        return 4
    elif n == 4:
        return 3

T = int(input())

for tc in range(1, T+1):

    N, M, K = map(int, input().split())

    info = []
    for _ in range(K):
        info.append(list(map(int, input().split())))

    for _ in range(M):
        # 방행대로 움직이기
        for i in range(len(info)):
            if info[i][3] == 1:
                info[i][0] -= 1
            elif info[i][3] == 2:
                info[i][0] += 1
            elif info[i][3] == 3:
                info[i][1] -= 1
            else:
                info[i][1] += 1

            # 약품이 칠해진 구역에 있다면
            if info[i][0] == 0 or info[i][0] == N-1 or info[i][1] == 0 or info[i][1] == N-1:
                info[i][2] = int(info[i][2]/2)
                info[i][3] = transDirection(info[i][3])
            


        direction = [[[] for _ in range(N)] for _ in range(N)]
        microbes = [[[] for _ in range(N)] for _ in range(N)]

        # 정보 입력
        for i in info:
            microbes[i[0]][i[1]].append(i[2])
            direction[i[0]][i[1]].append(i[3])
        
        info = []
        # 겹치는 영역 확인 후 재설정
        for i in range(N):
            for j in range(N):
                if len(microbes[i][j]) > 1:
                    maxV = max(microbes[i][j])
                    trans = microbes[i][j].index(maxV)
                    microbes[i][j] = [sum(microbes[i][j])]
                    direction[i][j] = [direction[i][j][trans]]
                    info.append([i, j, microbes[i][j][0], direction[i][j][0]])
                elif len(microbes[i][j]) == 1:
                    info.append([i, j, microbes[i][j][0], direction[i][j][0]])
    
    ans = 0
    for i in range(N):
        for j in range(N):
            if microbes[i][j]:
                ans += microbes[i][j][0]

    print('#{} {}'.format(tc, ans))






   