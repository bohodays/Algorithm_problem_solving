A = list(str(input()))
B = list(str(input()))

sol = int(A[0])*100+int(A[1])*10+int(A[2])

print(sol * int(B[2]))
print(sol * int(B[1]))
print(sol * int(B[0]))
print((sol * int(B[2])) + (sol * int(B[1]) * 10) + (sol * int(B[0]) * 100))
