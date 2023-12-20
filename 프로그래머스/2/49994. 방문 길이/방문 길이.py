def solution(dirs):
    # 방향 설정
    direction = {
        'U': [1, 0],
        'D': [-1, 0],
        'L': [0, -1],
        'R': [0, 1]
    }
    # 방문 여부를 확인할 집합 생성. 집합의 특성을 활용하여 중복을 고려하지 않아도 됨.
    visited = set()

    # 시작 좌표 초기화
    x, y = 0, 0
    
    for d in dirs:
        # 이동할 좌표
        newX = x + direction[d][0]
        newY = y + direction[d][1]
        
        # 유효한 범위 안에 있는지 확인
        if -5 <= newX <= 5 and -5 <= newY <= 5:
            # 시작점과 도착점, 도착점과 시작점 둘다 추가
            # A -> B랑 B -> A는 같은 길을 지난 것이기 때문
            visited.add(str(newX) + str(newY) + str(x) + str(y))
            visited.add(str(x) + str(y) + str(newX) + str(newY))
            x, y = newX, newY
            
    return len(visited) / 2