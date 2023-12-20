def solution(land):
    answer = 0

    # 이전 행의 자기 열 제외 max값 더하기
    for row in range(1, len(land)):
        for col in range(4):
            land[row][col] += max(land[row - 1][:col] + land[row - 1][col + 1:])
    
    return max(land[-1])