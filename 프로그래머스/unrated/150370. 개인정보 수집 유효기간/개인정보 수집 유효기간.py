def solution(today, terms, privacies):
    answer = []
    obj = {}
    now_year, now_month, now_day = list(map(int, today.split(".")))
    
    for item in terms:
        item = item.split(" ")
        obj[item[0]] = int(item[1])
        
    for index, item in enumerate(privacies):
        day, type = item.split(" ")
        item_year, item_month, item_day = list(map(int, day.split(".")))
        
        item_month += obj[type]
        # 달이 바뀌는 경우
        if item_month > 12:
            while item_month > 12:
                item_year += 1
                item_month -= 12
        
        # 하루 감소시키기
        item_day -= 1
        if item_day == 0:
            item_month -= 1
            item_day = 28
            if item_month == 0:
                item_month = 12
                item_year -= 1
        
        if now_year > item_year:
            answer.append(index + 1)
        elif now_year == item_year:
            if now_month > item_month:
                answer.append(index + 1)
            elif now_month == item_month:
                if now_day > item_day:
                    answer.append(index + 1)
        # print(now_year, now_month, now_day, item_year, item_month, item_day)
    return answer