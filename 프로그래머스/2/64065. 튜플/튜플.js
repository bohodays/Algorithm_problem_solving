function solution(s) {
    const answer = [];
    s = s.slice(1, s.length - 2).split("},").map((items) => {
        return items.slice(1).split(",").map((item) => +item)
    }).sort((a, b) => a.length - b.length);
    
    for (const items of s) {
        for (const item of items) {
            if (!answer.includes(item)) answer.push(item);   
        }

    }
    return answer;
}