# 2578 빙고

bingo = []
for _ in range(5):
    bingo.extend(list(map(int,input().split())))

check = []
for _ in range(5):
    check.extend(list(map(int,input().split())))

for idx,i in enumerate(check, start=1):
    bingo_cnt = 0
    bingo[bingo.index(i)] = -1

    # 세로 검사
    for j in range(5):
        cnt = 0
        for k in range(5):
            if bingo[j + 5*k] == -1:
                cnt += 1
        if cnt == 5:
            bingo_cnt += 1
    if bingo_cnt >= 3:
        print(idx)
        break

    # 가로 검사
    for j in range(0, 21, 5):
        cnt = 0
        for k in range(5):
            if bingo[j + k] == -1:
                cnt += 1
        if cnt == 5:
            bingo_cnt += 1
    if bingo_cnt >= 3:
        print(idx)
        break

    # 대각선 검사 (좌측상단에서 우측하단)
    cnt = 0
    for j in range(0, 25, 6):
        if bingo[j] == -1:
            cnt+=1
    if cnt == 5:
        bingo_cnt += 1
    if bingo_cnt >= 3:
        print(idx)
        break

    # 대각선 검사 (우측상단에서 좌측하단)
    cnt = 0
    for j in range(4, 21, 4):
        if bingo[j] == -1:
            cnt+=1
    if cnt == 5:
        bingo_cnt += 1
    if bingo_cnt >= 3:
        print(idx)
        break
    
