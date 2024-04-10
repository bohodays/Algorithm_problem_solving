def solution(board, h, w):
    answer = 0
    n = len(board)
    m = len(board[0])
    
    dx = [0, 0, 1, -1]
    dy = [1, -1, 0, 0]
    
    for i in range(4):
        nx = h + dx[i]
        ny = w + dy[i]
        if 0 <= nx < n and 0 <= ny < m:
            if board[h][w] == board[nx][ny]:
                answer += 1
    
    return answer