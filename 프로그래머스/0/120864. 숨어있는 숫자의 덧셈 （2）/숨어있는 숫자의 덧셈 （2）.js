function solution(my_string) {
    let tempValue = "";
    for (const str of my_string) {
        if (isNaN(str)) {
            tempValue += " ";
        } else {
            tempValue += str;
        }
    }
    const answer = tempValue.split(" ").map((item) => Number(item)).reduce((sum, num) => sum + num);
    return answer;
}