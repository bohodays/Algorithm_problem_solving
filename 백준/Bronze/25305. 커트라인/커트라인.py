N, k = map(int,input().split())

score = list(map(int, input().split()))

for i in range(k):
    cut_line = score.pop(score.index(max(score)))

print(cut_line)
