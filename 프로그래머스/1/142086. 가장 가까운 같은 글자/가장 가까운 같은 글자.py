def solution(s):
    answer = []
    obj = {}
    
    for index, item in enumerate(s):
        if item not in obj:
            obj[item] = index
            answer.append(-1)
        else:
            answer.append(index - obj[item])
            obj[item] = index
            
    
    return answer