def solution(bandage, health, attacks):
    answer = 0
    heal_time, heal_per_second, add_heal = bandage
    max_health = health
    
    for i in range(len(attacks) - 1):
        current_time, current_damage = attacks[i]
        next_time, next_damage = attacks[i + 1]
        
        # 현재 공격에 대한 체력 감소 적용
        health -= current_damage

        # 공격에 의해 체력이 0이하이면 -1 반환
        if health <= 0: return -1

        # 다음 공격 전까지 체력 회복 적용
        # 공격 사이의 간격이 시전 시간 이상이라면 회복 시간 동안 체력을 모두 회복하고 추가로 체력을 회복한다.
        if (next_time - 1) - current_time >= heal_time:
            add_heal_count = ((next_time - 1) - current_time) // heal_time
            health += ((next_time - 1) - current_time) * heal_per_second + add_heal_count * add_heal 
        # 공격 사이의 간격이 시전 시간 미만이라면 간격 동안만 체력 회복
        else:
            health += ((next_time - 1) - current_time) * heal_per_second
        
        # 최대 체력이 넘지않도록 조정
        if health > max_health: health = max_health
     

    # 마지막 공격 적용
    last_time, last_damage = attacks[-1]
    health -= last_damage
    if health <= 0: return -1
    
    return health