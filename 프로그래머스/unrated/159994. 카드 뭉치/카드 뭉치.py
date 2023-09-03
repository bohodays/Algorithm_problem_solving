def solution(cards1, cards2, goal):
    answer = ''
    result = []
    cards1.append(" ")
    cards2.append(" ")
    
    while True:
        if cards1[0] == goal[0]:
            cards1.pop(0)
            goal.pop(0)
        elif cards2[0] == goal[0]:
            cards2.pop(0)
            goal.pop(0)
        elif cards1[0] != goal[0] and cards2[0] != goal[0]:
            return "No"
        
        if not len(goal):
            return "Yes"
    return "Yes"