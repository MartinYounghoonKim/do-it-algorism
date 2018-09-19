function solution(a, b) {
    let result = [];
    for (let i = 1; i <= b; i++) {
        result.push(a * i);
    }
    return result;
}

solution(2, 5);
solution(4, 3);
solution(-4, 2);
