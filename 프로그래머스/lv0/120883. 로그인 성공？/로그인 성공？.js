function solution(id_pw, db) {
  var answer = '';
  for (const dbItem of db) {
    if (id_pw[0] === dbItem[0]) {
      if (id_pw[1] === dbItem[1]) {
        return "login"
      } else {
        return "wrong pw"
      }
    }
  }
  return "fail";
}