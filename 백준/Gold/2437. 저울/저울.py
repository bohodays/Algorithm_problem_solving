# 2437 저울

n = int(input())
weight = list(map(int, input().split()))
weight.sort(reverse=True)

ans = 1
while weight:
    tmp = weight.pop()
    if ans < tmp:
        print(ans)
        break
    else:
        ans += tmp
else:
    print(ans)

