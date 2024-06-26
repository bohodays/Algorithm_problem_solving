def check(num):
    result = 0
    for i in range(1, int(num**0.5) + 1):
        if i**2 == num:
            result += 1
        elif num % i == 0:
            result += 2
    return result

def solution(number, limit, power):
    answer = 0
    
    for i in range(1, number + 1):
        result = check(i)
        if result > limit:
            answer += power
        else:
            answer += result
    
    return answer