function solution(my_str, n) {
    my_str = my_str.split("").reverse();
    var answer = [];
    let temp = "";
    while (my_str.length) {
        temp += my_str.pop();
        if (temp.length === n) {
            answer.push(temp);
            temp = "";
        }
    }
    
    if (temp) {
        answer.push(temp)
    }
    
    return answer;
}