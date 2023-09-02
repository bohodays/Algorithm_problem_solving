def solution(i, j, k):
    answer = 0
    k = str(k)
    
    for num in range(i, j + 1):
        num = str(num)
        for check in range(0, len(num)):
            if num[check] == k:
                answer += 1
    
    return answer
