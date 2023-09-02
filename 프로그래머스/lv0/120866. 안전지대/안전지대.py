def solution(board):
    answer = 0
    n = len(board)
    
    target = []
    for i in range(0, n):
        for j in range(0, n):
            if board[i][j] == 1:
               target.append([i, j]) 

    direction = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]]
        
    for item in target:
        x, y = item
        
        for d in direction:
            nx = x + d[0]
            ny = y + d[1]
            if 0 <= nx < n and 0 <= ny < n:
                board[nx][ny] = 1
    
    for i in range(0, n):
        for j in range(0, n):
            if board[i][j] == 0:
                answer += 1
    return answer