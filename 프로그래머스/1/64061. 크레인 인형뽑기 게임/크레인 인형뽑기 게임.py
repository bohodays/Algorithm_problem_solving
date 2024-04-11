def solution(board, moves):
    answer = 0
    n = len(board)
    m = len(board[0])
    save_item = [] # 아이템을 저장할 배열 생성
    
    for move in moves:
        for i in range(n):
            target = board[i][move - 1]
            if target != 0:
                # 아이템을 저장하는 배열에 아이템이 없다면 append
                if len(save_item) == 0:
                    save_item.append(target)
                else:
                    # 같은 아이템이 배열에 들어오면 터트리기
                    if save_item[-1] == target:
                        save_item.pop()
                        answer += 2
                    # 다른 아이템이 배열에 들어오면 저장하기
                    else:
                        save_item.append(target)
                board[i][move - 1] = 0
                break
                
    return answer