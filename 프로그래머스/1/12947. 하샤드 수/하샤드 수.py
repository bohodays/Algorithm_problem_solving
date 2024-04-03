def solution(x):
    answer = True
    sumValue = 0
    
    for i in str(x):
        sumValue += int(i)
    
    return True if x % sumValue == 0 else False