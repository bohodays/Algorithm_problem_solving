n = input()

gene_num = []

# 1부터 입력받은 수까지 루프문을 돌린다.
for i in range(1,int(n)):
    # 루프문을 돌리는 수를 일단 저장해둔다.
    gene_num.append(i)
    # 생성자의 조건에 해당하는지 확인한다.
    for j in str(i):
        i += int(j)
    # 생성자의 조건에 부합하면 루프를 계속 진행시킨다.
    if i == int(n):
        continue
    # 생성자의 조건에 부합하지 않으면 위에서 저장했던 수를 리스트에서 제거한다.
    else:
        gene_num.pop()

# 생성자 리스트에서 가장 작은 수를 출력한다.
if len(gene_num) == 0:
    print(0)
else:
    print(min(gene_num))