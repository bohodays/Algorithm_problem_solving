def solution(n):
    answer = 1
    count = 1
    
    while count < n:
        count += 1
        answer += 1
        
        # 3의 배수인 경우
        while answer % 3 == 0:
            answer += 1
        # 숫자 3을 사용하는 경우
        while "3" in str(answer):
            answer += 1
        # 3의 배수인 경우
        while answer % 3 == 0:
            answer += 1
        
        print(count,answer)
    print(count,answer, 1)
    return answer