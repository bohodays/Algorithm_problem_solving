

function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    
    let answer = 0;
    for (let i = 0; i < babbling.length; i++) {
        let flag = true;
        let targetItem = babbling[i];
        for (const word of words) {
            if (targetItem.includes(word.repeat(2))) {
                flag = false;
                break;
            }
        }
        
        if (flag) {
            words.forEach((word, index) => {
                targetItem = targetItem.replaceAll(word, index);
            })
            if (!isNaN(targetItem)) answer++;

        }
    }
    
    return answer;
}