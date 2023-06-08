function solution(n, k) {
    // let answer = n/10;
    let service =  parseInt(n/10);
    var answer = (n*12000+((k-service)*2000));
    return answer;
}