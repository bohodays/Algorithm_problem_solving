def solution(s):
    count = 0;
    s = s.upper()
    
    for item in s:
        if (item == "P"):
            count += 1
        elif (item == "Y"):
            count -= 1
    
    return True if count == 0 else False;