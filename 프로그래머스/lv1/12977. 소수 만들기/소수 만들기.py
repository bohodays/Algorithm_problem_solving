import itertools

def check(n):
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

def solution(nums):
    answer = 0

    numsArray = list(itertools.combinations(nums, 3))
    
    for num in numsArray:
        if check(sum(num)):
            answer += 1

    return answer