def solution(n, lost, reserve):
    answer = 0
    
    students = [1] * n
    
    for item in lost:
        students[item - 1] -= 1
    
    for item in reserve:
        students[item - 1] += 1
    
    for i in range(n):
        if students[i] == 0:
            # 왼쪽 확인
            if i - 1 >= 0 and students[i - 1] == 2:
                students[i - 1] = 1
                students[i] = 1
            # 오른쪽 확인
            elif i + 1 < n and students[i + 1] == 2:
                students[i + 1] = 1
                students[i] = 1
    
    for i in students:
        if i >= 1:
            answer += 1
    
    return answer