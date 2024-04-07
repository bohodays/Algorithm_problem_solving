import itertools

def solution(numbers):
    answer = []
    
    num_list = list(itertools.combinations(numbers, 2))
    
    for num in num_list:
        if sum(num) not in answer:
            answer.append(sum(num))
            
    answer.sort()
    
    return answer