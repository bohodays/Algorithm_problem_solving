def is_priority(num, array):
    for i in range(len(array)):
        if array[i] > num:
            return False
    return True

def solution(priorities, location):
    answer = 0
    
    array_for_answer = [[priorities[i], i] for i in range(len(priorities))]
    
    while priorities:
        target = priorities[0]
        result = is_priority(target, priorities[1:])

        if result:
            answer += 1
            if array_for_answer[0][1] == location:
                return answer
            else:
                priorities.pop(0)
                array_for_answer.pop(0)
                
        else:
            priorities.append(priorities.pop(0))
            array_for_answer.append(array_for_answer.pop(0))
            
    return answer