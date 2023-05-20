function solution(players, callings) {
    const answer = [];
    
    const record = {};
    players.forEach((item, idx) => record[item] = idx);
    
    callings.forEach((item) => {
        const currentIdx = record[item];
        const prevIdx = record[item] - 1;
        
        players[currentIdx] = players[prevIdx];
        players[prevIdx] = item;
        
        record[item] = prevIdx;
        record[players[currentIdx]] = currentIdx;
    })
    
    return players;
}