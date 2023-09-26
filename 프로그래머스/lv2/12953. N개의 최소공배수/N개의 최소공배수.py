def solution(arr):
    answer = 0
    
    maxValue = max(arr)
    target = 1;
    
    while True:
        checkValue = maxValue * target
        flag = False
        for i in range(len(arr)):
            if checkValue % arr[i] != 0:
                flag = True
                target += 1
                break
        if not flag:
            return checkValue
    
