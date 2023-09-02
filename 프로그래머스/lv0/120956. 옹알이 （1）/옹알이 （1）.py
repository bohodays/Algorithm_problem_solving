def solution(babbling):
    answer = 0
    my_word = ["aya", "ye", "woo", "ma"]
    
    for check in babbling:
        for word in my_word:
            check = check.replace(word, "1", 1)
            print(check)
        if check.isdigit():
            answer += 1
    return answer