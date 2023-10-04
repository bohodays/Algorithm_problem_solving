def solution(citations):
    answer = 0
    
    for i in range(len(citations) + 1):
        max_h_index = []
        min_h_index = []
        
        for item in citations:
            if item >= i:
                max_h_index.append(item)
            else:
                min_h_index.append(item)
        
        if len(max_h_index) >= i and len(min_h_index) <= i:
            answer = i
            
    return answer