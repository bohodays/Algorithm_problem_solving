function solution(my_string) {
    my_string = my_string.split(" ");
    let answer = Number(my_string.shift(0));
    for (let i = 0; i < my_string.length; i++) {
        const check = my_string[i];
        if (!isNaN(check)) {
            answer += Number(check);
        } else {
            if (check === "-") {
                my_string[i + 1] = "-" + my_string[i + 1];
            }
        }
    }
    return answer;
}