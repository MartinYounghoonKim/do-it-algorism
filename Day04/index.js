function solution(a, b) {
    var answer = 0;
    var min = a > b ? b : a;
    var max = a > b ? a : b;

    for (; min <= max; min++) {
        answer = answer + min;
    }
    return answer;
}

function solution (a,b) {
    return (a+b)*(Math.abs(a-b)+1)/2;
}