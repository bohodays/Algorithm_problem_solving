import sys
input=sys.stdin.readline
import math

def solve(s,i):
    global cnt
    if i==len(string):
        cnt+=1
        if cnt==n:
            return s
    else:
        for k in string:
            if k not in s:
                res=solve(s+k,i+1)
                if res:
                    return res
    return
    
while(True):
    cnt=0
    inn=input().split()
    
    if len(inn)!=2:
        break
    string,n=inn
    n=int(n)
    many=math.factorial(len(string))
    if n>many:
        print(string,n,'= No permutation')
        continue
    print(string,n,'=',solve('',0))