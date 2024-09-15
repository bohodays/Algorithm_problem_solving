def solution(arr, divisor):
    arr.sort()
    answer = []
    for num in arr:
        if num % divisor == 0:
            answer.append(num)
    return answer if len(answer) else [-1]