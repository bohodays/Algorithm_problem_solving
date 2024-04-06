import itertools

def solution(number):
    answer = 0
    coms = list(itertools.combinations(number, 3))
    
    for item in coms:
        if (sum(item) == 0):
            answer += 1
    
    return answer