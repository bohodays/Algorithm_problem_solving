# 1219 길찾기
# 2022-08-18


# DFS 함수 정의
def dfs(graph, v, visited):
    global ans
    # 현재 노드를 방문 처리
    visited[v] = True
    # 현재 노드와 연결된 다른 노드를 재귀적으로 방문
    for i in graph[v]:
        # 도착점인 99를 만나면 1이 리턴되도록 설정
        if i == 99:
            ans = 1
        else:
            if not visited[i]:
                dfs(graph, i, visited)
    return ans

for _ in range(10):

    tc, N = map(int, input().split())

    route = list(map(int, input().split()))

    # 각 노드가 연결된 정보를 리스트 자료형으로 표현(2차원 리스트)
    graph = [[] for _ in range(200)]
    for i in range(0, len(route)-1, 2):
        graph[route[i]].append(route[i+1])

    # 각 노드가 방문된 정보를 리스트 자료형으로 표현 (1차원 리스트)
    visited = [False] * N

    # 초기 ans는 0으로 설정
    ans = 0

    # 정의된 DFS 함수 호출
    dfs(graph, 0, visited)
    
    print('#{} {}'.format(tc, ans))