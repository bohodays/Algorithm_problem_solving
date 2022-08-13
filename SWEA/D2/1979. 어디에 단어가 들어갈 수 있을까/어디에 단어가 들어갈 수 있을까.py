T = int(input())

for i in range(1, T+1):

    N, K = map(int,input().split())
    num_list = []
    num_column = []
    ans = 0

    for j in range(N):
        num_list.append(list(map(int, input().split())))        # 숫자를 입력받아 이중리스트로 만듦.

    for k in range(N):      # 가로 확인
        result = 0
        for l in range(N):
            if num_list[k][l] == 1:
                result += 1
            if num_list[k][l] == 0 or l == N-1:
                if result == K:
                    ans += 1
                result = 0

        for m in range(N):      # 세로 확인
            if num_list[m][k] == 1:
                result += 1
            if num_list[m][k] == 0 or m == N-1:
                if result == K:
                    ans += 1
                result = 0

    print(f'#{i} {ans}')
    
