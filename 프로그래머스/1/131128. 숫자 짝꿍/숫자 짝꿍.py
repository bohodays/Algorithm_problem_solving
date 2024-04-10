def solution(X, Y):
    answer = []
    
    obj = {}
    
    for i in Y:
        if i in obj:
            obj[i] += 1
        else:
            obj[i] = 1
    
    for j in X:
        if j in obj:
            if obj[j] >= 1:
                obj[j] -= 1
                answer.append(j)
    
    answer = sorted(answer, reverse = True)
    
    if len(answer) == 0:
        return "-1"
    elif answer.count("0") == len(answer):
        return "0"
    else:
        return "".join(answer)
