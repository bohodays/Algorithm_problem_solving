def solution(want, number, discount):
    answer = 0
    want_obj = {}
    
    for i in range(len(number)):
        want_obj[want[i]] = number[i]
    
    for i in range(len(discount) - 9):
        tmp_obj = {}
        discount_array = discount[i: i + 10]
        for item in discount_array:
            if item in tmp_obj:
                tmp_obj[item] += 1
            else:
                tmp_obj[item] = 1
        
        flag = False
        for item in want:
            if item not in tmp_obj:
                flag = True
                break
            else:
                if (want_obj[item] > tmp_obj[item]):
                    flag = True
                    break
        
        if not flag:
            answer += 1
    
    
    return answer