def solution(board, h, w):
    answer = 0
    
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    
    n = len(board)
    m = len(board[0])
    x, y = h, w
    
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]

        if 0 <= nx < n and 0 <= ny < m:
            if board[x][y] == board[nx][ny]:
                answer += 1
    
    return answer