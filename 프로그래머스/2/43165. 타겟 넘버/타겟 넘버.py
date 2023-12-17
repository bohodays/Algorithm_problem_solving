def solution(numbers, target):
    answer = 0
    
    def dfs(result, count, limit):
        nonlocal answer
        if count == limit:
            if result == target:
                answer += 1
            return
        
        dfs(result + numbers[count], count + 1, limit)
        dfs(result - numbers[count], count + 1, limit)
    
    dfs(0, 0, len(numbers))
    
    return answer