def solution(str1, str2):
    answer = 0
    # 영문자인지 테스트 하기 위한 변수
    str_test = "abcdefghijklmnopqrstuvwxyz"
    str_test += str_test.upper()
    
    # 대소문자를 구분하지 않기 때문에 두 문자열을 대문자화시킨다
    str1 = str1.upper()
    str2 = str2.upper()
    

    # 두 글자씩 끊어서 오브젝트 만들기
    str1_obj = {}
    for i in range(0, len(str1) - 1):
        # 영문자만 유효하기 때문에 이에 대한 처리를 해준다.
        if str1[i] in str_test and str1[i + 1] in str_test:
            item = str1[i] + str1[i + 1]
            if item in str1_obj:
                str1_obj[item] += 1
            else:
                str1_obj[item] = 1
    str2_obj = {}
    for i in range(0, len(str2) - 1):
        # 영문자만 유효하기 때문에 이에 대한 처리를 해준다.
        if str2[i] in str_test and str2[i + 1] in str_test:
            item = str2[i] + str2[i + 1]
            if item in str2_obj:
                str2_obj[item] += 1
            else:
                str2_obj[item] = 1
    
    # 교집합 찾기
    number_A_And_B = 0
    for item in str1_obj:
        if item in str2_obj:
            number_A_And_B += min(str1_obj[item], str2_obj[item])
            
    # 합집합 찾기
    number_A_Or_B = 0
    for item in str1_obj:
        if item in str2_obj:
            number_A_Or_B += max(str1_obj[item], str2_obj[item])
            del str2_obj[item]
        else:
            number_A_Or_B += str1_obj[item]
    for item in str2_obj:
        number_A_Or_B += str2_obj[item]
    
    if number_A_Or_B == 0:
        return 65536
    
    return int(number_A_And_B / number_A_Or_B * 65536)