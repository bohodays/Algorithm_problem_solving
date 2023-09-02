def solution(dots):
    dots = sorted(dots)
    print(dots)
    width = abs(dots[0][1] - dots[1][1])
    height = abs(dots[2][0] - dots[0][0])
    
    return width * height