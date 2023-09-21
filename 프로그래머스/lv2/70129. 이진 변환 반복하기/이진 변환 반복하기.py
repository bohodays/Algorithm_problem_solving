def solution(s):
    count = 0
    removed_zero = 0
    while True:
        count += 1
        removed_zero += s.count('0')
        
        s = s.replace('0', '')
        
        if s == '1':
            break
        
        c = len(s)
        
        tmp = ''
        while c:
            n, m = divmod(c, 2)
            c = n
            tmp += str(m)
        
        s = tmp[::-1]
        
    return [count, removed_zero]