N, M = map(int, input().split())
numbers = list(map(int, input().split()))

sum_list = []
max_value = 0

while len(numbers) > 2:
    for i in range(1,len(numbers)):
        for j in numbers[i+1:]:
            if numbers[0] + numbers[i] + j > M:
                continue
            else:
                max_value = max(max_value, numbers[0] + numbers[i] + j)

    numbers.pop(0)

print(max_value)
