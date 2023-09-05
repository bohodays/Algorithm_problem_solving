def solution(survey, choices):
    answer = ''
    
    obj = {
        "R": 0, "T": 0, "C": 0, "F": 0, "J": 0, "M": 0, "A": 0, "N": 0
    }
    
    for i in range(len(survey)):
        if choices[i] == 1:
            obj[survey[i][0]] += 3
        elif choices[i] == 2:
            obj[survey[i][0]] += 2
        elif choices[i] == 3:
            obj[survey[i][0]] += 1
        elif choices[i] == 5:
            obj[survey[i][1]] += 1
        elif choices[i] == 6:
            obj[survey[i][1]] += 2
        elif choices[i] == 7:
            obj[survey[i][1]] += 3
            
    ref = ["R", "T", "C", "F", "J", "M", "A", "N"]
    for i in range(0, 8, 2):
        if obj[ref[i]] > obj[ref[i + 1]]:
            answer += ref[i]
        elif obj[ref[i]] < obj[ref[i + 1]]:
            answer += ref[i + 1]
        else:
            tmp = ref[i] + ref[i + 1]
            answer += tmp[0]
        
    return answer