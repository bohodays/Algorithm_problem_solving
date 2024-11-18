function solution(friends, gifts) {
    let answer = 0;
    const giveGiftRef = {};
    const takeGiftRef = {};
    const giftIndex = {};
    
    friends.forEach((item) => {
        giveGiftRef[item] = {};
        takeGiftRef[item] = {};
    })
    
    gifts.forEach((item) => {
        const [give, take] = item.split(" ");
        giveGiftRef[give][take] = giveGiftRef[give][take] ? giveGiftRef[give][take] + 1 : 1;
        takeGiftRef[take][give] = takeGiftRef[take][give] ? takeGiftRef[take][give] + 1 : 1;
    })
    
    // 선물지수 계산
    friends.forEach((item) => {
        const giveIndex = Object.values(giveGiftRef[item]).reduce((sum, num) => sum + num, 0);
        const takeIndex = Object.values(takeGiftRef[item]).reduce((sum, num) => sum + num, 0);
        giftIndex[item] = giveIndex - takeIndex;
    })
    
    friends.forEach((targetItem, index) => {
        let count = 0;
        const givenPerson = giveGiftRef[targetItem];
          const takenPerson = takeGiftRef[targetItem];
        
        for (const person of friends) {
            const giveCount = givenPerson[person] || 0;
            const takeCount = takenPerson[person] || 0;
            
            if (giveCount > takeCount) count += 1;
            else if (giveCount === takeCount && giftIndex[targetItem] > giftIndex[person]) count += 1;
        }
        answer = Math.max(answer, count);
    })
    
    return answer;
}