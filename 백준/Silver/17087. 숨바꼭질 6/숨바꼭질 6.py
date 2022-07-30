import math
N, S = map(int, input().split())
A = list(map(int, input().split()))
ans = [abs(S-i) for i in A]
print(math.gcd(*ans))