# [2, 6, 8, 14]
# -> 2 / [1, 3, 4, 7]

def solution(arr):
    maxValue = max(arr)
    count = 1
    
    while True:
        flag = False
        lcm = maxValue * count
        for num in arr:
            if (lcm % num != 0):
                count += 1
                flag = True
                break
        
        if not flag:
            return lcm
                
 