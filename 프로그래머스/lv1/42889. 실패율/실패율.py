def solution(N, stages):
    answer = []
    
    for stage in range(1, N + 1):
        totalPlayer = 0
        nowPlayer = 0
        for i in stages:
            if i >= stage:
                totalPlayer += 1
            if i == stage:
                nowPlayer += 1
        if totalPlayer == 0:
            answer.append([stage, 0])
        else:
            answer.append([stage, nowPlayer / totalPlayer])
    answer = sorted(answer, key = lambda x : -x[1])
    answer = [x[0] for x in answer]
    return answer