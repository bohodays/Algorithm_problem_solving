function solution(a, b) {
    const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const weeks = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    const answer = weeks[(days.splice(0, a - 1).reduce((sum, num) => sum + num, 0) + b - 1) % 7]
    return answer;
}




