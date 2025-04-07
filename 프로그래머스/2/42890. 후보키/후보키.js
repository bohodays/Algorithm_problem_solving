function solution(relation) {
    const n = relation[0].length;
    
    const result = [];
    const indexResult = [];
    const visited = Array(n).fill(false);
    const dfs = (items, visited, result, indexResult, arr, indexArr, lastIndex) => {
        if (arr.length) {
            result.push(arr.join(""));
            indexResult.push(indexArr.join(""));
        }
            
        
        if (arr.length === items.length) {
            return;
        }
        
        for (let i = 0; i < n; i++) {
            if (!visited[i] && i >= lastIndex) {
                visited[i] = true;
                arr.push(items[i]);
                indexArr.push(i);
                dfs(items, visited, result, indexResult, arr, indexArr, i);
                indexArr.pop();
                arr.pop();
                visited[i] = false;
            }
        }
    }
    
    let flag = false;
    for (let i = 0; i < relation.length; i++) {
        const visited = Array(n).fill(false);
        const tmp = [];
        const indexTmp = [];
        dfs(relation[i], visited, tmp, indexTmp, [], [], 0);
        result.push(tmp);
        if (!flag) {
            indexResult.push(indexTmp)
            flag = true;
        }

    }
    
    const isPossible = [];
    const isImpossible = [];
    for (let i = 0; i < result[0].length; i++) {
        const tmp = [];
        for (let j = 0; j < result.length; j++) {
            tmp.push(result[j][i]);
        }
        if (tmp.length === [...new Set(tmp)].length) {
            isPossible.push(indexResult[0][i]);
        } else {
            isImpossible.push(indexResult[0][i]);
        }
    }
    
    const dfs2 = (items, visited, result, arr, lastIndex) => {
        if (arr.length) {
            result.push(arr.join(""))
        }
        
        for (let i = 0; i < items.length; i++) {
            if (!visited[i] && i >= lastIndex) {
                visited[i] = true;
                arr.push(items[i]);
                dfs2(items, visited, result, arr, i);
                arr.pop();
                visited[i] = false;
            }
        }
    }
    
    
    const answer = isPossible.filter((item) => {
        const splitItem = item.split("");
        const result = [];
        const visited = Array(splitItem.length).fill(false);
        dfs2(splitItem, visited, result, [], 0);
 
        if (result.length === 1) {
            return true;
        } else {
            let flag = true;
            result.forEach((check) => {
                if (check !== item) {
                    if (!isImpossible.includes(check)) {
                        flag = false;
                    }
                }
            })
            
            return flag;
        }
        
    })



    return answer.length;
}