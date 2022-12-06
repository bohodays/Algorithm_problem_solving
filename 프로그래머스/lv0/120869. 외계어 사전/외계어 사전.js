function solution(spell, dic) {
  for (let i = 0; i < dic.length; i++) {
    let checkCount = 0;
    for (let j = 0; j < spell.length; j++) {
      if (dic[i].includes(spell[j])) {
        checkCount += 1;
      }
    }
    if (checkCount === spell.length) {
      return 1;
    }
  }
  return 2;
}
