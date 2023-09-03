def solution(name, yearning, photo):
    answer = []
    
    obj = {}
    # object 채우기
    for index, item in enumerate(name):
        obj[item] = yearning[index]
        
    for item in photo:
        tmp = 0
        for target in item:
            if target in obj:
               tmp += obj[target]
        answer.append(tmp)
    return answer