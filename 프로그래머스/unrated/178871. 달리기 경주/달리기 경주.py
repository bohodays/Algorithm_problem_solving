def solution(players, callings):
    obj = {}
    n = len(players)
    
    for idx, player in enumerate(players):
        obj[player] = idx
    
    for call in callings:
        now = obj[call] # 3
        prev = now - 1 # 2
        
        players[now], players[prev] = players[prev], players[now]
        
        obj[call] -= 1
        obj[players[now]] += 1
    
    return players