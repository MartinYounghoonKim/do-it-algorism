function solution(arr) {
    var minimum = Math.min.apply(null, arr);
    var answer = arr.filter(v => v !== minimum);
    return answer.length === 0 ? [-1] : answer;
}