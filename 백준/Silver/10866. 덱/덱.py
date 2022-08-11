from collections import deque
import sys

N = int(input())

arr = deque()

for _ in range(N):

    A = list(sys.stdin.readline().split())


    if A[0] == 'push_front':
        arr.appendleft(int(A[1]))
    
    elif A[0] == 'push_back':
        arr.append(int(A[1]))
    
    elif A[0] == 'pop_front':
        if len(arr) == 0:
            print(-1)
        else:
            print(arr.popleft())

    elif A[0] == 'pop_back':
        if len(arr) == 0:
            print(-1)
        else:
            print(arr.pop())
    
    elif A[0] == 'size':
        print(len(arr))
        

    elif A[0] == 'empty':
        if len(arr) == 0:
            print(1)
        else:
            print(0)

    elif A[0] == 'front':
        if len(arr) == 0:
            print(-1)
        else:   
            print(arr[0])

    elif A[0] == 'back':
        if len(arr) == 0:
            print(-1)
        else:   
            print(arr[-1])
    
    
    
    


