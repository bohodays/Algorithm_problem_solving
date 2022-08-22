# 1223 계산기2
# 2022-08-22

for tc in range(1, 11):

    N = int(input())

    infix = input()

    # 중위 표기법을 후위 표기법으로 바꾼다.
    tmp = ''
    stack = []
    for i in infix:
        # i가 '+'라면
        if i == '+':
            # stack의 모든 연산자를 pop하여 tmp에 더한다.
            while stack:
                tmp += stack.pop()
            stack.append(i)
        #i가 '*'라면
        elif i == '*':
            # '+'가 나올 때까지 stack을 pop하여 tmp에 더한다.
            while stack and stack[-1] == '*':
                tmp += stack.pop()
            stack.append(i)
        else:
            tmp += i
    # 스택에 남아있는 연산자를 tmp에 더한다.
    while stack:
        tmp += stack.pop()

    # 후위 표기법을 계산한다.
    stack = []
    for i in tmp:
        if i == '+' or i == '*':
            a = int(stack.pop())
            b = int(stack.pop())
            if i == '+':
                stack.append(b + a)
            elif i == '*':
                stack.append(b * a)
        else:
            stack.append(i)

    print('#{} {}'.format(tc, stack[-1]))



    
