class Solution {
    public int solution(int slice, int n) {
        int answer = 0;
        if(n>=1){
            answer += (n-1) /slice+1;
        }
        return answer;
    }
}