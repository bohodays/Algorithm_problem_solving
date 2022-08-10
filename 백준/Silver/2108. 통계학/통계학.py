import math
import sys
from collections import Counter

def roundUp(num):
    if num >= 0:
        return int(num) + 1 if (num - int(num)) >= 0.5 else int(num)
    else:
        return int(num) - 1 if (abs(num) - abs(int(num))) >= 0.5 else int(num)


N = int(input())

numbers = []
for _ in range(N):
    numbers.append(int(sys.stdin.readline()))

# 산술평균
print(int(roundUp(sum(numbers)/len(numbers))))

# 중앙값
print(sorted(numbers)[math.floor(len(numbers)/2)])

# 최빈값
def modefinder(numbers):
    c = Counter(numbers)
    order = c.most_common()
    maximum = order[0][1]

    modes = []
    for num in order:
        if num[1] == maximum:
            modes.append(num[0])

    if len(modes) != 1:
        modes = sorted(modes)
        return modes[1]
    else:
        return modes[0]

print(modefinder(numbers))

# 범위
print(max(numbers) - min(numbers))

