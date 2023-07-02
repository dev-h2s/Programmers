function solution(array, height) {
    var answer = 0;
    for (var i = 0; i < array.length; i++) {
        var h = array[i];
        if (h > height) {
            answer += 1;
        }
    }
    return answer;
}