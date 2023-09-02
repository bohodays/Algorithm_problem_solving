def solution(a, b):
    answer = 0
    # 기약분수 만들기
    for i in range(2, min(a, b) + 1):
        if a % i == 0 and b % i == 0:
            a /= i
            b /= i
    print(a, b)
    # 유한소수 판별
    while b % 2 == 0:
        b /= 2
    while b % 5 == 0:
        b /= 5
    if b == 1:
        return 1
    return 2
