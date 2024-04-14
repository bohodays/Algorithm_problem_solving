def solution(data, ext, val_ext, sort_by):
    checkToIndex = {
        "code": 0,
        "date": 1,
        "maximum": 2,
        "remain": 3
    }
    
    data = sorted([item for item in data if item[checkToIndex[ext]] < val_ext], key = lambda x : x[checkToIndex[sort_by]])
    
    return data