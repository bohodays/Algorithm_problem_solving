const onConvertMinute = (time) => {
    const [hour, min] = time.split(":");
    return +hour * 60 + +min;
}

function solution(book_time) {
    book_time = book_time.sort();
    
    const stack = [];
    book_time.forEach((item) => {
        const [start, end] = [onConvertMinute(item[0]), onConvertMinute(item[1])]
        
        let isNew = true;
        for (let i = 0; i < stack.length; i++) {
            if (start >= stack[i]) {
                stack[i] = end + 10;
                isNew = false;
                break;
            } 
        }
        
        if (isNew) stack.push(end + 10);

    })
    
    return stack.length;
}