# 14888 연산자 끼워넣기

from copy import deepcopy
from itertools import permutations
from collections import deque
import sys
input = sys.stdin.readline

N = int(input())
tmpNums = deque(map(int, input().split()))
# 0: 더하기, 1: 빼기, 2: 곱하기, 3: 나누기
operators = list(map(int, input().split()))

tmp = []
for idx, i in enumerate(operators):
    # 연산자의 개수가 0이 아니면 연산자 개수만큼 인덱스 추가
    if i:
        tmp = tmp + [idx] * i

operatorsList = list(permutations(tmp, len(tmp)))    

ans = []
for operators in operatorsList:
    nums = deepcopy(tmpNums)
    for operator in operators:
        num1 = nums.popleft()
        num2 = nums.popleft()
        # 연산자가 더하기인 경우
        if operator == 0:
            tmp = num1 + num2
        # 연산자가 빼기인 경우
        elif operator == 1:
            tmp = num1 - num2
        elif operator == 2:
            tmp = num1 * num2
        else:
            if num1 < 0:
                tmp = -((-num1) // num2)
            else:
                tmp = num1 // num2
        nums.appendleft(tmp)
    ans.append(nums[0])
print(max(ans))
print(min(ans))

