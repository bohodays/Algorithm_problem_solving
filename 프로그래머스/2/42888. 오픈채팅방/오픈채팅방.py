def solution(record):
    answer = []
    id_matching_nickname = {}
    messages = []
    
    for item in record:
        item = item.split()
        if len(item) == 3:
            user_act, user_id, user_nickname = item
        else:
            user_act, user_id = item
        
        if user_act == "Enter":
            message = "님이 들어왔습니다."
            id_matching_nickname[user_id] = user_nickname
        elif user_act == "Leave":
            message = "님이 나갔습니다."
        elif user_act == "Change":
            message = "님이 들어왔습니다."
            id_matching_nickname[user_id] = user_nickname 
            
        if user_act != "Change":
            messages.append([user_id, message])  
    
    for message in messages:
        answer.append(id_matching_nickname[message[0]] + message[1])

    return answer