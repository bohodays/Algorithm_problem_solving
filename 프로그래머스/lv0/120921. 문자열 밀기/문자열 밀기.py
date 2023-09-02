def solution(A, B):
    answer = 0
    
    A = list(A)
    B = list(B)
    
    if A == B:
        return 0
    
    for _ in range(len(A)):
        answer += 1
        A.insert(0, A.pop())
        if A == B:
            return answer
    
    if A == B:
        return answer
    return -1
