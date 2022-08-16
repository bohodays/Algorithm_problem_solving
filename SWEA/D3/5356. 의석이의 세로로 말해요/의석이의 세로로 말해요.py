# 5356 의석이의 세로로 말해요
# 2022-08-16

T = int(input())

for tc in range(1, T+1):

    words = []
    maxlen = 0
    for _ in range(5):
        tmp = list(input())
        if maxlen < len(tmp):
            maxlen = len(tmp)
        words.append(tmp)
        
    print('#{} '.format(tc), end='')
    for _ in range(maxlen):
        for i in words:
            if len(i) != 0:
                print(i[0], end='')
                del i[0]
            else:
                continue
    print()


