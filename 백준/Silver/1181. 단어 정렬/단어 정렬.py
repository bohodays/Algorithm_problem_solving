import sys

# 테스크케이스 개수를 입력받는다.
T = int(sys.stdin.readline())

# 단어들을 담을 리스트를 생성한다.
words = []

# 단어들을 입력받으면서 중복을 제거한다. sys.stdin.readline()은 받은 입력 뒤에 \n을 추가함으로 주의!!!
# 그래서 strip()함수로 \n을 제거해준다.
for _ in range(T):
    word = sys.stdin.readline().strip()
    if word not in words:
        words.append(word)

# 문자에 sorted()를 쓰면 알파벳 순서대로 정렬한다.
words = sorted(words)

# sorted()함수의 두번째 인자인 key를 써서 원하는 함수로 정렬할 수 있다.
words = sorted(words, key=len)

# 결과를 출력한다.
for i in words:
    print(i)
