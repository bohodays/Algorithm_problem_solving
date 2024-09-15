def solution(n):
    check_value = n**(1/2)
    for i in range(1, int(check_value) + 1):
        if check_value == i:
            return (i + 1)**2
    return -1