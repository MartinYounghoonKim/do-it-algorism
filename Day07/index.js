function solution(n) {
    var result = String(n)
        .split('')
        .sort((a, b) => b - a)
        .reduce((val, total, index) => (val + total), 0);
    return parseInt(result);
}

function solution(n) {
    var result = String(n)
        .split('')
        .sort((a, b) => b - a)
        .join('');
    return parseInt(result);
}
solution(118372);