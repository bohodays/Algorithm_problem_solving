function solution(skill, skill_trees) {
    let answer = 0;
    const isCorrect = skill.length;
    
    for (let i = 0; i < skill_trees.length; i++) {
        const currentSkillTree = skill_trees[i];
        let result = 0;
        let flag = true;
        
        for (let j = 0; j < currentSkillTree.length; j++) {
            if (skill.includes(currentSkillTree[j])) {
                if (currentSkillTree[j] === skill[result]) {
                    result++;
                } else {
                    flag = false;
                    break;
                }
            }
        }
        
        if (result === isCorrect || flag) answer++;
    }
    
    return answer;
}