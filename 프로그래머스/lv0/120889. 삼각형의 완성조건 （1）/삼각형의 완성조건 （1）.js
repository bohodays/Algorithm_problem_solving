function solution(sides) {
  const maxNumberIndex = sides.indexOf(Math.max(...sides));
  const maxNumber = sides.splice(maxNumberIndex, 1);
  if (maxNumber < sides.reduce((total, number) => total + number)) {
    return 1
  }
  return 2
}