from collections import deque

def solution(people, limit):
    answer = 0
    
    result = deque(sorted(people))
    
    while len(result):
        # 사람이 한 명이라면
        if len(result) == 1:
            answer += 1
            break
        
        # 사람이 둘 이상이라면
        if result[0] + result[-1] > limit:
            answer += 1
            result.pop()
        else:
            answer += 1
            result.popleft()
            result.pop()
    
    return answer