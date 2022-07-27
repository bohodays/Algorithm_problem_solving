N = input()

cro_list = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

result = []

for i in cro_list:
    if i == 'dz=':
        cnt = N.count(i)
        result.append((cnt * 2))
    elif i == 'z=':
        cnt = N.count(i)
        cnt1 = N.count('dz=')
        result.append(cnt-cnt1)    
    else:
        cnt = N.count(i)
        result.append(cnt)
        
ans = len(N) - sum(result)

print(ans)