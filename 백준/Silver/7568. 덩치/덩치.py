# 테스트 케이스 개수를 입력받는다.
N = int(input())

# 키와 몸무게 정보를 담을 리스트를 생성한다.
info_list = []

# 테스트 케이스 개수만큼 몸무게와 키를 리스트 형태로 저장한다.
for _ in range(N):
    info_list.append(list(map(int,input().split())))

# 이중 for문을 돌면서 등수를 출력한다.
for i in info_list:
    rank = 1
    for j in info_list:
        if i[0] < j[0] and i[1] < j[1]:
            rank += 1
    print(rank, end=" ")



