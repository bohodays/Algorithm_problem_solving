def solution(n, arr1, arr2):
    answer = []
    
    table1 = []
    table2 = []
    
    # 지도1 만들기
    for num in arr1:
        num = bin(num)[2:]
        num = "0" * (n - len(num)) + num
        table1.append(num)
        
    # 지도2 만들기
    for num in arr2:
        num = bin(num)[2:]
        num = "0" * (n - len(num)) + num
        table2.append(num)
    
    for i in range(n):
        tmp = ""
        for j in range(n):
            # 둘 중 하나라도 벽이면 벽
            if table1[i][j] == "1" or table2[i][j] == "1":
                tmp += "#"
            elif table1[i][j] == "0" and table2[i][j] == "0":
                tmp += " "
        answer.append(tmp)
    return answer