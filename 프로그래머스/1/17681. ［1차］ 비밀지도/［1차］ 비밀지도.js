function solution(n, arr1, arr2) {
    const answer = [];
    arr1 = arr1.map((item) => "0".repeat(n - item.toString(2).length) + item.toString(2));
    arr2 = arr2.map((item) => "0".repeat(n - item.toString(2).length) + item.toString(2));
    
    for (let i = 0; i < n; i++) {
        let result = "";
        for (let j = 0; j < n; j++) {
            if (arr1[i][j] === "1" || arr2[i][j] === "1") {
                result += "#"
            } else {
                result += " "
            }
        }
        answer.push(result)
    }
    
    return answer;
}