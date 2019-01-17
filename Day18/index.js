function solution(arr) {
  let gcd = 0;
  let length = arr.length;
  let flag = 0;
  do {
    gcd = getICM(arr[flag], arr[flag+1]);
    flag++;
  } while (flag < length - 1);

  console.log(gcd);
  var answer = 0;
  return answer;
}
solution([4,7]);

function getGCD (a, b) {
  console.log(b % a);
  return a % b === 0 ? b : a % b;
}

function getICM (a, b) {
  return a * b / getGCD(a, b);
}