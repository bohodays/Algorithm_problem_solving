function solution(array, n) {
  array.sort((a,b) => a-b)
  const diffArray = array.map((num) => Math.abs(num-n))
  console.log(diffArray);
  return array[diffArray.indexOf(Math.min(...diffArray))];
}