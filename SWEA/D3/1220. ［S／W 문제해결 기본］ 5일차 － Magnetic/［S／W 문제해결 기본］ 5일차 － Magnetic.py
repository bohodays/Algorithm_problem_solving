# 1220 Magnetic
# 2022-08-19



for tc in range(1, 11):

    N = int(input())

    table = []
    for _ in range(N):
        table.append(list(map(int, input().split())))

    ans = 0

    for i in range(N):
        stack = []
        for j in range(N):
            if not stack and table[j][i] == 1:
                stack.append(table[j][i])
            elif stack and table[j][i] == 2:
                ans += 1
                stack.pop()
    print('#{} {}'.format(tc, ans))