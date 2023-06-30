def solution(n):
    answer = 0
    if n>=1:
        answer+= int((n-1) / 7+1)
    return answer