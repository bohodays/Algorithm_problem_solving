def solution(n):
    answer = 0
    
    nums = [False for _ in range(n + 1)]
    
    for i in range(2, n + 1):
        if not nums[i]:
            answer += 1
            
            for j in range(2, n // i + 1):
                nums[i * j] = True
    
    return answer