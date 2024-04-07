def solution(name, yearning, photo):
    answer = []
    obj = {}
    
    for i in range(len(name)):
        obj[name[i]] = yearning[i]
    
    for items in photo:
        sumValue = 0
        for item in items:
            if item in obj:
                sumValue += obj[item]
        answer.append(sumValue)
        
    return answer