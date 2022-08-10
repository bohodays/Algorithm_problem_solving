import sys

def draw_star(n):
    if n == 1:
        return ['*']
    
    Stars = draw_star(n//3)
    L = []

    for star in Stars:
        L.append(star*3)
    for star in Stars:
        L.append(star + ' '*(n//3) + star)
    for star in Stars:
        L.append(star*3)
    
    return L

N=int(input())
ans = draw_star(N)
for i in ans:
    print(i)

