# 1966 숫자를 정렬하자
# 2022-08-11

# 선택 정렬 함수
def selectionSort(arr):
    for i in range(len(arr)-1):
        minIdx = i
        for j in range(i+1, len(arr)):
            if arr[minIdx] > arr[j]:
                minIdx = j
        arr[i], arr[minIdx] = arr[minIdx], arr[i]
    return arr

T = int(input())

for tc in range(1, T+1):

    N = int(input())
    arr = list(map(int, input().split()))

    arr = selectionSort(arr)

    print('#{}'.format(tc), *arr)