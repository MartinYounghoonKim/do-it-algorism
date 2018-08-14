function solution(s) {
    const stringLength = s.length;
    var answer = '';
    if ( stringLength % 2 === 0 ) {
        answer = s.slice((stringLength/2)-1, (stringLength/2) + 1);
    } else {
        answer = s[Math.floor(stringLength/2)];
    }

    return answer;
}
