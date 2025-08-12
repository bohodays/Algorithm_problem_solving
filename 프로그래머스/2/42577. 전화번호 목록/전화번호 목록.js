function solution(phone_book) {
    // 사전순 정렬
    phone_book = phone_book.sort();
    
    for (let i = 0; i < phone_book.length - 1; i++) {
        const [currentItem, nextItem] = [phone_book[i], phone_book[i + 1]];
        if (currentItem === nextItem.slice(0, currentItem.length)) return false;
    }
    
    return true;
}