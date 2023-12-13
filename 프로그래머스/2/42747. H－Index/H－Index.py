def solution(citations):
    answer = 0
    maxValue = max(citations) + 1
    
    for i in range(maxValue):
        gt = []
        lt = []
        for item in citations:
            if item >= i:
                gt.append(item)
            else:
                lt.append(item)

        if len(gt) >= i and len(lt) <= i:
            answer = i
        
    return answer