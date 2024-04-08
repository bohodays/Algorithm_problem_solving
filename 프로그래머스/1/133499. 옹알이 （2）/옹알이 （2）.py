def solution(babbling):
    answer = 0
    
    check = ["aya", "ye", "woo", "ma"]
    
    for word in babbling:
        flag = True
        for index, item in enumerate(check):
            word = word.replace(item, str(index))
            
            if str(index) * 2 in word:
                flag = False
                break
        
        if flag and word.isdigit(): 
            answer += 1

    return answer