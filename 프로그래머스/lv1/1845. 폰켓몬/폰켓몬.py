def solution(nums):
    n = len(nums)
    nums = set(nums)
    return  n / 2 if len(nums) > n / 2 else len(nums)