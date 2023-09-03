def solution(k, m, score):
    answer = 0
    score = sorted(score, reverse = True)
    for i in range(0, len(score), m):
        result = score[i : i + m]
        if len(result) == m:
            answer += min(result) * m
    return answer