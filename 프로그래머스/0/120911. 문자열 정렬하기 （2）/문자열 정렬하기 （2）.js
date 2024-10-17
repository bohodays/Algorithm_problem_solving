function solution(my_string) {
    my_string = my_string.toLowerCase().split("").sort();
    return my_string.join("");
}