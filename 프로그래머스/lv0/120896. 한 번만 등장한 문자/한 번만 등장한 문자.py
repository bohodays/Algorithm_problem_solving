def solution(s):
    obj = {}
    answer = []
    
    for i in range(len(s)):
        if s[i] not in obj:
            obj[s[i]] = 1
        else:
            obj[s[i]] += 1
            
    for str in obj:
        if obj[str] == 1:
            answer.append(str)         
    
    answer = sorted(answer)
    return "".join(answer)