def solution(s):
    answer = 0
    
    target = s[0]
    targetCount = 0
    diffCount = 0
    
    for i in range(len(s) - 1):
        if target == s[i]:
            targetCount += 1
        else:
            diffCount += 1
        
        if targetCount == diffCount:
            target = s[i + 1]
            answer += 1
            targetCount = 0
            diffCount = 0
    
    return answer + 1