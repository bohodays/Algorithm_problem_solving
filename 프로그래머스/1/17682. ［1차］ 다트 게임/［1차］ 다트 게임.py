def solution(dartResult):
    answer = 0
    
    stack = []
    
    for idx, item in enumerate(dartResult):
        if item.isdigit():
            if item == "0" and len(stack) >= 1 and stack[-1] == 1:
                stack.pop()
                stack.append(10)
            else:
                stack.append(int(item))
        else:
            if item == "D":
                stack[-1] = stack[-1]**2
            elif item == "T":
                stack[-1] = stack[-1]**3
            elif item == "*":
                stack[-1] *= 2
                if len(stack) >= 2:
                    stack[-2] *= 2
            elif item == "#":
                stack[-1] *= -1
    
    return sum(stack)