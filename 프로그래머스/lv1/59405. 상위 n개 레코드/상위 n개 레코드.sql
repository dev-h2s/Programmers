-- 코드를 입력하세요
-- ROW_NUMBER() OVER 함수는 SQL에서 윈도우 함수 중 하나로, 결과 집합의 각 행에 번호를 할당하는 기능을 제공합니다. ROW_NUMBER() OVER 함수를 사용하면 특정 기준에 따라 행의 순서를 지정할 수 있습니다.
-- DATETIME을 기준으로 
-- 순위가 1인 레코드만 선택합니다
SELECT NAME 
FROM (
  SELECT NAME, ROW_NUMBER() OVER (ORDER BY DATETIME) AS rn
  FROM ANIMAL_INS 
)
WHERE rn = 1; 
