def solution(players, callings):  
    name_obj = {}
    rank_obj = {}
    
    for idx, name in enumerate(players):
        name_obj[name] = idx
        rank_obj[idx] = name
        
    for call in callings:
        call_rank = name_obj[call] # 3
        call_name = rank_obj[call_rank] # kai
        prev_rank = name_obj[call] - 1 # 2
        prev_name = rank_obj[prev_rank] # poe
        
        name_obj[call_name] = prev_rank
        name_obj[prev_name] = call_rank
        
        rank_obj[prev_rank] = call_name
        rank_obj[call_rank] = prev_name

    return [rank_obj[i] for i in range(0, len(players))]