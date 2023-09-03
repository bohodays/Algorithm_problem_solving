def solution(food):
    answer1 = ''
    for index, item in enumerate(food[1:]):
        if item > 1:
            answer1 += str(index + 1) * (item // 2)
    return answer1 + "0" + answer1[::-1]