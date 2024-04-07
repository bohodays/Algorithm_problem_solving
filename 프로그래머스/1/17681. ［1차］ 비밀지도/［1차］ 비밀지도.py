def solution(n, arr1, arr2):
    answer = []
    table1 = []
    table2 = []
    
    # 지도1 만들기
    for num in arr1:
        convertValue = bin(num)[2:]
        table1.append("0" * (n - len(convertValue)) + convertValue)
        
    # 지도2 만들기
    for num in arr2:
        convertValue = bin(num)[2:]
        table2.append("0" * (n - len(convertValue)) + convertValue)
    
    for i in range(n):
        tmp = ""
        for j in range(n):
            if (table1[i][j] == "1" or table2[i][j] == "1"):
                tmp += "#"
            else:
                tmp += " "
        answer.append(tmp)
        
    return answer