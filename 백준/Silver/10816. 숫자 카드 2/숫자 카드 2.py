from collections import Counter

N = int(input())
cards = list(map(int, input().split()))
M = int(input())
check = list(map(int, input().split()))

count = Counter(cards)
# Counter({10: 3, 3: 2, -10: 2, 6: 1, 2: 1, 7: 1})

for i in range(len(check)):
    if check[i] in count:
        print(count[check[i]], end=' ')
    else:
        print(0, end=' ')