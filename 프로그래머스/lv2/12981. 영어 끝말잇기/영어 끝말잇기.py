import math

def solution(n, words):
    words_obj = {}
    
    for i in range(len(words)):
        turn = i % n
        checkItem = words[i]
        
        # 한 글자인 경우
        if len(words[i]) == 1:
            return [turn + 1, math.ceil((i + 1) / n)]

        # 끝말을 맞추지 않은 경우
        if i > 0:
            if words[i][0] != words[i - 1][-1]:
                return [turn + 1, math.ceil((i + 1) / n)]
                
        # 이미 있는 단어를 말한 경우
        if words[i] in words_obj:
            return [turn + 1, math.ceil((i + 1) / n)]
        
        words_obj[words[i]] = 1

    return [0, 0]
