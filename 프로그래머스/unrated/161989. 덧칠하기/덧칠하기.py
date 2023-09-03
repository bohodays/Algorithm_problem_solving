def solution(n, m, section):
    answer = 0
    
    nowSection = 0
    
    for item in section:
        if nowSection < item:
            nowSection = item + m - 1
            answer += 1
    return answer