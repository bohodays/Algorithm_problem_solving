def solution(id_list, report, k):
    answer = []
    report = list(set(report))
    # id를 키로하여 신고한 아이디를 값으로 가지는 오브젝트
    target_obj = {}
    # id별 신고당한 횟수를 카운팅하는 오브젝트
    count_obj = {}
    
    for item in report:
        me, you = item.split(" ")
        
        if me in target_obj:
            target_obj[me].append(you)
        else:
            target_obj[me] = [you]
            
        if you in count_obj:
            count_obj[you] += 1
        else:
            count_obj[you] = 1
    
    reported_users = [i for i in count_obj if count_obj[i] >= k]
    # print(target_obj, count_obj)
    # print(reported_users)
    for i in id_list:
        tmp = 0
        if i in target_obj:
            for j in target_obj[i]:
                if j in reported_users:
                    tmp += 1
            answer.append(tmp)
        else:
            answer.append(tmp)
    return answer