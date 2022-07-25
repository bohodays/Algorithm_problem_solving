switch_num = int(input())
switch_status = list(map(int, input().split()))
stu_num = int(input())
switch_status.insert(0, 7)          # 경계 조건 설정
switch_status.append(7)         # 경계 조건 설정

for i in range(stu_num):
    A, B = map(int, input().split())

    if A == 1:          # 남학생인 경우
        for j in range(1, switch_num//B+1):
            if switch_status[B*j] == 0:
                switch_status[B*j] = 1
            elif switch_status[B*j] == 1:
                switch_status[B*j] = 0

    if A == 2:
        if switch_status[B] == 0:
            switch_status[B] = 1
        elif switch_status[B] == 1:
            switch_status[B] = 0
        
        for k in range(1, B):
            if switch_status[B-k] == 7 or switch_status[B+k] == 7:
                break

            elif switch_status[B-k] != switch_status[B+k]:
                break

            elif switch_status[B-k] == switch_status[B+k]:
                if switch_status[B-k] == 0:
                    switch_status[B-k] = switch_status[B+k] = 1
                elif switch_status[B-k] == 1:
                    switch_status[B-k] = switch_status[B+k] = 0

del switch_status[0]            # 경계 조건 해제
del switch_status[-1]           # 경계 조건 해제


if switch_num > 20:
    for n in range(0, switch_num+1, 20):
        print(*switch_status[n:n+20], sep=' ')
else:
    print(*switch_status, sep=' ')
