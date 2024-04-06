def solution(sizes):
    answer = 0
    
    width = []
    length = []
    
    for size in sizes:
        width.append(max(size))
        length.append(min(size))
    
    return max(width) * max(length)

