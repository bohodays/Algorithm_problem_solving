from collections import deque

def solution(arr):
    queue = deque(arr)
    answer = [queue.popleft()]
    
    while queue:
        item = queue.popleft()
        if answer[-1] != item:
            answer.append(item)
            
    return answer