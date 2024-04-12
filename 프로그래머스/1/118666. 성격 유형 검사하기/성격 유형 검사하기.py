def getResult(obj, type1, type2):
    if obj[type1] > obj[type2]:
        return type1
    elif obj[type1] < obj[type2]:
        return type2
    else:
        return sorted([type1, type2])[0]

def solution(survey, choices):
    answer = ''
    
    obj = {
        "R": 0, "T": 0, "C": 0, "F": 0, "J": 0, "M": 0, "A": 0, "N": 0
    }
    
    for i in range(len(survey)):
        point = choices[i]
        if point == 1:
            obj[survey[i][0]] += 3
        elif point == 2:
            obj[survey[i][0]] += 2
        elif point == 3:
            obj[survey[i][0]] += 1
        elif point == 5:
            obj[survey[i][1]] += 1
        elif point == 6:
            obj[survey[i][1]] += 2
        elif point == 7:
            obj[survey[i][1]] += 3
    
    answer += getResult(obj, "R", "T")
    answer += getResult(obj, "C", "F")
    answer += getResult(obj, "J", "M")
    answer += getResult(obj, "A", "N")     
        
    return answer