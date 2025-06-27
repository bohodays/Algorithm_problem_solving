function solution(s) {
    let answer = '';
    
    let temp = ""
    for (const word of s) {
        if (word !== " ") {
            temp += word;
        } else {
            if (temp.length > 0) {
                answer += temp[0].toUpperCase() + temp.slice(1).toLowerCase();
                temp = "";
            }
            answer += word;
        }
    }
    
    if (temp.length > 0) {
        answer += temp[0].toUpperCase() + temp.slice(1).toLowerCase();
    }
    
    return answer;
}