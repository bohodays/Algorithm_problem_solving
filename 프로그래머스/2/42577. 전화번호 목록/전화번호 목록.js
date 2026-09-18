function solution(phone_book) {
    let answer = true;
    
    // 사전순 정렬
    phone_book.sort();
    
    for (let i = 0; i < phone_book.length - 1; i++) {
        const [currentItem, nextItem] = [phone_book[i], phone_book[i + 1]];
        
        if (nextItem.startsWith(currentItem)) {
            answer = false;
            break;
        }
    }
    
    return answer;
}