-- 코드를 입력하세요
SELECT A.NAME, A.DATETIME
FROM ANIMAL_INS AS A
LEFT JOIN ANIMAL_OUTS AS B ON A.ANIMAL_ID = B.ANIMAL_ID
WHERE B.ANIMAL_ID IS NULL
ORDER BY A.DATETIME
LIMIT 3


# SELECT INS.NAME, INS.DATETIME
# FROM ANIMAL_INS INS
# LEFT OUTER JOIN  ANIMAL_OUTS OUTS
# ON INS.ANIMAL_ID = OUTS.ANIMAL_ID
# WHERE OUTS.ANIMAL_ID IS NULL
# ORDER BY INS.DATETIME 
# LIMIT 3;