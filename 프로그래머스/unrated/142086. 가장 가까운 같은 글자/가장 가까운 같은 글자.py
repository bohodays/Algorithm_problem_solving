def solution(s):
    answer = []
    obj = {}
    
    for index, string in enumerate(s):
        if string not in obj:
            answer.append(-1)
            obj[string] = index
        else:
            answer.append(index - obj[string])
            obj[string] = index
    return answer