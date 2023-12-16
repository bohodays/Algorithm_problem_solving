def solution(str1, str2):
    answer = 0
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    alphabet += alphabet.lower()
    
    # str1 두 글자씩 끊어서 다중집합 만들기
    str1_array = []
    for i in range(len(str1) - 1):
        if (str1[i] in alphabet) and (str1[i + 1] in alphabet):
            str1_array.append((str1[i] + str1[i + 1]).upper())
            
    # str2 두 글자씩 끊어서 다중집합 만들기
    str2_array = []
    for i in range(len(str2) - 1):
        if (str2[i] in alphabet) and (str2[i + 1] in alphabet):
            str2_array.append((str2[i] + str2[i + 1]).upper())

    # 교집합 만들기
    AandB = []
    for item in str1_array:
        if item not in AandB:
            # 둘다 있으면 그 중 최소값
            if item in str2_array:
                AandB += [item for _ in range(min(str1_array.count(item), str2_array.count(item)))]
    
    # 합집합 만들기
    AorB = []
    for item in str1_array:
        if item not in AorB:
            if item in str2_array:
                AorB += [item for _ in range(max(str1_array.count(item), str2_array.count(item)))]
            else:
                AorB += [item for _ in range(str1_array.count(item))]
    for item in str2_array:
        if item not in AorB:
            if item in str1_array:
                AorB += [item for _ in range(max(str1_array.count(item), str2_array.count(item)))]
            else:
                AorB += [item for _ in range(str2_array.count(item))]

    if len(AandB) == 0 and len(AorB) == 0:
        return 65536
    return int((len(AandB) / len(AorB)) * 65536)