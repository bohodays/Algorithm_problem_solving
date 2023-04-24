function solution(nums) {
  let ans = 0;

  // 소수인지 판별하는 함수
  const isPrimeNumber = (number) => {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let target = nums[i] + nums[j] + nums[k];
        if (isPrimeNumber(target)) {
          ans++;
        }
      }
    }
  }

  return ans;
}