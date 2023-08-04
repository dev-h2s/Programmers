-- 코드를 입력하세요
SELECT HOUR(datetime) AS hour, COUNT(animal_id) AS count
FROM animal_outs
where hour(datetime) between 9 and 20
group by hour(datetime)
order by hour;
