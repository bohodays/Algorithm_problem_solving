def solution(ingredient):
    answer = 0
    stack = []
    
    for item in ingredient:
        if not len(stack):
            stack.append(item)
        else:
            if len(stack) >= 3:
                if stack[-3] == 1 and stack[-2] == 2 and stack[-1] == 3 and item == 1:
                    answer += 1
                    stack.pop()
                    stack.pop()
                    stack.pop()
                    continue
            stack.append(item)


    return answer