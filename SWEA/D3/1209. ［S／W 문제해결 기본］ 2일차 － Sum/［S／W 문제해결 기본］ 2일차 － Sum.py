# 1209 Sum
# 2022-08-10



# 최대값 구하는 함수를 만든다.
def maxV(arr):
    maxV = 0
    for i in arr:
        if maxV < i:
            maxV = i
    return maxV


for _ in range(1, 11):

    # 테스트케이스 번호를 입력받는다.
    tc = int(input())
    # 2차원 배열의 각 행 값을 입력받아 리스트 형태로 arr리스트에 저장한다. (2차원 리스트 생성)
    arr = [list(map(int,input().split())) for _ in range(100)]

    # 각 행, 열, 대각선의 합들을 넣을 ans 리스트를 생성한다.
    ans = []

    # 행 우선 순회를 하면서 각 행의 합을 구한다.
    for i in range(100):
        total = 0
        for j in range(100):
            total += arr[i][j]
        ans.append(total)
        
    
    # 열 우선 순회를 하면서 각 열의 합을 구한다.
    for i in range(100):
        total = 0
        for j in range(100):
            total += arr[j][i]
        ans.append(total)
    
    # 대각선의 합 (좌측상단에서 우측하단)
    total = 0
    for i in range(10):
        total += arr[i][i]
    ans.append(total)

    # 대각선의 합 (우측상단에서 좌측하단)
    total = 0
    for i in range(10):
        total += arr[i][(10-1)-i]

    # 정답을 출력한다.
    print('#{} {}'.format(tc, maxV(ans)))
