def convert(num, n, check):
    if num == 0: return '0'

    result = ''
    while num:
        l, m = divmod(num, n)
        result += check[m]
        num = l
    return result[::-1]

def solution(n, t, m, p):
    answer = ''
    check = '0123456789ABCDEF'
    n_convert = ''
    
    for i in range(t * m):
        n_convert += convert(i, n, check)
    
    for i in range(p - 1, t * m, m):
        answer += n_convert[i]
    
    return answer