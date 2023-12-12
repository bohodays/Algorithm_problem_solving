def solution(elements):
    answer = set()
    n = len(elements)
    
    for i in range(n):
        result = 0
        for j in range(i, i + n):
            result += elements[j % n]
            answer.add(result)
    
    return len(answer)