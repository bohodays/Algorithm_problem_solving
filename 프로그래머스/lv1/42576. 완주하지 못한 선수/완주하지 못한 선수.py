def solution(participant, completion):
    participant = sorted(participant)
    completion = sorted(completion)
    completion.append("")
    
    for i in range(len(participant)):
        if participant[i] != completion[i]:
            return participant[i]
