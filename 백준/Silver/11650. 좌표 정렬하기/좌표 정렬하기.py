N = int(input())

num_list = []

for _ in range(N):
    num_list.append(list(map(int, input().split())))


num_list = sorted(num_list)

for i in num_list:
    print(*i)