def solution(priorities, location):
    priorities = [[x, False] for x in priorities]
    priorities[location][1] = True
    count = 1
    
    while True:
        target = priorities[0]
        check_items = [item for item in priorities[1:] if target[0] < item[0]]
        if check_items:
            item = priorities.pop(0)
            priorities.append(item)
        else:
            if target[1]:
                return count
            else:
                item = priorities.pop(0)
                count += 1
