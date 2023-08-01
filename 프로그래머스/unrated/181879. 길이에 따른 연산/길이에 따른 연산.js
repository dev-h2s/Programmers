function solution(num_list) {
    var answer = (num_list.length <11? 1:0);
    
    for(var i=0; i<num_list.length; i++){
        if(num_list.length>=11){
            answer+=num_list[i];
        }
        else{
            answer*=num_list[i];
        }
    }
    return answer;
}