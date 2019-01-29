function solution(n, s) {
  var answer = [];
  if (n > s) {
    return [-1];
  }

  for (let i = 0; i < n; i++) {
    const number = Math.floor(s/(n-i));
    answer.push(number);
    s = s - number;
  }
  console.log(answer);
  return answer;
}
solution(5, 124);

function solution1(n, s) {
  var answer = [];
  if (n > s) {
    return [-1];
  }

  for (let i = 0; i < n; i++) {
    const number = Math.round(s/(n-i));
    answer.push(number);
    s = s - number;
  }
  console.log(answer);
  return answer;
}
solution1(5, 124);

