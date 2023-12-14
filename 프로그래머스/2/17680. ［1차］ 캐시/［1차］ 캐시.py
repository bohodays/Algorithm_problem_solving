from collections import deque

def solution(cacheSize, cities):
    answer = 0
    cache_miss = 5
    cache_hit = 1
    cache = deque()
    
    if cacheSize == 0:
        return len(cities) * cache_miss
    
    for city in cities:
        city = city.upper()
        
        if city in cache:
            cache.remove(city)
            cache.append(city)
            answer += cache_hit
        else:
            if len(cache) < cacheSize:
                cache.append(city)
            else:
                cache.popleft()
                cache.append(city)
            answer += cache_miss

    return answer