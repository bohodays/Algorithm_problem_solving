# 2116 주사위 쌓기
import copy

def transIdx(i):
    if i == 0:
        return 5
    elif i == 1:
        return 3
    elif i == 2:
        return 4
    elif i == 3:
        return 1
    elif i == 4:
        return 2
    elif i == 5:
        return 0

T = int(input())

dice = []
for _ in range(T):
    dice.append(list(map(int,input().split())))

dice_copy = copy.deepcopy(dice)

result = []
for i in range(6):
    total = 0
    flag = False
    for j in dice:
        if flag == False:
            top, bottom = j[i], j[transIdx(i)] 
            j[i], j[transIdx(i)] = 0, 0
            total += max(j)
            flag = True
        elif flag == True:
            topIdx = j.index(top)
            top, bottom = j[transIdx(topIdx)], j[topIdx] 
            j[transIdx(topIdx)], j[topIdx] = 0, 0
            total += max(j)
    result.append(total)
    dice = copy.deepcopy(dice_copy)

print(max(result))
