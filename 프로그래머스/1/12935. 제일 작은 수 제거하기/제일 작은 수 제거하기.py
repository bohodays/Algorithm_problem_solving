def solution(arr):
    min_value = min(arr)
    target = arr.index(min_value)
    arr.pop(target)
    return arr if len(arr) else [-1]