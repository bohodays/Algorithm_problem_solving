def solution(n):
    answer = 0
    result = [0] * 2001
    result[1] = 1
    result[2] = 2
    
    if n <= 2:
        return result[n]
    
    for i in range(3, n + 1):
        result[i] = (result[i - 2] + result[i - 1]) % 1234567
    
    return result[n]