-- 코드를 입력하세요
-- DISTINCT NAME을 한뒤에 카운트로 덮기
SELECT COUNT(DISTINCT NAME) AS count 
FROM ANIMAL_INS WHERE NAME IS NOT NULL;