def solution(emergency):
    answer = [0 for _ in range(len(emergency))]
    sortedEmergency = sorted(emergency[:])
    
    rank = 1
    while len(sortedEmergency):
        check = sortedEmergency.pop()
        index = emergency.index(check)
        answer[index] = rank
        rank += 1
    return answer