def solution(elements):
    n = len(elements)
    num_list = set()
    
    for i in range(0, n):
        result = 0
        for j in range(i, i + n):
            result += elements[j % n]
            num_list.add(result)
    
    return len(num_list)