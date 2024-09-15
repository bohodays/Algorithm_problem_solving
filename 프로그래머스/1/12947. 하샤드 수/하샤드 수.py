def trans_f(number):
    sum_value = 0
    while number:
        sum_value += number % 10
        number //= 10
    return sum_value

def solution(x):
    if x % trans_f(x) == 0:
        return True
    return False
