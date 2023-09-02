def solution(num, total):
    answer = []
    check = 1000
    while True:
        result = [i for i in range(check, check - num, -1)]
        if sum(result) == total:
            return result[::-1]
        # return result
        check -= 1
