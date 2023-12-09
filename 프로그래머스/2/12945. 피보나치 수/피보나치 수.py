def solution(n):
    fib = [0] * (n + 1)
    fib[1] = 1
    index = 2
    
    while not fib[n]:
        fib[index] = fib[index - 2] + fib[index - 1]
        index += 1
        
    return fib[n] % 1234567

