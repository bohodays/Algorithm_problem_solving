function solution(num_list, n) {
    const answer = [];
    let temp = [];
    num_list.forEach((item) => {
        temp.push(item);
        if (temp.length === n) {
            answer.push(temp);
            temp = [];
        }
    })
    return answer;
}