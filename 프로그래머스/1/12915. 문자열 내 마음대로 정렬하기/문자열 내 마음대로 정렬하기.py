def solution(strings, n):
    strings.sort()
    strings = sorted(strings, key = lambda x : x[n])    
    
    return strings