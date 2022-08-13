# 2309 일곱 난쟁이

# 난쟁이들의 키를 담을 리스트 생성
h = []
for _ in range(9):
    h.append(int(input()))

# 범인들의 키를 담을 리스트 생성
c = []
for i in range(len(h)):
    test = sum(h) - h[i] - 100
    if test in h[i+1:]:
        del h[i]
        del h[h.index(test)]
        break
        
h.sort()

for i in h:
    print(i)
