from collections import deque

def solution(prices):
    queue = deque(prices)
    answer = []
    
    while queue:
        current_price = queue.popleft()
        
        time = 0
        for item in queue:
            time += 1
            if current_price > item:
                break
        answer.append(time)
        
    return answer