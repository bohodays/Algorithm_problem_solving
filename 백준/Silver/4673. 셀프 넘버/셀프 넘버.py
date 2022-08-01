def self_number():
    num = set(range(1,10001))
    gen_num = set()

    for i in range(1, 10001):
        for j in str(i):
            i += int(j)
        gen_num.add(i)
    
    return num - gen_num

ans = sorted(self_number())

for i in ans:
    print(i)