function solution(nums) {
    const arrayToSet = [...new Set(nums)];
    const limit = nums.length / 2;    
    return arrayToSet.length > limit ? limit : arrayToSet.length;
}