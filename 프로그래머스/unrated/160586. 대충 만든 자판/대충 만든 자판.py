def solution(keymap, targets):
    answer = []
    for target in targets:
        sumValue = 0
        for string in target:
            minValue = 1000
            for key in keymap:
                if key.find(string) != -1:
                    minValue = min(minValue, key.find(string) + 1)
            sumValue += minValue
        if sumValue >= 1000:
            answer.append(-1)
        else:
            answer.append(sumValue)
    return answer