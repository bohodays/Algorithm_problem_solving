def solution(n, words):
    answer = []
    target = 1
    count = 1
    duplication_check = []
    
    for word in words:
        # 중복 단어인지 체크
        if word in duplication_check:
            return [target, count]   
        
        # 끝말잇기가 적용되었는지 체크
        if len(duplication_check) >= 1:
            if duplication_check[-1][-1] != word[0]:
                return [target, count]

        duplication_check.append(word)
        
        target += 1
        if target == n + 1:
            target = 1
            count += 1

    return [0, 0]