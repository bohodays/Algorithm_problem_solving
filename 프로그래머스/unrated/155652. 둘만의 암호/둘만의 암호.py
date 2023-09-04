def solution(s, skip, index):
    check = "abcdefghijklmnopqrstuvwxyz"
    check = [i for i in check if i not in skip]
    n = len(check)
    answer = ''
    
    for string in s:
        target = check.index(string)
        answer += check[(target + index) % n]
    
    return answer