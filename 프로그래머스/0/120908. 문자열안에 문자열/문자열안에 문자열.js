function solution(str1, str2) {
    const check = str1.replace(str2, "");
    return str1.length === check.length ? 2 : 1;
}