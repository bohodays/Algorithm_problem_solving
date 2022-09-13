# 1654 랜선 자르기

def divide(n):
    return n//mid

K, N = map(int, input().split())

lines = []
for _ in range(K):
    lines.append(int(input()))
tmp = lines[::]
start, end = 1, sum(lines)

while start <= end:
    mid = (start + end) // 2
    lines = list(map(divide, lines))
    check = sum(lines)
    lines = tmp[::]
    # 개수가 모자르면 나누는 값을 줄인다.
    if check < N:
        end = mid - 1
    # 개수가 남는다면 나누는 값을 크게 한다.
    elif check >= N:
        start = mid + 1

print(end)


