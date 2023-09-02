def factorial(n):
    result = 1
    for num in range(2, n + 1):
        result *= num
    return result

def solution(balls, share):
    answer = factorial(balls) / (factorial(balls - share) * factorial(share))
    return answer