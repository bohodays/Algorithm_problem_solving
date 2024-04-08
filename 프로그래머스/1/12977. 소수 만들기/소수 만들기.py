import itertools

def isPrime(num):
    result = 0
    if num == 1:
        return False
    elif num == 2:
        return True
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

def solution(nums):
    answer = 0
    
    nums = list(itertools.combinations(nums, 3))
    
    for num in nums:
        if isPrime(sum(num)):
            answer += 1

    return answer