function solution(a, b) {
    const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const weeks = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    return weeks[(days.map((item, index) => index < (a - 1) ? item : 0).reduce((sum, num) => sum + num) + b - 1) % 7];
}