# 16953 A -> B

A, B = map(int, input().split())

cnt = 1
while True:
    if B % 2 == 0:
        B /= 2
    elif B % 10 == 1:
        B //= 10
    elif B % 2 == 1:
        print(-1)
        break
    cnt += 1

    if A == B:
        print(cnt)
        break
    elif A > B:
        print(-1)
        break