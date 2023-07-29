function solution(cacheSize, cities) {
    let answer = 0;
    
    const HIT = 1;
    const MISS = 5;
    
    // 캐시 사이즈가 0이면 캐시를 할 수 없으니 크기 * MISS를 반환한다.
    if (cacheSize === 0) return cities.length * MISS;
    
    const cache = [];
    
    cities.forEach((city) => {
        // 대소문자를 구준하지 않기 때문에 대문자로 통일해준다.
        const upperCity = city.toUpperCase();
        
        // 캐시에 현재 들어온 도시가 있는지 확인한다.
        const index = cache.indexOf(upperCity);
        
        // 일치하는 도시가 없으면 index는 -1이다.
        if (index === -1) {
            // 없으면 캐시 사이즈를 확인하고 사이즈를 초과 시
            // 제일 오래된 캐시를 삭제시켜준다.
            if (cache.length >= cacheSize) cache.shift();
            
            // MISS 시간을 더해준다.
            answer += MISS;
        } else {
            // 캐시에 있으면 새롭게 업데이트를 해주어야 하므로 기존 배열에서 삭제한다.
            cache.splice(index, 1);
            
            // HIT 시간을 더해준다.
            answer += HIT;
        }
        
        // 새로 들어온 도시를 캐시에 넣어준다.
        cache.push(upperCity);
    })
    
    return answer;
}