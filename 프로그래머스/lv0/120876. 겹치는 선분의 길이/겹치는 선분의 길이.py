def solution(lines):
    answer = 0

    obj = {}
    
    for item in lines:
        start, end = item[0], item[1]
        for i in range(start, end):
            if i not in obj:
                obj[i] = 1
            else:
                obj[i] += 1
    
    for item in obj:
        if obj[item] >= 2:
            answer += 1
    
    print(obj)
    return answer