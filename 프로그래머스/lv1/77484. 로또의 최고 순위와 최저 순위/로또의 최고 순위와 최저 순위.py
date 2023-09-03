def solution(lottos, win_nums):
    answer = [0, 0]
    
    zeroCount = 0
    result = 0
    
    for num in lottos:
        if num in win_nums:
            result += 1
        if num == 0:
            zeroCount += 1
    
    maxValue = result + zeroCount
    
    if maxValue == 6:
        answer[0] = 1
    elif maxValue == 5:
        answer[0] = 2
    elif maxValue == 4:
        answer[0] = 3
    elif maxValue == 3:
        answer[0] = 4
    elif maxValue == 2:
        answer[0] = 5
    else:
        answer[0] = 6
    
    if result == 6:
        answer[1] = 1
    elif result == 5:
        answer[1] = 2
    elif result == 4:
        answer[1] = 3
    elif result == 3:
        answer[1] = 4
    elif result == 2:
        answer[1] = 5
    else:
        answer[1] = 6
        
    return answer