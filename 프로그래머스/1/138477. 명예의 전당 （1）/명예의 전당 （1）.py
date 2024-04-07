def solution(k, score):
    result = []
    answer = []
    
    for item in score:
        if len(answer) == 0:
            result.append(item)
        else:
            if len(answer) < k:
                result.append(item)
            else:
                if result[0] < item:
                    result[0] = item
        result.sort()
        answer.append(result[0])
    
    return answer