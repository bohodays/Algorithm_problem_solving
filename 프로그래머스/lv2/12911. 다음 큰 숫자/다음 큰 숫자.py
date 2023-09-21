def binary(num):
    result = ''
    while num:
        n, m = divmod(num, 2)
        num = n
        result += str(m)
    return result[::-1]

def solution(n):
    answer = 0
    nextN = n + 1
    getBinaryN = binary(n)
    getOneCountN = getBinaryN.count('1')
    
    while True:
        getBinaryNextN = binary(nextN)
        getOneCountNextN = getBinaryNextN.count('1')
        if getOneCountN == getOneCountNextN:
            break
        nextN += 1
        
    return nextN