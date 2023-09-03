def solution(a, b, n):
    answer = 0
    
    while n >= a:
        i, j = divmod(n, a)
        answer += i * b
        n = i * b + j
        print(i, j)
    # print(n)
    return answer