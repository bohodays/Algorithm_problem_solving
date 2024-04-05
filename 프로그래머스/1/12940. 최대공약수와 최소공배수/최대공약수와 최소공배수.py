def solution(n, m):
    answer = [0, 0]
    
    minValue = min(n, m)
    
    for i in range(1, minValue + 1):
        if (n % i == 0 and m % i == 0):
            answer[0] = i
            answer[1] = n * m / i
    
    return answer