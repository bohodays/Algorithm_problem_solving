def solution(s):
    answer = []
    s = s.split(" ")
    
    for item in s:
        if len(item):
            # 숫자가 아닌 경우
            if not item[0].isdigit():
                newItem = item[0].upper() + item[1:].lower()
                answer.append(newItem)
            else:
            # 숫자인 경우
                answer.append(item.lower())
        else:
            answer.append("")
    print(answer)
    return " ".join(answer)