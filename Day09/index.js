function solution (seoul) {
    var index = 0;
    for (let i = 0; i < seoul.length; i++ ) {
        if (seoul[i] === 'Kim') {
            index = i;
            break;
        }
    }
    return `김서방은 ${index}에 있다`;
}


function solution (seoul) {
    return `김서방은 ${seoul.indexOf('Kim')}에 있다`
}

solution(['seoul', 'Kim']);