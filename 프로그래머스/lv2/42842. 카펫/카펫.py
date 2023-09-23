def solution(brown, yellow):
    answer = []
    
    for i in range(1, int(yellow**0.5) + 1):
        width = yellow / i
        height = i
        
        result = width * 2 + height * 2 + 4
        if brown == result:
            return [width + 2, height + 2]
