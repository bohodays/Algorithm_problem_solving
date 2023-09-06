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
#     # 동서남북
    dx = [0, 0, 1, -1]
    dy = [1, -1, 0, 0]
    
    startX, startY = 0, 0
    for i in range(len(park)):
        for j in range(len(park[0])):
            if park[i][j] == "S":
                startX, startY = i, j
                
    for route in routes:
        direction, distance = route.split(" ")
        direction = getDirection(direction)
        distance = int(distance)
        
        tmpX, tmpY = startX, startY
        flag = False
        while distance:
            ntmpX, ntmpY = tmpX + dx[direction], tmpY + dy[direction]
            if 0 <= ntmpX < len(park) and 0 <= ntmpY < len(park[0]):
                if park[ntmpX][ntmpY] == "O":
                    tmpX, tmpY = ntmpX, ntmpY
                    distance -= 1
                elif park[ntmpX][ntmpY] == "X":
                    flag = True
                    break
            else:
                flag = True
                break
        
        if not flag:
            park[startX][startY] = "O"
            startX, startY = tmpX, tmpY
            
    return [startX, startY]