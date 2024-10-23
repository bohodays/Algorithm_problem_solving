function solution(s) {
    s = s.split(" ");
    const answer = [];
    s.forEach((item) => {
        let temp = "";
        for (let i = 0; i < item.length; i++) {
            if (i % 2 === 0) {
                temp += item[i].toUpperCase();
            } else {
                temp += item[i].toLowerCase();
            }
        }
        answer.push(temp);
    })
    return answer.join(" ");
}