from collections import deque

def solution(s):
    answer = 0
    items = deque(list(s))
    
    
    for i in range(len(items)):
        items.rotate(-1)
        stack = []
        
        for i in range(len(items)):
            if not stack:
                stack.append(items[i])
            else:
                if items[i] == ")" and stack[-1] == "(":
                    stack.pop()
                elif items[i] == ']' and stack[-1] == '[':
                    stack.pop()
                elif items[i] == '}' and stack[-1] == '{':
                    stack.pop()
                else:
                    stack.append(items[i])
        if not stack:
            answer += 1
        

    return answer