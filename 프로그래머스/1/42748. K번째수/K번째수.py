def solution(array, commands):
    answer = []
    
    for cmd in commands:
        [i, j, k] = cmd
        tmp = array[i - 1 : j]
        tmp.sort()
        answer.append(tmp[k - 1])
    
    return answer