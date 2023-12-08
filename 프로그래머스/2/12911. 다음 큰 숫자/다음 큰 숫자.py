def convertBinary(num):
    result = ""
    while num:
        n, m = divmod(num, 2)
        result += str(m)
        num = n
    return result[::-1]

def solution(n):
    answer = 0
    nToBinary = convertBinary(n)
    nOneCount = nToBinary.count("1")
    target = n + 1
    
    while True:
        targetToBinary = convertBinary(target)
        targetOneCount = targetToBinary.count("1")
        if nOneCount == targetOneCount:
            return target
        target += 1
    
