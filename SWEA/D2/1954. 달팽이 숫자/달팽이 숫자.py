# 1954 달팽이 숫자
# 2022-08-10



# 테스트 케이스를 입력받는다.
T = int(input())

# 행과 열을 탐색할 수 있도록 방향 설정 (달팽이의 방향 : 오른쪽 -> 아래쪽 -> 왼쪽 -> 위쪽)
di = [0 , 1, 0, -1]
dj = [1, 0, -1, 0]


for tc in range(1,T+1):

    N = int(input())
    # N x N 행렬을 0으로 초기화하는 2차원 리스트 생성
    arr = [[0] * N for _ in range(N)]

    # 방향 탐색을 설정할 인덱스
    a = 0
    # 초기위치 지정
    i, j = 0, 0

    for n in range(1, N*N+1):
        # arr[0][0]부터 달팽이의 방향을 따라 진행한다.
        arr[i][j] = n
        i += di[a]
        j += dj[a]
        # 음수값을 가지거나 경계까지 도달하거나 0이 아닌 다른 값이 이미 있다면 방향을 바꾸도록 설정
        # 방향을 바꾼 후 다시 원위치시키고 바뀐 방향으로 움직이도록 설정
        if (i < 0) or (i == N) or (j < 0) or (j == N) or (arr[i][j] != 0):
            i -= di[a]
            j -= dj[a]
            a = (a + 1) % 4
            i += di[a]
            j += dj[a]
        
    # 결과를 출력한다.        
    print('#{}'.format(tc))
    for i in arr:
        print(*i)