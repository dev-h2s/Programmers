public class Solution {
    public int solution(int[] array, int height) {
        int answer = 0;
        
// for-each
        for (int h : array) {
            if (h > height) {
                answer++;
            }
        }
//         for문 사용시
        // for (int i = 0; i < array.length; i++) {
        //     if (array[i] > height) {
        //         answer++;
        //     }
        
        return answer;
    }
}