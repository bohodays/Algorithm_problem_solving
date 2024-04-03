def solution(seoul):
    answer = 0
    
    for i, name in enumerate(seoul):
        if name == "Kim":
            answer = i
            break
    
    return f'김서방은 {answer}에 있다'