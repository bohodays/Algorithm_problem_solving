function solution(my_string, num1, num2) {
    var answer = '';
    my_string = [...my_string];
    const num1String = my_string[num1];
    const num2String = my_string[num2];
    my_string[num1] = num2String;
    my_string[num2] = num1String;
    return my_string.join("");
}