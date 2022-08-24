# 1225 암호생성기
# 2022-08-24

for _ in range(10):

    tc = int(input())

    nums = list(map(int, input().split()))

    flag = True
    while flag:
        for i in range(1,6):
            tmp = nums.pop(0)
            if tmp - i <= 0:
                nums.append(0)
                flag = False
                break
            else:
                nums.append(tmp - i)
    
    print('#{}'.format(tc), *nums)
    
