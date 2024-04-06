def solution(n):
    answer = ''
    
    while n:
        k, m = divmod(n, 3)
        answer += str(m)
        n = k
    
    return int(answer, 3)