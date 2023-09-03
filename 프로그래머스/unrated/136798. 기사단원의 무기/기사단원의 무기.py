import math

def check(n):
    tmp = 0
    for i in range(1, int(math.sqrt(n)) + 1):
        if n**0.5 == i:
            tmp += 1
        elif n % i == 0:
            tmp += 2
    return tmp

def solution(number, limit, power):
    result = []
    
    for num in range(1, number + 1):
        target = check(num)
        if target > limit:
            result.append(power)
        else:
            result.append(target)
    
    
    return sum(result)