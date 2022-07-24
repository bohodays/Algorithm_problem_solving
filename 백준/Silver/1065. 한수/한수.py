N = int(input())

if N < 100:
    print(N)
else:
    cnt = 99
    for j in range(100,N+1):
        num_list = list(str(j))
        for i in range(len(num_list)-2):
            if int(num_list[i]) - int(num_list[i+1]) == int(num_list[i+1]) - int(num_list[i+2]):
                cnt += 1
            else:
                break

    print(cnt)
