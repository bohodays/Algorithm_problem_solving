def solution(absolutes, signs):
    answer = 0
    
    for i in range(len(signs)):
        if (signs[i] == False):
            answer += (-1) * absolutes[i]
        else:
            answer += absolutes[i]
    
    return answer