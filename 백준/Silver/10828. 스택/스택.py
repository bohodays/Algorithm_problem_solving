import sys

def push(n):
    return stack.append(n)

def size():
    print(len(stack))

def empty():
    if len(stack) == 0:
        print(1)
    else:
        print(0)

def top():
    if len(stack) != 0:
        print(stack[-1])
    else:
        print(-1)

stack = []
T = int(input())

for i in range(T):
    A = sys.stdin.readline().split()

    if A[0] == 'push':
        push(A[1])
    
    elif A[0] == 'pop':
        if len(stack) == 0:
            print(-1)
        else:
            print(stack.pop())

    elif A[0] == 'size':
        size()

    elif A[0] == 'empty':
        empty()

    elif A[0] == 'top':
        top()

