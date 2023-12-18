def solution(word):
    answer = 0
    alphabet = ["A", "E", "I", "O", "U"]
    dictionary = []
    flag = False
    
    def dfs(check_word, word, dictionary):
        nonlocal flag
        if check_word not in dictionary:
            dictionary.append(check_word)
        
        if check_word == word:
            flag = True
            return
        
        if len(check_word) == 5:
            return
        
        for item in alphabet:
            if not flag:
                dfs(check_word + item, word, dictionary)
    
    dfs("", word, dictionary)

    return dictionary.index(word)