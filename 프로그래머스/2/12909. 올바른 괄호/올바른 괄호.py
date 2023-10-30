def solution(s):
    answer = []
    
    for i in range(len(s)):
        item = s[i]
        if not answer:
            answer.append(item)
        else:
            if item == ")":
                if answer[-1] == "(":
                    answer.pop()
                else:
                    answer.append(item)
            else:
                answer.append(item)        
    
    return True if not answer else False