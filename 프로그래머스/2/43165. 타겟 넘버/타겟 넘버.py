def solution(numbers, target):
    answer = 0
    limit = len(numbers)
    
    def dfs(count, number):
        nonlocal answer
        # 종료조건
        if count == limit:
            if number == target:
                answer += 1
            return
    
        dfs(count + 1, number + numbers[count])
        dfs(count + 1, number - numbers[count])
        
    dfs(0, 0)
    
    return answer