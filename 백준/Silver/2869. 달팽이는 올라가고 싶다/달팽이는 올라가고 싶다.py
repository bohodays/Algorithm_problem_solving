import math

A, B, V = map(int,input().split())

ans = math.ceil((V - A) / (A - B))

print(ans+1)