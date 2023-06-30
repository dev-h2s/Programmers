function solution(n) {
    var answer = 0;
    if(n>=1){
    answer += parseInt((n-1)/7) +1;
    } 
    return answer;
}