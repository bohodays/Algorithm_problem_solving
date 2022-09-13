# 1238 Contact
# 2022-09-13
from collections import deque

# BFS 구현
def bfs(graph, start, visited):
    queue = deque([start])
    
    # 큐가 빌 때까지 반복
    while queue:
        x = queue.popleft()
        for i in graph[x]:
            if not visited[i]:
                # 방문하지 않은 노드를 방문할 때마다 시작지점으로부터의 거리 입력
                visited[i] = visited[x] + 1
                queue.append(i)

for tc in range(1,11):

    # 데이터의 길이와 시작점 입력
    L, start = map(int, input().split())
    # 데이터 입력
    contact = list(map(int, input().split()))

    # 그래프 입력
    graph = [[] for _ in range((max(contact) + 1))]
    for i in range(0,L,2):
        graph[contact[i]].append(contact[i+1])
    
    # 방문처리할 리스트 초기화
    visited = [0] * (max(contact) + 1)

    bfs(graph, start, visited)
    # 시작지점의 거리 0으로 초기화
    visited[start] = 0    

    # 방문거리가 가장 큰 방문지점의 인덱스 구하기
    key = max(visited)
    maxV = 0
    for i in range(len(visited)):
        if visited[i] == key:
            if i > maxV:
                maxV = i

    print('#{} {}'.format(tc, maxV))

