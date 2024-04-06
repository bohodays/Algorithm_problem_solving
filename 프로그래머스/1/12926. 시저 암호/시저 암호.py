def solution(s, n):
    answer = ''
    ref1 = "abcdefghijklmnopqrstuvwxyz"
    ref2 = ref1.upper()
    
    for item in s:
        if item in ref1:
            index = ref1.index(item)
            answer += ref1[(index + n) % 26]
        elif item in ref2:
            index = ref2.index(item)
            answer += ref2[(index + n) % 26]
        else:
            answer += " "
            
    return answer