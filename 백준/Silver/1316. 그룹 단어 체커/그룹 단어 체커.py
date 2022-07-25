T = int(input())
cnt = 0

for _ in range(T):

    N = input()

    for i in range(len(N)-1):
        if N[i] != N[i+1]:
            new = N[i+1:]
            if N[i] in new:
                cnt -= 1
                break
    cnt += 1
print(cnt)