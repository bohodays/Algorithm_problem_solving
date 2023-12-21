def solution(topping):
    answer = 0
    total_topping_count = len(set(topping))
    total_topping = {}
    
    for item in topping:
        if item in total_topping:
            total_topping[item] += 1
        else:
            total_topping[item] = 1
        
    check_topping = set()
    for i in range(len(topping)):
        current_item = topping[i]
        total_topping[current_item] -= 1
        check_topping.add(current_item)
        
        if total_topping[current_item] == 0:
            total_topping_count -= 1
        
        if total_topping_count == len(check_topping):
            answer += 1
    
    return answer