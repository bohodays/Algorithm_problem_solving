# 9489 고대 유적
# 2022-08-12


# 최대값을 구하는 함수를 만든다.
def maxV(arr):
    maxV = 0
    for i in arr:
        if maxV < i:
            maxV = i
    return maxV

T = int(input())

for tc in range(1, T+1):

    N, M = map(int, input().split())


    nums = []
    for _ in range(N):
        nums.append(list(map(int, input().split())))      # 숫자를 입력받아 이중리스트로 만듦. (땅속 구조)

    ans = []
    for i in range(N):
        result = 0
        for j in range(M):          
            if nums[i][j] == 1:    
                result += 1
            elif nums[i][j] == 0:             
                ans.append(result)
                result = 0
        ans.append(result)               

    for i in range(M):
        result = 0
        for j in range(N):          
            if nums[j][i] == 1:    
                result += 1
            elif nums[j][i] == 0:             
                ans.append(result)
                result = 0
        ans.append(result)               
                

    print('#{} {}'.format(tc, maxV(ans)))
