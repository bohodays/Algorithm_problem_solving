# 2: [0, 2], 3: [1, 0], 4: [1, 1], 5: [1, 2] -> +1
import math


def solution(n, left, right):
    answer = []
    
    while left <= right:
        answer.append(max(math.floor(left / n), left % n) + 1)
        left += 1
    
    return answer