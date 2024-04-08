def solution(n, m, section):
    answer = 1
    
    current_value = section[0] + m - 1
    section.pop(0)
    
    for item in section:
        if item > current_value:
            answer += 1
            current_value = item + m - 1
    
    return answer