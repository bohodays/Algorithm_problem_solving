#  숫자 배열 회전

def rotation(arr, N):
    tmp = []
    ans = []
    for i in range(N):
        for j in arr:
            tmp.insert(0, j[i])
        ans.append(tmp)
        tmp = []
    return ans

T = int(input())

for tc in range(1,T+1):
    nums = []

    N = int(input())
    for _ in range(N):
        nums.append(list(map(int,input().split())))

    ans_90 = rotation(nums, N)
    ans_180 = rotation(ans_90, N)
    ans_270 = rotation(ans_180, N)
    
    print('#{}'.format(tc))
    for m in range(N):
        for n in range(N):
            print(f'{ans_90[m][n]}', end = "")
        print(' ', end = "")
        for n in range(N):
            print(f'{ans_180[m][n]}', end = "")
        print(' ', end = "")
        for n in range(N):
            print(f'{ans_270[m][n]}', end = "")
        print(' ')