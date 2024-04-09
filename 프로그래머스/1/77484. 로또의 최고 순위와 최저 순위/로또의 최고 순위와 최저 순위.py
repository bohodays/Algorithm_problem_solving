def getRank(num):
    if num == 6:
        return 1
    if num == 5:
        return 2
    if num == 4:
        return 3
    if num == 3:
        return 4
    if num == 2:
        return 5
    return 6

def solution(lottos, win_nums):
    answer = []
    
    zero_count = lottos.count(0)
    max_value = 0
    min_value = 0
    
    for lotto in lottos:
        if lotto in win_nums:
            max_value += 1
            min_value += 1
    
    answer.append(getRank(max_value + zero_count))
    answer.append(getRank(min_value))
    
    return answer