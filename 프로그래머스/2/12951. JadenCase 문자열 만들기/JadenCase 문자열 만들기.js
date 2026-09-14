function solution(s) {
    let answer = '';
    let result = '';
    for (const item of s) {
        if (item !== ' ') result += item;
        else {
            if (result.length) {
                answer += result[0].toUpperCase() + result.slice(1).toLowerCase();
                result = '';
            }
            answer += item;
        }
    }
    
    if (result.length) {
        answer += result[0].toUpperCase() + result.slice(1).toLowerCase();
    }
    
    return answer;
}