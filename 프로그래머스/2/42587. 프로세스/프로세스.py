def solution(priorities, location):
    answer = []
    
    location_array = [i for i in range(len(priorities))]
    
    while priorities:
        target = location_array.pop(0)
        target_priority = priorities.pop(0)
        
        # 우선 순위가 더 큰 것이 있는지 확인
        flag = False
        for item in priorities:
            if item > target_priority:
                flag = True
                break
                
        # 우선 순위가 더 큰 것이 있다면
        if flag:
            location_array.append(target)
            priorities.append(target_priority)
        else:
            answer.append(target)
    
    index = answer.index(location)
    
    return index + 1