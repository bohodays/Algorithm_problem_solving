def solution(dartResult):
    answer = []
    stack = []
    dartResult = list(dartResult)
    if dartResult[0] == "1" and dartResult[1] == "0":
        stack.append(int(dartResult.pop(0) + dartResult.pop(0)))
    else:
        stack.append(int(dartResult.pop(0)))
        
    
    for index, cmd in enumerate(dartResult):
        if cmd == "S":
            continue
        elif cmd == "D":
            stack[0] = stack[0]**2
        elif cmd == "T":
            stack[0] = stack[0]**3
        
        if cmd == "*":
            if len(answer):
                answer[-1] *= 2
            stack[0] *= 2
        elif cmd == "#":
            stack[0] *= -1
        
        if cmd.isdigit():
            answer.append(stack.pop())
            if cmd == "1" and dartResult[index + 1] == "0":
                stack.append(int(cmd + dartResult[index + 1]))
                dartResult.pop(0)
            else:
                stack.append(int(cmd))
                
    return sum(answer + stack)