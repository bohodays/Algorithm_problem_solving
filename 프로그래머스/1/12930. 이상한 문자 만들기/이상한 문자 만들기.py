def solution(s):
    answer = ''
    s = s.split(" ")
    
    for item in s:
        tmp = ''
        for i in range(len(item)):
            if i % 2 == 0:
                tmp += item[i].upper()
            else:
                tmp += item[i].lower()
        answer += tmp + " "
    
    return answer[0:len(answer) - 1]