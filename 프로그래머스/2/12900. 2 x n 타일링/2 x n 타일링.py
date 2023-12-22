def solution(n):
    d = [0] * (n + 1)
    d[1], d[2], d[3] = 1, 2, 3
    
    if n <= 3: return d[n]
    
    for i in range(4, n + 1):
        d[i] = (d[i - 2] + d[i - 1]) % 1000000007
    
    return d[n]