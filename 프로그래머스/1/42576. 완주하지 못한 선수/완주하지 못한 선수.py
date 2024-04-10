def solution(participant, completion):
    
    obj = {}
    
    for item in completion:
        if item in obj:
            obj[item] += 1
        else:
            obj[item] = 1
    
    # print(obj)
    for target in participant:
        if target not in obj:
            return target
        else: 
            if obj[target] >= 1:
                obj[target] -= 1
            elif obj[target] == 0:
                return target
    
