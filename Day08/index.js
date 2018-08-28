function solution(strings, n) {
    return strings.sort((a,b) => {
        if (a[n] === b[n]) {
            return a > b;
        } else {
            return a[n] > b[n];
        }
    });

}