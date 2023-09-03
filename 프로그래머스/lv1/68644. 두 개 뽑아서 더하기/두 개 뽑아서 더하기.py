import itertools

def solution(numbers):
    answer = set()
    numbers = sorted(numbers)
    result = list(itertools.combinations(numbers, 2))
    for i in result:
        answer.add(sum(i))
    answer = sorted(list(answer))
    return answer