import math

def solution(x, y, n):
    d = [math.inf] * (y + 1)
    d[x] = 0
    x_mul_2 = x * 2
    x_mul_3 = x * 3
    
    for i in range(x + 1, y + 1):
        if (0 <= i - n):
            d[i] = min(d[i], d[i - n] + 1)
        
        if (i >= x_mul_2) and (i % 2 == 0):
            d[i] = min(d[i], d[i // 2] + 1)
            
        if (i >= x_mul_3) and (i % 3 == 0):
            d[i] = min(d[i], d[i // 3] + 1)
            
    return d[y] if d[y] != math.inf else -1