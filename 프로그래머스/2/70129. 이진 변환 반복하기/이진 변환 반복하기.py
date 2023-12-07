def solution(s):
    answer = []
    count = 0
    removedZeroCount = 0
    
    while True:
        count += 1
        removedZeroCount += s.count("0")
        s = s.replace("0", "")
        target = len(s)
        
        tmp = ""
        while target:
            n, m = divmod(target, 2)
            target = n
            tmp += str(m)
        tmp[::-1]
        
        s = tmp
        if s == "1":
            break
    
    return [count, removedZeroCount]