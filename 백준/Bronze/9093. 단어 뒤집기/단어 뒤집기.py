import sys

T = int(input())

for _ in range(T):

    words = list(sys.stdin.readline().split()) 
    for i in words:
        print(i[::-1], end=" ")
    words.clear()
    print()