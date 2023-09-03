def solution(s, n):
    answer = ''
    ref1 = "abcdefghijklmnopqrstuvwxyz"
    ref2 = ref1.upper()
    
    for string in s:
        if string == " ":
            answer += " "
        elif string.isupper():
            index = ref2.index(string)
            answer += ref2[(index + n) % 26]
        else:
            index = ref1.index(string)
            answer += ref1[(index + n) % 26]
    return answer