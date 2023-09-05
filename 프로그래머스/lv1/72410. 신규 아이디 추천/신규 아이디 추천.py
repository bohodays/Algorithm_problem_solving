def solution(new_id):
    answer = ''
    new_id = list(new_id)
    n = len(new_id)
    ref1 = 'abcdefghijklmnopqrstuvwxyz'
    ref2 = "-_."
    
    # 1단계
    for i in range(n):
        if new_id[i].isupper():
            new_id[i] = new_id[i].lower()
        
    # 2단계
    tmp_array = []
    for i in range(n):
        if new_id[i] not in ref1 and new_id[i] not in ref2 and not new_id[i].isdigit():
            continue
        tmp_array.append(new_id[i])
    new_id = tmp_array
    
    # 3단계
    tmp_array = []
    for i in new_id:
        if len(tmp_array):
            if tmp_array[-1] == ".":
                if i == ".":
                    continue
                else:
                    tmp_array.append(i)
            else:
                tmp_array.append(i)
        else:
            tmp_array.append(i)
    
    # 4단계
    if len(tmp_array):        
        if tmp_array[0] == ".":
            tmp_array.pop(0)
    if len(tmp_array):
        if tmp_array[-1] == ".":
            tmp_array.pop()
    
    # 5단계
    if not len(tmp_array):
        tmp_array.append("a")
    
    # 6단계
    if len(tmp_array) >= 16:
        tmp_array = tmp_array[0 : 15]
        if tmp_array[-1] == ".":
            tmp_array.pop()
        
    # 7단계
    if len(tmp_array) <= 2:
        target = tmp_array[-1]
        while len(tmp_array) < 3:
            tmp_array.append(target)
    
    return "".join(tmp_array)