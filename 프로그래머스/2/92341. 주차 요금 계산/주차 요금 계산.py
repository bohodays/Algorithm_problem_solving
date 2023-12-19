import math

def solution(fees, records):
    answer = []
    # 기본 시간, 기본 요금, 단위 시간, 단위 요금
    default_time, default_fee, unit_time, unit_fee = fees

    time_records = {}
    for record in records:
        record = record.split()
        time, car_num, history_type = record
        time = list(map(int, time.split(":")))
        time = time[0] * 60 + time[1]
        if car_num in time_records:
            time_records[car_num].append([time, car_num, history_type])
        else:
            time_records[car_num] = [[time, car_num, history_type]]

    # 입차된 후에 출차된 내역이 없으면 23:59 추가
    for item in time_records:
        if len(time_records[item]) % 2 == 1:
            time_records[item].append([1439, item, "OUT"])
        
    # 요금 계산
    for record in time_records:
        total_time = 0
        for i in range(0, len(time_records[record]) - 1, 2):
            in_record = time_records[record][i]
            out_record = time_records[record][i + 1]
            total_time += out_record[0] - in_record[0]
        total_fee = 0
        if total_time > default_time:
            total_fee = default_fee + math.ceil((total_time - default_time) / unit_time) * unit_fee
        else:
            total_fee = default_fee
        answer.append([record, total_fee])
    
    answer = sorted(answer, key = lambda x : x[0])
    answer = [item[1] for item in answer]

    return answer