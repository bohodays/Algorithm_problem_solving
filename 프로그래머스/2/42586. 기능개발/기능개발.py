from collections import deque

def solution(progresses, speeds):
    answer = []
    queue = deque(progresses)
    
    while queue:
        n = len(speeds)
        count = 0
        
        for i in range(n):
            queue[i] += speeds[i]
        
        while queue and queue[0] >= 100:
            queue.popleft()
            speeds.pop(0)
            count += 1
            
        if count:
            answer.append(count)
            
    return answer