def solution(my_string):
    answer = 0
    
    tmp = ""
    for str in my_string:
        if str.isdigit():
            tmp += str
        else:
            if tmp:
                answer += int(tmp)
                tmp = ""
    if tmp:
        answer += int(tmp)
        tmp = ""
    return answer