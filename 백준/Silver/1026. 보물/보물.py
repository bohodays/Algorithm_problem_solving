# 1026 보물

N = int(input())

A = list(map(int, input().split()))
B = list(map(int, input().split()))
tmp_B = B[::]
# tmp_B = copy.deepcopy(B)

A.sort()
tmp_B.sort()

total = 0
while A:
    total += A[0] * tmp_B[-1]
    del A[0]
    del tmp_B[-1]

print(total)
