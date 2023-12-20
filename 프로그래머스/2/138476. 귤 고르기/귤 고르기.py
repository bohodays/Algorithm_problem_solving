def solution(k, tangerine):
    answer = 0
    # 귤의 최대크기에 맞게 0으로 초기화한 배열 생성
    num_array = [0] * (max(tangerine) + 1)
    
    # 인덱스에 맞게 귤의 개수 세기
    for i in range(len(tangerine)):
        num_array[tangerine[i]] += 1
    
    # 정렬하기
    num_array.sort()
    index = len(num_array) - 1
    
    # k에서 같은 크기가 많은 순으로 빼면서 k가 0보다 작으면 answer 반환
    while True:
        k -= num_array[index]
        answer += 1
        index -= 1
        
        if k <= 0:
            return answer