def solution(n):
    answer = 0
#     2부터 n 까지의 범위에서 2 씩 증가
    for num in range(2, n+1, 2):
        answer += num
    return answer