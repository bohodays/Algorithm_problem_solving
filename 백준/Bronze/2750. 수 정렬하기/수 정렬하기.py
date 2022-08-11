import sys

# 버블 정렬
def bubbleSort(arr):
    for i in range(len(arr)-1, 0, -1):
        for j in range(0, i):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr


# 선택 정렬
def selectionSort(arr):
    n = len(arr)
    for i in range((n-2) + 1):      # n-2까지 가야 된다. 마지막 요소는 확인할 필요 없음. (n-1이 마지막 요소)
        minidx = i                  # 구간의 맨 앞을 최소값이라고 가정.
        for j in range(i+1, N):     # 실제 최소값 인덱스 찾기
            if arr[minidx] > arr[j]:
                minidx = j
        arr[minidx], arr[i] = arr[i], arr[minidx]       # minidx자리와 최소값 자리를 바꾼다.
    return arr


# 삽입 정렬
def insertionSort(arr):
    for end in range(1, len(arr)):      # 자신과 자신의 앞 인덱스를 비교하기 때문에 1부터 시작
        for i in range(end, 0, -1):
            if arr[i - 1] > arr[i]:
                arr[i - 1], arr[i] = arr[i], arr[i - 1]
    return arr

N = int(input())

nums = []
for _ in range(N):
    nums.append(int(sys.stdin.readline()))

    # nums = bubbleSort(nums)
    nums = sorted(nums)

for i in nums:
    print(i)