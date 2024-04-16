def solution(today, terms, privacies):
    answer = []
    terms_obj = {}
    year = 12 * 28
    now_year, now_month, now_day = list(map(int, today.split(".")))
    today_days = now_year * year + now_month * 28 + now_day
    
    for term in terms:
        type, time = term.split(" ")
        terms_obj[type] = int(time)
    
    for index, item in enumerate(privacies):
        date, type = item.split(" ")
        item_year, item_month, item_day = list(map(int, date.split(".")))
        target_date = item_year * year + (item_month + terms_obj[type]) * 28 + (item_day - 1)
        
        if today_days > target_date:
            answer.append(index + 1)
            
    return answer