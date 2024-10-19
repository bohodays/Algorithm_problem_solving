function solution(spell, dic) {
    const checkValue = spell.length;
    let answer;
    dic.forEach((targetItem) => {
        let temp = 0;
        spell.forEach((s) => {
            if (targetItem.includes(s)) {
                temp += 1;
            }
        })
        if (temp === checkValue) answer = 1;
    })
    return answer ? 1 : 2;
}