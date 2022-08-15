# 2491 수열

N = int(input())
nums = list(map(int,input().split()))
ans = []

# 오름차순 검사
max_cnt = 1
cnt = 1
for i in range(len(nums)-1):
    if nums[i] <= nums[i+1]:
        cnt += 1
    else:
        cnt = 1
    if cnt > max_cnt:
        max_cnt = cnt

ans.append(max_cnt)

# 내림차순 검사
max_cnt = 1
cnt = 1
for i in range(len(nums)-1):
    if nums[i] >= nums[i+1]:
        cnt += 1
    else:
        cnt = 1
    if cnt >= max_cnt:
        max_cnt = cnt

ans.append(max_cnt)

print(max(ans))