# 1265 달란트2
# 2022-09-13

T = int(input())

for tc in range(1, T+1):

    N, P = map(int, input().split())

    # N = 30, P = 9
    if N % P == 0:
        ans = (N // P)**P
    else:
        # (N % P) = 3
        ans = ((N // P)+1)**(N % P) * (N // P)**(P - (N%P))
    
    # print(f'#{tc} {ans}')
    print('#{} {}'.format(tc, ans))

