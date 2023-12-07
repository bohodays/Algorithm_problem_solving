def solution(s):
    answer = True
    s = list(s)
    
    result = []
    
    for item in s:
        # 배열이 비어있으면 삽입
        if not result:
            result.append(item)
        else:
            if item == ")" and result[-1] == "(":
                result.pop()
            else:
                result.append(item)
                
    return False if result else True