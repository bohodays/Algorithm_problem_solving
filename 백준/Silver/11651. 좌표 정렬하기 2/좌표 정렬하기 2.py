import sys

N = int(sys.stdin.readline())

# 입력받은 좌표를 넣을 리스트 생성
num_list = []

# 입력받은 좌표들을 x와 y를 바꾸어 num_list에 추가한다.
for _ in range(N):
    x, y = map(int, sys.stdin.readline().split())
    num_list.append([y, x])

# num_list를 오름차순으로 정렬한다. sorted()함수를 쓰면 2차원 리스트도 정렬된다.
num_list = sorted(num_list)

# 원상태로 출력하기 위해 다시 x와 y를 바꾸어 결과를 출력한다.
for i in num_list:
    print(i[1], i[0])