function solution(answers) {
    const answer = [0, 0, 0];
    
    const person1 = [1, 2, 3, 4, 5];
    const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    answers.forEach((item, i) => {
        if ((person1[i % person1.length]) === item) answer[0]++;
        if ((person2[i % person2.length]) === item) answer[1]++;
        if ((person3[i % person3.length]) === item) answer[2]++;
    })
    
    const maxAnswer = Math.max(...answer)
    const result = [];
    answer.forEach((a, i) => {
        if (a === maxAnswer) result.push(i + 1)
    })
    
    return result;
}