# 1234 비밀번호
# 2022-08-18


for tc in range(1, 11):

    N, words = input().split()
    words = list(words)
    stack = []

    for i in range(int(N)):
        if not stack:
            stack.append(words[i])
        else:
            if stack[-1] == words[i]:
                stack.pop()
            else:
                stack.append(words[i])
    
    ans = ''.join(stack)
    print('#{} {}'.format(tc, ans))