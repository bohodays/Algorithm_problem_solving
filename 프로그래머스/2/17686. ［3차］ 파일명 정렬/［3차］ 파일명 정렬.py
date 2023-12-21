def file_filter(file):
    HEAD = ""
    HEAD_flag = False
    NUMBER = ""
    NUMBER_flag = False
    TAIL = ""
    number_index = 0
    tail_index = 0
    
    for i in range(len(file)):
        if not HEAD_flag:
            if file[i].isdigit():
                HEAD_flag = True
            else:
                HEAD += file[i]
        
        if HEAD_flag and not NUMBER_flag:
            if file[i].isdigit():
                NUMBER += file[i]
            else:
                NUMBER_flag = True
        
        if HEAD_flag and NUMBER_flag:
            TAIL += file[i]
        
    return [HEAD, NUMBER, TAIL]

def solution(files):
    answer = []
    result = []
    for file in files:
        result.append(file_filter(file))
    
    result.sort(key = lambda x : [x[0].upper(), int(x[1])])
    
    for file in result:
        answer.append("".join(file))
    
    return answer