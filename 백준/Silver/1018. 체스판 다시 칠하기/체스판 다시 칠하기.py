M, N = map(int,input().split())

chess = []
for i in range(M):
    chess.append(list(input()))


def paint_chess_W(chess_list):
    cnt1 = 0
    for i in range(len(chess_list)):
        # 시작이 W인 경우 + 짝수 줄
        if i % 2 == 0:
            for j in range(0,8,2):
                if chess_list[i][j] == 'B':
                    cnt1 += 1
            for j in range(1,8,2):
                if chess_list[i][j] == 'W':
                    cnt1 += 1
        elif i % 2 == 1:
            for j in range(0,8,2):
                if chess_list[i][j] == 'W':
                    cnt1 += 1
            for j in range(1,8,2):
                if chess_list[i][j] == 'B':
                    cnt1 += 1
    return cnt1

def paint_chess_B(chess_list):
    cnt2 = 0
    for i in range(len(chess_list)):
        if i % 2 == 0:
            for j in range(0,8,2):
                if chess_list[i][j] == 'W':
                    cnt2 += 1
            for j in range(1,8,2):
                if chess_list[i][j] == 'B':
                    cnt2 += 1
        elif i % 2 == 1:
            for j in range(0,8,2):
                if chess_list[i][j] == 'B':
                    cnt2 += 1
            for j in range(1,8,2):
                if chess_list[i][j] == 'W':
                    cnt2 += 1
    return cnt2
        
        

ans = []
chess_check = []
for k in range(M-7):
    for j in range(N-7):
        for i in range(8):
            chess_check.append(chess[k+i][0+j : 8+j])
        ans.append(min(paint_chess_W(chess_check), paint_chess_B(chess_check)))
        chess_check = []

print(min(ans))



