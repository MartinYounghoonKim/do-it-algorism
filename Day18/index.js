function solution(arr) {
  let answer = 0;
  let gcd = getGCD(arr[0], arr[1]);
  console.log(gcd);
  for (let i = 2; i < arr.length; i++) {
    gcd = getGCD(gcd, arr[i]);
  }
  console.log(gcd);
  return answer;
}

solution([12, 24, 6, 8, 30]);

function getGCD (a, b) {
  const min = a > b ? b : a;
  const max = a > b ? a : b;
  if (min % max === 0) {
    return min;
  } else {
    return min % max;
  }
}