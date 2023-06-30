class Solution {
    public int solution(int n) {
        int answer = 0;
        if(n>=1){
            answer += (n-1) /7+1;
        }
        return answer;
    }
}