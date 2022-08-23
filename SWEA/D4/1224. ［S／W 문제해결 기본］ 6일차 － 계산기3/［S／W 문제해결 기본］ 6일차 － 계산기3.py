# 1224 계산기3
# 2022-08-23




for tc in range(1, 11):

    N = int(input())

    infix = input()

    # 중위 표기법을 후위 표기법으로 변경
    tmp = ''
    stack = []
    for i in infix:
        # 여는 괄호이면 스택에 push
        if i == '(':
            stack.append(i)
        # 닫는 괄호이면 stack의 마지막 요소가 여는 괄호가 아닐 때까지 pop하여 tmp에 추가
        elif i ==')':
            while stack and stack[-1] != '(':
                tmp += stack.pop()
            # 스택에 있는 여는 괄호 제거    
            stack.pop()
        # '+'이면 stack의 마지막 요소가 여는 괄호가 아닐 때까지 pop하여 tmp에 추가
        elif i == '+':
            while stack and stack[-1] != '(':
                tmp += stack.pop()
            stack.append(i)
        # '*'이면 stack의 마지막 요소가 '*'가 아닐 때까지 pop하여 tmp에 추가
        elif i == '*':
            while stack and stack[-1] == '*':
                tmp += stack.pop()
            stack.append(i)
        else:
            tmp += i
    # 스택에 남아있는 연산자를 tmp에 추가
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