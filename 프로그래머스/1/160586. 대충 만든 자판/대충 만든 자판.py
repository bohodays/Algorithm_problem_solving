def solution(keymap, targets):
    answer = []
    key_obj = {}
    
    for items in keymap:
        items = list(items)
        for index, item in enumerate(items):
            if item in key_obj:
                key_obj[item] = min(index + 1, key_obj[item])
            else:
                key_obj[item] = index + 1
    
    for target in targets:
        sum_value = 0
        flag = True
        for item in target:
            if item not in key_obj:
                flag = False
                answer.append(-1)
                break
            else:
                sum_value += key_obj[item]
        if flag:
            answer.append(sum_value)       
    
    return answer