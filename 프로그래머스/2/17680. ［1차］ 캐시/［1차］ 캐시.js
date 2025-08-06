function solution(cacheSize, cities) {
    let answer = 0;
    const CACHE_HIT = 1;
    const CACHE_MISS = 5;
    const cache = [];
    
    // 캐시 사이즈가 0이면 캐시를 할 수 없으니 크기 * MISS 반환
    if (cacheSize === 0) return cities.length * CACHE_MISS;
    
    cities.forEach((city) => {
        // 캐싱되어있는지 확인
        city = city.toUpperCase();
        
        const targetIndex = cache.indexOf(city);
        
        // 캐싱되어있는 경우
        if (targetIndex !== -1) {
            cache.splice(targetIndex, 1);
            answer += CACHE_HIT;
        } 
        // 캐싱되어있지 않은 경우
        else {
            answer += CACHE_MISS;
            
            // 캐싱공간이 full인 경우
            if (cache.length >= cacheSize) {
                cache.shift();
            }
        }
        
                    
        cache.push(city);
    })
    
    
    return answer;
}