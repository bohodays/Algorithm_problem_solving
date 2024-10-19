function solution(id_pw, db) {
    const check1 = db.filter((item) => item[0] === id_pw[0] && item[1] === id_pw[1]);
    if (check1.length) return "login";
    const check2 = db.filter((item) => item[0] === id_pw[0]);
    if (check2.length) return "wrong pw";
    return "fail";
}