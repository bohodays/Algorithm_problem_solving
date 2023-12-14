def solution(clothes):
    answer = 1
    clothes_obj = {}
    
    for item in clothes:
        [item_name, item_type] = item
        if item_type in clothes_obj:
            clothes_obj[item_type].append(item_name)
        else:
            clothes_obj[item_type] = [item_name]
    
    for item in clothes_obj:
        answer *= len(clothes_obj[item]) + 1
        
    return answer - 1