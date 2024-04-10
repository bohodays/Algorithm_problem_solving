def solution(s):
    answer = 0
    
    target = s[0]
    same_string_count = 0
    different_string_count = 0
    
    for i in range(len(s) - 1):
        if target == s[i]:
            same_string_count += 1
        elif target != s[i]:
            different_string_count += 1
        
        if same_string_count == different_string_count:
            target = s[i + 1]
            same_string_count = 0
            different_string_count = 0
            answer += 1
    
    return answer + 1