import sys

T = int(input())

queue = []
for _ in range(T):

    A = sys.stdin.readline().split()

    # push
    if A[0] == 'push':
        queue.append(A[1])
    
    # pop
    elif A[0] == 'pop':
        if len(queue) == 0:
            print(-1)
        else:
            print(queue.pop(0))
    
    # size
    elif A[0] == 'size':
        print(len(queue))

    # empty
    elif A[0] == 'empty':
        if len(queue) == 0:
            print(1)
        else:
            print(0)
    
    # front
    elif A[0] == 'front':
        if len(queue) == 0:
            print(-1)
        else:
            print(queue[0])
            
    # back    
    elif A[0] == 'back':
        if len(queue) == 0:
            print(-1)
        else:
            print(queue[-1])