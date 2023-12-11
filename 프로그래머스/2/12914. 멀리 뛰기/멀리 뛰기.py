# 1 - 2 - 3 - 5

def solution(n):
    if n == 1: return 1
    elif n == 2: return 2

    answer = [0] * (n + 1)
    answer[1] = 1
    answer[2] = 2
    index = 3
    
    while not answer[n]:
        answer[index] = (answer[index - 2] + answer[index - 1]) % 1234567
        index += 1
    
    return answer[n]