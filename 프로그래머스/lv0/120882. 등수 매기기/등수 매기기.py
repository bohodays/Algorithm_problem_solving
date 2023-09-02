def solution(score):
    sorted_score = sorted([sum(i) for i in score], reverse = True)
    return [sorted_score.index(item[0] + item[1]) + 1 for item in score]