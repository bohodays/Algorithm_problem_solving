def solution(n):
    result = [0 for _ in range(n + 1)]
    result[0] = 0
    result[1] = 1
    i = 2
    
    while not result[n]:
        result[i] = result[i - 2] + result[i - 1]
        i += 1
    
    return result[n] % 1234567