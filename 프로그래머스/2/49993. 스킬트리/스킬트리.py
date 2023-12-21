from collections import deque

def solution(skill, skill_trees):
    answer = 0
    
    for skill_tree in skill_trees:
        skill_tree = deque(skill_tree)
        
        skill_level = 0
        flag = True
        for skill_set in skill_tree:
            if skill_set in skill:
                if skill[skill_level] == skill_set:
                    skill_level += 1
                else:
                    flag = False
                    break
        if flag:
            answer += 1
    
    return answer