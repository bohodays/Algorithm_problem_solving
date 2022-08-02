T = int(input())

for _ in range(T):

    k = int(input())
    n = int(input())

    if k == 0:
        print(n)
    else:
        room_num = list(range(1, n+1))   # n호 까지 0층 만들기
        room_num_up = []
        for i in range(1, k+1):
            for j in range(1, n+1):
                room_num_up.append(sum(room_num[0:j]))
            room_num = room_num_up
            result = room_num_up.copy()
            room_num_up = []
        print(result[n-1])
