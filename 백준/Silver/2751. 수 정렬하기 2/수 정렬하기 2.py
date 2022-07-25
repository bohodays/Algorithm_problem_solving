import sys

T = int(sys.stdin.readline())
num_list = []

for _ in range(T):
    num_list.append(int(sys.stdin.readline()))

num_list = sorted(num_list)

for i in num_list:
    print(i)
    