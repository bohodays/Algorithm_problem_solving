def solution(new_id):
    answer = ''
    
    # 1단계
    new_id = new_id.lower()
    
    # 2단계
    tmp = ""
    target = ["-", "_", "."]
    for string in new_id:
        if string.isalpha():
            tmp += string
        elif string.isdigit():
            tmp += string
        elif string in target:
            tmp += string
    new_id = tmp
    
    # 3단계
    tmp = ""
    for string in new_id:
        if not len(tmp):
            tmp += string
        else:
            if tmp[-1] == "." and string == ".":
                continue
            else:
                tmp += string
    new_id = tmp
    
    # 4단계
    if len(new_id):
        if new_id[0] == ".":
            new_id = new_id[1:]
    if len(new_id):
        if new_id[-1] == ".":
            new_id = new_id[0:len(new_id) - 1]
    
    # 5단계
    if len(new_id) == 0:
        new_id += "a"
    
    # 6단계
    if len(new_id) >= 16:
        new_id = new_id[0:15]
        if new_id[-1] == ".":
            new_id = new_id[0:len(new_id) - 1]
    
    # 7단계
    if len(new_id) <= 2:
        new_id += new_id[-1] * (3 - len(new_id))
                
    
    return new_id