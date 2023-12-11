# 80 70 50 50
from collections import deque

def solution(people, limit):
    answer = 0
    boat = deque(sorted(people, reverse = True))
    
    while boat:
        if len(boat) >= 2:
            if boat[0] + boat[-1] <= limit:
                boat.pop()
                boat.popleft()
            else:
                boat.popleft()
        else:
            boat.popleft()
        answer += 1
        
    return answer