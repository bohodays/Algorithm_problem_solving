function solution(bandage, health, attacks) {
    let answer = 0;
    let currentHealth = health;
    
    for (let i = 0; i < attacks.length - 1; i++) {
        const [currentAttackTime, currentAttackDamage] = attacks[i];
        const [nextAttackTime, nextAttackDamage] = attacks[i + 1];
        
        // 현재 공격 데미지 적용
        currentHealth -= currentAttackDamage;
        
        // 캐릭터의 체력이 0 이하인지 확인
        if (currentHealth < 1) return -1;
        
        // 다음 공격 전까지 체력 회복
        const delay = nextAttackTime - (currentAttackTime + 1);
        currentHealth += (parseInt(delay / bandage[0]) * bandage[2]) + (delay * bandage[1]);
        if (currentHealth > health) currentHealth = health;
    }
    
    // 마지막 공격 계산
    currentHealth -= attacks[attacks.length - 1][1];
    
    return currentHealth < 1 ? -1 : currentHealth;
}