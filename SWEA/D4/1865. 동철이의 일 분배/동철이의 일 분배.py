# 1865 동철이의 일 분배
# 2022-09-27



def DFS(x, result):
    global arr, maxV
    # 마지막 열에 도착했을 때, 최대값 비교 후 갱신
    if x >= N:
        if result >= maxV:
            maxV = result
        return

    # 초기값이 제일 크므로 계산과정에서 이미 maxV보다 작다면 DFS 종료
    if result <= maxV:
        return

    # 각 열마다 순회
    for i in range(N):
        # 방문 여부 확인
        if not visited[i]:
            # 방문하지 않았으면 방문 표시
            visited[i] = True
            # DFS 수행
            DFS(x+1, result * arr[x][i] * 0.01)
            # 방문 표시 제거
            visited[i] = False


T = int(input())

for tc in range(1, T+1):

    N = int(input())

    arr = []
    for _ in range(N):
        arr.append(list(map(int, input().split())))

    # 방문 여부 확인 리스트 생성
    visited = [False] * N

    maxV = float('-inf')
    DFS(0, 1)
    print('#{} {:.6f}'.format(tc, maxV * 100))