def solution(word):
    answer = 0
    alphabet = ["A", "E", "I", "O", "U"]
    dictionary = []
    # dfs를 멈추기 위한 변수
    flag = False
    
    def dfs(check_word, word, dictionary):
        nonlocal flag
        # 해당 단어가 사전에 없으면 등록
        if check_word not in dictionary:
            dictionary.append(check_word)
        
        # 해당 단어가 목표 단어랑 같으면 flag를 True로 바꾸고 반환
        if check_word == word:
            flag = True
            return
        
        # 해당 단어가 길이가 5이면 반환
        if len(check_word) == 5:
            return
        
        for item in alphabet:
            # flag가 False이면 dfs 진행
            if not flag:
                dfs(check_word + item, word, dictionary)
    
    dfs("", word, dictionary)

    return len(dictionary) - 1