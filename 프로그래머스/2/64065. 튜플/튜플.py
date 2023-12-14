def solution(s):
    answer = []
    s = s[1:len(s)-2].replace("{", "").split("},")
    s = sorted(s, key = lambda x : len(x))
    
    for items in s:
        items = items.split(",")
        for item in items:
            if (int(item) not in answer):
                answer.append(int(item))

    return answer