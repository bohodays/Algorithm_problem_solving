from collections import deque

def solution(progresses, speeds):
    answer = []
    progresses = deque(progresses)
    speeds = deque(speeds)
    
    while progresses:
        n = len(progresses)
        
        for i in range(n):
            progresses[i] += speeds[i]
            
        result = 0
        while progresses and progresses[0] >= 100:
            result += 1
            progresses.popleft()
            speeds.popleft()
        
        if result:
            answer.append(result)
    
    return answer