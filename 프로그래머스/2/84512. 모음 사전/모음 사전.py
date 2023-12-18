def solution(word):
    answer = 0
    alphabet = ["A", "E", "I", "O", "U"]
    dictionary = []
    limit = len(word)
    
    def dfs(check_word, word, dictionary):
        if check_word not in dictionary:
            dictionary.append(check_word)
        
        if check_word == word:
            return
        
        if len(check_word) == 5:
            return
        
        for item in alphabet:
            dfs(check_word + item, word, dictionary)
    
    dfs("", word, dictionary)

    return dictionary.index(word)