function solution(s) {
    const answer = [];
    
    const formattedS = s.slice(2, s.length - 2).split("},{").map((i) => i.split(',').map((j) => Number(j)));
    const sortedS = formattedS.sort((a, b) => a.length - b.length)
    sortedS.forEach((row) => {
        row.forEach((item) => {
            if (!answer.includes(item)) answer.push(item)
        })
    })
    
    return answer;
}