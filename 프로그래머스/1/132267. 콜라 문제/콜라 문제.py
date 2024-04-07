def solution(a, b, n):
    answer = 0
    
    while n >= a:
        k, m = divmod(n, a)
        answer += k * b
        n = k * b + m
    
    return answer