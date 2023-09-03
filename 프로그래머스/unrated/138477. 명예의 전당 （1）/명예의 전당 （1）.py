def solution(k, score):
    answer = []
    result = []
    
    for item in score:
        result.append(item)
        result = sorted(result, reverse = True)
        if len(result) > k:
            result.pop()
        
        answer.append(result[-1])
    return answer