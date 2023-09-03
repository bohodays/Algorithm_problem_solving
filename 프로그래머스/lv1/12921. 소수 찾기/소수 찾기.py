def solution(n):
    answer = 0
    
    result = [False for _ in range(n + 1)]
    
    for num in range(2, n + 1):
        if not result[num]:
            answer += 1
            
            count = 1
            while num * count <= n:
                result[num * count] = True
                count += 1
                
    return answer