def getDirection(string):
    if string == "E":
        return 0
    elif string == "W":
        return 1
    elif string == "S":
        return 2
    else:
        return 3

def solution(park, routes):
    park = [list(i) for i in park]
    answer = []
    n = len(park)
    m = len(park[0])
    # 동서남북
    dx = [0, 0, 1, -1]
    dy = [1, -1, 0, 0]
    
    # 시작 위치 찾기
    positionX, positionX = 0, 0
    for i in range(n):
        for j in range(m):
            if park[i][j] == "S":
                positionX, positionY = i, j
                park[i][j] = "O"
    
    for route in routes:
        d, r = route.split(" ")
        r = int(r)
        flag = True
        for i in range(1, r + 1):
            direction = getDirection(d)
            new_positionX = positionX + dx[direction] * i
            new_positionY = positionY + dy[direction] * i
            if 0 <= new_positionX < n and 0 <= new_positionY < m and park[new_positionX][new_positionY] == "O":
                continue
            else:
                flag = False
                break
                
        if flag:
            positionX = positionX + dx[direction] * r
            positionY = positionY + dy[direction] * r
        
            
    return [positionX, positionY]