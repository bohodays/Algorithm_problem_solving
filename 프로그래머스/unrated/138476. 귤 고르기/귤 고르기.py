def solution(k, tangerine):
    answer = 0
    
    obj = {}
    
    for item in tangerine:
        if item not in obj:
            obj[item] = 1
        else:
            obj[item] += 1
    
    value_list = sorted(list(obj.values()), reverse = True)
    
    for item in value_list:
        answer += 1
        k -= item
        
        if k <= 0:
            break
    
    return answer