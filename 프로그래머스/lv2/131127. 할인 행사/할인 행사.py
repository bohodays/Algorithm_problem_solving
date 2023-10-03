def solution(want, number, discount):
    answer = 0
    want_array = []
    n = len(want)

    for i in range(0, n):
        count = number[i]
        while count:
            want_array.append(want[i])
            count -= 1
    want_array.sort()
    
    for i in range(len(discount) - 9):
        check_array = sorted(discount[i : i + 10])
        if want_array == check_array:
            answer += 1
            
    return answer