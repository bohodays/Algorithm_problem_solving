def solution(array, commands):
    answer = []
    for cmd in commands:
        i, j, k = cmd
        newArray = sorted(array[i - 1 : j])
        answer.append(newArray[k - 1])
        
    return answer