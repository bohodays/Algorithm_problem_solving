function solution(answers) {
    const result = [0, 0, 0];
    let answer1 = [1, 2, 3, 4, 5];
    let answer2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    answers.forEach((answer, index) => {
        if (answer1[index % answer1.length] === answer) result[0] += 1;
        if (answer2[index % answer2.length] === answer) result[1] += 1;
        if (answer3[index % answer3.length] === answer) result[2] += 1;
    })
    
    const maxAnswer = Math.max(...result);
    const answer = [];
    result.forEach((item, i) => {
        if (item === maxAnswer) answer.push(i + 1) 
    })

    return answer;
}