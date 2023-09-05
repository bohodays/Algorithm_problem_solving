def solution(wallpaper):
    col = []
    row = []
    
    for i in range(len(wallpaper)):
        for j in range(len(wallpaper[0])):
            if wallpaper[i][j] == "#":
                col.append(i)
                row.append(j)
    
    return [min(col), min(row), max(col) + 1, max(row) + 1]