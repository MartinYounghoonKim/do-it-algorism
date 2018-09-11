function solution(arr) {
    var minimum = Math.min.apply(null, arr);
    var answer = arr.filter(v => v !== minimum);
    return answer.length === 0 ? [-1] : answer;
}

function solution (arr) {
    var minimum = arr[0];
    var minimumIndex = 0;

    if (arr.length < 2) {
        return [-1];
    }
    for(var i =1; i < arr.length; i ++ ) {
        if (arr[i] < minimum) {
            minimum = arr[i];
            minimumIndex = i;
        }
    }
    arr.splice(minimumIndex, 1)
    return arr;
}
solution([4,3,2,1]);
