def solution(cacheSize, cities):
    answer = 0
    cache_hit = 1
    cache_miss = 5
    cache = []
    
    if cacheSize == 0: return len(cities) * cache_miss
    
    for city in cities:
        city = city.upper()
        
        # 캐시에 저장되어 있는지 확인
        # 캐시에 저장되어있다면
        if city in cache:
            index = cache.index(city)
            cache.pop(index)
            cache.append(city)
            answer += cache_hit
        # 캐시에 저장되어있지 않다면
        else:
            # 캐시에 공간이 남아있다면
            if len(cache) < cacheSize:
                cache.append(city)
            else:    
                cache.pop(0)
                cache.append(city)
            answer += cache_miss
            
    return answer