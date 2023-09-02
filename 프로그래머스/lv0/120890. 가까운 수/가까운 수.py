import sys

def solution(array, n):
    answer = 0
    minValue = sys.maxsize
    
    for num in array:
        if abs(num - n) < minValue:
            minValue = abs(num - n)
            answer = num
        elif abs(num - n) == minValue:
            answer = min(answer, num)
    return answer