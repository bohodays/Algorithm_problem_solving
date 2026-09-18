function solution(cacheSize, cities) {
    let answer = 0;
    const CACHE_HIT = 1;
    const CACHE_MISS = 5;
    
    // 캐시 사이즈가 0이면 캐시를 할 수 없으니 크기 * MISS 반환
    if (cacheSize === 0) return cities.length * CACHE_MISS;
    
    const test = [1, 2, 3, 4];
    
    const cache = [];
    cities.forEach((city) => {
        city = city.toUpperCase();
        const index = cache.findIndex((i) => i === city);
        // cache hit
        if (index !== -1) {
            cache.splice(index, 1);
            answer += CACHE_HIT;
        }
        // cache miss
        else {
            answer += CACHE_MISS;
            // 캐시크기가 full이 아닌 경우
            if (cache.length === cacheSize) cache.shift();
        }
        
        cache.push(city);
    })
    
    return answer;
}