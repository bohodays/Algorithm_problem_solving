def solution(cards1, cards2, goal):
    n = len(goal)
    for i in range(n):
        if len(cards1) and cards1[0] == goal[0]:
            cards1.pop(0)
            goal.pop(0)
        elif len(cards2) and cards2[0] == goal[0]:
            cards2.pop(0)
            goal.pop(0)
    
    if not len(goal):
        return "Yes"
    else:
        return "No"
    