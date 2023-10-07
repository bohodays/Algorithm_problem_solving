def solution(s):
    s = s[1:len(s)-1].replace("{", "").split("},")
    s[len(s) - 1] = s[len(s) - 1].replace("}", "")
    s_array = []
    for items in s:
        items = list(map(int, items.split(",")))
        s_array.append(items)
    
    answer = []
    s_array = sorted(s_array, key = lambda x : len(x))
    
    for items in s_array:
        for item in items:
            if item not in answer:
                answer.append(item)

    return answer