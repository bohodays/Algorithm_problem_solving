N = int(input())

end_number = 666
cnt = 0

while True:
    if '666' in str(end_number):
        cnt += 1
    
    if cnt == N:
        print(end_number)
        break
    end_number += 1

