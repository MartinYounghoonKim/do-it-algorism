function solution(s){
    var result = 0;
    for (let i = 0; i < s.length; i++) {
        if (result === 0 && s[i] === ')') {
            return false;
        }
        if (s[i] === '(') {
            result++;
        } else {
            result--;
        }
    }

    return result === 0;
}

solution('()))(())');