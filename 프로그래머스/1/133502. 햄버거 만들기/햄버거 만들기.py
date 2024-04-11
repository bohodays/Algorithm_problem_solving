def solution(ingredient):
    answer = 0
    
    stack = []
    for item in ingredient:
        if len(stack) < 3:
            stack.append(item)
        else:
            if item == 1:
                if stack[-1] == 3 and stack[-2] == 2 and stack[-3] == 1:
                    stack.pop()
                    stack.pop()
                    stack.pop()
                    answer += 1
                else:
                    stack.append(item)
            else:
                stack.append(item)
                
    return answer