def solution(arr, divisor):
    answer = []
    
    for item in arr:
        if (item % divisor == 0):
            answer.append(item)
    
    answer.sort()
    
    return answer if len(answer) else [-1]