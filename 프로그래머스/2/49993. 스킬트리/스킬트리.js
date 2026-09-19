function solution(skill, skill_trees) {
    let answer = 0;
    
    const convertSkillTrees = skill_trees.map((skills) => skills.split("").filter((item) => skill.includes(item)).join(""));
    convertSkillTrees.forEach((skillTree) => {
        if (skillTree === skill.slice(0, skillTree.length)) answer++;
    })
    
    return answer;
}