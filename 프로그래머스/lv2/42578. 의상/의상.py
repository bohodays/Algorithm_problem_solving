def solution(clothes):
    answer = 1
    obj = {}
    
    for cloth in clothes:
        [item, item_type] = cloth
        if item_type in obj:
            obj[item_type].append(item)
        else:
            obj[item_type] = [item]
    
    for item in obj:
        answer *= len(obj[item]) + 1
        
    return answer - 1