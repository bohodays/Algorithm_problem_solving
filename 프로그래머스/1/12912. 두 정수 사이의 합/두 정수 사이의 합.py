def solution(a, b):
    answer = 0
    minValue = min(a, b)
    maxValue = max(a, b)
    
    for i in range(minValue, maxValue + 1):
        answer += i
    
    return answer