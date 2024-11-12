function solution(players, callings) {
    const nameRef = {};
    const rankRef = {};
    
    
    players.forEach((item, index) => {
        nameRef[item] = index;
        rankRef[index] = item;
    });


    callings.forEach((item) => {
        nameRef[item] -= 1;
        const saveItem = rankRef[nameRef[item]];
        rankRef[nameRef[item]] = item;
        nameRef[saveItem] += 1;
        rankRef[nameRef[saveItem]] = saveItem;
    })
    
    return Array(players.length).fill().map((item, index) => rankRef[index]);
}
