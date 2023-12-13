def solution(arr1, arr2):
    answer = []
    
    for i in range(len(arr1)):
        tmp = []
        for j in range(len(arr2[0])):
            tmp_result = 0
            for k in range(len(arr1[0])):
                tmp_result += arr1[i][k] * arr2[k][j]
            tmp.append(tmp_result)
        answer.append(tmp)
        
    return answer