def solution(N, stages):
    answer = [[0, i + 1] for i in range(N)]
    
    for i in range(1, N + 1):
        clear_person = len([item for item in stages if item >= i])
        not_clear_person = len([item for item in stages if item == i])
        if (not_clear_person == 0):
            answer[i - 1][0] = 0
        else:
            answer[i - 1][0] = not_clear_person / clear_person
    
    answer = sorted(answer, key = lambda x : x[0], reverse = True)
        
    return [num[1] for num in answer]