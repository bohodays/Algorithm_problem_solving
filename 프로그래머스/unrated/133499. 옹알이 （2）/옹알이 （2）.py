def solution(babbling):
    answer = 0
    words = ["aya", "ye", "woo", "ma"]
    
    for item in babbling:
        flag = False
        for index, word in enumerate(words):
            item = item.replace(word, str(index))
            if str(index) + str(index) in item:
                flag = True
                break
        
        if not flag:
            if item.isdigit():
                answer += 1
            
    return answer