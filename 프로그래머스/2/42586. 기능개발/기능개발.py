def solution(progresses, speeds):
    answer = []
    
    while progresses:
        # 각 작업의 진행 상태 업데이트
        for i in range(len(progresses)):
            progresses[i] += speeds[i]
        
        count = 0
        # 가장 앞에 있는 작업이 100% 이상 완료된 경우 처리
        while progresses and progresses[0] >= 100:
            progresses.pop(0)
            speeds.pop(0)
            count += 1
        
        if count:
            answer.append(count)
    
    return answer