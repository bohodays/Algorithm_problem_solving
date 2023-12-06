def solution(s):
    s = list(map(int, s.split(" ")))
    min_value = min(s)
    max_value = max(s)
    return f'{min_value} {max_value}'