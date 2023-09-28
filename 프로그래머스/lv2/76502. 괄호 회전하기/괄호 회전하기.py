from collections import deque

def solution(s):
    answer = 0
    s = deque(s)
    
    for i in range(len(s)):
        s.append(s.popleft())
        
        stack = []
        
        for item in s:
            if not len(stack):
                stack.append(item)
            else:
                if item == "]":
                    if stack[-1] == "[":
                        stack.pop()
                elif item == ")":
                    if stack[-1] == "(":
                        stack.pop()
                elif item == "}":
                    if stack[-1] == "{":
                        stack.pop()
                else:
                    stack.append(item)
            
        if not len(stack):
            answer += 1


    return answer