def solution(s, skip, index):
    answer = ''
    check = "abcdefghijklmnopqrstuvwxyz"
    
    for item in skip:
        check = check.replace(item, "")
    
    n = len(check)
    for i in range(len(s)):
        target_index = check.index(s[i])
        answer += check[(target_index + index) % n]
        
    return answer