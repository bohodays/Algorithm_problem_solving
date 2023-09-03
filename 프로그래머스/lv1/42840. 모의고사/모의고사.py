def solution(answers):
    answer = [0, 0, 0]
    n = len(answers)
    answer1 = [1, 2, 3, 4, 5]
    answer2 = [2, 1, 2, 3, 2, 4, 2, 5]
    answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    for i in range(len(answers)):
        if answers[i] == answer1[i % 5]:
            answer[0] += 1
        if answers[i] == answer2[i% 8]:
            answer[1] += 1
        if answers[i] == answer3[i % 10]:
            answer[2] += 1
    
    maxValue = max(answer)
    result = [i + 1 for i in range(3) if answer[i] == maxValue]
    return result