def solution(arr1, arr2):
    answer = []
    
    for i in range(len(arr1)):
        tmp_array = []
        for j in range(len(arr2[0])):
            tmp_value = 0
            for k in range(len(arr1[0])):
                tmp_value += arr1[i][k] * arr2[k][j]
            tmp_array.append(tmp_value)
        answer.append(tmp_array)
        
    return answer