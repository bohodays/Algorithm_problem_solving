def solution(id_pw, db):
    answer = ''
    id, password = id_pw[0], id_pw[1]
    
    for check in db:
        if id == check[0]:
            if password == check[1]:
                return "login"
            if password != check[1]:
                return "wrong pw"
    return "fail"