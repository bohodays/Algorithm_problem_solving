def isPrime(number):
    if number == 1: return False
    if number == 2: return True
    for i in range(2, int(number**(0.5)) + 1):
        if number % i == 0:
            return False
    return True

def solution(n, k):
    answer = 0
    
    # k진수 변환하기
    number = ''
    while n:
        l, m = divmod(n, k)
        number += str(m)
        n = l
    number = number[::-1].split("0")
    
    for num in number:
        if num and isPrime(int(num)):
            answer += 1

    return answer