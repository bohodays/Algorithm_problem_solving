# 1149 RGB거리

# 1. dp는 각 색상에 대하여 누적 최소값을 나타냅니다.
# 2. 2번째 값부터는 집이 연속된 색상을 가지지 말아야 한다. 따라서 빨간색 집의 dp는 현재 빨간색의
    # 집을 칠하는 비용과 이전의 초록색 집의 dp와 파란색 집의 dp 중 작은 값을 넣어준다.


N = int(input())

dp = []
for i in range(N):
    dp.append(list(map(int, input().split())))

# 0: 빨간색, 1: 초록색, 2: 파란색
for i in range(1, N):
    # 빨간색 집인 경우
    dp[i][0] = dp[i][0] + min(dp[i-1][1], dp[i-1][2])
    # 초록색 집인 경우
    dp[i][1] = dp[i][1] + min(dp[i-1][0], dp[i-1][2])
    # 파란색 집인 경우
    dp[i][2] = dp[i][2] + min(dp[i-1][0], dp[i-1][1])

print(min(dp[N-1]))