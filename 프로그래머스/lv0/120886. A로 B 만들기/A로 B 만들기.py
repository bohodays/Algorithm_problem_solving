def solution(before, after):
    before = sorted(list(before))
    after = sorted(list(after))
    
    if before == after:
        return 1
    return 0
