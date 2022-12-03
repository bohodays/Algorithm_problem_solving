function solution(n) {
  const checkNumber = Math.sqrt(n);
  if (checkNumber === parseInt(checkNumber)) {
    return 1
  }
  return 2
}