def solution(s):
    answer = True
    
    stack = []
    
    for i in s:
        if not len(stack):
            stack.append(i)
        else:
            if i == ')' and stack[-1] == "(":
                stack.pop()
            else:
                stack.append(i)
                
    return True if not len(stack) else False