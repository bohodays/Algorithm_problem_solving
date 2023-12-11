def solution(k, tangerine):
    answer = 0
    tangerine.sort()
    
    obj = {}
    for item in tangerine:
        if item in obj:
            obj[item] += 1
        else:
            obj[item] = 1
    
    objToArray = sorted(obj.values())
    
    for i in range(len(objToArray) - 1, -1, -1):
        k -= objToArray[i]
        answer += 1
        
        if k <= 0:
            return answer
