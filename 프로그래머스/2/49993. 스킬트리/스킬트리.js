function solution(skill, skill_trees) {
    let answer = 0;
    
    for (const skillTree of skill_trees) {
        let flag = true;
        let skillLevel = 0;
        
        for (const skillSet of skillTree) {
            if (skill.includes(skillSet)) {
                if (skill[skillLevel] === skillSet) {
                    skillLevel++;
                } else {
                    flag = false;
                    break;
                }
            }
        }
        if (flag) answer++;
    }
    
    return answer;
}