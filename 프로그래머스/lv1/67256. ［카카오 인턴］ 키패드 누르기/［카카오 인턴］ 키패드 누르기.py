import math

# 해당 위치를 찾아주는 함수
def getPosition(array, target):
    for i in range(4):
        for j in range(3):
            if array[i][j] == target:
                return i, j

# 두 점 사이의 거리를 구해주는 함수
def getDistance(nowX, nowY, targetX, targetY):
    return abs(nowX - targetX) + abs(nowY - targetY)

def solution(numbers, hand):
    answer = ''
    phone = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ["*", 0, "#"]]
    
    rightHand = [3, 2]
    leftHand = [3, 0]
    
    for number in numbers:
        if number == 1 or number == 4 or number == 7:
            x, y = getPosition(phone, number)
            leftHand[0], leftHand[1] = x, y
            answer += "L"
        elif number == 3 or number == 6 or number == 9:
            x, y = getPosition(phone, number)
            rightHand[0], rightHand[1] = x, y
            answer += "R"
        else:
            x, y = getPosition(phone, number)
            leftHandToTarget = getDistance(leftHand[0], leftHand[1], x, y)
            rightHandToTarget = getDistance(rightHand[0], rightHand[1], x, y)
            if leftHandToTarget < rightHandToTarget:
                leftHand[0], leftHand[1] = x, y
                answer += "L"
            elif leftHandToTarget > rightHandToTarget:
                rightHand[0], rightHand[1] = x, y
                answer += "R"
            else:
                if hand == "left":
                    leftHand[0], leftHand[1] = x, y
                    answer += "L"
                else:
                    rightHand[0], rightHand[1] = x, y
                    answer += "R"
                
    return answer