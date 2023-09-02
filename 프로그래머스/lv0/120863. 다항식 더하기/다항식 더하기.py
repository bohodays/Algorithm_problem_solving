def solution(polynomial):
    x = 0
    natural = 0
    polynomial = polynomial.split()
    
    for item in polynomial:
        # x의 계수인 경우
        if "x" in item:
            # 초기화 안 된 경우
            if x == 0:
                # 계수가 1인 경우
                if len(item) == 1:
                    x = 1
                else:
                    x = int(item[0:-1])
            # 초기화 된 경우
            elif len(item) == 1:
                x += 1
            else:
                x += int(item[0:-1])
        # 상수항인 경우
        elif item != "+":
            # 초기화 안 된 경우
            if natural == 0:
                natural = int(item)
            # 초기화 된 경우
            else:
                natural += int(item)
        print(x, natural)

    if x and natural:
        if x == 1:
            return "x" + " + " + str(natural)
        else:
            return str(x) + "x" + " + " + str(natural)
    if x and not natural:
        if x == 1:
            return "x"
        else:
            return str(x) + "x"
    if not x and natural:
        return str(natural)
