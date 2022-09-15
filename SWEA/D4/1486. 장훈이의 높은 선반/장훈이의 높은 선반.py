# 1486 장훈이의 높은 선반
# 2022-09-15

def my_combination(arr, n):
    result = []

    if n == 0:
        return [[]]

    for i in range(len(arr)):
        elem = arr[i]
        for j in my_combination(arr[i + 1:], n - 1):
            result.append([elem] + j)

    return result

T = int(input())

for tc in range(1, T+1):
    N, B = map(int, input().split())
    listHeight = list(map(int, input().split())) 

    tmp = []
    for i in range(1, len(listHeight)+1):
        for j in my_combination(listHeight, i):
            if sum(j) >= B:
                tmp.append(sum(j)-B)

    print('#{} {}'.format(tc, min(tmp)))
