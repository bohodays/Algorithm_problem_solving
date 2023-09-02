def solution(my_string):
    my_string = my_string.split()
    answer = int(my_string.pop(0))
    stack = []
    
    for cmd in my_string:
        if not cmd.isdigit():
            stack.append(cmd)
        else:
            check = stack.pop()
            if check == "+":
                answer += int(cmd)
            else:
                answer -= int(cmd)
        
    return answer