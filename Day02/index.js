function solution(arr) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (i-1 !== -1) {
            if (arr[i] !== arr[i-1]) {
                answer.push(arr[i]);
            }
        } else {
            answer.push(arr[i]);
        }
    }
    return answer;
}


function solution (arr) {
    return arr.filter((value, index) => value !== arr[index+1]);
}