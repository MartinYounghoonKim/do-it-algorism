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

  return answer;
}
solution(35, 179);
