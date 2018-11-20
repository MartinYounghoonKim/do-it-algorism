function solution(n) {
  let a = 0;
  let b = 1;
  let temp = 0;
  for(let i = 1; i < n; i++) {
    temp = a % 1234567;
    a = b;
    b += temp % 1234567;
  }
  return b % 1234567;
}

solution(9);