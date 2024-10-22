function solution(s) {
    s = s.split("");
    if (s.length === 4 || s.length === 6) {
        s = s.filter((item) => isNaN(item))
        if (s.length) return false;
        else return true
    }
    return false;
}