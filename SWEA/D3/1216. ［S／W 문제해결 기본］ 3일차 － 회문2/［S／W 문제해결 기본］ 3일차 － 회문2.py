# 1216 회문2
# 2022-08-16

for _ in range(1, 11):

    tc = int(input())

    words = []
    for _ in range(100):
        words.append(input())

    # 가로 검사
    a = 100
    maxV = 1
    while a > 0:
        for i in words:
            for j in range(100-a+1):
                tmp = i[j:j+a]
                if tmp == tmp[::-1]:
                    if a > maxV:
                        maxV = a
        a -= 1
    
    # 세로 검사
    a = 100
    while a > 0:
        for i in range(100):
            tmp1 = []
            for j in range(100):
                tmp1.append(words[j][i])
            
            for k in range(100-a+1):
                tmp2 = tmp1[k:k+a]
                if tmp2 == tmp2[::-1]:
                    if a > maxV:
                        maxV = a
        a -= 1

    print('#{} {}'.format(tc, maxV))