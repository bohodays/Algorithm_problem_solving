def solution(keyinput, board):
    answer = [[0, 0]]
    boundaryX = board[0] // 2
    boundaryY = board[1] // 2
    
    for cmd in keyinput:
        x, y = answer.pop()
        if cmd == "up":
            nx, ny = x, y + 1
        elif cmd == "down":
            nx, ny = x, y - 1
        elif cmd == "left":
            nx, ny = x - 1, y
        else:
            nx, ny = x + 1, y
        if -boundaryX <= nx <= boundaryX and -boundaryY <= ny <= boundaryY:
            answer.append([nx, ny])
        else:
            answer.append([x, y])
        print(answer, boundaryX)
    return answer[0]