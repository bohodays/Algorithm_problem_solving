def solution(n, lost, reserve):
    answer = 0
    students = [1 for _ in range(n)]
    
    for i in lost:
        students[i - 1] -= 1
    
    for i in reserve:
        students[i - 1] += 1
        
    for i in range(n):
        if students[i] == 0:
            # 왼쪽 확인
            if 0 <= i - 1 and students[i - 1] == 2:
                students[i] = 1
                students[i - 1] -= 1
            # 오른쪽 확인    
            elif i + 1 < n and students[i + 1] == 2:
                students[i] = 1
                students[i + 1] -= 1
                
    return n - students.count(0)