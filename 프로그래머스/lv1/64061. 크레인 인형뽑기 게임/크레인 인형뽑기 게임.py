def removeItem(array, item):
    n = len(array)
    for i in range(n):
            if array[i][item - 1] != 0:
                removedItem = array[i][item - 1]
                array[i][item - 1] = 0
                return [array, removedItem]
    return [array, False]

def solution(board, moves):
    answer = 0
    
    stack = []
    
    for target in moves:
        [board, result] = removeItem(board, target)
        if result != False:
            if not len(stack):
                stack.append(result)
            else:
                if stack[-1] == result:
                    answer += 2
                    stack.pop()
                else:
                    stack.append(result)
            
    return answer