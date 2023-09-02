def solution(quiz):
    result = []
    
    for item in quiz:
        item = item.split()
        answer = int(item[0])
        for i in range(1, len(item)):
            if item[i] == "-":
                answer -= int(item[i + 1])
                i += 1
            elif item[i] == "+":
                answer += int(item[i + 1])
            elif item[i] == "=":
                if answer == int(item[i + 1]):
                    result.append("O")
                else:
                    result.append("X")
            
    return result