function solution(num1, num2) {
// Math.trunc: 주어진 숫자의 소수 부분을 제거하고 정수 부분만 반환합니다. 즉, 소수점 아래를 버립니다. 예를 들어, Math.trunc(3.14159)의 결과는 3입니다.

// Math.floor: 주어진 숫자의 소수 부분을 제거하고 정수 부분만 반환합니다. 다만, Math.floor는 항상 내림을 수행합니다. 즉, 소수점 아래가 존재할 때는 내림을 수행하고, 음수일 경우에는 더 작은 정수 쪽으로 내림을 수행합니다. 예를 들어, Math.floor(3.14159)의 결과는 3입니다. Math.floor(-3.14159)의 결과도 -4입니다.
    return Math.trunc(num1/num2*1000);
}