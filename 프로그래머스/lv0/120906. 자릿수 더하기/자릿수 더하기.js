function solution(n) {
  const numberToArray = String(n).split('').map((string) => Number(string))
  return numberToArray.reduce((total, number) => total + number);
}