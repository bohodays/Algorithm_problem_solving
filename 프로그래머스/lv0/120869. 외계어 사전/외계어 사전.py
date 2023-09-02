def solution(spell, dic):
    count = 0
    checkLength = len(spell)
    
    for item in dic:
        count = 0
        for string in spell:
            if string in item:
                count += 1
        if count == checkLength:
            return 1
    
    return 2