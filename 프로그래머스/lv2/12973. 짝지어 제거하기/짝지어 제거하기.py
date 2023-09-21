def solution(s):
    stack = []
    
    for i in range(len(s)):
        if not len(stack):
            stack.append(s[i])
        else:
            if stack[-1] == s[i]:
                stack.pop()
            else:
                stack.append(s[i])

    if len(stack):
        return 0
    return 1
