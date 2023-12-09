def solution(s):
    stack = []
    
    for i in range(len(s)):
        # 스택이 비어있으면 채우기
        if not stack:
            stack.append(s[i])
        else:
            if stack[-1] == s[i]:
                stack.pop()
            else:
                stack.append(s[i])
        
    return 1 if not stack else 0