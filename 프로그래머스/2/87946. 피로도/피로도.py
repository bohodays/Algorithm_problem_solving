from itertools import permutations

def solution(k, dungeons):
    dungeons = list(permutations(dungeons, len(dungeons)))
    
    answer = 0
    for dungeon in dungeons:
        current_k = k
        result = 0
        for item in dungeon:
            need_energy, consume_energy = item
            if current_k >= need_energy:
                current_k -= consume_energy
                result += 1
        answer = max(answer, result)
        
    return answer