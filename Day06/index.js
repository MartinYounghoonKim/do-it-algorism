function solution(arr) {
    var minimum = Math.min.apply(null, arr);
    var answer = arr.filter(v => v !== minimum);
    return answer.length === 0 ? [-1] : answer;
}

function solution (arr) {
    // 임의의 대상 선정
    var pivot = arr[2];
    var result = [];
    if (arr.length < 2) {
        // 비교 대상이 없는 경우는 -1
        result.push(-1);
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < pivot) {
                // 임의의 값보다 작으면 임의의 대상을 결과에 대입
                result.push(pivot);
                pivot = arr[i];
            } else if (arr[i] > pivot) {
                // 임의의 값보다 크면 해당 비교 대상값을 결과에 대입
                result.push(arr[i]);
            }
        }
    }

    return result;
}
solution([4,3,2,1,5]);
