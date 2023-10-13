from itertools import permutations, combinations

def solution(k, dungeons):
    answer = -1
    result = list(permutations(dungeons, len(dungeons)))
    for items in result:
        tmp = k
        count = 0
        for item in items:
            min_energy, consume_energy = item[0], item[1]
            if (tmp >= min_energy):
                tmp -= consume_energy
                count += 1
        answer = max(answer, count)

    
    return answer